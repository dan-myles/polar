import type { Effect } from "effect";
import type { Stream } from "effect";

import type { PolarClient, PolarRequestError } from "../../PolarClient";

import { paginate, request } from "../../PolarClient";
import * as Errors from "../errors";
import * as Models from "../models";

/**
 * List checkout sessions.
 *
 * **Scopes**: `checkouts:read` `checkouts:write`
 */
export const list = (query?: {
  readonly organization_id?: string | ReadonlyArray<string> | null;
  readonly product_id?: string | ReadonlyArray<string> | null;
  readonly customer_id?: string | ReadonlyArray<string> | null;
  readonly external_customer_id?: string | ReadonlyArray<string> | null;
  readonly status?: Models.CheckoutStatus | ReadonlyArray<Models.CheckoutStatus> | null;
  readonly query?: string | null;
  readonly page?: number;
  readonly limit?: number;
  readonly sorting?: ReadonlyArray<Models.CheckoutSortProperty> | null;
}): Effect.Effect<
  Models.ListResourceCheckout,
  Errors.CheckoutsListErrors | PolarRequestError,
  PolarClient
> =>
  request({
    method: "GET",
    path: "/v1/checkouts/",
    query,
    success: Models.ListResourceCheckout,
    errors: { 422: [[Models.HTTPValidationError, Errors.CheckoutsListHTTPValidationError]] },
  });

/**
 * List checkout sessions.
 *
 * **Scopes**: `checkouts:read` `checkouts:write`
 *
 * Streams every item across all pages.
 */
export const listStream = (query?: {
  readonly organization_id?: string | ReadonlyArray<string> | null;
  readonly product_id?: string | ReadonlyArray<string> | null;
  readonly customer_id?: string | ReadonlyArray<string> | null;
  readonly external_customer_id?: string | ReadonlyArray<string> | null;
  readonly status?: Models.CheckoutStatus | ReadonlyArray<Models.CheckoutStatus> | null;
  readonly query?: string | null;
  readonly page?: number;
  readonly limit?: number;
  readonly sorting?: ReadonlyArray<Models.CheckoutSortProperty> | null;
}): Stream.Stream<Models.Checkout, Errors.CheckoutsListErrors | PolarRequestError, PolarClient> =>
  paginate(query?.page ?? 1, (page) => list({ ...query, page }));

/**
 * Create a checkout session.
 *
 * **Scopes**: `checkouts:write`
 */
export const create = (
  body: Models.CheckoutCreate,
): Effect.Effect<Models.Checkout, Errors.CheckoutsCreateErrors | PolarRequestError, PolarClient> =>
  request({
    method: "POST",
    path: "/v1/checkouts/",
    body: [Models.CheckoutCreate, body],
    success: Models.Checkout,
    errors: { 422: [[Models.HTTPValidationError, Errors.CheckoutsCreateHTTPValidationError]] },
  });

/**
 * Get a checkout session by ID.
 *
 * **Scopes**: `checkouts:read` `checkouts:write`
 */
export const get = (
  id: string,
): Effect.Effect<Models.Checkout, Errors.CheckoutsGetErrors | PolarRequestError, PolarClient> =>
  request({
    method: "GET",
    path: "/v1/checkouts/{id}",
    pathParams: { id: id },
    success: Models.Checkout,
    errors: {
      404: [[Models.ResourceNotFound, Errors.CheckoutsGetResourceNotFoundError]],
      422: [[Models.HTTPValidationError, Errors.CheckoutsGetHTTPValidationError]],
    },
  });

/**
 * Update a checkout session.
 *
 * **Scopes**: `checkouts:write`
 */
export const update = (
  id: string,
  body: Models.CheckoutUpdate,
): Effect.Effect<Models.Checkout, Errors.CheckoutsUpdateErrors | PolarRequestError, PolarClient> =>
  request({
    method: "PATCH",
    path: "/v1/checkouts/{id}",
    pathParams: { id: id },
    body: [Models.CheckoutUpdate, body],
    success: Models.Checkout,
    errors: {
      403: [
        [
          Models.AlreadyActiveSubscriptionError,
          Errors.CheckoutsUpdateAlreadyActiveSubscriptionError,
        ],
        [Models.NotOpenCheckout, Errors.CheckoutsUpdateNotOpenCheckoutError],
        [Models.PaymentNotReady, Errors.CheckoutsUpdatePaymentNotReadyError],
        [Models.TrialAlreadyRedeemed, Errors.CheckoutsUpdateTrialAlreadyRedeemedError],
        [
          Models.DiscountRedemptionLimitReached,
          Errors.CheckoutsUpdateDiscountRedemptionLimitReachedError,
        ],
      ],
      404: [[Models.ResourceNotFound, Errors.CheckoutsUpdateResourceNotFoundError]],
      422: [[Models.HTTPValidationError, Errors.CheckoutsUpdateHTTPValidationError]],
    },
  });

/**
 * Get a checkout session by client secret.
 */
export const clientGet = (
  client_secret: string,
): Effect.Effect<
  Models.CheckoutPublic,
  Errors.CheckoutsClientGetErrors | PolarRequestError,
  PolarClient
> =>
  request({
    method: "GET",
    path: "/v1/checkouts/client/{client_secret}",
    pathParams: { client_secret: client_secret },
    success: Models.CheckoutPublic,
    errors: {
      404: [[Models.ResourceNotFound, Errors.CheckoutsClientGetResourceNotFoundError]],
      410: [[Models.ExpiredCheckoutError, Errors.CheckoutsClientGetExpiredCheckoutError]],
      422: [[Models.HTTPValidationError, Errors.CheckoutsClientGetHTTPValidationError]],
    },
  });

/**
 * Update a checkout session by client secret.
 */
export const clientUpdate = (
  client_secret: string,
  body: Models.CheckoutUpdatePublic,
): Effect.Effect<
  Models.CheckoutPublic,
  Errors.CheckoutsClientUpdateErrors | PolarRequestError,
  PolarClient
> =>
  request({
    method: "PATCH",
    path: "/v1/checkouts/client/{client_secret}",
    pathParams: { client_secret: client_secret },
    body: [Models.CheckoutUpdatePublic, body],
    success: Models.CheckoutPublic,
    errors: {
      403: [
        [
          Models.AlreadyActiveSubscriptionError,
          Errors.CheckoutsClientUpdateAlreadyActiveSubscriptionError,
        ],
        [Models.NotOpenCheckout, Errors.CheckoutsClientUpdateNotOpenCheckoutError],
        [Models.PaymentNotReady, Errors.CheckoutsClientUpdatePaymentNotReadyError],
        [Models.TrialAlreadyRedeemed, Errors.CheckoutsClientUpdateTrialAlreadyRedeemedError],
        [
          Models.DiscountRedemptionLimitReached,
          Errors.CheckoutsClientUpdateDiscountRedemptionLimitReachedError,
        ],
      ],
      404: [[Models.ResourceNotFound, Errors.CheckoutsClientUpdateResourceNotFoundError]],
      410: [[Models.ExpiredCheckoutError, Errors.CheckoutsClientUpdateExpiredCheckoutError]],
      422: [[Models.HTTPValidationError, Errors.CheckoutsClientUpdateHTTPValidationError]],
    },
  });

/**
 * Confirm a checkout session by client secret.
 *
 * Orders and subscriptions will be processed.
 */
export const clientConfirm = (
  client_secret: string,
  body: Models.CheckoutConfirmStripe,
): Effect.Effect<
  Models.CheckoutPublicConfirmed,
  Errors.CheckoutsClientConfirmErrors | PolarRequestError,
  PolarClient
> =>
  request({
    method: "POST",
    path: "/v1/checkouts/client/{client_secret}/confirm",
    pathParams: { client_secret: client_secret },
    body: [Models.CheckoutConfirmStripe, body],
    success: Models.CheckoutPublicConfirmed,
    errors: {
      400: [[Models.PaymentError, Errors.CheckoutsClientConfirmPaymentError]],
      403: [
        [
          Models.AlreadyActiveSubscriptionError,
          Errors.CheckoutsClientConfirmAlreadyActiveSubscriptionError,
        ],
        [Models.NotOpenCheckout, Errors.CheckoutsClientConfirmNotOpenCheckoutError],
        [Models.PaymentNotReady, Errors.CheckoutsClientConfirmPaymentNotReadyError],
        [Models.TrialAlreadyRedeemed, Errors.CheckoutsClientConfirmTrialAlreadyRedeemedError],
        [
          Models.DiscountRedemptionLimitReached,
          Errors.CheckoutsClientConfirmDiscountRedemptionLimitReachedError,
        ],
      ],
      404: [[Models.ResourceNotFound, Errors.CheckoutsClientConfirmResourceNotFoundError]],
      410: [[Models.ExpiredCheckoutError, Errors.CheckoutsClientConfirmExpiredCheckoutError]],
      422: [[Models.HTTPValidationError, Errors.CheckoutsClientConfirmHTTPValidationError]],
    },
  });
