import { Effect } from "effect";
import { describe, expect, it } from "vitest";

import examples from "./__fixtures__/examples.json";
import { validateEvent } from "./webhooks";

const secret = "whsec_" + btoa("polar-webhook-secret");

const sign = async (id: string, timestamp: number, body: string): Promise<string> => {
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode("polar-webhook-secret"),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const signature = await crypto.subtle.sign(
    "HMAC",
    key,
    new TextEncoder().encode(`${id}.${timestamp}.${body}`),
  );
  return `v1,${btoa(String.fromCharCode(...new Uint8Array(signature)))}`;
};

const request = async (payload: unknown, timestamp = Math.floor(Date.now() / 1000)) => {
  const body = JSON.stringify(payload);
  return {
    body,
    headers: {
      "webhook-id": "msg_1",
      "webhook-timestamp": String(timestamp),
      "webhook-signature": await sign("msg_1", timestamp, body),
    },
  };
};

const [firstEvent] = Object.values(examples.webhooks) as Array<{ type: string }>;

describe("validateEvent", () => {
  it("verifies and decodes a signed payload", async () => {
    const { body, headers } = await request(firstEvent);
    const event = await Effect.runPromise(validateEvent(body, headers, secret));
    expect(event.type).toBe(firstEvent!.type);
  });

  it("accepts a Headers instance", async () => {
    const { body, headers } = await request(firstEvent);
    const event = await Effect.runPromise(validateEvent(body, new Headers(headers), secret));
    expect(event.type).toBe(firstEvent!.type);
  });

  it("rejects an invalid signature", async () => {
    const { body, headers } = await request(firstEvent);
    const error = await Effect.runPromise(
      Effect.flip(validateEvent(body, headers, "whsec_" + btoa("other-secret"))),
    );
    expect(error._tag).toBe("WebhookVerificationError");
  });

  it("rejects a stale timestamp", async () => {
    const { body, headers } = await request(firstEvent, Math.floor(Date.now() / 1000) - 3600);
    const error = await Effect.runPromise(Effect.flip(validateEvent(body, headers, secret)));
    expect(error._tag).toBe("WebhookVerificationError");
  });

  it("decodes unknown event types into an unknown variant", async () => {
    const payload = { type: "something.new", timestamp: "2026-01-01T00:00:00Z", data: {} };
    const { body, headers } = await request(payload);
    const event = await Effect.runPromise(validateEvent(body, headers, secret));
    expect(event).toEqual({ type: "~unknown", raw: payload });
  });
});
