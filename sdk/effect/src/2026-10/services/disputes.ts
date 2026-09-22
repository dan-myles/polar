import type { Effect } from "effect";
import type { Stream } from "effect";

import type { PolarClient, PolarRequestError } from "../../PolarClient";

import { paginate, request } from "../../PolarClient";
import * as Errors from "../errors";
import * as Models from "../models";

/**
 * List disputes.
 *
 * **Scopes**: `disputes:read` `disputes:write`
 */
export const list = (query?: {
  readonly organization_id?: string | ReadonlyArray<string> | null;
  readonly order_id?: string | ReadonlyArray<string> | null;
  readonly status?: Models.DisputeStatus | ReadonlyArray<Models.DisputeStatus> | null;
  readonly page?: number;
  readonly limit?: number;
  readonly sorting?: ReadonlyArray<Models.DisputeSortProperty> | null;
}): Effect.Effect<
  Models.ListResourceDispute,
  Errors.DisputesListErrors | PolarRequestError,
  PolarClient
> =>
  request({
    method: "GET",
    path: "/v1/disputes/",
    query,
    success: Models.ListResourceDispute,
    errors: { 422: [[Models.HTTPValidationError, Errors.DisputesListHTTPValidationError]] },
  });

/**
 * List disputes.
 *
 * **Scopes**: `disputes:read` `disputes:write`
 *
 * Streams every item across all pages.
 */
export const listStream = (query?: {
  readonly organization_id?: string | ReadonlyArray<string> | null;
  readonly order_id?: string | ReadonlyArray<string> | null;
  readonly status?: Models.DisputeStatus | ReadonlyArray<Models.DisputeStatus> | null;
  readonly page?: number;
  readonly limit?: number;
  readonly sorting?: ReadonlyArray<Models.DisputeSortProperty> | null;
}): Stream.Stream<Models.Dispute, Errors.DisputesListErrors | PolarRequestError, PolarClient> =>
  paginate(query?.page ?? 1, (page) => list({ ...query, page }));

/**
 * Get a dispute by ID.
 *
 * **Scopes**: `disputes:read` `disputes:write`
 */
export const get = (
  id: string,
): Effect.Effect<Models.Dispute, Errors.DisputesGetErrors | PolarRequestError, PolarClient> =>
  request({
    method: "GET",
    path: "/v1/disputes/{id}",
    pathParams: { id: id },
    success: Models.Dispute,
    errors: {
      404: [[Models.ResourceNotFound, Errors.DisputesGetResourceNotFoundError]],
      422: [[Models.HTTPValidationError, Errors.DisputesGetHTTPValidationError]],
    },
  });

/**
 * Accept a dispute, conceding the chargeback.
 *
 * Closes the dispute with the processor (settling it as `lost`) and records
 * the merchant's decision on the dispute's support case.
 *
 * **Scopes**: `disputes:write`
 */
export const accept = (
  id: string,
): Effect.Effect<Models.Dispute, Errors.DisputesAcceptErrors | PolarRequestError, PolarClient> =>
  request({
    method: "POST",
    path: "/v1/disputes/{id}/accept",
    pathParams: { id: id },
    success: Models.Dispute,
    errors: {
      404: [[Models.ResourceNotFound, Errors.DisputesAcceptResourceNotFoundError]],
      409: [[Models.DisputeNotOpenError, Errors.DisputesAcceptDisputeNotOpenError]],
      422: [[Models.HTTPValidationError, Errors.DisputesAcceptHTTPValidationError]],
    },
  });
