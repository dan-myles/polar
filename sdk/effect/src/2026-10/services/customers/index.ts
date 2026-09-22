import type { Effect } from "effect";
import type { Stream } from "effect";

import type { PolarClient, PolarRequestError } from "../../../PolarClient";

import { paginate, request } from "../../../PolarClient";
import * as Errors from "../../errors";
import * as Models from "../../models";

export * as Members from "./members";

/**
 * List customers.
 *
 * **Scopes**: `customers:read` `customers:write`
 */
export const list = (query?: {
  readonly organization_id?: string | ReadonlyArray<string> | null;
  readonly email?: string | null;
  readonly query?: string | null;
  readonly active?: boolean | null;
  readonly page?: number;
  readonly limit?: number;
  readonly sorting?: ReadonlyArray<Models.CustomerSortProperty> | null;
  readonly metadata?: Models.MetadataQuery;
}): Effect.Effect<
  Models.ListResourceCustomer,
  Errors.CustomersListErrors | PolarRequestError,
  PolarClient
> =>
  request({
    method: "GET",
    path: "/v1/customers/",
    query,
    success: Models.ListResourceCustomer,
    errors: { 422: [[Models.HTTPValidationError, Errors.CustomersListHTTPValidationError]] },
  });

/**
 * List customers.
 *
 * **Scopes**: `customers:read` `customers:write`
 *
 * Streams every item across all pages.
 */
export const listStream = (query?: {
  readonly organization_id?: string | ReadonlyArray<string> | null;
  readonly email?: string | null;
  readonly query?: string | null;
  readonly active?: boolean | null;
  readonly page?: number;
  readonly limit?: number;
  readonly sorting?: ReadonlyArray<Models.CustomerSortProperty> | null;
  readonly metadata?: Models.MetadataQuery;
}): Stream.Stream<Models.Customer, Errors.CustomersListErrors | PolarRequestError, PolarClient> =>
  paginate(query?.page ?? 1, (page) => list({ ...query, page }));

/**
 * Create a customer.
 *
 * **Scopes**: `customers:write`
 */
export const create = (
  body: Models.CustomerCreate,
): Effect.Effect<Models.Customer, Errors.CustomersCreateErrors | PolarRequestError, PolarClient> =>
  request({
    method: "POST",
    path: "/v1/customers/",
    body: [Models.CustomerCreate, body],
    success: Models.Customer,
    errors: { 422: [[Models.HTTPValidationError, Errors.CustomersCreateHTTPValidationError]] },
  });

/**
 * Export customers as a CSV file.
 *
 * **Scopes**: `customers:read` `customers:write`
 */
const export_ = (query?: {
  readonly organization_id?: string | ReadonlyArray<string> | null;
}): Effect.Effect<string, Errors.CustomersExportErrors | PolarRequestError, PolarClient> =>
  request({
    method: "GET",
    path: "/v1/customers/export",
    query,
    success: "text",
    errors: { 422: [[Models.HTTPValidationError, Errors.CustomersExportHTTPValidationError]] },
  });
export { export_ as export };

/**
 * Get a customer by ID.
 *
 * **Scopes**: `customers:read` `customers:write`
 */
export const get = (
  id: string,
): Effect.Effect<Models.Customer, Errors.CustomersGetErrors | PolarRequestError, PolarClient> =>
  request({
    method: "GET",
    path: "/v1/customers/{id}",
    pathParams: { id: id },
    success: Models.Customer,
    errors: {
      404: [[Models.ResourceNotFound, Errors.CustomersGetResourceNotFoundError]],
      422: [[Models.HTTPValidationError, Errors.CustomersGetHTTPValidationError]],
    },
  });

/**
 * Delete a customer.
 *
 * This action cannot be undone and will immediately:
 * - Cancel any active subscriptions for the customer
 * - Revoke all their benefits
 * - Clear any `external_id`
 *
 * Use it only in the context of deleting a user within your
 * own service. Otherwise, use more granular API endpoints to cancel
 * a specific subscription or revoke certain benefits.
 *
 * Note: The customers information will nonetheless be retained for historic
 * orders and subscriptions.
 *
 * Set `anonymize=true` to also anonymize PII for GDPR compliance.
 *
 * **Scopes**: `customers:write`
 */
const delete_ = (
  id: string,
  query?: { readonly anonymize?: boolean },
): Effect.Effect<void, Errors.CustomersDeleteErrors | PolarRequestError, PolarClient> =>
  request({
    method: "DELETE",
    path: "/v1/customers/{id}",
    pathParams: { id: id },
    query,
    success: "none",
    errors: {
      404: [[Models.ResourceNotFound, Errors.CustomersDeleteResourceNotFoundError]],
      422: [[Models.HTTPValidationError, Errors.CustomersDeleteHTTPValidationError]],
    },
  });
export { delete_ as delete };

/**
 * Update a customer.
 *
 * **Scopes**: `customers:write`
 */
export const update = (
  id: string,
  body: Models.CustomerUpdate,
): Effect.Effect<Models.Customer, Errors.CustomersUpdateErrors | PolarRequestError, PolarClient> =>
  request({
    method: "PATCH",
    path: "/v1/customers/{id}",
    pathParams: { id: id },
    body: [Models.CustomerUpdate, body],
    success: Models.Customer,
    errors: {
      404: [[Models.ResourceNotFound, Errors.CustomersUpdateResourceNotFoundError]],
      422: [[Models.HTTPValidationError, Errors.CustomersUpdateHTTPValidationError]],
    },
  });

/**
 * Get a customer by external ID.
 *
 * **Scopes**: `customers:read` `customers:write`
 */
export const getExternal = (
  external_id: string,
): Effect.Effect<
  Models.Customer,
  Errors.CustomersGetExternalErrors | PolarRequestError,
  PolarClient
> =>
  request({
    method: "GET",
    path: "/v1/customers/external/{external_id}",
    pathParams: { external_id: external_id },
    success: Models.Customer,
    errors: {
      404: [[Models.ResourceNotFound, Errors.CustomersGetExternalResourceNotFoundError]],
      422: [[Models.HTTPValidationError, Errors.CustomersGetExternalHTTPValidationError]],
    },
  });

/**
 * Delete a customer by external ID.
 *
 * Immediately cancels any active subscriptions and revokes any active benefits.
 *
 * Set `anonymize=true` to also anonymize PII for GDPR compliance.
 *
 * **Scopes**: `customers:write`
 */
export const deleteExternal = (
  external_id: string,
  query?: { readonly anonymize?: boolean },
): Effect.Effect<void, Errors.CustomersDeleteExternalErrors | PolarRequestError, PolarClient> =>
  request({
    method: "DELETE",
    path: "/v1/customers/external/{external_id}",
    pathParams: { external_id: external_id },
    query,
    success: "none",
    errors: {
      404: [[Models.ResourceNotFound, Errors.CustomersDeleteExternalResourceNotFoundError]],
      422: [[Models.HTTPValidationError, Errors.CustomersDeleteExternalHTTPValidationError]],
    },
  });

/**
 * Update a customer by external ID.
 *
 * **Scopes**: `customers:write`
 */
export const updateExternal = (
  external_id: string,
  body: Models.CustomerUpdateExternalID,
): Effect.Effect<
  Models.Customer,
  Errors.CustomersUpdateExternalErrors | PolarRequestError,
  PolarClient
> =>
  request({
    method: "PATCH",
    path: "/v1/customers/external/{external_id}",
    pathParams: { external_id: external_id },
    body: [Models.CustomerUpdateExternalID, body],
    success: Models.Customer,
    errors: {
      404: [[Models.ResourceNotFound, Errors.CustomersUpdateExternalResourceNotFoundError]],
      422: [[Models.HTTPValidationError, Errors.CustomersUpdateExternalHTTPValidationError]],
    },
  });

/**
 * Get a customer state by ID.
 *
 * The customer state includes information about
 * the customer's active subscriptions and benefits.
 *
 * It's the ideal endpoint to use when you need to get a full overview
 * of a customer's status.
 *
 * **Scopes**: `customers:read` `customers:write`
 */
export const getState = (
  id: string,
): Effect.Effect<
  Models.CustomerState,
  Errors.CustomersGetStateErrors | PolarRequestError,
  PolarClient
> =>
  request({
    method: "GET",
    path: "/v1/customers/{id}/state",
    pathParams: { id: id },
    success: Models.CustomerState,
    errors: {
      404: [[Models.ResourceNotFound, Errors.CustomersGetStateResourceNotFoundError]],
      422: [[Models.HTTPValidationError, Errors.CustomersGetStateHTTPValidationError]],
    },
  });

/**
 * Get a customer state by external ID.
 *
 * The customer state includes information about
 * the customer's active subscriptions and benefits.
 *
 * It's the ideal endpoint to use when you need to get a full overview
 * of a customer's status.
 *
 * **Scopes**: `customers:read` `customers:write`
 */
export const getStateExternal = (
  external_id: string,
): Effect.Effect<
  Models.CustomerState,
  Errors.CustomersGetStateExternalErrors | PolarRequestError,
  PolarClient
> =>
  request({
    method: "GET",
    path: "/v1/customers/external/{external_id}/state",
    pathParams: { external_id: external_id },
    success: Models.CustomerState,
    errors: {
      404: [[Models.ResourceNotFound, Errors.CustomersGetStateExternalResourceNotFoundError]],
      422: [[Models.HTTPValidationError, Errors.CustomersGetStateExternalHTTPValidationError]],
    },
  });

/**
 * Get saved payment methods of a customer.
 *
 * **Scopes**: `customers:read` `customers:write`
 */
export const listPaymentMethods = (
  id: string,
  query?: { readonly page?: number; readonly limit?: number },
): Effect.Effect<
  Models.ListResourcePaymentMethod,
  Errors.CustomersListPaymentMethodsErrors | PolarRequestError,
  PolarClient
> =>
  request({
    method: "GET",
    path: "/v1/customers/{id}/payment-methods",
    pathParams: { id: id },
    query,
    success: Models.ListResourcePaymentMethod,
    errors: {
      404: [[Models.ResourceNotFound, Errors.CustomersListPaymentMethodsResourceNotFoundError]],
      422: [[Models.HTTPValidationError, Errors.CustomersListPaymentMethodsHTTPValidationError]],
    },
  });

/**
 * Get saved payment methods of a customer.
 *
 * **Scopes**: `customers:read` `customers:write`
 *
 * Streams every item across all pages.
 */
export const listPaymentMethodsStream = (
  id: string,
  query?: { readonly page?: number; readonly limit?: number },
): Stream.Stream<
  Models.PaymentMethod,
  Errors.CustomersListPaymentMethodsErrors | PolarRequestError,
  PolarClient
> => paginate(query?.page ?? 1, (page) => listPaymentMethods(id, { ...query, page }));

/**
 * Get saved payment methods of a customer by external ID.
 *
 * **Scopes**: `customers:read` `customers:write`
 */
export const listPaymentMethodsExternal = (
  external_id: string,
  query?: { readonly page?: number; readonly limit?: number },
): Effect.Effect<
  Models.ListResourcePaymentMethod,
  Errors.CustomersListPaymentMethodsExternalErrors | PolarRequestError,
  PolarClient
> =>
  request({
    method: "GET",
    path: "/v1/customers/external/{external_id}/payment-methods",
    pathParams: { external_id: external_id },
    query,
    success: Models.ListResourcePaymentMethod,
    errors: {
      404: [
        [Models.ResourceNotFound, Errors.CustomersListPaymentMethodsExternalResourceNotFoundError],
      ],
      422: [
        [Models.HTTPValidationError, Errors.CustomersListPaymentMethodsExternalHTTPValidationError],
      ],
    },
  });

/**
 * Get saved payment methods of a customer by external ID.
 *
 * **Scopes**: `customers:read` `customers:write`
 *
 * Streams every item across all pages.
 */
export const listPaymentMethodsExternalStream = (
  external_id: string,
  query?: { readonly page?: number; readonly limit?: number },
): Stream.Stream<
  Models.PaymentMethod,
  Errors.CustomersListPaymentMethodsExternalErrors | PolarRequestError,
  PolarClient
> =>
  paginate(query?.page ?? 1, (page) => listPaymentMethodsExternal(external_id, { ...query, page }));
