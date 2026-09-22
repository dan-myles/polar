import { Data } from "effect";
import type * as Models from "./models";

{% for method, errors in methods %}
{% for error in errors %}
{{ (error.description or ("Error with status code " ~ error.status_code)) | jsdoc }}
export class {{ error.name }} extends Data.TaggedError({{ error.tag | json }})<{
  readonly status: {{ error.status_code }};
{% if error.body_type %}
  readonly body: {{ error.body_type }};
{% endif %}
}> {}

{% endfor %}
export type {{ method.error_union }} ={% for error in errors %} | {{ error.name }}{% endfor %};

{% endfor %}
