import type { Effect } from "effect";
import type { Stream } from "effect";

import type { PolarClient, PolarRequestError } from "../../../PolarClient";

import { paginate, request } from "../../../PolarClient";
import * as Errors from "../../errors";
import * as Models from "../../models";

/**
 * **Scopes**: `customer_portal:read` `customer_portal:write`
 */
export const listSeats = (query?: {
  readonly subscription_id?: string | null;
  readonly order_id?: string | null;
}): Effect.Effect<
  Models.SeatsList,
  Errors.CustomerPortalSeatsListSeatsErrors | PolarRequestError,
  PolarClient
> =>
  request({
    method: "GET",
    path: "/v1/customer-portal/seats",
    query,
    success: Models.SeatsList,
    errors: {
      401: [[null, Errors.CustomerPortalSeatsListSeatsUnauthorizedError]],
      403: [[null, Errors.CustomerPortalSeatsListSeatsForbiddenError]],
      404: [[null, Errors.CustomerPortalSeatsListSeatsNotFoundError]],
      422: [[Models.HTTPValidationError, Errors.CustomerPortalSeatsListSeatsHTTPValidationError]],
    },
  });

/**
 */
export const assignSeat = (
  body: Models.CustomerSeatAssign,
): Effect.Effect<
  Models.CustomerSeat,
  Errors.CustomerPortalSeatsAssignSeatErrors | PolarRequestError,
  PolarClient
> =>
  request({
    method: "POST",
    path: "/v1/customer-portal/seats",
    body: [Models.CustomerSeatAssign, body],
    success: Models.CustomerSeat,
    errors: {
      400: [[null, Errors.CustomerPortalSeatsAssignSeatBadRequestError]],
      401: [[null, Errors.CustomerPortalSeatsAssignSeatUnauthorizedError]],
      403: [[null, Errors.CustomerPortalSeatsAssignSeatForbiddenError]],
      404: [[null, Errors.CustomerPortalSeatsAssignSeatNotFoundError]],
      422: [[Models.HTTPValidationError, Errors.CustomerPortalSeatsAssignSeatHTTPValidationError]],
    },
  });

/**
 */
export const revokeSeat = (
  seat_id: string,
): Effect.Effect<
  Models.CustomerSeat,
  Errors.CustomerPortalSeatsRevokeSeatErrors | PolarRequestError,
  PolarClient
> =>
  request({
    method: "DELETE",
    path: "/v1/customer-portal/seats/{seat_id}",
    pathParams: { seat_id: seat_id },
    success: Models.CustomerSeat,
    errors: {
      401: [[null, Errors.CustomerPortalSeatsRevokeSeatUnauthorizedError]],
      403: [[null, Errors.CustomerPortalSeatsRevokeSeatForbiddenError]],
      404: [[null, Errors.CustomerPortalSeatsRevokeSeatNotFoundError]],
      422: [[Models.HTTPValidationError, Errors.CustomerPortalSeatsRevokeSeatHTTPValidationError]],
    },
  });

/**
 */
export const resendInvitation = (
  seat_id: string,
): Effect.Effect<
  Models.CustomerSeat,
  Errors.CustomerPortalSeatsResendInvitationErrors | PolarRequestError,
  PolarClient
> =>
  request({
    method: "POST",
    path: "/v1/customer-portal/seats/{seat_id}/resend",
    pathParams: { seat_id: seat_id },
    success: Models.CustomerSeat,
    errors: {
      400: [[null, Errors.CustomerPortalSeatsResendInvitationBadRequestError]],
      401: [[null, Errors.CustomerPortalSeatsResendInvitationUnauthorizedError]],
      403: [[null, Errors.CustomerPortalSeatsResendInvitationForbiddenError]],
      404: [[null, Errors.CustomerPortalSeatsResendInvitationNotFoundError]],
      422: [
        [Models.HTTPValidationError, Errors.CustomerPortalSeatsResendInvitationHTTPValidationError],
      ],
    },
  });

/**
 * List all subscriptions where the authenticated customer has claimed a seat.
 *
 * **Scopes**: `customer_portal:read` `customer_portal:write`
 */
export const listClaimedSubscriptions = (query?: {
  readonly page?: number;
  readonly limit?: number;
}): Effect.Effect<
  Models.ListResourceCustomerSubscription,
  Errors.CustomerPortalSeatsListClaimedSubscriptionsErrors | PolarRequestError,
  PolarClient
> =>
  request({
    method: "GET",
    path: "/v1/customer-portal/seats/subscriptions",
    query,
    success: Models.ListResourceCustomerSubscription,
    errors: {
      401: [[null, Errors.CustomerPortalSeatsListClaimedSubscriptionsUnauthorizedError]],
      422: [
        [
          Models.HTTPValidationError,
          Errors.CustomerPortalSeatsListClaimedSubscriptionsHTTPValidationError,
        ],
      ],
    },
  });

/**
 * List all subscriptions where the authenticated customer has claimed a seat.
 *
 * **Scopes**: `customer_portal:read` `customer_portal:write`
 *
 * Streams every item across all pages.
 */
export const listClaimedSubscriptionsStream = (query?: {
  readonly page?: number;
  readonly limit?: number;
}): Stream.Stream<
  Models.CustomerSubscription,
  Errors.CustomerPortalSeatsListClaimedSubscriptionsErrors | PolarRequestError,
  PolarClient
> => paginate(query?.page ?? 1, (page) => listClaimedSubscriptions({ ...query, page }));
