import type { DateTime } from "effect";
import { Schema } from "effect";
import { DateTimeInput, openEnum, openUnion } from "../internal/schema";
import type { UnknownVariant } from "../internal/schema";

export type { UnknownVariant } from "../internal/schema";

{% for enum in enums %}
{{ (enum.description or enum.name) | jsdoc }}
export const {{ enum.name }} = Schema.Literals([{% for value in enum.values %}{{ value.value | json }}{% if not loop.last %}, {% endif %}{% endfor %}]);
export type {{ enum.name }} = typeof {{ enum.name }}.Type;

{% endfor %}
{% for declaration in declarations %}
{{ declaration }}

{% endfor %}
