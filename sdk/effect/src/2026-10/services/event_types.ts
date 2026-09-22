import type { Effect } from "effect";
import type { Stream } from "effect";

import type { PolarClient, PolarRequestError } from "../../PolarClient";

import { paginate, request } from "../../PolarClient";
import * as Errors from "../errors";
import * as Models from "../models";

/**
 * List event types with aggregated statistics.
 *
 * **Scopes**: `events:read` `events:write`
 */
export const list = (query?: {
  readonly organization_id?: string | ReadonlyArray<string> | null;
  readonly customer_id?: string | ReadonlyArray<string> | null;
  readonly external_customer_id?: string | ReadonlyArray<string> | null;
  readonly query?: string | null;
  readonly root_events?: boolean;
  readonly parent_id?: string | null;
  readonly source?: Models.EventSource | null;
  readonly page?: number;
  readonly limit?: number;
  readonly sorting?: ReadonlyArray<Models.EventTypesSortProperty> | null;
}): Effect.Effect<
  Models.ListResourceEventTypeWithStats,
  Errors.EventTypesListErrors | PolarRequestError,
  PolarClient
> =>
  request({
    method: "GET",
    path: "/v1/event-types/",
    query,
    success: Models.ListResourceEventTypeWithStats,
    errors: { 422: [[Models.HTTPValidationError, Errors.EventTypesListHTTPValidationError]] },
  });

/**
 * List event types with aggregated statistics.
 *
 * **Scopes**: `events:read` `events:write`
 *
 * Streams every item across all pages.
 */
export const listStream = (query?: {
  readonly organization_id?: string | ReadonlyArray<string> | null;
  readonly customer_id?: string | ReadonlyArray<string> | null;
  readonly external_customer_id?: string | ReadonlyArray<string> | null;
  readonly query?: string | null;
  readonly root_events?: boolean;
  readonly parent_id?: string | null;
  readonly source?: Models.EventSource | null;
  readonly page?: number;
  readonly limit?: number;
  readonly sorting?: ReadonlyArray<Models.EventTypesSortProperty> | null;
}): Stream.Stream<
  Models.EventTypeWithStats,
  Errors.EventTypesListErrors | PolarRequestError,
  PolarClient
> => paginate(query?.page ?? 1, (page) => list({ ...query, page }));

/**
 * Update an event type's label.
 *
 * **Scopes**: `events:write`
 */
export const update = (
  id: string,
  body: Models.EventTypeUpdate,
): Effect.Effect<
  Models.EventType,
  Errors.EventTypesUpdateErrors | PolarRequestError,
  PolarClient
> =>
  request({
    method: "PATCH",
    path: "/v1/event-types/{id}",
    pathParams: { id: id },
    body: [Models.EventTypeUpdate, body],
    success: Models.EventType,
    errors: {
      404: [[null, Errors.EventTypesUpdateNotFoundError]],
      422: [[Models.HTTPValidationError, Errors.EventTypesUpdateHTTPValidationError]],
    },
  });
