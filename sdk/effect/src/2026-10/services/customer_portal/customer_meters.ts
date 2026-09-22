import type { Effect } from "effect";
import type { Stream } from "effect";

import type { PolarClient, PolarRequestError } from "../../../PolarClient";

import { paginate, request } from "../../../PolarClient";
import * as Errors from "../../errors";
import * as Models from "../../models";

/**
 * List meters of the authenticated customer.
 *
 * **Scopes**: `customer_portal:read` `customer_portal:write`
 */
export const list = (query?: {
  readonly meter_id?: string | ReadonlyArray<string> | null;
  readonly query?: string | null;
  readonly page?: number;
  readonly limit?: number;
  readonly sorting?: ReadonlyArray<Models.CustomerCustomerMeterSortProperty> | null;
}): Effect.Effect<
  Models.ListResourceCustomerCustomerMeter,
  Errors.CustomerPortalCustomerMetersListErrors | PolarRequestError,
  PolarClient
> =>
  request({
    method: "GET",
    path: "/v1/customer-portal/meters/",
    query,
    success: Models.ListResourceCustomerCustomerMeter,
    errors: {
      422: [
        [Models.HTTPValidationError, Errors.CustomerPortalCustomerMetersListHTTPValidationError],
      ],
    },
  });

/**
 * List meters of the authenticated customer.
 *
 * **Scopes**: `customer_portal:read` `customer_portal:write`
 *
 * Streams every item across all pages.
 */
export const listStream = (query?: {
  readonly meter_id?: string | ReadonlyArray<string> | null;
  readonly query?: string | null;
  readonly page?: number;
  readonly limit?: number;
  readonly sorting?: ReadonlyArray<Models.CustomerCustomerMeterSortProperty> | null;
}): Stream.Stream<
  Models.CustomerCustomerMeter,
  Errors.CustomerPortalCustomerMetersListErrors | PolarRequestError,
  PolarClient
> => paginate(query?.page ?? 1, (page) => list({ ...query, page }));

/**
 * Get a meter by ID for the authenticated customer.
 *
 * **Scopes**: `customer_portal:read` `customer_portal:write`
 */
export const get = (
  id: string,
): Effect.Effect<
  Models.CustomerCustomerMeter,
  Errors.CustomerPortalCustomerMetersGetErrors | PolarRequestError,
  PolarClient
> =>
  request({
    method: "GET",
    path: "/v1/customer-portal/meters/{id}",
    pathParams: { id: id },
    success: Models.CustomerCustomerMeter,
    errors: {
      404: [[Models.ResourceNotFound, Errors.CustomerPortalCustomerMetersGetResourceNotFoundError]],
      422: [
        [Models.HTTPValidationError, Errors.CustomerPortalCustomerMetersGetHTTPValidationError],
      ],
    },
  });
