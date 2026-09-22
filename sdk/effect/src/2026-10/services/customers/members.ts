import type { Effect } from "effect";
import type { Stream } from "effect";

import type { PolarClient, PolarRequestError } from "../../../PolarClient";

import { paginate, request } from "../../../PolarClient";
import * as Errors from "../../errors";
import * as Models from "../../models";

/**
 * List the members of a customer.
 *
 * **Scopes**: `members:read` `members:write`
 */
export const list = (
  id: string,
  query?: {
    readonly role?: Models.MemberRole | null;
    readonly page?: number;
    readonly limit?: number;
    readonly sorting?: ReadonlyArray<Models.MemberSortProperty> | null;
  },
): Effect.Effect<
  Models.ListResourceMember,
  Errors.CustomersMembersListErrors | PolarRequestError,
  PolarClient
> =>
  request({
    method: "GET",
    path: "/v1/customers/{id}/members",
    pathParams: { id: id },
    query,
    success: Models.ListResourceMember,
    errors: {
      404: [[Models.ResourceNotFound, Errors.CustomersMembersListResourceNotFoundError]],
      422: [[Models.HTTPValidationError, Errors.CustomersMembersListHTTPValidationError]],
    },
  });

/**
 * List the members of a customer.
 *
 * **Scopes**: `members:read` `members:write`
 *
 * Streams every item across all pages.
 */
export const listStream = (
  id: string,
  query?: {
    readonly role?: Models.MemberRole | null;
    readonly page?: number;
    readonly limit?: number;
    readonly sorting?: ReadonlyArray<Models.MemberSortProperty> | null;
  },
): Stream.Stream<
  Models.Member,
  Errors.CustomersMembersListErrors | PolarRequestError,
  PolarClient
> => paginate(query?.page ?? 1, (page) => list(id, { ...query, page }));

/**
 * Create a new member for a customer.
 *
 * Only B2B customers with the member management feature enabled can add members.
 * The authenticated user or organization must have access to the customer's organization.
 *
 * **Scopes**: `members:write`
 */
export const create = (
  id: string,
  body: Models.MemberCreateFromCustomer,
): Effect.Effect<
  Models.Member,
  Errors.CustomersMembersCreateErrors | PolarRequestError,
  PolarClient
> =>
  request({
    method: "POST",
    path: "/v1/customers/{id}/members",
    pathParams: { id: id },
    body: [Models.MemberCreateFromCustomer, body],
    success: Models.Member,
    errors: {
      403: [[Models.NotPermitted, Errors.CustomersMembersCreateNotPermittedError]],
      404: [[Models.ResourceNotFound, Errors.CustomersMembersCreateResourceNotFoundError]],
      422: [[Models.HTTPValidationError, Errors.CustomersMembersCreateHTTPValidationError]],
    },
  });

/**
 * List the members of a customer identified by its external ID.
 *
 * **Scopes**: `members:read` `members:write`
 */
export const listExternal = (
  external_id: string,
  query?: {
    readonly role?: Models.MemberRole | null;
    readonly page?: number;
    readonly limit?: number;
    readonly sorting?: ReadonlyArray<Models.MemberSortProperty> | null;
  },
): Effect.Effect<
  Models.ListResourceMember,
  Errors.CustomersMembersListExternalErrors | PolarRequestError,
  PolarClient
> =>
  request({
    method: "GET",
    path: "/v1/customers/external/{external_id}/members",
    pathParams: { external_id: external_id },
    query,
    success: Models.ListResourceMember,
    errors: {
      404: [[Models.ResourceNotFound, Errors.CustomersMembersListExternalResourceNotFoundError]],
      409: [
        [
          Models.AmbiguousExternalCustomerID,
          Errors.CustomersMembersListExternalAmbiguousExternalCustomerIDError,
        ],
      ],
      422: [[Models.HTTPValidationError, Errors.CustomersMembersListExternalHTTPValidationError]],
    },
  });

/**
 * List the members of a customer identified by its external ID.
 *
 * **Scopes**: `members:read` `members:write`
 *
 * Streams every item across all pages.
 */
export const listExternalStream = (
  external_id: string,
  query?: {
    readonly role?: Models.MemberRole | null;
    readonly page?: number;
    readonly limit?: number;
    readonly sorting?: ReadonlyArray<Models.MemberSortProperty> | null;
  },
): Stream.Stream<
  Models.Member,
  Errors.CustomersMembersListExternalErrors | PolarRequestError,
  PolarClient
> => paginate(query?.page ?? 1, (page) => listExternal(external_id, { ...query, page }));

/**
 * Create a new member for a customer identified by its external ID.
 *
 * **Scopes**: `members:write`
 */
export const createExternal = (
  external_id_path: string,
  body: Models.MemberCreateFromCustomer,
): Effect.Effect<
  Models.Member,
  Errors.CustomersMembersCreateExternalErrors | PolarRequestError,
  PolarClient
> =>
  request({
    method: "POST",
    path: "/v1/customers/external/{external_id}/members",
    pathParams: { external_id: external_id_path },
    body: [Models.MemberCreateFromCustomer, body],
    success: Models.Member,
    errors: {
      403: [[Models.NotPermitted, Errors.CustomersMembersCreateExternalNotPermittedError]],
      404: [[Models.ResourceNotFound, Errors.CustomersMembersCreateExternalResourceNotFoundError]],
      409: [
        [
          Models.AmbiguousExternalCustomerID,
          Errors.CustomersMembersCreateExternalAmbiguousExternalCustomerIDError,
        ],
      ],
      422: [[Models.HTTPValidationError, Errors.CustomersMembersCreateExternalHTTPValidationError]],
    },
  });

/**
 * Get a member of a customer by its ID.
 *
 * **Scopes**: `members:read` `members:write`
 */
export const get = (
  id: string,
  member_id: string,
): Effect.Effect<
  Models.Member,
  Errors.CustomersMembersGetErrors | PolarRequestError,
  PolarClient
> =>
  request({
    method: "GET",
    path: "/v1/customers/{id}/members/{member_id}",
    pathParams: { id: id, member_id: member_id },
    success: Models.Member,
    errors: {
      404: [[Models.ResourceNotFound, Errors.CustomersMembersGetResourceNotFoundError]],
      422: [[Models.HTTPValidationError, Errors.CustomersMembersGetHTTPValidationError]],
    },
  });

/**
 * Delete a member of a customer.
 *
 * **Scopes**: `members:write`
 */
const delete_ = (
  id: string,
  member_id: string,
): Effect.Effect<void, Errors.CustomersMembersDeleteErrors | PolarRequestError, PolarClient> =>
  request({
    method: "DELETE",
    path: "/v1/customers/{id}/members/{member_id}",
    pathParams: { id: id, member_id: member_id },
    success: "none",
    errors: {
      404: [[Models.ResourceNotFound, Errors.CustomersMembersDeleteResourceNotFoundError]],
      422: [[Models.HTTPValidationError, Errors.CustomersMembersDeleteHTTPValidationError]],
    },
  });
export { delete_ as delete };

/**
 * Update a member of a customer.
 *
 * Only name, email and role can be updated.
 *
 * **Scopes**: `members:write`
 */
export const update = (
  id: string,
  member_id: string,
  body: Models.MemberUpdate,
): Effect.Effect<
  Models.Member,
  Errors.CustomersMembersUpdateErrors | PolarRequestError,
  PolarClient
> =>
  request({
    method: "PATCH",
    path: "/v1/customers/{id}/members/{member_id}",
    pathParams: { id: id, member_id: member_id },
    body: [Models.MemberUpdate, body],
    success: Models.Member,
    errors: {
      404: [[Models.ResourceNotFound, Errors.CustomersMembersUpdateResourceNotFoundError]],
      422: [[Models.HTTPValidationError, Errors.CustomersMembersUpdateHTTPValidationError]],
    },
  });

/**
 * Get a member by external ID for a customer identified by its external ID.
 *
 * **Scopes**: `members:read` `members:write`
 */
export const getExternal = (
  external_id: string,
  member_external_id: string,
): Effect.Effect<
  Models.Member,
  Errors.CustomersMembersGetExternalErrors | PolarRequestError,
  PolarClient
> =>
  request({
    method: "GET",
    path: "/v1/customers/external/{external_id}/members/{member_external_id}",
    pathParams: { external_id: external_id, member_external_id: member_external_id },
    success: Models.Member,
    errors: {
      404: [[Models.ResourceNotFound, Errors.CustomersMembersGetExternalResourceNotFoundError]],
      409: [
        [
          Models.AmbiguousExternalCustomerID,
          Errors.CustomersMembersGetExternalAmbiguousExternalCustomerIDError,
        ],
      ],
      422: [[Models.HTTPValidationError, Errors.CustomersMembersGetExternalHTTPValidationError]],
    },
  });

/**
 * Delete a member by external ID for a customer identified by its external ID.
 *
 * **Scopes**: `members:write`
 */
export const deleteExternal = (
  external_id: string,
  member_external_id: string,
): Effect.Effect<
  void,
  Errors.CustomersMembersDeleteExternalErrors | PolarRequestError,
  PolarClient
> =>
  request({
    method: "DELETE",
    path: "/v1/customers/external/{external_id}/members/{member_external_id}",
    pathParams: { external_id: external_id, member_external_id: member_external_id },
    success: "none",
    errors: {
      404: [[Models.ResourceNotFound, Errors.CustomersMembersDeleteExternalResourceNotFoundError]],
      409: [
        [
          Models.AmbiguousExternalCustomerID,
          Errors.CustomersMembersDeleteExternalAmbiguousExternalCustomerIDError,
        ],
      ],
      422: [[Models.HTTPValidationError, Errors.CustomersMembersDeleteExternalHTTPValidationError]],
    },
  });

/**
 * Update a member by external ID for a customer identified by its external ID.
 *
 * **Scopes**: `members:write`
 */
export const updateExternal = (
  external_id: string,
  member_external_id: string,
  body: Models.MemberUpdate,
): Effect.Effect<
  Models.Member,
  Errors.CustomersMembersUpdateExternalErrors | PolarRequestError,
  PolarClient
> =>
  request({
    method: "PATCH",
    path: "/v1/customers/external/{external_id}/members/{member_external_id}",
    pathParams: { external_id: external_id, member_external_id: member_external_id },
    body: [Models.MemberUpdate, body],
    success: Models.Member,
    errors: {
      404: [[Models.ResourceNotFound, Errors.CustomersMembersUpdateExternalResourceNotFoundError]],
      409: [
        [
          Models.AmbiguousExternalCustomerID,
          Errors.CustomersMembersUpdateExternalAmbiguousExternalCustomerIDError,
        ],
      ],
      422: [[Models.HTTPValidationError, Errors.CustomersMembersUpdateExternalHTTPValidationError]],
    },
  });
