# @polar-sh/effect

[Effect](https://effect.website) SDK for the [Polar](https://polar.sh) API. Every request and response is validated with `Schema`, errors are typed and tagged, and pagination is exposed as `Stream`.

> Generated from the Polar OpenAPI specification. Do not edit by hand.

## Install

```sh
pnpm add @polar-sh/effect effect@4.0.0-rc.114
```

## Usage

```ts
import { Effect, Stream } from "effect";
import { FetchHttpClient } from "effect/unstable/http";
import { Polar } from "@polar-sh/effect";

const program = Effect.gen(function* () {
  const polar = yield* Polar;

  const product = yield* polar.products.get("00000000-0000-0000-0000-000000000000").pipe(
    Effect.catchTag("ResourceNotFound", () => Effect.succeed(null)),
  );

  yield* polar.products.listStream({ is_archived: false }).pipe(
    Stream.runForEach((product) => Effect.log(product.name)),
  );
});

program.pipe(
  Effect.provide(Polar.layerConfig()), // POLAR_ACCESS_TOKEN, POLAR_ENVIRONMENT
  Effect.provide(FetchHttpClient.layer),
  Effect.runPromise,
);
```

### Tree-shakable functions

Every operation is also exported as a standalone function that requires `PolarClient`:

```ts
import { Effect } from "effect";
import { FetchHttpClient } from "effect/unstable/http";
import { Polar, Products } from "@polar-sh/effect";

const product = Products.get("00000000-0000-0000-0000-000000000000").pipe(
  Effect.provide(Polar.clientLayer({ accessToken: "polar_oat_xxx" })),
  Effect.provide(FetchHttpClient.layer),
);
```

Customer portal endpoints authenticate with a customer session token. Override the token for a single effect with `withAccessToken`:

```ts
import { Effect } from "effect";
import { CustomerPortal, withAccessToken } from "@polar-sh/effect";

const orders = CustomerPortal.Orders.list().pipe(withAccessToken("polar_cst_xxx"));
```

### Errors

Each operation fails with its documented errors, tagged by error model (e.g. `ResourceNotFound`, `NotPermitted`, `HTTPValidationError`), plus:

- `PolarServerError` for 5xx responses
- `PolarRateLimitError` when rate limited after retries
- `PolarClientError` for undocumented 4xx responses
- `HttpClientError`, `SchemaError` and `TimeoutError`

Rate limits (honoring `Retry-After`), network errors and idempotent 5xx responses are retried with exponential backoff. Configure with the `retry` and `timeout` options.

### Webhooks

```ts
import { Effect } from "effect";
import { validateEvent } from "@polar-sh/effect";

const handle = (body: string, headers: Headers) =>
  Effect.gen(function* () {
    const event = yield* validateEvent(body, headers, process.env.POLAR_WEBHOOK_SECRET!);
    switch (event.type) {
      case "order.paid":
        yield* Effect.log(`Order ${event.data.id} paid`);
        break;
      case "~unknown":
        yield* Effect.log("Unknown event", event.raw);
        break;
    }
  });
```

Unknown event types decode to `{ type: "~unknown", raw }` instead of failing.

## API versions

{% for version in ir.versions %}
- `{{ version.version }}`: `import { Polar } from "@polar-sh/effect/{{ version.version }}"`
{% endfor %}

The root export targets `{{ latest_version }}`.
