import type { Effect } from "effect";

import type { PolarClient, PolarRequestError } from "../../PolarClient";

import { request } from "../../PolarClient";
import * as Errors from "../errors";
import * as Models from "../models";

/**
 * **Scopes**: `customer_seats:read`
 */
export const listSeats = (query?: {
  readonly subscription_id?: string | null;
  readonly order_id?: string | null;
}): Effect.Effect<
  Models.SeatsList,
  Errors.CustomerSeatsListSeatsErrors | PolarRequestError,
  PolarClient
> =>
  request({
    method: "GET",
    path: "/v1/customer-seats",
    query,
    success: Models.SeatsList,
    errors: {
      401: [[null, Errors.CustomerSeatsListSeatsUnauthorizedError]],
      403: [[null, Errors.CustomerSeatsListSeatsForbiddenError]],
      404: [[null, Errors.CustomerSeatsListSeatsNotFoundError]],
      422: [[Models.HTTPValidationError, Errors.CustomerSeatsListSeatsHTTPValidationError]],
    },
  });

/**
 * **Scopes**: `customer_seats:write`
 */
export const assignSeat = (
  body: Models.SeatAssign,
): Effect.Effect<
  Models.CustomerSeat,
  Errors.CustomerSeatsAssignSeatErrors | PolarRequestError,
  PolarClient
> =>
  request({
    method: "POST",
    path: "/v1/customer-seats",
    body: [Models.SeatAssign, body],
    success: Models.CustomerSeat,
    errors: {
      400: [[null, Errors.CustomerSeatsAssignSeatBadRequestError]],
      401: [[null, Errors.CustomerSeatsAssignSeatUnauthorizedError]],
      403: [[null, Errors.CustomerSeatsAssignSeatForbiddenError]],
      404: [[null, Errors.CustomerSeatsAssignSeatNotFoundError]],
      422: [[Models.HTTPValidationError, Errors.CustomerSeatsAssignSeatHTTPValidationError]],
    },
  });

/**
 * **Scopes**: `customer_seats:write`
 */
export const revokeSeat = (
  seat_id: string,
): Effect.Effect<
  Models.CustomerSeat,
  Errors.CustomerSeatsRevokeSeatErrors | PolarRequestError,
  PolarClient
> =>
  request({
    method: "DELETE",
    path: "/v1/customer-seats/{seat_id}",
    pathParams: { seat_id: seat_id },
    success: Models.CustomerSeat,
    errors: {
      401: [[null, Errors.CustomerSeatsRevokeSeatUnauthorizedError]],
      403: [[null, Errors.CustomerSeatsRevokeSeatForbiddenError]],
      404: [[null, Errors.CustomerSeatsRevokeSeatNotFoundError]],
      422: [[Models.HTTPValidationError, Errors.CustomerSeatsRevokeSeatHTTPValidationError]],
    },
  });

/**
 * **Scopes**: `customer_seats:write`
 */
export const resendInvitation = (
  seat_id: string,
): Effect.Effect<
  Models.CustomerSeat,
  Errors.CustomerSeatsResendInvitationErrors | PolarRequestError,
  PolarClient
> =>
  request({
    method: "POST",
    path: "/v1/customer-seats/{seat_id}/resend",
    pathParams: { seat_id: seat_id },
    success: Models.CustomerSeat,
    errors: {
      400: [[null, Errors.CustomerSeatsResendInvitationBadRequestError]],
      401: [[null, Errors.CustomerSeatsResendInvitationUnauthorizedError]],
      403: [[null, Errors.CustomerSeatsResendInvitationForbiddenError]],
      404: [[null, Errors.CustomerSeatsResendInvitationNotFoundError]],
      422: [[Models.HTTPValidationError, Errors.CustomerSeatsResendInvitationHTTPValidationError]],
    },
  });

/**
 */
export const getClaimInfo = (
  invitation_token: string,
): Effect.Effect<
  Models.SeatClaimInfo,
  Errors.CustomerSeatsGetClaimInfoErrors | PolarRequestError,
  PolarClient
> =>
  request({
    method: "GET",
    path: "/v1/customer-seats/claim/{invitation_token}",
    pathParams: { invitation_token: invitation_token },
    success: Models.SeatClaimInfo,
    errors: {
      400: [[null, Errors.CustomerSeatsGetClaimInfoBadRequestError]],
      403: [[null, Errors.CustomerSeatsGetClaimInfoForbiddenError]],
      404: [[null, Errors.CustomerSeatsGetClaimInfoNotFoundError]],
      422: [[Models.HTTPValidationError, Errors.CustomerSeatsGetClaimInfoHTTPValidationError]],
    },
  });

/**
 */
export const claimSeat = (
  body: Models.SeatClaim,
): Effect.Effect<
  Models.CustomerSeatClaimResponse,
  Errors.CustomerSeatsClaimSeatErrors | PolarRequestError,
  PolarClient
> =>
  request({
    method: "POST",
    path: "/v1/customer-seats/claim",
    body: [Models.SeatClaim, body],
    success: Models.CustomerSeatClaimResponse,
    errors: {
      400: [[null, Errors.CustomerSeatsClaimSeatBadRequestError]],
      403: [[null, Errors.CustomerSeatsClaimSeatForbiddenError]],
      422: [[Models.HTTPValidationError, Errors.CustomerSeatsClaimSeatHTTPValidationError]],
    },
  });
