import type { Effect } from "effect";
import type { Stream } from "effect";

import type { PolarClient, PolarRequestError } from "../../PolarClient";

import { paginate, request } from "../../PolarClient";
import * as Errors from "../errors";
import * as Models from "../models";

/**
 * List payments.
 *
 * **Scopes**: `payments:read`
 */
export const list = (query?: {
  readonly organization_id?: string | ReadonlyArray<string> | null;
  readonly checkout_id?: string | ReadonlyArray<string> | null;
  readonly order_id?: string | ReadonlyArray<string> | null;
  readonly customer_id?: string | ReadonlyArray<string> | null;
  readonly status?: Models.PaymentStatus | ReadonlyArray<Models.PaymentStatus> | null;
  readonly method?: string | ReadonlyArray<string> | null;
  readonly customer_email?: string | ReadonlyArray<string> | null;
  readonly page?: number;
  readonly limit?: number;
  readonly sorting?: ReadonlyArray<Models.PaymentSortProperty> | null;
}): Effect.Effect<
  Models.ListResourcePayment,
  Errors.PaymentsListErrors | PolarRequestError,
  PolarClient
> =>
  request({
    method: "GET",
    path: "/v1/payments/",
    query,
    success: Models.ListResourcePayment,
    errors: { 422: [[Models.HTTPValidationError, Errors.PaymentsListHTTPValidationError]] },
  });

/**
 * List payments.
 *
 * **Scopes**: `payments:read`
 *
 * Streams every item across all pages.
 */
export const listStream = (query?: {
  readonly organization_id?: string | ReadonlyArray<string> | null;
  readonly checkout_id?: string | ReadonlyArray<string> | null;
  readonly order_id?: string | ReadonlyArray<string> | null;
  readonly customer_id?: string | ReadonlyArray<string> | null;
  readonly status?: Models.PaymentStatus | ReadonlyArray<Models.PaymentStatus> | null;
  readonly method?: string | ReadonlyArray<string> | null;
  readonly customer_email?: string | ReadonlyArray<string> | null;
  readonly page?: number;
  readonly limit?: number;
  readonly sorting?: ReadonlyArray<Models.PaymentSortProperty> | null;
}): Stream.Stream<Models.Payment, Errors.PaymentsListErrors | PolarRequestError, PolarClient> =>
  paginate(query?.page ?? 1, (page) => list({ ...query, page }));

/**
 * Get a payment by ID.
 *
 * **Scopes**: `payments:read`
 */
export const get = (
  id: string,
): Effect.Effect<Models.Payment, Errors.PaymentsGetErrors | PolarRequestError, PolarClient> =>
  request({
    method: "GET",
    path: "/v1/payments/{id}",
    pathParams: { id: id },
    success: Models.Payment,
    errors: {
      404: [[Models.ResourceNotFound, Errors.PaymentsGetResourceNotFoundError]],
      422: [[Models.HTTPValidationError, Errors.PaymentsGetHTTPValidationError]],
    },
  });
