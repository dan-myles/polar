import type { Cause } from "effect";
import type { SchemaError } from "effect/Schema";
import type { HttpClientError } from "effect/unstable/http/HttpClientError";

import {
  Context,
  Data,
  DateTime,
  Duration,
  Effect,
  Layer,
  Option,
  Redacted,
  Schema,
  Stream,
} from "effect";
import * as HttpClient from "effect/unstable/http/HttpClient";
import * as HttpClientRequest from "effect/unstable/http/HttpClientRequest";
import * as HttpClientResponse from "effect/unstable/http/HttpClientResponse";

export class PolarServerError extends Data.TaggedError("PolarServerError")<{
  readonly status: number;
  readonly body: string;
}> {
  override get message(): string {
    return `Polar API returned a server error: ${this.status} - ${this.body}`;
  }
}

export class PolarClientError extends Data.TaggedError("PolarClientError")<{
  readonly status: number;
  readonly body: unknown;
}> {
  override get message(): string {
    return `Polar API returned an error: ${this.status} - ${JSON.stringify(this.body)}`;
  }
}

export class PolarRateLimitError extends Data.TaggedError("PolarRateLimitError")<{
  readonly retryAfter: Option.Option<Duration.Duration>;
}> {
  override get message(): string {
    return "Polar API rate limit exceeded";
  }
}

export type PolarRequestError =
  | PolarServerError
  | PolarClientError
  | PolarRateLimitError
  | HttpClientError
  | SchemaError
  | Cause.TimeoutError;

export interface RetryOptions {
  /** Maximum number of retries after the first attempt. */
  readonly times?: number;
  /** Initial backoff delay, doubled on each retry. */
  readonly baseDelay?: Duration.Input;
  /** Maximum backoff delay, also caps `Retry-After`. */
  readonly maxDelay?: Duration.Input;
}

export interface PolarClientOptions<Environment extends string = string> {
  readonly accessToken: Redacted.Redacted<string> | string;
  readonly environment?: Environment;
  readonly baseUrl?: string;
  /** Per-attempt request timeout. Defaults to 5 seconds. */
  readonly timeout?: Duration.Input;
  /** Retry policy for rate limits, network errors and idempotent 5xx responses. `false` disables retries. */
  readonly retry?: RetryOptions | false;
}

interface ResolvedRetry {
  readonly times: number;
  readonly baseDelay: Duration.Duration;
  readonly maxDelay: Duration.Duration;
}

export class PolarClient extends Context.Service<
  PolarClient,
  {
    readonly httpClient: HttpClient.HttpClient;
    readonly baseUrl: string;
    readonly version: string;
    readonly accessToken: Redacted.Redacted<string>;
    readonly timeout: Duration.Duration;
    readonly retry: ResolvedRetry | undefined;
  }
>()("@polar-sh/effect/PolarClient") {}

export const make = (
  options: PolarClientOptions & {
    readonly version: string;
    readonly servers: Readonly<Record<string, string>>;
    readonly defaultEnvironment: string;
  },
): Effect.Effect<PolarClient["Service"], never, HttpClient.HttpClient> =>
  Effect.gen(function* () {
    const httpClient = yield* HttpClient.HttpClient;
    const environment = options.environment ?? options.defaultEnvironment;
    const baseUrl = options.baseUrl ?? options.servers[environment];
    if (baseUrl === undefined) {
      return yield* Effect.die(
        new Error(
          `Invalid environment ${JSON.stringify(environment)}. Expected one of: ${Object.keys(options.servers).sort().join(", ")}.`,
        ),
      );
    }
    return {
      httpClient,
      baseUrl,
      version: options.version,
      accessToken:
        typeof options.accessToken === "string"
          ? Redacted.make(options.accessToken)
          : options.accessToken,
      timeout: Duration.fromInputUnsafe(options.timeout ?? Duration.seconds(5)),
      retry:
        options.retry === false
          ? undefined
          : {
              times: options.retry?.times ?? 2,
              baseDelay: Duration.fromInputUnsafe(options.retry?.baseDelay ?? Duration.millis(500)),
              maxDelay: Duration.fromInputUnsafe(options.retry?.maxDelay ?? Duration.seconds(30)),
            },
    };
  });

/**
 * Run an effect with a different access token, e.g. a customer session token for customer portal endpoints.
 */
export const withAccessToken: {
  (
    accessToken: Redacted.Redacted<string> | string,
  ): <A, E, R>(self: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R | PolarClient>;
  <A, E, R>(
    self: Effect.Effect<A, E, R>,
    accessToken: Redacted.Redacted<string> | string,
  ): Effect.Effect<A, E, R | PolarClient>;
} = ((...args: ReadonlyArray<unknown>) => {
  if (args.length === 1) {
    return (self: Effect.Effect<unknown, unknown, unknown>) =>
      withAccessToken(self, args[0] as string);
  }
  const [self, accessToken] = args as [
    Effect.Effect<unknown, unknown, unknown>,
    Redacted.Redacted<string> | string,
  ];
  return Effect.updateService(self, PolarClient, (client) => ({
    ...client,
    accessToken: typeof accessToken === "string" ? Redacted.make(accessToken) : accessToken,
  }));
}) as any;

type QueryValue = string | number | boolean | DateTime.DateTime | null | undefined;
type QueryParams = Readonly<
  Record<string, QueryValue | ReadonlyArray<QueryValue> | Readonly<Record<string, unknown>>>
>;

const formatQueryValue = (value: unknown): string =>
  DateTime.isDateTime(value) ? DateTime.formatIso(value) : String(value);

export const encodeQuery = (query: QueryParams | undefined): Array<[string, string]> => {
  const params: Array<[string, string]> = [];
  if (query === undefined) {
    return params;
  }
  for (const [key, value] of Object.entries(query)) {
    if (value === null || value === undefined) {
      continue;
    }
    if (Array.isArray(value)) {
      for (const item of value) {
        if (item !== null && item !== undefined) {
          params.push([key, formatQueryValue(item)]);
        }
      }
    } else if (typeof value === "object" && !DateTime.isDateTime(value)) {
      for (const [subKey, subValue] of Object.entries(value)) {
        if (subValue === null || subValue === undefined) {
          continue;
        }
        if (Array.isArray(subValue)) {
          for (const item of subValue) {
            params.push([`${key}[${subKey}]`, formatQueryValue(item)]);
          }
        } else {
          params.push([`${key}[${subKey}]`, formatQueryValue(subValue)]);
        }
      }
    } else {
      params.push([key, formatQueryValue(value)]);
    }
  }
  return params;
};

export const formatPath = (
  path: string,
  pathParams: Readonly<Record<string, string | number | boolean>> | undefined,
): string => {
  if (pathParams === undefined) {
    return path;
  }
  return path.replace(/\{(\w+)\}/g, (match, key: string) => {
    const value = pathParams[key];
    return value === undefined ? match : encodeURIComponent(String(value));
  });
};

type ErrorConstructor = new (args: any) => unknown;

/** Maps a status code to the error bodies it may carry. A `null` schema means the response has no body. */
export type ErrorMapping = Readonly<
  Record<number, ReadonlyArray<readonly [Schema.Top | null, ErrorConstructor]>>
>;

export interface RequestSpec<S extends Schema.Top | "text" | "none"> {
  readonly method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  readonly path: string;
  readonly pathParams?: Readonly<Record<string, string | number | boolean>>;
  readonly query?: QueryParams | undefined;
  readonly body?: readonly [Schema.Top, unknown];
  readonly success: S;
  readonly errors?: ErrorMapping;
}

type SuccessType<S> = S extends Schema.Top ? S["Type"] : S extends "text" ? string : void;

const isIdempotent = (method: string): boolean =>
  method === "GET" || method === "PUT" || method === "DELETE";

const parseRetryAfter = (
  response: HttpClientResponse.HttpClientResponse,
): Option.Option<Duration.Duration> => {
  const header = response.headers["retry-after"];
  if (header === undefined) {
    return Option.none();
  }
  const seconds = Number(header);
  if (Number.isFinite(seconds)) {
    return Option.some(Duration.seconds(Math.max(0, seconds)));
  }
  const date = Date.parse(header);
  return Number.isNaN(date)
    ? Option.none()
    : Option.some(Duration.millis(Math.max(0, date - Date.now())));
};

const backoff = (retry: ResolvedRetry, attempt: number): Duration.Duration =>
  Duration.min(Duration.times(retry.baseDelay, 2 ** attempt), retry.maxDelay);

const readBody = (response: HttpClientResponse.HttpClientResponse): Effect.Effect<unknown> =>
  response.text.pipe(
    Effect.map((text) => {
      try {
        return JSON.parse(text) as unknown;
      } catch {
        return text;
      }
    }),
    Effect.orElseSucceed(() => undefined),
  );

const failWithMappedError = (
  status: number,
  response: HttpClientResponse.HttpClientResponse,
  errors: ErrorMapping | undefined,
): Effect.Effect<never, unknown> =>
  Effect.gen(function* () {
    const candidates = errors?.[status];
    if (candidates !== undefined) {
      const body = yield* readBody(response);
      for (const [schema, ErrorClass] of candidates) {
        if (schema === null) {
          return yield* Effect.fail(new ErrorClass({ status, body: undefined }));
        }
        const decoded = Schema.decodeUnknownOption(schema as Schema.Codec<unknown, unknown>)(body);
        if (Option.isSome(decoded)) {
          return yield* Effect.fail(new ErrorClass({ status, body: decoded.value }));
        }
      }
      return yield* Effect.fail(new PolarClientError({ status, body }));
    }
    if (status === 429) {
      return yield* Effect.fail(new PolarRateLimitError({ retryAfter: parseRetryAfter(response) }));
    }
    if (status >= 500) {
      const body = yield* response.text.pipe(Effect.orElseSucceed(() => ""));
      return yield* Effect.fail(new PolarServerError({ status, body }));
    }
    return yield* Effect.fail(new PolarClientError({ status, body: yield* readBody(response) }));
  });

/** Low-level request helper used by the generated services. */
export const request = <S extends Schema.Top | "text" | "none", E = never>(
  spec: RequestSpec<S>,
): Effect.Effect<SuccessType<S>, E | PolarRequestError, PolarClient> =>
  Effect.gen(function* () {
    const client = yield* PolarClient;
    let httpRequest = HttpClientRequest.make(spec.method)(
      `${client.baseUrl}${formatPath(spec.path, spec.pathParams)}`,
    ).pipe(
      HttpClientRequest.setHeader("Polar-Version", client.version),
      HttpClientRequest.bearerToken(Redacted.value(client.accessToken)),
      HttpClientRequest.acceptJson,
      HttpClientRequest.appendUrlParams(encodeQuery(spec.query)),
    );
    if (spec.body !== undefined) {
      const [schema, value] = spec.body;
      const encoded = yield* Schema.encodeUnknownEffect(schema as Schema.Codec<unknown, unknown>)(
        value,
      );
      httpRequest = HttpClientRequest.bodyJsonUnsafe(httpRequest, encoded);
    }

    const retryable = (status: number) =>
      status === 429 || (status >= 500 && isIdempotent(spec.method));

    let attempt = 0;
    while (true) {
      const result = yield* client.httpClient
        .execute(httpRequest)
        .pipe(Effect.timeout(client.timeout), Effect.result);
      const canRetry = client.retry !== undefined && attempt < client.retry.times;
      if (result._tag === "Failure") {
        const error = result.failure;
        const transient = error._tag === "TimeoutError" || error.reason._tag === "TransportError";
        if (canRetry && transient) {
          yield* Effect.sleep(backoff(client.retry!, attempt++));
          continue;
        }
        return yield* Effect.fail(error);
      }
      const response = result.success;
      const status = response.status;
      if (status >= 200 && status < 300) {
        if (spec.success === "none") {
          return undefined as SuccessType<S>;
        }
        if (spec.success === "text") {
          return (yield* response.text) as SuccessType<S>;
        }
        return (yield* HttpClientResponse.schemaBodyJson(
          spec.success as Schema.Codec<unknown, unknown>,
        )(response)) as SuccessType<S>;
      }
      if (canRetry && retryable(status)) {
        const delay =
          status === 429
            ? Option.match(parseRetryAfter(response), {
                onNone: () => backoff(client.retry!, attempt),
                onSome: (retryAfter) => Duration.min(retryAfter, client.retry!.maxDelay),
              })
            : backoff(client.retry!, attempt);
        attempt++;
        yield* Effect.sleep(delay);
        continue;
      }
      return yield* failWithMappedError(status, response, spec.errors) as Effect.Effect<never, E>;
    }
  });

interface Page<A> {
  readonly items: ReadonlyArray<A>;
  readonly pagination: { readonly max_page: number };
}

/** Streams every item of a `page`/`limit` paginated endpoint. */
export const paginate = <A, E, R>(
  startPage: number,
  fetchPage: (page: number) => Effect.Effect<Page<A>, E, R>,
): Stream.Stream<A, E, R> =>
  Stream.paginate(startPage, (page) =>
    Effect.map(
      fetchPage(page),
      (response) =>
        [
          response.items,
          page >= response.pagination.max_page ? Option.none() : Option.some(page + 1),
        ] as const,
    ),
  );

/**
 * Replaces the `PolarClient` requirement of every function in a service module tree with a concrete client.
 * Nested service namespaces are exposed in camelCase, e.g. `CustomerPortal` becomes `customerPortal`.
 */
export type Bind<M> = {
  readonly [K in keyof M as M[K] extends (...args: any) => any
    ? K
    : K extends string
      ? Uncapitalize<K>
      : K]: M[K] extends (...args: infer Args) => Effect.Effect<infer A, infer E, infer _R>
    ? (...args: Args) => Effect.Effect<A, E>
    : M[K] extends (...args: infer Args) => Stream.Stream<infer A, infer E, infer _R>
      ? (...args: Args) => Stream.Stream<A, E>
      : Bind<M[K]>;
};

export const bind = <M extends object>(module: M, client: PolarClient["Service"]): Bind<M> => {
  const bound: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(module)) {
    if (typeof value === "function") {
      bound[key] = (...args: ReadonlyArray<unknown>) => {
        const result = value(...args);
        return Stream.isStream(result)
          ? Stream.provideService(result, PolarClient, client)
          : Effect.provideService(result as Effect.Effect<unknown>, PolarClient, client);
      };
    } else if (typeof value === "object" && value !== null) {
      bound[key.charAt(0).toLowerCase() + key.slice(1)] = bind(value, client);
    }
  }
  return bound as Bind<M>;
};

export const layer = (
  options: Parameters<typeof make>[0],
): Layer.Layer<PolarClient, never, HttpClient.HttpClient> =>
  Layer.effect(PolarClient, make(options));
