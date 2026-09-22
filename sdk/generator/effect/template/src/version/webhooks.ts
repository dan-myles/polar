import { Schema } from "effect";
import { DateTimeInput, openEnum, openUnion } from "../internal/schema";
import { makeVerify } from "../Webhooks";
import * as Models from "./models";

{% for model, struct in webhooks %}
{{ (model.description or model.name) | jsdoc }}
export class {{ model.name }} extends Schema.Opaque<{{ model.name }}>()({{ struct }}) {}

{% endfor %}
/**
 * Every webhook payload Polar may send. Unknown event types decode to `UnknownVariant<"type">`.
 */
export const WebhookPayload = openUnion(
  [{% for model, _ in webhooks %}{{ model.name }}{% if not loop.last %}, {% endif %}{% endfor %}],
  "type",
  [{% for event_type in webhook_event_types %}{{ event_type }}{% if not loop.last %}, {% endif %}{% endfor %}],
);
export type WebhookPayload = typeof WebhookPayload.Type;

/**
 * Verify a raw Polar webhook request and decode its payload.
 */
export const validateEvent = makeVerify(WebhookPayload);
