import type { DateTime, Effect } from "effect";
import type { Stream } from "effect";

import { Schema } from "effect";

import type { PolarClient, PolarRequestError } from "../../PolarClient";

import { paginate, request } from "../../PolarClient";
import * as Errors from "../errors";
import * as Models from "../models";

/**
 * List orders.
 *
 * **Scopes**: `orders:read`
 */
export const list = (query?: {
  readonly organization_id?: string | ReadonlyArray<string> | null;
  readonly product_id?: string | ReadonlyArray<string> | null;
  readonly product_billing_type?:
    | Models.ProductBillingType
    | ReadonlyArray<Models.ProductBillingType>
    | null;
  readonly discount_id?: string | ReadonlyArray<string> | null;
  readonly customer_id?: string | ReadonlyArray<string> | null;
  readonly external_customer_id?: string | ReadonlyArray<string> | null;
  readonly checkout_id?: string | ReadonlyArray<string> | null;
  readonly subscription_id?: string | ReadonlyArray<string> | null;
  readonly status?: Models.OrderStatus | ReadonlyArray<Models.OrderStatus> | null;
  readonly created_after?: (DateTime.Utc | string) | null;
  readonly created_before?: (DateTime.Utc | string) | null;
  readonly page?: number;
  readonly limit?: number;
  readonly sorting?: ReadonlyArray<Models.OrderSortProperty> | null;
  readonly metadata?: Models.MetadataQuery;
}): Effect.Effect<
  Models.ListResourceOrder,
  Errors.OrdersListErrors | PolarRequestError,
  PolarClient
> =>
  request({
    method: "GET",
    path: "/v1/orders/",
    query,
    success: Models.ListResourceOrder,
    errors: { 422: [[Models.HTTPValidationError, Errors.OrdersListHTTPValidationError]] },
  });

/**
 * List orders.
 *
 * **Scopes**: `orders:read`
 *
 * Streams every item across all pages.
 */
export const listStream = (query?: {
  readonly organization_id?: string | ReadonlyArray<string> | null;
  readonly product_id?: string | ReadonlyArray<string> | null;
  readonly product_billing_type?:
    | Models.ProductBillingType
    | ReadonlyArray<Models.ProductBillingType>
    | null;
  readonly discount_id?: string | ReadonlyArray<string> | null;
  readonly customer_id?: string | ReadonlyArray<string> | null;
  readonly external_customer_id?: string | ReadonlyArray<string> | null;
  readonly checkout_id?: string | ReadonlyArray<string> | null;
  readonly subscription_id?: string | ReadonlyArray<string> | null;
  readonly status?: Models.OrderStatus | ReadonlyArray<Models.OrderStatus> | null;
  readonly created_after?: (DateTime.Utc | string) | null;
  readonly created_before?: (DateTime.Utc | string) | null;
  readonly page?: number;
  readonly limit?: number;
  readonly sorting?: ReadonlyArray<Models.OrderSortProperty> | null;
  readonly metadata?: Models.MetadataQuery;
}): Stream.Stream<Models.Order, Errors.OrdersListErrors | PolarRequestError, PolarClient> =>
  paginate(query?.page ?? 1, (page) => list({ ...query, page }));

/**
 * Create a draft order for an off-session charge against a saved payment
 * method. The order is created with `status=draft` and no invoice number;
 * call `POST /v1/orders/{id}/finalize` to attempt the charge.
 *
 * The organization must have the `off_session_charges_enabled` feature flag.
 *
 * **Scopes**: `orders:write`
 */
export const create = (
  body: Models.OrderCreate,
): Effect.Effect<Models.Order, Errors.OrdersCreateErrors | PolarRequestError, PolarClient> =>
  request({
    method: "POST",
    path: "/v1/orders/",
    body: [Models.OrderCreate, body],
    success: Models.Order,
    errors: { 422: [[Models.HTTPValidationError, Errors.OrdersCreateHTTPValidationError]] },
  });

/**
 * Export orders as a CSV file.
 *
 * **Scopes**: `orders:read`
 */
const export_ = (query?: {
  readonly organization_id?: string | ReadonlyArray<string> | null;
  readonly product_id?: string | ReadonlyArray<string> | null;
  readonly status?: Models.OrderStatus | ReadonlyArray<Models.OrderStatus> | null;
  readonly created_after?: (DateTime.Utc | string) | null;
  readonly created_before?: (DateTime.Utc | string) | null;
  readonly timezone?: string;
  readonly columns?: Models.OrderExportColumn | ReadonlyArray<Models.OrderExportColumn> | null;
}): Effect.Effect<string, Errors.OrdersExportErrors | PolarRequestError, PolarClient> =>
  request({
    method: "GET",
    path: "/v1/orders/export",
    query,
    success: "text",
    errors: { 422: [[Models.HTTPValidationError, Errors.OrdersExportHTTPValidationError]] },
  });
export { export_ as export };

/**
 * Get an order by ID.
 *
 * **Scopes**: `orders:read`
 */
export const get = (
  id: string,
): Effect.Effect<Models.Order, Errors.OrdersGetErrors | PolarRequestError, PolarClient> =>
  request({
    method: "GET",
    path: "/v1/orders/{id}",
    pathParams: { id: id },
    success: Models.Order,
    errors: {
      404: [[Models.ResourceNotFound, Errors.OrdersGetResourceNotFoundError]],
      422: [[Models.HTTPValidationError, Errors.OrdersGetHTTPValidationError]],
    },
  });

/**
 * Update an order.
 *
 * **Scopes**: `orders:write`
 */
export const update = (
  id: string,
  body: Models.OrderUpdate,
): Effect.Effect<Models.Order, Errors.OrdersUpdateErrors | PolarRequestError, PolarClient> =>
  request({
    method: "PATCH",
    path: "/v1/orders/{id}",
    pathParams: { id: id },
    body: [Models.OrderUpdate, body],
    success: Models.Order,
    errors: {
      404: [[Models.ResourceNotFound, Errors.OrdersUpdateResourceNotFoundError]],
      422: [[Models.HTTPValidationError, Errors.OrdersUpdateHTTPValidationError]],
    },
  });

/**
 * Finalize a draft order and synchronously attempt an off-session charge.
 *
 * On success, the order transitions to `paid` and benefit grants fire
 * before the response returns. On failure (decline, missing payment method,
 * SCA challenge), the order stays in `draft` and a 4xx error is returned.
 *
 * The request fails with 412 if the order is not in `draft` status.
 *
 * **Scopes**: `orders:write`
 */
export const finalize = (
  id: string,
  body: Models.OrderFinalize,
): Effect.Effect<Models.Order, Errors.OrdersFinalizeErrors | PolarRequestError, PolarClient> =>
  request({
    method: "POST",
    path: "/v1/orders/{id}/finalize",
    pathParams: { id: id },
    body: [Models.OrderFinalize, body],
    success: Models.Order,
    errors: {
      402: [
        [Models.PaymentFailed, Errors.OrdersFinalizePaymentFailedError],
        [Models.PaymentActionRequired, Errors.OrdersFinalizePaymentActionRequiredError],
      ],
      403: [
        [Models.OffSessionChargesNotEnabled, Errors.OrdersFinalizeOffSessionChargesNotEnabledError],
        [
          Models.OrganizationNotReadyForPayments,
          Errors.OrdersFinalizeOrganizationNotReadyForPaymentsError,
        ],
      ],
      404: [[Models.ResourceNotFound, Errors.OrdersFinalizeResourceNotFoundError]],
      412: [[Models.OrderNotDraft, Errors.OrdersFinalizeOrderNotDraftError]],
      422: [[Models.HTTPValidationError, Errors.OrdersFinalizeHTTPValidationError]],
    },
  });

/**
 * Get an order's invoice data.
 *
 * **Scopes**: `orders:read`
 */
export const invoice = (
  id: string,
): Effect.Effect<
  Models.OrderInvoice,
  Errors.OrdersInvoiceErrors | PolarRequestError,
  PolarClient
> =>
  request({
    method: "GET",
    path: "/v1/orders/{id}/invoice",
    pathParams: { id: id },
    success: Models.OrderInvoice,
    errors: {
      404: [[Models.ResourceNotFound, Errors.OrdersInvoiceResourceNotFoundError]],
      422: [[Models.HTTPValidationError, Errors.OrdersInvoiceHTTPValidationError]],
    },
  });

/**
 * Trigger generation of an order's invoice.
 *
 * **Scopes**: `orders:read`
 */
export const generateInvoice = (
  id: string,
): Effect.Effect<unknown, Errors.OrdersGenerateInvoiceErrors | PolarRequestError, PolarClient> =>
  request({
    method: "POST",
    path: "/v1/orders/{id}/invoice",
    pathParams: { id: id },
    success: Schema.Unknown,
    errors: {
      404: [[Models.ResourceNotFound, Errors.OrdersGenerateInvoiceResourceNotFoundError]],
      409: [
        [
          Models.OrderNotEligibleForInvoice,
          Errors.OrdersGenerateInvoiceOrderNotEligibleForInvoiceError,
        ],
      ],
      422: [
        [
          Models.MissingInvoiceBillingDetails,
          Errors.OrdersGenerateInvoiceMissingInvoiceBillingDetailsError,
        ],
      ],
    },
  });

/**
 * Get a presigned URL to download an order's receipt PDF.
 *
 * **Scopes**: `orders:read`
 */
export const receipt = (
  id: string,
): Effect.Effect<
  Models.OrderReceipt,
  Errors.OrdersReceiptErrors | PolarRequestError,
  PolarClient
> =>
  request({
    method: "GET",
    path: "/v1/orders/{id}/receipt",
    pathParams: { id: id },
    success: Models.OrderReceipt,
    errors: {
      404: [[Models.ResourceNotFound, Errors.OrdersReceiptResourceNotFoundError]],
      422: [[Models.HTTPValidationError, Errors.OrdersReceiptHTTPValidationError]],
    },
  });
