import typing

from generator.ir import (
    APIVersion,
    ArrayType,
    EnumRef,
    LiteralType,
    MapType,
    Model,
    ModelRef,
    NamedUnion,
    NullableType,
    PrimitiveType,
    TypeRef,
    UnionRef,
    UnionType,
)

_MAX_DEPTH = 6


class ExampleBuilder:
    """Builds example payloads for models from field examples, synthesizing values where missing."""

    def __init__(self, api: APIVersion, models: dict[str, Model]) -> None:
        self.models = models
        self.enums = {enum.name: enum for enum in api.enums}
        self.unions: dict[str, NamedUnion] = {
            union.name: union for union in api.input_unions + api.output_unions
        }

    def model(self, model: Model, depth: int = 0) -> dict[str, typing.Any]:
        example: dict[str, typing.Any] = {}
        for field in model.fields:
            if field.has_example and not _is_structured(field.type):
                example[field.name] = field.example
            else:
                example[field.name] = self.value(field.type, depth + 1)
        return example

    def value(self, type_ref: TypeRef, depth: int) -> typing.Any:
        if isinstance(type_ref, NullableType):
            if depth > _MAX_DEPTH:
                return None
            return self.value(type_ref.inner, depth)
        if isinstance(type_ref, PrimitiveType):
            return _primitive(type_ref)
        if isinstance(type_ref, LiteralType):
            return type_ref.value
        if isinstance(type_ref, EnumRef):
            enum = self.enums.get(type_ref.name)
            return enum.values[0].value if enum and enum.values else "value"
        if isinstance(type_ref, ModelRef):
            model = self.models.get(type_ref.name)
            if model is None:
                return {}
            return self.model(model, depth)
        if isinstance(type_ref, UnionRef):
            union = self.unions.get(type_ref.name)
            if union is None or not union.variants:
                return None
            return self.value(union.variants[0], depth)
        if isinstance(type_ref, UnionType):
            variants = [
                variant
                for variant in type_ref.variants
                if not (isinstance(variant, LiteralType) and variant.value is None)
            ] or type_ref.variants
            return self.value(variants[0], depth) if variants else None
        if isinstance(type_ref, ArrayType):
            if depth > _MAX_DEPTH:
                return []
            return [self.value(type_ref.items, depth + 1)]
        if isinstance(type_ref, MapType):
            if depth > _MAX_DEPTH:
                return {}
            return {"key": self.value(type_ref.value_type, depth + 1)}
        return None


def _is_structured(type_ref: TypeRef) -> bool:
    """Field-level examples are only trusted for scalar fields."""
    if isinstance(type_ref, NullableType):
        return _is_structured(type_ref.inner)
    return isinstance(type_ref, (ModelRef, UnionRef, UnionType, ArrayType, MapType))


def _primitive(type_ref: PrimitiveType) -> typing.Any:
    if type_ref.type == "string":
        if type_ref.format == "date-time":
            return "2026-01-01T00:00:00.000Z"
        if type_ref.format == "date":
            return "2026-01-01"
        if type_ref.format in ("uuid", "uuid4"):
            return "00000000-0000-4000-8000-000000000000"
        if type_ref.format == "email":
            return "user@example.com"
        if type_ref.format == "uri":
            return "https://example.com"
        return "string"
    if type_ref.type in ("integer", "number"):
        return 1
    if type_ref.type == "boolean":
        return True
    return None
