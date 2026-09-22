import type { Effect } from "effect";
import type { Stream } from "effect";

import type { PolarClient, PolarRequestError } from "../../PolarClient";

import { paginate, request } from "../../PolarClient";
import * as Errors from "../errors";
import * as Models from "../models";

/**
 * List products.
 *
 * **Scopes**: `products:read` `products:write`
 */
export const list = (query?: {
  readonly id?: string | ReadonlyArray<string> | null;
  readonly organization_id?: string | ReadonlyArray<string> | null;
  readonly query?: string | null;
  readonly is_archived?: boolean | null;
  readonly is_recurring?: boolean | null;
  readonly benefit_id?: string | ReadonlyArray<string> | null;
  readonly visibility?: ReadonlyArray<Models.ProductVisibility> | null;
  readonly page?: number;
  readonly limit?: number;
  readonly sorting?: ReadonlyArray<Models.ProductSortProperty> | null;
  readonly metadata?: Models.MetadataQuery;
}): Effect.Effect<
  Models.ListResourceProduct,
  Errors.ProductsListErrors | PolarRequestError,
  PolarClient
> =>
  request({
    method: "GET",
    path: "/v1/products/",
    query,
    success: Models.ListResourceProduct,
    errors: { 422: [[Models.HTTPValidationError, Errors.ProductsListHTTPValidationError]] },
  });

/**
 * List products.
 *
 * **Scopes**: `products:read` `products:write`
 *
 * Streams every item across all pages.
 */
export const listStream = (query?: {
  readonly id?: string | ReadonlyArray<string> | null;
  readonly organization_id?: string | ReadonlyArray<string> | null;
  readonly query?: string | null;
  readonly is_archived?: boolean | null;
  readonly is_recurring?: boolean | null;
  readonly benefit_id?: string | ReadonlyArray<string> | null;
  readonly visibility?: ReadonlyArray<Models.ProductVisibility> | null;
  readonly page?: number;
  readonly limit?: number;
  readonly sorting?: ReadonlyArray<Models.ProductSortProperty> | null;
  readonly metadata?: Models.MetadataQuery;
}): Stream.Stream<Models.Product, Errors.ProductsListErrors | PolarRequestError, PolarClient> =>
  paginate(query?.page ?? 1, (page) => list({ ...query, page }));

/**
 * Create a product.
 *
 * **Scopes**: `products:write`
 */
export const create = (
  body: Models.ProductCreate,
): Effect.Effect<Models.Product, Errors.ProductsCreateErrors | PolarRequestError, PolarClient> =>
  request({
    method: "POST",
    path: "/v1/products/",
    body: [Models.ProductCreate, body],
    success: Models.Product,
    errors: { 422: [[Models.HTTPValidationError, Errors.ProductsCreateHTTPValidationError]] },
  });

/**
 * Get a product by ID.
 *
 * **Scopes**: `products:read` `products:write`
 */
export const get = (
  id: string,
): Effect.Effect<Models.Product, Errors.ProductsGetErrors | PolarRequestError, PolarClient> =>
  request({
    method: "GET",
    path: "/v1/products/{id}",
    pathParams: { id: id },
    success: Models.Product,
    errors: {
      404: [[Models.ResourceNotFound, Errors.ProductsGetResourceNotFoundError]],
      422: [[Models.HTTPValidationError, Errors.ProductsGetHTTPValidationError]],
    },
  });

/**
 * Update a product.
 *
 * **Scopes**: `products:write`
 */
export const update = (
  id: string,
  body: Models.ProductUpdate,
): Effect.Effect<Models.Product, Errors.ProductsUpdateErrors | PolarRequestError, PolarClient> =>
  request({
    method: "PATCH",
    path: "/v1/products/{id}",
    pathParams: { id: id },
    body: [Models.ProductUpdate, body],
    success: Models.Product,
    errors: {
      403: [[Models.NotPermitted, Errors.ProductsUpdateNotPermittedError]],
      404: [[Models.ResourceNotFound, Errors.ProductsUpdateResourceNotFoundError]],
      422: [[Models.HTTPValidationError, Errors.ProductsUpdateHTTPValidationError]],
    },
  });

/**
 * Update benefits granted by a product.
 *
 * **Scopes**: `products:write`
 */
export const updateBenefits = (
  id: string,
  body: Models.ProductBenefitsUpdate,
): Effect.Effect<
  Models.Product,
  Errors.ProductsUpdateBenefitsErrors | PolarRequestError,
  PolarClient
> =>
  request({
    method: "POST",
    path: "/v1/products/{id}/benefits",
    pathParams: { id: id },
    body: [Models.ProductBenefitsUpdate, body],
    success: Models.Product,
    errors: {
      403: [[Models.NotPermitted, Errors.ProductsUpdateBenefitsNotPermittedError]],
      404: [[Models.ResourceNotFound, Errors.ProductsUpdateBenefitsResourceNotFoundError]],
      422: [[Models.HTTPValidationError, Errors.ProductsUpdateBenefitsHTTPValidationError]],
    },
  });
