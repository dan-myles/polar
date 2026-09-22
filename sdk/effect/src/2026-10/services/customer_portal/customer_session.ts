import type { Effect } from "effect";

import type { PolarClient, PolarRequestError } from "../../../PolarClient";

import { request } from "../../../PolarClient";
import * as Models from "../../models";

/**
 * Introspect the current session and return its information.
 *
 * **Scopes**: `customer_portal:read` `customer_portal:write`
 */
export const introspect = (): Effect.Effect<
  Models.CustomerCustomerSession,
  PolarRequestError,
  PolarClient
> =>
  request({
    method: "GET",
    path: "/v1/customer-portal/customer-session/introspect",
    success: Models.CustomerCustomerSession,
  });

/**
 * Get information about the currently authenticated portal user.
 *
 * **Scopes**: `customer_portal:read` `customer_portal:write`
 */
export const getAuthenticatedUser = (): Effect.Effect<
  Models.PortalAuthenticatedUser,
  PolarRequestError,
  PolarClient
> =>
  request({
    method: "GET",
    path: "/v1/customer-portal/customer-session/user",
    success: Models.PortalAuthenticatedUser,
  });
