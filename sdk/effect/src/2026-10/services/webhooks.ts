import type { DateTime, Effect } from "effect";
import type { Stream } from "effect";

import { Schema } from "effect";

import type { PolarClient, PolarRequestError } from "../../PolarClient";

import { paginate, request } from "../../PolarClient";
import * as Errors from "../errors";
import * as Models from "../models";

/**
 * List webhook endpoints.
 *
 * **Scopes**: `webhooks:read` `webhooks:write`
 */
export const listWebhookEndpoints = (query?: {
  readonly organization_id?: string | ReadonlyArray<string> | null;
  readonly page?: number;
  readonly limit?: number;
}): Effect.Effect<
  Models.ListResourceWebhookEndpoint,
  Errors.WebhooksListWebhookEndpointsErrors | PolarRequestError,
  PolarClient
> =>
  request({
    method: "GET",
    path: "/v1/webhooks/endpoints",
    query,
    success: Models.ListResourceWebhookEndpoint,
    errors: {
      422: [[Models.HTTPValidationError, Errors.WebhooksListWebhookEndpointsHTTPValidationError]],
    },
  });

/**
 * List webhook endpoints.
 *
 * **Scopes**: `webhooks:read` `webhooks:write`
 *
 * Streams every item across all pages.
 */
export const listWebhookEndpointsStream = (query?: {
  readonly organization_id?: string | ReadonlyArray<string> | null;
  readonly page?: number;
  readonly limit?: number;
}): Stream.Stream<
  Models.WebhookEndpoint,
  Errors.WebhooksListWebhookEndpointsErrors | PolarRequestError,
  PolarClient
> => paginate(query?.page ?? 1, (page) => listWebhookEndpoints({ ...query, page }));

/**
 * Create a webhook endpoint.
 *
 * **Scopes**: `webhooks:write`
 */
export const createWebhookEndpoint = (
  body: Models.WebhookEndpointCreate,
): Effect.Effect<
  Models.WebhookEndpoint,
  Errors.WebhooksCreateWebhookEndpointErrors | PolarRequestError,
  PolarClient
> =>
  request({
    method: "POST",
    path: "/v1/webhooks/endpoints",
    body: [Models.WebhookEndpointCreate, body],
    success: Models.WebhookEndpoint,
    errors: {
      422: [[Models.HTTPValidationError, Errors.WebhooksCreateWebhookEndpointHTTPValidationError]],
    },
  });

/**
 * Get a webhook endpoint by ID.
 *
 * **Scopes**: `webhooks:read` `webhooks:write`
 */
export const getWebhookEndpoint = (
  id: string,
): Effect.Effect<
  Models.WebhookEndpoint,
  Errors.WebhooksGetWebhookEndpointErrors | PolarRequestError,
  PolarClient
> =>
  request({
    method: "GET",
    path: "/v1/webhooks/endpoints/{id}",
    pathParams: { id: id },
    success: Models.WebhookEndpoint,
    errors: {
      404: [[Models.ResourceNotFound, Errors.WebhooksGetWebhookEndpointResourceNotFoundError]],
      422: [[Models.HTTPValidationError, Errors.WebhooksGetWebhookEndpointHTTPValidationError]],
    },
  });

/**
 * Delete a webhook endpoint.
 *
 * **Scopes**: `webhooks:write`
 */
export const deleteWebhookEndpoint = (
  id: string,
): Effect.Effect<
  void,
  Errors.WebhooksDeleteWebhookEndpointErrors | PolarRequestError,
  PolarClient
> =>
  request({
    method: "DELETE",
    path: "/v1/webhooks/endpoints/{id}",
    pathParams: { id: id },
    success: "none",
    errors: {
      404: [[Models.ResourceNotFound, Errors.WebhooksDeleteWebhookEndpointResourceNotFoundError]],
      422: [[Models.HTTPValidationError, Errors.WebhooksDeleteWebhookEndpointHTTPValidationError]],
    },
  });

/**
 * Update a webhook endpoint.
 *
 * **Scopes**: `webhooks:write`
 */
export const updateWebhookEndpoint = (
  id: string,
  body: Models.WebhookEndpointUpdate,
): Effect.Effect<
  Models.WebhookEndpoint,
  Errors.WebhooksUpdateWebhookEndpointErrors | PolarRequestError,
  PolarClient
> =>
  request({
    method: "PATCH",
    path: "/v1/webhooks/endpoints/{id}",
    pathParams: { id: id },
    body: [Models.WebhookEndpointUpdate, body],
    success: Models.WebhookEndpoint,
    errors: {
      404: [[Models.ResourceNotFound, Errors.WebhooksUpdateWebhookEndpointResourceNotFoundError]],
      422: [[Models.HTTPValidationError, Errors.WebhooksUpdateWebhookEndpointHTTPValidationError]],
    },
  });

/**
 * Regenerate a webhook endpoint secret.
 *
 * **Scopes**: `webhooks:write`
 */
export const resetWebhookEndpointSecret = (
  id: string,
): Effect.Effect<
  Models.WebhookEndpoint,
  Errors.WebhooksResetWebhookEndpointSecretErrors | PolarRequestError,
  PolarClient
> =>
  request({
    method: "PATCH",
    path: "/v1/webhooks/endpoints/{id}/secret",
    pathParams: { id: id },
    success: Models.WebhookEndpoint,
    errors: {
      404: [
        [Models.ResourceNotFound, Errors.WebhooksResetWebhookEndpointSecretResourceNotFoundError],
      ],
      422: [
        [Models.HTTPValidationError, Errors.WebhooksResetWebhookEndpointSecretHTTPValidationError],
      ],
    },
  });

/**
 * List webhook deliveries.
 *
 * Deliveries are all the attempts to deliver a webhook event to an endpoint.
 *
 * **Scopes**: `webhooks:read` `webhooks:write`
 */
export const listWebhookDeliveries = (query?: {
  readonly endpoint_id?: string | ReadonlyArray<string> | null;
  readonly start_timestamp?: (DateTime.Utc | string) | null;
  readonly end_timestamp?: (DateTime.Utc | string) | null;
  readonly succeeded?: boolean | null;
  readonly query?: string | null;
  readonly http_code_class?: ("2xx" | "3xx" | "4xx" | "5xx") | null;
  readonly event_type?: Models.WebhookEventType | ReadonlyArray<Models.WebhookEventType> | null;
  readonly page?: number;
  readonly limit?: number;
}): Effect.Effect<
  Models.ListResourceWebhookDelivery,
  Errors.WebhooksListWebhookDeliveriesErrors | PolarRequestError,
  PolarClient
> =>
  request({
    method: "GET",
    path: "/v1/webhooks/deliveries",
    query,
    success: Models.ListResourceWebhookDelivery,
    errors: {
      422: [[Models.HTTPValidationError, Errors.WebhooksListWebhookDeliveriesHTTPValidationError]],
    },
  });

/**
 * List webhook deliveries.
 *
 * Deliveries are all the attempts to deliver a webhook event to an endpoint.
 *
 * **Scopes**: `webhooks:read` `webhooks:write`
 *
 * Streams every item across all pages.
 */
export const listWebhookDeliveriesStream = (query?: {
  readonly endpoint_id?: string | ReadonlyArray<string> | null;
  readonly start_timestamp?: (DateTime.Utc | string) | null;
  readonly end_timestamp?: (DateTime.Utc | string) | null;
  readonly succeeded?: boolean | null;
  readonly query?: string | null;
  readonly http_code_class?: ("2xx" | "3xx" | "4xx" | "5xx") | null;
  readonly event_type?: Models.WebhookEventType | ReadonlyArray<Models.WebhookEventType> | null;
  readonly page?: number;
  readonly limit?: number;
}): Stream.Stream<
  Models.WebhookDelivery,
  Errors.WebhooksListWebhookDeliveriesErrors | PolarRequestError,
  PolarClient
> => paginate(query?.page ?? 1, (page) => listWebhookDeliveries({ ...query, page }));

/**
 * Schedule the re-delivery of a webhook event.
 *
 * **Scopes**: `webhooks:write`
 */
export const redeliverWebhookEvent = (
  id: string,
): Effect.Effect<
  unknown,
  Errors.WebhooksRedeliverWebhookEventErrors | PolarRequestError,
  PolarClient
> =>
  request({
    method: "POST",
    path: "/v1/webhooks/events/{id}/redeliver",
    pathParams: { id: id },
    success: Schema.Unknown,
    errors: {
      404: [[Models.ResourceNotFound, Errors.WebhooksRedeliverWebhookEventResourceNotFoundError]],
      422: [[Models.HTTPValidationError, Errors.WebhooksRedeliverWebhookEventHTTPValidationError]],
    },
  });
