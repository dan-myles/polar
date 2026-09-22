import { Data } from "effect";

import type * as Models from "./models";

/**
 * Validation Error
 */
export class OrganizationsListHTTPValidationError extends Data.TaggedError("HTTPValidationError")<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type OrganizationsListErrors = OrganizationsListHTTPValidationError;

/**
 * Forbidden
 */
export class OrganizationsCreateCannotCreateOrganizationError extends Data.TaggedError(
  "CannotCreateOrganizationError",
)<{
  readonly status: 403;
  readonly body: Models.CannotCreateOrganizationError;
}> {}

/**
 * Validation Error
 */
export class OrganizationsCreateHTTPValidationError extends Data.TaggedError(
  "HTTPValidationError",
)<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type OrganizationsCreateErrors =
  | OrganizationsCreateCannotCreateOrganizationError
  | OrganizationsCreateHTTPValidationError;

/**
 * Organization not found.
 */
export class OrganizationsGetResourceNotFoundError extends Data.TaggedError("ResourceNotFound")<{
  readonly status: 404;
  readonly body: Models.ResourceNotFound;
}> {}

/**
 * Validation Error
 */
export class OrganizationsGetHTTPValidationError extends Data.TaggedError("HTTPValidationError")<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type OrganizationsGetErrors =
  | OrganizationsGetResourceNotFoundError
  | OrganizationsGetHTTPValidationError;

/**
 * You don't have the permission to update this organization, or dispute auto-accept isn't enabled for it.
 */
export class OrganizationsUpdateNotPermittedError extends Data.TaggedError("NotPermitted")<{
  readonly status: 403;
  readonly body: Models.NotPermitted;
}> {}

/**
 * You don't have the permission to update this organization, or dispute auto-accept isn't enabled for it.
 */
export class OrganizationsUpdateDisputeAutoAcceptNotEnabledError extends Data.TaggedError(
  "DisputeAutoAcceptNotEnabled",
)<{
  readonly status: 403;
  readonly body: Models.DisputeAutoAcceptNotEnabled;
}> {}

/**
 * Organization not found.
 */
export class OrganizationsUpdateResourceNotFoundError extends Data.TaggedError("ResourceNotFound")<{
  readonly status: 404;
  readonly body: Models.ResourceNotFound;
}> {}

/**
 * Cannot enforce SSO without an enabled connection.
 */
export class OrganizationsUpdateSSOEnforcementRequiresConnectionError extends Data.TaggedError(
  "SSOEnforcementRequiresConnection",
)<{
  readonly status: 409;
  readonly body: Models.SSOEnforcementRequiresConnection;
}> {}

/**
 * Validation Error
 */
export class OrganizationsUpdateHTTPValidationError extends Data.TaggedError(
  "HTTPValidationError",
)<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type OrganizationsUpdateErrors =
  | OrganizationsUpdateNotPermittedError
  | OrganizationsUpdateDisputeAutoAcceptNotEnabledError
  | OrganizationsUpdateResourceNotFoundError
  | OrganizationsUpdateSSOEnforcementRequiresConnectionError
  | OrganizationsUpdateHTTPValidationError;

/**
 * Validation Error
 */
export class SubscriptionsListHTTPValidationError extends Data.TaggedError("HTTPValidationError")<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type SubscriptionsListErrors = SubscriptionsListHTTPValidationError;

/**
 * Validation Error
 */
export class SubscriptionsCreateHTTPValidationError extends Data.TaggedError(
  "HTTPValidationError",
)<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type SubscriptionsCreateErrors = SubscriptionsCreateHTTPValidationError;

/**
 * Validation Error
 */
export class SubscriptionsExportHTTPValidationError extends Data.TaggedError(
  "HTTPValidationError",
)<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type SubscriptionsExportErrors = SubscriptionsExportHTTPValidationError;

/**
 * Subscription not found.
 */
export class SubscriptionsGetResourceNotFoundError extends Data.TaggedError("ResourceNotFound")<{
  readonly status: 404;
  readonly body: Models.ResourceNotFound;
}> {}

/**
 * Validation Error
 */
export class SubscriptionsGetHTTPValidationError extends Data.TaggedError("HTTPValidationError")<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type SubscriptionsGetErrors =
  | SubscriptionsGetResourceNotFoundError
  | SubscriptionsGetHTTPValidationError;

/**
 * This subscription is already revoked.
 */
export class SubscriptionsRevokeAlreadyCanceledSubscriptionError extends Data.TaggedError(
  "AlreadyCanceledSubscription",
)<{
  readonly status: 403;
  readonly body: Models.AlreadyCanceledSubscription;
}> {}

/**
 * Subscription not found.
 */
export class SubscriptionsRevokeResourceNotFoundError extends Data.TaggedError("ResourceNotFound")<{
  readonly status: 404;
  readonly body: Models.ResourceNotFound;
}> {}

/**
 * Subscription is pending an update.
 */
export class SubscriptionsRevokeSubscriptionLockedError extends Data.TaggedError(
  "SubscriptionLocked",
)<{
  readonly status: 409;
  readonly body: Models.SubscriptionLocked;
}> {}

/**
 * Validation Error
 */
export class SubscriptionsRevokeHTTPValidationError extends Data.TaggedError(
  "HTTPValidationError",
)<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type SubscriptionsRevokeErrors =
  | SubscriptionsRevokeAlreadyCanceledSubscriptionError
  | SubscriptionsRevokeResourceNotFoundError
  | SubscriptionsRevokeSubscriptionLockedError
  | SubscriptionsRevokeHTTPValidationError;

/**
 * Payment required to apply the subscription update.
 */
export class SubscriptionsUpdatePaymentFailedError extends Data.TaggedError("PaymentFailed")<{
  readonly status: 402;
  readonly body: Models.PaymentFailed;
}> {}

/**
 * Subscription is already canceled or will be at the end of the period, or is not active.
 */
export class SubscriptionsUpdateAlreadyCanceledSubscriptionError extends Data.TaggedError(
  "AlreadyCanceledSubscription",
)<{
  readonly status: 403;
  readonly body: Models.AlreadyCanceledSubscription;
}> {}

/**
 * Subscription is already canceled or will be at the end of the period, or is not active.
 */
export class SubscriptionsUpdateInactiveSubscriptionError extends Data.TaggedError(
  "InactiveSubscription",
)<{
  readonly status: 403;
  readonly body: Models.InactiveSubscription;
}> {}

/**
 * Subscription not found.
 */
export class SubscriptionsUpdateResourceNotFoundError extends Data.TaggedError("ResourceNotFound")<{
  readonly status: 404;
  readonly body: Models.ResourceNotFound;
}> {}

/**
 * Subscription is pending an update, or is not scheduled to be canceled.
 */
export class SubscriptionsUpdateSubscriptionLockedError extends Data.TaggedError(
  "SubscriptionLocked",
)<{
  readonly status: 409;
  readonly body: Models.SubscriptionLocked;
}> {}

/**
 * Subscription is pending an update, or is not scheduled to be canceled.
 */
export class SubscriptionsUpdateSubscriptionNotScheduledToCancelError extends Data.TaggedError(
  "SubscriptionNotScheduledToCancel",
)<{
  readonly status: 409;
  readonly body: Models.SubscriptionNotScheduledToCancel;
}> {}

/**
 * Validation Error
 */
export class SubscriptionsUpdateHTTPValidationError extends Data.TaggedError(
  "HTTPValidationError",
)<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type SubscriptionsUpdateErrors =
  | SubscriptionsUpdatePaymentFailedError
  | SubscriptionsUpdateAlreadyCanceledSubscriptionError
  | SubscriptionsUpdateInactiveSubscriptionError
  | SubscriptionsUpdateResourceNotFoundError
  | SubscriptionsUpdateSubscriptionLockedError
  | SubscriptionsUpdateSubscriptionNotScheduledToCancelError
  | SubscriptionsUpdateHTTPValidationError;

/**
 * Validation Error
 */
export class Oauth2ClientsOauth2CreateClientHTTPValidationError extends Data.TaggedError(
  "HTTPValidationError",
)<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type Oauth2ClientsOauth2CreateClientErrors =
  Oauth2ClientsOauth2CreateClientHTTPValidationError;

/**
 * Validation Error
 */
export class Oauth2ClientsOauth2GetClientHTTPValidationError extends Data.TaggedError(
  "HTTPValidationError",
)<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type Oauth2ClientsOauth2GetClientErrors = Oauth2ClientsOauth2GetClientHTTPValidationError;

/**
 * Validation Error
 */
export class Oauth2ClientsOauth2UpdateClientHTTPValidationError extends Data.TaggedError(
  "HTTPValidationError",
)<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type Oauth2ClientsOauth2UpdateClientErrors =
  Oauth2ClientsOauth2UpdateClientHTTPValidationError;

/**
 * Validation Error
 */
export class Oauth2ClientsOauth2DeleteClientHTTPValidationError extends Data.TaggedError(
  "HTTPValidationError",
)<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type Oauth2ClientsOauth2DeleteClientErrors =
  Oauth2ClientsOauth2DeleteClientHTTPValidationError;

/**
 * Validation Error
 */
export class BenefitsListHTTPValidationError extends Data.TaggedError("HTTPValidationError")<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type BenefitsListErrors = BenefitsListHTTPValidationError;

/**
 * Validation Error
 */
export class BenefitsCreateHTTPValidationError extends Data.TaggedError("HTTPValidationError")<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type BenefitsCreateErrors = BenefitsCreateHTTPValidationError;

/**
 * Benefit not found.
 */
export class BenefitsGetResourceNotFoundError extends Data.TaggedError("ResourceNotFound")<{
  readonly status: 404;
  readonly body: Models.ResourceNotFound;
}> {}

/**
 * Validation Error
 */
export class BenefitsGetHTTPValidationError extends Data.TaggedError("HTTPValidationError")<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type BenefitsGetErrors = BenefitsGetResourceNotFoundError | BenefitsGetHTTPValidationError;

/**
 * This benefit is not deletable.
 */
export class BenefitsDeleteNotPermittedError extends Data.TaggedError("NotPermitted")<{
  readonly status: 403;
  readonly body: Models.NotPermitted;
}> {}

/**
 * Benefit not found.
 */
export class BenefitsDeleteResourceNotFoundError extends Data.TaggedError("ResourceNotFound")<{
  readonly status: 404;
  readonly body: Models.ResourceNotFound;
}> {}

/**
 * Validation Error
 */
export class BenefitsDeleteHTTPValidationError extends Data.TaggedError("HTTPValidationError")<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type BenefitsDeleteErrors =
  | BenefitsDeleteNotPermittedError
  | BenefitsDeleteResourceNotFoundError
  | BenefitsDeleteHTTPValidationError;

/**
 * Benefit not found.
 */
export class BenefitsUpdateResourceNotFoundError extends Data.TaggedError("ResourceNotFound")<{
  readonly status: 404;
  readonly body: Models.ResourceNotFound;
}> {}

/**
 * Validation Error
 */
export class BenefitsUpdateHTTPValidationError extends Data.TaggedError("HTTPValidationError")<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type BenefitsUpdateErrors =
  | BenefitsUpdateResourceNotFoundError
  | BenefitsUpdateHTTPValidationError;

/**
 * Benefit not found.
 */
export class BenefitsFilesResourceNotFoundError extends Data.TaggedError("ResourceNotFound")<{
  readonly status: 404;
  readonly body: Models.ResourceNotFound;
}> {}

/**
 * Validation Error
 */
export class BenefitsFilesHTTPValidationError extends Data.TaggedError("HTTPValidationError")<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type BenefitsFilesErrors =
  | BenefitsFilesResourceNotFoundError
  | BenefitsFilesHTTPValidationError;

/**
 * Benefit not found.
 */
export class BenefitsGrantsResourceNotFoundError extends Data.TaggedError("ResourceNotFound")<{
  readonly status: 404;
  readonly body: Models.ResourceNotFound;
}> {}

/**
 * Validation Error
 */
export class BenefitsGrantsHTTPValidationError extends Data.TaggedError("HTTPValidationError")<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type BenefitsGrantsErrors =
  | BenefitsGrantsResourceNotFoundError
  | BenefitsGrantsHTTPValidationError;

/**
 * Validation Error
 */
export class BenefitGrantsListHTTPValidationError extends Data.TaggedError("HTTPValidationError")<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type BenefitGrantsListErrors = BenefitGrantsListHTTPValidationError;

/**
 * Validation Error
 */
export class WebhooksListWebhookEndpointsHTTPValidationError extends Data.TaggedError(
  "HTTPValidationError",
)<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type WebhooksListWebhookEndpointsErrors = WebhooksListWebhookEndpointsHTTPValidationError;

/**
 * Validation Error
 */
export class WebhooksCreateWebhookEndpointHTTPValidationError extends Data.TaggedError(
  "HTTPValidationError",
)<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type WebhooksCreateWebhookEndpointErrors = WebhooksCreateWebhookEndpointHTTPValidationError;

/**
 * Webhook endpoint not found.
 */
export class WebhooksGetWebhookEndpointResourceNotFoundError extends Data.TaggedError(
  "ResourceNotFound",
)<{
  readonly status: 404;
  readonly body: Models.ResourceNotFound;
}> {}

/**
 * Validation Error
 */
export class WebhooksGetWebhookEndpointHTTPValidationError extends Data.TaggedError(
  "HTTPValidationError",
)<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type WebhooksGetWebhookEndpointErrors =
  | WebhooksGetWebhookEndpointResourceNotFoundError
  | WebhooksGetWebhookEndpointHTTPValidationError;

/**
 * Webhook endpoint not found.
 */
export class WebhooksDeleteWebhookEndpointResourceNotFoundError extends Data.TaggedError(
  "ResourceNotFound",
)<{
  readonly status: 404;
  readonly body: Models.ResourceNotFound;
}> {}

/**
 * Validation Error
 */
export class WebhooksDeleteWebhookEndpointHTTPValidationError extends Data.TaggedError(
  "HTTPValidationError",
)<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type WebhooksDeleteWebhookEndpointErrors =
  | WebhooksDeleteWebhookEndpointResourceNotFoundError
  | WebhooksDeleteWebhookEndpointHTTPValidationError;

/**
 * Webhook endpoint not found.
 */
export class WebhooksUpdateWebhookEndpointResourceNotFoundError extends Data.TaggedError(
  "ResourceNotFound",
)<{
  readonly status: 404;
  readonly body: Models.ResourceNotFound;
}> {}

/**
 * Validation Error
 */
export class WebhooksUpdateWebhookEndpointHTTPValidationError extends Data.TaggedError(
  "HTTPValidationError",
)<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type WebhooksUpdateWebhookEndpointErrors =
  | WebhooksUpdateWebhookEndpointResourceNotFoundError
  | WebhooksUpdateWebhookEndpointHTTPValidationError;

/**
 * Webhook endpoint not found.
 */
export class WebhooksResetWebhookEndpointSecretResourceNotFoundError extends Data.TaggedError(
  "ResourceNotFound",
)<{
  readonly status: 404;
  readonly body: Models.ResourceNotFound;
}> {}

/**
 * Validation Error
 */
export class WebhooksResetWebhookEndpointSecretHTTPValidationError extends Data.TaggedError(
  "HTTPValidationError",
)<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type WebhooksResetWebhookEndpointSecretErrors =
  | WebhooksResetWebhookEndpointSecretResourceNotFoundError
  | WebhooksResetWebhookEndpointSecretHTTPValidationError;

/**
 * Validation Error
 */
export class WebhooksListWebhookDeliveriesHTTPValidationError extends Data.TaggedError(
  "HTTPValidationError",
)<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type WebhooksListWebhookDeliveriesErrors = WebhooksListWebhookDeliveriesHTTPValidationError;

/**
 * Webhook event not found.
 */
export class WebhooksRedeliverWebhookEventResourceNotFoundError extends Data.TaggedError(
  "ResourceNotFound",
)<{
  readonly status: 404;
  readonly body: Models.ResourceNotFound;
}> {}

/**
 * Validation Error
 */
export class WebhooksRedeliverWebhookEventHTTPValidationError extends Data.TaggedError(
  "HTTPValidationError",
)<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type WebhooksRedeliverWebhookEventErrors =
  | WebhooksRedeliverWebhookEventResourceNotFoundError
  | WebhooksRedeliverWebhookEventHTTPValidationError;

/**
 * Validation Error
 */
export class ProductsListHTTPValidationError extends Data.TaggedError("HTTPValidationError")<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type ProductsListErrors = ProductsListHTTPValidationError;

/**
 * Validation Error
 */
export class ProductsCreateHTTPValidationError extends Data.TaggedError("HTTPValidationError")<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type ProductsCreateErrors = ProductsCreateHTTPValidationError;

/**
 * Product not found.
 */
export class ProductsGetResourceNotFoundError extends Data.TaggedError("ResourceNotFound")<{
  readonly status: 404;
  readonly body: Models.ResourceNotFound;
}> {}

/**
 * Validation Error
 */
export class ProductsGetHTTPValidationError extends Data.TaggedError("HTTPValidationError")<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type ProductsGetErrors = ProductsGetResourceNotFoundError | ProductsGetHTTPValidationError;

/**
 * You don't have the permission to update this product.
 */
export class ProductsUpdateNotPermittedError extends Data.TaggedError("NotPermitted")<{
  readonly status: 403;
  readonly body: Models.NotPermitted;
}> {}

/**
 * Product not found.
 */
export class ProductsUpdateResourceNotFoundError extends Data.TaggedError("ResourceNotFound")<{
  readonly status: 404;
  readonly body: Models.ResourceNotFound;
}> {}

/**
 * Validation Error
 */
export class ProductsUpdateHTTPValidationError extends Data.TaggedError("HTTPValidationError")<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type ProductsUpdateErrors =
  | ProductsUpdateNotPermittedError
  | ProductsUpdateResourceNotFoundError
  | ProductsUpdateHTTPValidationError;

/**
 * You don't have the permission to update this product.
 */
export class ProductsUpdateBenefitsNotPermittedError extends Data.TaggedError("NotPermitted")<{
  readonly status: 403;
  readonly body: Models.NotPermitted;
}> {}

/**
 * Product not found.
 */
export class ProductsUpdateBenefitsResourceNotFoundError extends Data.TaggedError(
  "ResourceNotFound",
)<{
  readonly status: 404;
  readonly body: Models.ResourceNotFound;
}> {}

/**
 * Validation Error
 */
export class ProductsUpdateBenefitsHTTPValidationError extends Data.TaggedError(
  "HTTPValidationError",
)<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type ProductsUpdateBenefitsErrors =
  | ProductsUpdateBenefitsNotPermittedError
  | ProductsUpdateBenefitsResourceNotFoundError
  | ProductsUpdateBenefitsHTTPValidationError;

/**
 * Validation Error
 */
export class OrdersListHTTPValidationError extends Data.TaggedError("HTTPValidationError")<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type OrdersListErrors = OrdersListHTTPValidationError;

/**
 * Validation Error
 */
export class OrdersCreateHTTPValidationError extends Data.TaggedError("HTTPValidationError")<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type OrdersCreateErrors = OrdersCreateHTTPValidationError;

/**
 * Validation Error
 */
export class OrdersExportHTTPValidationError extends Data.TaggedError("HTTPValidationError")<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type OrdersExportErrors = OrdersExportHTTPValidationError;

/**
 * Order not found.
 */
export class OrdersGetResourceNotFoundError extends Data.TaggedError("ResourceNotFound")<{
  readonly status: 404;
  readonly body: Models.ResourceNotFound;
}> {}

/**
 * Validation Error
 */
export class OrdersGetHTTPValidationError extends Data.TaggedError("HTTPValidationError")<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type OrdersGetErrors = OrdersGetResourceNotFoundError | OrdersGetHTTPValidationError;

/**
 * Order not found.
 */
export class OrdersUpdateResourceNotFoundError extends Data.TaggedError("ResourceNotFound")<{
  readonly status: 404;
  readonly body: Models.ResourceNotFound;
}> {}

/**
 * Validation Error
 */
export class OrdersUpdateHTTPValidationError extends Data.TaggedError("HTTPValidationError")<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type OrdersUpdateErrors =
  | OrdersUpdateResourceNotFoundError
  | OrdersUpdateHTTPValidationError;

/**
 * The charge failed, or requires customer authentication (e.g. a 3DS challenge) that can't be completed off-session.
 */
export class OrdersFinalizePaymentFailedError extends Data.TaggedError("PaymentFailed")<{
  readonly status: 402;
  readonly body: Models.PaymentFailed;
}> {}

/**
 * The charge failed, or requires customer authentication (e.g. a 3DS challenge) that can't be completed off-session.
 */
export class OrdersFinalizePaymentActionRequiredError extends Data.TaggedError(
  "PaymentActionRequired",
)<{
  readonly status: 402;
  readonly body: Models.PaymentActionRequired;
}> {}

/**
 * Off-session charges are not enabled for this organization, or its account can't currently accept payments.
 */
export class OrdersFinalizeOffSessionChargesNotEnabledError extends Data.TaggedError(
  "OffSessionChargesNotEnabled",
)<{
  readonly status: 403;
  readonly body: Models.OffSessionChargesNotEnabled;
}> {}

/**
 * Off-session charges are not enabled for this organization, or its account can't currently accept payments.
 */
export class OrdersFinalizeOrganizationNotReadyForPaymentsError extends Data.TaggedError(
  "OrganizationNotReadyForPayments",
)<{
  readonly status: 403;
  readonly body: Models.OrganizationNotReadyForPayments;
}> {}

/**
 * Order not found.
 */
export class OrdersFinalizeResourceNotFoundError extends Data.TaggedError("ResourceNotFound")<{
  readonly status: 404;
  readonly body: Models.ResourceNotFound;
}> {}

/**
 * The order is not in `draft` status.
 */
export class OrdersFinalizeOrderNotDraftError extends Data.TaggedError("OrderNotDraft")<{
  readonly status: 412;
  readonly body: Models.OrderNotDraft;
}> {}

/**
 * Validation Error
 */
export class OrdersFinalizeHTTPValidationError extends Data.TaggedError("HTTPValidationError")<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type OrdersFinalizeErrors =
  | OrdersFinalizePaymentFailedError
  | OrdersFinalizePaymentActionRequiredError
  | OrdersFinalizeOffSessionChargesNotEnabledError
  | OrdersFinalizeOrganizationNotReadyForPaymentsError
  | OrdersFinalizeResourceNotFoundError
  | OrdersFinalizeOrderNotDraftError
  | OrdersFinalizeHTTPValidationError;

/**
 * Order not found.
 */
export class OrdersInvoiceResourceNotFoundError extends Data.TaggedError("ResourceNotFound")<{
  readonly status: 404;
  readonly body: Models.ResourceNotFound;
}> {}

/**
 * Validation Error
 */
export class OrdersInvoiceHTTPValidationError extends Data.TaggedError("HTTPValidationError")<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type OrdersInvoiceErrors =
  | OrdersInvoiceResourceNotFoundError
  | OrdersInvoiceHTTPValidationError;

/**
 * Order not found.
 */
export class OrdersGenerateInvoiceResourceNotFoundError extends Data.TaggedError(
  "ResourceNotFound",
)<{
  readonly status: 404;
  readonly body: Models.ResourceNotFound;
}> {}

/**
 * Order is not eligible for invoice generation (invalid status).
 */
export class OrdersGenerateInvoiceOrderNotEligibleForInvoiceError extends Data.TaggedError(
  "OrderNotEligibleForInvoice",
)<{
  readonly status: 409;
  readonly body: Models.OrderNotEligibleForInvoice;
}> {}

/**
 * Order is missing billing name or address.
 */
export class OrdersGenerateInvoiceMissingInvoiceBillingDetailsError extends Data.TaggedError(
  "MissingInvoiceBillingDetails",
)<{
  readonly status: 422;
  readonly body: Models.MissingInvoiceBillingDetails;
}> {}

export type OrdersGenerateInvoiceErrors =
  | OrdersGenerateInvoiceResourceNotFoundError
  | OrdersGenerateInvoiceOrderNotEligibleForInvoiceError
  | OrdersGenerateInvoiceMissingInvoiceBillingDetailsError;

/**
 * Order not found.
 */
export class OrdersReceiptResourceNotFoundError extends Data.TaggedError("ResourceNotFound")<{
  readonly status: 404;
  readonly body: Models.ResourceNotFound;
}> {}

/**
 * Validation Error
 */
export class OrdersReceiptHTTPValidationError extends Data.TaggedError("HTTPValidationError")<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type OrdersReceiptErrors =
  | OrdersReceiptResourceNotFoundError
  | OrdersReceiptHTTPValidationError;

/**
 * Validation Error
 */
export class RefundsListHTTPValidationError extends Data.TaggedError("HTTPValidationError")<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type RefundsListErrors = RefundsListHTTPValidationError;

/**
 * Order is already fully refunded.
 */
export class RefundsCreateRefundedAlreadyError extends Data.TaggedError("RefundedAlready")<{
  readonly status: 403;
  readonly body: Models.RefundedAlready;
}> {}

/**
 * Validation Error
 */
export class RefundsCreateHTTPValidationError extends Data.TaggedError("HTTPValidationError")<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type RefundsCreateErrors =
  | RefundsCreateRefundedAlreadyError
  | RefundsCreateHTTPValidationError;

/**
 * Validation Error
 */
export class DisputesListHTTPValidationError extends Data.TaggedError("HTTPValidationError")<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type DisputesListErrors = DisputesListHTTPValidationError;

/**
 * Dispute not found.
 */
export class DisputesGetResourceNotFoundError extends Data.TaggedError("ResourceNotFound")<{
  readonly status: 404;
  readonly body: Models.ResourceNotFound;
}> {}

/**
 * Validation Error
 */
export class DisputesGetHTTPValidationError extends Data.TaggedError("HTTPValidationError")<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type DisputesGetErrors = DisputesGetResourceNotFoundError | DisputesGetHTTPValidationError;

/**
 * Dispute not found.
 */
export class DisputesAcceptResourceNotFoundError extends Data.TaggedError("ResourceNotFound")<{
  readonly status: 404;
  readonly body: Models.ResourceNotFound;
}> {}

/**
 * Conflict
 */
export class DisputesAcceptDisputeNotOpenError extends Data.TaggedError("DisputeNotOpenError")<{
  readonly status: 409;
  readonly body: Models.DisputeNotOpenError;
}> {}

/**
 * Validation Error
 */
export class DisputesAcceptHTTPValidationError extends Data.TaggedError("HTTPValidationError")<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type DisputesAcceptErrors =
  | DisputesAcceptResourceNotFoundError
  | DisputesAcceptDisputeNotOpenError
  | DisputesAcceptHTTPValidationError;

/**
 * Validation Error
 */
export class CheckoutsListHTTPValidationError extends Data.TaggedError("HTTPValidationError")<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type CheckoutsListErrors = CheckoutsListHTTPValidationError;

/**
 * Validation Error
 */
export class CheckoutsCreateHTTPValidationError extends Data.TaggedError("HTTPValidationError")<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type CheckoutsCreateErrors = CheckoutsCreateHTTPValidationError;

/**
 * Checkout session not found.
 */
export class CheckoutsGetResourceNotFoundError extends Data.TaggedError("ResourceNotFound")<{
  readonly status: 404;
  readonly body: Models.ResourceNotFound;
}> {}

/**
 * Validation Error
 */
export class CheckoutsGetHTTPValidationError extends Data.TaggedError("HTTPValidationError")<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type CheckoutsGetErrors =
  | CheckoutsGetResourceNotFoundError
  | CheckoutsGetHTTPValidationError;

/**
 * The checkout is expired, the customer already has an active subscription, or the organization is not ready to accept payments.
 */
export class CheckoutsUpdateAlreadyActiveSubscriptionError extends Data.TaggedError(
  "AlreadyActiveSubscriptionError",
)<{
  readonly status: 403;
  readonly body: Models.AlreadyActiveSubscriptionError;
}> {}

/**
 * The checkout is expired, the customer already has an active subscription, or the organization is not ready to accept payments.
 */
export class CheckoutsUpdateNotOpenCheckoutError extends Data.TaggedError("NotOpenCheckout")<{
  readonly status: 403;
  readonly body: Models.NotOpenCheckout;
}> {}

/**
 * The checkout is expired, the customer already has an active subscription, or the organization is not ready to accept payments.
 */
export class CheckoutsUpdatePaymentNotReadyError extends Data.TaggedError("PaymentNotReady")<{
  readonly status: 403;
  readonly body: Models.PaymentNotReady;
}> {}

/**
 * The checkout is expired, the customer already has an active subscription, or the organization is not ready to accept payments.
 */
export class CheckoutsUpdateTrialAlreadyRedeemedError extends Data.TaggedError(
  "TrialAlreadyRedeemed",
)<{
  readonly status: 403;
  readonly body: Models.TrialAlreadyRedeemed;
}> {}

/**
 * The checkout is expired, the customer already has an active subscription, or the organization is not ready to accept payments.
 */
export class CheckoutsUpdateDiscountRedemptionLimitReachedError extends Data.TaggedError(
  "DiscountRedemptionLimitReached",
)<{
  readonly status: 403;
  readonly body: Models.DiscountRedemptionLimitReached;
}> {}

/**
 * Checkout session not found.
 */
export class CheckoutsUpdateResourceNotFoundError extends Data.TaggedError("ResourceNotFound")<{
  readonly status: 404;
  readonly body: Models.ResourceNotFound;
}> {}

/**
 * Validation Error
 */
export class CheckoutsUpdateHTTPValidationError extends Data.TaggedError("HTTPValidationError")<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type CheckoutsUpdateErrors =
  | CheckoutsUpdateAlreadyActiveSubscriptionError
  | CheckoutsUpdateNotOpenCheckoutError
  | CheckoutsUpdatePaymentNotReadyError
  | CheckoutsUpdateTrialAlreadyRedeemedError
  | CheckoutsUpdateDiscountRedemptionLimitReachedError
  | CheckoutsUpdateResourceNotFoundError
  | CheckoutsUpdateHTTPValidationError;

/**
 * Checkout session not found.
 */
export class CheckoutsClientGetResourceNotFoundError extends Data.TaggedError("ResourceNotFound")<{
  readonly status: 404;
  readonly body: Models.ResourceNotFound;
}> {}

/**
 * The checkout session is expired.
 */
export class CheckoutsClientGetExpiredCheckoutError extends Data.TaggedError(
  "ExpiredCheckoutError",
)<{
  readonly status: 410;
  readonly body: Models.ExpiredCheckoutError;
}> {}

/**
 * Validation Error
 */
export class CheckoutsClientGetHTTPValidationError extends Data.TaggedError("HTTPValidationError")<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type CheckoutsClientGetErrors =
  | CheckoutsClientGetResourceNotFoundError
  | CheckoutsClientGetExpiredCheckoutError
  | CheckoutsClientGetHTTPValidationError;

/**
 * The checkout is expired, the customer already has an active subscription, or the organization is not ready to accept payments.
 */
export class CheckoutsClientUpdateAlreadyActiveSubscriptionError extends Data.TaggedError(
  "AlreadyActiveSubscriptionError",
)<{
  readonly status: 403;
  readonly body: Models.AlreadyActiveSubscriptionError;
}> {}

/**
 * The checkout is expired, the customer already has an active subscription, or the organization is not ready to accept payments.
 */
export class CheckoutsClientUpdateNotOpenCheckoutError extends Data.TaggedError("NotOpenCheckout")<{
  readonly status: 403;
  readonly body: Models.NotOpenCheckout;
}> {}

/**
 * The checkout is expired, the customer already has an active subscription, or the organization is not ready to accept payments.
 */
export class CheckoutsClientUpdatePaymentNotReadyError extends Data.TaggedError("PaymentNotReady")<{
  readonly status: 403;
  readonly body: Models.PaymentNotReady;
}> {}

/**
 * The checkout is expired, the customer already has an active subscription, or the organization is not ready to accept payments.
 */
export class CheckoutsClientUpdateTrialAlreadyRedeemedError extends Data.TaggedError(
  "TrialAlreadyRedeemed",
)<{
  readonly status: 403;
  readonly body: Models.TrialAlreadyRedeemed;
}> {}

/**
 * The checkout is expired, the customer already has an active subscription, or the organization is not ready to accept payments.
 */
export class CheckoutsClientUpdateDiscountRedemptionLimitReachedError extends Data.TaggedError(
  "DiscountRedemptionLimitReached",
)<{
  readonly status: 403;
  readonly body: Models.DiscountRedemptionLimitReached;
}> {}

/**
 * Checkout session not found.
 */
export class CheckoutsClientUpdateResourceNotFoundError extends Data.TaggedError(
  "ResourceNotFound",
)<{
  readonly status: 404;
  readonly body: Models.ResourceNotFound;
}> {}

/**
 * The checkout session is expired.
 */
export class CheckoutsClientUpdateExpiredCheckoutError extends Data.TaggedError(
  "ExpiredCheckoutError",
)<{
  readonly status: 410;
  readonly body: Models.ExpiredCheckoutError;
}> {}

/**
 * Validation Error
 */
export class CheckoutsClientUpdateHTTPValidationError extends Data.TaggedError(
  "HTTPValidationError",
)<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type CheckoutsClientUpdateErrors =
  | CheckoutsClientUpdateAlreadyActiveSubscriptionError
  | CheckoutsClientUpdateNotOpenCheckoutError
  | CheckoutsClientUpdatePaymentNotReadyError
  | CheckoutsClientUpdateTrialAlreadyRedeemedError
  | CheckoutsClientUpdateDiscountRedemptionLimitReachedError
  | CheckoutsClientUpdateResourceNotFoundError
  | CheckoutsClientUpdateExpiredCheckoutError
  | CheckoutsClientUpdateHTTPValidationError;

/**
 * The payment failed.
 */
export class CheckoutsClientConfirmPaymentError extends Data.TaggedError("PaymentError")<{
  readonly status: 400;
  readonly body: Models.PaymentError;
}> {}

/**
 * The checkout is expired, the customer already has an active subscription, or the organization is not ready to accept payments.
 */
export class CheckoutsClientConfirmAlreadyActiveSubscriptionError extends Data.TaggedError(
  "AlreadyActiveSubscriptionError",
)<{
  readonly status: 403;
  readonly body: Models.AlreadyActiveSubscriptionError;
}> {}

/**
 * The checkout is expired, the customer already has an active subscription, or the organization is not ready to accept payments.
 */
export class CheckoutsClientConfirmNotOpenCheckoutError extends Data.TaggedError(
  "NotOpenCheckout",
)<{
  readonly status: 403;
  readonly body: Models.NotOpenCheckout;
}> {}

/**
 * The checkout is expired, the customer already has an active subscription, or the organization is not ready to accept payments.
 */
export class CheckoutsClientConfirmPaymentNotReadyError extends Data.TaggedError(
  "PaymentNotReady",
)<{
  readonly status: 403;
  readonly body: Models.PaymentNotReady;
}> {}

/**
 * The checkout is expired, the customer already has an active subscription, or the organization is not ready to accept payments.
 */
export class CheckoutsClientConfirmTrialAlreadyRedeemedError extends Data.TaggedError(
  "TrialAlreadyRedeemed",
)<{
  readonly status: 403;
  readonly body: Models.TrialAlreadyRedeemed;
}> {}

/**
 * The checkout is expired, the customer already has an active subscription, or the organization is not ready to accept payments.
 */
export class CheckoutsClientConfirmDiscountRedemptionLimitReachedError extends Data.TaggedError(
  "DiscountRedemptionLimitReached",
)<{
  readonly status: 403;
  readonly body: Models.DiscountRedemptionLimitReached;
}> {}

/**
 * Checkout session not found.
 */
export class CheckoutsClientConfirmResourceNotFoundError extends Data.TaggedError(
  "ResourceNotFound",
)<{
  readonly status: 404;
  readonly body: Models.ResourceNotFound;
}> {}

/**
 * The checkout session is expired.
 */
export class CheckoutsClientConfirmExpiredCheckoutError extends Data.TaggedError(
  "ExpiredCheckoutError",
)<{
  readonly status: 410;
  readonly body: Models.ExpiredCheckoutError;
}> {}

/**
 * Validation Error
 */
export class CheckoutsClientConfirmHTTPValidationError extends Data.TaggedError(
  "HTTPValidationError",
)<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type CheckoutsClientConfirmErrors =
  | CheckoutsClientConfirmPaymentError
  | CheckoutsClientConfirmAlreadyActiveSubscriptionError
  | CheckoutsClientConfirmNotOpenCheckoutError
  | CheckoutsClientConfirmPaymentNotReadyError
  | CheckoutsClientConfirmTrialAlreadyRedeemedError
  | CheckoutsClientConfirmDiscountRedemptionLimitReachedError
  | CheckoutsClientConfirmResourceNotFoundError
  | CheckoutsClientConfirmExpiredCheckoutError
  | CheckoutsClientConfirmHTTPValidationError;

/**
 * Validation Error
 */
export class FilesListHTTPValidationError extends Data.TaggedError("HTTPValidationError")<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type FilesListErrors = FilesListHTTPValidationError;

/**
 * Validation Error
 */
export class FilesCreateHTTPValidationError extends Data.TaggedError("HTTPValidationError")<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type FilesCreateErrors = FilesCreateHTTPValidationError;

/**
 * You don't have the permission to update this file.
 */
export class FilesUploadedNotPermittedError extends Data.TaggedError("NotPermitted")<{
  readonly status: 403;
  readonly body: Models.NotPermitted;
}> {}

/**
 * File not found.
 */
export class FilesUploadedResourceNotFoundError extends Data.TaggedError("ResourceNotFound")<{
  readonly status: 404;
  readonly body: Models.ResourceNotFound;
}> {}

/**
 * Validation Error
 */
export class FilesUploadedHTTPValidationError extends Data.TaggedError("HTTPValidationError")<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type FilesUploadedErrors =
  | FilesUploadedNotPermittedError
  | FilesUploadedResourceNotFoundError
  | FilesUploadedHTTPValidationError;

/**
 * You don't have the permission to delete this file.
 */
export class FilesDeleteNotPermittedError extends Data.TaggedError("NotPermitted")<{
  readonly status: 403;
  readonly body: Models.NotPermitted;
}> {}

/**
 * File not found.
 */
export class FilesDeleteResourceNotFoundError extends Data.TaggedError("ResourceNotFound")<{
  readonly status: 404;
  readonly body: Models.ResourceNotFound;
}> {}

/**
 * Validation Error
 */
export class FilesDeleteHTTPValidationError extends Data.TaggedError("HTTPValidationError")<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type FilesDeleteErrors =
  | FilesDeleteNotPermittedError
  | FilesDeleteResourceNotFoundError
  | FilesDeleteHTTPValidationError;

/**
 * You don't have the permission to update this file.
 */
export class FilesUpdateNotPermittedError extends Data.TaggedError("NotPermitted")<{
  readonly status: 403;
  readonly body: Models.NotPermitted;
}> {}

/**
 * File not found.
 */
export class FilesUpdateResourceNotFoundError extends Data.TaggedError("ResourceNotFound")<{
  readonly status: 404;
  readonly body: Models.ResourceNotFound;
}> {}

/**
 * Validation Error
 */
export class FilesUpdateHTTPValidationError extends Data.TaggedError("HTTPValidationError")<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type FilesUpdateErrors =
  | FilesUpdateNotPermittedError
  | FilesUpdateResourceNotFoundError
  | FilesUpdateHTTPValidationError;

/**
 * Validation Error
 */
export class MetricsGetHTTPValidationError extends Data.TaggedError("HTTPValidationError")<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type MetricsGetErrors = MetricsGetHTTPValidationError;

/**
 * Validation Error
 */
export class MetricsExportHTTPValidationError extends Data.TaggedError("HTTPValidationError")<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type MetricsExportErrors = MetricsExportHTTPValidationError;

/**
 * Validation Error
 */
export class MetricsListDashboardsHTTPValidationError extends Data.TaggedError(
  "HTTPValidationError",
)<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type MetricsListDashboardsErrors = MetricsListDashboardsHTTPValidationError;

/**
 * Validation Error
 */
export class MetricsCreateDashboardHTTPValidationError extends Data.TaggedError(
  "HTTPValidationError",
)<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type MetricsCreateDashboardErrors = MetricsCreateDashboardHTTPValidationError;

/**
 * Validation Error
 */
export class MetricsGetDashboardHTTPValidationError extends Data.TaggedError(
  "HTTPValidationError",
)<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type MetricsGetDashboardErrors = MetricsGetDashboardHTTPValidationError;

/**
 * Validation Error
 */
export class MetricsDeleteDashboardHTTPValidationError extends Data.TaggedError(
  "HTTPValidationError",
)<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type MetricsDeleteDashboardErrors = MetricsDeleteDashboardHTTPValidationError;

/**
 * Validation Error
 */
export class MetricsUpdateDashboardHTTPValidationError extends Data.TaggedError(
  "HTTPValidationError",
)<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type MetricsUpdateDashboardErrors = MetricsUpdateDashboardHTTPValidationError;

/**
 * Not authorized to manage license key.
 */
export class LicenseKeysListUnauthorizedError extends Data.TaggedError("Unauthorized")<{
  readonly status: 401;
  readonly body: Models.Unauthorized;
}> {}

/**
 * License key not found.
 */
export class LicenseKeysListResourceNotFoundError extends Data.TaggedError("ResourceNotFound")<{
  readonly status: 404;
  readonly body: Models.ResourceNotFound;
}> {}

/**
 * Validation Error
 */
export class LicenseKeysListHTTPValidationError extends Data.TaggedError("HTTPValidationError")<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type LicenseKeysListErrors =
  | LicenseKeysListUnauthorizedError
  | LicenseKeysListResourceNotFoundError
  | LicenseKeysListHTTPValidationError;

/**
 * Not authorized to manage license key.
 */
export class LicenseKeysGetUnauthorizedError extends Data.TaggedError("Unauthorized")<{
  readonly status: 401;
  readonly body: Models.Unauthorized;
}> {}

/**
 * License key not found.
 */
export class LicenseKeysGetResourceNotFoundError extends Data.TaggedError("ResourceNotFound")<{
  readonly status: 404;
  readonly body: Models.ResourceNotFound;
}> {}

/**
 * Validation Error
 */
export class LicenseKeysGetHTTPValidationError extends Data.TaggedError("HTTPValidationError")<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type LicenseKeysGetErrors =
  | LicenseKeysGetUnauthorizedError
  | LicenseKeysGetResourceNotFoundError
  | LicenseKeysGetHTTPValidationError;

/**
 * Not authorized to manage license key.
 */
export class LicenseKeysUpdateUnauthorizedError extends Data.TaggedError("Unauthorized")<{
  readonly status: 401;
  readonly body: Models.Unauthorized;
}> {}

/**
 * License key not found.
 */
export class LicenseKeysUpdateResourceNotFoundError extends Data.TaggedError("ResourceNotFound")<{
  readonly status: 404;
  readonly body: Models.ResourceNotFound;
}> {}

/**
 * Validation Error
 */
export class LicenseKeysUpdateHTTPValidationError extends Data.TaggedError("HTTPValidationError")<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type LicenseKeysUpdateErrors =
  | LicenseKeysUpdateUnauthorizedError
  | LicenseKeysUpdateResourceNotFoundError
  | LicenseKeysUpdateHTTPValidationError;

/**
 * License key cannot be rotated in its current status. Allowed statuses: disabled, granted.
 */
export class LicenseKeysRotateRotateNotPermittedError extends Data.TaggedError(
  "RotateNotPermitted",
)<{
  readonly status: 400;
  readonly body: Models.RotateNotPermitted;
}> {}

/**
 * Not authorized to manage license key.
 */
export class LicenseKeysRotateUnauthorizedError extends Data.TaggedError("Unauthorized")<{
  readonly status: 401;
  readonly body: Models.Unauthorized;
}> {}

/**
 * License key not found.
 */
export class LicenseKeysRotateResourceNotFoundError extends Data.TaggedError("ResourceNotFound")<{
  readonly status: 404;
  readonly body: Models.ResourceNotFound;
}> {}

/**
 * Validation Error
 */
export class LicenseKeysRotateHTTPValidationError extends Data.TaggedError("HTTPValidationError")<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type LicenseKeysRotateErrors =
  | LicenseKeysRotateRotateNotPermittedError
  | LicenseKeysRotateUnauthorizedError
  | LicenseKeysRotateResourceNotFoundError
  | LicenseKeysRotateHTTPValidationError;

/**
 * Not authorized to manage license key.
 */
export class LicenseKeysGetActivationUnauthorizedError extends Data.TaggedError("Unauthorized")<{
  readonly status: 401;
  readonly body: Models.Unauthorized;
}> {}

/**
 * License key or activation not found, or activation does not belong to the license key.
 */
export class LicenseKeysGetActivationResourceNotFoundError extends Data.TaggedError(
  "ResourceNotFound",
)<{
  readonly status: 404;
  readonly body: Models.ResourceNotFound;
}> {}

/**
 * Validation Error
 */
export class LicenseKeysGetActivationHTTPValidationError extends Data.TaggedError(
  "HTTPValidationError",
)<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type LicenseKeysGetActivationErrors =
  | LicenseKeysGetActivationUnauthorizedError
  | LicenseKeysGetActivationResourceNotFoundError
  | LicenseKeysGetActivationHTTPValidationError;

/**
 * The requested usage increment exceeds the license key's remaining usage allowance.
 */
export class LicenseKeysValidateBadRequestError extends Data.TaggedError("BadRequest")<{
  readonly status: 400;
  readonly body: unknown;
}> {}

/**
 * License key not found, revoked, disabled, or expired, or the supplied activation, conditions, benefit, or customer do not match.
 */
export class LicenseKeysValidateResourceNotFoundError extends Data.TaggedError("ResourceNotFound")<{
  readonly status: 404;
  readonly body: Models.ResourceNotFound;
}> {}

/**
 * Validation Error
 */
export class LicenseKeysValidateHTTPValidationError extends Data.TaggedError(
  "HTTPValidationError",
)<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type LicenseKeysValidateErrors =
  | LicenseKeysValidateBadRequestError
  | LicenseKeysValidateResourceNotFoundError
  | LicenseKeysValidateHTTPValidationError;

/**
 * License key is revoked, disabled, or expired, does not support activations, or has reached its activation limit. Use /validate for licenses without activations.
 */
export class LicenseKeysActivateNotPermittedError extends Data.TaggedError("NotPermitted")<{
  readonly status: 403;
  readonly body: Models.NotPermitted;
}> {}

/**
 * License key not found.
 */
export class LicenseKeysActivateResourceNotFoundError extends Data.TaggedError("ResourceNotFound")<{
  readonly status: 404;
  readonly body: Models.ResourceNotFound;
}> {}

/**
 * Validation Error
 */
export class LicenseKeysActivateHTTPValidationError extends Data.TaggedError(
  "HTTPValidationError",
)<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type LicenseKeysActivateErrors =
  | LicenseKeysActivateNotPermittedError
  | LicenseKeysActivateResourceNotFoundError
  | LicenseKeysActivateHTTPValidationError;

/**
 * License key or activation not found, or activation does not belong to the license key.
 */
export class LicenseKeysDeactivateResourceNotFoundError extends Data.TaggedError(
  "ResourceNotFound",
)<{
  readonly status: 404;
  readonly body: Models.ResourceNotFound;
}> {}

/**
 * Validation Error
 */
export class LicenseKeysDeactivateHTTPValidationError extends Data.TaggedError(
  "HTTPValidationError",
)<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type LicenseKeysDeactivateErrors =
  | LicenseKeysDeactivateResourceNotFoundError
  | LicenseKeysDeactivateHTTPValidationError;

/**
 * Validation Error
 */
export class CheckoutLinksListHTTPValidationError extends Data.TaggedError("HTTPValidationError")<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type CheckoutLinksListErrors = CheckoutLinksListHTTPValidationError;

/**
 * Validation Error
 */
export class CheckoutLinksCreateHTTPValidationError extends Data.TaggedError(
  "HTTPValidationError",
)<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type CheckoutLinksCreateErrors = CheckoutLinksCreateHTTPValidationError;

/**
 * Checkout link not found.
 */
export class CheckoutLinksGetResourceNotFoundError extends Data.TaggedError("ResourceNotFound")<{
  readonly status: 404;
  readonly body: Models.ResourceNotFound;
}> {}

/**
 * Validation Error
 */
export class CheckoutLinksGetHTTPValidationError extends Data.TaggedError("HTTPValidationError")<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type CheckoutLinksGetErrors =
  | CheckoutLinksGetResourceNotFoundError
  | CheckoutLinksGetHTTPValidationError;

/**
 * Checkout link not found.
 */
export class CheckoutLinksDeleteResourceNotFoundError extends Data.TaggedError("ResourceNotFound")<{
  readonly status: 404;
  readonly body: Models.ResourceNotFound;
}> {}

/**
 * Validation Error
 */
export class CheckoutLinksDeleteHTTPValidationError extends Data.TaggedError(
  "HTTPValidationError",
)<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type CheckoutLinksDeleteErrors =
  | CheckoutLinksDeleteResourceNotFoundError
  | CheckoutLinksDeleteHTTPValidationError;

/**
 * Checkout link not found.
 */
export class CheckoutLinksUpdateResourceNotFoundError extends Data.TaggedError("ResourceNotFound")<{
  readonly status: 404;
  readonly body: Models.ResourceNotFound;
}> {}

/**
 * Validation Error
 */
export class CheckoutLinksUpdateHTTPValidationError extends Data.TaggedError(
  "HTTPValidationError",
)<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type CheckoutLinksUpdateErrors =
  | CheckoutLinksUpdateResourceNotFoundError
  | CheckoutLinksUpdateHTTPValidationError;

/**
 * Validation Error
 */
export class CustomFieldsListHTTPValidationError extends Data.TaggedError("HTTPValidationError")<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type CustomFieldsListErrors = CustomFieldsListHTTPValidationError;

/**
 * Validation Error
 */
export class CustomFieldsCreateHTTPValidationError extends Data.TaggedError("HTTPValidationError")<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type CustomFieldsCreateErrors = CustomFieldsCreateHTTPValidationError;

/**
 * Custom field not found.
 */
export class CustomFieldsGetResourceNotFoundError extends Data.TaggedError("ResourceNotFound")<{
  readonly status: 404;
  readonly body: Models.ResourceNotFound;
}> {}

/**
 * Validation Error
 */
export class CustomFieldsGetHTTPValidationError extends Data.TaggedError("HTTPValidationError")<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type CustomFieldsGetErrors =
  | CustomFieldsGetResourceNotFoundError
  | CustomFieldsGetHTTPValidationError;

/**
 * Custom field not found.
 */
export class CustomFieldsDeleteResourceNotFoundError extends Data.TaggedError("ResourceNotFound")<{
  readonly status: 404;
  readonly body: Models.ResourceNotFound;
}> {}

/**
 * Validation Error
 */
export class CustomFieldsDeleteHTTPValidationError extends Data.TaggedError("HTTPValidationError")<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type CustomFieldsDeleteErrors =
  | CustomFieldsDeleteResourceNotFoundError
  | CustomFieldsDeleteHTTPValidationError;

/**
 * Custom field not found.
 */
export class CustomFieldsUpdateResourceNotFoundError extends Data.TaggedError("ResourceNotFound")<{
  readonly status: 404;
  readonly body: Models.ResourceNotFound;
}> {}

/**
 * Validation Error
 */
export class CustomFieldsUpdateHTTPValidationError extends Data.TaggedError("HTTPValidationError")<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type CustomFieldsUpdateErrors =
  | CustomFieldsUpdateResourceNotFoundError
  | CustomFieldsUpdateHTTPValidationError;

/**
 * Validation Error
 */
export class DiscountsListHTTPValidationError extends Data.TaggedError("HTTPValidationError")<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type DiscountsListErrors = DiscountsListHTTPValidationError;

/**
 * Validation Error
 */
export class DiscountsCreateHTTPValidationError extends Data.TaggedError("HTTPValidationError")<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type DiscountsCreateErrors = DiscountsCreateHTTPValidationError;

/**
 * Discount not found.
 */
export class DiscountsGetResourceNotFoundError extends Data.TaggedError("ResourceNotFound")<{
  readonly status: 404;
  readonly body: Models.ResourceNotFound;
}> {}

/**
 * Validation Error
 */
export class DiscountsGetHTTPValidationError extends Data.TaggedError("HTTPValidationError")<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type DiscountsGetErrors =
  | DiscountsGetResourceNotFoundError
  | DiscountsGetHTTPValidationError;

/**
 * Discount not found.
 */
export class DiscountsDeleteResourceNotFoundError extends Data.TaggedError("ResourceNotFound")<{
  readonly status: 404;
  readonly body: Models.ResourceNotFound;
}> {}

/**
 * Validation Error
 */
export class DiscountsDeleteHTTPValidationError extends Data.TaggedError("HTTPValidationError")<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type DiscountsDeleteErrors =
  | DiscountsDeleteResourceNotFoundError
  | DiscountsDeleteHTTPValidationError;

/**
 * Discount not found.
 */
export class DiscountsUpdateResourceNotFoundError extends Data.TaggedError("ResourceNotFound")<{
  readonly status: 404;
  readonly body: Models.ResourceNotFound;
}> {}

/**
 * Validation Error
 */
export class DiscountsUpdateHTTPValidationError extends Data.TaggedError("HTTPValidationError")<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type DiscountsUpdateErrors =
  | DiscountsUpdateResourceNotFoundError
  | DiscountsUpdateHTTPValidationError;

/**
 * Validation Error
 */
export class CustomersListHTTPValidationError extends Data.TaggedError("HTTPValidationError")<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type CustomersListErrors = CustomersListHTTPValidationError;

/**
 * Validation Error
 */
export class CustomersCreateHTTPValidationError extends Data.TaggedError("HTTPValidationError")<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type CustomersCreateErrors = CustomersCreateHTTPValidationError;

/**
 * Validation Error
 */
export class CustomersExportHTTPValidationError extends Data.TaggedError("HTTPValidationError")<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type CustomersExportErrors = CustomersExportHTTPValidationError;

/**
 * Customer not found.
 */
export class CustomersGetResourceNotFoundError extends Data.TaggedError("ResourceNotFound")<{
  readonly status: 404;
  readonly body: Models.ResourceNotFound;
}> {}

/**
 * Validation Error
 */
export class CustomersGetHTTPValidationError extends Data.TaggedError("HTTPValidationError")<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type CustomersGetErrors =
  | CustomersGetResourceNotFoundError
  | CustomersGetHTTPValidationError;

/**
 * Customer not found.
 */
export class CustomersDeleteResourceNotFoundError extends Data.TaggedError("ResourceNotFound")<{
  readonly status: 404;
  readonly body: Models.ResourceNotFound;
}> {}

/**
 * Validation Error
 */
export class CustomersDeleteHTTPValidationError extends Data.TaggedError("HTTPValidationError")<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type CustomersDeleteErrors =
  | CustomersDeleteResourceNotFoundError
  | CustomersDeleteHTTPValidationError;

/**
 * Customer not found.
 */
export class CustomersUpdateResourceNotFoundError extends Data.TaggedError("ResourceNotFound")<{
  readonly status: 404;
  readonly body: Models.ResourceNotFound;
}> {}

/**
 * Validation Error
 */
export class CustomersUpdateHTTPValidationError extends Data.TaggedError("HTTPValidationError")<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type CustomersUpdateErrors =
  | CustomersUpdateResourceNotFoundError
  | CustomersUpdateHTTPValidationError;

/**
 * Customer not found.
 */
export class CustomersGetExternalResourceNotFoundError extends Data.TaggedError(
  "ResourceNotFound",
)<{
  readonly status: 404;
  readonly body: Models.ResourceNotFound;
}> {}

/**
 * Validation Error
 */
export class CustomersGetExternalHTTPValidationError extends Data.TaggedError(
  "HTTPValidationError",
)<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type CustomersGetExternalErrors =
  | CustomersGetExternalResourceNotFoundError
  | CustomersGetExternalHTTPValidationError;

/**
 * Customer not found.
 */
export class CustomersDeleteExternalResourceNotFoundError extends Data.TaggedError(
  "ResourceNotFound",
)<{
  readonly status: 404;
  readonly body: Models.ResourceNotFound;
}> {}

/**
 * Validation Error
 */
export class CustomersDeleteExternalHTTPValidationError extends Data.TaggedError(
  "HTTPValidationError",
)<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type CustomersDeleteExternalErrors =
  | CustomersDeleteExternalResourceNotFoundError
  | CustomersDeleteExternalHTTPValidationError;

/**
 * Customer not found.
 */
export class CustomersUpdateExternalResourceNotFoundError extends Data.TaggedError(
  "ResourceNotFound",
)<{
  readonly status: 404;
  readonly body: Models.ResourceNotFound;
}> {}

/**
 * Validation Error
 */
export class CustomersUpdateExternalHTTPValidationError extends Data.TaggedError(
  "HTTPValidationError",
)<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type CustomersUpdateExternalErrors =
  | CustomersUpdateExternalResourceNotFoundError
  | CustomersUpdateExternalHTTPValidationError;

/**
 * Customer not found.
 */
export class CustomersGetStateResourceNotFoundError extends Data.TaggedError("ResourceNotFound")<{
  readonly status: 404;
  readonly body: Models.ResourceNotFound;
}> {}

/**
 * Validation Error
 */
export class CustomersGetStateHTTPValidationError extends Data.TaggedError("HTTPValidationError")<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type CustomersGetStateErrors =
  | CustomersGetStateResourceNotFoundError
  | CustomersGetStateHTTPValidationError;

/**
 * Customer not found.
 */
export class CustomersGetStateExternalResourceNotFoundError extends Data.TaggedError(
  "ResourceNotFound",
)<{
  readonly status: 404;
  readonly body: Models.ResourceNotFound;
}> {}

/**
 * Validation Error
 */
export class CustomersGetStateExternalHTTPValidationError extends Data.TaggedError(
  "HTTPValidationError",
)<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type CustomersGetStateExternalErrors =
  | CustomersGetStateExternalResourceNotFoundError
  | CustomersGetStateExternalHTTPValidationError;

/**
 * Customer not found.
 */
export class CustomersListPaymentMethodsResourceNotFoundError extends Data.TaggedError(
  "ResourceNotFound",
)<{
  readonly status: 404;
  readonly body: Models.ResourceNotFound;
}> {}

/**
 * Validation Error
 */
export class CustomersListPaymentMethodsHTTPValidationError extends Data.TaggedError(
  "HTTPValidationError",
)<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type CustomersListPaymentMethodsErrors =
  | CustomersListPaymentMethodsResourceNotFoundError
  | CustomersListPaymentMethodsHTTPValidationError;

/**
 * Customer not found.
 */
export class CustomersListPaymentMethodsExternalResourceNotFoundError extends Data.TaggedError(
  "ResourceNotFound",
)<{
  readonly status: 404;
  readonly body: Models.ResourceNotFound;
}> {}

/**
 * Validation Error
 */
export class CustomersListPaymentMethodsExternalHTTPValidationError extends Data.TaggedError(
  "HTTPValidationError",
)<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type CustomersListPaymentMethodsExternalErrors =
  | CustomersListPaymentMethodsExternalResourceNotFoundError
  | CustomersListPaymentMethodsExternalHTTPValidationError;

/**
 * Customer not found.
 */
export class CustomersMembersListResourceNotFoundError extends Data.TaggedError(
  "ResourceNotFound",
)<{
  readonly status: 404;
  readonly body: Models.ResourceNotFound;
}> {}

/**
 * Validation Error
 */
export class CustomersMembersListHTTPValidationError extends Data.TaggedError(
  "HTTPValidationError",
)<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type CustomersMembersListErrors =
  | CustomersMembersListResourceNotFoundError
  | CustomersMembersListHTTPValidationError;

/**
 * Not permitted to add members.
 */
export class CustomersMembersCreateNotPermittedError extends Data.TaggedError("NotPermitted")<{
  readonly status: 403;
  readonly body: Models.NotPermitted;
}> {}

/**
 * Customer not found.
 */
export class CustomersMembersCreateResourceNotFoundError extends Data.TaggedError(
  "ResourceNotFound",
)<{
  readonly status: 404;
  readonly body: Models.ResourceNotFound;
}> {}

/**
 * Validation Error
 */
export class CustomersMembersCreateHTTPValidationError extends Data.TaggedError(
  "HTTPValidationError",
)<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type CustomersMembersCreateErrors =
  | CustomersMembersCreateNotPermittedError
  | CustomersMembersCreateResourceNotFoundError
  | CustomersMembersCreateHTTPValidationError;

/**
 * Customer not found.
 */
export class CustomersMembersListExternalResourceNotFoundError extends Data.TaggedError(
  "ResourceNotFound",
)<{
  readonly status: 404;
  readonly body: Models.ResourceNotFound;
}> {}

/**
 * The external customer ID matches customers in several accessible organizations.
 */
export class CustomersMembersListExternalAmbiguousExternalCustomerIDError extends Data.TaggedError(
  "AmbiguousExternalCustomerID",
)<{
  readonly status: 409;
  readonly body: Models.AmbiguousExternalCustomerID;
}> {}

/**
 * Validation Error
 */
export class CustomersMembersListExternalHTTPValidationError extends Data.TaggedError(
  "HTTPValidationError",
)<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type CustomersMembersListExternalErrors =
  | CustomersMembersListExternalResourceNotFoundError
  | CustomersMembersListExternalAmbiguousExternalCustomerIDError
  | CustomersMembersListExternalHTTPValidationError;

/**
 * Not permitted to add members.
 */
export class CustomersMembersCreateExternalNotPermittedError extends Data.TaggedError(
  "NotPermitted",
)<{
  readonly status: 403;
  readonly body: Models.NotPermitted;
}> {}

/**
 * Customer not found.
 */
export class CustomersMembersCreateExternalResourceNotFoundError extends Data.TaggedError(
  "ResourceNotFound",
)<{
  readonly status: 404;
  readonly body: Models.ResourceNotFound;
}> {}

/**
 * The external customer ID matches customers in several accessible organizations.
 */
export class CustomersMembersCreateExternalAmbiguousExternalCustomerIDError extends Data.TaggedError(
  "AmbiguousExternalCustomerID",
)<{
  readonly status: 409;
  readonly body: Models.AmbiguousExternalCustomerID;
}> {}

/**
 * Validation Error
 */
export class CustomersMembersCreateExternalHTTPValidationError extends Data.TaggedError(
  "HTTPValidationError",
)<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type CustomersMembersCreateExternalErrors =
  | CustomersMembersCreateExternalNotPermittedError
  | CustomersMembersCreateExternalResourceNotFoundError
  | CustomersMembersCreateExternalAmbiguousExternalCustomerIDError
  | CustomersMembersCreateExternalHTTPValidationError;

/**
 * Member not found.
 */
export class CustomersMembersGetResourceNotFoundError extends Data.TaggedError("ResourceNotFound")<{
  readonly status: 404;
  readonly body: Models.ResourceNotFound;
}> {}

/**
 * Validation Error
 */
export class CustomersMembersGetHTTPValidationError extends Data.TaggedError(
  "HTTPValidationError",
)<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type CustomersMembersGetErrors =
  | CustomersMembersGetResourceNotFoundError
  | CustomersMembersGetHTTPValidationError;

/**
 * Member not found.
 */
export class CustomersMembersDeleteResourceNotFoundError extends Data.TaggedError(
  "ResourceNotFound",
)<{
  readonly status: 404;
  readonly body: Models.ResourceNotFound;
}> {}

/**
 * Validation Error
 */
export class CustomersMembersDeleteHTTPValidationError extends Data.TaggedError(
  "HTTPValidationError",
)<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type CustomersMembersDeleteErrors =
  | CustomersMembersDeleteResourceNotFoundError
  | CustomersMembersDeleteHTTPValidationError;

/**
 * Member not found.
 */
export class CustomersMembersUpdateResourceNotFoundError extends Data.TaggedError(
  "ResourceNotFound",
)<{
  readonly status: 404;
  readonly body: Models.ResourceNotFound;
}> {}

/**
 * Validation Error
 */
export class CustomersMembersUpdateHTTPValidationError extends Data.TaggedError(
  "HTTPValidationError",
)<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type CustomersMembersUpdateErrors =
  | CustomersMembersUpdateResourceNotFoundError
  | CustomersMembersUpdateHTTPValidationError;

/**
 * Member not found.
 */
export class CustomersMembersGetExternalResourceNotFoundError extends Data.TaggedError(
  "ResourceNotFound",
)<{
  readonly status: 404;
  readonly body: Models.ResourceNotFound;
}> {}

/**
 * The external customer ID matches customers in several accessible organizations.
 */
export class CustomersMembersGetExternalAmbiguousExternalCustomerIDError extends Data.TaggedError(
  "AmbiguousExternalCustomerID",
)<{
  readonly status: 409;
  readonly body: Models.AmbiguousExternalCustomerID;
}> {}

/**
 * Validation Error
 */
export class CustomersMembersGetExternalHTTPValidationError extends Data.TaggedError(
  "HTTPValidationError",
)<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type CustomersMembersGetExternalErrors =
  | CustomersMembersGetExternalResourceNotFoundError
  | CustomersMembersGetExternalAmbiguousExternalCustomerIDError
  | CustomersMembersGetExternalHTTPValidationError;

/**
 * Member not found.
 */
export class CustomersMembersDeleteExternalResourceNotFoundError extends Data.TaggedError(
  "ResourceNotFound",
)<{
  readonly status: 404;
  readonly body: Models.ResourceNotFound;
}> {}

/**
 * The external customer ID matches customers in several accessible organizations.
 */
export class CustomersMembersDeleteExternalAmbiguousExternalCustomerIDError extends Data.TaggedError(
  "AmbiguousExternalCustomerID",
)<{
  readonly status: 409;
  readonly body: Models.AmbiguousExternalCustomerID;
}> {}

/**
 * Validation Error
 */
export class CustomersMembersDeleteExternalHTTPValidationError extends Data.TaggedError(
  "HTTPValidationError",
)<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type CustomersMembersDeleteExternalErrors =
  | CustomersMembersDeleteExternalResourceNotFoundError
  | CustomersMembersDeleteExternalAmbiguousExternalCustomerIDError
  | CustomersMembersDeleteExternalHTTPValidationError;

/**
 * Member not found.
 */
export class CustomersMembersUpdateExternalResourceNotFoundError extends Data.TaggedError(
  "ResourceNotFound",
)<{
  readonly status: 404;
  readonly body: Models.ResourceNotFound;
}> {}

/**
 * The external customer ID matches customers in several accessible organizations.
 */
export class CustomersMembersUpdateExternalAmbiguousExternalCustomerIDError extends Data.TaggedError(
  "AmbiguousExternalCustomerID",
)<{
  readonly status: 409;
  readonly body: Models.AmbiguousExternalCustomerID;
}> {}

/**
 * Validation Error
 */
export class CustomersMembersUpdateExternalHTTPValidationError extends Data.TaggedError(
  "HTTPValidationError",
)<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type CustomersMembersUpdateExternalErrors =
  | CustomersMembersUpdateExternalResourceNotFoundError
  | CustomersMembersUpdateExternalAmbiguousExternalCustomerIDError
  | CustomersMembersUpdateExternalHTTPValidationError;

/**
 * Validation Error
 */
export class CustomerPortalBenefitGrantsListHTTPValidationError extends Data.TaggedError(
  "HTTPValidationError",
)<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type CustomerPortalBenefitGrantsListErrors =
  CustomerPortalBenefitGrantsListHTTPValidationError;

/**
 * Benefit grant not found.
 */
export class CustomerPortalBenefitGrantsGetResourceNotFoundError extends Data.TaggedError(
  "ResourceNotFound",
)<{
  readonly status: 404;
  readonly body: Models.ResourceNotFound;
}> {}

/**
 * Validation Error
 */
export class CustomerPortalBenefitGrantsGetHTTPValidationError extends Data.TaggedError(
  "HTTPValidationError",
)<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type CustomerPortalBenefitGrantsGetErrors =
  | CustomerPortalBenefitGrantsGetResourceNotFoundError
  | CustomerPortalBenefitGrantsGetHTTPValidationError;

/**
 * The benefit grant is revoked and cannot be updated.
 */
export class CustomerPortalBenefitGrantsUpdateNotPermittedError extends Data.TaggedError(
  "NotPermitted",
)<{
  readonly status: 403;
  readonly body: Models.NotPermitted;
}> {}

/**
 * Benefit grant not found.
 */
export class CustomerPortalBenefitGrantsUpdateResourceNotFoundError extends Data.TaggedError(
  "ResourceNotFound",
)<{
  readonly status: 404;
  readonly body: Models.ResourceNotFound;
}> {}

/**
 * Validation Error
 */
export class CustomerPortalBenefitGrantsUpdateHTTPValidationError extends Data.TaggedError(
  "HTTPValidationError",
)<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type CustomerPortalBenefitGrantsUpdateErrors =
  | CustomerPortalBenefitGrantsUpdateNotPermittedError
  | CustomerPortalBenefitGrantsUpdateResourceNotFoundError
  | CustomerPortalBenefitGrantsUpdateHTTPValidationError;

/**
 * Validation Error
 */
export class CustomerPortalCustomersUpdateHTTPValidationError extends Data.TaggedError(
  "HTTPValidationError",
)<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type CustomerPortalCustomersUpdateErrors = CustomerPortalCustomersUpdateHTTPValidationError;

/**
 * Validation Error
 */
export class CustomerPortalCustomersListPaymentMethodsHTTPValidationError extends Data.TaggedError(
  "HTTPValidationError",
)<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type CustomerPortalCustomersListPaymentMethodsErrors =
  CustomerPortalCustomersListPaymentMethodsHTTPValidationError;

/**
 * The card was declined while setting up the payment method.
 */
export class CustomerPortalCustomersAddPaymentMethodPaymentMethodSetupFailedError extends Data.TaggedError(
  "PaymentMethodSetupFailed",
)<{
  readonly status: 400;
  readonly body: Models.PaymentMethodSetupFailed;
}> {}

/**
 * Validation Error
 */
export class CustomerPortalCustomersAddPaymentMethodHTTPValidationError extends Data.TaggedError(
  "HTTPValidationError",
)<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type CustomerPortalCustomersAddPaymentMethodErrors =
  | CustomerPortalCustomersAddPaymentMethodPaymentMethodSetupFailedError
  | CustomerPortalCustomersAddPaymentMethodHTTPValidationError;

/**
 * Customer is not ready to confirm a payment method.
 */
export class CustomerPortalCustomersConfirmPaymentMethodCustomerNotReadyError extends Data.TaggedError(
  "CustomerNotReady",
)<{
  readonly status: 403;
  readonly body: Models.CustomerNotReady;
}> {}

/**
 * Validation Error
 */
export class CustomerPortalCustomersConfirmPaymentMethodHTTPValidationError extends Data.TaggedError(
  "HTTPValidationError",
)<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type CustomerPortalCustomersConfirmPaymentMethodErrors =
  | CustomerPortalCustomersConfirmPaymentMethodCustomerNotReadyError
  | CustomerPortalCustomersConfirmPaymentMethodHTTPValidationError;

/**
 * Payment method is still needed to bill a subscription.
 */
export class CustomerPortalCustomersDeletePaymentMethodPaymentMethodInUseByActiveSubscriptionError extends Data.TaggedError(
  "PaymentMethodInUseByActiveSubscription",
)<{
  readonly status: 400;
  readonly body: Models.PaymentMethodInUseByActiveSubscription;
}> {}

/**
 * Payment method not found.
 */
export class CustomerPortalCustomersDeletePaymentMethodResourceNotFoundError extends Data.TaggedError(
  "ResourceNotFound",
)<{
  readonly status: 404;
  readonly body: Models.ResourceNotFound;
}> {}

/**
 * Validation Error
 */
export class CustomerPortalCustomersDeletePaymentMethodHTTPValidationError extends Data.TaggedError(
  "HTTPValidationError",
)<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type CustomerPortalCustomersDeletePaymentMethodErrors =
  | CustomerPortalCustomersDeletePaymentMethodPaymentMethodInUseByActiveSubscriptionError
  | CustomerPortalCustomersDeletePaymentMethodResourceNotFoundError
  | CustomerPortalCustomersDeletePaymentMethodHTTPValidationError;

/**
 * Validation Error
 */
export class CustomerPortalCustomersRequestEmailUpdateHTTPValidationError extends Data.TaggedError(
  "HTTPValidationError",
)<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type CustomerPortalCustomersRequestEmailUpdateErrors =
  CustomerPortalCustomersRequestEmailUpdateHTTPValidationError;

/**
 * Invalid or expired verification token.
 */
export class CustomerPortalCustomersCheckEmailUpdateUnauthorizedError extends Data.TaggedError(
  "Unauthorized",
)<{
  readonly status: 401;
}> {}

/**
 * Validation Error
 */
export class CustomerPortalCustomersCheckEmailUpdateHTTPValidationError extends Data.TaggedError(
  "HTTPValidationError",
)<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type CustomerPortalCustomersCheckEmailUpdateErrors =
  | CustomerPortalCustomersCheckEmailUpdateUnauthorizedError
  | CustomerPortalCustomersCheckEmailUpdateHTTPValidationError;

/**
 * Invalid or expired verification token.
 */
export class CustomerPortalCustomersVerifyEmailUpdateUnauthorizedError extends Data.TaggedError(
  "Unauthorized",
)<{
  readonly status: 401;
}> {}

/**
 * Email address is already in use.
 */
export class CustomerPortalCustomersVerifyEmailUpdateUnprocessableEntityError extends Data.TaggedError(
  "UnprocessableEntity",
)<{
  readonly status: 422;
}> {}

export type CustomerPortalCustomersVerifyEmailUpdateErrors =
  | CustomerPortalCustomersVerifyEmailUpdateUnauthorizedError
  | CustomerPortalCustomersVerifyEmailUpdateUnprocessableEntityError;

/**
 * Validation Error
 */
export class CustomerPortalCustomerMetersListHTTPValidationError extends Data.TaggedError(
  "HTTPValidationError",
)<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type CustomerPortalCustomerMetersListErrors =
  CustomerPortalCustomerMetersListHTTPValidationError;

/**
 * Customer meter not found.
 */
export class CustomerPortalCustomerMetersGetResourceNotFoundError extends Data.TaggedError(
  "ResourceNotFound",
)<{
  readonly status: 404;
  readonly body: Models.ResourceNotFound;
}> {}

/**
 * Validation Error
 */
export class CustomerPortalCustomerMetersGetHTTPValidationError extends Data.TaggedError(
  "HTTPValidationError",
)<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type CustomerPortalCustomerMetersGetErrors =
  | CustomerPortalCustomerMetersGetResourceNotFoundError
  | CustomerPortalCustomerMetersGetHTTPValidationError;

/**
 * Authentication required
 */
export class CustomerPortalSeatsListSeatsUnauthorizedError extends Data.TaggedError(
  "Unauthorized",
)<{
  readonly status: 401;
}> {}

/**
 * Not permitted
 */
export class CustomerPortalSeatsListSeatsForbiddenError extends Data.TaggedError("Forbidden")<{
  readonly status: 403;
}> {}

/**
 * Subscription or order not found
 */
export class CustomerPortalSeatsListSeatsNotFoundError extends Data.TaggedError("NotFound")<{
  readonly status: 404;
}> {}

/**
 * Validation Error
 */
export class CustomerPortalSeatsListSeatsHTTPValidationError extends Data.TaggedError(
  "HTTPValidationError",
)<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type CustomerPortalSeatsListSeatsErrors =
  | CustomerPortalSeatsListSeatsUnauthorizedError
  | CustomerPortalSeatsListSeatsForbiddenError
  | CustomerPortalSeatsListSeatsNotFoundError
  | CustomerPortalSeatsListSeatsHTTPValidationError;

/**
 * No available seats or customer already has a seat
 */
export class CustomerPortalSeatsAssignSeatBadRequestError extends Data.TaggedError("BadRequest")<{
  readonly status: 400;
}> {}

/**
 * Authentication required
 */
export class CustomerPortalSeatsAssignSeatUnauthorizedError extends Data.TaggedError(
  "Unauthorized",
)<{
  readonly status: 401;
}> {}

/**
 * Not permitted
 */
export class CustomerPortalSeatsAssignSeatForbiddenError extends Data.TaggedError("Forbidden")<{
  readonly status: 403;
}> {}

/**
 * Subscription, order, or customer not found
 */
export class CustomerPortalSeatsAssignSeatNotFoundError extends Data.TaggedError("NotFound")<{
  readonly status: 404;
}> {}

/**
 * Validation Error
 */
export class CustomerPortalSeatsAssignSeatHTTPValidationError extends Data.TaggedError(
  "HTTPValidationError",
)<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type CustomerPortalSeatsAssignSeatErrors =
  | CustomerPortalSeatsAssignSeatBadRequestError
  | CustomerPortalSeatsAssignSeatUnauthorizedError
  | CustomerPortalSeatsAssignSeatForbiddenError
  | CustomerPortalSeatsAssignSeatNotFoundError
  | CustomerPortalSeatsAssignSeatHTTPValidationError;

/**
 * Authentication required
 */
export class CustomerPortalSeatsRevokeSeatUnauthorizedError extends Data.TaggedError(
  "Unauthorized",
)<{
  readonly status: 401;
}> {}

/**
 * Not permitted
 */
export class CustomerPortalSeatsRevokeSeatForbiddenError extends Data.TaggedError("Forbidden")<{
  readonly status: 403;
}> {}

/**
 * Seat not found
 */
export class CustomerPortalSeatsRevokeSeatNotFoundError extends Data.TaggedError("NotFound")<{
  readonly status: 404;
}> {}

/**
 * Validation Error
 */
export class CustomerPortalSeatsRevokeSeatHTTPValidationError extends Data.TaggedError(
  "HTTPValidationError",
)<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type CustomerPortalSeatsRevokeSeatErrors =
  | CustomerPortalSeatsRevokeSeatUnauthorizedError
  | CustomerPortalSeatsRevokeSeatForbiddenError
  | CustomerPortalSeatsRevokeSeatNotFoundError
  | CustomerPortalSeatsRevokeSeatHTTPValidationError;

/**
 * Seat is not pending or already claimed
 */
export class CustomerPortalSeatsResendInvitationBadRequestError extends Data.TaggedError(
  "BadRequest",
)<{
  readonly status: 400;
}> {}

/**
 * Authentication required
 */
export class CustomerPortalSeatsResendInvitationUnauthorizedError extends Data.TaggedError(
  "Unauthorized",
)<{
  readonly status: 401;
}> {}

/**
 * Not permitted
 */
export class CustomerPortalSeatsResendInvitationForbiddenError extends Data.TaggedError(
  "Forbidden",
)<{
  readonly status: 403;
}> {}

/**
 * Seat not found
 */
export class CustomerPortalSeatsResendInvitationNotFoundError extends Data.TaggedError("NotFound")<{
  readonly status: 404;
}> {}

/**
 * Validation Error
 */
export class CustomerPortalSeatsResendInvitationHTTPValidationError extends Data.TaggedError(
  "HTTPValidationError",
)<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type CustomerPortalSeatsResendInvitationErrors =
  | CustomerPortalSeatsResendInvitationBadRequestError
  | CustomerPortalSeatsResendInvitationUnauthorizedError
  | CustomerPortalSeatsResendInvitationForbiddenError
  | CustomerPortalSeatsResendInvitationNotFoundError
  | CustomerPortalSeatsResendInvitationHTTPValidationError;

/**
 * Authentication required
 */
export class CustomerPortalSeatsListClaimedSubscriptionsUnauthorizedError extends Data.TaggedError(
  "Unauthorized",
)<{
  readonly status: 401;
}> {}

/**
 * Validation Error
 */
export class CustomerPortalSeatsListClaimedSubscriptionsHTTPValidationError extends Data.TaggedError(
  "HTTPValidationError",
)<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type CustomerPortalSeatsListClaimedSubscriptionsErrors =
  | CustomerPortalSeatsListClaimedSubscriptionsUnauthorizedError
  | CustomerPortalSeatsListClaimedSubscriptionsHTTPValidationError;

/**
 * Validation Error
 */
export class CustomerPortalDownloadablesListHTTPValidationError extends Data.TaggedError(
  "HTTPValidationError",
)<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type CustomerPortalDownloadablesListErrors =
  CustomerPortalDownloadablesListHTTPValidationError;

/**
 * Not authorized to manage license key.
 */
export class CustomerPortalLicenseKeysListUnauthorizedError extends Data.TaggedError(
  "Unauthorized",
)<{
  readonly status: 401;
  readonly body: Models.Unauthorized;
}> {}

/**
 * License key not found.
 */
export class CustomerPortalLicenseKeysListResourceNotFoundError extends Data.TaggedError(
  "ResourceNotFound",
)<{
  readonly status: 404;
  readonly body: Models.ResourceNotFound;
}> {}

/**
 * Validation Error
 */
export class CustomerPortalLicenseKeysListHTTPValidationError extends Data.TaggedError(
  "HTTPValidationError",
)<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type CustomerPortalLicenseKeysListErrors =
  | CustomerPortalLicenseKeysListUnauthorizedError
  | CustomerPortalLicenseKeysListResourceNotFoundError
  | CustomerPortalLicenseKeysListHTTPValidationError;

/**
 * License key not found.
 */
export class CustomerPortalLicenseKeysGetResourceNotFoundError extends Data.TaggedError(
  "ResourceNotFound",
)<{
  readonly status: 404;
  readonly body: Models.ResourceNotFound;
}> {}

/**
 * Validation Error
 */
export class CustomerPortalLicenseKeysGetHTTPValidationError extends Data.TaggedError(
  "HTTPValidationError",
)<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type CustomerPortalLicenseKeysGetErrors =
  | CustomerPortalLicenseKeysGetResourceNotFoundError
  | CustomerPortalLicenseKeysGetHTTPValidationError;

/**
 * License key cannot be rotated in its current status. Allowed statuses: disabled, granted.
 */
export class CustomerPortalLicenseKeysRotateRotateNotPermittedError extends Data.TaggedError(
  "RotateNotPermitted",
)<{
  readonly status: 400;
  readonly body: Models.RotateNotPermitted;
}> {}

/**
 * Not authorized to manage license key.
 */
export class CustomerPortalLicenseKeysRotateUnauthorizedError extends Data.TaggedError(
  "Unauthorized",
)<{
  readonly status: 401;
  readonly body: Models.Unauthorized;
}> {}

/**
 * License key not found.
 */
export class CustomerPortalLicenseKeysRotateResourceNotFoundError extends Data.TaggedError(
  "ResourceNotFound",
)<{
  readonly status: 404;
  readonly body: Models.ResourceNotFound;
}> {}

/**
 * Validation Error
 */
export class CustomerPortalLicenseKeysRotateHTTPValidationError extends Data.TaggedError(
  "HTTPValidationError",
)<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type CustomerPortalLicenseKeysRotateErrors =
  | CustomerPortalLicenseKeysRotateRotateNotPermittedError
  | CustomerPortalLicenseKeysRotateUnauthorizedError
  | CustomerPortalLicenseKeysRotateResourceNotFoundError
  | CustomerPortalLicenseKeysRotateHTTPValidationError;

/**
 * The requested usage increment exceeds the license key's remaining usage allowance.
 */
export class CustomerPortalLicenseKeysValidateBadRequestError extends Data.TaggedError(
  "BadRequest",
)<{
  readonly status: 400;
  readonly body: unknown;
}> {}

/**
 * License key not found, revoked, disabled, or expired, or the supplied activation, conditions, benefit, or customer do not match.
 */
export class CustomerPortalLicenseKeysValidateResourceNotFoundError extends Data.TaggedError(
  "ResourceNotFound",
)<{
  readonly status: 404;
  readonly body: Models.ResourceNotFound;
}> {}

/**
 * Validation Error
 */
export class CustomerPortalLicenseKeysValidateHTTPValidationError extends Data.TaggedError(
  "HTTPValidationError",
)<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type CustomerPortalLicenseKeysValidateErrors =
  | CustomerPortalLicenseKeysValidateBadRequestError
  | CustomerPortalLicenseKeysValidateResourceNotFoundError
  | CustomerPortalLicenseKeysValidateHTTPValidationError;

/**
 * License key is revoked, disabled, or expired, does not support activations, or has reached its activation limit. Use /validate for licenses without activations.
 */
export class CustomerPortalLicenseKeysActivateNotPermittedError extends Data.TaggedError(
  "NotPermitted",
)<{
  readonly status: 403;
  readonly body: Models.NotPermitted;
}> {}

/**
 * License key not found.
 */
export class CustomerPortalLicenseKeysActivateResourceNotFoundError extends Data.TaggedError(
  "ResourceNotFound",
)<{
  readonly status: 404;
  readonly body: Models.ResourceNotFound;
}> {}

/**
 * Validation Error
 */
export class CustomerPortalLicenseKeysActivateHTTPValidationError extends Data.TaggedError(
  "HTTPValidationError",
)<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type CustomerPortalLicenseKeysActivateErrors =
  | CustomerPortalLicenseKeysActivateNotPermittedError
  | CustomerPortalLicenseKeysActivateResourceNotFoundError
  | CustomerPortalLicenseKeysActivateHTTPValidationError;

/**
 * License key or activation not found, or activation does not belong to the license key.
 */
export class CustomerPortalLicenseKeysDeactivateResourceNotFoundError extends Data.TaggedError(
  "ResourceNotFound",
)<{
  readonly status: 404;
  readonly body: Models.ResourceNotFound;
}> {}

/**
 * Validation Error
 */
export class CustomerPortalLicenseKeysDeactivateHTTPValidationError extends Data.TaggedError(
  "HTTPValidationError",
)<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type CustomerPortalLicenseKeysDeactivateErrors =
  | CustomerPortalLicenseKeysDeactivateResourceNotFoundError
  | CustomerPortalLicenseKeysDeactivateHTTPValidationError;

/**
 * Authentication required
 */
export class CustomerPortalMembersListMembersUnauthorizedError extends Data.TaggedError(
  "Unauthorized",
)<{
  readonly status: 401;
}> {}

/**
 * Not permitted - requires owner or billing manager role
 */
export class CustomerPortalMembersListMembersForbiddenError extends Data.TaggedError("Forbidden")<{
  readonly status: 403;
}> {}

/**
 * Validation Error
 */
export class CustomerPortalMembersListMembersHTTPValidationError extends Data.TaggedError(
  "HTTPValidationError",
)<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type CustomerPortalMembersListMembersErrors =
  | CustomerPortalMembersListMembersUnauthorizedError
  | CustomerPortalMembersListMembersForbiddenError
  | CustomerPortalMembersListMembersHTTPValidationError;

/**
 * Invalid request or member already exists.
 */
export class CustomerPortalMembersAddMemberBadRequestError extends Data.TaggedError("BadRequest")<{
  readonly status: 400;
}> {}

/**
 * Authentication required
 */
export class CustomerPortalMembersAddMemberUnauthorizedError extends Data.TaggedError(
  "Unauthorized",
)<{
  readonly status: 401;
}> {}

/**
 * Not permitted - requires owner or billing manager role
 */
export class CustomerPortalMembersAddMemberForbiddenError extends Data.TaggedError("Forbidden")<{
  readonly status: 403;
}> {}

/**
 * Validation Error
 */
export class CustomerPortalMembersAddMemberHTTPValidationError extends Data.TaggedError(
  "HTTPValidationError",
)<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type CustomerPortalMembersAddMemberErrors =
  | CustomerPortalMembersAddMemberBadRequestError
  | CustomerPortalMembersAddMemberUnauthorizedError
  | CustomerPortalMembersAddMemberForbiddenError
  | CustomerPortalMembersAddMemberHTTPValidationError;

/**
 * Cannot remove the only owner.
 */
export class CustomerPortalMembersRemoveMemberBadRequestError extends Data.TaggedError(
  "BadRequest",
)<{
  readonly status: 400;
}> {}

/**
 * Authentication required
 */
export class CustomerPortalMembersRemoveMemberUnauthorizedError extends Data.TaggedError(
  "Unauthorized",
)<{
  readonly status: 401;
}> {}

/**
 * Not permitted - requires owner or billing manager role
 */
export class CustomerPortalMembersRemoveMemberForbiddenError extends Data.TaggedError("Forbidden")<{
  readonly status: 403;
}> {}

/**
 * Member not found.
 */
export class CustomerPortalMembersRemoveMemberNotFoundError extends Data.TaggedError("NotFound")<{
  readonly status: 404;
}> {}

/**
 * Validation Error
 */
export class CustomerPortalMembersRemoveMemberHTTPValidationError extends Data.TaggedError(
  "HTTPValidationError",
)<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type CustomerPortalMembersRemoveMemberErrors =
  | CustomerPortalMembersRemoveMemberBadRequestError
  | CustomerPortalMembersRemoveMemberUnauthorizedError
  | CustomerPortalMembersRemoveMemberForbiddenError
  | CustomerPortalMembersRemoveMemberNotFoundError
  | CustomerPortalMembersRemoveMemberHTTPValidationError;

/**
 * Invalid role change.
 */
export class CustomerPortalMembersUpdateMemberBadRequestError extends Data.TaggedError(
  "BadRequest",
)<{
  readonly status: 400;
}> {}

/**
 * Authentication required
 */
export class CustomerPortalMembersUpdateMemberUnauthorizedError extends Data.TaggedError(
  "Unauthorized",
)<{
  readonly status: 401;
}> {}

/**
 * Not permitted - requires owner or billing manager role
 */
export class CustomerPortalMembersUpdateMemberForbiddenError extends Data.TaggedError("Forbidden")<{
  readonly status: 403;
}> {}

/**
 * Member not found.
 */
export class CustomerPortalMembersUpdateMemberNotFoundError extends Data.TaggedError("NotFound")<{
  readonly status: 404;
}> {}

/**
 * Validation Error
 */
export class CustomerPortalMembersUpdateMemberHTTPValidationError extends Data.TaggedError(
  "HTTPValidationError",
)<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type CustomerPortalMembersUpdateMemberErrors =
  | CustomerPortalMembersUpdateMemberBadRequestError
  | CustomerPortalMembersUpdateMemberUnauthorizedError
  | CustomerPortalMembersUpdateMemberForbiddenError
  | CustomerPortalMembersUpdateMemberNotFoundError
  | CustomerPortalMembersUpdateMemberHTTPValidationError;

/**
 * Validation Error
 */
export class CustomerPortalOrdersListHTTPValidationError extends Data.TaggedError(
  "HTTPValidationError",
)<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type CustomerPortalOrdersListErrors = CustomerPortalOrdersListHTTPValidationError;

/**
 * Order not found.
 */
export class CustomerPortalOrdersGetResourceNotFoundError extends Data.TaggedError(
  "ResourceNotFound",
)<{
  readonly status: 404;
  readonly body: Models.ResourceNotFound;
}> {}

/**
 * Validation Error
 */
export class CustomerPortalOrdersGetHTTPValidationError extends Data.TaggedError(
  "HTTPValidationError",
)<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type CustomerPortalOrdersGetErrors =
  | CustomerPortalOrdersGetResourceNotFoundError
  | CustomerPortalOrdersGetHTTPValidationError;

/**
 * Order not found.
 */
export class CustomerPortalOrdersUpdateResourceNotFoundError extends Data.TaggedError(
  "ResourceNotFound",
)<{
  readonly status: 404;
  readonly body: Models.ResourceNotFound;
}> {}

/**
 * Validation Error
 */
export class CustomerPortalOrdersUpdateHTTPValidationError extends Data.TaggedError(
  "HTTPValidationError",
)<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type CustomerPortalOrdersUpdateErrors =
  | CustomerPortalOrdersUpdateResourceNotFoundError
  | CustomerPortalOrdersUpdateHTTPValidationError;

/**
 * Order not found.
 */
export class CustomerPortalOrdersInvoiceResourceNotFoundError extends Data.TaggedError(
  "ResourceNotFound",
)<{
  readonly status: 404;
  readonly body: Models.ResourceNotFound;
}> {}

/**
 * Validation Error
 */
export class CustomerPortalOrdersInvoiceHTTPValidationError extends Data.TaggedError(
  "HTTPValidationError",
)<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type CustomerPortalOrdersInvoiceErrors =
  | CustomerPortalOrdersInvoiceResourceNotFoundError
  | CustomerPortalOrdersInvoiceHTTPValidationError;

/**
 * Order not found.
 */
export class CustomerPortalOrdersGenerateInvoiceResourceNotFoundError extends Data.TaggedError(
  "ResourceNotFound",
)<{
  readonly status: 404;
  readonly body: Models.ResourceNotFound;
}> {}

/**
 * Order is not eligible for invoice generation (invalid status).
 */
export class CustomerPortalOrdersGenerateInvoiceOrderNotEligibleForInvoiceError extends Data.TaggedError(
  "OrderNotEligibleForInvoice",
)<{
  readonly status: 409;
  readonly body: Models.OrderNotEligibleForInvoice;
}> {}

/**
 * Order is missing billing name or address.
 */
export class CustomerPortalOrdersGenerateInvoiceMissingInvoiceBillingDetailsError extends Data.TaggedError(
  "MissingInvoiceBillingDetails",
)<{
  readonly status: 422;
  readonly body: Models.MissingInvoiceBillingDetails;
}> {}

export type CustomerPortalOrdersGenerateInvoiceErrors =
  | CustomerPortalOrdersGenerateInvoiceResourceNotFoundError
  | CustomerPortalOrdersGenerateInvoiceOrderNotEligibleForInvoiceError
  | CustomerPortalOrdersGenerateInvoiceMissingInvoiceBillingDetailsError;

/**
 * Order not found.
 */
export class CustomerPortalOrdersReceiptResourceNotFoundError extends Data.TaggedError(
  "ResourceNotFound",
)<{
  readonly status: 404;
  readonly body: Models.ResourceNotFound;
}> {}

/**
 * Validation Error
 */
export class CustomerPortalOrdersReceiptHTTPValidationError extends Data.TaggedError(
  "HTTPValidationError",
)<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type CustomerPortalOrdersReceiptErrors =
  | CustomerPortalOrdersReceiptResourceNotFoundError
  | CustomerPortalOrdersReceiptHTTPValidationError;

/**
 * Order not found.
 */
export class CustomerPortalOrdersGetPaymentStatusResourceNotFoundError extends Data.TaggedError(
  "ResourceNotFound",
)<{
  readonly status: 404;
  readonly body: Models.ResourceNotFound;
}> {}

/**
 * Validation Error
 */
export class CustomerPortalOrdersGetPaymentStatusHTTPValidationError extends Data.TaggedError(
  "HTTPValidationError",
)<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type CustomerPortalOrdersGetPaymentStatusErrors =
  | CustomerPortalOrdersGetPaymentStatusResourceNotFoundError
  | CustomerPortalOrdersGetPaymentStatusHTTPValidationError;

/**
 * Order not found.
 */
export class CustomerPortalOrdersConfirmRetryPaymentResourceNotFoundError extends Data.TaggedError(
  "ResourceNotFound",
)<{
  readonly status: 404;
  readonly body: Models.ResourceNotFound;
}> {}

/**
 * Payment already in progress.
 */
export class CustomerPortalOrdersConfirmRetryPaymentPaymentAlreadyInProgressError extends Data.TaggedError(
  "PaymentAlreadyInProgress",
)<{
  readonly status: 409;
  readonly body: Models.PaymentAlreadyInProgress;
}> {}

/**
 * Order not eligible for retry or payment confirmation failed.
 */
export class CustomerPortalOrdersConfirmRetryPaymentOrderNotEligibleForRetryError extends Data.TaggedError(
  "OrderNotEligibleForRetry",
)<{
  readonly status: 422;
  readonly body: Models.OrderNotEligibleForRetry;
}> {}

/**
 * Manual retry limit exceeded.
 */
export class CustomerPortalOrdersConfirmRetryPaymentManualRetryLimitExceededError extends Data.TaggedError(
  "ManualRetryLimitExceeded",
)<{
  readonly status: 429;
  readonly body: Models.ManualRetryLimitExceeded;
}> {}

export type CustomerPortalOrdersConfirmRetryPaymentErrors =
  | CustomerPortalOrdersConfirmRetryPaymentResourceNotFoundError
  | CustomerPortalOrdersConfirmRetryPaymentPaymentAlreadyInProgressError
  | CustomerPortalOrdersConfirmRetryPaymentOrderNotEligibleForRetryError
  | CustomerPortalOrdersConfirmRetryPaymentManualRetryLimitExceededError;

/**
 * Organization not found.
 */
export class CustomerPortalOrganizationsGetResourceNotFoundError extends Data.TaggedError(
  "ResourceNotFound",
)<{
  readonly status: 404;
  readonly body: Models.ResourceNotFound;
}> {}

/**
 * Validation Error
 */
export class CustomerPortalOrganizationsGetHTTPValidationError extends Data.TaggedError(
  "HTTPValidationError",
)<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type CustomerPortalOrganizationsGetErrors =
  | CustomerPortalOrganizationsGetResourceNotFoundError
  | CustomerPortalOrganizationsGetHTTPValidationError;

/**
 * Validation Error
 */
export class CustomerPortalSubscriptionsListHTTPValidationError extends Data.TaggedError(
  "HTTPValidationError",
)<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type CustomerPortalSubscriptionsListErrors =
  CustomerPortalSubscriptionsListHTTPValidationError;

/**
 * Customer subscription was not found.
 */
export class CustomerPortalSubscriptionsGetResourceNotFoundError extends Data.TaggedError(
  "ResourceNotFound",
)<{
  readonly status: 404;
  readonly body: Models.ResourceNotFound;
}> {}

/**
 * Validation Error
 */
export class CustomerPortalSubscriptionsGetHTTPValidationError extends Data.TaggedError(
  "HTTPValidationError",
)<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type CustomerPortalSubscriptionsGetErrors =
  | CustomerPortalSubscriptionsGetResourceNotFoundError
  | CustomerPortalSubscriptionsGetHTTPValidationError;

/**
 * Customer subscription is already canceled or will be at the end of the period, or the user lacks billing permissions.
 */
export class CustomerPortalSubscriptionsCancelAlreadyCanceledSubscriptionError extends Data.TaggedError(
  "AlreadyCanceledSubscription",
)<{
  readonly status: 403;
  readonly body: Models.AlreadyCanceledSubscription;
}> {}

/**
 * Customer subscription was not found.
 */
export class CustomerPortalSubscriptionsCancelResourceNotFoundError extends Data.TaggedError(
  "ResourceNotFound",
)<{
  readonly status: 404;
  readonly body: Models.ResourceNotFound;
}> {}

/**
 * Validation Error
 */
export class CustomerPortalSubscriptionsCancelHTTPValidationError extends Data.TaggedError(
  "HTTPValidationError",
)<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type CustomerPortalSubscriptionsCancelErrors =
  | CustomerPortalSubscriptionsCancelAlreadyCanceledSubscriptionError
  | CustomerPortalSubscriptionsCancelResourceNotFoundError
  | CustomerPortalSubscriptionsCancelHTTPValidationError;

/**
 * Payment required to apply the subscription update.
 */
export class CustomerPortalSubscriptionsUpdatePaymentFailedError extends Data.TaggedError(
  "PaymentFailed",
)<{
  readonly status: 402;
  readonly body: Models.PaymentFailed;
}> {}

/**
 * Customer subscription is already canceled or will be at the end of the period, the user lacks billing permissions, or pausing/resuming is not enabled for the organization.
 */
export class CustomerPortalSubscriptionsUpdateAlreadyCanceledSubscriptionError extends Data.TaggedError(
  "AlreadyCanceledSubscription",
)<{
  readonly status: 403;
  readonly body: Models.AlreadyCanceledSubscription;
}> {}

/**
 * Customer subscription is already canceled or will be at the end of the period, the user lacks billing permissions, or pausing/resuming is not enabled for the organization.
 */
export class CustomerPortalSubscriptionsUpdatePauseResumeNotAllowedError extends Data.TaggedError(
  "PauseResumeNotAllowed",
)<{
  readonly status: 403;
  readonly body: Models.PauseResumeNotAllowed;
}> {}

/**
 * Customer subscription is already canceled or will be at the end of the period, the user lacks billing permissions, or pausing/resuming is not enabled for the organization.
 */
export class CustomerPortalSubscriptionsUpdateUpdateSubscriptionPlanNotAllowedError extends Data.TaggedError(
  "UpdateSubscriptionPlanNotAllowed",
)<{
  readonly status: 403;
  readonly body: Models.UpdateSubscriptionPlanNotAllowed;
}> {}

/**
 * Customer subscription is already canceled or will be at the end of the period, the user lacks billing permissions, or pausing/resuming is not enabled for the organization.
 */
export class CustomerPortalSubscriptionsUpdateUpdateSubscriptionSeatsNotAllowedError extends Data.TaggedError(
  "UpdateSubscriptionSeatsNotAllowed",
)<{
  readonly status: 403;
  readonly body: Models.UpdateSubscriptionSeatsNotAllowed;
}> {}

/**
 * Customer subscription is already canceled or will be at the end of the period, the user lacks billing permissions, or pausing/resuming is not enabled for the organization.
 */
export class CustomerPortalSubscriptionsUpdateUpdateSubscriptionUnitsNotAllowedError extends Data.TaggedError(
  "UpdateSubscriptionUnitsNotAllowed",
)<{
  readonly status: 403;
  readonly body: Models.UpdateSubscriptionUnitsNotAllowed;
}> {}

/**
 * Customer subscription was not found.
 */
export class CustomerPortalSubscriptionsUpdateResourceNotFoundError extends Data.TaggedError(
  "ResourceNotFound",
)<{
  readonly status: 404;
  readonly body: Models.ResourceNotFound;
}> {}

/**
 * The subscription has no payment method to charge, or is not scheduled to be canceled.
 */
export class CustomerPortalSubscriptionsUpdatePaymentMethodRequiredError extends Data.TaggedError(
  "PaymentMethodRequired",
)<{
  readonly status: 409;
  readonly body: Models.PaymentMethodRequired;
}> {}

/**
 * The subscription has no payment method to charge, or is not scheduled to be canceled.
 */
export class CustomerPortalSubscriptionsUpdateSubscriptionNotScheduledToCancelError extends Data.TaggedError(
  "SubscriptionNotScheduledToCancel",
)<{
  readonly status: 409;
  readonly body: Models.SubscriptionNotScheduledToCancel;
}> {}

/**
 * Validation Error
 */
export class CustomerPortalSubscriptionsUpdateHTTPValidationError extends Data.TaggedError(
  "HTTPValidationError",
)<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type CustomerPortalSubscriptionsUpdateErrors =
  | CustomerPortalSubscriptionsUpdatePaymentFailedError
  | CustomerPortalSubscriptionsUpdateAlreadyCanceledSubscriptionError
  | CustomerPortalSubscriptionsUpdatePauseResumeNotAllowedError
  | CustomerPortalSubscriptionsUpdateUpdateSubscriptionPlanNotAllowedError
  | CustomerPortalSubscriptionsUpdateUpdateSubscriptionSeatsNotAllowedError
  | CustomerPortalSubscriptionsUpdateUpdateSubscriptionUnitsNotAllowedError
  | CustomerPortalSubscriptionsUpdateResourceNotFoundError
  | CustomerPortalSubscriptionsUpdatePaymentMethodRequiredError
  | CustomerPortalSubscriptionsUpdateSubscriptionNotScheduledToCancelError
  | CustomerPortalSubscriptionsUpdateHTTPValidationError;

/**
 * Validation Error
 */
export class CustomerPortalWalletsListHTTPValidationError extends Data.TaggedError(
  "HTTPValidationError",
)<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type CustomerPortalWalletsListErrors = CustomerPortalWalletsListHTTPValidationError;

/**
 * Wallet not found.
 */
export class CustomerPortalWalletsGetResourceNotFoundError extends Data.TaggedError(
  "ResourceNotFound",
)<{
  readonly status: 404;
  readonly body: Models.ResourceNotFound;
}> {}

/**
 * Validation Error
 */
export class CustomerPortalWalletsGetHTTPValidationError extends Data.TaggedError(
  "HTTPValidationError",
)<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type CustomerPortalWalletsGetErrors =
  | CustomerPortalWalletsGetResourceNotFoundError
  | CustomerPortalWalletsGetHTTPValidationError;

/**
 * Authentication required
 */
export class CustomerSeatsListSeatsUnauthorizedError extends Data.TaggedError("Unauthorized")<{
  readonly status: 401;
}> {}

/**
 * Not permitted
 */
export class CustomerSeatsListSeatsForbiddenError extends Data.TaggedError("Forbidden")<{
  readonly status: 403;
}> {}

/**
 * Subscription or order not found
 */
export class CustomerSeatsListSeatsNotFoundError extends Data.TaggedError("NotFound")<{
  readonly status: 404;
}> {}

/**
 * Validation Error
 */
export class CustomerSeatsListSeatsHTTPValidationError extends Data.TaggedError(
  "HTTPValidationError",
)<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type CustomerSeatsListSeatsErrors =
  | CustomerSeatsListSeatsUnauthorizedError
  | CustomerSeatsListSeatsForbiddenError
  | CustomerSeatsListSeatsNotFoundError
  | CustomerSeatsListSeatsHTTPValidationError;

/**
 * No available seats or customer already has a seat
 */
export class CustomerSeatsAssignSeatBadRequestError extends Data.TaggedError("BadRequest")<{
  readonly status: 400;
}> {}

/**
 * Authentication required
 */
export class CustomerSeatsAssignSeatUnauthorizedError extends Data.TaggedError("Unauthorized")<{
  readonly status: 401;
}> {}

/**
 * Not permitted
 */
export class CustomerSeatsAssignSeatForbiddenError extends Data.TaggedError("Forbidden")<{
  readonly status: 403;
}> {}

/**
 * Subscription, order, or customer not found
 */
export class CustomerSeatsAssignSeatNotFoundError extends Data.TaggedError("NotFound")<{
  readonly status: 404;
}> {}

/**
 * Validation Error
 */
export class CustomerSeatsAssignSeatHTTPValidationError extends Data.TaggedError(
  "HTTPValidationError",
)<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type CustomerSeatsAssignSeatErrors =
  | CustomerSeatsAssignSeatBadRequestError
  | CustomerSeatsAssignSeatUnauthorizedError
  | CustomerSeatsAssignSeatForbiddenError
  | CustomerSeatsAssignSeatNotFoundError
  | CustomerSeatsAssignSeatHTTPValidationError;

/**
 * Authentication required
 */
export class CustomerSeatsRevokeSeatUnauthorizedError extends Data.TaggedError("Unauthorized")<{
  readonly status: 401;
}> {}

/**
 * Not permitted
 */
export class CustomerSeatsRevokeSeatForbiddenError extends Data.TaggedError("Forbidden")<{
  readonly status: 403;
}> {}

/**
 * Seat not found
 */
export class CustomerSeatsRevokeSeatNotFoundError extends Data.TaggedError("NotFound")<{
  readonly status: 404;
}> {}

/**
 * Validation Error
 */
export class CustomerSeatsRevokeSeatHTTPValidationError extends Data.TaggedError(
  "HTTPValidationError",
)<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type CustomerSeatsRevokeSeatErrors =
  | CustomerSeatsRevokeSeatUnauthorizedError
  | CustomerSeatsRevokeSeatForbiddenError
  | CustomerSeatsRevokeSeatNotFoundError
  | CustomerSeatsRevokeSeatHTTPValidationError;

/**
 * Seat is not pending or already claimed
 */
export class CustomerSeatsResendInvitationBadRequestError extends Data.TaggedError("BadRequest")<{
  readonly status: 400;
}> {}

/**
 * Authentication required
 */
export class CustomerSeatsResendInvitationUnauthorizedError extends Data.TaggedError(
  "Unauthorized",
)<{
  readonly status: 401;
}> {}

/**
 * Not permitted
 */
export class CustomerSeatsResendInvitationForbiddenError extends Data.TaggedError("Forbidden")<{
  readonly status: 403;
}> {}

/**
 * Seat not found
 */
export class CustomerSeatsResendInvitationNotFoundError extends Data.TaggedError("NotFound")<{
  readonly status: 404;
}> {}

/**
 * Validation Error
 */
export class CustomerSeatsResendInvitationHTTPValidationError extends Data.TaggedError(
  "HTTPValidationError",
)<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type CustomerSeatsResendInvitationErrors =
  | CustomerSeatsResendInvitationBadRequestError
  | CustomerSeatsResendInvitationUnauthorizedError
  | CustomerSeatsResendInvitationForbiddenError
  | CustomerSeatsResendInvitationNotFoundError
  | CustomerSeatsResendInvitationHTTPValidationError;

/**
 * Invalid or expired invitation token
 */
export class CustomerSeatsGetClaimInfoBadRequestError extends Data.TaggedError("BadRequest")<{
  readonly status: 400;
}> {}

/**
 * Seat-based pricing not enabled for organization
 */
export class CustomerSeatsGetClaimInfoForbiddenError extends Data.TaggedError("Forbidden")<{
  readonly status: 403;
}> {}

/**
 * Seat not found
 */
export class CustomerSeatsGetClaimInfoNotFoundError extends Data.TaggedError("NotFound")<{
  readonly status: 404;
}> {}

/**
 * Validation Error
 */
export class CustomerSeatsGetClaimInfoHTTPValidationError extends Data.TaggedError(
  "HTTPValidationError",
)<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type CustomerSeatsGetClaimInfoErrors =
  | CustomerSeatsGetClaimInfoBadRequestError
  | CustomerSeatsGetClaimInfoForbiddenError
  | CustomerSeatsGetClaimInfoNotFoundError
  | CustomerSeatsGetClaimInfoHTTPValidationError;

/**
 * Invalid, expired, or already claimed token
 */
export class CustomerSeatsClaimSeatBadRequestError extends Data.TaggedError("BadRequest")<{
  readonly status: 400;
}> {}

/**
 * Seat-based pricing not enabled for organization
 */
export class CustomerSeatsClaimSeatForbiddenError extends Data.TaggedError("Forbidden")<{
  readonly status: 403;
}> {}

/**
 * Validation Error
 */
export class CustomerSeatsClaimSeatHTTPValidationError extends Data.TaggedError(
  "HTTPValidationError",
)<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type CustomerSeatsClaimSeatErrors =
  | CustomerSeatsClaimSeatBadRequestError
  | CustomerSeatsClaimSeatForbiddenError
  | CustomerSeatsClaimSeatHTTPValidationError;

/**
 * The external customer ID matches customers in several accessible organizations.
 */
export class CustomerSessionsCreateAmbiguousExternalCustomerIDError extends Data.TaggedError(
  "AmbiguousExternalCustomerID",
)<{
  readonly status: 409;
  readonly body: Models.AmbiguousExternalCustomerID;
}> {}

/**
 * Validation Error
 */
export class CustomerSessionsCreateHTTPValidationError extends Data.TaggedError(
  "HTTPValidationError",
)<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type CustomerSessionsCreateErrors =
  | CustomerSessionsCreateAmbiguousExternalCustomerIDError
  | CustomerSessionsCreateHTTPValidationError;

/**
 * Validation Error
 */
export class EventsListHTTPValidationError extends Data.TaggedError("HTTPValidationError")<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type EventsListErrors = EventsListHTTPValidationError;

/**
 * Validation Error
 */
export class EventsListNamesHTTPValidationError extends Data.TaggedError("HTTPValidationError")<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type EventsListNamesErrors = EventsListNamesHTTPValidationError;

/**
 * Event not found.
 */
export class EventsGetResourceNotFoundError extends Data.TaggedError("ResourceNotFound")<{
  readonly status: 404;
  readonly body: Models.ResourceNotFound;
}> {}

/**
 * Validation Error
 */
export class EventsGetHTTPValidationError extends Data.TaggedError("HTTPValidationError")<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type EventsGetErrors = EventsGetResourceNotFoundError | EventsGetHTTPValidationError;

/**
 * Validation Error
 */
export class EventsIngestHTTPValidationError extends Data.TaggedError("HTTPValidationError")<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type EventsIngestErrors = EventsIngestHTTPValidationError;

/**
 * Validation Error
 */
export class EventTypesListHTTPValidationError extends Data.TaggedError("HTTPValidationError")<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type EventTypesListErrors = EventTypesListHTTPValidationError;

/**
 * Not Found
 */
export class EventTypesUpdateNotFoundError extends Data.TaggedError("NotFound")<{
  readonly status: 404;
}> {}

/**
 * Validation Error
 */
export class EventTypesUpdateHTTPValidationError extends Data.TaggedError("HTTPValidationError")<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type EventTypesUpdateErrors =
  | EventTypesUpdateNotFoundError
  | EventTypesUpdateHTTPValidationError;

/**
 * Validation Error
 */
export class MetersListHTTPValidationError extends Data.TaggedError("HTTPValidationError")<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type MetersListErrors = MetersListHTTPValidationError;

/**
 * Validation Error
 */
export class MetersCreateHTTPValidationError extends Data.TaggedError("HTTPValidationError")<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type MetersCreateErrors = MetersCreateHTTPValidationError;

/**
 * Meter not found.
 */
export class MetersGetResourceNotFoundError extends Data.TaggedError("ResourceNotFound")<{
  readonly status: 404;
  readonly body: Models.ResourceNotFound;
}> {}

/**
 * Validation Error
 */
export class MetersGetHTTPValidationError extends Data.TaggedError("HTTPValidationError")<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type MetersGetErrors = MetersGetResourceNotFoundError | MetersGetHTTPValidationError;

/**
 * Meter not found.
 */
export class MetersUpdateResourceNotFoundError extends Data.TaggedError("ResourceNotFound")<{
  readonly status: 404;
  readonly body: Models.ResourceNotFound;
}> {}

/**
 * Validation Error
 */
export class MetersUpdateHTTPValidationError extends Data.TaggedError("HTTPValidationError")<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type MetersUpdateErrors =
  | MetersUpdateResourceNotFoundError
  | MetersUpdateHTTPValidationError;

/**
 * Meter not found.
 */
export class MetersQuantitiesResourceNotFoundError extends Data.TaggedError("ResourceNotFound")<{
  readonly status: 404;
  readonly body: Models.ResourceNotFound;
}> {}

/**
 * Validation Error
 */
export class MetersQuantitiesHTTPValidationError extends Data.TaggedError("HTTPValidationError")<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type MetersQuantitiesErrors =
  | MetersQuantitiesResourceNotFoundError
  | MetersQuantitiesHTTPValidationError;

/**
 * Validation Error
 */
export class CustomerMetersListHTTPValidationError extends Data.TaggedError("HTTPValidationError")<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type CustomerMetersListErrors = CustomerMetersListHTTPValidationError;

/**
 * Customer meter not found.
 */
export class CustomerMetersGetResourceNotFoundError extends Data.TaggedError("ResourceNotFound")<{
  readonly status: 404;
  readonly body: Models.ResourceNotFound;
}> {}

/**
 * Validation Error
 */
export class CustomerMetersGetHTTPValidationError extends Data.TaggedError("HTTPValidationError")<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type CustomerMetersGetErrors =
  | CustomerMetersGetResourceNotFoundError
  | CustomerMetersGetHTTPValidationError;

/**
 * Validation Error
 */
export class PaymentsListHTTPValidationError extends Data.TaggedError("HTTPValidationError")<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type PaymentsListErrors = PaymentsListHTTPValidationError;

/**
 * Payment not found.
 */
export class PaymentsGetResourceNotFoundError extends Data.TaggedError("ResourceNotFound")<{
  readonly status: 404;
  readonly body: Models.ResourceNotFound;
}> {}

/**
 * Validation Error
 */
export class PaymentsGetHTTPValidationError extends Data.TaggedError("HTTPValidationError")<{
  readonly status: 422;
  readonly body: Models.HTTPValidationError;
}> {}

export type PaymentsGetErrors = PaymentsGetResourceNotFoundError | PaymentsGetHTTPValidationError;
