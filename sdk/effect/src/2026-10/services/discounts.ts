import type { Effect } from "effect";
import type { Stream } from "effect";

import type { PolarClient, PolarRequestError } from "../../PolarClient";

import { paginate, request } from "../../PolarClient";
import * as Errors from "../errors";
import * as Models from "../models";

/**
 * List discounts.
 *
 * **Scopes**: `discounts:read` `discounts:write`
 */
export const list = (query?: {
  readonly organization_id?: string | ReadonlyArray<string> | null;
  readonly query?: string | null;
  readonly page?: number;
  readonly limit?: number;
  readonly sorting?: ReadonlyArray<Models.DiscountSortProperty> | null;
}): Effect.Effect<
  Models.ListResourceDiscount,
  Errors.DiscountsListErrors | PolarRequestError,
  PolarClient
> =>
  request({
    method: "GET",
    path: "/v1/discounts/",
    query,
    success: Models.ListResourceDiscount,
    errors: { 422: [[Models.HTTPValidationError, Errors.DiscountsListHTTPValidationError]] },
  });

/**
 * List discounts.
 *
 * **Scopes**: `discounts:read` `discounts:write`
 *
 * Streams every item across all pages.
 */
export const listStream = (query?: {
  readonly organization_id?: string | ReadonlyArray<string> | null;
  readonly query?: string | null;
  readonly page?: number;
  readonly limit?: number;
  readonly sorting?: ReadonlyArray<Models.DiscountSortProperty> | null;
}): Stream.Stream<Models.Discount, Errors.DiscountsListErrors | PolarRequestError, PolarClient> =>
  paginate(query?.page ?? 1, (page) => list({ ...query, page }));

/**
 * Create a discount.
 *
 * **Scopes**: `discounts:write`
 */
export const create = (
  body: Models.DiscountCreate,
): Effect.Effect<Models.Discount, Errors.DiscountsCreateErrors | PolarRequestError, PolarClient> =>
  request({
    method: "POST",
    path: "/v1/discounts/",
    body: [Models.DiscountCreate, body],
    success: Models.Discount,
    errors: { 422: [[Models.HTTPValidationError, Errors.DiscountsCreateHTTPValidationError]] },
  });

/**
 * Get a discount by ID.
 *
 * **Scopes**: `discounts:read` `discounts:write`
 */
export const get = (
  id: string,
): Effect.Effect<Models.Discount, Errors.DiscountsGetErrors | PolarRequestError, PolarClient> =>
  request({
    method: "GET",
    path: "/v1/discounts/{id}",
    pathParams: { id: id },
    success: Models.Discount,
    errors: {
      404: [[Models.ResourceNotFound, Errors.DiscountsGetResourceNotFoundError]],
      422: [[Models.HTTPValidationError, Errors.DiscountsGetHTTPValidationError]],
    },
  });

/**
 * Delete a discount.
 *
 * **Scopes**: `discounts:write`
 */
const delete_ = (
  id: string,
): Effect.Effect<void, Errors.DiscountsDeleteErrors | PolarRequestError, PolarClient> =>
  request({
    method: "DELETE",
    path: "/v1/discounts/{id}",
    pathParams: { id: id },
    success: "none",
    errors: {
      404: [[Models.ResourceNotFound, Errors.DiscountsDeleteResourceNotFoundError]],
      422: [[Models.HTTPValidationError, Errors.DiscountsDeleteHTTPValidationError]],
    },
  });
export { delete_ as delete };

/**
 * Update a discount.
 *
 * **Scopes**: `discounts:write`
 */
export const update = (
  id: string,
  body: Models.DiscountUpdate,
): Effect.Effect<Models.Discount, Errors.DiscountsUpdateErrors | PolarRequestError, PolarClient> =>
  request({
    method: "PATCH",
    path: "/v1/discounts/{id}",
    pathParams: { id: id },
    body: [Models.DiscountUpdate, body],
    success: Models.Discount,
    errors: {
      404: [[Models.ResourceNotFound, Errors.DiscountsUpdateResourceNotFoundError]],
      422: [[Models.HTTPValidationError, Errors.DiscountsUpdateHTTPValidationError]],
    },
  });
