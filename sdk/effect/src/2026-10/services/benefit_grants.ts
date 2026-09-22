import type { Effect } from "effect";
import type { Stream } from "effect";

import type { PolarClient, PolarRequestError } from "../../PolarClient";

import { paginate, request } from "../../PolarClient";
import * as Errors from "../errors";
import * as Models from "../models";

/**
 * List benefit grants across all benefits accessible to the authenticated subject.
 *
 * **Scopes**: `benefits:read` `benefits:write`
 */
export const list = (query?: {
  readonly organization_id?: string | ReadonlyArray<string> | null;
  readonly customer_id?: string | ReadonlyArray<string> | null;
  readonly external_customer_id?: string | ReadonlyArray<string> | null;
  readonly is_granted?: boolean | null;
  readonly page?: number;
  readonly limit?: number;
  readonly sorting?: ReadonlyArray<Models.BenefitGrantSortProperty> | null;
}): Effect.Effect<
  Models.ListResourceBenefitGrant,
  Errors.BenefitGrantsListErrors | PolarRequestError,
  PolarClient
> =>
  request({
    method: "GET",
    path: "/v1/benefit-grants/",
    query,
    success: Models.ListResourceBenefitGrant,
    errors: { 422: [[Models.HTTPValidationError, Errors.BenefitGrantsListHTTPValidationError]] },
  });

/**
 * List benefit grants across all benefits accessible to the authenticated subject.
 *
 * **Scopes**: `benefits:read` `benefits:write`
 *
 * Streams every item across all pages.
 */
export const listStream = (query?: {
  readonly organization_id?: string | ReadonlyArray<string> | null;
  readonly customer_id?: string | ReadonlyArray<string> | null;
  readonly external_customer_id?: string | ReadonlyArray<string> | null;
  readonly is_granted?: boolean | null;
  readonly page?: number;
  readonly limit?: number;
  readonly sorting?: ReadonlyArray<Models.BenefitGrantSortProperty> | null;
}): Stream.Stream<
  Models.BenefitGrant,
  Errors.BenefitGrantsListErrors | PolarRequestError,
  PolarClient
> => paginate(query?.page ?? 1, (page) => list({ ...query, page }));
