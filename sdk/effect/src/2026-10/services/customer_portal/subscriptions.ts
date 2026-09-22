import type { Effect } from "effect";
import type { Stream } from "effect";

import type { PolarClient, PolarRequestError } from "../../../PolarClient";

import { paginate, request } from "../../../PolarClient";
import * as Errors from "../../errors";
import * as Models from "../../models";

/**
 * List subscriptions of the authenticated customer.
 *
 * **Scopes**: `customer_portal:read` `customer_portal:write`
 */
export const list = (query?: {
  readonly product_id?: string | ReadonlyArray<string> | null;
  readonly active?: boolean | null;
  readonly query?: string | null;
  readonly page?: number;
  readonly limit?: number;
  readonly sorting?: ReadonlyArray<Models.CustomerSubscriptionSortProperty> | null;
}): Effect.Effect<
  Models.ListResourceCustomerSubscription,
  Errors.CustomerPortalSubscriptionsListErrors | PolarRequestError,
  PolarClient
> =>
  request({
    method: "GET",
    path: "/v1/customer-portal/subscriptions/",
    query,
    success: Models.ListResourceCustomerSubscription,
    errors: {
      422: [
        [Models.HTTPValidationError, Errors.CustomerPortalSubscriptionsListHTTPValidationError],
      ],
    },
  });

/**
 * List subscriptions of the authenticated customer.
 *
 * **Scopes**: `customer_portal:read` `customer_portal:write`
 *
 * Streams every item across all pages.
 */
export const listStream = (query?: {
  readonly product_id?: string | ReadonlyArray<string> | null;
  readonly active?: boolean | null;
  readonly query?: string | null;
  readonly page?: number;
  readonly limit?: number;
  readonly sorting?: ReadonlyArray<Models.CustomerSubscriptionSortProperty> | null;
}): Stream.Stream<
  Models.CustomerSubscription,
  Errors.CustomerPortalSubscriptionsListErrors | PolarRequestError,
  PolarClient
> => paginate(query?.page ?? 1, (page) => list({ ...query, page }));

/**
 * Get a subscription for the authenticated customer.
 *
 * **Scopes**: `customer_portal:read` `customer_portal:write`
 */
export const get = (
  id: string,
): Effect.Effect<
  Models.CustomerSubscription,
  Errors.CustomerPortalSubscriptionsGetErrors | PolarRequestError,
  PolarClient
> =>
  request({
    method: "GET",
    path: "/v1/customer-portal/subscriptions/{id}",
    pathParams: { id: id },
    success: Models.CustomerSubscription,
    errors: {
      404: [[Models.ResourceNotFound, Errors.CustomerPortalSubscriptionsGetResourceNotFoundError]],
      422: [[Models.HTTPValidationError, Errors.CustomerPortalSubscriptionsGetHTTPValidationError]],
    },
  });

/**
 * Cancel a subscription of the authenticated customer.
 */
export const cancel = (
  id: string,
): Effect.Effect<
  Models.CustomerSubscription,
  Errors.CustomerPortalSubscriptionsCancelErrors | PolarRequestError,
  PolarClient
> =>
  request({
    method: "DELETE",
    path: "/v1/customer-portal/subscriptions/{id}",
    pathParams: { id: id },
    success: Models.CustomerSubscription,
    errors: {
      403: [
        [
          Models.AlreadyCanceledSubscription,
          Errors.CustomerPortalSubscriptionsCancelAlreadyCanceledSubscriptionError,
        ],
      ],
      404: [
        [Models.ResourceNotFound, Errors.CustomerPortalSubscriptionsCancelResourceNotFoundError],
      ],
      422: [
        [Models.HTTPValidationError, Errors.CustomerPortalSubscriptionsCancelHTTPValidationError],
      ],
    },
  });

/**
 * Update a subscription of the authenticated customer.
 */
export const update = (
  id: string,
  body: Models.CustomerSubscriptionUpdate,
): Effect.Effect<
  Models.CustomerSubscription,
  Errors.CustomerPortalSubscriptionsUpdateErrors | PolarRequestError,
  PolarClient
> =>
  request({
    method: "PATCH",
    path: "/v1/customer-portal/subscriptions/{id}",
    pathParams: { id: id },
    body: [Models.CustomerSubscriptionUpdate, body],
    success: Models.CustomerSubscription,
    errors: {
      402: [[Models.PaymentFailed, Errors.CustomerPortalSubscriptionsUpdatePaymentFailedError]],
      403: [
        [
          Models.AlreadyCanceledSubscription,
          Errors.CustomerPortalSubscriptionsUpdateAlreadyCanceledSubscriptionError,
        ],
        [
          Models.PauseResumeNotAllowed,
          Errors.CustomerPortalSubscriptionsUpdatePauseResumeNotAllowedError,
        ],
        [
          Models.UpdateSubscriptionPlanNotAllowed,
          Errors.CustomerPortalSubscriptionsUpdateUpdateSubscriptionPlanNotAllowedError,
        ],
        [
          Models.UpdateSubscriptionSeatsNotAllowed,
          Errors.CustomerPortalSubscriptionsUpdateUpdateSubscriptionSeatsNotAllowedError,
        ],
        [
          Models.UpdateSubscriptionUnitsNotAllowed,
          Errors.CustomerPortalSubscriptionsUpdateUpdateSubscriptionUnitsNotAllowedError,
        ],
      ],
      404: [
        [Models.ResourceNotFound, Errors.CustomerPortalSubscriptionsUpdateResourceNotFoundError],
      ],
      409: [
        [
          Models.PaymentMethodRequired,
          Errors.CustomerPortalSubscriptionsUpdatePaymentMethodRequiredError,
        ],
        [
          Models.SubscriptionNotScheduledToCancel,
          Errors.CustomerPortalSubscriptionsUpdateSubscriptionNotScheduledToCancelError,
        ],
      ],
      422: [
        [Models.HTTPValidationError, Errors.CustomerPortalSubscriptionsUpdateHTTPValidationError],
      ],
    },
  });
