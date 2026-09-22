import type { Effect } from "effect";
import type { Stream } from "effect";

import { Schema } from "effect";

import type { PolarClient, PolarRequestError } from "../../../PolarClient";

import { paginate, request } from "../../../PolarClient";
import * as Errors from "../../errors";
import * as Models from "../../models";

/**
 * List orders of the authenticated customer.
 */
export const list = (query?: {
  readonly product_id?: string | ReadonlyArray<string> | null;
  readonly product_billing_type?:
    | Models.ProductBillingType
    | ReadonlyArray<Models.ProductBillingType>
    | null;
  readonly subscription_id?: string | ReadonlyArray<string> | null;
  readonly query?: string | null;
  readonly page?: number;
  readonly limit?: number;
  readonly sorting?: ReadonlyArray<Models.CustomerOrderSortProperty> | null;
}): Effect.Effect<
  Models.ListResourceCustomerOrder,
  Errors.CustomerPortalOrdersListErrors | PolarRequestError,
  PolarClient
> =>
  request({
    method: "GET",
    path: "/v1/customer-portal/orders/",
    query,
    success: Models.ListResourceCustomerOrder,
    errors: {
      422: [[Models.HTTPValidationError, Errors.CustomerPortalOrdersListHTTPValidationError]],
    },
  });

/**
 * List orders of the authenticated customer.
 *
 * Streams every item across all pages.
 */
export const listStream = (query?: {
  readonly product_id?: string | ReadonlyArray<string> | null;
  readonly product_billing_type?:
    | Models.ProductBillingType
    | ReadonlyArray<Models.ProductBillingType>
    | null;
  readonly subscription_id?: string | ReadonlyArray<string> | null;
  readonly query?: string | null;
  readonly page?: number;
  readonly limit?: number;
  readonly sorting?: ReadonlyArray<Models.CustomerOrderSortProperty> | null;
}): Stream.Stream<
  Models.CustomerOrder,
  Errors.CustomerPortalOrdersListErrors | PolarRequestError,
  PolarClient
> => paginate(query?.page ?? 1, (page) => list({ ...query, page }));

/**
 * Get an order by ID for the authenticated customer.
 */
export const get = (
  id: string,
): Effect.Effect<
  Models.CustomerOrder,
  Errors.CustomerPortalOrdersGetErrors | PolarRequestError,
  PolarClient
> =>
  request({
    method: "GET",
    path: "/v1/customer-portal/orders/{id}",
    pathParams: { id: id },
    success: Models.CustomerOrder,
    errors: {
      404: [[Models.ResourceNotFound, Errors.CustomerPortalOrdersGetResourceNotFoundError]],
      422: [[Models.HTTPValidationError, Errors.CustomerPortalOrdersGetHTTPValidationError]],
    },
  });

/**
 * Update an order for the authenticated customer.
 */
export const update = (
  id: string,
  body: Models.CustomerOrderUpdate,
): Effect.Effect<
  Models.CustomerOrder,
  Errors.CustomerPortalOrdersUpdateErrors | PolarRequestError,
  PolarClient
> =>
  request({
    method: "PATCH",
    path: "/v1/customer-portal/orders/{id}",
    pathParams: { id: id },
    body: [Models.CustomerOrderUpdate, body],
    success: Models.CustomerOrder,
    errors: {
      404: [[Models.ResourceNotFound, Errors.CustomerPortalOrdersUpdateResourceNotFoundError]],
      422: [[Models.HTTPValidationError, Errors.CustomerPortalOrdersUpdateHTTPValidationError]],
    },
  });

/**
 * Get an order's invoice data.
 */
export const invoice = (
  id: string,
): Effect.Effect<
  Models.CustomerOrderInvoice,
  Errors.CustomerPortalOrdersInvoiceErrors | PolarRequestError,
  PolarClient
> =>
  request({
    method: "GET",
    path: "/v1/customer-portal/orders/{id}/invoice",
    pathParams: { id: id },
    success: Models.CustomerOrderInvoice,
    errors: {
      404: [[Models.ResourceNotFound, Errors.CustomerPortalOrdersInvoiceResourceNotFoundError]],
      422: [[Models.HTTPValidationError, Errors.CustomerPortalOrdersInvoiceHTTPValidationError]],
    },
  });

/**
 * Trigger generation of an order's invoice.
 */
export const generateInvoice = (
  id: string,
): Effect.Effect<
  unknown,
  Errors.CustomerPortalOrdersGenerateInvoiceErrors | PolarRequestError,
  PolarClient
> =>
  request({
    method: "POST",
    path: "/v1/customer-portal/orders/{id}/invoice",
    pathParams: { id: id },
    success: Schema.Unknown,
    errors: {
      404: [
        [Models.ResourceNotFound, Errors.CustomerPortalOrdersGenerateInvoiceResourceNotFoundError],
      ],
      409: [
        [
          Models.OrderNotEligibleForInvoice,
          Errors.CustomerPortalOrdersGenerateInvoiceOrderNotEligibleForInvoiceError,
        ],
      ],
      422: [
        [
          Models.MissingInvoiceBillingDetails,
          Errors.CustomerPortalOrdersGenerateInvoiceMissingInvoiceBillingDetailsError,
        ],
      ],
    },
  });

/**
 * Get a presigned URL to download an order's receipt PDF.
 */
export const receipt = (
  id: string,
): Effect.Effect<
  Models.CustomerOrderReceipt,
  Errors.CustomerPortalOrdersReceiptErrors | PolarRequestError,
  PolarClient
> =>
  request({
    method: "GET",
    path: "/v1/customer-portal/orders/{id}/receipt",
    pathParams: { id: id },
    success: Models.CustomerOrderReceipt,
    errors: {
      404: [[Models.ResourceNotFound, Errors.CustomerPortalOrdersReceiptResourceNotFoundError]],
      422: [[Models.HTTPValidationError, Errors.CustomerPortalOrdersReceiptHTTPValidationError]],
    },
  });

/**
 * Get the current payment status for an order.
 */
export const getPaymentStatus = (
  id: string,
): Effect.Effect<
  Models.CustomerOrderPaymentStatus,
  Errors.CustomerPortalOrdersGetPaymentStatusErrors | PolarRequestError,
  PolarClient
> =>
  request({
    method: "GET",
    path: "/v1/customer-portal/orders/{id}/payment-status",
    pathParams: { id: id },
    success: Models.CustomerOrderPaymentStatus,
    errors: {
      404: [
        [Models.ResourceNotFound, Errors.CustomerPortalOrdersGetPaymentStatusResourceNotFoundError],
      ],
      422: [
        [
          Models.HTTPValidationError,
          Errors.CustomerPortalOrdersGetPaymentStatusHTTPValidationError,
        ],
      ],
    },
  });

/**
 * Confirm a retry payment using a Stripe confirmation token.
 */
export const confirmRetryPayment = (
  id: string,
  body: Models.CustomerOrderConfirmPayment,
): Effect.Effect<
  Models.CustomerOrderPaymentConfirmation,
  Errors.CustomerPortalOrdersConfirmRetryPaymentErrors | PolarRequestError,
  PolarClient
> =>
  request({
    method: "POST",
    path: "/v1/customer-portal/orders/{id}/confirm-payment",
    pathParams: { id: id },
    body: [Models.CustomerOrderConfirmPayment, body],
    success: Models.CustomerOrderPaymentConfirmation,
    errors: {
      404: [
        [
          Models.ResourceNotFound,
          Errors.CustomerPortalOrdersConfirmRetryPaymentResourceNotFoundError,
        ],
      ],
      409: [
        [
          Models.PaymentAlreadyInProgress,
          Errors.CustomerPortalOrdersConfirmRetryPaymentPaymentAlreadyInProgressError,
        ],
      ],
      422: [
        [
          Models.OrderNotEligibleForRetry,
          Errors.CustomerPortalOrdersConfirmRetryPaymentOrderNotEligibleForRetryError,
        ],
      ],
      429: [
        [
          Models.ManualRetryLimitExceeded,
          Errors.CustomerPortalOrdersConfirmRetryPaymentManualRetryLimitExceededError,
        ],
      ],
    },
  });
