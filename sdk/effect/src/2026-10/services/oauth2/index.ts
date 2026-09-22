import type { Effect } from "effect";

import { Schema } from "effect";

import type { PolarClient, PolarRequestError } from "../../../PolarClient";

import { openUnion } from "../../../internal/schema";
import { request } from "../../../PolarClient";
import * as Models from "../../models";

export * as Clients from "./clients";

/**
 */
export const authorize = (): Effect.Effect<
  | Models.AuthorizeResponseUser
  | Models.AuthorizeResponseOrganization
  | Models.UnknownVariant<"sub_type">,
  PolarRequestError,
  PolarClient
> =>
  request({
    method: "GET",
    path: "/v1/oauth2/authorize",
    success: openUnion(
      [Models.AuthorizeResponseUser, Models.AuthorizeResponseOrganization],
      "sub_type",
      ["organization", "user"],
    ),
  });

/**
 * Request an access token using a valid grant.
 */
export const requestToken = (): Effect.Effect<
  Models.TokenResponse,
  PolarRequestError,
  PolarClient
> => request({ method: "POST", path: "/v1/oauth2/token", success: Models.TokenResponse });

/**
 * Revoke an access token or a refresh token.
 */
export const revokeToken = (): Effect.Effect<
  Models.RevokeTokenResponse,
  PolarRequestError,
  PolarClient
> => request({ method: "POST", path: "/v1/oauth2/revoke", success: Models.RevokeTokenResponse });

/**
 * Get information about an access token.
 */
export const introspectToken = (): Effect.Effect<
  Models.IntrospectTokenResponse,
  PolarRequestError,
  PolarClient
> =>
  request({
    method: "POST",
    path: "/v1/oauth2/introspect",
    success: Models.IntrospectTokenResponse,
  });

/**
 * Get information about the authenticated user.
 */
export const userinfo = (): Effect.Effect<
  Models.UserInfoUser | Models.UserInfoOrganization,
  PolarRequestError,
  PolarClient
> =>
  request({
    method: "GET",
    path: "/v1/oauth2/userinfo",
    success: Schema.Union([Models.UserInfoUser, Models.UserInfoOrganization]),
  });
