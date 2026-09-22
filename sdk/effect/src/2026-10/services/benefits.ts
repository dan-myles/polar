import type { Effect } from "effect";
import type { Stream } from "effect";

import { Schema } from "effect";

import type { PolarClient, PolarRequestError } from "../../PolarClient";

import { paginate, request } from "../../PolarClient";
import * as Errors from "../errors";
import * as Models from "../models";

/**
 * List benefits.
 *
 * **Scopes**: `benefits:read` `benefits:write`
 */
export const list = (query?: {
  readonly organization_id?: string | ReadonlyArray<string> | null;
  readonly type?: Models.BenefitType | ReadonlyArray<Models.BenefitType> | null;
  readonly id?: string | ReadonlyArray<string> | null;
  readonly exclude_id?: string | ReadonlyArray<string> | null;
  readonly query?: string | null;
  readonly page?: number;
  readonly limit?: number;
  readonly sorting?: ReadonlyArray<Models.BenefitSortProperty> | null;
  readonly metadata?: Models.MetadataQuery;
}): Effect.Effect<
  Models.ListResourceBenefit,
  Errors.BenefitsListErrors | PolarRequestError,
  PolarClient
> =>
  request({
    method: "GET",
    path: "/v1/benefits/",
    query,
    success: Models.ListResourceBenefit,
    errors: { 422: [[Models.HTTPValidationError, Errors.BenefitsListHTTPValidationError]] },
  });

/**
 * List benefits.
 *
 * **Scopes**: `benefits:read` `benefits:write`
 *
 * Streams every item across all pages.
 */
export const listStream = (query?: {
  readonly organization_id?: string | ReadonlyArray<string> | null;
  readonly type?: Models.BenefitType | ReadonlyArray<Models.BenefitType> | null;
  readonly id?: string | ReadonlyArray<string> | null;
  readonly exclude_id?: string | ReadonlyArray<string> | null;
  readonly query?: string | null;
  readonly page?: number;
  readonly limit?: number;
  readonly sorting?: ReadonlyArray<Models.BenefitSortProperty> | null;
  readonly metadata?: Models.MetadataQuery;
}): Stream.Stream<Models.Benefit, Errors.BenefitsListErrors | PolarRequestError, PolarClient> =>
  paginate(query?.page ?? 1, (page) => list({ ...query, page }));

/**
 * Create a benefit.
 *
 * **Scopes**: `benefits:write`
 */
export const create = (
  body: Models.BenefitCreate,
): Effect.Effect<Models.Benefit, Errors.BenefitsCreateErrors | PolarRequestError, PolarClient> =>
  request({
    method: "POST",
    path: "/v1/benefits/",
    body: [Models.BenefitCreate, body],
    success: Models.Benefit,
    errors: { 422: [[Models.HTTPValidationError, Errors.BenefitsCreateHTTPValidationError]] },
  });

/**
 * Get a benefit by ID.
 *
 * **Scopes**: `benefits:read` `benefits:write`
 */
export const get = (
  id: string,
): Effect.Effect<Models.Benefit, Errors.BenefitsGetErrors | PolarRequestError, PolarClient> =>
  request({
    method: "GET",
    path: "/v1/benefits/{id}",
    pathParams: { id: id },
    success: Models.Benefit,
    errors: {
      404: [[Models.ResourceNotFound, Errors.BenefitsGetResourceNotFoundError]],
      422: [[Models.HTTPValidationError, Errors.BenefitsGetHTTPValidationError]],
    },
  });

/**
 * Delete a benefit.
 *
 * > [!WARNING]
 * > Every grants associated with the benefit will be revoked.
 * > Users will lose access to the benefit.
 *
 * **Scopes**: `benefits:write`
 */
const delete_ = (
  id: string,
): Effect.Effect<void, Errors.BenefitsDeleteErrors | PolarRequestError, PolarClient> =>
  request({
    method: "DELETE",
    path: "/v1/benefits/{id}",
    pathParams: { id: id },
    success: "none",
    errors: {
      403: [[Models.NotPermitted, Errors.BenefitsDeleteNotPermittedError]],
      404: [[Models.ResourceNotFound, Errors.BenefitsDeleteResourceNotFoundError]],
      422: [[Models.HTTPValidationError, Errors.BenefitsDeleteHTTPValidationError]],
    },
  });
export { delete_ as delete };

/**
 * Update a benefit.
 *
 * **Scopes**: `benefits:write`
 */
export const update = (
  id: string,
  body:
    | Models.BenefitCustomUpdate
    | Models.BenefitDiscordUpdate
    | Models.BenefitGitHubRepositoryUpdate
    | Models.BenefitDownloadablesUpdate
    | Models.BenefitLicenseKeysUpdate
    | Models.BenefitMeterCreditUpdate
    | Models.BenefitFeatureFlagUpdate
    | Models.BenefitSlackSharedChannelUpdate,
): Effect.Effect<Models.Benefit, Errors.BenefitsUpdateErrors | PolarRequestError, PolarClient> =>
  request({
    method: "PATCH",
    path: "/v1/benefits/{id}",
    pathParams: { id: id },
    body: [
      Schema.Union([
        Models.BenefitCustomUpdate,
        Models.BenefitDiscordUpdate,
        Models.BenefitGitHubRepositoryUpdate,
        Models.BenefitDownloadablesUpdate,
        Models.BenefitLicenseKeysUpdate,
        Models.BenefitMeterCreditUpdate,
        Models.BenefitFeatureFlagUpdate,
        Models.BenefitSlackSharedChannelUpdate,
      ]),
      body,
    ],
    success: Models.Benefit,
    errors: {
      404: [[Models.ResourceNotFound, Errors.BenefitsUpdateResourceNotFoundError]],
      422: [[Models.HTTPValidationError, Errors.BenefitsUpdateHTTPValidationError]],
    },
  });

/**
 * List the downloadable files for a benefit with their download statistics.
 *
 * **Scopes**: `benefits:read` `benefits:write`
 */
export const files = (
  id: string,
  query?: { readonly page?: number; readonly limit?: number },
): Effect.Effect<
  Models.ListResourceBenefitDownloadableFile,
  Errors.BenefitsFilesErrors | PolarRequestError,
  PolarClient
> =>
  request({
    method: "GET",
    path: "/v1/benefits/{id}/files",
    pathParams: { id: id },
    query,
    success: Models.ListResourceBenefitDownloadableFile,
    errors: {
      404: [[Models.ResourceNotFound, Errors.BenefitsFilesResourceNotFoundError]],
      422: [[Models.HTTPValidationError, Errors.BenefitsFilesHTTPValidationError]],
    },
  });

/**
 * List the downloadable files for a benefit with their download statistics.
 *
 * **Scopes**: `benefits:read` `benefits:write`
 *
 * Streams every item across all pages.
 */
export const filesStream = (
  id: string,
  query?: { readonly page?: number; readonly limit?: number },
): Stream.Stream<
  Models.BenefitDownloadableFile,
  Errors.BenefitsFilesErrors | PolarRequestError,
  PolarClient
> => paginate(query?.page ?? 1, (page) => files(id, { ...query, page }));

/**
 * List the individual grants for a benefit.
 *
 * It's especially useful to check if a user has been granted a benefit.
 *
 * **Scopes**: `benefits:read` `benefits:write`
 */
export const grants = (
  id: string,
  query?: {
    readonly is_granted?: boolean | null;
    readonly customer_id?: string | ReadonlyArray<string> | null;
    readonly member_id?: string | ReadonlyArray<string> | null;
    readonly page?: number;
    readonly limit?: number;
  },
): Effect.Effect<
  Models.ListResourceBenefitGrant,
  Errors.BenefitsGrantsErrors | PolarRequestError,
  PolarClient
> =>
  request({
    method: "GET",
    path: "/v1/benefits/{id}/grants",
    pathParams: { id: id },
    query,
    success: Models.ListResourceBenefitGrant,
    errors: {
      404: [[Models.ResourceNotFound, Errors.BenefitsGrantsResourceNotFoundError]],
      422: [[Models.HTTPValidationError, Errors.BenefitsGrantsHTTPValidationError]],
    },
  });

/**
 * List the individual grants for a benefit.
 *
 * It's especially useful to check if a user has been granted a benefit.
 *
 * **Scopes**: `benefits:read` `benefits:write`
 *
 * Streams every item across all pages.
 */
export const grantsStream = (
  id: string,
  query?: {
    readonly is_granted?: boolean | null;
    readonly customer_id?: string | ReadonlyArray<string> | null;
    readonly member_id?: string | ReadonlyArray<string> | null;
    readonly page?: number;
    readonly limit?: number;
  },
): Stream.Stream<
  Models.BenefitGrant,
  Errors.BenefitsGrantsErrors | PolarRequestError,
  PolarClient
> => paginate(query?.page ?? 1, (page) => grants(id, { ...query, page }));
