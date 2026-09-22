import type { Effect } from "effect";

import { Schema } from "effect";

import type { PolarClient, PolarRequestError } from "../../PolarClient";

import { request } from "../../PolarClient";
import * as Errors from "../errors";
import * as Models from "../models";

/**
 * Get metrics about your orders and subscriptions.
 *
 * Currency values are output in cents.
 *
 * **Scopes**: `metrics:read`
 */
export const get = (query: {
  readonly start_date: string;
  readonly end_date: string;
  readonly timezone?: Models.Timezone;
  readonly interval: Models.TimeInterval;
  readonly organization_id?: string | ReadonlyArray<string> | null;
  readonly product_id?: string | ReadonlyArray<string> | null;
  readonly billing_type?:
    | Models.ProductBillingType
    | ReadonlyArray<Models.ProductBillingType>
    | null;
  readonly customer_id?: string | ReadonlyArray<string> | null;
  readonly metrics?: ReadonlyArray<string> | null;
}): Effect.Effect<
  Models.MetricsResponse,
  Errors.MetricsGetErrors | PolarRequestError,
  PolarClient
> =>
  request({
    method: "GET",
    path: "/v1/metrics/",
    query,
    success: Models.MetricsResponse,
    errors: { 422: [[Models.HTTPValidationError, Errors.MetricsGetHTTPValidationError]] },
  });

/**
 * Export metrics as a CSV file.
 *
 * **Scopes**: `metrics:read`
 */
const export_ = (query: {
  readonly start_date: string;
  readonly end_date: string;
  readonly timezone?: Models.Timezone;
  readonly interval: Models.TimeInterval;
  readonly organization_id?: string | ReadonlyArray<string> | null;
  readonly product_id?: string | ReadonlyArray<string> | null;
  readonly billing_type?:
    | Models.ProductBillingType
    | ReadonlyArray<Models.ProductBillingType>
    | null;
  readonly customer_id?: string | ReadonlyArray<string> | null;
  readonly metrics?: ReadonlyArray<string> | null;
}): Effect.Effect<string, Errors.MetricsExportErrors | PolarRequestError, PolarClient> =>
  request({
    method: "GET",
    path: "/v1/metrics/export",
    query,
    success: "text",
    errors: { 422: [[Models.HTTPValidationError, Errors.MetricsExportHTTPValidationError]] },
  });
export { export_ as export };

/**
 * Get the interval limits for the metrics endpoint.
 *
 * **Scopes**: `metrics:read`
 */
export const limits = (): Effect.Effect<Models.MetricsLimits, PolarRequestError, PolarClient> =>
  request({ method: "GET", path: "/v1/metrics/limits", success: Models.MetricsLimits });

/**
 * List user-defined metric dashboards.
 *
 * **Scopes**: `metrics:read`
 */
export const listDashboards = (query?: {
  readonly organization_id?: string | ReadonlyArray<string> | null;
}): Effect.Effect<
  ReadonlyArray<Models.MetricDashboardSchema>,
  Errors.MetricsListDashboardsErrors | PolarRequestError,
  PolarClient
> =>
  request({
    method: "GET",
    path: "/v1/metrics/dashboards",
    query,
    success: Schema.Array(Models.MetricDashboardSchema),
    errors: {
      422: [[Models.HTTPValidationError, Errors.MetricsListDashboardsHTTPValidationError]],
    },
  });

/**
 * Create a user-defined metric dashboard.
 *
 * **Scopes**: `metrics:write`
 */
export const createDashboard = (
  body: Models.MetricDashboardCreate,
): Effect.Effect<
  Models.MetricDashboardSchema,
  Errors.MetricsCreateDashboardErrors | PolarRequestError,
  PolarClient
> =>
  request({
    method: "POST",
    path: "/v1/metrics/dashboards",
    body: [Models.MetricDashboardCreate, body],
    success: Models.MetricDashboardSchema,
    errors: {
      422: [[Models.HTTPValidationError, Errors.MetricsCreateDashboardHTTPValidationError]],
    },
  });

/**
 * Get a user-defined metric dashboard by ID.
 *
 * **Scopes**: `metrics:read`
 */
export const getDashboard = (
  id: string,
): Effect.Effect<
  Models.MetricDashboardSchema,
  Errors.MetricsGetDashboardErrors | PolarRequestError,
  PolarClient
> =>
  request({
    method: "GET",
    path: "/v1/metrics/dashboards/{id}",
    pathParams: { id: id },
    success: Models.MetricDashboardSchema,
    errors: { 422: [[Models.HTTPValidationError, Errors.MetricsGetDashboardHTTPValidationError]] },
  });

/**
 * Delete a user-defined metric dashboard.
 *
 * **Scopes**: `metrics:write`
 */
export const deleteDashboard = (
  id: string,
): Effect.Effect<void, Errors.MetricsDeleteDashboardErrors | PolarRequestError, PolarClient> =>
  request({
    method: "DELETE",
    path: "/v1/metrics/dashboards/{id}",
    pathParams: { id: id },
    success: "none",
    errors: {
      422: [[Models.HTTPValidationError, Errors.MetricsDeleteDashboardHTTPValidationError]],
    },
  });

/**
 * Update a user-defined metric dashboard.
 *
 * **Scopes**: `metrics:write`
 */
export const updateDashboard = (
  id: string,
  body: Models.MetricDashboardUpdate,
): Effect.Effect<
  Models.MetricDashboardSchema,
  Errors.MetricsUpdateDashboardErrors | PolarRequestError,
  PolarClient
> =>
  request({
    method: "PATCH",
    path: "/v1/metrics/dashboards/{id}",
    pathParams: { id: id },
    body: [Models.MetricDashboardUpdate, body],
    success: Models.MetricDashboardSchema,
    errors: {
      422: [[Models.HTTPValidationError, Errors.MetricsUpdateDashboardHTTPValidationError]],
    },
  });
