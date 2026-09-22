import type { Config } from "effect";
import type * as HttpClient from "effect/unstable/http/HttpClient";
import type { Bind, PolarClientOptions } from "../PolarClient";
import { Context, Effect, Layer } from "effect";
import * as ConfigModule from "effect/Config";
import { PolarClient, bind, make } from "../PolarClient";
import * as Services from "./services/index";

export const SERVERS = {
{% for server in api.servers %}
  {{ server.environment | json }}: {{ server.url | json }},
{% endfor %}
} as const;

export type Environment = keyof typeof SERVERS;

export const VERSION = {{ version | json }};

export interface PolarOptions extends PolarClientOptions<Environment> {}

export type PolarServices = Bind<typeof Services>;

/**
 * The Polar API ({{ version }}), with every service bound to a configured `PolarClient`.
 *
 * Provide it with `Polar.layer(...)` or `Polar.layerConfig()` plus an `HttpClient` layer, e.g. `FetchHttpClient.layer`.
 */
export class Polar extends Context.Service<Polar, PolarServices>()("@polar-sh/effect/{{ version }}/Polar") {
  /**
   * `PolarClient` configured for this API version, for use with the per-operation functions.
   */
  static clientLayer(options: PolarOptions): Layer.Layer<PolarClient, never, HttpClient.HttpClient> {
    return Layer.effect(
      PolarClient,
      make({ ...options, version: VERSION, servers: SERVERS, defaultEnvironment: {{ api.servers[0].environment | json }} }),
    );
  }

  /**
   * Provides both `Polar` and `PolarClient`.
   */
  static layer(options: PolarOptions): Layer.Layer<Polar | PolarClient, never, HttpClient.HttpClient> {
    const polar = Layer.effect(
      Polar,
      Effect.gen(function* () {
        return bind(Services, yield* PolarClient);
      }),
    );
    return Layer.provideMerge(polar, Polar.clientLayer(options));
  }

  /**
   * Like `layer`, reading `POLAR_ACCESS_TOKEN`, `POLAR_ENVIRONMENT` and `POLAR_BASE_URL` from the environment.
   */
  static layerConfig(
    options: Omit<PolarOptions, "accessToken" | "environment" | "baseUrl"> = {},
  ): Layer.Layer<Polar | PolarClient, Config.ConfigError, HttpClient.HttpClient> {
    return Layer.unwrap(
      Effect.gen(function* () {
        const accessToken = yield* ConfigModule.Redacted("POLAR_ACCESS_TOKEN");
        const environment = yield* ConfigModule.Literals(
          Object.keys(SERVERS) as Array<Environment>,
          "POLAR_ENVIRONMENT",
        ).pipe(ConfigModule.withDefault({{ api.servers[0].environment | json }} as Environment));
        const baseUrl = yield* ConfigModule.String("POLAR_BASE_URL").pipe(ConfigModule.option);
        return Polar.layer({
          ...options,
          accessToken,
          environment,
          ...(baseUrl._tag === "Some" ? { baseUrl: baseUrl.value } : {}),
        });
      }),
    );
  }
}
