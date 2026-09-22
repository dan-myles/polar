import pytest

from effect.types import RenderContext, schema_expr, struct_expr, ts_type
from generator.ir import (
    ArrayType,
    EnumRef,
    Field,
    LiteralType,
    MapType,
    Model,
    ModelRef,
    NullableType,
    PrimitiveType,
    TypeRef,
    UnionDiscriminator,
    UnionType,
)

STRING = PrimitiveType(kind="primitive", type="string")
DATE_TIME = PrimitiveType(kind="primitive", type="string", format="date-time")
INTEGER = PrimitiveType(kind="primitive", type="integer")

OUTPUT = RenderContext(direction="output", models={})
INPUT = RenderContext(direction="input", models={})

PRICE = UnionType(
    kind="union",
    variants=[
        ModelRef(kind="model", name="Fixed"),
        ModelRef(kind="model", name="Free"),
    ],
    discriminator=UnionDiscriminator(
        property_name="type", mapping={"free": "Free", "fixed": "Fixed"}
    ),
)


@pytest.mark.parametrize(
    ("type_ref", "ctx", "expected"),
    [
        (STRING, OUTPUT, "Schema.String"),
        (DATE_TIME, OUTPUT, "Schema.DateTimeUtcFromString"),
        (DATE_TIME, INPUT, "DateTimeInput"),
        (INTEGER, OUTPUT, "Schema.Number"),
        (PrimitiveType(kind="primitive", type="boolean"), OUTPUT, "Schema.Boolean"),
        (PrimitiveType(kind="primitive", type="unknown"), OUTPUT, "Schema.Unknown"),
        (LiteralType(kind="literal", value="fixed"), OUTPUT, 'Schema.Literal("fixed")'),
        (LiteralType(kind="literal", value=None), OUTPUT, "Schema.Null"),
        (
            NullableType(kind="nullable", inner=STRING),
            OUTPUT,
            "Schema.NullOr(Schema.String)",
        ),
        (ArrayType(kind="array", items=STRING), OUTPUT, "Schema.Array(Schema.String)"),
        (
            MapType(kind="map", value_type=INTEGER),
            OUTPUT,
            "Schema.Record(Schema.String, Schema.Number)",
        ),
        (EnumRef(kind="enum", name="Kind"), INPUT, "Kind"),
        (EnumRef(kind="enum", name="Kind"), OUTPUT, "openEnum(Kind)"),
        (
            ModelRef(kind="model", name="Product"),
            OUTPUT.with_prefix("Models."),
            "Models.Product",
        ),
        (
            UnionType(
                kind="union",
                variants=[INTEGER, PrimitiveType(kind="primitive", type="number")],
            ),
            OUTPUT,
            "Schema.Number",
        ),
        (PRICE, INPUT, "Schema.Union([Fixed, Free])"),
        (PRICE, OUTPUT, 'openUnion([Fixed, Free], "type", ["fixed", "free"])'),
    ],
)
def test_schema_expr(type_ref: TypeRef, ctx: RenderContext, expected: str) -> None:
    assert schema_expr(type_ref, ctx) == expected


def test_schema_expr_suspends_recursive_references() -> None:
    ctx = OUTPUT.with_suspended(frozenset({"Filter"}))

    assert schema_expr(ModelRef(kind="model", name="Filter"), ctx) == (
        "Schema.suspend((): Schema.Codec<Filter, FilterEncoded> => Filter)"
    )


@pytest.mark.parametrize(
    ("type_ref", "ctx", "encoded", "expected"),
    [
        (DATE_TIME, OUTPUT, False, "DateTime.Utc"),
        (DATE_TIME, INPUT, False, "DateTime.Utc | string"),
        (DATE_TIME, OUTPUT, True, "string"),
        (NullableType(kind="nullable", inner=STRING), OUTPUT, False, "string | null"),
        (ArrayType(kind="array", items=STRING), OUTPUT, False, "ReadonlyArray<string>"),
        (EnumRef(kind="enum", name="Kind"), INPUT, False, "Kind"),
        (EnumRef(kind="enum", name="Kind"), OUTPUT, False, "Kind | (string & {})"),
        (
            ModelRef(kind="model", name="Product"),
            OUTPUT,
            True,
            '(typeof Product)["Encoded"]',
        ),
        (PRICE, INPUT, False, "Fixed | Free"),
        (PRICE, OUTPUT, False, 'Fixed | Free | UnknownVariant<"type">'),
    ],
)
def test_ts_type(
    type_ref: TypeRef, ctx: RenderContext, encoded: bool, expected: str
) -> None:
    assert ts_type(type_ref, ctx, encoded=encoded) == expected


def test_struct_expr_optional_fields_and_quoted_keys() -> None:
    model = Model(
        name="Product",
        fields=[
            Field(name="id", type=STRING, required=True),
            Field(
                name="x-name", type=STRING, required=False, description="Display name."
            ),
        ],
    )

    assert struct_expr(model, OUTPUT) == (
        "Schema.Struct({\n"
        "  id: Schema.String,\n"
        "  /** Display name. */\n"
        '  "x-name": Schema.optionalKey(Schema.String),\n'
        "})"
    )


def test_struct_expr_rest_accepts_declared_field_types() -> None:
    model = Model(
        name="EventMetadataInput",
        fields=[
            Field(
                name="_cost",
                type=ModelRef(kind="model", name="CostMetadataInput"),
                required=False,
            )
        ],
        additional_properties=STRING,
    )

    assert struct_expr(model, INPUT) == (
        "Schema.StructWithRest(Schema.Struct({\n"
        "  _cost: Schema.optionalKey(CostMetadataInput),\n"
        "}), [Schema.Record(Schema.String, Schema.Union([Schema.String, CostMetadataInput]))])"
    )


def test_struct_expr_additional_properties_only() -> None:
    model = Model(name="Metadata", fields=[], additional_properties=STRING)

    assert struct_expr(model, OUTPUT) == "Schema.Record(Schema.String, Schema.String)"
