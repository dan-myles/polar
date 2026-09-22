import { Data, Duration, Effect, Fiber, Layer, Option, Schema, Stream } from "effect";
import * as TestClock from "effect/testing/TestClock";
import { describe, expect, it } from "vitest";

import { json, mockHttpClient } from "./internal/testing";
import {
  PolarClient,
  PolarClientError,
  PolarRateLimitError,
  PolarServerError,
  encodeQuery,
  layer,
  paginate,
  request,
  withAccessToken,
} from "./PolarClient";

class NotFound extends Schema.Opaque<NotFound>()(
  Schema.Struct({ error: Schema.Literal("ResourceNotFound"), detail: Schema.String }),
) {}

class ItemNotFoundError extends Data.TaggedError("ResourceNotFound")<{
  readonly status: 404;
  readonly body: NotFound;
}> {}

const Item = Schema.Struct({ id: Schema.String, created_at: Schema.DateTimeUtcFromString });

const clientLayer = (
  handler: Parameters<typeof mockHttpClient>[0],
  options: Partial<Parameters<typeof layer>[0]> = {},
) => {
  const http = mockHttpClient(handler);
  const client = layer({
    accessToken: "polar_oat_test",
    version: "2026-10",
    servers: { production: "https://api.polar.sh", sandbox: "https://sandbox-api.polar.sh" },
    defaultEnvironment: "production",
    retry: { times: 2, baseDelay: "1 millis", maxDelay: "10 seconds" },
    ...options,
  }).pipe(Layer.provide(http.layer));
  return { layer: client, requests: http.requests };
};

const getItem = (id: string) =>
  request<typeof Item, ItemNotFoundError>({
    method: "GET",
    path: "/v1/items/{id}",
    pathParams: { id },
    query: { tags: ["a", "b"], metadata: { plan: "pro" }, empty: null },
    success: Item,
    errors: { 404: [[NotFound, ItemNotFoundError]] },
  });

describe("request", () => {
  it("builds the request and decodes the response", async () => {
    const { layer, requests } = clientLayer(() =>
      json({ id: "item_1", created_at: "2026-01-01T00:00:00.000Z", extra: true }),
    );
    const item = await Effect.runPromise(getItem("a/b").pipe(Effect.provide(layer)));

    expect(item.id).toBe("item_1");
    expect(item.created_at.epochMilliseconds).toBe(Date.UTC(2026, 0, 1));
    expect(requests).toHaveLength(1);
    const [{ request: sent, url }] = requests as [(typeof requests)[number]];
    expect(url.origin + url.pathname).toBe("https://api.polar.sh/v1/items/a%2Fb");
    expect(url.searchParams.getAll("tags")).toEqual(["a", "b"]);
    expect(url.searchParams.get("metadata[plan]")).toBe("pro");
    expect(url.searchParams.has("empty")).toBe(false);
    expect(sent.headers["authorization"]).toBe("Bearer polar_oat_test");
    expect(sent.headers["polar-version"]).toBe("2026-10");
  });

  it("uses the environment's server", async () => {
    const { layer, requests } = clientLayer(
      () => json({ id: "item_1", created_at: "2026-01-01T00:00:00Z" }),
      { environment: "sandbox" },
    );
    await Effect.runPromise(getItem("1").pipe(Effect.provide(layer)));
    expect(requests[0]?.url.origin).toBe("https://sandbox-api.polar.sh");
  });

  it("encodes the body with its schema", async () => {
    const { layer, requests } = clientLayer(() => new Response(null, { status: 204 }));
    const Body = Schema.Struct({ at: Schema.DateTimeUtcFromString });
    await Effect.runPromise(
      request({
        method: "POST",
        path: "/v1/items/",
        body: [Body, { at: Schema.decodeUnknownSync(Body)({ at: "2026-01-01T00:00:00Z" }).at }],
        success: "none",
      }).pipe(Effect.provide(layer)),
    );
    const body = requests[0]?.request.body;
    expect(body?._tag).toBe("Uint8Array");
    expect(JSON.parse(new TextDecoder().decode((body as { body: Uint8Array }).body))).toEqual({
      at: "2026-01-01T00:00:00.000Z",
    });
  });

  it("maps documented errors to tagged errors", async () => {
    const { layer } = clientLayer(() =>
      json({ error: "ResourceNotFound", detail: "Not found" }, { status: 404 }),
    );
    const result = await Effect.runPromise(
      getItem("1").pipe(
        Effect.catchTag("ResourceNotFound", (error) => Effect.succeed(error.body.detail)),
        Effect.provide(layer),
      ),
    );
    expect(result).toBe("Not found");
  });

  it("maps undocumented 4xx responses to PolarClientError", async () => {
    const { layer } = clientLayer(() => json({ detail: "nope" }, { status: 418 }));
    const error = await Effect.runPromise(getItem("1").pipe(Effect.flip, Effect.provide(layer)));
    expect(error).toBeInstanceOf(PolarClientError);
    expect((error as PolarClientError).body).toEqual({ detail: "nope" });
  });

  it("retries idempotent 5xx responses, then fails with PolarServerError", async () => {
    const { layer, requests } = clientLayer(() => new Response("boom", { status: 503 }));
    const error = await Effect.runPromise(getItem("1").pipe(Effect.flip, Effect.provide(layer)));
    expect(error).toBeInstanceOf(PolarServerError);
    expect(requests).toHaveLength(3);
  });

  it("does not retry non-idempotent 5xx responses", async () => {
    const { layer, requests } = clientLayer(() => new Response("boom", { status: 500 }));
    const error = await Effect.runPromise(
      request({ method: "POST", path: "/v1/items/", success: "none" }).pipe(
        Effect.flip,
        Effect.provide(layer),
      ),
    );
    expect(error).toBeInstanceOf(PolarServerError);
    expect(requests).toHaveLength(1);
  });

  it("honors Retry-After on 429", async () => {
    const { layer, requests } = clientLayer((_, __, index) =>
      index === 0
        ? new Response(null, { status: 429, headers: { "retry-after": "5" } })
        : json({ id: "item_1", created_at: "2026-01-01T00:00:00Z" }),
    );
    const program = Effect.gen(function* () {
      const fiber = yield* getItem("1").pipe(Effect.forkChild);
      yield* TestClock.adjust("4 seconds");
      expect(requests).toHaveLength(1);
      yield* TestClock.adjust("1 second");
      return yield* Fiber.join(fiber);
    });
    const item = await Effect.runPromise(
      program.pipe(Effect.provide(layer), Effect.provide(TestClock.layer())),
    );
    expect(item.id).toBe("item_1");
    expect(requests).toHaveLength(2);
  });

  it("fails with PolarRateLimitError once retries are exhausted", async () => {
    const { layer } = clientLayer(
      () => new Response(null, { status: 429, headers: { "retry-after": "7" } }),
      { retry: false },
    );
    const error = await Effect.runPromise(getItem("1").pipe(Effect.flip, Effect.provide(layer)));
    expect(error).toBeInstanceOf(PolarRateLimitError);
    expect(Option.map((error as PolarRateLimitError).retryAfter, Duration.toSeconds)).toEqual(
      Option.some(7),
    );
  });

  it("overrides the access token", async () => {
    const { layer, requests } = clientLayer(() => new Response(null, { status: 204 }));
    await Effect.runPromise(
      request({ method: "DELETE", path: "/v1/items/1", success: "none" }).pipe(
        withAccessToken("polar_cst_customer"),
        Effect.provide(layer),
      ),
    );
    expect(requests[0]?.request.headers["authorization"]).toBe("Bearer polar_cst_customer");
  });

  it("dies on an unknown environment", async () => {
    const { layer } = clientLayer(() => new Response(null), { environment: "staging" });
    const exit = await Effect.runPromiseExit(PolarClient.pipe(Effect.provide(layer)));
    expect(exit._tag).toBe("Failure");
  });
});

describe("paginate", () => {
  it("streams items across pages", async () => {
    const pages = [["a", "b"], ["c"], ["d"]];
    const fetched: Array<number> = [];
    const items = await Effect.runPromise(
      Stream.runCollect(
        paginate(1, (page) => {
          fetched.push(page);
          return Effect.succeed({ items: pages[page - 1] ?? [], pagination: { max_page: 3 } });
        }),
      ),
    );
    expect(items).toEqual(["a", "b", "c", "d"]);
    expect(fetched).toEqual([1, 2, 3]);
  });
});

describe("encodeQuery", () => {
  it("skips nullish values and expands deep objects", () => {
    expect(
      encodeQuery({ a: 1, b: undefined, c: [true, null], d: { x: [1, 2] } }),
    ).toEqual([
      ["a", "1"],
      ["c", "true"],
      ["d[x]", "1"],
      ["d[x]", "2"],
    ]);
  });
});
