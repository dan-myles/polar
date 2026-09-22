import type { Effect } from "effect";
import type { Stream } from "effect";

import type { PolarClient, PolarRequestError } from "../../../PolarClient";

import { paginate, request } from "../../../PolarClient";
import * as Errors from "../../errors";
import * as Models from "../../models";

/**
 * List wallets of the authenticated customer.
 */
export const list = (query?: {
  readonly page?: number;
  readonly limit?: number;
  readonly sorting?: ReadonlyArray<Models.CustomerWalletSortProperty> | null;
}): Effect.Effect<
  Models.ListResourceCustomerWallet,
  Errors.CustomerPortalWalletsListErrors | PolarRequestError,
  PolarClient
> =>
  request({
    method: "GET",
    path: "/v1/customer-portal/wallets/",
    query,
    success: Models.ListResourceCustomerWallet,
    errors: {
      422: [[Models.HTTPValidationError, Errors.CustomerPortalWalletsListHTTPValidationError]],
    },
  });

/**
 * List wallets of the authenticated customer.
 *
 * Streams every item across all pages.
 */
export const listStream = (query?: {
  readonly page?: number;
  readonly limit?: number;
  readonly sorting?: ReadonlyArray<Models.CustomerWalletSortProperty> | null;
}): Stream.Stream<
  Models.CustomerWallet,
  Errors.CustomerPortalWalletsListErrors | PolarRequestError,
  PolarClient
> => paginate(query?.page ?? 1, (page) => list({ ...query, page }));

/**
 * Get a wallet by ID for the authenticated customer.
 */
export const get = (
  id: string,
): Effect.Effect<
  Models.CustomerWallet,
  Errors.CustomerPortalWalletsGetErrors | PolarRequestError,
  PolarClient
> =>
  request({
    method: "GET",
    path: "/v1/customer-portal/wallets/{id}",
    pathParams: { id: id },
    success: Models.CustomerWallet,
    errors: {
      404: [[Models.ResourceNotFound, Errors.CustomerPortalWalletsGetResourceNotFoundError]],
      422: [[Models.HTTPValidationError, Errors.CustomerPortalWalletsGetHTTPValidationError]],
    },
  });
