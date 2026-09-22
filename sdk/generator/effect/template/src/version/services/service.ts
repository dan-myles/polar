import type { DateTime, Effect } from "effect";
import type { Stream } from "effect";
import { Schema } from "effect";
import type { PolarClient, PolarRequestError } from "{{ runtime_import }}PolarClient";
import { paginate, request } from "{{ runtime_import }}PolarClient";
import { DateTimeInput, openEnum, openUnion } from "{{ runtime_import }}internal/schema";
import * as Errors from "{{ version_import }}errors";
import * as Models from "{{ version_import }}models";

{% for sub_service in service.services %}
export * as {{ sub_service.name }} from "./{{ sub_service.name | snake }}";
{% endfor %}

{% for method in methods %}
/**
{% if method.description %}
{{ method.description | jsdoc | replace("/**\n", "") | replace("\n */", "") }}
{% endif %}
{% if method.deprecated %}
 * @deprecated
{% endif %}
 */
{% if method.binding == method.name %}export {% endif %}const {{ method.binding }} = ({{ method.signature }}): Effect.Effect<{{ method.return_type }}, {% if method.error_union %}Errors.{{ method.error_union }} | {% endif %}PolarRequestError, PolarClient> =>
  request({{ method.request }});
{% if method.binding != method.name %}
export { {{ method.binding }} as {{ method.name }} };
{% endif %}

{% if method.stream_name %}
/**
{% if method.description %}
{{ method.description | jsdoc | replace("/**\n", "") | replace("\n */", "") }}
 *
{% endif %}
 * Streams every item across all pages.
 */
export const {{ method.stream_name }} = ({{ method.signature }}): Stream.Stream<{{ method.stream_item_type }}, {% if method.error_union %}Errors.{{ method.error_union }} | {% endif %}PolarRequestError, PolarClient> =>
  paginate({% if "query" in method.call_arguments %}query?.page ?? 1{% else %}1{% endif %}, (page) => {{ method.binding }}({{ method.stream_arguments }}));

{% endif %}
{% endfor %}
