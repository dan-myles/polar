import type { Effect } from "effect";

import { Schema } from "effect";

import type { PolarClient, PolarRequestError } from "../../../../PolarClient";

import { request } from "../../../../PolarClient";
import * as Errors from "../../../errors";
import * as Models from "../../../models";

/**
 * Create an OAuth2 client.
 */
export const createClient = (
  body: Models.OAuth2ClientConfiguration,
): Effect.Effect<
  unknown,
  Errors.Oauth2ClientsOauth2CreateClientErrors | PolarRequestError,
  PolarClient
> =>
  request({
    method: "POST",
    path: "/v1/oauth2/register",
    body: [Models.OAuth2ClientConfiguration, body],
    success: Schema.Unknown,
    errors: {
      422: [
        [Models.HTTPValidationError, Errors.Oauth2ClientsOauth2CreateClientHTTPValidationError],
      ],
    },
  });

/**
 * Get an OAuth2 client by Client ID.
 */
export const getClient = (
  client_id: string,
): Effect.Effect<
  unknown,
  Errors.Oauth2ClientsOauth2GetClientErrors | PolarRequestError,
  PolarClient
> =>
  request({
    method: "GET",
    path: "/v1/oauth2/register/{client_id}",
    pathParams: { client_id: client_id },
    success: Schema.Unknown,
    errors: {
      422: [[Models.HTTPValidationError, Errors.Oauth2ClientsOauth2GetClientHTTPValidationError]],
    },
  });

/**
 * Update an OAuth2 client.
 */
export const updateClient = (
  client_id_path: string,
  body: Models.OAuth2ClientConfigurationUpdate,
): Effect.Effect<
  unknown,
  Errors.Oauth2ClientsOauth2UpdateClientErrors | PolarRequestError,
  PolarClient
> =>
  request({
    method: "PUT",
    path: "/v1/oauth2/register/{client_id}",
    pathParams: { client_id: client_id_path },
    body: [Models.OAuth2ClientConfigurationUpdate, body],
    success: Schema.Unknown,
    errors: {
      422: [
        [Models.HTTPValidationError, Errors.Oauth2ClientsOauth2UpdateClientHTTPValidationError],
      ],
    },
  });

/**
 * Delete an OAuth2 client.
 */
export const deleteClient = (
  client_id: string,
): Effect.Effect<
  void,
  Errors.Oauth2ClientsOauth2DeleteClientErrors | PolarRequestError,
  PolarClient
> =>
  request({
    method: "DELETE",
    path: "/v1/oauth2/register/{client_id}",
    pathParams: { client_id: client_id },
    success: "none",
    errors: {
      422: [
        [Models.HTTPValidationError, Errors.Oauth2ClientsOauth2DeleteClientHTTPValidationError],
      ],
    },
  });
