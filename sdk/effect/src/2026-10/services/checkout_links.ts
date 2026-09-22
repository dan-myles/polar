import type { Effect } from "effect";
import type { Stream } from "effect";

import type { PolarClient, PolarRequestError } from "../../PolarClient";

import { paginate, request } from "../../PolarClient";
import * as Errors from "../errors";
import * as Models from "../models";

/**
 * List checkout links.
 *
 * **Scopes**: `checkout_links:read` `checkout_links:write`
 */
export const list = (query?: {
  readonly organization_id?: string | ReadonlyArray<string> | null;
  readonly product_id?: string | ReadonlyArray<string> | null;
  readonly page?: number;
  readonly limit?: number;
  readonly sorting?: ReadonlyArray<Models.CheckoutLinkSortProperty> | null;
}): Effect.Effect<
  Models.ListResourceCheckoutLink,
  Errors.CheckoutLinksListErrors | PolarRequestError,
  PolarClient
> =>
  request({
    method: "GET",
    path: "/v1/checkout-links/",
    query,
    success: Models.ListResourceCheckoutLink,
    errors: { 422: [[Models.HTTPValidationError, Errors.CheckoutLinksListHTTPValidationError]] },
  });

/**
 * List checkout links.
 *
 * **Scopes**: `checkout_links:read` `checkout_links:write`
 *
 * Streams every item across all pages.
 */
export const listStream = (query?: {
  readonly organization_id?: string | ReadonlyArray<string> | null;
  readonly product_id?: string | ReadonlyArray<string> | null;
  readonly page?: number;
  readonly limit?: number;
  readonly sorting?: ReadonlyArray<Models.CheckoutLinkSortProperty> | null;
}): Stream.Stream<
  Models.CheckoutLink,
  Errors.CheckoutLinksListErrors | PolarRequestError,
  PolarClient
> => paginate(query?.page ?? 1, (page) => list({ ...query, page }));

/**
 * Create a checkout link.
 *
 * **Scopes**: `checkout_links:write`
 */
export const create = (
  body: Models.CheckoutLinkCreate,
): Effect.Effect<
  Models.CheckoutLink,
  Errors.CheckoutLinksCreateErrors | PolarRequestError,
  PolarClient
> =>
  request({
    method: "POST",
    path: "/v1/checkout-links/",
    body: [Models.CheckoutLinkCreate, body],
    success: Models.CheckoutLink,
    errors: { 422: [[Models.HTTPValidationError, Errors.CheckoutLinksCreateHTTPValidationError]] },
  });

/**
 * Get a checkout link by ID.
 *
 * **Scopes**: `checkout_links:read` `checkout_links:write`
 */
export const get = (
  id: string,
): Effect.Effect<
  Models.CheckoutLink,
  Errors.CheckoutLinksGetErrors | PolarRequestError,
  PolarClient
> =>
  request({
    method: "GET",
    path: "/v1/checkout-links/{id}",
    pathParams: { id: id },
    success: Models.CheckoutLink,
    errors: {
      404: [[Models.ResourceNotFound, Errors.CheckoutLinksGetResourceNotFoundError]],
      422: [[Models.HTTPValidationError, Errors.CheckoutLinksGetHTTPValidationError]],
    },
  });

/**
 * Delete a checkout link.
 *
 * **Scopes**: `checkout_links:write`
 */
const delete_ = (
  id: string,
): Effect.Effect<void, Errors.CheckoutLinksDeleteErrors | PolarRequestError, PolarClient> =>
  request({
    method: "DELETE",
    path: "/v1/checkout-links/{id}",
    pathParams: { id: id },
    success: "none",
    errors: {
      404: [[Models.ResourceNotFound, Errors.CheckoutLinksDeleteResourceNotFoundError]],
      422: [[Models.HTTPValidationError, Errors.CheckoutLinksDeleteHTTPValidationError]],
    },
  });
export { delete_ as delete };

/**
 * Update a checkout link.
 *
 * **Scopes**: `checkout_links:write`
 */
export const update = (
  id: string,
  body: Models.CheckoutLinkUpdate,
): Effect.Effect<
  Models.CheckoutLink,
  Errors.CheckoutLinksUpdateErrors | PolarRequestError,
  PolarClient
> =>
  request({
    method: "PATCH",
    path: "/v1/checkout-links/{id}",
    pathParams: { id: id },
    body: [Models.CheckoutLinkUpdate, body],
    success: Models.CheckoutLink,
    errors: {
      404: [[Models.ResourceNotFound, Errors.CheckoutLinksUpdateResourceNotFoundError]],
      422: [[Models.HTTPValidationError, Errors.CheckoutLinksUpdateHTTPValidationError]],
    },
  });
