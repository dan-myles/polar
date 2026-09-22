import { Effect, Layer, Stream } from "effect";
import { describe, expect, it } from "vitest";

import { json, mockHttpClient } from "../internal/testing";
import examples from "./__fixtures__/examples.json";
import { Polar } from "./Polar";
import * as Services from "./services/index";

const product = examples.models.Product;

const layer = (handler: Parameters<typeof mockHttpClient>[0]) => {
  const http = mockHttpClient(handler);
  return {
    layer: Polar.layer({ accessToken: "polar_oat_test", retry: false }).pipe(
      Layer.provide(http.layer),
    ),
    requests: http.requests,
  };
};

describe("Polar", () => {
  it("binds every service to the client", async () => {
    const { layer: polarLayer, requests } = layer(() => json(product));
    const result = await Effect.runPromise(
      Effect.gen(function* () {
        const polar = yield* Polar;
        return yield* polar.products.get(product.id);
      }).pipe(Effect.provide(polarLayer)),
    );
    expect(result.id).toBe(product.id);
    expect(requests[0]?.url.pathname).toBe(`/v1/products/${product.id}`);
  });

  it("exposes documented errors by tag", async () => {
    const { layer: polarLayer } = layer(() =>
      json({ error: "ResourceNotFound", detail: "Not found" }, { status: 404 }),
    );
    const result = await Effect.runPromise(
      Services.Products.get(product.id).pipe(
        Effect.map(() => "found"),
        Effect.catchTag("ResourceNotFound", (error) => Effect.succeed(error.body.detail)),
        Effect.provide(polarLayer),
      ),
    );
    expect(result).toBe("Not found");
  });

  it("streams paginated endpoints", async () => {
    const { layer: polarLayer, requests } = layer((_, url) => {
      const page = Number(url.searchParams.get("page"));
      return json({
        items: [{ ...product, id: `product_${page}` }],
        pagination: { total_count: 2, max_page: 2 },
      });
    });
    const ids = await Effect.runPromise(
      Effect.gen(function* () {
        const polar = yield* Polar;
        return yield* Stream.runCollect(polar.products.listStream({ limit: 1 }));
      }).pipe(Effect.provide(polarLayer)),
    );
    expect(ids.map((item) => item.id)).toEqual(["product_1", "product_2"]);
    expect(requests.map((request) => request.url.searchParams.get("limit"))).toEqual(["1", "1"]);
  });
});
