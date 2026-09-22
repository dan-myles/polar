import type { Effect } from "effect";

import { Schema } from "effect";

import type { PolarClient, PolarRequestError } from "../../PolarClient";

import { request } from "../../PolarClient";
import * as Errors from "../errors";
import * as Models from "../models";

/**
 * Create a customer session.
 *
 * For organizations with `member_model_enabled`, this will automatically
 * create a member session for the owner member of the customer.
 *
 * **Scopes**: `customer_sessions:write`
 */
export const create = (
  body: Models.CustomerSessionCustomerIDCreate | Models.CustomerSessionCustomerExternalIDCreate,
): Effect.Effect<
  Models.CustomerSession,
  Errors.CustomerSessionsCreateErrors | PolarRequestError,
  PolarClient
> =>
  request({
    method: "POST",
    path: "/v1/customer-sessions/",
    body: [
      Schema.Union([
        Models.CustomerSessionCustomerIDCreate,
        Models.CustomerSessionCustomerExternalIDCreate,
      ]),
      body,
    ],
    success: Models.CustomerSession,
    errors: {
      409: [
        [
          Models.AmbiguousExternalCustomerID,
          Errors.CustomerSessionsCreateAmbiguousExternalCustomerIDError,
        ],
      ],
      422: [[Models.HTTPValidationError, Errors.CustomerSessionsCreateHTTPValidationError]],
    },
  });
