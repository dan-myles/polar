import type { Effect } from "effect";

import type { PolarClient, PolarRequestError } from "../../../PolarClient";

import { request } from "../../../PolarClient";
import * as Errors from "../../errors";
import * as Models from "../../models";

/**
 * Get a customer portal's organization by slug.
 */
export const get = (
  slug: string,
): Effect.Effect<
  Models.CustomerOrganizationData,
  Errors.CustomerPortalOrganizationsGetErrors | PolarRequestError,
  PolarClient
> =>
  request({
    method: "GET",
    path: "/v1/customer-portal/organizations/{slug}",
    pathParams: { slug: slug },
    success: Models.CustomerOrganizationData,
    errors: {
      404: [[Models.ResourceNotFound, Errors.CustomerPortalOrganizationsGetResourceNotFoundError]],
      422: [[Models.HTTPValidationError, Errors.CustomerPortalOrganizationsGetHTTPValidationError]],
    },
  });
