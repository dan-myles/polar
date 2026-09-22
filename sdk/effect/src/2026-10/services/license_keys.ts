import type { Effect } from "effect";
import type { Stream } from "effect";

import { Schema } from "effect";

import type { PolarClient, PolarRequestError } from "../../PolarClient";

import { paginate, request } from "../../PolarClient";
import * as Errors from "../errors";
import * as Models from "../models";

/**
 * Get license keys connected to the given organization & filters.
 *
 * **Scopes**: `license_keys:read` `license_keys:write`
 */
export const list = (query?: {
  readonly organization_id?: string | ReadonlyArray<string> | null;
  readonly benefit_id?: string | ReadonlyArray<string> | null;
  readonly status?: Models.LicenseKeyStatus | ReadonlyArray<Models.LicenseKeyStatus> | null;
  readonly page?: number;
  readonly limit?: number;
}): Effect.Effect<
  Models.ListResourceLicenseKeyRead,
  Errors.LicenseKeysListErrors | PolarRequestError,
  PolarClient
> =>
  request({
    method: "GET",
    path: "/v1/license-keys/",
    query,
    success: Models.ListResourceLicenseKeyRead,
    errors: {
      401: [[Models.Unauthorized, Errors.LicenseKeysListUnauthorizedError]],
      404: [[Models.ResourceNotFound, Errors.LicenseKeysListResourceNotFoundError]],
      422: [[Models.HTTPValidationError, Errors.LicenseKeysListHTTPValidationError]],
    },
  });

/**
 * Get license keys connected to the given organization & filters.
 *
 * **Scopes**: `license_keys:read` `license_keys:write`
 *
 * Streams every item across all pages.
 */
export const listStream = (query?: {
  readonly organization_id?: string | ReadonlyArray<string> | null;
  readonly benefit_id?: string | ReadonlyArray<string> | null;
  readonly status?: Models.LicenseKeyStatus | ReadonlyArray<Models.LicenseKeyStatus> | null;
  readonly page?: number;
  readonly limit?: number;
}): Stream.Stream<
  Models.LicenseKeyRead,
  Errors.LicenseKeysListErrors | PolarRequestError,
  PolarClient
> => paginate(query?.page ?? 1, (page) => list({ ...query, page }));

/**
 * Get a license key.
 *
 * **Scopes**: `license_keys:read` `license_keys:write`
 */
export const get = (
  id: string,
): Effect.Effect<
  Models.LicenseKeyWithActivations,
  Errors.LicenseKeysGetErrors | PolarRequestError,
  PolarClient
> =>
  request({
    method: "GET",
    path: "/v1/license-keys/{id}",
    pathParams: { id: id },
    success: Models.LicenseKeyWithActivations,
    errors: {
      401: [[Models.Unauthorized, Errors.LicenseKeysGetUnauthorizedError]],
      404: [[Models.ResourceNotFound, Errors.LicenseKeysGetResourceNotFoundError]],
      422: [[Models.HTTPValidationError, Errors.LicenseKeysGetHTTPValidationError]],
    },
  });

/**
 * Update a license key.
 *
 * **Scopes**: `license_keys:write`
 */
export const update = (
  id: string,
  body: Models.LicenseKeyUpdate,
): Effect.Effect<
  Models.LicenseKeyRead,
  Errors.LicenseKeysUpdateErrors | PolarRequestError,
  PolarClient
> =>
  request({
    method: "PATCH",
    path: "/v1/license-keys/{id}",
    pathParams: { id: id },
    body: [Models.LicenseKeyUpdate, body],
    success: Models.LicenseKeyRead,
    errors: {
      401: [[Models.Unauthorized, Errors.LicenseKeysUpdateUnauthorizedError]],
      404: [[Models.ResourceNotFound, Errors.LicenseKeysUpdateResourceNotFoundError]],
      422: [[Models.HTTPValidationError, Errors.LicenseKeysUpdateHTTPValidationError]],
    },
  });

/**
 * Rotate a license key.
 *
 * Generates a new key string for the same license key record. The previous
 * key string immediately stops validating. Status, usage, limits, expiry,
 * and activations are preserved.
 *
 * **Scopes**: `license_keys:write`
 */
export const rotate = (
  id: string,
): Effect.Effect<
  Models.RotatedLicenseKey,
  Errors.LicenseKeysRotateErrors | PolarRequestError,
  PolarClient
> =>
  request({
    method: "POST",
    path: "/v1/license-keys/{id}/rotate",
    pathParams: { id: id },
    success: Models.RotatedLicenseKey,
    errors: {
      400: [[Models.RotateNotPermitted, Errors.LicenseKeysRotateRotateNotPermittedError]],
      401: [[Models.Unauthorized, Errors.LicenseKeysRotateUnauthorizedError]],
      404: [[Models.ResourceNotFound, Errors.LicenseKeysRotateResourceNotFoundError]],
      422: [[Models.HTTPValidationError, Errors.LicenseKeysRotateHTTPValidationError]],
    },
  });

/**
 * Get a license key activation.
 *
 * **Scopes**: `license_keys:read` `license_keys:write`
 */
export const getActivation = (
  id: string,
  activation_id: string,
): Effect.Effect<
  Models.LicenseKeyActivationRead,
  Errors.LicenseKeysGetActivationErrors | PolarRequestError,
  PolarClient
> =>
  request({
    method: "GET",
    path: "/v1/license-keys/{id}/activations/{activation_id}",
    pathParams: { id: id, activation_id: activation_id },
    success: Models.LicenseKeyActivationRead,
    errors: {
      401: [[Models.Unauthorized, Errors.LicenseKeysGetActivationUnauthorizedError]],
      404: [[Models.ResourceNotFound, Errors.LicenseKeysGetActivationResourceNotFoundError]],
      422: [[Models.HTTPValidationError, Errors.LicenseKeysGetActivationHTTPValidationError]],
    },
  });

/**
 * Validate a license key.
 *
 * **Scopes**: `license_keys:write`
 */
export const validate = (
  body: Models.LicenseKeyValidate,
): Effect.Effect<
  Models.ValidatedLicenseKey,
  Errors.LicenseKeysValidateErrors | PolarRequestError,
  PolarClient
> =>
  request({
    method: "POST",
    path: "/v1/license-keys/validate",
    body: [Models.LicenseKeyValidate, body],
    success: Models.ValidatedLicenseKey,
    errors: {
      400: [[Schema.Unknown, Errors.LicenseKeysValidateBadRequestError]],
      404: [[Models.ResourceNotFound, Errors.LicenseKeysValidateResourceNotFoundError]],
      422: [[Models.HTTPValidationError, Errors.LicenseKeysValidateHTTPValidationError]],
    },
  });

/**
 * Activate a license key instance.
 *
 * **Scopes**: `license_keys:write`
 */
export const activate = (
  body: Models.LicenseKeyActivate,
): Effect.Effect<
  Models.LicenseKeyActivationCreated,
  Errors.LicenseKeysActivateErrors | PolarRequestError,
  PolarClient
> =>
  request({
    method: "POST",
    path: "/v1/license-keys/activate",
    body: [Models.LicenseKeyActivate, body],
    success: Models.LicenseKeyActivationCreated,
    errors: {
      403: [[Models.NotPermitted, Errors.LicenseKeysActivateNotPermittedError]],
      404: [[Models.ResourceNotFound, Errors.LicenseKeysActivateResourceNotFoundError]],
      422: [[Models.HTTPValidationError, Errors.LicenseKeysActivateHTTPValidationError]],
    },
  });

/**
 * Deactivate a license key instance.
 *
 * **Scopes**: `license_keys:write`
 */
export const deactivate = (
  body: Models.LicenseKeyDeactivate,
): Effect.Effect<void, Errors.LicenseKeysDeactivateErrors | PolarRequestError, PolarClient> =>
  request({
    method: "POST",
    path: "/v1/license-keys/deactivate",
    body: [Models.LicenseKeyDeactivate, body],
    success: "none",
    errors: {
      404: [[Models.ResourceNotFound, Errors.LicenseKeysDeactivateResourceNotFoundError]],
      422: [[Models.HTTPValidationError, Errors.LicenseKeysDeactivateHTTPValidationError]],
    },
  });
