import type { Effect } from "effect";
import type { Stream } from "effect";

import type { PolarClient, PolarRequestError } from "../../PolarClient";

import { paginate, request } from "../../PolarClient";
import * as Errors from "../errors";
import * as Models from "../models";

/**
 * List custom fields.
 *
 * **Scopes**: `custom_fields:read` `custom_fields:write`
 */
export const list = (query?: {
  readonly organization_id?: string | ReadonlyArray<string> | null;
  readonly query?: string | null;
  readonly type?: Models.CustomFieldType | ReadonlyArray<Models.CustomFieldType> | null;
  readonly page?: number;
  readonly limit?: number;
  readonly sorting?: ReadonlyArray<Models.CustomFieldSortProperty> | null;
}): Effect.Effect<
  Models.ListResourceCustomField,
  Errors.CustomFieldsListErrors | PolarRequestError,
  PolarClient
> =>
  request({
    method: "GET",
    path: "/v1/custom-fields/",
    query,
    success: Models.ListResourceCustomField,
    errors: { 422: [[Models.HTTPValidationError, Errors.CustomFieldsListHTTPValidationError]] },
  });

/**
 * List custom fields.
 *
 * **Scopes**: `custom_fields:read` `custom_fields:write`
 *
 * Streams every item across all pages.
 */
export const listStream = (query?: {
  readonly organization_id?: string | ReadonlyArray<string> | null;
  readonly query?: string | null;
  readonly type?: Models.CustomFieldType | ReadonlyArray<Models.CustomFieldType> | null;
  readonly page?: number;
  readonly limit?: number;
  readonly sorting?: ReadonlyArray<Models.CustomFieldSortProperty> | null;
}): Stream.Stream<
  Models.CustomField,
  Errors.CustomFieldsListErrors | PolarRequestError,
  PolarClient
> => paginate(query?.page ?? 1, (page) => list({ ...query, page }));

/**
 * Create a custom field.
 *
 * **Scopes**: `custom_fields:write`
 */
export const create = (
  body: Models.CustomFieldCreate,
): Effect.Effect<
  Models.CustomField,
  Errors.CustomFieldsCreateErrors | PolarRequestError,
  PolarClient
> =>
  request({
    method: "POST",
    path: "/v1/custom-fields/",
    body: [Models.CustomFieldCreate, body],
    success: Models.CustomField,
    errors: { 422: [[Models.HTTPValidationError, Errors.CustomFieldsCreateHTTPValidationError]] },
  });

/**
 * Get a custom field by ID.
 *
 * **Scopes**: `custom_fields:read` `custom_fields:write`
 */
export const get = (
  id: string,
): Effect.Effect<
  Models.CustomField,
  Errors.CustomFieldsGetErrors | PolarRequestError,
  PolarClient
> =>
  request({
    method: "GET",
    path: "/v1/custom-fields/{id}",
    pathParams: { id: id },
    success: Models.CustomField,
    errors: {
      404: [[Models.ResourceNotFound, Errors.CustomFieldsGetResourceNotFoundError]],
      422: [[Models.HTTPValidationError, Errors.CustomFieldsGetHTTPValidationError]],
    },
  });

/**
 * Delete a custom field.
 *
 * **Scopes**: `custom_fields:write`
 */
const delete_ = (
  id: string,
): Effect.Effect<void, Errors.CustomFieldsDeleteErrors | PolarRequestError, PolarClient> =>
  request({
    method: "DELETE",
    path: "/v1/custom-fields/{id}",
    pathParams: { id: id },
    success: "none",
    errors: {
      404: [[Models.ResourceNotFound, Errors.CustomFieldsDeleteResourceNotFoundError]],
      422: [[Models.HTTPValidationError, Errors.CustomFieldsDeleteHTTPValidationError]],
    },
  });
export { delete_ as delete };

/**
 * Update a custom field.
 *
 * **Scopes**: `custom_fields:write`
 */
export const update = (
  id: string,
  body: Models.CustomFieldUpdate,
): Effect.Effect<
  Models.CustomField,
  Errors.CustomFieldsUpdateErrors | PolarRequestError,
  PolarClient
> =>
  request({
    method: "PATCH",
    path: "/v1/custom-fields/{id}",
    pathParams: { id: id },
    body: [Models.CustomFieldUpdate, body],
    success: Models.CustomField,
    errors: {
      404: [[Models.ResourceNotFound, Errors.CustomFieldsUpdateResourceNotFoundError]],
      422: [[Models.HTTPValidationError, Errors.CustomFieldsUpdateHTTPValidationError]],
    },
  });
