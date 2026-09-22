import type { Effect } from "effect";
import type { Stream } from "effect";

import type { PolarClient, PolarRequestError } from "../../../PolarClient";

import { paginate, request } from "../../../PolarClient";
import * as Errors from "../../errors";
import * as Models from "../../models";

/**
 * List benefits grants of the authenticated customer.
 *
 * **Scopes**: `customer_portal:read` `customer_portal:write`
 */
export const list = (query?: {
  readonly query?: string | null;
  readonly type?: Models.BenefitType | ReadonlyArray<Models.BenefitType> | null;
  readonly benefit_id?: string | ReadonlyArray<string> | null;
  readonly checkout_id?: string | ReadonlyArray<string> | null;
  readonly order_id?: string | ReadonlyArray<string> | null;
  readonly subscription_id?: string | ReadonlyArray<string> | null;
  readonly member_id?: string | ReadonlyArray<string> | null;
  readonly page?: number;
  readonly limit?: number;
  readonly sorting?: ReadonlyArray<Models.CustomerBenefitGrantSortProperty> | null;
}): Effect.Effect<
  Models.ListResourceCustomerBenefitGrant,
  Errors.CustomerPortalBenefitGrantsListErrors | PolarRequestError,
  PolarClient
> =>
  request({
    method: "GET",
    path: "/v1/customer-portal/benefit-grants/",
    query,
    success: Models.ListResourceCustomerBenefitGrant,
    errors: {
      422: [
        [Models.HTTPValidationError, Errors.CustomerPortalBenefitGrantsListHTTPValidationError],
      ],
    },
  });

/**
 * List benefits grants of the authenticated customer.
 *
 * **Scopes**: `customer_portal:read` `customer_portal:write`
 *
 * Streams every item across all pages.
 */
export const listStream = (query?: {
  readonly query?: string | null;
  readonly type?: Models.BenefitType | ReadonlyArray<Models.BenefitType> | null;
  readonly benefit_id?: string | ReadonlyArray<string> | null;
  readonly checkout_id?: string | ReadonlyArray<string> | null;
  readonly order_id?: string | ReadonlyArray<string> | null;
  readonly subscription_id?: string | ReadonlyArray<string> | null;
  readonly member_id?: string | ReadonlyArray<string> | null;
  readonly page?: number;
  readonly limit?: number;
  readonly sorting?: ReadonlyArray<Models.CustomerBenefitGrantSortProperty> | null;
}): Stream.Stream<
  Models.CustomerBenefitGrant,
  Errors.CustomerPortalBenefitGrantsListErrors | PolarRequestError,
  PolarClient
> => paginate(query?.page ?? 1, (page) => list({ ...query, page }));

/**
 * Get a benefit grant by ID for the authenticated customer.
 *
 * **Scopes**: `customer_portal:read` `customer_portal:write`
 */
export const get = (
  id: string,
): Effect.Effect<
  Models.CustomerBenefitGrant,
  Errors.CustomerPortalBenefitGrantsGetErrors | PolarRequestError,
  PolarClient
> =>
  request({
    method: "GET",
    path: "/v1/customer-portal/benefit-grants/{id}",
    pathParams: { id: id },
    success: Models.CustomerBenefitGrant,
    errors: {
      404: [[Models.ResourceNotFound, Errors.CustomerPortalBenefitGrantsGetResourceNotFoundError]],
      422: [[Models.HTTPValidationError, Errors.CustomerPortalBenefitGrantsGetHTTPValidationError]],
    },
  });

/**
 * Update a benefit grant for the authenticated customer.
 *
 * **Scopes**: `customer_portal:write`
 */
export const update = (
  id: string,
  body: Models.CustomerBenefitGrantUpdate,
): Effect.Effect<
  Models.CustomerBenefitGrant,
  Errors.CustomerPortalBenefitGrantsUpdateErrors | PolarRequestError,
  PolarClient
> =>
  request({
    method: "PATCH",
    path: "/v1/customer-portal/benefit-grants/{id}",
    pathParams: { id: id },
    body: [Models.CustomerBenefitGrantUpdate, body],
    success: Models.CustomerBenefitGrant,
    errors: {
      403: [[Models.NotPermitted, Errors.CustomerPortalBenefitGrantsUpdateNotPermittedError]],
      404: [
        [Models.ResourceNotFound, Errors.CustomerPortalBenefitGrantsUpdateResourceNotFoundError],
      ],
      422: [
        [Models.HTTPValidationError, Errors.CustomerPortalBenefitGrantsUpdateHTTPValidationError],
      ],
    },
  });
