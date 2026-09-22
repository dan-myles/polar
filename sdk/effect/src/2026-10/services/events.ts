import type { DateTime, Effect } from "effect";
import type { Stream } from "effect";

import { Schema } from "effect";

import type { PolarClient, PolarRequestError } from "../../PolarClient";

import { paginate, request } from "../../PolarClient";
import * as Errors from "../errors";
import * as Models from "../models";

/**
 * List events.
 *
 * **Scopes**: `events:read` `events:write`
 */
export const list = (query?: {
  readonly filter?: string | null;
  readonly start_timestamp?: (DateTime.Utc | string) | null;
  readonly end_timestamp?: (DateTime.Utc | string) | null;
  readonly organization_id?: string | ReadonlyArray<string> | null;
  readonly customer_id?: string | ReadonlyArray<string> | null;
  readonly external_customer_id?: string | ReadonlyArray<string> | null;
  readonly meter_id?: string | null;
  readonly name?: string | ReadonlyArray<string> | null;
  readonly source?: Models.EventSource | ReadonlyArray<Models.EventSource> | null;
  readonly query?: string | null;
  readonly parent_id?: string | null;
  readonly depth?: number | null;
  readonly page?: number;
  readonly limit?: number;
  readonly sorting?: ReadonlyArray<Models.EventSortProperty> | null;
  readonly metadata?: Models.MetadataQuery;
}): Effect.Effect<
  Models.ListResourceEvent | Models.ListResourceWithCursorPaginationEvent,
  Errors.EventsListErrors | PolarRequestError,
  PolarClient
> =>
  request({
    method: "GET",
    path: "/v1/events/",
    query,
    success: Schema.Union([Models.ListResourceEvent, Models.ListResourceWithCursorPaginationEvent]),
    errors: { 422: [[Models.HTTPValidationError, Errors.EventsListHTTPValidationError]] },
  });

/**
 * List event names.
 *
 * **Scopes**: `events:read` `events:write`
 */
export const listNames = (query?: {
  readonly organization_id?: string | ReadonlyArray<string> | null;
  readonly customer_id?: string | ReadonlyArray<string> | null;
  readonly external_customer_id?: string | ReadonlyArray<string> | null;
  readonly source?: Models.EventSource | ReadonlyArray<Models.EventSource> | null;
  readonly query?: string | null;
  readonly page?: number;
  readonly limit?: number;
  readonly sorting?: ReadonlyArray<Models.EventNamesSortProperty> | null;
}): Effect.Effect<
  Models.ListResourceEventName,
  Errors.EventsListNamesErrors | PolarRequestError,
  PolarClient
> =>
  request({
    method: "GET",
    path: "/v1/events/names",
    query,
    success: Models.ListResourceEventName,
    errors: { 422: [[Models.HTTPValidationError, Errors.EventsListNamesHTTPValidationError]] },
  });

/**
 * List event names.
 *
 * **Scopes**: `events:read` `events:write`
 *
 * Streams every item across all pages.
 */
export const listNamesStream = (query?: {
  readonly organization_id?: string | ReadonlyArray<string> | null;
  readonly customer_id?: string | ReadonlyArray<string> | null;
  readonly external_customer_id?: string | ReadonlyArray<string> | null;
  readonly source?: Models.EventSource | ReadonlyArray<Models.EventSource> | null;
  readonly query?: string | null;
  readonly page?: number;
  readonly limit?: number;
  readonly sorting?: ReadonlyArray<Models.EventNamesSortProperty> | null;
}): Stream.Stream<
  Models.EventName,
  Errors.EventsListNamesErrors | PolarRequestError,
  PolarClient
> => paginate(query?.page ?? 1, (page) => listNames({ ...query, page }));

/**
 * Get an event by ID.
 *
 * **Scopes**: `events:read` `events:write`
 */
export const get = (
  id: string,
): Effect.Effect<Models.Event, Errors.EventsGetErrors | PolarRequestError, PolarClient> =>
  request({
    method: "GET",
    path: "/v1/events/{id}",
    pathParams: { id: id },
    success: Models.Event,
    errors: {
      404: [[Models.ResourceNotFound, Errors.EventsGetResourceNotFoundError]],
      422: [[Models.HTTPValidationError, Errors.EventsGetHTTPValidationError]],
    },
  });

/**
 * Ingest batch of events.
 *
 * **Scopes**: `events:write`
 */
export const ingest = (
  body: Models.EventsIngest,
): Effect.Effect<
  Models.EventsIngestResponse,
  Errors.EventsIngestErrors | PolarRequestError,
  PolarClient
> =>
  request({
    method: "POST",
    path: "/v1/events/ingest",
    body: [Models.EventsIngest, body],
    success: Models.EventsIngestResponse,
    errors: { 422: [[Models.HTTPValidationError, Errors.EventsIngestHTTPValidationError]] },
  });
