import type { Effect } from "effect";
import type { Stream } from "effect";

import type { PolarClient, PolarRequestError } from "../../PolarClient";

import { paginate, request } from "../../PolarClient";
import * as Errors from "../errors";
import * as Models from "../models";

/**
 * List customer meters.
 *
 * **Scopes**: `customer_meters:read`
 */
export const list = (query?: {
  readonly organization_id?: string | ReadonlyArray<string> | null;
  readonly customer_id?: string | ReadonlyArray<string> | null;
  readonly external_customer_id?: string | ReadonlyArray<string> | null;
  readonly meter_id?: string | ReadonlyArray<string> | null;
  readonly page?: number;
  readonly limit?: number;
  readonly sorting?: ReadonlyArray<Models.CustomerMeterSortProperty> | null;
}): Effect.Effect<
  Models.ListResourceCustomerMeter,
  Errors.CustomerMetersListErrors | PolarRequestError,
  PolarClient
> =>
  request({
    method: "GET",
    path: "/v1/customer-meters/",
    query,
    success: Models.ListResourceCustomerMeter,
    errors: { 422: [[Models.HTTPValidationError, Errors.CustomerMetersListHTTPValidationError]] },
  });

/**
 * List customer meters.
 *
 * **Scopes**: `customer_meters:read`
 *
 * Streams every item across all pages.
 */
export const listStream = (query?: {
  readonly organization_id?: string | ReadonlyArray<string> | null;
  readonly customer_id?: string | ReadonlyArray<string> | null;
  readonly external_customer_id?: string | ReadonlyArray<string> | null;
  readonly meter_id?: string | ReadonlyArray<string> | null;
  readonly page?: number;
  readonly limit?: number;
  readonly sorting?: ReadonlyArray<Models.CustomerMeterSortProperty> | null;
}): Stream.Stream<
  Models.CustomerMeter,
  Errors.CustomerMetersListErrors | PolarRequestError,
  PolarClient
> => paginate(query?.page ?? 1, (page) => list({ ...query, page }));

/**
 * Get a customer meter by ID.
 *
 * **Scopes**: `customer_meters:read`
 */
export const get = (
  id: string,
): Effect.Effect<
  Models.CustomerMeter,
  Errors.CustomerMetersGetErrors | PolarRequestError,
  PolarClient
> =>
  request({
    method: "GET",
    path: "/v1/customer-meters/{id}",
    pathParams: { id: id },
    success: Models.CustomerMeter,
    errors: {
      404: [[Models.ResourceNotFound, Errors.CustomerMetersGetResourceNotFoundError]],
      422: [[Models.HTTPValidationError, Errors.CustomerMetersGetHTTPValidationError]],
    },
  });
