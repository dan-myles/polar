import type { Effect } from "effect";
import type { Stream } from "effect";

import { Schema } from "effect";

import type { PolarClient, PolarRequestError } from "../../../PolarClient";

import { paginate, request } from "../../../PolarClient";
import * as Errors from "../../errors";
import * as Models from "../../models";

/**
 * Get authenticated customer.
 *
 * **Scopes**: `customer_portal:read` `customer_portal:write`
 */
export const get = (): Effect.Effect<
  Models.CustomerPortalCustomer,
  PolarRequestError,
  PolarClient
> =>
  request({
    method: "GET",
    path: "/v1/customer-portal/customers/me",
    success: Models.CustomerPortalCustomer,
  });

/**
 * Update authenticated customer.
 */
export const update = (
  body: Models.CustomerPortalCustomerUpdate,
): Effect.Effect<
  Models.CustomerPortalCustomer,
  Errors.CustomerPortalCustomersUpdateErrors | PolarRequestError,
  PolarClient
> =>
  request({
    method: "PATCH",
    path: "/v1/customer-portal/customers/me",
    body: [Models.CustomerPortalCustomerUpdate, body],
    success: Models.CustomerPortalCustomer,
    errors: {
      422: [[Models.HTTPValidationError, Errors.CustomerPortalCustomersUpdateHTTPValidationError]],
    },
  });

/**
 * Get saved payment methods of the authenticated customer.
 */
export const listPaymentMethods = (query?: {
  readonly page?: number;
  readonly limit?: number;
}): Effect.Effect<
  Models.ListResourceCustomerPaymentMethod,
  Errors.CustomerPortalCustomersListPaymentMethodsErrors | PolarRequestError,
  PolarClient
> =>
  request({
    method: "GET",
    path: "/v1/customer-portal/customers/me/payment-methods",
    query,
    success: Models.ListResourceCustomerPaymentMethod,
    errors: {
      422: [
        [
          Models.HTTPValidationError,
          Errors.CustomerPortalCustomersListPaymentMethodsHTTPValidationError,
        ],
      ],
    },
  });

/**
 * Get saved payment methods of the authenticated customer.
 *
 * Streams every item across all pages.
 */
export const listPaymentMethodsStream = (query?: {
  readonly page?: number;
  readonly limit?: number;
}): Stream.Stream<
  Models.CustomerPaymentMethod,
  Errors.CustomerPortalCustomersListPaymentMethodsErrors | PolarRequestError,
  PolarClient
> => paginate(query?.page ?? 1, (page) => listPaymentMethods({ ...query, page }));

/**
 * Add a payment method to the authenticated customer.
 */
export const addPaymentMethod = (
  body: Models.CustomerPaymentMethodCreate,
): Effect.Effect<
  Models.CustomerPaymentMethodCreateResponse,
  Errors.CustomerPortalCustomersAddPaymentMethodErrors | PolarRequestError,
  PolarClient
> =>
  request({
    method: "POST",
    path: "/v1/customer-portal/customers/me/payment-methods",
    body: [Models.CustomerPaymentMethodCreate, body],
    success: Models.CustomerPaymentMethodCreateResponse,
    errors: {
      400: [
        [
          Models.PaymentMethodSetupFailed,
          Errors.CustomerPortalCustomersAddPaymentMethodPaymentMethodSetupFailedError,
        ],
      ],
      422: [
        [
          Models.HTTPValidationError,
          Errors.CustomerPortalCustomersAddPaymentMethodHTTPValidationError,
        ],
      ],
    },
  });

/**
 * Confirm a payment method for the authenticated customer.
 */
export const confirmPaymentMethod = (
  body: Models.CustomerPaymentMethodConfirm,
): Effect.Effect<
  Models.CustomerPaymentMethodCreateResponse,
  Errors.CustomerPortalCustomersConfirmPaymentMethodErrors | PolarRequestError,
  PolarClient
> =>
  request({
    method: "POST",
    path: "/v1/customer-portal/customers/me/payment-methods/confirm",
    body: [Models.CustomerPaymentMethodConfirm, body],
    success: Models.CustomerPaymentMethodCreateResponse,
    errors: {
      403: [
        [
          Models.CustomerNotReady,
          Errors.CustomerPortalCustomersConfirmPaymentMethodCustomerNotReadyError,
        ],
      ],
      422: [
        [
          Models.HTTPValidationError,
          Errors.CustomerPortalCustomersConfirmPaymentMethodHTTPValidationError,
        ],
      ],
    },
  });

/**
 * Delete a payment method from the authenticated customer.
 */
export const deletePaymentMethod = (
  id: string,
): Effect.Effect<
  void,
  Errors.CustomerPortalCustomersDeletePaymentMethodErrors | PolarRequestError,
  PolarClient
> =>
  request({
    method: "DELETE",
    path: "/v1/customer-portal/customers/me/payment-methods/{id}",
    pathParams: { id: id },
    success: "none",
    errors: {
      400: [
        [
          Models.PaymentMethodInUseByActiveSubscription,
          Errors.CustomerPortalCustomersDeletePaymentMethodPaymentMethodInUseByActiveSubscriptionError,
        ],
      ],
      404: [
        [
          Models.ResourceNotFound,
          Errors.CustomerPortalCustomersDeletePaymentMethodResourceNotFoundError,
        ],
      ],
      422: [
        [
          Models.HTTPValidationError,
          Errors.CustomerPortalCustomersDeletePaymentMethodHTTPValidationError,
        ],
      ],
    },
  });

/**
 * Request an email change for the authenticated customer.
 */
export const requestEmailUpdate = (
  body: Models.CustomerEmailUpdateRequest,
): Effect.Effect<
  unknown,
  Errors.CustomerPortalCustomersRequestEmailUpdateErrors | PolarRequestError,
  PolarClient
> =>
  request({
    method: "POST",
    path: "/v1/customer-portal/customers/me/email-update/request",
    body: [Models.CustomerEmailUpdateRequest, body],
    success: Schema.Unknown,
    errors: {
      422: [
        [
          Models.HTTPValidationError,
          Errors.CustomerPortalCustomersRequestEmailUpdateHTTPValidationError,
        ],
      ],
    },
  });

/**
 * Check if an email change verification token is still valid.
 */
export const checkEmailUpdate = (query: {
  readonly token: string;
}): Effect.Effect<
  void,
  Errors.CustomerPortalCustomersCheckEmailUpdateErrors | PolarRequestError,
  PolarClient
> =>
  request({
    method: "GET",
    path: "/v1/customer-portal/customers/me/email-update/check",
    query,
    success: "none",
    errors: {
      401: [[null, Errors.CustomerPortalCustomersCheckEmailUpdateUnauthorizedError]],
      422: [
        [
          Models.HTTPValidationError,
          Errors.CustomerPortalCustomersCheckEmailUpdateHTTPValidationError,
        ],
      ],
    },
  });

/**
 * Verify an email change using the token from the verification email.
 */
export const verifyEmailUpdate = (
  body: Models.CustomerEmailUpdateVerifyRequest,
): Effect.Effect<
  Models.CustomerEmailUpdateVerifyResponse,
  Errors.CustomerPortalCustomersVerifyEmailUpdateErrors | PolarRequestError,
  PolarClient
> =>
  request({
    method: "POST",
    path: "/v1/customer-portal/customers/me/email-update/verify",
    body: [Models.CustomerEmailUpdateVerifyRequest, body],
    success: Models.CustomerEmailUpdateVerifyResponse,
    errors: {
      401: [[null, Errors.CustomerPortalCustomersVerifyEmailUpdateUnauthorizedError]],
      422: [[null, Errors.CustomerPortalCustomersVerifyEmailUpdateUnprocessableEntityError]],
    },
  });
