import type { Effect } from "effect";
import type { Stream } from "effect";

import type { PolarClient, PolarRequestError } from "../../PolarClient";

import { paginate, request } from "../../PolarClient";
import * as Errors from "../errors";
import * as Models from "../models";

/**
 * List organizations.
 *
 * **Scopes**: `organizations:read` `organizations:write`
 */
export const list = (query?: {
  readonly slug?: string | null;
  readonly page?: number;
  readonly limit?: number;
  readonly sorting?: ReadonlyArray<Models.OrganizationSortProperty> | null;
}): Effect.Effect<
  Models.ListResourceOrganization,
  Errors.OrganizationsListErrors | PolarRequestError,
  PolarClient
> =>
  request({
    method: "GET",
    path: "/v1/organizations/",
    query,
    success: Models.ListResourceOrganization,
    errors: { 422: [[Models.HTTPValidationError, Errors.OrganizationsListHTTPValidationError]] },
  });

/**
 * List organizations.
 *
 * **Scopes**: `organizations:read` `organizations:write`
 *
 * Streams every item across all pages.
 */
export const listStream = (query?: {
  readonly slug?: string | null;
  readonly page?: number;
  readonly limit?: number;
  readonly sorting?: ReadonlyArray<Models.OrganizationSortProperty> | null;
}): Stream.Stream<
  Models.Organization,
  Errors.OrganizationsListErrors | PolarRequestError,
  PolarClient
> => paginate(query?.page ?? 1, (page) => list({ ...query, page }));

/**
 * Create an organization.
 *
 * **Scopes**: `organizations:write`
 */
export const create = (
  body: Models.OrganizationCreate,
): Effect.Effect<
  Models.Organization,
  Errors.OrganizationsCreateErrors | PolarRequestError,
  PolarClient
> =>
  request({
    method: "POST",
    path: "/v1/organizations/",
    body: [Models.OrganizationCreate, body],
    success: Models.Organization,
    errors: {
      403: [
        [
          Models.CannotCreateOrganizationError,
          Errors.OrganizationsCreateCannotCreateOrganizationError,
        ],
      ],
      422: [[Models.HTTPValidationError, Errors.OrganizationsCreateHTTPValidationError]],
    },
  });

/**
 * Get an organization by ID.
 *
 * **Scopes**: `organizations:read` `organizations:write`
 */
export const get = (
  id: string,
): Effect.Effect<
  Models.Organization,
  Errors.OrganizationsGetErrors | PolarRequestError,
  PolarClient
> =>
  request({
    method: "GET",
    path: "/v1/organizations/{id}",
    pathParams: { id: id },
    success: Models.Organization,
    errors: {
      404: [[Models.ResourceNotFound, Errors.OrganizationsGetResourceNotFoundError]],
      422: [[Models.HTTPValidationError, Errors.OrganizationsGetHTTPValidationError]],
    },
  });

/**
 * Update an organization.
 *
 * **Scopes**: `organizations:write`
 */
export const update = (
  id: string,
  body: Models.OrganizationUpdate,
): Effect.Effect<
  Models.Organization,
  Errors.OrganizationsUpdateErrors | PolarRequestError,
  PolarClient
> =>
  request({
    method: "PATCH",
    path: "/v1/organizations/{id}",
    pathParams: { id: id },
    body: [Models.OrganizationUpdate, body],
    success: Models.Organization,
    errors: {
      403: [
        [Models.NotPermitted, Errors.OrganizationsUpdateNotPermittedError],
        [
          Models.DisputeAutoAcceptNotEnabled,
          Errors.OrganizationsUpdateDisputeAutoAcceptNotEnabledError,
        ],
      ],
      404: [[Models.ResourceNotFound, Errors.OrganizationsUpdateResourceNotFoundError]],
      409: [
        [
          Models.SSOEnforcementRequiresConnection,
          Errors.OrganizationsUpdateSSOEnforcementRequiresConnectionError,
        ],
      ],
      422: [[Models.HTTPValidationError, Errors.OrganizationsUpdateHTTPValidationError]],
    },
  });
