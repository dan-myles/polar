import type { SchemaError } from "effect/Schema";

import { Clock, Data, Effect, Redacted, Schema } from "effect";

const webhookToleranceSeconds = 5 * 60;

export class WebhookVerificationError extends Data.TaggedError("WebhookVerificationError")<{
  readonly message: string;
  readonly cause?: unknown;
}> {}

export type WebhookHeaders =
  | Headers
  | Readonly<Record<string, string | ReadonlyArray<string> | undefined>>;

const normalizeHeaders = (headers: WebhookHeaders): Record<string, string> => {
  const normalized: Record<string, string> = {};
  if (typeof Headers !== "undefined" && headers instanceof Headers) {
    headers.forEach((value, key) => {
      normalized[key.toLowerCase()] = value;
    });
    return normalized;
  }
  for (const [key, value] of Object.entries(headers as Record<string, unknown>)) {
    if (typeof value === "string") {
      normalized[key.toLowerCase()] = value;
    } else if (Array.isArray(value) && typeof value[0] === "string") {
      normalized[key.toLowerCase()] = value[0];
    }
  }
  return normalized;
};

const fail = (message: string, cause?: unknown) =>
  Effect.fail(new WebhookVerificationError({ message, cause }));

/**
 * Verify a Standard Webhooks signature and return the raw body text.
 */
export const verifySignature = (
  body: string | Uint8Array,
  headers: WebhookHeaders,
  secret: Redacted.Redacted<string> | string,
): Effect.Effect<string, WebhookVerificationError> =>
  Effect.gen(function* () {
    const bodyText = typeof body === "string" ? body : new TextDecoder().decode(body);
    const secretValue = typeof secret === "string" ? secret : Redacted.value(secret);
    if (secretValue.length === 0) {
      return yield* fail("Secret can't be empty");
    }

    const normalized = normalizeHeaders(headers);
    const webhookId = normalized["webhook-id"];
    const webhookTimestamp = normalized["webhook-timestamp"];
    const webhookSignature = normalized["webhook-signature"];
    if (!webhookId || !webhookTimestamp || !webhookSignature) {
      return yield* fail("Missing required headers");
    }

    const timestamp = Number(webhookTimestamp);
    if (!Number.isFinite(timestamp)) {
      return yield* fail("Invalid signature headers");
    }
    const now = (yield* Clock.currentTimeMillis) / 1000;
    if (timestamp < now - webhookToleranceSeconds) {
      return yield* fail("Message timestamp too old");
    }
    if (timestamp > now + webhookToleranceSeconds) {
      return yield* fail("Message timestamp too new");
    }

    const signedContent = new TextEncoder().encode(
      `${webhookId}.${Math.floor(timestamp)}.${bodyText}`,
    );
    const matched = yield* Effect.tryPromise({
      try: () => matchesSignature(signedContent, webhookSignature, secretValue),
      catch: (cause) =>
        new WebhookVerificationError({ message: "Failed to verify signature", cause }),
    });
    if (!matched) {
      return yield* fail("No matching signature found");
    }
    return bodyText;
  });

/**
 * Build a verifier that checks the signature and decodes the payload with `schema`.
 */
export const makeVerify =
  <S extends Schema.Codec<any, any>>(schema: S) =>
  (
    body: string | Uint8Array,
    headers: WebhookHeaders,
    secret: Redacted.Redacted<string> | string,
  ): Effect.Effect<S["Type"], WebhookVerificationError | SchemaError> =>
    Effect.flatMap(verifySignature(body, headers, secret), (text) =>
      Effect.flatMap(
        Effect.try({
          try: () => JSON.parse(text) as unknown,
          catch: (cause) =>
            new WebhookVerificationError({ message: "Failed to parse webhook payload", cause }),
        }),
        (json) => Schema.decodeUnknownEffect(schema)(json) as Effect.Effect<S["Type"], SchemaError>,
      ),
    );

const matchesSignature = async (
  signedContent: Uint8Array<ArrayBuffer>,
  header: string,
  secret: string,
): Promise<boolean> => {
  const signingKeys = await Promise.all(
    hmacKeys(secret).map((key) =>
      globalThis.crypto.subtle.importKey("raw", key, { name: "HMAC", hash: "SHA-256" }, false, [
        "verify",
      ]),
    ),
  );
  for (const versionedSignature of header.split(" ")) {
    const [version, signature] = versionedSignature.split(",", 2);
    if (version !== "v1" || signature === undefined) {
      continue;
    }
    const decodedSignature = decodeBase64(signature);
    if (decodedSignature === null) {
      continue;
    }
    for (const signingKey of signingKeys) {
      if (
        await globalThis.crypto.subtle.verify("HMAC", signingKey, decodedSignature, signedContent)
      ) {
        return true;
      }
    }
  }
  return false;
};

const hmacKeys = (secret: string): Array<Uint8Array<ArrayBuffer>> => {
  const utf8Key = new TextEncoder().encode(secret);
  const keys = [utf8Key];
  const remainder = secret.startsWith("whsec_") ? secret.slice("whsec_".length) : secret;
  const decoded = decodeBase64(remainder);
  if (decoded !== null && decoded.byteLength > 0 && !bytesEqual(decoded, utf8Key)) {
    keys.push(decoded);
  }
  return keys;
};

const bytesEqual = (left: Uint8Array, right: Uint8Array): boolean => {
  if (left.byteLength !== right.byteLength) {
    return false;
  }
  for (let index = 0; index < left.byteLength; index++) {
    if (left[index] !== right[index]) {
      return false;
    }
  }
  return true;
};

const decodeBase64 = (value: string): Uint8Array<ArrayBuffer> | null => {
  try {
    const decodedValue = globalThis.atob(value);
    const bytes = new Uint8Array(new ArrayBuffer(decodedValue.length));
    for (let index = 0; index < decodedValue.length; index++) {
      bytes[index] = decodedValue.charCodeAt(index);
    }
    return bytes;
  } catch {
    return null;
  }
};
