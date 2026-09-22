import type * as HttpClientRequest from "effect/unstable/http/HttpClientRequest";

import { Effect, Layer } from "effect";
import * as HttpClient from "effect/unstable/http/HttpClient";
import * as HttpClientResponse from "effect/unstable/http/HttpClientResponse";

export interface RecordedRequest {
  readonly request: HttpClientRequest.HttpClientRequest;
  readonly url: URL;
}

/**
 * `HttpClient` layer answering every request with `handler`, recording the requests it receives.
 */
export const mockHttpClient = (
  handler: (request: HttpClientRequest.HttpClientRequest, url: URL, index: number) => Response,
) => {
  const requests: Array<RecordedRequest> = [];
  const layer = Layer.succeed(
    HttpClient.HttpClient,
    HttpClient.make((request, url) =>
      Effect.sync(() => {
        requests.push({ request, url });
        return HttpClientResponse.fromWeb(request, handler(request, url, requests.length - 1));
      }),
    ),
  );
  return { layer, requests };
};

export const json = (body: unknown, init?: ResponseInit): Response =>
  new Response(JSON.stringify(body), {
    ...init,
    headers: { "content-type": "application/json", ...init?.headers },
  });
