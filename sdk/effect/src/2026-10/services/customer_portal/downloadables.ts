import type { Effect } from "effect";
import type { Stream } from "effect";

import type { PolarClient, PolarRequestError } from "../../../PolarClient";

import { paginate, request } from "../../../PolarClient";
import * as Errors from "../../errors";
import * as Models from "../../models";

/**
 * **Scopes**: `customer_portal:read` `customer_portal:write`
 */
export const list = (query?: {
  readonly benefit_id?: string | ReadonlyArray<string> | null;
  readonly page?: number;
  readonly limit?: number;
}): Effect.Effect<
  Models.ListResourceDownloadableRead,
  Errors.CustomerPortalDownloadablesListErrors | PolarRequestError,
  PolarClient
> =>
  request({
    method: "GET",
    path: "/v1/customer-portal/downloadables/",
    query,
    success: Models.ListResourceDownloadableRead,
    errors: {
      422: [
        [Models.HTTPValidationError, Errors.CustomerPortalDownloadablesListHTTPValidationError],
      ],
    },
  });

/**
 * **Scopes**: `customer_portal:read` `customer_portal:write`
 *
 * Streams every item across all pages.
 */
export const listStream = (query?: {
  readonly benefit_id?: string | ReadonlyArray<string> | null;
  readonly page?: number;
  readonly limit?: number;
}): Stream.Stream<
  Models.DownloadableRead,
  Errors.CustomerPortalDownloadablesListErrors | PolarRequestError,
  PolarClient
> => paginate(query?.page ?? 1, (page) => list({ ...query, page }));
