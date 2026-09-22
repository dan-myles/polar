import type { Effect } from "effect";
import type { Stream } from "effect";

import type { PolarClient, PolarRequestError } from "../../../PolarClient";

import { paginate, request } from "../../../PolarClient";
import * as Errors from "../../errors";
import * as Models from "../../models";

/**
 * List all members of the customer's team.
 *
 * Only available to owners and billing managers of team customers.
 */
export const listMembers = (query?: {
  readonly page?: number;
  readonly limit?: number;
}): Effect.Effect<
  Models.ListResourceCustomerPortalMember,
  Errors.CustomerPortalMembersListMembersErrors | PolarRequestError,
  PolarClient
> =>
  request({
    method: "GET",
    path: "/v1/customer-portal/members",
    query,
    success: Models.ListResourceCustomerPortalMember,
    errors: {
      401: [[null, Errors.CustomerPortalMembersListMembersUnauthorizedError]],
      403: [[null, Errors.CustomerPortalMembersListMembersForbiddenError]],
      422: [
        [Models.HTTPValidationError, Errors.CustomerPortalMembersListMembersHTTPValidationError],
      ],
    },
  });

/**
 * List all members of the customer's team.
 *
 * Only available to owners and billing managers of team customers.
 *
 * Streams every item across all pages.
 */
export const listMembersStream = (query?: {
  readonly page?: number;
  readonly limit?: number;
}): Stream.Stream<
  Models.CustomerPortalMember,
  Errors.CustomerPortalMembersListMembersErrors | PolarRequestError,
  PolarClient
> => paginate(query?.page ?? 1, (page) => listMembers({ ...query, page }));

/**
 * Add a new member to the customer's team.
 *
 * Only available to owners and billing managers of team customers.
 *
 * Rules:
 * - Cannot add a member with the owner role (there must be exactly one owner)
 * - If a member with this email already exists, the existing member is returned
 */
export const addMember = (
  body: Models.CustomerPortalMemberCreate,
): Effect.Effect<
  Models.CustomerPortalMember,
  Errors.CustomerPortalMembersAddMemberErrors | PolarRequestError,
  PolarClient
> =>
  request({
    method: "POST",
    path: "/v1/customer-portal/members",
    body: [Models.CustomerPortalMemberCreate, body],
    success: Models.CustomerPortalMember,
    errors: {
      400: [[null, Errors.CustomerPortalMembersAddMemberBadRequestError]],
      401: [[null, Errors.CustomerPortalMembersAddMemberUnauthorizedError]],
      403: [[null, Errors.CustomerPortalMembersAddMemberForbiddenError]],
      422: [[Models.HTTPValidationError, Errors.CustomerPortalMembersAddMemberHTTPValidationError]],
    },
  });

/**
 * Remove a member from the team.
 *
 * Only available to owners and billing managers of team customers.
 *
 * Rules:
 * - Cannot remove yourself
 * - Cannot remove the only owner
 */
export const removeMember = (
  id: string,
): Effect.Effect<
  void,
  Errors.CustomerPortalMembersRemoveMemberErrors | PolarRequestError,
  PolarClient
> =>
  request({
    method: "DELETE",
    path: "/v1/customer-portal/members/{id}",
    pathParams: { id: id },
    success: "none",
    errors: {
      400: [[null, Errors.CustomerPortalMembersRemoveMemberBadRequestError]],
      401: [[null, Errors.CustomerPortalMembersRemoveMemberUnauthorizedError]],
      403: [[null, Errors.CustomerPortalMembersRemoveMemberForbiddenError]],
      404: [[null, Errors.CustomerPortalMembersRemoveMemberNotFoundError]],
      422: [
        [Models.HTTPValidationError, Errors.CustomerPortalMembersRemoveMemberHTTPValidationError],
      ],
    },
  });

/**
 * Update a member's name or role.
 *
 * Only available to owners and billing managers of team customers.
 *
 * Rules:
 * - Cannot modify your own role (to prevent self-demotion)
 * - Customer must have exactly one owner at all times
 */
export const updateMember = (
  id: string,
  body: Models.CustomerPortalMemberUpdate,
): Effect.Effect<
  Models.CustomerPortalMember,
  Errors.CustomerPortalMembersUpdateMemberErrors | PolarRequestError,
  PolarClient
> =>
  request({
    method: "PATCH",
    path: "/v1/customer-portal/members/{id}",
    pathParams: { id: id },
    body: [Models.CustomerPortalMemberUpdate, body],
    success: Models.CustomerPortalMember,
    errors: {
      400: [[null, Errors.CustomerPortalMembersUpdateMemberBadRequestError]],
      401: [[null, Errors.CustomerPortalMembersUpdateMemberUnauthorizedError]],
      403: [[null, Errors.CustomerPortalMembersUpdateMemberForbiddenError]],
      404: [[null, Errors.CustomerPortalMembersUpdateMemberNotFoundError]],
      422: [
        [Models.HTTPValidationError, Errors.CustomerPortalMembersUpdateMemberHTTPValidationError],
      ],
    },
  });
