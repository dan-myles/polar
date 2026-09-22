import type { Effect } from "effect";
import type { Stream } from "effect";

import type { PolarClient, PolarRequestError } from "../../PolarClient";

import { paginate, request } from "../../PolarClient";
import * as Errors from "../errors";
import * as Models from "../models";

/**
 * List files.
 *
 * **Scopes**: `files:read` `files:write`
 */
export const list = (query?: {
  readonly organization_id?: string | ReadonlyArray<string> | null;
  readonly ids?: string | ReadonlyArray<string> | null;
  readonly page?: number;
  readonly limit?: number;
}): Effect.Effect<
  Models.ListResourceFileRead,
  Errors.FilesListErrors | PolarRequestError,
  PolarClient
> =>
  request({
    method: "GET",
    path: "/v1/files/",
    query,
    success: Models.ListResourceFileRead,
    errors: { 422: [[Models.HTTPValidationError, Errors.FilesListHTTPValidationError]] },
  });

/**
 * List files.
 *
 * **Scopes**: `files:read` `files:write`
 *
 * Streams every item across all pages.
 */
export const listStream = (query?: {
  readonly organization_id?: string | ReadonlyArray<string> | null;
  readonly ids?: string | ReadonlyArray<string> | null;
  readonly page?: number;
  readonly limit?: number;
}): Stream.Stream<Models.FileRead, Errors.FilesListErrors | PolarRequestError, PolarClient> =>
  paginate(query?.page ?? 1, (page) => list({ ...query, page }));

/**
 * Create a file.
 *
 * **Scopes**: `files:write`
 */
export const create = (
  body: Models.FileCreate,
): Effect.Effect<Models.FileUpload, Errors.FilesCreateErrors | PolarRequestError, PolarClient> =>
  request({
    method: "POST",
    path: "/v1/files/",
    body: [Models.FileCreate, body],
    success: Models.FileUpload,
    errors: { 422: [[Models.HTTPValidationError, Errors.FilesCreateHTTPValidationError]] },
  });

/**
 * Complete a file upload.
 *
 * **Scopes**: `files:write`
 */
export const uploaded = (
  id_path: string,
  body: Models.FileUploadCompleted,
): Effect.Effect<Models.FileRead, Errors.FilesUploadedErrors | PolarRequestError, PolarClient> =>
  request({
    method: "POST",
    path: "/v1/files/{id}/uploaded",
    pathParams: { id: id_path },
    body: [Models.FileUploadCompleted, body],
    success: Models.FileRead,
    errors: {
      403: [[Models.NotPermitted, Errors.FilesUploadedNotPermittedError]],
      404: [[Models.ResourceNotFound, Errors.FilesUploadedResourceNotFoundError]],
      422: [[Models.HTTPValidationError, Errors.FilesUploadedHTTPValidationError]],
    },
  });

/**
 * Delete a file.
 *
 * **Scopes**: `files:write`
 */
const delete_ = (
  id: string,
): Effect.Effect<void, Errors.FilesDeleteErrors | PolarRequestError, PolarClient> =>
  request({
    method: "DELETE",
    path: "/v1/files/{id}",
    pathParams: { id: id },
    success: "none",
    errors: {
      403: [[Models.NotPermitted, Errors.FilesDeleteNotPermittedError]],
      404: [[Models.ResourceNotFound, Errors.FilesDeleteResourceNotFoundError]],
      422: [[Models.HTTPValidationError, Errors.FilesDeleteHTTPValidationError]],
    },
  });
export { delete_ as delete };

/**
 * Update a file.
 *
 * **Scopes**: `files:write`
 */
export const update = (
  id: string,
  body: Models.FilePatch,
): Effect.Effect<Models.FileRead, Errors.FilesUpdateErrors | PolarRequestError, PolarClient> =>
  request({
    method: "PATCH",
    path: "/v1/files/{id}",
    pathParams: { id: id },
    body: [Models.FilePatch, body],
    success: Models.FileRead,
    errors: {
      403: [[Models.NotPermitted, Errors.FilesUpdateNotPermittedError]],
      404: [[Models.ResourceNotFound, Errors.FilesUpdateResourceNotFoundError]],
      422: [[Models.HTTPValidationError, Errors.FilesUpdateHTTPValidationError]],
    },
  });
