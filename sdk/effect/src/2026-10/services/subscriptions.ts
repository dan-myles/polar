import type { DateTime, Effect } from "effect";
import type { Stream } from "effect";

import { Schema } from "effect";

import type { PolarClient, PolarRequestError } from "../../PolarClient";

import { paginate, request } from "../../PolarClient";
import * as Errors from "../errors";
import * as Models from "../models";

/**
 * List subscriptions.
 *
 * **Scopes**: `subscriptions:read` `subscriptions:write`
 */
export const list = (query?: {
  readonly organization_id?: string | ReadonlyArray<string> | null;
  readonly product_id?: string | ReadonlyArray<string> | null;
  readonly customer_id?: string | ReadonlyArray<string> | null;
  readonly external_customer_id?: string | ReadonlyArray<string> | null;
  readonly discount_id?: string | ReadonlyArray<string> | null;
  readonly active?: boolean | null;
  readonly status?: Models.SubscriptionStatus | ReadonlyArray<Models.SubscriptionStatus> | null;
  readonly cancel_at_period_end?: boolean | null;
  readonly customer_cancellation_reason?:
    | Models.CustomerCancellationReason
    | ReadonlyArray<Models.CustomerCancellationReason>
    | null;
  readonly canceled_at_after?: (DateTime.Utc | string) | null;
  readonly canceled_at_before?: (DateTime.Utc | string) | null;
  readonly started_after?: (DateTime.Utc | string) | null;
  readonly started_before?: (DateTime.Utc | string) | null;
  readonly page?: number;
  readonly limit?: number;
  readonly sorting?: ReadonlyArray<Models.SubscriptionSortProperty> | null;
  readonly metadata?: Models.MetadataQuery;
}): Effect.Effect<
  Models.ListResourceSubscription,
  Errors.SubscriptionsListErrors | PolarRequestError,
  PolarClient
> =>
  request({
    method: "GET",
    path: "/v1/subscriptions/",
    query,
    success: Models.ListResourceSubscription,
    errors: { 422: [[Models.HTTPValidationError, Errors.SubscriptionsListHTTPValidationError]] },
  });

/**
 * List subscriptions.
 *
 * **Scopes**: `subscriptions:read` `subscriptions:write`
 *
 * Streams every item across all pages.
 */
export const listStream = (query?: {
  readonly organization_id?: string | ReadonlyArray<string> | null;
  readonly product_id?: string | ReadonlyArray<string> | null;
  readonly customer_id?: string | ReadonlyArray<string> | null;
  readonly external_customer_id?: string | ReadonlyArray<string> | null;
  readonly discount_id?: string | ReadonlyArray<string> | null;
  readonly active?: boolean | null;
  readonly status?: Models.SubscriptionStatus | ReadonlyArray<Models.SubscriptionStatus> | null;
  readonly cancel_at_period_end?: boolean | null;
  readonly customer_cancellation_reason?:
    | Models.CustomerCancellationReason
    | ReadonlyArray<Models.CustomerCancellationReason>
    | null;
  readonly canceled_at_after?: (DateTime.Utc | string) | null;
  readonly canceled_at_before?: (DateTime.Utc | string) | null;
  readonly started_after?: (DateTime.Utc | string) | null;
  readonly started_before?: (DateTime.Utc | string) | null;
  readonly page?: number;
  readonly limit?: number;
  readonly sorting?: ReadonlyArray<Models.SubscriptionSortProperty> | null;
  readonly metadata?: Models.MetadataQuery;
}): Stream.Stream<
  Models.Subscription,
  Errors.SubscriptionsListErrors | PolarRequestError,
  PolarClient
> => paginate(query?.page ?? 1, (page) => list({ ...query, page }));

/**
 * Create a subscription programmatically.
 *
 * This endpoint only allows to create subscription on free products.
 * For paid products, use the checkout flow.
 *
 * No initial order will be created and no confirmation email will be sent.
 *
 * **Scopes**: `subscriptions:write`
 */
export const create = (
  body: Models.SubscriptionCreateCustomer | Models.SubscriptionCreateExternalCustomer,
): Effect.Effect<
  Models.Subscription,
  Errors.SubscriptionsCreateErrors | PolarRequestError,
  PolarClient
> =>
  request({
    method: "POST",
    path: "/v1/subscriptions/",
    body: [
      Schema.Union([Models.SubscriptionCreateCustomer, Models.SubscriptionCreateExternalCustomer]),
      body,
    ],
    success: Models.Subscription,
    errors: { 422: [[Models.HTTPValidationError, Errors.SubscriptionsCreateHTTPValidationError]] },
  });

/**
 * Export subscriptions as a CSV file.
 *
 * **Scopes**: `subscriptions:read` `subscriptions:write`
 */
const export_ = (query?: {
  readonly organization_id?: string | ReadonlyArray<string> | null;
  readonly product_id?: string | ReadonlyArray<string> | null;
  readonly status?: Models.SubscriptionStatus | ReadonlyArray<Models.SubscriptionStatus> | null;
  readonly cancel_at_period_end?: boolean | null;
  readonly started_after?: (DateTime.Utc | string) | null;
  readonly started_before?: (DateTime.Utc | string) | null;
  readonly timezone?: string;
  readonly columns?:
    | Models.SubscriptionExportColumn
    | ReadonlyArray<Models.SubscriptionExportColumn>
    | null;
}): Effect.Effect<string, Errors.SubscriptionsExportErrors | PolarRequestError, PolarClient> =>
  request({
    method: "GET",
    path: "/v1/subscriptions/export",
    query,
    success: "text",
    errors: { 422: [[Models.HTTPValidationError, Errors.SubscriptionsExportHTTPValidationError]] },
  });
export { export_ as export };

/**
 * Get a subscription by ID.
 *
 * **Scopes**: `subscriptions:read` `subscriptions:write`
 */
export const get = (
  id: string,
): Effect.Effect<
  Models.Subscription,
  Errors.SubscriptionsGetErrors | PolarRequestError,
  PolarClient
> =>
  request({
    method: "GET",
    path: "/v1/subscriptions/{id}",
    pathParams: { id: id },
    success: Models.Subscription,
    errors: {
      404: [[Models.ResourceNotFound, Errors.SubscriptionsGetResourceNotFoundError]],
      422: [[Models.HTTPValidationError, Errors.SubscriptionsGetHTTPValidationError]],
    },
  });

/**
 * Revoke a subscription, i.e cancel immediately.
 *
 * **Scopes**: `subscriptions:write`
 */
export const revoke = (
  id: string,
): Effect.Effect<
  Models.Subscription,
  Errors.SubscriptionsRevokeErrors | PolarRequestError,
  PolarClient
> =>
  request({
    method: "DELETE",
    path: "/v1/subscriptions/{id}",
    pathParams: { id: id },
    success: Models.Subscription,
    errors: {
      403: [
        [
          Models.AlreadyCanceledSubscription,
          Errors.SubscriptionsRevokeAlreadyCanceledSubscriptionError,
        ],
      ],
      404: [[Models.ResourceNotFound, Errors.SubscriptionsRevokeResourceNotFoundError]],
      409: [[Models.SubscriptionLocked, Errors.SubscriptionsRevokeSubscriptionLockedError]],
      422: [[Models.HTTPValidationError, Errors.SubscriptionsRevokeHTTPValidationError]],
    },
  });

/**
 * Update a subscription.
 *
 * **Scopes**: `subscriptions:write`
 */
export const update = (
  id: string,
  body: Models.SubscriptionUpdate,
): Effect.Effect<
  Models.Subscription,
  Errors.SubscriptionsUpdateErrors | PolarRequestError,
  PolarClient
> =>
  request({
    method: "PATCH",
    path: "/v1/subscriptions/{id}",
    pathParams: { id: id },
    body: [Models.SubscriptionUpdate, body],
    success: Models.Subscription,
    errors: {
      402: [[Models.PaymentFailed, Errors.SubscriptionsUpdatePaymentFailedError]],
      403: [
        [
          Models.AlreadyCanceledSubscription,
          Errors.SubscriptionsUpdateAlreadyCanceledSubscriptionError,
        ],
        [Models.InactiveSubscription, Errors.SubscriptionsUpdateInactiveSubscriptionError],
      ],
      404: [[Models.ResourceNotFound, Errors.SubscriptionsUpdateResourceNotFoundError]],
      409: [
        [Models.SubscriptionLocked, Errors.SubscriptionsUpdateSubscriptionLockedError],
        [
          Models.SubscriptionNotScheduledToCancel,
          Errors.SubscriptionsUpdateSubscriptionNotScheduledToCancelError,
        ],
      ],
      422: [[Models.HTTPValidationError, Errors.SubscriptionsUpdateHTTPValidationError]],
    },
  });
