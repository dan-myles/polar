import type { Effect } from "effect";
import type { Stream } from "effect";

import { Schema } from "effect";

import type { PolarClient, PolarRequestError } from "../../../PolarClient";

import { paginate, request } from "../../../PolarClient";
import * as Errors from "../../errors";
import * as Models from "../../models";

/**
 * **Scopes**: `customer_portal:read` `customer_portal:write`
 */
export const list = (query?: {
  readonly benefit_id?: string | null;
  readonly page?: number;
  readonly limit?: number;
}): Effect.Effect<
  Models.ListResourceLicenseKeyRead,
  Errors.CustomerPortalLicenseKeysListErrors | PolarRequestError,
  PolarClient
> =>
  request({
    method: "GET",
    path: "/v1/customer-portal/license-keys/",
    query,
    success: Models.ListResourceLicenseKeyRead,
    errors: {
      401: [[Models.Unauthorized, Errors.CustomerPortalLicenseKeysListUnauthorizedError]],
      404: [[Models.ResourceNotFound, Errors.CustomerPortalLicenseKeysListResourceNotFoundError]],
      422: [[Models.HTTPValidationError, Errors.CustomerPortalLicenseKeysListHTTPValidationError]],
    },
  });

/**
 * **Scopes**: `customer_portal:read` `customer_portal:write`
 *
 * Streams every item across all pages.
 */
export const listStream = (query?: {
  readonly benefit_id?: string | null;
  readonly page?: number;
  readonly limit?: number;
}): Stream.Stream<
  Models.LicenseKeyRead,
  Errors.CustomerPortalLicenseKeysListErrors | PolarRequestError,
  PolarClient
> => paginate(query?.page ?? 1, (page) => list({ ...query, page }));

/**
 * Get a license key.
 *
 * **Scopes**: `customer_portal:read` `customer_portal:write`
 */
export const get = (
  id: string,
): Effect.Effect<
  Models.LicenseKeyWithActivations,
  Errors.CustomerPortalLicenseKeysGetErrors | PolarRequestError,
  PolarClient
> =>
  request({
    method: "GET",
    path: "/v1/customer-portal/license-keys/{id}",
    pathParams: { id: id },
    success: Models.LicenseKeyWithActivations,
    errors: {
      404: [[Models.ResourceNotFound, Errors.CustomerPortalLicenseKeysGetResourceNotFoundError]],
      422: [[Models.HTTPValidationError, Errors.CustomerPortalLicenseKeysGetHTTPValidationError]],
    },
  });

/**
 * Rotate a license key.
 *
 * Generates a new key string for the same license key record. The previous
 * key string immediately stops validating. Status, usage, limits, expiry,
 * and activations are preserved.
 *
 * **Scopes**: `customer_portal:write`
 */
export const rotate = (
  id: string,
): Effect.Effect<
  Models.RotatedLicenseKey,
  Errors.CustomerPortalLicenseKeysRotateErrors | PolarRequestError,
  PolarClient
> =>
  request({
    method: "POST",
    path: "/v1/customer-portal/license-keys/{id}/rotate",
    pathParams: { id: id },
    success: Models.RotatedLicenseKey,
    errors: {
      400: [
        [Models.RotateNotPermitted, Errors.CustomerPortalLicenseKeysRotateRotateNotPermittedError],
      ],
      401: [[Models.Unauthorized, Errors.CustomerPortalLicenseKeysRotateUnauthorizedError]],
      404: [[Models.ResourceNotFound, Errors.CustomerPortalLicenseKeysRotateResourceNotFoundError]],
      422: [
        [Models.HTTPValidationError, Errors.CustomerPortalLicenseKeysRotateHTTPValidationError],
      ],
    },
  });

/**
 * Validate a license key.
 *
 * > This endpoint doesn't require authentication and can be safely used on a public
 * > client, like a desktop application or a mobile app.
 * > If you plan to validate a license key on a server, use the `/v1/license-keys/validate`
 * > endpoint instead.
 */
export const validate = (
  body: Models.LicenseKeyValidate,
): Effect.Effect<
  Models.ValidatedLicenseKey,
  Errors.CustomerPortalLicenseKeysValidateErrors | PolarRequestError,
  PolarClient
> =>
  request({
    method: "POST",
    path: "/v1/customer-portal/license-keys/validate",
    body: [Models.LicenseKeyValidate, body],
    success: Models.ValidatedLicenseKey,
    errors: {
      400: [[Schema.Unknown, Errors.CustomerPortalLicenseKeysValidateBadRequestError]],
      404: [
        [Models.ResourceNotFound, Errors.CustomerPortalLicenseKeysValidateResourceNotFoundError],
      ],
      422: [
        [Models.HTTPValidationError, Errors.CustomerPortalLicenseKeysValidateHTTPValidationError],
      ],
    },
  });

/**
 * Activate a license key instance.
 *
 * > This endpoint doesn't require authentication and can be safely used on a public
 * > client, like a desktop application or a mobile app.
 * > If you plan to validate a license key on a server, use the `/v1/license-keys/activate`
 * > endpoint instead.
 */
export const activate = (
  body: Models.LicenseKeyActivate,
): Effect.Effect<
  Models.LicenseKeyActivationCreated,
  Errors.CustomerPortalLicenseKeysActivateErrors | PolarRequestError,
  PolarClient
> =>
  request({
    method: "POST",
    path: "/v1/customer-portal/license-keys/activate",
    body: [Models.LicenseKeyActivate, body],
    success: Models.LicenseKeyActivationCreated,
    errors: {
      403: [[Models.NotPermitted, Errors.CustomerPortalLicenseKeysActivateNotPermittedError]],
      404: [
        [Models.ResourceNotFound, Errors.CustomerPortalLicenseKeysActivateResourceNotFoundError],
      ],
      422: [
        [Models.HTTPValidationError, Errors.CustomerPortalLicenseKeysActivateHTTPValidationError],
      ],
    },
  });

/**
 * Deactivate a license key instance.
 *
 * > This endpoint doesn't require authentication and can be safely used on a public
 * > client, like a desktop application or a mobile app.
 * > If you plan to validate a license key on a server, use the `/v1/license-keys/deactivate`
 * > endpoint instead.
 */
export const deactivate = (
  body: Models.LicenseKeyDeactivate,
): Effect.Effect<
  void,
  Errors.CustomerPortalLicenseKeysDeactivateErrors | PolarRequestError,
  PolarClient
> =>
  request({
    method: "POST",
    path: "/v1/customer-portal/license-keys/deactivate",
    body: [Models.LicenseKeyDeactivate, body],
    success: "none",
    errors: {
      404: [
        [Models.ResourceNotFound, Errors.CustomerPortalLicenseKeysDeactivateResourceNotFoundError],
      ],
      422: [
        [Models.HTTPValidationError, Errors.CustomerPortalLicenseKeysDeactivateHTTPValidationError],
      ],
    },
  });
