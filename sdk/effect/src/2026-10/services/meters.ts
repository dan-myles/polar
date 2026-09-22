import type { DateTime, Effect } from "effect";
import type { Stream } from "effect";

import type { PolarClient, PolarRequestError } from "../../PolarClient";

import { paginate, request } from "../../PolarClient";
import * as Errors from "../errors";
import * as Models from "../models";

/**
 * List meters.
 *
 * **Scopes**: `meters:read` `meters:write`
 */
export const list = (query?: {
  readonly organization_id?: string | ReadonlyArray<string> | null;
  readonly query?: string | null;
  readonly is_archived?: boolean | null;
  readonly page?: number;
  readonly limit?: number;
  readonly sorting?: ReadonlyArray<Models.MeterSortProperty> | null;
  readonly metadata?: Models.MetadataQuery;
}): Effect.Effect<
  Models.ListResourceMeter,
  Errors.MetersListErrors | PolarRequestError,
  PolarClient
> =>
  request({
    method: "GET",
    path: "/v1/meters/",
    query,
    success: Models.ListResourceMeter,
    errors: { 422: [[Models.HTTPValidationError, Errors.MetersListHTTPValidationError]] },
  });

/**
 * List meters.
 *
 * **Scopes**: `meters:read` `meters:write`
 *
 * Streams every item across all pages.
 */
export const listStream = (query?: {
  readonly organization_id?: string | ReadonlyArray<string> | null;
  readonly query?: string | null;
  readonly is_archived?: boolean | null;
  readonly page?: number;
  readonly limit?: number;
  readonly sorting?: ReadonlyArray<Models.MeterSortProperty> | null;
  readonly metadata?: Models.MetadataQuery;
}): Stream.Stream<Models.Meter, Errors.MetersListErrors | PolarRequestError, PolarClient> =>
  paginate(query?.page ?? 1, (page) => list({ ...query, page }));

/**
 * Create a meter.
 *
 * **Scopes**: `meters:write`
 */
export const create = (
  body: Models.MeterCreate,
): Effect.Effect<Models.Meter, Errors.MetersCreateErrors | PolarRequestError, PolarClient> =>
  request({
    method: "POST",
    path: "/v1/meters/",
    body: [Models.MeterCreate, body],
    success: Models.Meter,
    errors: { 422: [[Models.HTTPValidationError, Errors.MetersCreateHTTPValidationError]] },
  });

/**
 * Get a meter by ID.
 *
 * **Scopes**: `meters:read` `meters:write`
 */
export const get = (
  id: string,
): Effect.Effect<Models.Meter, Errors.MetersGetErrors | PolarRequestError, PolarClient> =>
  request({
    method: "GET",
    path: "/v1/meters/{id}",
    pathParams: { id: id },
    success: Models.Meter,
    errors: {
      404: [[Models.ResourceNotFound, Errors.MetersGetResourceNotFoundError]],
      422: [[Models.HTTPValidationError, Errors.MetersGetHTTPValidationError]],
    },
  });

/**
 * Update a meter.
 *
 * **Scopes**: `meters:write`
 */
export const update = (
  id: string,
  body: Models.MeterUpdate,
): Effect.Effect<Models.Meter, Errors.MetersUpdateErrors | PolarRequestError, PolarClient> =>
  request({
    method: "PATCH",
    path: "/v1/meters/{id}",
    pathParams: { id: id },
    body: [Models.MeterUpdate, body],
    success: Models.Meter,
    errors: {
      404: [[Models.ResourceNotFound, Errors.MetersUpdateResourceNotFoundError]],
      422: [[Models.HTTPValidationError, Errors.MetersUpdateHTTPValidationError]],
    },
  });

/**
 * Get quantities of a meter over a time period.
 *
 * **Scopes**: `meters:read` `meters:write`
 */
export const quantities = (
  id: string,
  query: {
    readonly start_timestamp: DateTime.Utc | string;
    readonly end_timestamp: DateTime.Utc | string;
    readonly interval: Models.TimeInterval;
    readonly timezone?: Models.Timezone;
    readonly customer_id?: string | ReadonlyArray<string> | null;
    readonly external_customer_id?: string | ReadonlyArray<string> | null;
    readonly customer_aggregation_function?: Models.AggregationFunction | null;
    readonly metadata?: Models.MetadataQuery;
  },
): Effect.Effect<
  Models.MeterQuantities,
  Errors.MetersQuantitiesErrors | PolarRequestError,
  PolarClient
> =>
  request({
    method: "GET",
    path: "/v1/meters/{id}/quantities",
    pathParams: { id: id },
    query,
    success: Models.MeterQuantities,
    errors: {
      404: [[Models.ResourceNotFound, Errors.MetersQuantitiesResourceNotFoundError]],
      422: [[Models.HTTPValidationError, Errors.MetersQuantitiesHTTPValidationError]],
    },
  });
