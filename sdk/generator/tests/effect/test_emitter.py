import pathlib

from effect.emitter import EffectEmitter, _order_declarations
from generator.ir import (
    APIIR,
    APIVersion,
    ArrayType,
    ErrorResponse,
    Field,
    HTTPMethod,
    Method,
    Model,
    ModelRef,
    PrimitiveType,
    Server,
    Service,
    UnionType,
)

STRING = PrimitiveType(kind="primitive", type="string")


def _api(**overrides: object) -> APIVersion:
    fields: dict[str, object] = {
        "version": "2026-10",
        "servers": [Server(environment="production", url="https://api.example.com")],
        "services": [],
        "input_models": [],
        "output_models": [],
        "webhooks": [],
        "enums": [],
        "input_unions": [],
        "output_unions": [],
    }
    fields.update(overrides)
    return APIVersion.model_validate(fields)


def test_order_declarations_puts_dependencies_first_and_detects_cycles() -> None:
    filter_model = Model(
        name="Filter",
        fields=[
            Field(
                name="clauses",
                type=ArrayType(
                    kind="array",
                    items=UnionType(
                        kind="union",
                        variants=[
                            ModelRef(kind="model", name="FilterClause"),
                            ModelRef(kind="model", name="Filter"),
                        ],
                    ),
                ),
                required=True,
            )
        ],
    )
    clause = Model(
        name="FilterClause", fields=[Field(name="key", type=STRING, required=True)]
    )
    meter = Model(
        name="Meter",
        fields=[
            Field(
                name="filter", type=ModelRef(kind="model", name="Filter"), required=True
            )
        ],
    )
    api = _api(output_models=[meter, filter_model, clause])

    ordered, recursive = _order_declarations(
        api, {m.name: m for m in [meter, filter_model, clause]}
    )

    assert [node.name for node in ordered] == ["FilterClause", "Filter", "Meter"]
    assert recursive == {"Filter"}


def test_emit_service_with_errors(tmp_path: pathlib.Path) -> None:
    product = Model(
        name="Product", fields=[Field(name="id", type=STRING, required=True)]
    )
    not_found = Model(
        name="ResourceNotFound",
        fields=[Field(name="detail", type=STRING, required=True)],
    )
    api = _api(
        output_models=[product, not_found],
        services=[
            Service(
                name="Products",
                services=[],
                methods=[
                    Method(
                        name="delete",
                        operation_id="products:delete",
                        http_method=HTTPMethod.DELETE,
                        path="/v1/products/{id}",
                        path_params=[],
                        query_params=[],
                        response_type="none",
                        errors=[
                            ErrorResponse(
                                name="ResourceNotFound",
                                status_code=404,
                                response_type="json",
                                type=ModelRef(kind="model", name="ResourceNotFound"),
                            ),
                            ErrorResponse(
                                name="Unauthorized",
                                status_code=401,
                                response_type="none",
                            ),
                        ],
                    )
                ],
            )
        ],
    )

    EffectEmitter(APIIR(versions=[api]), "1.0.0").emit(tmp_path)

    service = (tmp_path / "src/2026-10/services/products.ts").read_text()
    assert "const delete_ = (): Effect.Effect<void," in service
    assert "export { delete_ as delete };" in service
    assert (
        "errors: { 404: [[Models.ResourceNotFound, Errors.ProductsDeleteResourceNotFoundError]], "
        "401: [[null, Errors.ProductsDeleteUnauthorizedError]] }"
    ) in service

    errors = (tmp_path / "src/2026-10/errors.ts").read_text()
    assert (
        'export class ProductsDeleteResourceNotFoundError extends Data.TaggedError("ResourceNotFound")'
        in errors
    )
    assert 'extends Data.TaggedError("Unauthorized")' in errors

    models = (tmp_path / "src/2026-10/models.ts").read_text()
    assert "export class Product extends Schema.Opaque<Product>()(" in models
