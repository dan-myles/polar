import type { Effect } from "effect";
import type { Stream } from "effect";

import type { PolarClient, PolarRequestError } from "../../PolarClient";

import { paginate, request } from "../../PolarClient";
import * as Errors from "../errors";
import * as Models from "../models";

/**
 * List refunds.
 *
 * **Scopes**: `refunds:read` `refunds:write`
 */
export const list = (query?: {
  readonly id?: string | ReadonlyArray<string> | null;
  readonly organization_id?: string | ReadonlyArray<string> | null;
  readonly order_id?: string | ReadonlyArray<string> | null;
  readonly subscription_id?: string | ReadonlyArray<string> | null;
  readonly customer_id?: string | ReadonlyArray<string> | null;
  readonly external_customer_id?: string | ReadonlyArray<string> | null;
  readonly succeeded?: boolean | null;
  readonly page?: number;
  readonly limit?: number;
  readonly sorting?: ReadonlyArray<Models.RefundSortProperty> | null;
}): Effect.Effect<
  Models.ListResourceRefund,
  Errors.RefundsListErrors | PolarRequestError,
  PolarClient
> =>
  request({
    method: "GET",
    path: "/v1/refunds/",
    query,
    success: Models.ListResourceRefund,
    errors: { 422: [[Models.HTTPValidationError, Errors.RefundsListHTTPValidationError]] },
  });

/**
 * List refunds.
 *
 * **Scopes**: `refunds:read` `refunds:write`
 *
 * Streams every item across all pages.
 */
export const listStream = (query?: {
  readonly id?: string | ReadonlyArray<string> | null;
  readonly organization_id?: string | ReadonlyArray<string> | null;
  readonly order_id?: string | ReadonlyArray<string> | null;
  readonly subscription_id?: string | ReadonlyArray<string> | null;
  readonly customer_id?: string | ReadonlyArray<string> | null;
  readonly external_customer_id?: string | ReadonlyArray<string> | null;
  readonly succeeded?: boolean | null;
  readonly page?: number;
  readonly limit?: number;
  readonly sorting?: ReadonlyArray<Models.RefundSortProperty> | null;
}): Stream.Stream<Models.Refund, Errors.RefundsListErrors | PolarRequestError, PolarClient> =>
  paginate(query?.page ?? 1, (page) => list({ ...query, page }));

/**
 * Create a refund.
 *
 * **Scopes**: `refunds:write`
 */
export const create = (
  body: Models.RefundCreate,
): Effect.Effect<Models.Refund, Errors.RefundsCreateErrors | PolarRequestError, PolarClient> =>
  request({
    method: "POST",
    path: "/v1/refunds/",
    body: [Models.RefundCreate, body],
    success: Models.Refund,
    errors: {
      403: [[Models.RefundedAlready, Errors.RefundsCreateRefundedAlreadyError]],
      422: [[Models.HTTPValidationError, Errors.RefundsCreateHTTPValidationError]],
    },
  });
