import { Schema } from "effect";

import { openUnion } from "../internal/schema";
import { makeVerify } from "../Webhooks";
import * as Models from "./models";

/**
 * Sent when a new benefit is created.
 *
 * **Discord & Slack support:** Basic
 */
export class WebhookBenefitCreatedPayload extends Schema.Opaque<WebhookBenefitCreatedPayload>()(
  Schema.Struct({
    type: Schema.Literal("benefit.created"),
    timestamp: Schema.DateTimeUtcFromString,
    api_version: Schema.String,
    data: Models.Benefit,
  }),
) {}

/**
 * Sent when a new benefit grant is created.
 *
 * **Discord & Slack support:** Basic
 */
export class WebhookBenefitGrantCreatedPayload extends Schema.Opaque<WebhookBenefitGrantCreatedPayload>()(
  Schema.Struct({
    type: Schema.Literal("benefit_grant.created"),
    timestamp: Schema.DateTimeUtcFromString,
    api_version: Schema.String,
    data: Models.BenefitGrantWebhook,
  }),
) {}

/**
 * Sent when a benefit grant is cycled,
 * meaning the related subscription has been renewed for another period.
 *
 * **Discord & Slack support:** Basic
 */
export class WebhookBenefitGrantCycledPayload extends Schema.Opaque<WebhookBenefitGrantCycledPayload>()(
  Schema.Struct({
    type: Schema.Literal("benefit_grant.cycled"),
    timestamp: Schema.DateTimeUtcFromString,
    api_version: Schema.String,
    data: Models.BenefitGrantWebhook,
  }),
) {}

/**
 * Sent when a benefit grant is revoked.
 *
 * **Discord & Slack support:** Basic
 */
export class WebhookBenefitGrantRevokedPayload extends Schema.Opaque<WebhookBenefitGrantRevokedPayload>()(
  Schema.Struct({
    type: Schema.Literal("benefit_grant.revoked"),
    timestamp: Schema.DateTimeUtcFromString,
    api_version: Schema.String,
    data: Models.BenefitGrantWebhook,
  }),
) {}

/**
 * Sent when a benefit grant is updated.
 *
 * **Discord & Slack support:** Basic
 */
export class WebhookBenefitGrantUpdatedPayload extends Schema.Opaque<WebhookBenefitGrantUpdatedPayload>()(
  Schema.Struct({
    type: Schema.Literal("benefit_grant.updated"),
    timestamp: Schema.DateTimeUtcFromString,
    api_version: Schema.String,
    data: Models.BenefitGrantWebhook,
  }),
) {}

/**
 * Sent when a benefit is updated.
 *
 * **Discord & Slack support:** Basic
 */
export class WebhookBenefitUpdatedPayload extends Schema.Opaque<WebhookBenefitUpdatedPayload>()(
  Schema.Struct({
    type: Schema.Literal("benefit.updated"),
    timestamp: Schema.DateTimeUtcFromString,
    api_version: Schema.String,
    data: Models.Benefit,
  }),
) {}

/**
 * Sent when a new checkout is created.
 *
 * **Discord & Slack support:** Basic
 */
export class WebhookCheckoutCreatedPayload extends Schema.Opaque<WebhookCheckoutCreatedPayload>()(
  Schema.Struct({
    type: Schema.Literal("checkout.created"),
    timestamp: Schema.DateTimeUtcFromString,
    api_version: Schema.String,
    data: Models.Checkout,
  }),
) {}

/**
 * Sent when a checkout expires.
 *
 * This event fires when a checkout reaches its expiration time without being completed.
 * Developers can use this to send reminder emails or track checkout abandonment.
 *
 * **Discord & Slack support:** Basic
 */
export class WebhookCheckoutExpiredPayload extends Schema.Opaque<WebhookCheckoutExpiredPayload>()(
  Schema.Struct({
    type: Schema.Literal("checkout.expired"),
    timestamp: Schema.DateTimeUtcFromString,
    api_version: Schema.String,
    data: Models.Checkout,
  }),
) {}

/**
 * Sent when a checkout is updated.
 *
 * **Discord & Slack support:** Basic
 */
export class WebhookCheckoutUpdatedPayload extends Schema.Opaque<WebhookCheckoutUpdatedPayload>()(
  Schema.Struct({
    type: Schema.Literal("checkout.updated"),
    timestamp: Schema.DateTimeUtcFromString,
    api_version: Schema.String,
    data: Models.Checkout,
  }),
) {}

/**
 * Sent when a new customer is created.
 *
 * A customer can be created:
 *
 * * After a successful checkout.
 * * Programmatically via the API.
 *
 * **Discord & Slack support:** Basic
 */
export class WebhookCustomerCreatedPayload extends Schema.Opaque<WebhookCustomerCreatedPayload>()(
  Schema.Struct({
    type: Schema.Literal("customer.created"),
    timestamp: Schema.DateTimeUtcFromString,
    api_version: Schema.String,
    data: Models.Customer,
  }),
) {}

/**
 * Sent when a customer is deleted.
 *
 * **Discord & Slack support:** Basic
 */
export class WebhookCustomerDeletedPayload extends Schema.Opaque<WebhookCustomerDeletedPayload>()(
  Schema.Struct({
    type: Schema.Literal("customer.deleted"),
    timestamp: Schema.DateTimeUtcFromString,
    api_version: Schema.String,
    data: Models.Customer,
  }),
) {}

/**
 * Sent when a new customer seat is assigned.
 *
 * This event is triggered when a seat is assigned to a customer by the organization.
 * The customer will receive an invitation email to claim the seat.
 */
export class WebhookCustomerSeatAssignedPayload extends Schema.Opaque<WebhookCustomerSeatAssignedPayload>()(
  Schema.Struct({
    type: Schema.Literal("customer_seat.assigned"),
    timestamp: Schema.DateTimeUtcFromString,
    api_version: Schema.String,
    data: Models.CustomerSeat,
  }),
) {}

/**
 * Sent when a customer seat is claimed.
 *
 * This event is triggered when a customer accepts the seat invitation and claims their access.
 */
export class WebhookCustomerSeatClaimedPayload extends Schema.Opaque<WebhookCustomerSeatClaimedPayload>()(
  Schema.Struct({
    type: Schema.Literal("customer_seat.claimed"),
    timestamp: Schema.DateTimeUtcFromString,
    api_version: Schema.String,
    data: Models.CustomerSeat,
  }),
) {}

/**
 * Sent when a customer seat is revoked.
 *
 * This event is triggered when access to a seat is revoked, either manually by the organization or automatically when a subscription is canceled.
 */
export class WebhookCustomerSeatRevokedPayload extends Schema.Opaque<WebhookCustomerSeatRevokedPayload>()(
  Schema.Struct({
    type: Schema.Literal("customer_seat.revoked"),
    timestamp: Schema.DateTimeUtcFromString,
    api_version: Schema.String,
    data: Models.CustomerSeat,
  }),
) {}

/**
 * Sent when a customer state has changed.
 *
 * It's triggered when:
 *
 * * Customer is created, updated or deleted.
 * * A subscription is created or updated.
 * * A benefit is granted or revoked.
 *
 * **Discord & Slack support:** Basic
 */
export class WebhookCustomerStateChangedPayload extends Schema.Opaque<WebhookCustomerStateChangedPayload>()(
  Schema.Struct({
    type: Schema.Literal("customer.state_changed"),
    timestamp: Schema.DateTimeUtcFromString,
    api_version: Schema.String,
    data: Models.CustomerState,
  }),
) {}

/**
 * Sent when a customer is updated.
 *
 * This event is fired when the customer details are updated.
 *
 * If you want to be notified when a customer subscription or benefit state changes, you should listen to the `customer_state_changed` event.
 *
 * **Discord & Slack support:** Basic
 */
export class WebhookCustomerUpdatedPayload extends Schema.Opaque<WebhookCustomerUpdatedPayload>()(
  Schema.Struct({
    type: Schema.Literal("customer.updated"),
    timestamp: Schema.DateTimeUtcFromString,
    api_version: Schema.String,
    data: Models.Customer,
  }),
) {}

/**
 * Sent when a new discount is created.
 *
 * **Discord & Slack support:** Basic
 */
export class WebhookDiscountCreatedPayload extends Schema.Opaque<WebhookDiscountCreatedPayload>()(
  Schema.Struct({
    type: Schema.Literal("discount.created"),
    timestamp: Schema.DateTimeUtcFromString,
    api_version: Schema.String,
    data: Models.Discount,
  }),
) {}

/**
 * Sent when a discount is deleted.
 *
 * **Discord & Slack support:** Basic
 */
export class WebhookDiscountDeletedPayload extends Schema.Opaque<WebhookDiscountDeletedPayload>()(
  Schema.Struct({
    type: Schema.Literal("discount.deleted"),
    timestamp: Schema.DateTimeUtcFromString,
    api_version: Schema.String,
    data: Models.Discount,
  }),
) {}

/**
 * Sent when a discount is updated.
 *
 * **Discord & Slack support:** Basic
 */
export class WebhookDiscountUpdatedPayload extends Schema.Opaque<WebhookDiscountUpdatedPayload>()(
  Schema.Struct({
    type: Schema.Literal("discount.updated"),
    timestamp: Schema.DateTimeUtcFromString,
    api_version: Schema.String,
    data: Models.Discount,
  }),
) {}

/**
 * Sent when a new member is created.
 *
 * A member represents an individual within a customer (team).
 * This event is triggered when a member is added to a customer,
 * either programmatically via the API or when an owner is automatically
 * created for a new customer.
 *
 * **Discord & Slack support:** Basic
 */
export class WebhookMemberCreatedPayload extends Schema.Opaque<WebhookMemberCreatedPayload>()(
  Schema.Struct({
    type: Schema.Literal("member.created"),
    timestamp: Schema.DateTimeUtcFromString,
    api_version: Schema.String,
    data: Models.Member,
  }),
) {}

/**
 * Sent when a member is deleted.
 *
 * This event is triggered when a member is removed from a customer.
 * Any active seats assigned to the member will be automatically revoked.
 *
 * **Discord & Slack support:** Basic
 */
export class WebhookMemberDeletedPayload extends Schema.Opaque<WebhookMemberDeletedPayload>()(
  Schema.Struct({
    type: Schema.Literal("member.deleted"),
    timestamp: Schema.DateTimeUtcFromString,
    api_version: Schema.String,
    data: Models.Member,
  }),
) {}

/**
 * Sent when a member is updated.
 *
 * This event is triggered when member details are updated,
 * such as their name or role within the customer.
 *
 * **Discord & Slack support:** Basic
 */
export class WebhookMemberUpdatedPayload extends Schema.Opaque<WebhookMemberUpdatedPayload>()(
  Schema.Struct({
    type: Schema.Literal("member.updated"),
    timestamp: Schema.DateTimeUtcFromString,
    api_version: Schema.String,
    data: Models.Member,
  }),
) {}

/**
 * Sent when a new order is created.
 *
 * A new order is created when:
 *
 * * A customer purchases a one-time product. In this case, `billing_reason` is set to `purchase`.
 * * A customer starts a subscription. In this case, `billing_reason` is set to `subscription_create`.
 * * A subscription is renewed. In this case, `billing_reason` is set to `subscription_cycle`.
 * * A subscription is upgraded or downgraded with an immediate proration invoice. In this case, `billing_reason` is set to `subscription_update`.
 *
 * > [!WARNING]
 * > The order might not be paid yet, so the `status` field might be `pending`.
 *
 * **Discord & Slack support:** Full
 */
export class WebhookOrderCreatedPayload extends Schema.Opaque<WebhookOrderCreatedPayload>()(
  Schema.Struct({
    type: Schema.Literal("order.created"),
    timestamp: Schema.DateTimeUtcFromString,
    api_version: Schema.String,
    data: Models.Order,
  }),
) {}

/**
 * Sent when an order is paid.
 *
 * When you receive this event, the order is fully processed and payment has been received.
 *
 * **Discord & Slack support:** Full
 */
export class WebhookOrderPaidPayload extends Schema.Opaque<WebhookOrderPaidPayload>()(
  Schema.Struct({
    type: Schema.Literal("order.paid"),
    timestamp: Schema.DateTimeUtcFromString,
    api_version: Schema.String,
    data: Models.Order,
  }),
) {}

/**
 * Sent when an order is fully or partially refunded.
 *
 * **Discord & Slack support:** Full
 */
export class WebhookOrderRefundedPayload extends Schema.Opaque<WebhookOrderRefundedPayload>()(
  Schema.Struct({
    type: Schema.Literal("order.refunded"),
    timestamp: Schema.DateTimeUtcFromString,
    api_version: Schema.String,
    data: Models.Order,
  }),
) {}

/**
 * Sent when an order is updated.
 *
 * An order is updated when:
 *
 * * Its status changes, e.g. from `pending` to `paid`.
 * * It's refunded, partially or fully.
 *
 * **Discord & Slack support:** Full
 */
export class WebhookOrderUpdatedPayload extends Schema.Opaque<WebhookOrderUpdatedPayload>()(
  Schema.Struct({
    type: Schema.Literal("order.updated"),
    timestamp: Schema.DateTimeUtcFromString,
    api_version: Schema.String,
    data: Models.Order,
  }),
) {}

/**
 * Sent when a organization is updated.
 *
 * **Discord & Slack support:** Basic
 */
export class WebhookOrganizationUpdatedPayload extends Schema.Opaque<WebhookOrganizationUpdatedPayload>()(
  Schema.Struct({
    type: Schema.Literal("organization.updated"),
    timestamp: Schema.DateTimeUtcFromString,
    api_version: Schema.String,
    data: Models.Organization,
  }),
) {}

/**
 * Sent when a new product is created.
 *
 * **Discord & Slack support:** Basic
 */
export class WebhookProductCreatedPayload extends Schema.Opaque<WebhookProductCreatedPayload>()(
  Schema.Struct({
    type: Schema.Literal("product.created"),
    timestamp: Schema.DateTimeUtcFromString,
    api_version: Schema.String,
    data: Models.Product,
  }),
) {}

/**
 * Sent when a product is updated.
 *
 * **Discord & Slack support:** Basic
 */
export class WebhookProductUpdatedPayload extends Schema.Opaque<WebhookProductUpdatedPayload>()(
  Schema.Struct({
    type: Schema.Literal("product.updated"),
    timestamp: Schema.DateTimeUtcFromString,
    api_version: Schema.String,
    data: Models.Product,
  }),
) {}

/**
 * Sent when a refund is created regardless of status.
 *
 * **Discord & Slack support:** Full
 */
export class WebhookRefundCreatedPayload extends Schema.Opaque<WebhookRefundCreatedPayload>()(
  Schema.Struct({
    type: Schema.Literal("refund.created"),
    timestamp: Schema.DateTimeUtcFromString,
    api_version: Schema.String,
    data: Models.Refund,
  }),
) {}

/**
 * Sent when a refund is updated.
 *
 * **Discord & Slack support:** Full
 */
export class WebhookRefundUpdatedPayload extends Schema.Opaque<WebhookRefundUpdatedPayload>()(
  Schema.Struct({
    type: Schema.Literal("refund.updated"),
    timestamp: Schema.DateTimeUtcFromString,
    api_version: Schema.String,
    data: Models.Refund,
  }),
) {}

/**
 * Sent when a subscription becomes active,
 * whether because it's a new paid subscription or because payment was recovered.
 *
 * **Discord & Slack support:** Full
 */
export class WebhookSubscriptionActivePayload extends Schema.Opaque<WebhookSubscriptionActivePayload>()(
  Schema.Struct({
    type: Schema.Literal("subscription.active"),
    timestamp: Schema.DateTimeUtcFromString,
    api_version: Schema.String,
    data: Models.Subscription,
  }),
) {}

/**
 * Sent when a subscription is canceled.
 * Customers might still have access until the end of the current period.
 *
 * **Discord & Slack support:** Full
 */
export class WebhookSubscriptionCanceledPayload extends Schema.Opaque<WebhookSubscriptionCanceledPayload>()(
  Schema.Struct({
    type: Schema.Literal("subscription.canceled"),
    timestamp: Schema.DateTimeUtcFromString,
    api_version: Schema.String,
    data: Models.Subscription,
  }),
) {}

/**
 * Sent when a new subscription is created.
 *
 * When this event occurs, the subscription `status` might not be `active` yet, as we can still have to wait for the first payment to be processed.
 *
 * **Discord & Slack support:** Full
 */
export class WebhookSubscriptionCreatedPayload extends Schema.Opaque<WebhookSubscriptionCreatedPayload>()(
  Schema.Struct({
    type: Schema.Literal("subscription.created"),
    timestamp: Schema.DateTimeUtcFromString,
    api_version: Schema.String,
    data: Models.Subscription,
  }),
) {}

/**
 * Sent when a subscription enters a new billing period.
 *
 * The payload carries the new `current_period_start` and `current_period_end`.
 * It fires when the period rolls over, before the renewal order exists and
 * regardless of whether the renewal payment succeeds — listen to `order.paid`
 * if you need the payment.
 *
 * A trial converting to a paid subscription starts a new period, so it fires
 * there too. Read `status` to tell the two apart.
 *
 * **Discord & Slack support:** Basic
 */
export class WebhookSubscriptionCycledPayload extends Schema.Opaque<WebhookSubscriptionCycledPayload>()(
  Schema.Struct({
    type: Schema.Literal("subscription.cycled"),
    timestamp: Schema.DateTimeUtcFromString,
    api_version: Schema.String,
    data: Models.Subscription,
  }),
) {}

/**
 * Sent when Polar takes over billing of a subscription migrated from another provider.
 *
 * This fires at cutover, once the subscription is live on Polar. `provider`
 * and `provider_subscription_id` identify the subscription on the billing
 * provider so you can correlate the two.
 *
 * **Discord & Slack support:** Basic
 */
export class WebhookSubscriptionMigratedPayload extends Schema.Opaque<WebhookSubscriptionMigratedPayload>()(
  Schema.Struct({
    type: Schema.Literal("subscription.migrated"),
    timestamp: Schema.DateTimeUtcFromString,
    api_version: Schema.String,
    data: Models.Subscription,
    /** The billing provider the subscription was migrated from. */
    provider: Schema.String,
    /** The identifier of the subscription on the billing provider. */
    provider_subscription_id: Schema.String,
  }),
) {}

/**
 * Sent when a subscription payment fails and the subscription enters `past_due` status.
 *
 * This is a recoverable state - the customer can update their payment method to restore the subscription.
 * Benefits may be revoked depending on the organization's grace period settings.
 *
 * If payment retries are exhausted, a `subscription.revoked` event will be sent.
 *
 * **Discord & Slack support:** Full
 */
export class WebhookSubscriptionPastDuePayload extends Schema.Opaque<WebhookSubscriptionPastDuePayload>()(
  Schema.Struct({
    type: Schema.Literal("subscription.past_due"),
    timestamp: Schema.DateTimeUtcFromString,
    api_version: Schema.String,
    data: Models.Subscription,
  }),
) {}

/**
 * Sent when a subscription is paused and the customer temporarily loses access.
 *
 * No order is created while paused. The subscription resumes either on its
 * scheduled resume date or when resumed manually, starting a new billing period.
 *
 * **Discord & Slack support:** Full
 */
export class WebhookSubscriptionPausedPayload extends Schema.Opaque<WebhookSubscriptionPausedPayload>()(
  Schema.Struct({
    type: Schema.Literal("subscription.paused"),
    timestamp: Schema.DateTimeUtcFromString,
    api_version: Schema.String,
    data: Models.Subscription,
  }),
) {}

/**
 * Sent when a paused subscription resumes, restoring the customer's access.
 *
 * Resuming starts a new billing period and charges the customer immediately.
 *
 * **Discord & Slack support:** Full
 */
export class WebhookSubscriptionResumedPayload extends Schema.Opaque<WebhookSubscriptionResumedPayload>()(
  Schema.Struct({
    type: Schema.Literal("subscription.resumed"),
    timestamp: Schema.DateTimeUtcFromString,
    api_version: Schema.String,
    data: Models.Subscription,
  }),
) {}

/**
 * Sent when a subscription is revoked and the user loses access immediately.
 * Happens when the subscription is canceled or payment retries are exhausted (status becomes `unpaid`).
 *
 * For payment failures that can still be recovered, see `subscription.past_due`.
 *
 * **Discord & Slack support:** Full
 */
export class WebhookSubscriptionRevokedPayload extends Schema.Opaque<WebhookSubscriptionRevokedPayload>()(
  Schema.Struct({
    type: Schema.Literal("subscription.revoked"),
    timestamp: Schema.DateTimeUtcFromString,
    api_version: Schema.String,
    data: Models.Subscription,
  }),
) {}

/**
 * Sent when a customer revokes a pending cancellation.
 *
 * When a customer cancels with "at period end", they retain access until the
 * subscription would renew. During this time, they can change their mind and
 * undo the cancellation. This event is triggered when they do so.
 *
 * **Discord & Slack support:** Full
 */
export class WebhookSubscriptionUncanceledPayload extends Schema.Opaque<WebhookSubscriptionUncanceledPayload>()(
  Schema.Struct({
    type: Schema.Literal("subscription.uncanceled"),
    timestamp: Schema.DateTimeUtcFromString,
    api_version: Schema.String,
    data: Models.Subscription,
  }),
) {}

/**
 * Sent when a subscription is updated. This event fires for all changes to the subscription, including renewals.
 *
 * If you want more specific events, you can listen to `subscription.active`, `subscription.canceled`, `subscription.past_due`, and `subscription.revoked`.
 *
 * To listen specifically for renewals, listen to `subscription.cycled`.
 *
 * **Discord & Slack support:** On cancellation, past due, and revocation. Renewals are skipped.
 */
export class WebhookSubscriptionUpdatedPayload extends Schema.Opaque<WebhookSubscriptionUpdatedPayload>()(
  Schema.Struct({
    type: Schema.Literal("subscription.updated"),
    timestamp: Schema.DateTimeUtcFromString,
    api_version: Schema.String,
    data: Models.Subscription,
  }),
) {}

/**
 * Every webhook payload Polar may send. Unknown event types decode to `UnknownVariant<"type">`.
 */
export const WebhookPayload = openUnion(
  [
    WebhookBenefitCreatedPayload,
    WebhookBenefitGrantCreatedPayload,
    WebhookBenefitGrantCycledPayload,
    WebhookBenefitGrantRevokedPayload,
    WebhookBenefitGrantUpdatedPayload,
    WebhookBenefitUpdatedPayload,
    WebhookCheckoutCreatedPayload,
    WebhookCheckoutExpiredPayload,
    WebhookCheckoutUpdatedPayload,
    WebhookCustomerCreatedPayload,
    WebhookCustomerDeletedPayload,
    WebhookCustomerSeatAssignedPayload,
    WebhookCustomerSeatClaimedPayload,
    WebhookCustomerSeatRevokedPayload,
    WebhookCustomerStateChangedPayload,
    WebhookCustomerUpdatedPayload,
    WebhookDiscountCreatedPayload,
    WebhookDiscountDeletedPayload,
    WebhookDiscountUpdatedPayload,
    WebhookMemberCreatedPayload,
    WebhookMemberDeletedPayload,
    WebhookMemberUpdatedPayload,
    WebhookOrderCreatedPayload,
    WebhookOrderPaidPayload,
    WebhookOrderRefundedPayload,
    WebhookOrderUpdatedPayload,
    WebhookOrganizationUpdatedPayload,
    WebhookProductCreatedPayload,
    WebhookProductUpdatedPayload,
    WebhookRefundCreatedPayload,
    WebhookRefundUpdatedPayload,
    WebhookSubscriptionActivePayload,
    WebhookSubscriptionCanceledPayload,
    WebhookSubscriptionCreatedPayload,
    WebhookSubscriptionCycledPayload,
    WebhookSubscriptionMigratedPayload,
    WebhookSubscriptionPastDuePayload,
    WebhookSubscriptionPausedPayload,
    WebhookSubscriptionResumedPayload,
    WebhookSubscriptionRevokedPayload,
    WebhookSubscriptionUncanceledPayload,
    WebhookSubscriptionUpdatedPayload,
  ],
  "type",
  [
    "benefit.created",
    "benefit.updated",
    "benefit_grant.created",
    "benefit_grant.cycled",
    "benefit_grant.revoked",
    "benefit_grant.updated",
    "checkout.created",
    "checkout.expired",
    "checkout.updated",
    "customer.created",
    "customer.deleted",
    "customer.state_changed",
    "customer.updated",
    "customer_seat.assigned",
    "customer_seat.claimed",
    "customer_seat.revoked",
    "discount.created",
    "discount.deleted",
    "discount.updated",
    "member.created",
    "member.deleted",
    "member.updated",
    "order.created",
    "order.paid",
    "order.refunded",
    "order.updated",
    "organization.updated",
    "product.created",
    "product.updated",
    "refund.created",
    "refund.updated",
    "subscription.active",
    "subscription.canceled",
    "subscription.created",
    "subscription.cycled",
    "subscription.migrated",
    "subscription.past_due",
    "subscription.paused",
    "subscription.resumed",
    "subscription.revoked",
    "subscription.uncanceled",
    "subscription.updated",
  ],
);
export type WebhookPayload = typeof WebhookPayload.Type;

/**
 * Verify a raw Polar webhook request and decode its payload.
 */
export const validateEvent = makeVerify(WebhookPayload);
