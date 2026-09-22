import dataclasses
import json
import re
import typing

from generator.ir import (
    ArrayType,
    EnumRef,
    Field,
    LiteralType,
    MapType,
    Model,
    ModelRef,
    NamedUnion,
    NullableType,
    PrimitiveType,
    TypeRef,
    UnionDiscriminator,
    UnionRef,
    UnionType,
)

type Direction = typing.Literal["input", "output"]

_IDENTIFIER_PATTERN = re.compile(r"^[A-Za-z_$][A-Za-z0-9_$]*$")


@dataclasses.dataclass(frozen=True)
class RenderContext:
    """Controls how IR types are rendered as Effect schemas or TypeScript types."""

    direction: Direction
    models: dict[str, Model]
    prefix: str = ""
    recursive: frozenset[str] = frozenset()
    suspended: frozenset[str] = frozenset()

    def with_prefix(self, prefix: str) -> "RenderContext":
        return dataclasses.replace(self, prefix=prefix)

    def with_direction(self, direction: Direction) -> "RenderContext":
        return dataclasses.replace(self, direction=direction)

    def with_suspended(self, suspended: frozenset[str]) -> "RenderContext":
        return dataclasses.replace(self, suspended=suspended)


def property_key(name: str) -> str:
    return name if _IDENTIFIER_PATTERN.match(name) else json.dumps(name)


def literal_value(value: str | int | float | bool | None) -> str:
    return json.dumps(value)


def known_discriminator_values(
    discriminator: UnionDiscriminator,
    variants: list[TypeRef],
    models: dict[str, Model],
) -> list[str]:
    if discriminator.mapping:
        return sorted(discriminator.mapping.keys())
    values: set[str] = set()
    for variant in variants:
        if not isinstance(variant, ModelRef) or variant.name not in models:
            continue
        for field in models[variant.name].fields:
            if (
                field.name == discriminator.property_name
                and isinstance(field.type, LiteralType)
                and isinstance(field.type.value, str)
            ):
                values.add(field.type.value)
    return sorted(values)


def schema_expr(type_ref: TypeRef, ctx: RenderContext) -> str:
    """Render an IR type as an Effect `Schema` expression."""
    if isinstance(type_ref, NullableType):
        return f"Schema.NullOr({schema_expr(type_ref.inner, ctx)})"

    if isinstance(type_ref, PrimitiveType):
        if type_ref.type == "string":
            if type_ref.format == "date-time":
                return (
                    "Schema.DateTimeUtcFromString"
                    if ctx.direction == "output"
                    else "DateTimeInput"
                )
            return "Schema.String"
        if type_ref.type in ("integer", "number"):
            return "Schema.Number"
        if type_ref.type == "boolean":
            return "Schema.Boolean"
        return "Schema.Unknown"

    if isinstance(type_ref, LiteralType):
        if type_ref.value is None:
            return "Schema.Null"
        return f"Schema.Literal({literal_value(type_ref.value)})"

    if isinstance(type_ref, EnumRef):
        name = f"{ctx.prefix}{type_ref.name}"
        return f"openEnum({name})" if ctx.direction == "output" else name

    if isinstance(type_ref, (ModelRef, UnionRef)):
        return _reference(type_ref.name, ctx)

    if isinstance(type_ref, UnionType):
        return union_expr(type_ref.variants, type_ref.discriminator, ctx)

    if isinstance(type_ref, ArrayType):
        return f"Schema.Array({schema_expr(type_ref.items, ctx)})"

    if isinstance(type_ref, MapType):
        return f"Schema.Record(Schema.String, {schema_expr(type_ref.value_type, ctx)})"

    return "Schema.Unknown"


def union_expr(
    variants: list[TypeRef],
    discriminator: UnionDiscriminator | None,
    ctx: RenderContext,
) -> str:
    rendered = list(dict.fromkeys(schema_expr(variant, ctx) for variant in variants))
    if len(rendered) == 0:
        return "Schema.Unknown"
    members = ", ".join(rendered)
    if discriminator is not None and ctx.direction == "output":
        known = known_discriminator_values(discriminator, variants, ctx.models)
        return (
            f"openUnion([{members}], {literal_value(discriminator.property_name)}, "
            f"[{', '.join(literal_value(value) for value in known)}])"
        )
    if len(rendered) == 1:
        return rendered[0]
    return f"Schema.Union([{members}])"


def struct_expr(model: Model, ctx: RenderContext) -> str:
    """Render the schema expression for a model body."""
    fields = [_field_expr(field, ctx) for field in model.fields]
    struct = "Schema.Struct({" + "".join(fields) + "\n})"
    if model.additional_properties is None:
        return struct
    if not model.fields:
        return f"Schema.Record(Schema.String, {schema_expr(model.additional_properties, ctx)})"
    # The rest record also validates declared keys, so it must accept every field type.
    rest_value = union_expr(
        [model.additional_properties, *(field.type for field in model.fields)],
        None,
        ctx,
    )
    rest = f"Schema.Record(Schema.String, {rest_value})"
    return f"Schema.StructWithRest({struct}, [{rest}])"


def ts_type(type_ref: TypeRef, ctx: RenderContext, *, encoded: bool = False) -> str:
    """Render an IR type as a TypeScript type matching the schema's `Type` (or `Encoded`) side."""
    return _ts_type(type_ref, ctx, encoded=encoded, in_union=False)


def interface_fields(model: Model, ctx: RenderContext, *, encoded: bool) -> str:
    lines: list[str] = []
    for field in model.fields:
        optional = "" if field.required else "?"
        lines.append(
            f"  readonly {property_key(field.name)}{optional}: "
            f"{ts_type(field.type, ctx, encoded=encoded)};"
        )
    if model.additional_properties is not None:
        lines.append(
            "  readonly [key: string]: "
            f"{ts_type(model.additional_properties, ctx, encoded=encoded)}"
            f"{' | undefined' if model.fields else ''};"
        )
    return "\n".join(lines)


def type_dependencies(type_ref: TypeRef | None) -> set[str]:
    """Collect the model and named union names a type depends on."""
    if type_ref is None:
        return set()
    if isinstance(type_ref, (ModelRef, UnionRef)):
        return {type_ref.name}
    if isinstance(type_ref, NullableType):
        return type_dependencies(type_ref.inner)
    if isinstance(type_ref, ArrayType):
        return type_dependencies(type_ref.items)
    if isinstance(type_ref, MapType):
        return type_dependencies(type_ref.value_type)
    if isinstance(type_ref, UnionType):
        names: set[str] = set()
        for variant in type_ref.variants:
            names |= type_dependencies(variant)
        return names
    return set()


def model_dependencies(model: Model) -> set[str]:
    names: set[str] = set()
    for field in model.fields:
        names |= type_dependencies(field.type)
    names |= type_dependencies(model.additional_properties)
    return names


def union_dependencies(union: NamedUnion) -> set[str]:
    names: set[str] = set()
    for variant in union.variants:
        names |= type_dependencies(variant)
    return names


def uses_date_time(type_ref: TypeRef | None) -> bool:
    if type_ref is None:
        return False
    if isinstance(type_ref, PrimitiveType):
        return type_ref.type == "string" and type_ref.format == "date-time"
    if isinstance(type_ref, NullableType):
        return uses_date_time(type_ref.inner)
    if isinstance(type_ref, ArrayType):
        return uses_date_time(type_ref.items)
    if isinstance(type_ref, MapType):
        return uses_date_time(type_ref.value_type)
    if isinstance(type_ref, UnionType):
        return any(uses_date_time(variant) for variant in type_ref.variants)
    return False


def _reference(name: str, ctx: RenderContext) -> str:
    qualified = f"{ctx.prefix}{name}"
    if name in ctx.suspended:
        return (
            f"Schema.suspend((): Schema.Codec<{qualified}, {qualified}Encoded> => "
            f"{qualified})"
        )
    return qualified


def _field_expr(field: Field, ctx: RenderContext) -> str:
    schema = schema_expr(field.type, ctx)
    if not field.required:
        schema = f"Schema.optionalKey({schema})"
    description = (
        f"\n  /** {_single_line(field.description)} */" if field.description else ""
    )
    return f"{description}\n  {property_key(field.name)}: {schema},"


def _single_line(description: str) -> str:
    return " ".join(description.split()).replace("*/", "*\\/")


def _ts_type(
    type_ref: TypeRef, ctx: RenderContext, *, encoded: bool, in_union: bool
) -> str:
    if isinstance(type_ref, NullableType):
        inner = _ts_type(type_ref.inner, ctx, encoded=encoded, in_union=True)
        return f"({inner} | null)" if in_union else f"{inner} | null"

    if isinstance(type_ref, PrimitiveType):
        if type_ref.type == "string":
            if type_ref.format == "date-time" and not encoded:
                if ctx.direction == "output":
                    return "DateTime.Utc"
                return (
                    "(DateTime.Utc | string)" if in_union else "DateTime.Utc | string"
                )
            return "string"
        if type_ref.type in ("integer", "number"):
            return "number"
        if type_ref.type == "boolean":
            return "boolean"
        return "unknown"

    if isinstance(type_ref, LiteralType):
        return literal_value(type_ref.value)

    if isinstance(type_ref, EnumRef):
        name = f"{ctx.prefix}{type_ref.name}"
        if ctx.direction == "output":
            open_type = "string" if encoded else f"{name} | (string & {{}})"
            return f"({open_type})" if in_union else open_type
        return name

    if isinstance(type_ref, (ModelRef, UnionRef)):
        qualified = f"{ctx.prefix}{type_ref.name}"
        if not encoded:
            return qualified
        if type_ref.name in ctx.recursive:
            return f"{qualified}Encoded"
        return f'(typeof {qualified})["Encoded"]'

    if isinstance(type_ref, UnionType):
        variants = list(
            dict.fromkeys(
                _ts_type(variant, ctx, encoded=encoded, in_union=True)
                for variant in type_ref.variants
            )
        )
        if type_ref.discriminator is not None and ctx.direction == "output":
            if encoded:
                variants.append("{ readonly [key: string]: unknown }")
            else:
                variants.append(
                    f"{ctx.prefix}UnknownVariant<"
                    f"{literal_value(type_ref.discriminator.property_name)}>"
                )
        if not variants:
            return "unknown"
        union = " | ".join(variants)
        return f"({union})" if in_union and len(variants) > 1 else union

    if isinstance(type_ref, ArrayType):
        items = _ts_type(type_ref.items, ctx, encoded=encoded, in_union=False)
        return f"ReadonlyArray<{items}>"

    if isinstance(type_ref, MapType):
        value = _ts_type(type_ref.value_type, ctx, encoded=encoded, in_union=False)
        return f"{{ readonly [key: string]: {value} }}"

    return "unknown"
