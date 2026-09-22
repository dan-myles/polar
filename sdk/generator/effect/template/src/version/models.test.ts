import { Schema } from "effect";
import { describe, expect, it } from "vitest";

import examples from "./__fixtures__/examples.json";
import * as Models from "./models";
import { WebhookPayload } from "./webhooks";

const schemas = Models as unknown as Record<string, Schema.Codec<unknown, unknown>>;

describe("models decode and re-encode generated examples", () => {
  it.each(Object.entries(examples.models))("%s", (name, example) => {
    const schema = schemas[name];
    expect(schema).toBeDefined();
    const decoded = Schema.decodeUnknownSync(schema!)(example);
    expect(() => Schema.encodeUnknownSync(schema!)(decoded)).not.toThrow();
  });
});

describe("webhook payloads decode into their event type", () => {
  it.each(Object.entries(examples.webhooks))("%s", (_, example) => {
    const decoded = Schema.decodeUnknownSync(WebhookPayload)(example);
    expect(decoded.type).toBe((example as { type: string }).type);
  });
});
