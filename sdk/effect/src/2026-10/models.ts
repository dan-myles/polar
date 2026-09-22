import { Schema } from "effect";

import { DateTimeInput, openEnum, openUnion } from "../internal/schema";

export type { UnknownVariant } from "../internal/schema";

/**
 * AggregationFunction
 */
export const AggregationFunction = Schema.Literals(["count", "sum", "max", "min", "avg", "unique"]);
export type AggregationFunction = typeof AggregationFunction.Type;

/**
 * The API version that'll be used in event payloads.
 */
export const ApiVersion = Schema.Literals(["2026-04", "2026-10"]);
export type ApiVersion = typeof ApiVersion.Type;

/**
 * BenefitGrantSortProperty
 */
export const BenefitGrantSortProperty = Schema.Literals([
  "created_at",
  "-created_at",
  "granted_at",
  "-granted_at",
  "revoked_at",
  "-revoked_at",
]);
export type BenefitGrantSortProperty = typeof BenefitGrantSortProperty.Type;

/**
 * BenefitSortProperty
 */
export const BenefitSortProperty = Schema.Literals([
  "created_at",
  "-created_at",
  "description",
  "-description",
  "type",
  "-type",
  "user_order",
  "-user_order",
]);
export type BenefitSortProperty = typeof BenefitSortProperty.Type;

/**
 * BenefitType
 */
export const BenefitType = Schema.Literals([
  "custom",
  "discord",
  "github_repository",
  "downloadables",
  "license_keys",
  "meter_credit",
  "feature_flag",
  "slack_shared_channel",
]);
export type BenefitType = typeof BenefitType.Type;

/**
 * BenefitVisibility
 */
export const BenefitVisibility = Schema.Literals(["draft", "private", "public"]);
export type BenefitVisibility = typeof BenefitVisibility.Type;

/**
 * BillingAddressFieldMode
 */
export const BillingAddressFieldMode = Schema.Literals(["required", "optional", "disabled"]);
export type BillingAddressFieldMode = typeof BillingAddressFieldMode.Type;

/**
 * CheckoutLinkSortProperty
 */
export const CheckoutLinkSortProperty = Schema.Literals([
  "created_at",
  "-created_at",
  "label",
  "-label",
  "success_url",
  "-success_url",
  "allow_discount_codes",
  "-allow_discount_codes",
]);
export type CheckoutLinkSortProperty = typeof CheckoutLinkSortProperty.Type;

/**
 * CheckoutSortProperty
 */
export const CheckoutSortProperty = Schema.Literals([
  "created_at",
  "-created_at",
  "expires_at",
  "-expires_at",
  "status",
  "-status",
]);
export type CheckoutSortProperty = typeof CheckoutSortProperty.Type;

/**
 * CheckoutStatus
 */
export const CheckoutStatus = Schema.Literals([
  "open",
  "expired",
  "confirmed",
  "succeeded",
  "failed",
]);
export type CheckoutStatus = typeof CheckoutStatus.Type;

/**
 * CountryAlpha2
 */
export const CountryAlpha2 = Schema.Literals([
  "AD",
  "AE",
  "AF",
  "AG",
  "AI",
  "AL",
  "AM",
  "AO",
  "AQ",
  "AR",
  "AS",
  "AT",
  "AU",
  "AW",
  "AX",
  "AZ",
  "BA",
  "BB",
  "BD",
  "BE",
  "BF",
  "BG",
  "BH",
  "BI",
  "BJ",
  "BL",
  "BM",
  "BN",
  "BO",
  "BQ",
  "BR",
  "BS",
  "BT",
  "BV",
  "BW",
  "BY",
  "BZ",
  "CA",
  "CC",
  "CD",
  "CF",
  "CG",
  "CH",
  "CI",
  "CK",
  "CL",
  "CM",
  "CN",
  "CO",
  "CR",
  "CU",
  "CV",
  "CW",
  "CX",
  "CY",
  "CZ",
  "DE",
  "DJ",
  "DK",
  "DM",
  "DO",
  "DZ",
  "EC",
  "EE",
  "EG",
  "EH",
  "ER",
  "ES",
  "ET",
  "FI",
  "FJ",
  "FK",
  "FM",
  "FO",
  "FR",
  "GA",
  "GB",
  "GD",
  "GE",
  "GF",
  "GG",
  "GH",
  "GI",
  "GL",
  "GM",
  "GN",
  "GP",
  "GQ",
  "GR",
  "GS",
  "GT",
  "GU",
  "GW",
  "GY",
  "HK",
  "HM",
  "HN",
  "HR",
  "HT",
  "HU",
  "ID",
  "IE",
  "IL",
  "IM",
  "IN",
  "IO",
  "IQ",
  "IR",
  "IS",
  "IT",
  "JE",
  "JM",
  "JO",
  "JP",
  "KE",
  "KG",
  "KH",
  "KI",
  "KM",
  "KN",
  "KP",
  "KR",
  "KW",
  "KY",
  "KZ",
  "LA",
  "LB",
  "LC",
  "LI",
  "LK",
  "LR",
  "LS",
  "LT",
  "LU",
  "LV",
  "LY",
  "MA",
  "MC",
  "MD",
  "ME",
  "MF",
  "MG",
  "MH",
  "MK",
  "ML",
  "MM",
  "MN",
  "MO",
  "MP",
  "MQ",
  "MR",
  "MS",
  "MT",
  "MU",
  "MV",
  "MW",
  "MX",
  "MY",
  "MZ",
  "NA",
  "NC",
  "NE",
  "NF",
  "NG",
  "NI",
  "NL",
  "NO",
  "NP",
  "NR",
  "NU",
  "NZ",
  "OM",
  "PA",
  "PE",
  "PF",
  "PG",
  "PH",
  "PK",
  "PL",
  "PM",
  "PN",
  "PR",
  "PS",
  "PT",
  "PW",
  "PY",
  "QA",
  "RE",
  "RO",
  "RS",
  "RU",
  "RW",
  "SA",
  "SB",
  "SC",
  "SD",
  "SE",
  "SG",
  "SH",
  "SI",
  "SJ",
  "SK",
  "SL",
  "SM",
  "SN",
  "SO",
  "SR",
  "SS",
  "ST",
  "SV",
  "SX",
  "SY",
  "SZ",
  "TC",
  "TD",
  "TF",
  "TG",
  "TH",
  "TJ",
  "TK",
  "TL",
  "TM",
  "TN",
  "TO",
  "TR",
  "TT",
  "TV",
  "TW",
  "TZ",
  "UA",
  "UG",
  "UM",
  "US",
  "UY",
  "UZ",
  "VA",
  "VC",
  "VE",
  "VG",
  "VI",
  "VN",
  "VU",
  "WF",
  "WS",
  "YE",
  "YT",
  "ZA",
  "ZM",
  "ZW",
]);
export type CountryAlpha2 = typeof CountryAlpha2.Type;

/**
 * CountryAlpha2Input
 */
export const CountryAlpha2Input = Schema.Literals([
  "AD",
  "AE",
  "AF",
  "AG",
  "AI",
  "AL",
  "AM",
  "AO",
  "AQ",
  "AR",
  "AS",
  "AT",
  "AU",
  "AW",
  "AX",
  "AZ",
  "BA",
  "BB",
  "BD",
  "BE",
  "BF",
  "BG",
  "BH",
  "BI",
  "BJ",
  "BL",
  "BM",
  "BN",
  "BO",
  "BQ",
  "BR",
  "BS",
  "BT",
  "BV",
  "BW",
  "BY",
  "BZ",
  "CA",
  "CC",
  "CD",
  "CF",
  "CG",
  "CH",
  "CI",
  "CK",
  "CL",
  "CM",
  "CN",
  "CO",
  "CR",
  "CV",
  "CW",
  "CX",
  "CY",
  "CZ",
  "DE",
  "DJ",
  "DK",
  "DM",
  "DO",
  "DZ",
  "EC",
  "EE",
  "EG",
  "EH",
  "ER",
  "ES",
  "ET",
  "FI",
  "FJ",
  "FK",
  "FM",
  "FO",
  "FR",
  "GA",
  "GB",
  "GD",
  "GE",
  "GF",
  "GG",
  "GH",
  "GI",
  "GL",
  "GM",
  "GN",
  "GP",
  "GQ",
  "GR",
  "GS",
  "GT",
  "GU",
  "GW",
  "GY",
  "HK",
  "HM",
  "HN",
  "HR",
  "HT",
  "HU",
  "ID",
  "IE",
  "IL",
  "IM",
  "IN",
  "IO",
  "IQ",
  "IS",
  "IT",
  "JE",
  "JM",
  "JO",
  "JP",
  "KE",
  "KG",
  "KH",
  "KI",
  "KM",
  "KN",
  "KR",
  "KW",
  "KY",
  "KZ",
  "LA",
  "LB",
  "LC",
  "LI",
  "LK",
  "LR",
  "LS",
  "LT",
  "LU",
  "LV",
  "LY",
  "MA",
  "MC",
  "MD",
  "ME",
  "MF",
  "MG",
  "MH",
  "MK",
  "ML",
  "MM",
  "MN",
  "MO",
  "MP",
  "MQ",
  "MR",
  "MS",
  "MT",
  "MU",
  "MV",
  "MW",
  "MX",
  "MY",
  "MZ",
  "NA",
  "NC",
  "NE",
  "NF",
  "NG",
  "NI",
  "NL",
  "NO",
  "NP",
  "NR",
  "NU",
  "NZ",
  "OM",
  "PA",
  "PE",
  "PF",
  "PG",
  "PH",
  "PK",
  "PL",
  "PM",
  "PN",
  "PR",
  "PS",
  "PT",
  "PW",
  "PY",
  "QA",
  "RE",
  "RO",
  "RS",
  "RW",
  "SA",
  "SB",
  "SC",
  "SD",
  "SE",
  "SG",
  "SH",
  "SI",
  "SJ",
  "SK",
  "SL",
  "SM",
  "SN",
  "SO",
  "SR",
  "SS",
  "ST",
  "SV",
  "SX",
  "SZ",
  "TC",
  "TD",
  "TF",
  "TG",
  "TH",
  "TJ",
  "TK",
  "TL",
  "TM",
  "TN",
  "TO",
  "TR",
  "TT",
  "TV",
  "TW",
  "TZ",
  "UA",
  "UG",
  "UM",
  "US",
  "UY",
  "UZ",
  "VA",
  "VC",
  "VE",
  "VG",
  "VI",
  "VN",
  "VU",
  "WF",
  "WS",
  "YE",
  "YT",
  "ZA",
  "ZM",
  "ZW",
]);
export type CountryAlpha2Input = typeof CountryAlpha2Input.Type;

/**
 * CustomFieldSortProperty
 */
export const CustomFieldSortProperty = Schema.Literals([
  "created_at",
  "-created_at",
  "slug",
  "-slug",
  "name",
  "-name",
  "type",
  "-type",
]);
export type CustomFieldSortProperty = typeof CustomFieldSortProperty.Type;

/**
 * CustomFieldType
 */
export const CustomFieldType = Schema.Literals(["text", "number", "date", "checkbox", "select"]);
export type CustomFieldType = typeof CustomFieldType.Type;

/**
 * CustomerBenefitGrantSortProperty
 */
export const CustomerBenefitGrantSortProperty = Schema.Literals([
  "granted_at",
  "-granted_at",
  "type",
  "-type",
  "organization",
  "-organization",
  "product_benefit",
  "-product_benefit",
]);
export type CustomerBenefitGrantSortProperty = typeof CustomerBenefitGrantSortProperty.Type;

/**
 * CustomerCancellationReason
 */
export const CustomerCancellationReason = Schema.Literals([
  "customer_service",
  "low_quality",
  "missing_features",
  "switched_service",
  "too_complex",
  "too_expensive",
  "unused",
  "other",
]);
export type CustomerCancellationReason = typeof CustomerCancellationReason.Type;

/**
 * CustomerCustomerMeterSortProperty
 */
export const CustomerCustomerMeterSortProperty = Schema.Literals([
  "created_at",
  "-created_at",
  "modified_at",
  "-modified_at",
  "meter_id",
  "-meter_id",
  "meter_name",
  "-meter_name",
  "consumed_units",
  "-consumed_units",
  "credited_units",
  "-credited_units",
  "balance",
  "-balance",
]);
export type CustomerCustomerMeterSortProperty = typeof CustomerCustomerMeterSortProperty.Type;

/**
 * CustomerMeterSortProperty
 */
export const CustomerMeterSortProperty = Schema.Literals([
  "created_at",
  "-created_at",
  "modified_at",
  "-modified_at",
  "customer_id",
  "-customer_id",
  "customer_name",
  "-customer_name",
  "meter_id",
  "-meter_id",
  "meter_name",
  "-meter_name",
  "consumed_units",
  "-consumed_units",
  "credited_units",
  "-credited_units",
  "balance",
  "-balance",
]);
export type CustomerMeterSortProperty = typeof CustomerMeterSortProperty.Type;

/**
 * CustomerOrderSortProperty
 */
export const CustomerOrderSortProperty = Schema.Literals([
  "created_at",
  "-created_at",
  "amount",
  "-amount",
  "net_amount",
  "-net_amount",
  "product",
  "-product",
  "subscription",
  "-subscription",
]);
export type CustomerOrderSortProperty = typeof CustomerOrderSortProperty.Type;

/**
 * CustomerSortProperty
 */
export const CustomerSortProperty = Schema.Literals([
  "created_at",
  "-created_at",
  "email",
  "-email",
  "name",
  "-name",
]);
export type CustomerSortProperty = typeof CustomerSortProperty.Type;

/**
 * CustomerSubscriptionSortProperty
 */
export const CustomerSubscriptionSortProperty = Schema.Literals([
  "started_at",
  "-started_at",
  "amount",
  "-amount",
  "status",
  "-status",
  "organization",
  "-organization",
  "product",
  "-product",
]);
export type CustomerSubscriptionSortProperty = typeof CustomerSubscriptionSortProperty.Type;

/**
 * CustomerType
 */
export const CustomerType = Schema.Literals(["individual", "team"]);
export type CustomerType = typeof CustomerType.Type;

/**
 * CustomerWalletSortProperty
 */
export const CustomerWalletSortProperty = Schema.Literals([
  "created_at",
  "-created_at",
  "balance",
  "-balance",
]);
export type CustomerWalletSortProperty = typeof CustomerWalletSortProperty.Type;

/**
 * DiscountDuration
 */
export const DiscountDuration = Schema.Literals(["once", "forever", "repeating"]);
export type DiscountDuration = typeof DiscountDuration.Type;

/**
 * DiscountSortProperty
 */
export const DiscountSortProperty = Schema.Literals([
  "created_at",
  "-created_at",
  "name",
  "-name",
  "code",
  "-code",
  "redemptions_count",
  "-redemptions_count",
  "ends_at",
  "-ends_at",
]);
export type DiscountSortProperty = typeof DiscountSortProperty.Type;

/**
 * DiscountType
 */
export const DiscountType = Schema.Literals(["fixed", "percentage"]);
export type DiscountType = typeof DiscountType.Type;

/**
 * DisputeSortProperty
 */
export const DisputeSortProperty = Schema.Literals([
  "created_at",
  "-created_at",
  "amount",
  "-amount",
]);
export type DisputeSortProperty = typeof DisputeSortProperty.Type;

/**
 * DisputeStatus
 */
export const DisputeStatus = Schema.Literals([
  "prevented",
  "early_warning",
  "needs_response",
  "under_review",
  "lost",
  "won",
]);
export type DisputeStatus = typeof DisputeStatus.Type;

/**
 * EventNamesSortProperty
 */
export const EventNamesSortProperty = Schema.Literals([
  "name",
  "-name",
  "occurrences",
  "-occurrences",
  "first_seen",
  "-first_seen",
  "last_seen",
  "-last_seen",
]);
export type EventNamesSortProperty = typeof EventNamesSortProperty.Type;

/**
 * EventSortProperty
 */
export const EventSortProperty = Schema.Literals(["timestamp", "-timestamp"]);
export type EventSortProperty = typeof EventSortProperty.Type;

/**
 * EventSource
 */
export const EventSource = Schema.Literals(["system", "user"]);
export type EventSource = typeof EventSource.Type;

/**
 * EventTypesSortProperty
 */
export const EventTypesSortProperty = Schema.Literals([
  "name",
  "-name",
  "label",
  "-label",
  "occurrences",
  "-occurrences",
  "first_seen",
  "-first_seen",
  "last_seen",
  "-last_seen",
]);
export type EventTypesSortProperty = typeof EventTypesSortProperty.Type;

/**
 * FileServiceTypes
 */
export const FileServiceTypes = Schema.Literals([
  "downloadable",
  "product_media",
  "organization_avatar",
  "support_case_attachment",
]);
export type FileServiceTypes = typeof FileServiceTypes.Type;

/**
 * FilterConjunction
 */
export const FilterConjunction = Schema.Literals(["and", "or"]);
export type FilterConjunction = typeof FilterConjunction.Type;

/**
 * FilterOperator
 */
export const FilterOperator = Schema.Literals([
  "eq",
  "ne",
  "gt",
  "gte",
  "lt",
  "lte",
  "like",
  "not_like",
]);
export type FilterOperator = typeof FilterOperator.Type;

/**
 * Func
 */
export const Func = Schema.Literals(["sum", "max", "min", "avg"]);
export type Func = typeof Func.Type;

/**
 * LicenseKeyStatus
 */
export const LicenseKeyStatus = Schema.Literals(["granted", "revoked", "disabled"]);
export type LicenseKeyStatus = typeof LicenseKeyStatus.Type;

/**
 * MemberRole
 */
export const MemberRole = Schema.Literals(["owner", "billing_manager", "member"]);
export type MemberRole = typeof MemberRole.Type;

/**
 * MemberSortProperty
 */
export const MemberSortProperty = Schema.Literals(["created_at", "-created_at"]);
export type MemberSortProperty = typeof MemberSortProperty.Type;

/**
 * MeterSortProperty
 */
export const MeterSortProperty = Schema.Literals(["created_at", "-created_at", "name", "-name"]);
export type MeterSortProperty = typeof MeterSortProperty.Type;

/**
 * MeterUnit
 */
export const MeterUnit = Schema.Literals(["scalar", "token", "custom"]);
export type MeterUnit = typeof MeterUnit.Type;

/**
 * MetricType
 */
export const MetricType = Schema.Literals([
  "scalar",
  "currency",
  "currency_sub_cent",
  "percentage",
]);
export type MetricType = typeof MetricType.Type;

/**
 * OrderBillingReason
 */
export const OrderBillingReason = Schema.Literals([
  "purchase",
  "subscription_create",
  "subscription_cycle",
  "subscription_update",
  "subscription_meter_cycle",
]);
export type OrderBillingReason = typeof OrderBillingReason.Type;

/**
 * OrderExportColumn
 */
export const OrderExportColumn = Schema.Literals([
  "email",
  "created_at",
  "product",
  "net_amount",
  "currency",
  "status",
  "invoice_number",
  "customer_name",
  "billing_name",
  "billing_country",
  "subtotal_amount",
  "discount_amount",
  "tax_amount",
  "total_amount",
  "refunded_amount",
  "billing_reason",
]);
export type OrderExportColumn = typeof OrderExportColumn.Type;

/**
 * OrderSortProperty
 */
export const OrderSortProperty = Schema.Literals([
  "created_at",
  "-created_at",
  "status",
  "-status",
  "invoice_number",
  "-invoice_number",
  "amount",
  "-amount",
  "net_amount",
  "-net_amount",
  "customer",
  "-customer",
  "product",
  "-product",
  "discount",
  "-discount",
  "subscription",
  "-subscription",
]);
export type OrderSortProperty = typeof OrderSortProperty.Type;

/**
 * OrderStatus
 */
export const OrderStatus = Schema.Literals([
  "draft",
  "pending",
  "paid",
  "refunded",
  "partially_refunded",
  "void",
]);
export type OrderStatus = typeof OrderStatus.Type;

/**
 * OrganizationSocialPlatforms
 */
export const OrganizationSocialPlatforms = Schema.Literals([
  "x",
  "github",
  "facebook",
  "instagram",
  "youtube",
  "tiktok",
  "linkedin",
  "threads",
  "discord",
  "other",
]);
export type OrganizationSocialPlatforms = typeof OrganizationSocialPlatforms.Type;

/**
 * OrganizationSortProperty
 */
export const OrganizationSortProperty = Schema.Literals([
  "created_at",
  "-created_at",
  "slug",
  "-slug",
  "name",
  "-name",
  "next_review_threshold",
  "-next_review_threshold",
  "days_in_status",
  "-days_in_status",
]);
export type OrganizationSortProperty = typeof OrganizationSortProperty.Type;

/**
 * OrganizationStatus
 */
export const OrganizationStatus = Schema.Literals([
  "created",
  "review",
  "snoozed",
  "denied",
  "active",
  "blocked",
  "offboarding",
  "offboarded",
]);
export type OrganizationStatus = typeof OrganizationStatus.Type;

/**
 * PaymentProcessor
 */
export const PaymentProcessor = Schema.Literals(["stripe"]);
export type PaymentProcessor = typeof PaymentProcessor.Type;

/**
 * PaymentSortProperty
 */
export const PaymentSortProperty = Schema.Literals([
  "created_at",
  "-created_at",
  "status",
  "-status",
  "amount",
  "-amount",
  "method",
  "-method",
]);
export type PaymentSortProperty = typeof PaymentSortProperty.Type;

/**
 * PaymentStatus
 */
export const PaymentStatus = Schema.Literals(["pending", "succeeded", "failed"]);
export type PaymentStatus = typeof PaymentStatus.Type;

/**
 * PaymentTrigger
 */
export const PaymentTrigger = Schema.Literals([
  "purchase",
  "subscription_cycle",
  "retry_dunning",
  "retry_customer",
  "retry_payment_method_update",
  "retry_admin",
]);
export type PaymentTrigger = typeof PaymentTrigger.Type;

/**
 * Permission
 */
export const Permission = Schema.Literals(["pull", "triage", "push", "maintain", "admin"]);
export type Permission = typeof Permission.Type;

/**
 * PresentmentCurrency
 */
export const PresentmentCurrency = Schema.Literals([
  "aed",
  "all",
  "amd",
  "aoa",
  "ars",
  "aud",
  "awg",
  "azn",
  "bam",
  "bbd",
  "bdt",
  "bif",
  "bmd",
  "bnd",
  "bob",
  "brl",
  "bsd",
  "bwp",
  "bzd",
  "cad",
  "cdf",
  "chf",
  "clp",
  "cny",
  "cop",
  "crc",
  "cve",
  "czk",
  "djf",
  "dkk",
  "dop",
  "dzd",
  "egp",
  "etb",
  "eur",
  "fjd",
  "fkp",
  "gbp",
  "gel",
  "gip",
  "gmd",
  "gnf",
  "gtq",
  "gyd",
  "hkd",
  "hnl",
  "htg",
  "huf",
  "idr",
  "ils",
  "inr",
  "isk",
  "jmd",
  "jpy",
  "kes",
  "kgs",
  "khr",
  "kmf",
  "krw",
  "kyd",
  "kzt",
  "lak",
  "lkr",
  "lrd",
  "lsl",
  "mad",
  "mdl",
  "mga",
  "mkd",
  "mnt",
  "mop",
  "mur",
  "mvr",
  "mwk",
  "mxn",
  "myr",
  "mzn",
  "nad",
  "ngn",
  "nio",
  "nok",
  "npr",
  "nzd",
  "pab",
  "pen",
  "pgk",
  "php",
  "pkr",
  "pln",
  "pyg",
  "qar",
  "ron",
  "rsd",
  "rwf",
  "sar",
  "sbd",
  "scr",
  "sek",
  "sgd",
  "shp",
  "sos",
  "srd",
  "szl",
  "thb",
  "tjs",
  "top",
  "try",
  "ttd",
  "twd",
  "tzs",
  "uah",
  "ugx",
  "usd",
  "uyu",
  "uzs",
  "vnd",
  "vuv",
  "wst",
  "xaf",
  "xcd",
  "xcg",
  "xof",
  "xpf",
  "yer",
  "zar",
  "zmw",
]);
export type PresentmentCurrency = typeof PresentmentCurrency.Type;

/**
 * ProductBillingType
 */
export const ProductBillingType = Schema.Literals(["one_time", "recurring"]);
export type ProductBillingType = typeof ProductBillingType.Type;

/**
 * ProductPriceSource
 */
export const ProductPriceSource = Schema.Literals(["catalog", "ad_hoc"]);
export type ProductPriceSource = typeof ProductPriceSource.Type;

/**
 * ProductSortProperty
 */
export const ProductSortProperty = Schema.Literals([
  "created_at",
  "-created_at",
  "name",
  "-name",
  "price_amount_type",
  "-price_amount_type",
  "price_amount",
  "-price_amount",
]);
export type ProductSortProperty = typeof ProductSortProperty.Type;

/**
 * ProductVisibility
 */
export const ProductVisibility = Schema.Literals(["draft", "private", "public"]);
export type ProductVisibility = typeof ProductVisibility.Type;

/**
 * PublicSubscriptionProrationBehavior
 */
export const PublicSubscriptionProrationBehavior = Schema.Literals([
  "invoice",
  "prorate",
  "next_period",
]);
export type PublicSubscriptionProrationBehavior = typeof PublicSubscriptionProrationBehavior.Type;

/**
 * Reason for the refund.
 */
export const Reason = Schema.Literals([
  "duplicate",
  "fraudulent",
  "customer_request",
  "service_disruption",
  "satisfaction_guarantee",
  "other",
]);
export type Reason = typeof Reason.Type;

/**
 * RecurringInterval
 */
export const RecurringInterval = Schema.Literals(["day", "week", "month", "year"]);
export type RecurringInterval = typeof RecurringInterval.Type;

/**
 * RefundReason
 */
export const RefundReason = Schema.Literals([
  "duplicate",
  "fraudulent",
  "customer_request",
  "service_disruption",
  "satisfaction_guarantee",
  "dispute_prevention",
  "other",
]);
export type RefundReason = typeof RefundReason.Type;

/**
 * RefundSortProperty
 */
export const RefundSortProperty = Schema.Literals([
  "created_at",
  "-created_at",
  "amount",
  "-amount",
]);
export type RefundSortProperty = typeof RefundSortProperty.Type;

/**
 * RefundStatus
 */
export const RefundStatus = Schema.Literals(["pending", "succeeded", "failed", "canceled"]);
export type RefundStatus = typeof RefundStatus.Type;

/**
 * The role of the member within the customer. To assign or transfer ownership, use the member update endpoint.
 */
export const Role = Schema.Literals(["member", "billing_manager"]);
export type Role = typeof Role.Type;

/**
 * Scope
 */
export const Scope = Schema.Literals([
  "openid",
  "profile",
  "email",
  "user:read",
  "user:write",
  "organizations:read",
  "organizations:write",
  "custom_fields:read",
  "custom_fields:write",
  "discounts:read",
  "discounts:write",
  "checkout_links:read",
  "checkout_links:write",
  "checkouts:read",
  "checkouts:write",
  "transactions:read",
  "transactions:write",
  "payouts:read",
  "payouts:write",
  "products:read",
  "products:write",
  "benefits:read",
  "benefits:write",
  "events:read",
  "events:write",
  "meters:read",
  "meters:write",
  "files:read",
  "files:write",
  "subscriptions:read",
  "subscriptions:write",
  "customers:read",
  "customers:write",
  "members:read",
  "members:write",
  "wallets:read",
  "wallets:write",
  "disputes:read",
  "disputes:write",
  "customer_meters:read",
  "customer_sessions:write",
  "member_sessions:write",
  "customer_seats:read",
  "customer_seats:write",
  "orders:read",
  "orders:write",
  "refunds:read",
  "refunds:write",
  "payments:read",
  "metrics:read",
  "metrics:write",
  "webhooks:read",
  "webhooks:write",
  "license_keys:read",
  "license_keys:write",
  "customer_portal:read",
  "customer_portal:write",
  "notifications:read",
  "notifications:write",
  "notification_recipients:read",
  "notification_recipients:write",
  "organization_access_tokens:read",
  "organization_access_tokens:write",
]);
export type Scope = typeof Scope.Type;

/**
 * SeatStatus
 */
export const SeatStatus = Schema.Literals(["pending", "claimed", "revoked"]);
export type SeatStatus = typeof SeatStatus.Type;

/**
 * SeatTierType
 */
export const SeatTierType = Schema.Literals(["volume", "graduated"]);
export type SeatTierType = typeof SeatTierType.Type;

/**
 * Status
 */
export const Status = Schema.Literals(["granted", "disabled"]);
export type Status = typeof Status.Type;

/**
 * SubType
 */
export const SubType = Schema.Literals(["user", "organization"]);
export type SubType = typeof SubType.Type;

/**
 * SubscriptionExportColumn
 */
export const SubscriptionExportColumn = Schema.Literals([
  "email",
  "started_at",
  "product",
  "amount",
  "currency",
  "status",
  "recurring_interval",
  "customer_name",
  "billing_name",
  "billing_country",
  "net_amount",
  "discount",
  "seats",
  "current_period_start",
  "current_period_end",
  "cancel_at_period_end",
  "canceled_at",
  "ends_at",
  "ended_at",
  "cancellation_reason",
  "trial_start",
  "trial_end",
]);
export type SubscriptionExportColumn = typeof SubscriptionExportColumn.Type;

/**
 * SubscriptionProrationBehavior
 */
export const SubscriptionProrationBehavior = Schema.Literals([
  "invoice",
  "prorate",
  "next_period",
  "reset",
]);
export type SubscriptionProrationBehavior = typeof SubscriptionProrationBehavior.Type;

/**
 * SubscriptionSortProperty
 */
export const SubscriptionSortProperty = Schema.Literals([
  "customer",
  "-customer",
  "status",
  "-status",
  "started_at",
  "-started_at",
  "current_period_end",
  "-current_period_end",
  "ended_at",
  "-ended_at",
  "ends_at",
  "-ends_at",
  "amount",
  "-amount",
  "product",
  "-product",
  "discount",
  "-discount",
]);
export type SubscriptionSortProperty = typeof SubscriptionSortProperty.Type;

/**
 * SubscriptionStatus
 */
export const SubscriptionStatus = Schema.Literals([
  "incomplete",
  "incomplete_expired",
  "trialing",
  "active",
  "past_due",
  "canceled",
  "unpaid",
  "paused",
]);
export type SubscriptionStatus = typeof SubscriptionStatus.Type;

/**
 * TaxBehavior
 */
export const TaxBehavior = Schema.Literals(["inclusive", "exclusive"]);
export type TaxBehavior = typeof TaxBehavior.Type;

/**
 * TaxBehaviorOption
 */
export const TaxBehaviorOption = Schema.Literals(["location", "inclusive", "exclusive"]);
export type TaxBehaviorOption = typeof TaxBehaviorOption.Type;

/**
 * TierType
 */
export const TierType = Schema.Literals(["volume", "graduated"]);
export type TierType = typeof TierType.Type;

/**
 * TimeInterval
 */
export const TimeInterval = Schema.Literals(["year", "month", "week", "day", "hour"]);
export type TimeInterval = typeof TimeInterval.Type;

/**
 * Timeframe
 */
export const Timeframe = Schema.Literals(["year", "month", "day"]);
export type Timeframe = typeof Timeframe.Type;

/**
 * Timezone to use for the timestamps. Default is UTC.
 */
export const Timezone = Schema.Literals([
  "Africa/Abidjan",
  "Africa/Accra",
  "Africa/Addis_Ababa",
  "Africa/Algiers",
  "Africa/Asmara",
  "Africa/Asmera",
  "Africa/Bamako",
  "Africa/Bangui",
  "Africa/Banjul",
  "Africa/Bissau",
  "Africa/Blantyre",
  "Africa/Brazzaville",
  "Africa/Bujumbura",
  "Africa/Cairo",
  "Africa/Casablanca",
  "Africa/Ceuta",
  "Africa/Conakry",
  "Africa/Dakar",
  "Africa/Dar_es_Salaam",
  "Africa/Djibouti",
  "Africa/Douala",
  "Africa/El_Aaiun",
  "Africa/Freetown",
  "Africa/Gaborone",
  "Africa/Harare",
  "Africa/Johannesburg",
  "Africa/Juba",
  "Africa/Kampala",
  "Africa/Khartoum",
  "Africa/Kigali",
  "Africa/Kinshasa",
  "Africa/Lagos",
  "Africa/Libreville",
  "Africa/Lome",
  "Africa/Luanda",
  "Africa/Lubumbashi",
  "Africa/Lusaka",
  "Africa/Malabo",
  "Africa/Maputo",
  "Africa/Maseru",
  "Africa/Mbabane",
  "Africa/Mogadishu",
  "Africa/Monrovia",
  "Africa/Nairobi",
  "Africa/Ndjamena",
  "Africa/Niamey",
  "Africa/Nouakchott",
  "Africa/Ouagadougou",
  "Africa/Porto-Novo",
  "Africa/Sao_Tome",
  "Africa/Timbuktu",
  "Africa/Tripoli",
  "Africa/Tunis",
  "Africa/Windhoek",
  "America/Adak",
  "America/Anchorage",
  "America/Anguilla",
  "America/Antigua",
  "America/Araguaina",
  "America/Argentina/Buenos_Aires",
  "America/Argentina/Catamarca",
  "America/Argentina/ComodRivadavia",
  "America/Argentina/Cordoba",
  "America/Argentina/Jujuy",
  "America/Argentina/La_Rioja",
  "America/Argentina/Mendoza",
  "America/Argentina/Rio_Gallegos",
  "America/Argentina/Salta",
  "America/Argentina/San_Juan",
  "America/Argentina/San_Luis",
  "America/Argentina/Tucuman",
  "America/Argentina/Ushuaia",
  "America/Aruba",
  "America/Asuncion",
  "America/Atikokan",
  "America/Atka",
  "America/Bahia",
  "America/Bahia_Banderas",
  "America/Barbados",
  "America/Belem",
  "America/Belize",
  "America/Blanc-Sablon",
  "America/Boa_Vista",
  "America/Bogota",
  "America/Boise",
  "America/Buenos_Aires",
  "America/Cambridge_Bay",
  "America/Campo_Grande",
  "America/Cancun",
  "America/Caracas",
  "America/Catamarca",
  "America/Cayenne",
  "America/Cayman",
  "America/Chicago",
  "America/Chihuahua",
  "America/Ciudad_Juarez",
  "America/Coral_Harbour",
  "America/Cordoba",
  "America/Costa_Rica",
  "America/Coyhaique",
  "America/Creston",
  "America/Cuiaba",
  "America/Curacao",
  "America/Danmarkshavn",
  "America/Dawson",
  "America/Dawson_Creek",
  "America/Denver",
  "America/Detroit",
  "America/Dominica",
  "America/Edmonton",
  "America/Eirunepe",
  "America/El_Salvador",
  "America/Ensenada",
  "America/Fort_Nelson",
  "America/Fort_Wayne",
  "America/Fortaleza",
  "America/Glace_Bay",
  "America/Godthab",
  "America/Goose_Bay",
  "America/Grand_Turk",
  "America/Grenada",
  "America/Guadeloupe",
  "America/Guatemala",
  "America/Guayaquil",
  "America/Guyana",
  "America/Halifax",
  "America/Havana",
  "America/Hermosillo",
  "America/Indiana/Indianapolis",
  "America/Indiana/Knox",
  "America/Indiana/Marengo",
  "America/Indiana/Petersburg",
  "America/Indiana/Tell_City",
  "America/Indiana/Vevay",
  "America/Indiana/Vincennes",
  "America/Indiana/Winamac",
  "America/Indianapolis",
  "America/Inuvik",
  "America/Iqaluit",
  "America/Jamaica",
  "America/Jujuy",
  "America/Juneau",
  "America/Kentucky/Louisville",
  "America/Kentucky/Monticello",
  "America/Knox_IN",
  "America/Kralendijk",
  "America/La_Paz",
  "America/Lima",
  "America/Los_Angeles",
  "America/Louisville",
  "America/Lower_Princes",
  "America/Maceio",
  "America/Managua",
  "America/Manaus",
  "America/Marigot",
  "America/Martinique",
  "America/Matamoros",
  "America/Mazatlan",
  "America/Mendoza",
  "America/Menominee",
  "America/Merida",
  "America/Metlakatla",
  "America/Mexico_City",
  "America/Miquelon",
  "America/Moncton",
  "America/Monterrey",
  "America/Montevideo",
  "America/Montreal",
  "America/Montserrat",
  "America/Nassau",
  "America/New_York",
  "America/Nipigon",
  "America/Nome",
  "America/Noronha",
  "America/North_Dakota/Beulah",
  "America/North_Dakota/Center",
  "America/North_Dakota/New_Salem",
  "America/Nuuk",
  "America/Ojinaga",
  "America/Panama",
  "America/Pangnirtung",
  "America/Paramaribo",
  "America/Phoenix",
  "America/Port-au-Prince",
  "America/Port_of_Spain",
  "America/Porto_Acre",
  "America/Porto_Velho",
  "America/Puerto_Rico",
  "America/Punta_Arenas",
  "America/Rainy_River",
  "America/Rankin_Inlet",
  "America/Recife",
  "America/Regina",
  "America/Resolute",
  "America/Rio_Branco",
  "America/Rosario",
  "America/Santa_Isabel",
  "America/Santarem",
  "America/Santiago",
  "America/Santo_Domingo",
  "America/Sao_Paulo",
  "America/Scoresbysund",
  "America/Shiprock",
  "America/Sitka",
  "America/St_Barthelemy",
  "America/St_Johns",
  "America/St_Kitts",
  "America/St_Lucia",
  "America/St_Thomas",
  "America/St_Vincent",
  "America/Swift_Current",
  "America/Tegucigalpa",
  "America/Thule",
  "America/Thunder_Bay",
  "America/Tijuana",
  "America/Toronto",
  "America/Tortola",
  "America/Vancouver",
  "America/Virgin",
  "America/Whitehorse",
  "America/Winnipeg",
  "America/Yakutat",
  "America/Yellowknife",
  "Antarctica/Casey",
  "Antarctica/Davis",
  "Antarctica/DumontDUrville",
  "Antarctica/Macquarie",
  "Antarctica/Mawson",
  "Antarctica/McMurdo",
  "Antarctica/Palmer",
  "Antarctica/Rothera",
  "Antarctica/South_Pole",
  "Antarctica/Syowa",
  "Antarctica/Troll",
  "Antarctica/Vostok",
  "Arctic/Longyearbyen",
  "Asia/Aden",
  "Asia/Almaty",
  "Asia/Amman",
  "Asia/Anadyr",
  "Asia/Aqtau",
  "Asia/Aqtobe",
  "Asia/Ashgabat",
  "Asia/Ashkhabad",
  "Asia/Atyrau",
  "Asia/Baghdad",
  "Asia/Bahrain",
  "Asia/Baku",
  "Asia/Bangkok",
  "Asia/Barnaul",
  "Asia/Beirut",
  "Asia/Bishkek",
  "Asia/Brunei",
  "Asia/Calcutta",
  "Asia/Chita",
  "Asia/Choibalsan",
  "Asia/Chongqing",
  "Asia/Chungking",
  "Asia/Colombo",
  "Asia/Dacca",
  "Asia/Damascus",
  "Asia/Dhaka",
  "Asia/Dili",
  "Asia/Dubai",
  "Asia/Dushanbe",
  "Asia/Famagusta",
  "Asia/Gaza",
  "Asia/Harbin",
  "Asia/Hebron",
  "Asia/Ho_Chi_Minh",
  "Asia/Hong_Kong",
  "Asia/Hovd",
  "Asia/Irkutsk",
  "Asia/Istanbul",
  "Asia/Jakarta",
  "Asia/Jayapura",
  "Asia/Jerusalem",
  "Asia/Kabul",
  "Asia/Kamchatka",
  "Asia/Karachi",
  "Asia/Kashgar",
  "Asia/Kathmandu",
  "Asia/Katmandu",
  "Asia/Khandyga",
  "Asia/Kolkata",
  "Asia/Krasnoyarsk",
  "Asia/Kuala_Lumpur",
  "Asia/Kuching",
  "Asia/Kuwait",
  "Asia/Macao",
  "Asia/Macau",
  "Asia/Magadan",
  "Asia/Makassar",
  "Asia/Manila",
  "Asia/Muscat",
  "Asia/Nicosia",
  "Asia/Novokuznetsk",
  "Asia/Novosibirsk",
  "Asia/Omsk",
  "Asia/Oral",
  "Asia/Phnom_Penh",
  "Asia/Pontianak",
  "Asia/Pyongyang",
  "Asia/Qatar",
  "Asia/Qostanay",
  "Asia/Qyzylorda",
  "Asia/Rangoon",
  "Asia/Riyadh",
  "Asia/Saigon",
  "Asia/Sakhalin",
  "Asia/Samarkand",
  "Asia/Seoul",
  "Asia/Shanghai",
  "Asia/Singapore",
  "Asia/Srednekolymsk",
  "Asia/Taipei",
  "Asia/Tashkent",
  "Asia/Tbilisi",
  "Asia/Tehran",
  "Asia/Tel_Aviv",
  "Asia/Thimbu",
  "Asia/Thimphu",
  "Asia/Tokyo",
  "Asia/Tomsk",
  "Asia/Ujung_Pandang",
  "Asia/Ulaanbaatar",
  "Asia/Ulan_Bator",
  "Asia/Urumqi",
  "Asia/Ust-Nera",
  "Asia/Vientiane",
  "Asia/Vladivostok",
  "Asia/Yakutsk",
  "Asia/Yangon",
  "Asia/Yekaterinburg",
  "Asia/Yerevan",
  "Atlantic/Azores",
  "Atlantic/Bermuda",
  "Atlantic/Canary",
  "Atlantic/Cape_Verde",
  "Atlantic/Faeroe",
  "Atlantic/Faroe",
  "Atlantic/Jan_Mayen",
  "Atlantic/Madeira",
  "Atlantic/Reykjavik",
  "Atlantic/South_Georgia",
  "Atlantic/St_Helena",
  "Atlantic/Stanley",
  "Australia/ACT",
  "Australia/Adelaide",
  "Australia/Brisbane",
  "Australia/Broken_Hill",
  "Australia/Canberra",
  "Australia/Currie",
  "Australia/Darwin",
  "Australia/Eucla",
  "Australia/Hobart",
  "Australia/LHI",
  "Australia/Lindeman",
  "Australia/Lord_Howe",
  "Australia/Melbourne",
  "Australia/NSW",
  "Australia/North",
  "Australia/Perth",
  "Australia/Queensland",
  "Australia/South",
  "Australia/Sydney",
  "Australia/Tasmania",
  "Australia/Victoria",
  "Australia/West",
  "Australia/Yancowinna",
  "Brazil/Acre",
  "Brazil/DeNoronha",
  "Brazil/East",
  "Brazil/West",
  "CET",
  "CST6CDT",
  "Canada/Atlantic",
  "Canada/Central",
  "Canada/Eastern",
  "Canada/Mountain",
  "Canada/Newfoundland",
  "Canada/Pacific",
  "Canada/Saskatchewan",
  "Canada/Yukon",
  "Chile/Continental",
  "Chile/EasterIsland",
  "Cuba",
  "EET",
  "EST",
  "EST5EDT",
  "Egypt",
  "Eire",
  "Etc/GMT",
  "Etc/GMT+0",
  "Etc/GMT+1",
  "Etc/GMT+10",
  "Etc/GMT+11",
  "Etc/GMT+12",
  "Etc/GMT+2",
  "Etc/GMT+3",
  "Etc/GMT+4",
  "Etc/GMT+5",
  "Etc/GMT+6",
  "Etc/GMT+7",
  "Etc/GMT+8",
  "Etc/GMT+9",
  "Etc/GMT-0",
  "Etc/GMT-1",
  "Etc/GMT-10",
  "Etc/GMT-11",
  "Etc/GMT-12",
  "Etc/GMT-13",
  "Etc/GMT-14",
  "Etc/GMT-2",
  "Etc/GMT-3",
  "Etc/GMT-4",
  "Etc/GMT-5",
  "Etc/GMT-6",
  "Etc/GMT-7",
  "Etc/GMT-8",
  "Etc/GMT-9",
  "Etc/GMT0",
  "Etc/Greenwich",
  "Etc/UCT",
  "Etc/UTC",
  "Etc/Universal",
  "Etc/Zulu",
  "Europe/Amsterdam",
  "Europe/Andorra",
  "Europe/Astrakhan",
  "Europe/Athens",
  "Europe/Belfast",
  "Europe/Belgrade",
  "Europe/Berlin",
  "Europe/Bratislava",
  "Europe/Brussels",
  "Europe/Bucharest",
  "Europe/Budapest",
  "Europe/Busingen",
  "Europe/Chisinau",
  "Europe/Copenhagen",
  "Europe/Dublin",
  "Europe/Gibraltar",
  "Europe/Guernsey",
  "Europe/Helsinki",
  "Europe/Isle_of_Man",
  "Europe/Istanbul",
  "Europe/Jersey",
  "Europe/Kaliningrad",
  "Europe/Kiev",
  "Europe/Kirov",
  "Europe/Kyiv",
  "Europe/Lisbon",
  "Europe/Ljubljana",
  "Europe/London",
  "Europe/Luxembourg",
  "Europe/Madrid",
  "Europe/Malta",
  "Europe/Mariehamn",
  "Europe/Minsk",
  "Europe/Monaco",
  "Europe/Moscow",
  "Europe/Nicosia",
  "Europe/Oslo",
  "Europe/Paris",
  "Europe/Podgorica",
  "Europe/Prague",
  "Europe/Riga",
  "Europe/Rome",
  "Europe/Samara",
  "Europe/San_Marino",
  "Europe/Sarajevo",
  "Europe/Saratov",
  "Europe/Simferopol",
  "Europe/Skopje",
  "Europe/Sofia",
  "Europe/Stockholm",
  "Europe/Tallinn",
  "Europe/Tirane",
  "Europe/Tiraspol",
  "Europe/Ulyanovsk",
  "Europe/Uzhgorod",
  "Europe/Vaduz",
  "Europe/Vatican",
  "Europe/Vienna",
  "Europe/Vilnius",
  "Europe/Volgograd",
  "Europe/Warsaw",
  "Europe/Zagreb",
  "Europe/Zaporozhye",
  "Europe/Zurich",
  "Factory",
  "GB",
  "GB-Eire",
  "GMT",
  "GMT+0",
  "GMT-0",
  "GMT0",
  "Greenwich",
  "HST",
  "Hongkong",
  "Iceland",
  "Indian/Antananarivo",
  "Indian/Chagos",
  "Indian/Christmas",
  "Indian/Cocos",
  "Indian/Comoro",
  "Indian/Kerguelen",
  "Indian/Mahe",
  "Indian/Maldives",
  "Indian/Mauritius",
  "Indian/Mayotte",
  "Indian/Reunion",
  "Iran",
  "Israel",
  "Jamaica",
  "Japan",
  "Kwajalein",
  "Libya",
  "MET",
  "MST",
  "MST7MDT",
  "Mexico/BajaNorte",
  "Mexico/BajaSur",
  "Mexico/General",
  "NZ",
  "NZ-CHAT",
  "Navajo",
  "PRC",
  "PST8PDT",
  "Pacific/Apia",
  "Pacific/Auckland",
  "Pacific/Bougainville",
  "Pacific/Chatham",
  "Pacific/Chuuk",
  "Pacific/Easter",
  "Pacific/Efate",
  "Pacific/Enderbury",
  "Pacific/Fakaofo",
  "Pacific/Fiji",
  "Pacific/Funafuti",
  "Pacific/Galapagos",
  "Pacific/Gambier",
  "Pacific/Guadalcanal",
  "Pacific/Guam",
  "Pacific/Honolulu",
  "Pacific/Johnston",
  "Pacific/Kanton",
  "Pacific/Kiritimati",
  "Pacific/Kosrae",
  "Pacific/Kwajalein",
  "Pacific/Majuro",
  "Pacific/Marquesas",
  "Pacific/Midway",
  "Pacific/Nauru",
  "Pacific/Niue",
  "Pacific/Norfolk",
  "Pacific/Noumea",
  "Pacific/Pago_Pago",
  "Pacific/Palau",
  "Pacific/Pitcairn",
  "Pacific/Pohnpei",
  "Pacific/Ponape",
  "Pacific/Port_Moresby",
  "Pacific/Rarotonga",
  "Pacific/Saipan",
  "Pacific/Samoa",
  "Pacific/Tahiti",
  "Pacific/Tarawa",
  "Pacific/Tongatapu",
  "Pacific/Truk",
  "Pacific/Wake",
  "Pacific/Wallis",
  "Pacific/Yap",
  "Poland",
  "Portugal",
  "ROC",
  "ROK",
  "Singapore",
  "Turkey",
  "UCT",
  "US/Alaska",
  "US/Aleutian",
  "US/Arizona",
  "US/Central",
  "US/East-Indiana",
  "US/Eastern",
  "US/Hawaii",
  "US/Indiana-Starke",
  "US/Michigan",
  "US/Mountain",
  "US/Pacific",
  "US/Samoa",
  "UTC",
  "Universal",
  "W-SU",
  "WET",
  "Zulu",
]);
export type Timezone = typeof Timezone.Type;

/**
 * TokenEndpointAuthMethod
 */
export const TokenEndpointAuthMethod = Schema.Literals([
  "client_secret_basic",
  "client_secret_post",
  "none",
]);
export type TokenEndpointAuthMethod = typeof TokenEndpointAuthMethod.Type;

/**
 * TokenType
 */
export const TokenType = Schema.Literals(["access_token", "refresh_token"]);
export type TokenType = typeof TokenType.Type;

/**
 * TrialInterval
 */
export const TrialInterval = Schema.Literals(["day", "week", "month", "year"]);
export type TrialInterval = typeof TrialInterval.Type;

/**
 * WebhookEventType
 */
export const WebhookEventType = Schema.Literals([
  "checkout.created",
  "checkout.updated",
  "checkout.expired",
  "customer.created",
  "customer.updated",
  "customer.deleted",
  "customer.state_changed",
  "customer_seat.assigned",
  "customer_seat.claimed",
  "customer_seat.revoked",
  "member.created",
  "member.updated",
  "member.deleted",
  "order.created",
  "order.updated",
  "order.paid",
  "order.refunded",
  "subscription.created",
  "subscription.updated",
  "subscription.active",
  "subscription.canceled",
  "subscription.uncanceled",
  "subscription.cycled",
  "subscription.revoked",
  "subscription.past_due",
  "subscription.paused",
  "subscription.resumed",
  "subscription.migrated",
  "refund.created",
  "refund.updated",
  "product.created",
  "product.updated",
  "discount.created",
  "discount.updated",
  "discount.deleted",
  "benefit.created",
  "benefit.updated",
  "benefit_grant.created",
  "benefit_grant.cycled",
  "benefit_grant.updated",
  "benefit_grant.revoked",
  "organization.updated",
]);
export type WebhookEventType = typeof WebhookEventType.Type;

/**
 * WebhookFormat
 */
export const WebhookFormat = Schema.Literals(["raw", "discord", "slack"]);
export type WebhookFormat = typeof WebhookFormat.Type;

/**
 * Address
 */
export class Address extends Schema.Opaque<Address>()(
  Schema.Struct({
    line1: Schema.optionalKey(Schema.NullOr(Schema.String)),
    line2: Schema.optionalKey(Schema.NullOr(Schema.String)),
    postal_code: Schema.optionalKey(Schema.NullOr(Schema.String)),
    city: Schema.optionalKey(Schema.NullOr(Schema.String)),
    state: Schema.optionalKey(Schema.NullOr(Schema.String)),
    country: openEnum(CountryAlpha2),
  }),
) {}

/**
 * AddressDict
 */
export class AddressDict extends Schema.Opaque<AddressDict>()(
  Schema.Struct({
    line1: Schema.optionalKey(Schema.String),
    line2: Schema.optionalKey(Schema.String),
    postal_code: Schema.optionalKey(Schema.String),
    city: Schema.optionalKey(Schema.String),
    state: Schema.optionalKey(Schema.String),
    country: Schema.String,
  }),
) {}

/**
 * AddressInput
 */
export class AddressInput extends Schema.Opaque<AddressInput>()(
  Schema.Struct({
    line1: Schema.optionalKey(Schema.NullOr(Schema.String)),
    line2: Schema.optionalKey(Schema.NullOr(Schema.String)),
    postal_code: Schema.optionalKey(Schema.NullOr(Schema.String)),
    city: Schema.optionalKey(Schema.NullOr(Schema.String)),
    state: Schema.optionalKey(Schema.NullOr(Schema.String)),
    country: CountryAlpha2Input,
  }),
) {}

/**
 * AlreadyActiveSubscriptionError
 */
export class AlreadyActiveSubscriptionError extends Schema.Opaque<AlreadyActiveSubscriptionError>()(
  Schema.Struct({
    error: Schema.Literal("AlreadyActiveSubscriptionError"),
    detail: Schema.String,
  }),
) {}

/**
 * AlreadyCanceledSubscription
 */
export class AlreadyCanceledSubscription extends Schema.Opaque<AlreadyCanceledSubscription>()(
  Schema.Struct({
    error: Schema.Literal("AlreadyCanceledSubscription"),
    detail: Schema.String,
  }),
) {}

/**
 * AmbiguousExternalCustomerID
 */
export class AmbiguousExternalCustomerID extends Schema.Opaque<AmbiguousExternalCustomerID>()(
  Schema.Struct({
    error: Schema.Literal("AmbiguousExternalCustomerID"),
    detail: Schema.String,
  }),
) {}

/**
 * CustomFieldCheckboxProperties
 */
export class CustomFieldCheckboxProperties extends Schema.Opaque<CustomFieldCheckboxProperties>()(
  Schema.Struct({
    form_label: Schema.optionalKey(Schema.String),
    form_help_text: Schema.optionalKey(Schema.String),
    form_placeholder: Schema.optionalKey(Schema.String),
  }),
) {}

/**
 * MetadataOutputType
 */
export class MetadataOutputType extends Schema.Opaque<MetadataOutputType>()(
  Schema.Record(Schema.String, Schema.Union([Schema.String, Schema.Number, Schema.Boolean])),
) {}

/**
 * Schema for a custom field of type checkbox.
 */
export class CustomFieldCheckbox extends Schema.Opaque<CustomFieldCheckbox>()(
  Schema.Struct({
    /** Creation timestamp of the object. */
    created_at: Schema.DateTimeUtcFromString,
    /** Last modification timestamp of the object. */
    modified_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** The ID of the object. */
    id: Schema.String,
    metadata: MetadataOutputType,
    type: Schema.Literal("checkbox"),
    /** Identifier of the custom field. It'll be used as key when storing the value. */
    slug: Schema.String,
    /** Name of the custom field. */
    name: Schema.String,
    /** The ID of the organization owning the custom field. */
    organization_id: Schema.String,
    properties: CustomFieldCheckboxProperties,
  }),
) {}

/**
 * CustomFieldDateProperties
 */
export class CustomFieldDateProperties extends Schema.Opaque<CustomFieldDateProperties>()(
  Schema.Struct({
    form_label: Schema.optionalKey(Schema.String),
    form_help_text: Schema.optionalKey(Schema.String),
    form_placeholder: Schema.optionalKey(Schema.String),
    ge: Schema.optionalKey(Schema.Number),
    le: Schema.optionalKey(Schema.Number),
  }),
) {}

/**
 * Schema for a custom field of type date.
 */
export class CustomFieldDate extends Schema.Opaque<CustomFieldDate>()(
  Schema.Struct({
    /** Creation timestamp of the object. */
    created_at: Schema.DateTimeUtcFromString,
    /** Last modification timestamp of the object. */
    modified_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** The ID of the object. */
    id: Schema.String,
    metadata: MetadataOutputType,
    type: Schema.Literal("date"),
    /** Identifier of the custom field. It'll be used as key when storing the value. */
    slug: Schema.String,
    /** Name of the custom field. */
    name: Schema.String,
    /** The ID of the organization owning the custom field. */
    organization_id: Schema.String,
    properties: CustomFieldDateProperties,
  }),
) {}

/**
 * CustomFieldNumberProperties
 */
export class CustomFieldNumberProperties extends Schema.Opaque<CustomFieldNumberProperties>()(
  Schema.Struct({
    form_label: Schema.optionalKey(Schema.String),
    form_help_text: Schema.optionalKey(Schema.String),
    form_placeholder: Schema.optionalKey(Schema.String),
    ge: Schema.optionalKey(Schema.Number),
    le: Schema.optionalKey(Schema.Number),
  }),
) {}

/**
 * Schema for a custom field of type number.
 */
export class CustomFieldNumber extends Schema.Opaque<CustomFieldNumber>()(
  Schema.Struct({
    /** Creation timestamp of the object. */
    created_at: Schema.DateTimeUtcFromString,
    /** Last modification timestamp of the object. */
    modified_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** The ID of the object. */
    id: Schema.String,
    metadata: MetadataOutputType,
    type: Schema.Literal("number"),
    /** Identifier of the custom field. It'll be used as key when storing the value. */
    slug: Schema.String,
    /** Name of the custom field. */
    name: Schema.String,
    /** The ID of the organization owning the custom field. */
    organization_id: Schema.String,
    properties: CustomFieldNumberProperties,
  }),
) {}

/**
 * CustomFieldSelectOption
 */
export class CustomFieldSelectOption extends Schema.Opaque<CustomFieldSelectOption>()(
  Schema.Struct({
    value: Schema.String,
    label: Schema.String,
  }),
) {}

/**
 * CustomFieldSelectProperties
 */
export class CustomFieldSelectProperties extends Schema.Opaque<CustomFieldSelectProperties>()(
  Schema.Struct({
    form_label: Schema.optionalKey(Schema.String),
    form_help_text: Schema.optionalKey(Schema.String),
    form_placeholder: Schema.optionalKey(Schema.String),
    options: Schema.Array(CustomFieldSelectOption),
  }),
) {}

/**
 * Schema for a custom field of type select.
 */
export class CustomFieldSelect extends Schema.Opaque<CustomFieldSelect>()(
  Schema.Struct({
    /** Creation timestamp of the object. */
    created_at: Schema.DateTimeUtcFromString,
    /** Last modification timestamp of the object. */
    modified_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** The ID of the object. */
    id: Schema.String,
    metadata: MetadataOutputType,
    type: Schema.Literal("select"),
    /** Identifier of the custom field. It'll be used as key when storing the value. */
    slug: Schema.String,
    /** Name of the custom field. */
    name: Schema.String,
    /** The ID of the organization owning the custom field. */
    organization_id: Schema.String,
    properties: CustomFieldSelectProperties,
  }),
) {}

/**
 * CustomFieldTextProperties
 */
export class CustomFieldTextProperties extends Schema.Opaque<CustomFieldTextProperties>()(
  Schema.Struct({
    form_label: Schema.optionalKey(Schema.String),
    form_help_text: Schema.optionalKey(Schema.String),
    form_placeholder: Schema.optionalKey(Schema.String),
    textarea: Schema.optionalKey(Schema.Boolean),
    min_length: Schema.optionalKey(Schema.Number),
    max_length: Schema.optionalKey(Schema.Number),
  }),
) {}

/**
 * Schema for a custom field of type text.
 */
export class CustomFieldText extends Schema.Opaque<CustomFieldText>()(
  Schema.Struct({
    /** Creation timestamp of the object. */
    created_at: Schema.DateTimeUtcFromString,
    /** Last modification timestamp of the object. */
    modified_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** The ID of the object. */
    id: Schema.String,
    metadata: MetadataOutputType,
    type: Schema.Literal("text"),
    /** Identifier of the custom field. It'll be used as key when storing the value. */
    slug: Schema.String,
    /** Name of the custom field. */
    name: Schema.String,
    /** The ID of the organization owning the custom field. */
    organization_id: Schema.String,
    properties: CustomFieldTextProperties,
  }),
) {}

/**
 * CustomField
 */
export const CustomField = openUnion(
  [CustomFieldText, CustomFieldNumber, CustomFieldDate, CustomFieldCheckbox, CustomFieldSelect],
  "type",
  ["checkbox", "date", "number", "select", "text"],
);
export type CustomField = typeof CustomField.Type;

/**
 * Schema of a custom field attached to a resource.
 */
export class AttachedCustomField extends Schema.Opaque<AttachedCustomField>()(
  Schema.Struct({
    /** ID of the custom field. */
    custom_field_id: Schema.String,
    custom_field: CustomField,
    /** Order of the custom field in the resource. */
    order: Schema.Number,
    /** Whether the value is required for this custom field. */
    required: Schema.Boolean,
  }),
) {}

/**
 * Schema to attach a custom field to a resource.
 */
export class AttachedCustomFieldCreate extends Schema.Opaque<AttachedCustomFieldCreate>()(
  Schema.Struct({
    /** ID of the custom field to attach. */
    custom_field_id: Schema.String,
    /** Whether the value is required for this custom field. */
    required: Schema.Boolean,
  }),
) {}

/**
 * AuthorizeOrganization
 */
export class AuthorizeOrganization extends Schema.Opaque<AuthorizeOrganization>()(
  Schema.Struct({
    id: Schema.String,
    slug: Schema.String,
    name: Schema.String,
    avatar_url: Schema.NullOr(Schema.String),
  }),
) {}

/**
 * OAuth2ClientPublic
 */
export class OAuth2ClientPublic extends Schema.Opaque<OAuth2ClientPublic>()(
  Schema.Struct({
    /** Creation timestamp of the object. */
    created_at: Schema.DateTimeUtcFromString,
    /** Last modification timestamp of the object. */
    modified_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    client_id: Schema.String,
    client_name: Schema.NullOr(Schema.String),
    client_uri: Schema.NullOr(Schema.String),
    logo_uri: Schema.NullOr(Schema.String),
    tos_uri: Schema.NullOr(Schema.String),
    policy_uri: Schema.NullOr(Schema.String),
  }),
) {}

/**
 * AuthorizeResponseOrganization
 */
export class AuthorizeResponseOrganization extends Schema.Opaque<AuthorizeResponseOrganization>()(
  Schema.Struct({
    client: OAuth2ClientPublic,
    sub_type: Schema.Literal("organization"),
    sub: Schema.NullOr(AuthorizeOrganization),
    scopes: Schema.Array(openEnum(Scope)),
    organizations: Schema.Array(AuthorizeOrganization),
    requires_single_organization: Schema.optionalKey(Schema.Boolean),
    scope_display_names: Schema.optionalKey(Schema.Record(Schema.String, Schema.String)),
  }),
) {}

/**
 * AuthorizeUser
 */
export class AuthorizeUser extends Schema.Opaque<AuthorizeUser>()(
  Schema.Struct({
    id: Schema.String,
    email: Schema.String,
    avatar_url: Schema.NullOr(Schema.String),
  }),
) {}

/**
 * AuthorizeResponseUser
 */
export class AuthorizeResponseUser extends Schema.Opaque<AuthorizeResponseUser>()(
  Schema.Struct({
    client: OAuth2ClientPublic,
    sub_type: Schema.Literal("user"),
    sub: Schema.NullOr(AuthorizeUser),
    scopes: Schema.Array(openEnum(Scope)),
    organizations: Schema.Array(AuthorizeOrganization),
    requires_single_organization: Schema.optionalKey(Schema.Boolean),
    scope_display_names: Schema.optionalKey(Schema.Record(Schema.String, Schema.String)),
  }),
) {}

/**
 * BalanceCreditOrderMetadata
 */
export class BalanceCreditOrderMetadata extends Schema.Opaque<BalanceCreditOrderMetadata>()(
  Schema.Struct({
    order_id: Schema.String,
    product_id: Schema.optionalKey(Schema.String),
    subscription_id: Schema.optionalKey(Schema.String),
    amount: Schema.Number,
    currency: Schema.String,
    tax_amount: Schema.Number,
    tax_state: Schema.optionalKey(Schema.NullOr(Schema.String)),
    tax_country: Schema.optionalKey(Schema.NullOr(Schema.String)),
    fee: Schema.Number,
    exchange_rate: Schema.optionalKey(Schema.Number),
  }),
) {}

/**
 * A customer in an organization.
 */
export class CustomerIndividual extends Schema.Opaque<CustomerIndividual>()(
  Schema.Struct({
    /** The ID of the customer. */
    id: Schema.String,
    /** Creation timestamp of the object. */
    created_at: Schema.DateTimeUtcFromString,
    /** Last modification timestamp of the object. */
    modified_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    metadata: MetadataOutputType,
    /** The ID of the customer in your system. This must be unique within the organization. Once set, it can't be updated. */
    external_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** The email address of the customer. This must be unique within the organization. */
    email: Schema.String,
    /** Whether the customer email address is verified. The address is automatically verified when the customer accesses the customer portal using their email address. */
    email_verified: Schema.Boolean,
    /** The type of customer. */
    type: Schema.Literal("individual"),
    /** The name of the customer. */
    name: Schema.NullOr(Schema.String),
    /** The name that should appear on the customer's invoices. Falls back to the customer name when not explicitly set. */
    billing_name: Schema.NullOr(Schema.String),
    billing_address: Schema.NullOr(Address),
    tax_id: Schema.NullOr(Schema.Array(Schema.Unknown)),
    locale: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** The ID of the organization owning the customer. */
    organization_id: Schema.String,
    /** The ID of the customer's default payment method, if any. Use the payment methods endpoint to retrieve its details. */
    default_payment_method_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** Timestamp for when the customer was soft deleted. */
    deleted_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** Timestamp of the first event ingested for this customer. Can predate `created_at`, and is null if no event was ever ingested. */
    first_user_event_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    avatar_url: Schema.NullOr(Schema.String),
  }),
) {}

/**
 * A team customer in an organization.
 */
export class CustomerTeam extends Schema.Opaque<CustomerTeam>()(
  Schema.Struct({
    /** The ID of the customer. */
    id: Schema.String,
    /** Creation timestamp of the object. */
    created_at: Schema.DateTimeUtcFromString,
    /** Last modification timestamp of the object. */
    modified_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    metadata: MetadataOutputType,
    /** The ID of the customer in your system. This must be unique within the organization. Once set, it can't be updated. */
    external_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** The email address of the customer. This must be unique within the organization. */
    email: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** Whether the customer email address is verified. The address is automatically verified when the customer accesses the customer portal using their email address. */
    email_verified: Schema.Boolean,
    /** The type of customer. Team customers can have multiple members. */
    type: Schema.Literal("team"),
    /** The name of the customer. */
    name: Schema.NullOr(Schema.String),
    /** The name that should appear on the customer's invoices. Falls back to the customer name when not explicitly set. */
    billing_name: Schema.NullOr(Schema.String),
    billing_address: Schema.NullOr(Address),
    tax_id: Schema.NullOr(Schema.Array(Schema.Unknown)),
    locale: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** The ID of the organization owning the customer. */
    organization_id: Schema.String,
    /** The ID of the customer's default payment method, if any. Use the payment methods endpoint to retrieve its details. */
    default_payment_method_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** Timestamp for when the customer was soft deleted. */
    deleted_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** Timestamp of the first event ingested for this customer. Can predate `created_at`, and is null if no event was ever ingested. */
    first_user_event_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    avatar_url: Schema.NullOr(Schema.String),
  }),
) {}

/**
 * Customer
 */
export const Customer = openUnion([CustomerIndividual, CustomerTeam], "type", [
  "individual",
  "team",
]);
export type Customer = typeof Customer.Type;

/**
 * An event created by Polar when an order is paid via customer balance.
 */
export class BalanceCreditOrderEvent extends Schema.Opaque<BalanceCreditOrderEvent>()(
  Schema.Struct({
    /** The ID of the object. */
    id: Schema.String,
    /** The timestamp of the event. */
    timestamp: Schema.DateTimeUtcFromString,
    /** The ID of the organization owning the event. */
    organization_id: Schema.String,
    /** ID of the customer in your Polar organization associated with the event. */
    customer_id: Schema.NullOr(Schema.String),
    /** The customer associated with the event. */
    customer: Schema.NullOr(Customer),
    /** ID of the customer in your system associated with the event. */
    external_customer_id: Schema.NullOr(Schema.String),
    /** ID of the member within the customer's organization who performed the action inside B2B. */
    member_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** ID of the member in your system within the customer's organization who performed the action inside B2B. */
    external_member_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** Number of direct child events linked to this event. */
    child_count: Schema.optionalKey(Schema.Number),
    /** The ID of the parent event. */
    parent_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** Human readable label of the event type. */
    label: Schema.String,
    /** The source of the event. `system` events are created by Polar. `user` events are the one you create through our ingestion API. */
    source: Schema.Literal("system"),
    /** The name of the event. */
    name: Schema.Literal("balance.credit_order"),
    metadata: BalanceCreditOrderMetadata,
  }),
) {}

/**
 * BalanceDisputeMetadata
 */
export class BalanceDisputeMetadata extends Schema.Opaque<BalanceDisputeMetadata>()(
  Schema.Struct({
    transaction_id: Schema.String,
    dispute_id: Schema.String,
    order_id: Schema.optionalKey(Schema.String),
    order_created_at: Schema.optionalKey(Schema.String),
    product_id: Schema.optionalKey(Schema.String),
    subscription_id: Schema.optionalKey(Schema.String),
    amount: Schema.Number,
    currency: Schema.String,
    presentment_amount: Schema.Number,
    presentment_currency: Schema.String,
    tax_amount: Schema.Number,
    tax_state: Schema.optionalKey(Schema.NullOr(Schema.String)),
    tax_country: Schema.optionalKey(Schema.NullOr(Schema.String)),
    fee: Schema.Number,
    exchange_rate: Schema.optionalKey(Schema.Number),
  }),
) {}

/**
 * An event created by Polar when an order is disputed.
 */
export class BalanceDisputeEvent extends Schema.Opaque<BalanceDisputeEvent>()(
  Schema.Struct({
    /** The ID of the object. */
    id: Schema.String,
    /** The timestamp of the event. */
    timestamp: Schema.DateTimeUtcFromString,
    /** The ID of the organization owning the event. */
    organization_id: Schema.String,
    /** ID of the customer in your Polar organization associated with the event. */
    customer_id: Schema.NullOr(Schema.String),
    /** The customer associated with the event. */
    customer: Schema.NullOr(Customer),
    /** ID of the customer in your system associated with the event. */
    external_customer_id: Schema.NullOr(Schema.String),
    /** ID of the member within the customer's organization who performed the action inside B2B. */
    member_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** ID of the member in your system within the customer's organization who performed the action inside B2B. */
    external_member_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** Number of direct child events linked to this event. */
    child_count: Schema.optionalKey(Schema.Number),
    /** The ID of the parent event. */
    parent_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** Human readable label of the event type. */
    label: Schema.String,
    /** The source of the event. `system` events are created by Polar. `user` events are the one you create through our ingestion API. */
    source: Schema.Literal("system"),
    /** The name of the event. */
    name: Schema.Literal("balance.dispute"),
    metadata: BalanceDisputeMetadata,
  }),
) {}

/**
 * An event created by Polar when a dispute is won and funds are reinstated.
 */
export class BalanceDisputeReversalEvent extends Schema.Opaque<BalanceDisputeReversalEvent>()(
  Schema.Struct({
    /** The ID of the object. */
    id: Schema.String,
    /** The timestamp of the event. */
    timestamp: Schema.DateTimeUtcFromString,
    /** The ID of the organization owning the event. */
    organization_id: Schema.String,
    /** ID of the customer in your Polar organization associated with the event. */
    customer_id: Schema.NullOr(Schema.String),
    /** The customer associated with the event. */
    customer: Schema.NullOr(Customer),
    /** ID of the customer in your system associated with the event. */
    external_customer_id: Schema.NullOr(Schema.String),
    /** ID of the member within the customer's organization who performed the action inside B2B. */
    member_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** ID of the member in your system within the customer's organization who performed the action inside B2B. */
    external_member_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** Number of direct child events linked to this event. */
    child_count: Schema.optionalKey(Schema.Number),
    /** The ID of the parent event. */
    parent_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** Human readable label of the event type. */
    label: Schema.String,
    /** The source of the event. `system` events are created by Polar. `user` events are the one you create through our ingestion API. */
    source: Schema.Literal("system"),
    /** The name of the event. */
    name: Schema.Literal("balance.dispute_reversal"),
    metadata: BalanceDisputeMetadata,
  }),
) {}

/**
 * BalanceOrderMetadata
 */
export class BalanceOrderMetadata extends Schema.Opaque<BalanceOrderMetadata>()(
  Schema.Struct({
    transaction_id: Schema.String,
    order_id: Schema.String,
    product_id: Schema.optionalKey(Schema.String),
    subscription_id: Schema.optionalKey(Schema.String),
    amount: Schema.Number,
    net_amount: Schema.optionalKey(Schema.Number),
    currency: Schema.String,
    presentment_amount: Schema.Number,
    presentment_currency: Schema.String,
    tax_amount: Schema.Number,
    tax_state: Schema.optionalKey(Schema.NullOr(Schema.String)),
    tax_country: Schema.optionalKey(Schema.NullOr(Schema.String)),
    fee: Schema.Number,
    exchange_rate: Schema.optionalKey(Schema.Number),
  }),
) {}

/**
 * An event created by Polar when an order is paid.
 */
export class BalanceOrderEvent extends Schema.Opaque<BalanceOrderEvent>()(
  Schema.Struct({
    /** The ID of the object. */
    id: Schema.String,
    /** The timestamp of the event. */
    timestamp: Schema.DateTimeUtcFromString,
    /** The ID of the organization owning the event. */
    organization_id: Schema.String,
    /** ID of the customer in your Polar organization associated with the event. */
    customer_id: Schema.NullOr(Schema.String),
    /** The customer associated with the event. */
    customer: Schema.NullOr(Customer),
    /** ID of the customer in your system associated with the event. */
    external_customer_id: Schema.NullOr(Schema.String),
    /** ID of the member within the customer's organization who performed the action inside B2B. */
    member_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** ID of the member in your system within the customer's organization who performed the action inside B2B. */
    external_member_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** Number of direct child events linked to this event. */
    child_count: Schema.optionalKey(Schema.Number),
    /** The ID of the parent event. */
    parent_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** Human readable label of the event type. */
    label: Schema.String,
    /** The source of the event. `system` events are created by Polar. `user` events are the one you create through our ingestion API. */
    source: Schema.Literal("system"),
    /** The name of the event. */
    name: Schema.Literal("balance.order"),
    metadata: BalanceOrderMetadata,
  }),
) {}

/**
 * BalanceRefundMetadata
 */
export class BalanceRefundMetadata extends Schema.Opaque<BalanceRefundMetadata>()(
  Schema.Struct({
    transaction_id: Schema.String,
    refund_id: Schema.String,
    order_id: Schema.optionalKey(Schema.String),
    order_created_at: Schema.optionalKey(Schema.String),
    product_id: Schema.optionalKey(Schema.String),
    subscription_id: Schema.optionalKey(Schema.String),
    amount: Schema.Number,
    currency: Schema.String,
    presentment_amount: Schema.Number,
    presentment_currency: Schema.String,
    refundable_amount: Schema.optionalKey(Schema.Number),
    tax_amount: Schema.Number,
    tax_state: Schema.optionalKey(Schema.NullOr(Schema.String)),
    tax_country: Schema.optionalKey(Schema.NullOr(Schema.String)),
    fee: Schema.Number,
    exchange_rate: Schema.optionalKey(Schema.Number),
  }),
) {}

/**
 * An event created by Polar when an order is refunded.
 */
export class BalanceRefundEvent extends Schema.Opaque<BalanceRefundEvent>()(
  Schema.Struct({
    /** The ID of the object. */
    id: Schema.String,
    /** The timestamp of the event. */
    timestamp: Schema.DateTimeUtcFromString,
    /** The ID of the organization owning the event. */
    organization_id: Schema.String,
    /** ID of the customer in your Polar organization associated with the event. */
    customer_id: Schema.NullOr(Schema.String),
    /** The customer associated with the event. */
    customer: Schema.NullOr(Customer),
    /** ID of the customer in your system associated with the event. */
    external_customer_id: Schema.NullOr(Schema.String),
    /** ID of the member within the customer's organization who performed the action inside B2B. */
    member_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** ID of the member in your system within the customer's organization who performed the action inside B2B. */
    external_member_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** Number of direct child events linked to this event. */
    child_count: Schema.optionalKey(Schema.Number),
    /** The ID of the parent event. */
    parent_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** Human readable label of the event type. */
    label: Schema.String,
    /** The source of the event. `system` events are created by Polar. `user` events are the one you create through our ingestion API. */
    source: Schema.Literal("system"),
    /** The name of the event. */
    name: Schema.Literal("balance.refund"),
    metadata: BalanceRefundMetadata,
  }),
) {}

/**
 * An event created by Polar when a refund is reverted.
 */
export class BalanceRefundReversalEvent extends Schema.Opaque<BalanceRefundReversalEvent>()(
  Schema.Struct({
    /** The ID of the object. */
    id: Schema.String,
    /** The timestamp of the event. */
    timestamp: Schema.DateTimeUtcFromString,
    /** The ID of the organization owning the event. */
    organization_id: Schema.String,
    /** ID of the customer in your Polar organization associated with the event. */
    customer_id: Schema.NullOr(Schema.String),
    /** The customer associated with the event. */
    customer: Schema.NullOr(Customer),
    /** ID of the customer in your system associated with the event. */
    external_customer_id: Schema.NullOr(Schema.String),
    /** ID of the member within the customer's organization who performed the action inside B2B. */
    member_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** ID of the member in your system within the customer's organization who performed the action inside B2B. */
    external_member_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** Number of direct child events linked to this event. */
    child_count: Schema.optionalKey(Schema.Number),
    /** The ID of the parent event. */
    parent_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** Human readable label of the event type. */
    label: Schema.String,
    /** The source of the event. `system` events are created by Polar. `user` events are the one you create through our ingestion API. */
    source: Schema.Literal("system"),
    /** The name of the event. */
    name: Schema.Literal("balance.refund_reversal"),
    metadata: BalanceRefundMetadata,
  }),
) {}

/**
 * Properties for a benefit of type `custom`.
 */
export class BenefitCustomProperties extends Schema.Opaque<BenefitCustomProperties>()(
  Schema.Struct({
    note: Schema.NullOr(Schema.NullOr(Schema.String)),
  }),
) {}

/**
 * A benefit of type `custom`.
 *
 * Use it to grant any kind of benefit that doesn't fit in the other types.
 */
export class BenefitCustom extends Schema.Opaque<BenefitCustom>()(
  Schema.Struct({
    /** The ID of the benefit. */
    id: Schema.String,
    /** Creation timestamp of the object. */
    created_at: Schema.DateTimeUtcFromString,
    /** Last modification timestamp of the object. */
    modified_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    type: Schema.Literal("custom"),
    /** The description of the benefit. */
    description: Schema.String,
    /** Whether the benefit is selectable when creating a product. */
    selectable: Schema.Boolean,
    /** Whether the benefit is deletable. */
    deletable: Schema.Boolean,
    /** Whether the benefit is deleted. */
    is_deleted: Schema.Boolean,
    /** The ID of the organization owning the benefit. */
    organization_id: Schema.String,
    metadata: MetadataOutputType,
    visibility: openEnum(BenefitVisibility),
    properties: BenefitCustomProperties,
    visibility_configurable: Schema.Boolean,
  }),
) {}

/**
 * Properties for a benefit of type `discord`.
 */
export class BenefitDiscordProperties extends Schema.Opaque<BenefitDiscordProperties>()(
  Schema.Struct({
    /** The ID of the Discord server. */
    guild_id: Schema.String,
    /** The ID of the Discord role to grant. */
    role_id: Schema.String,
    /** Whether to kick the member from the Discord server on revocation. */
    kick_member: Schema.Boolean,
    guild_token: Schema.String,
  }),
) {}

/**
 * A benefit of type `discord`.
 *
 * Use it to automatically invite your backers to a Discord server.
 */
export class BenefitDiscord extends Schema.Opaque<BenefitDiscord>()(
  Schema.Struct({
    /** The ID of the benefit. */
    id: Schema.String,
    /** Creation timestamp of the object. */
    created_at: Schema.DateTimeUtcFromString,
    /** Last modification timestamp of the object. */
    modified_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    type: Schema.Literal("discord"),
    /** The description of the benefit. */
    description: Schema.String,
    /** Whether the benefit is selectable when creating a product. */
    selectable: Schema.Boolean,
    /** Whether the benefit is deletable. */
    deletable: Schema.Boolean,
    /** Whether the benefit is deleted. */
    is_deleted: Schema.Boolean,
    /** The ID of the organization owning the benefit. */
    organization_id: Schema.String,
    metadata: MetadataOutputType,
    visibility: openEnum(BenefitVisibility),
    properties: BenefitDiscordProperties,
    visibility_configurable: Schema.Boolean,
  }),
) {}

/**
 * BenefitDownloadablesProperties
 */
export class BenefitDownloadablesProperties extends Schema.Opaque<BenefitDownloadablesProperties>()(
  Schema.Struct({
    archived: Schema.Record(Schema.String, Schema.Boolean),
    files: Schema.Array(Schema.String),
  }),
) {}

/**
 * BenefitDownloadables
 */
export class BenefitDownloadables extends Schema.Opaque<BenefitDownloadables>()(
  Schema.Struct({
    /** The ID of the benefit. */
    id: Schema.String,
    /** Creation timestamp of the object. */
    created_at: Schema.DateTimeUtcFromString,
    /** Last modification timestamp of the object. */
    modified_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    type: Schema.Literal("downloadables"),
    /** The description of the benefit. */
    description: Schema.String,
    /** Whether the benefit is selectable when creating a product. */
    selectable: Schema.Boolean,
    /** Whether the benefit is deletable. */
    deletable: Schema.Boolean,
    /** Whether the benefit is deleted. */
    is_deleted: Schema.Boolean,
    /** The ID of the organization owning the benefit. */
    organization_id: Schema.String,
    metadata: MetadataOutputType,
    visibility: openEnum(BenefitVisibility),
    properties: BenefitDownloadablesProperties,
    visibility_configurable: Schema.Boolean,
  }),
) {}

/**
 * Properties for a benefit of type `feature_flag`.
 */
export class BenefitFeatureFlagProperties extends Schema.Opaque<BenefitFeatureFlagProperties>()(
  Schema.Struct({}),
) {}

/**
 * A benefit of type `feature_flag`.
 *
 * Use it to grant feature flags with key-value metadata
 * that can be queried via the API and webhooks.
 */
export class BenefitFeatureFlag extends Schema.Opaque<BenefitFeatureFlag>()(
  Schema.Struct({
    /** The ID of the benefit. */
    id: Schema.String,
    /** Creation timestamp of the object. */
    created_at: Schema.DateTimeUtcFromString,
    /** Last modification timestamp of the object. */
    modified_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    type: Schema.Literal("feature_flag"),
    /** The description of the benefit. */
    description: Schema.String,
    /** Whether the benefit is selectable when creating a product. */
    selectable: Schema.Boolean,
    /** Whether the benefit is deletable. */
    deletable: Schema.Boolean,
    /** Whether the benefit is deleted. */
    is_deleted: Schema.Boolean,
    /** The ID of the organization owning the benefit. */
    organization_id: Schema.String,
    metadata: MetadataOutputType,
    visibility: openEnum(BenefitVisibility),
    properties: BenefitFeatureFlagProperties,
    visibility_configurable: Schema.Boolean,
  }),
) {}

/**
 * Properties for a benefit of type `github_repository`.
 */
export class BenefitGitHubRepositoryProperties extends Schema.Opaque<BenefitGitHubRepositoryProperties>()(
  Schema.Struct({
    /** The owner of the repository. */
    repository_owner: Schema.String,
    /** The name of the repository. */
    repository_name: Schema.String,
    /** The permission level to grant. Read more about roles and their permissions on [GitHub documentation](https://docs.github.com/en/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/repository-roles-for-an-organization#permissions-for-each-role). */
    permission: openEnum(Permission),
  }),
) {}

/**
 * A benefit of type `github_repository`.
 *
 * Use it to automatically invite your backers to a private GitHub repository.
 */
export class BenefitGitHubRepository extends Schema.Opaque<BenefitGitHubRepository>()(
  Schema.Struct({
    /** The ID of the benefit. */
    id: Schema.String,
    /** Creation timestamp of the object. */
    created_at: Schema.DateTimeUtcFromString,
    /** Last modification timestamp of the object. */
    modified_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    type: Schema.Literal("github_repository"),
    /** The description of the benefit. */
    description: Schema.String,
    /** Whether the benefit is selectable when creating a product. */
    selectable: Schema.Boolean,
    /** Whether the benefit is deletable. */
    deletable: Schema.Boolean,
    /** Whether the benefit is deleted. */
    is_deleted: Schema.Boolean,
    /** The ID of the organization owning the benefit. */
    organization_id: Schema.String,
    metadata: MetadataOutputType,
    visibility: openEnum(BenefitVisibility),
    properties: BenefitGitHubRepositoryProperties,
    visibility_configurable: Schema.Boolean,
  }),
) {}

/**
 * BenefitLicenseKeyActivationProperties
 */
export class BenefitLicenseKeyActivationProperties extends Schema.Opaque<BenefitLicenseKeyActivationProperties>()(
  Schema.Struct({
    limit: Schema.Number,
    enable_customer_admin: Schema.Boolean,
  }),
) {}

/**
 * BenefitLicenseKeyExpirationProperties
 */
export class BenefitLicenseKeyExpirationProperties extends Schema.Opaque<BenefitLicenseKeyExpirationProperties>()(
  Schema.Struct({
    ttl: Schema.Number,
    timeframe: openEnum(Timeframe),
  }),
) {}

/**
 * BenefitLicenseKeysProperties
 */
export class BenefitLicenseKeysProperties extends Schema.Opaque<BenefitLicenseKeysProperties>()(
  Schema.Struct({
    prefix: Schema.NullOr(Schema.String),
    expires: Schema.NullOr(BenefitLicenseKeyExpirationProperties),
    activations: Schema.NullOr(BenefitLicenseKeyActivationProperties),
    limit_usage: Schema.NullOr(Schema.Number),
  }),
) {}

/**
 * BenefitLicenseKeys
 */
export class BenefitLicenseKeys extends Schema.Opaque<BenefitLicenseKeys>()(
  Schema.Struct({
    /** The ID of the benefit. */
    id: Schema.String,
    /** Creation timestamp of the object. */
    created_at: Schema.DateTimeUtcFromString,
    /** Last modification timestamp of the object. */
    modified_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    type: Schema.Literal("license_keys"),
    /** The description of the benefit. */
    description: Schema.String,
    /** Whether the benefit is selectable when creating a product. */
    selectable: Schema.Boolean,
    /** Whether the benefit is deletable. */
    deletable: Schema.Boolean,
    /** Whether the benefit is deleted. */
    is_deleted: Schema.Boolean,
    /** The ID of the organization owning the benefit. */
    organization_id: Schema.String,
    metadata: MetadataOutputType,
    visibility: openEnum(BenefitVisibility),
    properties: BenefitLicenseKeysProperties,
    visibility_configurable: Schema.Boolean,
  }),
) {}

/**
 * Properties for a benefit of type `meter_unit`.
 */
export class BenefitMeterCreditProperties extends Schema.Opaque<BenefitMeterCreditProperties>()(
  Schema.Struct({
    units: Schema.Number,
    rollover: Schema.Boolean,
    meter_id: Schema.String,
  }),
) {}

/**
 * A benefit of type `meter_unit`.
 *
 * Use it to grant a number of units on a specific meter.
 */
export class BenefitMeterCredit extends Schema.Opaque<BenefitMeterCredit>()(
  Schema.Struct({
    /** The ID of the benefit. */
    id: Schema.String,
    /** Creation timestamp of the object. */
    created_at: Schema.DateTimeUtcFromString,
    /** Last modification timestamp of the object. */
    modified_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    type: Schema.Literal("meter_credit"),
    /** The description of the benefit. */
    description: Schema.String,
    /** Whether the benefit is selectable when creating a product. */
    selectable: Schema.Boolean,
    /** Whether the benefit is deletable. */
    deletable: Schema.Boolean,
    /** Whether the benefit is deleted. */
    is_deleted: Schema.Boolean,
    /** The ID of the organization owning the benefit. */
    organization_id: Schema.String,
    metadata: MetadataOutputType,
    visibility: openEnum(BenefitVisibility),
    properties: BenefitMeterCreditProperties,
    visibility_configurable: Schema.Boolean,
  }),
) {}

/**
 * BenefitSlackSharedChannelProperties
 */
export class BenefitSlackSharedChannelProperties extends Schema.Opaque<BenefitSlackSharedChannelProperties>()(
  Schema.Struct({
    /** Polar Slack integration linked to this benefit. */
    slack_integration_id: Schema.String,
    /** Template for the channel name. Supports placeholders: {customer_name}, {customer_email_local}, and {metadata.<key>} for any value stored in customer user metadata. */
    channel_name_template: Schema.String,
    /** Create the channel as private (recommended). */
    private: Schema.optionalKey(Schema.Boolean),
    /** Optional message posted to the channel right after creation. */
    welcome_message: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** Archive the channel when the benefit is revoked. */
    archive_on_revoke: Schema.optionalKey(Schema.Boolean),
    /** Slack user IDs from the merchant workspace to invite to every channel created for this benefit. */
    team_invitees: Schema.optionalKey(Schema.Array(Schema.String)),
  }),
) {}

/**
 * BenefitSlackSharedChannel
 */
export class BenefitSlackSharedChannel extends Schema.Opaque<BenefitSlackSharedChannel>()(
  Schema.Struct({
    /** The ID of the benefit. */
    id: Schema.String,
    /** Creation timestamp of the object. */
    created_at: Schema.DateTimeUtcFromString,
    /** Last modification timestamp of the object. */
    modified_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    type: Schema.Literal("slack_shared_channel"),
    /** The description of the benefit. */
    description: Schema.String,
    /** Whether the benefit is selectable when creating a product. */
    selectable: Schema.Boolean,
    /** Whether the benefit is deletable. */
    deletable: Schema.Boolean,
    /** Whether the benefit is deleted. */
    is_deleted: Schema.Boolean,
    /** The ID of the organization owning the benefit. */
    organization_id: Schema.String,
    metadata: MetadataOutputType,
    visibility: openEnum(BenefitVisibility),
    properties: BenefitSlackSharedChannelProperties,
    visibility_configurable: Schema.Boolean,
  }),
) {}

/**
 * Benefit
 */
export const Benefit = openUnion(
  [
    BenefitCustom,
    BenefitDiscord,
    BenefitGitHubRepository,
    BenefitDownloadables,
    BenefitLicenseKeys,
    BenefitMeterCredit,
    BenefitFeatureFlag,
    BenefitSlackSharedChannel,
  ],
  "type",
  [
    "custom",
    "discord",
    "downloadables",
    "feature_flag",
    "github_repository",
    "license_keys",
    "meter_credit",
    "slack_shared_channel",
  ],
);
export type Benefit = typeof Benefit.Type;

/**
 * Properties for creating a benefit of type `custom`.
 */
export class BenefitCustomCreateProperties extends Schema.Opaque<BenefitCustomCreateProperties>()(
  Schema.Struct({
    note: Schema.optionalKey(Schema.NullOr(Schema.NullOr(Schema.String))),
  }),
) {}

/**
 * Schema to create a benefit of type `custom`.
 */
export class BenefitCustomCreate extends Schema.Opaque<BenefitCustomCreate>()(
  Schema.Struct({
    /** Key-value object allowing you to store additional information. The key must be a string with a maximum length of **40 characters**. The value must be either: * A string with a maximum length of **500 characters** * An integer * A floating-point number * A boolean You can store up to **50 key-value pairs**. */
    metadata: Schema.optionalKey(
      Schema.Record(Schema.String, Schema.Union([Schema.String, Schema.Number, Schema.Boolean])),
    ),
    type: Schema.Literal("custom"),
    /** The description of the benefit. Will be displayed on products having this benefit. */
    description: Schema.String,
    /** The ID of the organization owning the benefit. **Required unless you use an organization token.** */
    organization_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** The visibility of the benefit in the customer portal. */
    visibility: Schema.optionalKey(Schema.NullOr(BenefitVisibility)),
    properties: BenefitCustomCreateProperties,
  }),
) {}

/**
 * Properties to create a benefit of type `discord`.
 */
export class BenefitDiscordCreateProperties extends Schema.Opaque<BenefitDiscordCreateProperties>()(
  Schema.Struct({
    guild_token: Schema.String,
    /** The ID of the Discord role to grant. */
    role_id: Schema.String,
    /** Whether to kick the member from the Discord server on revocation. */
    kick_member: Schema.Boolean,
  }),
) {}

/**
 * BenefitDiscordCreate
 */
export class BenefitDiscordCreate extends Schema.Opaque<BenefitDiscordCreate>()(
  Schema.Struct({
    /** Key-value object allowing you to store additional information. The key must be a string with a maximum length of **40 characters**. The value must be either: * A string with a maximum length of **500 characters** * An integer * A floating-point number * A boolean You can store up to **50 key-value pairs**. */
    metadata: Schema.optionalKey(
      Schema.Record(Schema.String, Schema.Union([Schema.String, Schema.Number, Schema.Boolean])),
    ),
    type: Schema.Literal("discord"),
    /** The description of the benefit. Will be displayed on products having this benefit. */
    description: Schema.String,
    /** The ID of the organization owning the benefit. **Required unless you use an organization token.** */
    organization_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** The visibility of the benefit in the customer portal. */
    visibility: Schema.optionalKey(Schema.NullOr(BenefitVisibility)),
    properties: BenefitDiscordCreateProperties,
  }),
) {}

/**
 * BenefitDownloadablesCreateProperties
 */
export class BenefitDownloadablesCreateProperties extends Schema.Opaque<BenefitDownloadablesCreateProperties>()(
  Schema.Struct({
    archived: Schema.optionalKey(Schema.Record(Schema.String, Schema.Boolean)),
    files: Schema.Array(Schema.String),
  }),
) {}

/**
 * BenefitDownloadablesCreate
 */
export class BenefitDownloadablesCreate extends Schema.Opaque<BenefitDownloadablesCreate>()(
  Schema.Struct({
    /** Key-value object allowing you to store additional information. The key must be a string with a maximum length of **40 characters**. The value must be either: * A string with a maximum length of **500 characters** * An integer * A floating-point number * A boolean You can store up to **50 key-value pairs**. */
    metadata: Schema.optionalKey(
      Schema.Record(Schema.String, Schema.Union([Schema.String, Schema.Number, Schema.Boolean])),
    ),
    type: Schema.Literal("downloadables"),
    /** The description of the benefit. Will be displayed on products having this benefit. */
    description: Schema.String,
    /** The ID of the organization owning the benefit. **Required unless you use an organization token.** */
    organization_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** The visibility of the benefit in the customer portal. */
    visibility: Schema.optionalKey(Schema.NullOr(BenefitVisibility)),
    properties: BenefitDownloadablesCreateProperties,
  }),
) {}

/**
 * Properties for creating a benefit of type `feature_flag`.
 */
export class BenefitFeatureFlagCreateProperties extends Schema.Opaque<BenefitFeatureFlagCreateProperties>()(
  Schema.Struct({}),
) {}

/**
 * Schema to create a benefit of type `feature_flag`.
 */
export class BenefitFeatureFlagCreate extends Schema.Opaque<BenefitFeatureFlagCreate>()(
  Schema.Struct({
    /** Key-value object allowing you to store additional information. The key must be a string with a maximum length of **40 characters**. The value must be either: * A string with a maximum length of **500 characters** * An integer * A floating-point number * A boolean You can store up to **50 key-value pairs**. */
    metadata: Schema.optionalKey(
      Schema.Record(Schema.String, Schema.Union([Schema.String, Schema.Number, Schema.Boolean])),
    ),
    type: Schema.Literal("feature_flag"),
    /** The description of the benefit. Will be displayed on products having this benefit. */
    description: Schema.String,
    /** The ID of the organization owning the benefit. **Required unless you use an organization token.** */
    organization_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** The visibility of the benefit in the customer portal. */
    visibility: Schema.optionalKey(Schema.NullOr(BenefitVisibility)),
    properties: BenefitFeatureFlagCreateProperties,
  }),
) {}

/**
 * Properties to create a benefit of type `github_repository`.
 */
export class BenefitGitHubRepositoryCreateProperties extends Schema.Opaque<BenefitGitHubRepositoryCreateProperties>()(
  Schema.Struct({
    /** The owner of the repository. */
    repository_owner: Schema.String,
    /** The name of the repository. */
    repository_name: Schema.String,
    /** The permission level to grant. Read more about roles and their permissions on [GitHub documentation](https://docs.github.com/en/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/repository-roles-for-an-organization#permissions-for-each-role). */
    permission: Permission,
  }),
) {}

/**
 * BenefitGitHubRepositoryCreate
 */
export class BenefitGitHubRepositoryCreate extends Schema.Opaque<BenefitGitHubRepositoryCreate>()(
  Schema.Struct({
    /** Key-value object allowing you to store additional information. The key must be a string with a maximum length of **40 characters**. The value must be either: * A string with a maximum length of **500 characters** * An integer * A floating-point number * A boolean You can store up to **50 key-value pairs**. */
    metadata: Schema.optionalKey(
      Schema.Record(Schema.String, Schema.Union([Schema.String, Schema.Number, Schema.Boolean])),
    ),
    type: Schema.Literal("github_repository"),
    /** The description of the benefit. Will be displayed on products having this benefit. */
    description: Schema.String,
    /** The ID of the organization owning the benefit. **Required unless you use an organization token.** */
    organization_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** The visibility of the benefit in the customer portal. */
    visibility: Schema.optionalKey(Schema.NullOr(BenefitVisibility)),
    properties: BenefitGitHubRepositoryCreateProperties,
  }),
) {}

/**
 * BenefitLicenseKeyActivationCreateProperties
 */
export class BenefitLicenseKeyActivationCreateProperties extends Schema.Opaque<BenefitLicenseKeyActivationCreateProperties>()(
  Schema.Struct({
    limit: Schema.Number,
    enable_customer_admin: Schema.Boolean,
  }),
) {}

/**
 * BenefitLicenseKeysCreateProperties
 */
export class BenefitLicenseKeysCreateProperties extends Schema.Opaque<BenefitLicenseKeysCreateProperties>()(
  Schema.Struct({
    prefix: Schema.optionalKey(Schema.NullOr(Schema.String)),
    expires: Schema.optionalKey(Schema.NullOr(BenefitLicenseKeyExpirationProperties)),
    activations: Schema.optionalKey(Schema.NullOr(BenefitLicenseKeyActivationCreateProperties)),
    limit_usage: Schema.optionalKey(Schema.NullOr(Schema.Number)),
  }),
) {}

/**
 * BenefitLicenseKeysCreate
 */
export class BenefitLicenseKeysCreate extends Schema.Opaque<BenefitLicenseKeysCreate>()(
  Schema.Struct({
    /** Key-value object allowing you to store additional information. The key must be a string with a maximum length of **40 characters**. The value must be either: * A string with a maximum length of **500 characters** * An integer * A floating-point number * A boolean You can store up to **50 key-value pairs**. */
    metadata: Schema.optionalKey(
      Schema.Record(Schema.String, Schema.Union([Schema.String, Schema.Number, Schema.Boolean])),
    ),
    type: Schema.Literal("license_keys"),
    /** The description of the benefit. Will be displayed on products having this benefit. */
    description: Schema.String,
    /** The ID of the organization owning the benefit. **Required unless you use an organization token.** */
    organization_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** The visibility of the benefit in the customer portal. */
    visibility: Schema.optionalKey(Schema.NullOr(BenefitVisibility)),
    properties: BenefitLicenseKeysCreateProperties,
  }),
) {}

/**
 * Properties for creating a benefit of type `meter_unit`.
 */
export class BenefitMeterCreditCreateProperties extends Schema.Opaque<BenefitMeterCreditCreateProperties>()(
  Schema.Struct({
    units: Schema.Number,
    rollover: Schema.Boolean,
    meter_id: Schema.String,
  }),
) {}

/**
 * Schema to create a benefit of type `meter_unit`.
 */
export class BenefitMeterCreditCreate extends Schema.Opaque<BenefitMeterCreditCreate>()(
  Schema.Struct({
    /** Key-value object allowing you to store additional information. The key must be a string with a maximum length of **40 characters**. The value must be either: * A string with a maximum length of **500 characters** * An integer * A floating-point number * A boolean You can store up to **50 key-value pairs**. */
    metadata: Schema.optionalKey(
      Schema.Record(Schema.String, Schema.Union([Schema.String, Schema.Number, Schema.Boolean])),
    ),
    type: Schema.Literal("meter_credit"),
    /** The description of the benefit. Will be displayed on products having this benefit. */
    description: Schema.String,
    /** The ID of the organization owning the benefit. **Required unless you use an organization token.** */
    organization_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** The visibility of the benefit in the customer portal. */
    visibility: Schema.optionalKey(Schema.NullOr(BenefitVisibility)),
    properties: BenefitMeterCreditCreateProperties,
  }),
) {}

/**
 * BenefitSlackSharedChannelCreateProperties
 */
export class BenefitSlackSharedChannelCreateProperties extends Schema.Opaque<BenefitSlackSharedChannelCreateProperties>()(
  Schema.Struct({
    /** Polar Slack integration to use for this benefit. */
    slack_integration_id: Schema.String,
    channel_name_template: Schema.String,
    private: Schema.optionalKey(Schema.Boolean),
    welcome_message: Schema.optionalKey(Schema.NullOr(Schema.String)),
    archive_on_revoke: Schema.optionalKey(Schema.Boolean),
    team_invitees: Schema.optionalKey(Schema.Array(Schema.String)),
  }),
) {}

/**
 * BenefitSlackSharedChannelCreate
 */
export class BenefitSlackSharedChannelCreate extends Schema.Opaque<BenefitSlackSharedChannelCreate>()(
  Schema.Struct({
    /** Key-value object allowing you to store additional information. The key must be a string with a maximum length of **40 characters**. The value must be either: * A string with a maximum length of **500 characters** * An integer * A floating-point number * A boolean You can store up to **50 key-value pairs**. */
    metadata: Schema.optionalKey(
      Schema.Record(Schema.String, Schema.Union([Schema.String, Schema.Number, Schema.Boolean])),
    ),
    type: Schema.Literal("slack_shared_channel"),
    /** The description of the benefit. Will be displayed on products having this benefit. */
    description: Schema.String,
    /** The ID of the organization owning the benefit. **Required unless you use an organization token.** */
    organization_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** The visibility of the benefit in the customer portal. */
    visibility: Schema.optionalKey(Schema.NullOr(BenefitVisibility)),
    properties: BenefitSlackSharedChannelCreateProperties,
  }),
) {}

/**
 * BenefitCreate
 */
export const BenefitCreate = Schema.Union([
  BenefitCustomCreate,
  BenefitDiscordCreate,
  BenefitGitHubRepositoryCreate,
  BenefitDownloadablesCreate,
  BenefitLicenseKeysCreate,
  BenefitMeterCreditCreate,
  BenefitFeatureFlagCreate,
  BenefitSlackSharedChannelCreate,
]);
export type BenefitCreate = typeof BenefitCreate.Type;

/**
 * BenefitCustomPublic
 */
export class BenefitCustomPublic extends Schema.Opaque<BenefitCustomPublic>()(
  Schema.Struct({
    /** The ID of the benefit. */
    id: Schema.String,
    /** Creation timestamp of the object. */
    created_at: Schema.DateTimeUtcFromString,
    /** Last modification timestamp of the object. */
    modified_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    type: Schema.Literal("custom"),
    /** The description of the benefit. */
    description: Schema.String,
    /** Whether the benefit is selectable when creating a product. */
    selectable: Schema.Boolean,
    /** Whether the benefit is deletable. */
    deletable: Schema.Boolean,
    /** Whether the benefit is deleted. */
    is_deleted: Schema.Boolean,
    /** The ID of the organization owning the benefit. */
    organization_id: Schema.String,
  }),
) {}

/**
 * Properties available to subscribers for a benefit of type `custom`.
 */
export class BenefitCustomSubscriberProperties extends Schema.Opaque<BenefitCustomSubscriberProperties>()(
  Schema.Struct({
    note: Schema.NullOr(Schema.NullOr(Schema.String)),
  }),
) {}

/**
 * BenefitSubscriberOrganization
 */
export class BenefitSubscriberOrganization extends Schema.Opaque<BenefitSubscriberOrganization>()(
  Schema.Struct({
    /** Creation timestamp of the object. */
    created_at: Schema.DateTimeUtcFromString,
    /** Last modification timestamp of the object. */
    modified_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** The ID of the object. */
    id: Schema.String,
    /** Organization name shown in checkout, customer portal, emails etc. */
    name: Schema.String,
    /** Unique organization slug in checkout, customer portal and credit card statements. */
    slug: Schema.String,
    /** Avatar URL shown in checkout, customer portal, emails etc. */
    avatar_url: Schema.NullOr(Schema.String),
    proration_behavior: openEnum(SubscriptionProrationBehavior),
    /** Whether customers can update their subscriptions from the customer portal. */
    allow_customer_updates: Schema.Boolean,
  }),
) {}

/**
 * BenefitCustomSubscriber
 */
export class BenefitCustomSubscriber extends Schema.Opaque<BenefitCustomSubscriber>()(
  Schema.Struct({
    /** The ID of the benefit. */
    id: Schema.String,
    /** Creation timestamp of the object. */
    created_at: Schema.DateTimeUtcFromString,
    /** Last modification timestamp of the object. */
    modified_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    type: Schema.Literal("custom"),
    /** The description of the benefit. */
    description: Schema.String,
    /** Whether the benefit is selectable when creating a product. */
    selectable: Schema.Boolean,
    /** Whether the benefit is deletable. */
    deletable: Schema.Boolean,
    /** Whether the benefit is deleted. */
    is_deleted: Schema.Boolean,
    /** The ID of the organization owning the benefit. */
    organization_id: Schema.String,
    organization: BenefitSubscriberOrganization,
    properties: BenefitCustomSubscriberProperties,
  }),
) {}

/**
 * BenefitCustomUpdate
 */
export class BenefitCustomUpdate extends Schema.Opaque<BenefitCustomUpdate>()(
  Schema.Struct({
    /** Key-value object allowing you to store additional information. The key must be a string with a maximum length of **40 characters**. The value must be either: * A string with a maximum length of **500 characters** * An integer * A floating-point number * A boolean You can store up to **50 key-value pairs**. */
    metadata: Schema.optionalKey(
      Schema.Record(Schema.String, Schema.Union([Schema.String, Schema.Number, Schema.Boolean])),
    ),
    /** The description of the benefit. Will be displayed on products having this benefit. */
    description: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** The visibility of the benefit in the customer portal. */
    visibility: Schema.optionalKey(Schema.NullOr(BenefitVisibility)),
    type: Schema.Literal("custom"),
    properties: Schema.optionalKey(Schema.NullOr(BenefitCustomProperties)),
  }),
) {}

/**
 * BenefitGrantMetadata
 */
export class BenefitGrantMetadata extends Schema.Opaque<BenefitGrantMetadata>()(
  Schema.Struct({
    benefit_id: Schema.String,
    benefit_grant_id: Schema.String,
    benefit_type: openEnum(BenefitType),
    member_id: Schema.optionalKey(Schema.String),
  }),
) {}

/**
 * An event created by Polar when a benefit is cycled.
 */
export class BenefitCycledEvent extends Schema.Opaque<BenefitCycledEvent>()(
  Schema.Struct({
    /** The ID of the object. */
    id: Schema.String,
    /** The timestamp of the event. */
    timestamp: Schema.DateTimeUtcFromString,
    /** The ID of the organization owning the event. */
    organization_id: Schema.String,
    /** ID of the customer in your Polar organization associated with the event. */
    customer_id: Schema.NullOr(Schema.String),
    /** The customer associated with the event. */
    customer: Schema.NullOr(Customer),
    /** ID of the customer in your system associated with the event. */
    external_customer_id: Schema.NullOr(Schema.String),
    /** ID of the member within the customer's organization who performed the action inside B2B. */
    member_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** ID of the member in your system within the customer's organization who performed the action inside B2B. */
    external_member_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** Number of direct child events linked to this event. */
    child_count: Schema.optionalKey(Schema.Number),
    /** The ID of the parent event. */
    parent_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** Human readable label of the event type. */
    label: Schema.String,
    /** The source of the event. `system` events are created by Polar. `user` events are the one you create through our ingestion API. */
    source: Schema.Literal("system"),
    /** The name of the event. */
    name: Schema.Literal("benefit.cycled"),
    metadata: BenefitGrantMetadata,
  }),
) {}

/**
 * BenefitDiscordPublic
 */
export class BenefitDiscordPublic extends Schema.Opaque<BenefitDiscordPublic>()(
  Schema.Struct({
    /** The ID of the benefit. */
    id: Schema.String,
    /** Creation timestamp of the object. */
    created_at: Schema.DateTimeUtcFromString,
    /** Last modification timestamp of the object. */
    modified_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    type: Schema.Literal("discord"),
    /** The description of the benefit. */
    description: Schema.String,
    /** Whether the benefit is selectable when creating a product. */
    selectable: Schema.Boolean,
    /** Whether the benefit is deletable. */
    deletable: Schema.Boolean,
    /** Whether the benefit is deleted. */
    is_deleted: Schema.Boolean,
    /** The ID of the organization owning the benefit. */
    organization_id: Schema.String,
  }),
) {}

/**
 * Properties available to subscribers for a benefit of type `discord`.
 */
export class BenefitDiscordSubscriberProperties extends Schema.Opaque<BenefitDiscordSubscriberProperties>()(
  Schema.Struct({
    /** The ID of the Discord server. */
    guild_id: Schema.String,
  }),
) {}

/**
 * BenefitDiscordSubscriber
 */
export class BenefitDiscordSubscriber extends Schema.Opaque<BenefitDiscordSubscriber>()(
  Schema.Struct({
    /** The ID of the benefit. */
    id: Schema.String,
    /** Creation timestamp of the object. */
    created_at: Schema.DateTimeUtcFromString,
    /** Last modification timestamp of the object. */
    modified_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    type: Schema.Literal("discord"),
    /** The description of the benefit. */
    description: Schema.String,
    /** Whether the benefit is selectable when creating a product. */
    selectable: Schema.Boolean,
    /** Whether the benefit is deletable. */
    deletable: Schema.Boolean,
    /** Whether the benefit is deleted. */
    is_deleted: Schema.Boolean,
    /** The ID of the organization owning the benefit. */
    organization_id: Schema.String,
    organization: BenefitSubscriberOrganization,
    properties: BenefitDiscordSubscriberProperties,
  }),
) {}

/**
 * BenefitDiscordUpdate
 */
export class BenefitDiscordUpdate extends Schema.Opaque<BenefitDiscordUpdate>()(
  Schema.Struct({
    /** Key-value object allowing you to store additional information. The key must be a string with a maximum length of **40 characters**. The value must be either: * A string with a maximum length of **500 characters** * An integer * A floating-point number * A boolean You can store up to **50 key-value pairs**. */
    metadata: Schema.optionalKey(
      Schema.Record(Schema.String, Schema.Union([Schema.String, Schema.Number, Schema.Boolean])),
    ),
    /** The description of the benefit. Will be displayed on products having this benefit. */
    description: Schema.optionalKey(Schema.NullOr(Schema.String)),
    type: Schema.Literal("discord"),
    properties: Schema.optionalKey(Schema.NullOr(BenefitDiscordCreateProperties)),
  }),
) {}

/**
 * BenefitDownloadableFile
 */
export class BenefitDownloadableFile extends Schema.Opaque<BenefitDownloadableFile>()(
  Schema.Struct({
    /** The ID of the object. */
    id: Schema.String,
    organization_id: Schema.String,
    name: Schema.String,
    path: Schema.String,
    mime_type: Schema.String,
    size: Schema.Number,
    storage_version: Schema.NullOr(Schema.String),
    checksum_etag: Schema.NullOr(Schema.String),
    checksum_sha256_base64: Schema.NullOr(Schema.String),
    checksum_sha256_hex: Schema.NullOr(Schema.String),
    last_modified_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    version: Schema.NullOr(Schema.String),
    service: Schema.Literal("downloadable"),
    is_uploaded: Schema.Boolean,
    created_at: Schema.DateTimeUtcFromString,
    flagged_malicious_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** Number of distinct customers or members who downloaded the file. */
    downloaders: Schema.Number,
    /** Total number of downloads for the file. */
    downloads: Schema.Number,
    size_readable: Schema.String,
  }),
) {}

/**
 * BenefitDownloadablesPublic
 */
export class BenefitDownloadablesPublic extends Schema.Opaque<BenefitDownloadablesPublic>()(
  Schema.Struct({
    /** The ID of the benefit. */
    id: Schema.String,
    /** Creation timestamp of the object. */
    created_at: Schema.DateTimeUtcFromString,
    /** Last modification timestamp of the object. */
    modified_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    type: Schema.Literal("downloadables"),
    /** The description of the benefit. */
    description: Schema.String,
    /** Whether the benefit is selectable when creating a product. */
    selectable: Schema.Boolean,
    /** Whether the benefit is deletable. */
    deletable: Schema.Boolean,
    /** Whether the benefit is deleted. */
    is_deleted: Schema.Boolean,
    /** The ID of the organization owning the benefit. */
    organization_id: Schema.String,
  }),
) {}

/**
 * BenefitDownloadablesSubscriberProperties
 */
export class BenefitDownloadablesSubscriberProperties extends Schema.Opaque<BenefitDownloadablesSubscriberProperties>()(
  Schema.Struct({
    active_files: Schema.Array(Schema.String),
  }),
) {}

/**
 * BenefitDownloadablesSubscriber
 */
export class BenefitDownloadablesSubscriber extends Schema.Opaque<BenefitDownloadablesSubscriber>()(
  Schema.Struct({
    /** The ID of the benefit. */
    id: Schema.String,
    /** Creation timestamp of the object. */
    created_at: Schema.DateTimeUtcFromString,
    /** Last modification timestamp of the object. */
    modified_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    type: Schema.Literal("downloadables"),
    /** The description of the benefit. */
    description: Schema.String,
    /** Whether the benefit is selectable when creating a product. */
    selectable: Schema.Boolean,
    /** Whether the benefit is deletable. */
    deletable: Schema.Boolean,
    /** Whether the benefit is deleted. */
    is_deleted: Schema.Boolean,
    /** The ID of the organization owning the benefit. */
    organization_id: Schema.String,
    organization: BenefitSubscriberOrganization,
    properties: BenefitDownloadablesSubscriberProperties,
  }),
) {}

/**
 * BenefitDownloadablesUpdate
 */
export class BenefitDownloadablesUpdate extends Schema.Opaque<BenefitDownloadablesUpdate>()(
  Schema.Struct({
    /** Key-value object allowing you to store additional information. The key must be a string with a maximum length of **40 characters**. The value must be either: * A string with a maximum length of **500 characters** * An integer * A floating-point number * A boolean You can store up to **50 key-value pairs**. */
    metadata: Schema.optionalKey(
      Schema.Record(Schema.String, Schema.Union([Schema.String, Schema.Number, Schema.Boolean])),
    ),
    /** The description of the benefit. Will be displayed on products having this benefit. */
    description: Schema.optionalKey(Schema.NullOr(Schema.String)),
    type: Schema.Literal("downloadables"),
    properties: Schema.optionalKey(Schema.NullOr(BenefitDownloadablesCreateProperties)),
  }),
) {}

/**
 * BenefitFeatureFlagPublic
 */
export class BenefitFeatureFlagPublic extends Schema.Opaque<BenefitFeatureFlagPublic>()(
  Schema.Struct({
    /** The ID of the benefit. */
    id: Schema.String,
    /** Creation timestamp of the object. */
    created_at: Schema.DateTimeUtcFromString,
    /** Last modification timestamp of the object. */
    modified_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    type: Schema.Literal("feature_flag"),
    /** The description of the benefit. */
    description: Schema.String,
    /** Whether the benefit is selectable when creating a product. */
    selectable: Schema.Boolean,
    /** Whether the benefit is deletable. */
    deletable: Schema.Boolean,
    /** Whether the benefit is deleted. */
    is_deleted: Schema.Boolean,
    /** The ID of the organization owning the benefit. */
    organization_id: Schema.String,
  }),
) {}

/**
 * Properties available to subscribers for a benefit of type `feature_flag`.
 */
export class BenefitFeatureFlagSubscriberProperties extends Schema.Opaque<BenefitFeatureFlagSubscriberProperties>()(
  Schema.Struct({}),
) {}

/**
 * BenefitFeatureFlagSubscriber
 */
export class BenefitFeatureFlagSubscriber extends Schema.Opaque<BenefitFeatureFlagSubscriber>()(
  Schema.Struct({
    /** The ID of the benefit. */
    id: Schema.String,
    /** Creation timestamp of the object. */
    created_at: Schema.DateTimeUtcFromString,
    /** Last modification timestamp of the object. */
    modified_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    type: Schema.Literal("feature_flag"),
    /** The description of the benefit. */
    description: Schema.String,
    /** Whether the benefit is selectable when creating a product. */
    selectable: Schema.Boolean,
    /** Whether the benefit is deletable. */
    deletable: Schema.Boolean,
    /** Whether the benefit is deleted. */
    is_deleted: Schema.Boolean,
    /** The ID of the organization owning the benefit. */
    organization_id: Schema.String,
    organization: BenefitSubscriberOrganization,
    properties: BenefitFeatureFlagSubscriberProperties,
  }),
) {}

/**
 * BenefitFeatureFlagUpdate
 */
export class BenefitFeatureFlagUpdate extends Schema.Opaque<BenefitFeatureFlagUpdate>()(
  Schema.Struct({
    /** Key-value object allowing you to store additional information. The key must be a string with a maximum length of **40 characters**. The value must be either: * A string with a maximum length of **500 characters** * An integer * A floating-point number * A boolean You can store up to **50 key-value pairs**. */
    metadata: Schema.optionalKey(
      Schema.Record(Schema.String, Schema.Union([Schema.String, Schema.Number, Schema.Boolean])),
    ),
    /** The description of the benefit. Will be displayed on products having this benefit. */
    description: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** The visibility of the benefit in the customer portal. */
    visibility: Schema.optionalKey(Schema.NullOr(BenefitVisibility)),
    type: Schema.Literal("feature_flag"),
    properties: Schema.optionalKey(Schema.NullOr(BenefitFeatureFlagProperties)),
  }),
) {}

/**
 * BenefitGitHubRepositoryPublic
 */
export class BenefitGitHubRepositoryPublic extends Schema.Opaque<BenefitGitHubRepositoryPublic>()(
  Schema.Struct({
    /** The ID of the benefit. */
    id: Schema.String,
    /** Creation timestamp of the object. */
    created_at: Schema.DateTimeUtcFromString,
    /** Last modification timestamp of the object. */
    modified_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    type: Schema.Literal("github_repository"),
    /** The description of the benefit. */
    description: Schema.String,
    /** Whether the benefit is selectable when creating a product. */
    selectable: Schema.Boolean,
    /** Whether the benefit is deletable. */
    deletable: Schema.Boolean,
    /** Whether the benefit is deleted. */
    is_deleted: Schema.Boolean,
    /** The ID of the organization owning the benefit. */
    organization_id: Schema.String,
  }),
) {}

/**
 * Properties available to subscribers for a benefit of type `github_repository`.
 */
export class BenefitGitHubRepositorySubscriberProperties extends Schema.Opaque<BenefitGitHubRepositorySubscriberProperties>()(
  Schema.Struct({
    /** The owner of the repository. */
    repository_owner: Schema.String,
    /** The name of the repository. */
    repository_name: Schema.String,
  }),
) {}

/**
 * BenefitGitHubRepositorySubscriber
 */
export class BenefitGitHubRepositorySubscriber extends Schema.Opaque<BenefitGitHubRepositorySubscriber>()(
  Schema.Struct({
    /** The ID of the benefit. */
    id: Schema.String,
    /** Creation timestamp of the object. */
    created_at: Schema.DateTimeUtcFromString,
    /** Last modification timestamp of the object. */
    modified_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    type: Schema.Literal("github_repository"),
    /** The description of the benefit. */
    description: Schema.String,
    /** Whether the benefit is selectable when creating a product. */
    selectable: Schema.Boolean,
    /** Whether the benefit is deletable. */
    deletable: Schema.Boolean,
    /** Whether the benefit is deleted. */
    is_deleted: Schema.Boolean,
    /** The ID of the organization owning the benefit. */
    organization_id: Schema.String,
    organization: BenefitSubscriberOrganization,
    properties: BenefitGitHubRepositorySubscriberProperties,
  }),
) {}

/**
 * BenefitGitHubRepositoryUpdate
 */
export class BenefitGitHubRepositoryUpdate extends Schema.Opaque<BenefitGitHubRepositoryUpdate>()(
  Schema.Struct({
    /** Key-value object allowing you to store additional information. The key must be a string with a maximum length of **40 characters**. The value must be either: * A string with a maximum length of **500 characters** * An integer * A floating-point number * A boolean You can store up to **50 key-value pairs**. */
    metadata: Schema.optionalKey(
      Schema.Record(Schema.String, Schema.Union([Schema.String, Schema.Number, Schema.Boolean])),
    ),
    /** The description of the benefit. Will be displayed on products having this benefit. */
    description: Schema.optionalKey(Schema.NullOr(Schema.String)),
    type: Schema.Literal("github_repository"),
    properties: Schema.optionalKey(Schema.NullOr(BenefitGitHubRepositoryCreateProperties)),
  }),
) {}

/**
 * BenefitGrantCustomProperties
 */
export class BenefitGrantCustomProperties extends Schema.Opaque<BenefitGrantCustomProperties>()(
  Schema.Struct({}),
) {}

/**
 * BenefitGrantDiscordProperties
 */
export class BenefitGrantDiscordProperties extends Schema.Opaque<BenefitGrantDiscordProperties>()(
  Schema.Struct({
    account_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    guild_id: Schema.optionalKey(Schema.String),
    role_id: Schema.optionalKey(Schema.String),
    granted_account_id: Schema.optionalKey(Schema.String),
  }),
) {}

/**
 * BenefitGrantDownloadablesProperties
 */
export class BenefitGrantDownloadablesProperties extends Schema.Opaque<BenefitGrantDownloadablesProperties>()(
  Schema.Struct({
    files: Schema.optionalKey(Schema.Array(Schema.String)),
  }),
) {}

/**
 * BenefitGrantError
 */
export class BenefitGrantError extends Schema.Opaque<BenefitGrantError>()(
  Schema.Struct({
    message: Schema.String,
    type: Schema.String,
    timestamp: Schema.String,
  }),
) {}

/**
 * BenefitGrantFeatureFlagProperties
 */
export class BenefitGrantFeatureFlagProperties extends Schema.Opaque<BenefitGrantFeatureFlagProperties>()(
  Schema.Struct({}),
) {}

/**
 * BenefitGrantGitHubRepositoryProperties
 */
export class BenefitGrantGitHubRepositoryProperties extends Schema.Opaque<BenefitGrantGitHubRepositoryProperties>()(
  Schema.Struct({
    account_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    repository_owner: Schema.optionalKey(Schema.String),
    repository_name: Schema.optionalKey(Schema.String),
    permission: Schema.optionalKey(openEnum(Permission)),
    granted_account_id: Schema.optionalKey(Schema.String),
  }),
) {}

/**
 * BenefitGrantLicenseKeysProperties
 */
export class BenefitGrantLicenseKeysProperties extends Schema.Opaque<BenefitGrantLicenseKeysProperties>()(
  Schema.Struct({
    user_provided_key: Schema.optionalKey(Schema.String),
    license_key_id: Schema.optionalKey(Schema.String),
    display_key: Schema.optionalKey(Schema.String),
  }),
) {}

/**
 * BenefitGrantSlackSharedChannelProperties
 */
export class BenefitGrantSlackSharedChannelProperties extends Schema.Opaque<BenefitGrantSlackSharedChannelProperties>()(
  Schema.Struct({
    invited_email: Schema.optionalKey(Schema.String),
    channel_id: Schema.optionalKey(Schema.String),
    channel_name: Schema.optionalKey(Schema.String),
    invite_id: Schema.optionalKey(Schema.String),
    invite_url: Schema.optionalKey(Schema.String),
    connected_team_id: Schema.optionalKey(Schema.String),
  }),
) {}

/**
 * A member of a customer.
 */
export class Member extends Schema.Opaque<Member>()(
  Schema.Struct({
    /** The ID of the member. */
    id: Schema.String,
    /** Creation timestamp of the object. */
    created_at: Schema.DateTimeUtcFromString,
    /** Last modification timestamp of the object. */
    modified_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** The ID of the customer this member belongs to. */
    customer_id: Schema.String,
    /** The email address of the member. */
    email: Schema.String,
    /** The name of the member. */
    name: Schema.NullOr(Schema.String),
    /** The ID of the member in your system. This must be unique within the customer. */
    external_id: Schema.NullOr(Schema.String),
    role: openEnum(MemberRole),
  }),
) {}

/**
 * BenefitGrant
 */
export class BenefitGrant extends Schema.Opaque<BenefitGrant>()(
  Schema.Struct({
    /** Creation timestamp of the object. */
    created_at: Schema.DateTimeUtcFromString,
    /** Last modification timestamp of the object. */
    modified_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** The ID of the grant. */
    id: Schema.String,
    /** The timestamp when the benefit was granted. If `None`, the benefit is not granted. */
    granted_at: Schema.optionalKey(Schema.NullOr(Schema.DateTimeUtcFromString)),
    /** Whether the benefit is granted. */
    is_granted: Schema.Boolean,
    /** The timestamp when the benefit was revoked. If `None`, the benefit is not revoked. */
    revoked_at: Schema.optionalKey(Schema.NullOr(Schema.DateTimeUtcFromString)),
    /** Whether the benefit is revoked. */
    is_revoked: Schema.Boolean,
    /** The ID of the subscription that granted this benefit. */
    subscription_id: Schema.NullOr(Schema.String),
    /** The ID of the order that granted this benefit. */
    order_id: Schema.NullOr(Schema.String),
    /** The ID of the customer concerned by this grant. */
    customer_id: Schema.String,
    /** The ID of the member concerned by this grant. */
    member_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** The ID of the benefit concerned by this grant. */
    benefit_id: Schema.String,
    /** The error information if the benefit grant failed with an unrecoverable error. */
    error: Schema.optionalKey(Schema.NullOr(BenefitGrantError)),
    customer: Customer,
    member: Schema.optionalKey(Schema.NullOr(Member)),
    benefit: Benefit,
    properties: Schema.Union([
      BenefitGrantDiscordProperties,
      BenefitGrantGitHubRepositoryProperties,
      BenefitGrantDownloadablesProperties,
      BenefitGrantLicenseKeysProperties,
      BenefitGrantCustomProperties,
      BenefitGrantFeatureFlagProperties,
      BenefitGrantSlackSharedChannelProperties,
    ]),
  }),
) {}

/**
 * BenefitGrantCustomWebhook
 */
export class BenefitGrantCustomWebhook extends Schema.Opaque<BenefitGrantCustomWebhook>()(
  Schema.Struct({
    /** Creation timestamp of the object. */
    created_at: Schema.DateTimeUtcFromString,
    /** Last modification timestamp of the object. */
    modified_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** The ID of the grant. */
    id: Schema.String,
    /** The timestamp when the benefit was granted. If `None`, the benefit is not granted. */
    granted_at: Schema.optionalKey(Schema.NullOr(Schema.DateTimeUtcFromString)),
    /** Whether the benefit is granted. */
    is_granted: Schema.Boolean,
    /** The timestamp when the benefit was revoked. If `None`, the benefit is not revoked. */
    revoked_at: Schema.optionalKey(Schema.NullOr(Schema.DateTimeUtcFromString)),
    /** Whether the benefit is revoked. */
    is_revoked: Schema.Boolean,
    /** The ID of the subscription that granted this benefit. */
    subscription_id: Schema.NullOr(Schema.String),
    /** The ID of the order that granted this benefit. */
    order_id: Schema.NullOr(Schema.String),
    /** The ID of the customer concerned by this grant. */
    customer_id: Schema.String,
    /** The ID of the member concerned by this grant. */
    member_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** The ID of the benefit concerned by this grant. */
    benefit_id: Schema.String,
    /** The error information if the benefit grant failed with an unrecoverable error. */
    error: Schema.optionalKey(Schema.NullOr(BenefitGrantError)),
    customer: Customer,
    member: Schema.optionalKey(Schema.NullOr(Member)),
    benefit: BenefitCustom,
    properties: BenefitGrantCustomProperties,
    previous_properties: Schema.optionalKey(Schema.NullOr(BenefitGrantCustomProperties)),
  }),
) {}

/**
 * BenefitGrantDiscordWebhook
 */
export class BenefitGrantDiscordWebhook extends Schema.Opaque<BenefitGrantDiscordWebhook>()(
  Schema.Struct({
    /** Creation timestamp of the object. */
    created_at: Schema.DateTimeUtcFromString,
    /** Last modification timestamp of the object. */
    modified_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** The ID of the grant. */
    id: Schema.String,
    /** The timestamp when the benefit was granted. If `None`, the benefit is not granted. */
    granted_at: Schema.optionalKey(Schema.NullOr(Schema.DateTimeUtcFromString)),
    /** Whether the benefit is granted. */
    is_granted: Schema.Boolean,
    /** The timestamp when the benefit was revoked. If `None`, the benefit is not revoked. */
    revoked_at: Schema.optionalKey(Schema.NullOr(Schema.DateTimeUtcFromString)),
    /** Whether the benefit is revoked. */
    is_revoked: Schema.Boolean,
    /** The ID of the subscription that granted this benefit. */
    subscription_id: Schema.NullOr(Schema.String),
    /** The ID of the order that granted this benefit. */
    order_id: Schema.NullOr(Schema.String),
    /** The ID of the customer concerned by this grant. */
    customer_id: Schema.String,
    /** The ID of the member concerned by this grant. */
    member_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** The ID of the benefit concerned by this grant. */
    benefit_id: Schema.String,
    /** The error information if the benefit grant failed with an unrecoverable error. */
    error: Schema.optionalKey(Schema.NullOr(BenefitGrantError)),
    customer: Customer,
    member: Schema.optionalKey(Schema.NullOr(Member)),
    benefit: BenefitDiscord,
    properties: BenefitGrantDiscordProperties,
    previous_properties: Schema.optionalKey(Schema.NullOr(BenefitGrantDiscordProperties)),
  }),
) {}

/**
 * BenefitGrantDownloadablesWebhook
 */
export class BenefitGrantDownloadablesWebhook extends Schema.Opaque<BenefitGrantDownloadablesWebhook>()(
  Schema.Struct({
    /** Creation timestamp of the object. */
    created_at: Schema.DateTimeUtcFromString,
    /** Last modification timestamp of the object. */
    modified_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** The ID of the grant. */
    id: Schema.String,
    /** The timestamp when the benefit was granted. If `None`, the benefit is not granted. */
    granted_at: Schema.optionalKey(Schema.NullOr(Schema.DateTimeUtcFromString)),
    /** Whether the benefit is granted. */
    is_granted: Schema.Boolean,
    /** The timestamp when the benefit was revoked. If `None`, the benefit is not revoked. */
    revoked_at: Schema.optionalKey(Schema.NullOr(Schema.DateTimeUtcFromString)),
    /** Whether the benefit is revoked. */
    is_revoked: Schema.Boolean,
    /** The ID of the subscription that granted this benefit. */
    subscription_id: Schema.NullOr(Schema.String),
    /** The ID of the order that granted this benefit. */
    order_id: Schema.NullOr(Schema.String),
    /** The ID of the customer concerned by this grant. */
    customer_id: Schema.String,
    /** The ID of the member concerned by this grant. */
    member_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** The ID of the benefit concerned by this grant. */
    benefit_id: Schema.String,
    /** The error information if the benefit grant failed with an unrecoverable error. */
    error: Schema.optionalKey(Schema.NullOr(BenefitGrantError)),
    customer: Customer,
    member: Schema.optionalKey(Schema.NullOr(Member)),
    benefit: BenefitDownloadables,
    properties: BenefitGrantDownloadablesProperties,
    previous_properties: Schema.optionalKey(Schema.NullOr(BenefitGrantDownloadablesProperties)),
  }),
) {}

/**
 * BenefitGrantFeatureFlagWebhook
 */
export class BenefitGrantFeatureFlagWebhook extends Schema.Opaque<BenefitGrantFeatureFlagWebhook>()(
  Schema.Struct({
    /** Creation timestamp of the object. */
    created_at: Schema.DateTimeUtcFromString,
    /** Last modification timestamp of the object. */
    modified_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** The ID of the grant. */
    id: Schema.String,
    /** The timestamp when the benefit was granted. If `None`, the benefit is not granted. */
    granted_at: Schema.optionalKey(Schema.NullOr(Schema.DateTimeUtcFromString)),
    /** Whether the benefit is granted. */
    is_granted: Schema.Boolean,
    /** The timestamp when the benefit was revoked. If `None`, the benefit is not revoked. */
    revoked_at: Schema.optionalKey(Schema.NullOr(Schema.DateTimeUtcFromString)),
    /** Whether the benefit is revoked. */
    is_revoked: Schema.Boolean,
    /** The ID of the subscription that granted this benefit. */
    subscription_id: Schema.NullOr(Schema.String),
    /** The ID of the order that granted this benefit. */
    order_id: Schema.NullOr(Schema.String),
    /** The ID of the customer concerned by this grant. */
    customer_id: Schema.String,
    /** The ID of the member concerned by this grant. */
    member_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** The ID of the benefit concerned by this grant. */
    benefit_id: Schema.String,
    /** The error information if the benefit grant failed with an unrecoverable error. */
    error: Schema.optionalKey(Schema.NullOr(BenefitGrantError)),
    customer: Customer,
    member: Schema.optionalKey(Schema.NullOr(Member)),
    benefit: BenefitFeatureFlag,
    properties: BenefitGrantFeatureFlagProperties,
    previous_properties: Schema.optionalKey(Schema.NullOr(BenefitGrantFeatureFlagProperties)),
  }),
) {}

/**
 * BenefitGrantGitHubRepositoryWebhook
 */
export class BenefitGrantGitHubRepositoryWebhook extends Schema.Opaque<BenefitGrantGitHubRepositoryWebhook>()(
  Schema.Struct({
    /** Creation timestamp of the object. */
    created_at: Schema.DateTimeUtcFromString,
    /** Last modification timestamp of the object. */
    modified_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** The ID of the grant. */
    id: Schema.String,
    /** The timestamp when the benefit was granted. If `None`, the benefit is not granted. */
    granted_at: Schema.optionalKey(Schema.NullOr(Schema.DateTimeUtcFromString)),
    /** Whether the benefit is granted. */
    is_granted: Schema.Boolean,
    /** The timestamp when the benefit was revoked. If `None`, the benefit is not revoked. */
    revoked_at: Schema.optionalKey(Schema.NullOr(Schema.DateTimeUtcFromString)),
    /** Whether the benefit is revoked. */
    is_revoked: Schema.Boolean,
    /** The ID of the subscription that granted this benefit. */
    subscription_id: Schema.NullOr(Schema.String),
    /** The ID of the order that granted this benefit. */
    order_id: Schema.NullOr(Schema.String),
    /** The ID of the customer concerned by this grant. */
    customer_id: Schema.String,
    /** The ID of the member concerned by this grant. */
    member_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** The ID of the benefit concerned by this grant. */
    benefit_id: Schema.String,
    /** The error information if the benefit grant failed with an unrecoverable error. */
    error: Schema.optionalKey(Schema.NullOr(BenefitGrantError)),
    customer: Customer,
    member: Schema.optionalKey(Schema.NullOr(Member)),
    benefit: BenefitGitHubRepository,
    properties: BenefitGrantGitHubRepositoryProperties,
    previous_properties: Schema.optionalKey(Schema.NullOr(BenefitGrantGitHubRepositoryProperties)),
  }),
) {}

/**
 * BenefitGrantLicenseKeysWebhook
 */
export class BenefitGrantLicenseKeysWebhook extends Schema.Opaque<BenefitGrantLicenseKeysWebhook>()(
  Schema.Struct({
    /** Creation timestamp of the object. */
    created_at: Schema.DateTimeUtcFromString,
    /** Last modification timestamp of the object. */
    modified_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** The ID of the grant. */
    id: Schema.String,
    /** The timestamp when the benefit was granted. If `None`, the benefit is not granted. */
    granted_at: Schema.optionalKey(Schema.NullOr(Schema.DateTimeUtcFromString)),
    /** Whether the benefit is granted. */
    is_granted: Schema.Boolean,
    /** The timestamp when the benefit was revoked. If `None`, the benefit is not revoked. */
    revoked_at: Schema.optionalKey(Schema.NullOr(Schema.DateTimeUtcFromString)),
    /** Whether the benefit is revoked. */
    is_revoked: Schema.Boolean,
    /** The ID of the subscription that granted this benefit. */
    subscription_id: Schema.NullOr(Schema.String),
    /** The ID of the order that granted this benefit. */
    order_id: Schema.NullOr(Schema.String),
    /** The ID of the customer concerned by this grant. */
    customer_id: Schema.String,
    /** The ID of the member concerned by this grant. */
    member_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** The ID of the benefit concerned by this grant. */
    benefit_id: Schema.String,
    /** The error information if the benefit grant failed with an unrecoverable error. */
    error: Schema.optionalKey(Schema.NullOr(BenefitGrantError)),
    customer: Customer,
    member: Schema.optionalKey(Schema.NullOr(Member)),
    benefit: BenefitLicenseKeys,
    properties: BenefitGrantLicenseKeysProperties,
    previous_properties: Schema.optionalKey(Schema.NullOr(BenefitGrantLicenseKeysProperties)),
  }),
) {}

/**
 * BenefitGrantMeterCreditProperties
 */
export class BenefitGrantMeterCreditProperties extends Schema.Opaque<BenefitGrantMeterCreditProperties>()(
  Schema.Struct({
    last_credited_meter_id: Schema.optionalKey(Schema.String),
    last_credited_units: Schema.optionalKey(Schema.Number),
    last_credited_at: Schema.optionalKey(Schema.String),
  }),
) {}

/**
 * BenefitGrantMeterCreditWebhook
 */
export class BenefitGrantMeterCreditWebhook extends Schema.Opaque<BenefitGrantMeterCreditWebhook>()(
  Schema.Struct({
    /** Creation timestamp of the object. */
    created_at: Schema.DateTimeUtcFromString,
    /** Last modification timestamp of the object. */
    modified_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** The ID of the grant. */
    id: Schema.String,
    /** The timestamp when the benefit was granted. If `None`, the benefit is not granted. */
    granted_at: Schema.optionalKey(Schema.NullOr(Schema.DateTimeUtcFromString)),
    /** Whether the benefit is granted. */
    is_granted: Schema.Boolean,
    /** The timestamp when the benefit was revoked. If `None`, the benefit is not revoked. */
    revoked_at: Schema.optionalKey(Schema.NullOr(Schema.DateTimeUtcFromString)),
    /** Whether the benefit is revoked. */
    is_revoked: Schema.Boolean,
    /** The ID of the subscription that granted this benefit. */
    subscription_id: Schema.NullOr(Schema.String),
    /** The ID of the order that granted this benefit. */
    order_id: Schema.NullOr(Schema.String),
    /** The ID of the customer concerned by this grant. */
    customer_id: Schema.String,
    /** The ID of the member concerned by this grant. */
    member_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** The ID of the benefit concerned by this grant. */
    benefit_id: Schema.String,
    /** The error information if the benefit grant failed with an unrecoverable error. */
    error: Schema.optionalKey(Schema.NullOr(BenefitGrantError)),
    customer: Customer,
    member: Schema.optionalKey(Schema.NullOr(Member)),
    benefit: BenefitMeterCredit,
    properties: BenefitGrantMeterCreditProperties,
    previous_properties: Schema.optionalKey(Schema.NullOr(BenefitGrantMeterCreditProperties)),
  }),
) {}

/**
 * BenefitGrantSlackSharedChannelWebhook
 */
export class BenefitGrantSlackSharedChannelWebhook extends Schema.Opaque<BenefitGrantSlackSharedChannelWebhook>()(
  Schema.Struct({
    /** Creation timestamp of the object. */
    created_at: Schema.DateTimeUtcFromString,
    /** Last modification timestamp of the object. */
    modified_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** The ID of the grant. */
    id: Schema.String,
    /** The timestamp when the benefit was granted. If `None`, the benefit is not granted. */
    granted_at: Schema.optionalKey(Schema.NullOr(Schema.DateTimeUtcFromString)),
    /** Whether the benefit is granted. */
    is_granted: Schema.Boolean,
    /** The timestamp when the benefit was revoked. If `None`, the benefit is not revoked. */
    revoked_at: Schema.optionalKey(Schema.NullOr(Schema.DateTimeUtcFromString)),
    /** Whether the benefit is revoked. */
    is_revoked: Schema.Boolean,
    /** The ID of the subscription that granted this benefit. */
    subscription_id: Schema.NullOr(Schema.String),
    /** The ID of the order that granted this benefit. */
    order_id: Schema.NullOr(Schema.String),
    /** The ID of the customer concerned by this grant. */
    customer_id: Schema.String,
    /** The ID of the member concerned by this grant. */
    member_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** The ID of the benefit concerned by this grant. */
    benefit_id: Schema.String,
    /** The error information if the benefit grant failed with an unrecoverable error. */
    error: Schema.optionalKey(Schema.NullOr(BenefitGrantError)),
    customer: Customer,
    member: Schema.optionalKey(Schema.NullOr(Member)),
    benefit: BenefitSlackSharedChannel,
    properties: BenefitGrantSlackSharedChannelProperties,
    previous_properties: Schema.optionalKey(
      Schema.NullOr(BenefitGrantSlackSharedChannelProperties),
    ),
  }),
) {}

/**
 * BenefitGrantWebhook
 */
export const BenefitGrantWebhook = Schema.Union([
  BenefitGrantDiscordWebhook,
  BenefitGrantCustomWebhook,
  BenefitGrantGitHubRepositoryWebhook,
  BenefitGrantDownloadablesWebhook,
  BenefitGrantLicenseKeysWebhook,
  BenefitGrantMeterCreditWebhook,
  BenefitGrantFeatureFlagWebhook,
  BenefitGrantSlackSharedChannelWebhook,
]);
export type BenefitGrantWebhook = typeof BenefitGrantWebhook.Type;

/**
 * An event created by Polar when a benefit is granted to a customer.
 */
export class BenefitGrantedEvent extends Schema.Opaque<BenefitGrantedEvent>()(
  Schema.Struct({
    /** The ID of the object. */
    id: Schema.String,
    /** The timestamp of the event. */
    timestamp: Schema.DateTimeUtcFromString,
    /** The ID of the organization owning the event. */
    organization_id: Schema.String,
    /** ID of the customer in your Polar organization associated with the event. */
    customer_id: Schema.NullOr(Schema.String),
    /** The customer associated with the event. */
    customer: Schema.NullOr(Customer),
    /** ID of the customer in your system associated with the event. */
    external_customer_id: Schema.NullOr(Schema.String),
    /** ID of the member within the customer's organization who performed the action inside B2B. */
    member_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** ID of the member in your system within the customer's organization who performed the action inside B2B. */
    external_member_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** Number of direct child events linked to this event. */
    child_count: Schema.optionalKey(Schema.Number),
    /** The ID of the parent event. */
    parent_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** Human readable label of the event type. */
    label: Schema.String,
    /** The source of the event. `system` events are created by Polar. `user` events are the one you create through our ingestion API. */
    source: Schema.Literal("system"),
    /** The name of the event. */
    name: Schema.Literal("benefit.granted"),
    metadata: BenefitGrantMetadata,
  }),
) {}

/**
 * BenefitLicenseKeysPublic
 */
export class BenefitLicenseKeysPublic extends Schema.Opaque<BenefitLicenseKeysPublic>()(
  Schema.Struct({
    /** The ID of the benefit. */
    id: Schema.String,
    /** Creation timestamp of the object. */
    created_at: Schema.DateTimeUtcFromString,
    /** Last modification timestamp of the object. */
    modified_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    type: Schema.Literal("license_keys"),
    /** The description of the benefit. */
    description: Schema.String,
    /** Whether the benefit is selectable when creating a product. */
    selectable: Schema.Boolean,
    /** Whether the benefit is deletable. */
    deletable: Schema.Boolean,
    /** Whether the benefit is deleted. */
    is_deleted: Schema.Boolean,
    /** The ID of the organization owning the benefit. */
    organization_id: Schema.String,
  }),
) {}

/**
 * BenefitLicenseKeysSubscriberProperties
 */
export class BenefitLicenseKeysSubscriberProperties extends Schema.Opaque<BenefitLicenseKeysSubscriberProperties>()(
  Schema.Struct({
    prefix: Schema.NullOr(Schema.String),
    expires: Schema.NullOr(BenefitLicenseKeyExpirationProperties),
    activations: Schema.NullOr(BenefitLicenseKeyActivationProperties),
    limit_usage: Schema.NullOr(Schema.Number),
  }),
) {}

/**
 * BenefitLicenseKeysSubscriber
 */
export class BenefitLicenseKeysSubscriber extends Schema.Opaque<BenefitLicenseKeysSubscriber>()(
  Schema.Struct({
    /** The ID of the benefit. */
    id: Schema.String,
    /** Creation timestamp of the object. */
    created_at: Schema.DateTimeUtcFromString,
    /** Last modification timestamp of the object. */
    modified_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    type: Schema.Literal("license_keys"),
    /** The description of the benefit. */
    description: Schema.String,
    /** Whether the benefit is selectable when creating a product. */
    selectable: Schema.Boolean,
    /** Whether the benefit is deletable. */
    deletable: Schema.Boolean,
    /** Whether the benefit is deleted. */
    is_deleted: Schema.Boolean,
    /** The ID of the organization owning the benefit. */
    organization_id: Schema.String,
    organization: BenefitSubscriberOrganization,
    properties: BenefitLicenseKeysSubscriberProperties,
  }),
) {}

/**
 * BenefitLicenseKeysUpdate
 */
export class BenefitLicenseKeysUpdate extends Schema.Opaque<BenefitLicenseKeysUpdate>()(
  Schema.Struct({
    /** Key-value object allowing you to store additional information. The key must be a string with a maximum length of **40 characters**. The value must be either: * A string with a maximum length of **500 characters** * An integer * A floating-point number * A boolean You can store up to **50 key-value pairs**. */
    metadata: Schema.optionalKey(
      Schema.Record(Schema.String, Schema.Union([Schema.String, Schema.Number, Schema.Boolean])),
    ),
    /** The description of the benefit. Will be displayed on products having this benefit. */
    description: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** The visibility of the benefit in the customer portal. */
    visibility: Schema.optionalKey(Schema.NullOr(BenefitVisibility)),
    type: Schema.Literal("license_keys"),
    properties: Schema.optionalKey(Schema.NullOr(BenefitLicenseKeysCreateProperties)),
  }),
) {}

/**
 * Properties for a benefit of type `meter_credit`.
 */
export class BenefitMeterCreditPublicProperties extends Schema.Opaque<BenefitMeterCreditPublicProperties>()(
  Schema.Struct({
    units: Schema.Number,
    meter_id: Schema.String,
  }),
) {}

/**
 * A benefit of type `meter_credit`.
 *
 * Grants a number of units on a specific meter.
 */
export class BenefitMeterCreditPublic extends Schema.Opaque<BenefitMeterCreditPublic>()(
  Schema.Struct({
    /** The ID of the benefit. */
    id: Schema.String,
    /** Creation timestamp of the object. */
    created_at: Schema.DateTimeUtcFromString,
    /** Last modification timestamp of the object. */
    modified_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    type: Schema.Literal("meter_credit"),
    /** The description of the benefit. */
    description: Schema.String,
    /** Whether the benefit is selectable when creating a product. */
    selectable: Schema.Boolean,
    /** Whether the benefit is deletable. */
    deletable: Schema.Boolean,
    /** Whether the benefit is deleted. */
    is_deleted: Schema.Boolean,
    /** The ID of the organization owning the benefit. */
    organization_id: Schema.String,
    properties: BenefitMeterCreditPublicProperties,
  }),
) {}

/**
 * Properties available to subscribers for a benefit of type `meter_unit`.
 */
export class BenefitMeterCreditSubscriberProperties extends Schema.Opaque<BenefitMeterCreditSubscriberProperties>()(
  Schema.Struct({
    units: Schema.Number,
    rollover: Schema.Boolean,
    meter_id: Schema.String,
  }),
) {}

/**
 * BenefitMeterCreditSubscriber
 */
export class BenefitMeterCreditSubscriber extends Schema.Opaque<BenefitMeterCreditSubscriber>()(
  Schema.Struct({
    /** The ID of the benefit. */
    id: Schema.String,
    /** Creation timestamp of the object. */
    created_at: Schema.DateTimeUtcFromString,
    /** Last modification timestamp of the object. */
    modified_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    type: Schema.Literal("meter_credit"),
    /** The description of the benefit. */
    description: Schema.String,
    /** Whether the benefit is selectable when creating a product. */
    selectable: Schema.Boolean,
    /** Whether the benefit is deletable. */
    deletable: Schema.Boolean,
    /** Whether the benefit is deleted. */
    is_deleted: Schema.Boolean,
    /** The ID of the organization owning the benefit. */
    organization_id: Schema.String,
    organization: BenefitSubscriberOrganization,
    properties: BenefitMeterCreditSubscriberProperties,
  }),
) {}

/**
 * BenefitMeterCreditUpdate
 */
export class BenefitMeterCreditUpdate extends Schema.Opaque<BenefitMeterCreditUpdate>()(
  Schema.Struct({
    /** Key-value object allowing you to store additional information. The key must be a string with a maximum length of **40 characters**. The value must be either: * A string with a maximum length of **500 characters** * An integer * A floating-point number * A boolean You can store up to **50 key-value pairs**. */
    metadata: Schema.optionalKey(
      Schema.Record(Schema.String, Schema.Union([Schema.String, Schema.Number, Schema.Boolean])),
    ),
    /** The description of the benefit. Will be displayed on products having this benefit. */
    description: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** The visibility of the benefit in the customer portal. */
    visibility: Schema.optionalKey(Schema.NullOr(BenefitVisibility)),
    type: Schema.Literal("meter_credit"),
    properties: Schema.optionalKey(Schema.NullOr(BenefitMeterCreditCreateProperties)),
  }),
) {}

/**
 * BenefitSlackSharedChannelPublic
 */
export class BenefitSlackSharedChannelPublic extends Schema.Opaque<BenefitSlackSharedChannelPublic>()(
  Schema.Struct({
    /** The ID of the benefit. */
    id: Schema.String,
    /** Creation timestamp of the object. */
    created_at: Schema.DateTimeUtcFromString,
    /** Last modification timestamp of the object. */
    modified_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    type: Schema.Literal("slack_shared_channel"),
    /** The description of the benefit. */
    description: Schema.String,
    /** Whether the benefit is selectable when creating a product. */
    selectable: Schema.Boolean,
    /** Whether the benefit is deletable. */
    deletable: Schema.Boolean,
    /** Whether the benefit is deleted. */
    is_deleted: Schema.Boolean,
    /** The ID of the organization owning the benefit. */
    organization_id: Schema.String,
  }),
) {}

/**
 * BenefitPublic
 */
export const BenefitPublic = openUnion(
  [
    BenefitCustomPublic,
    BenefitDiscordPublic,
    BenefitGitHubRepositoryPublic,
    BenefitDownloadablesPublic,
    BenefitLicenseKeysPublic,
    BenefitFeatureFlagPublic,
    BenefitSlackSharedChannelPublic,
    BenefitMeterCreditPublic,
  ],
  "type",
  [
    "custom",
    "discord",
    "downloadables",
    "feature_flag",
    "github_repository",
    "license_keys",
    "meter_credit",
    "slack_shared_channel",
  ],
);
export type BenefitPublic = typeof BenefitPublic.Type;

/**
 * An event created by Polar when a benefit is revoked from a customer.
 */
export class BenefitRevokedEvent extends Schema.Opaque<BenefitRevokedEvent>()(
  Schema.Struct({
    /** The ID of the object. */
    id: Schema.String,
    /** The timestamp of the event. */
    timestamp: Schema.DateTimeUtcFromString,
    /** The ID of the organization owning the event. */
    organization_id: Schema.String,
    /** ID of the customer in your Polar organization associated with the event. */
    customer_id: Schema.NullOr(Schema.String),
    /** The customer associated with the event. */
    customer: Schema.NullOr(Customer),
    /** ID of the customer in your system associated with the event. */
    external_customer_id: Schema.NullOr(Schema.String),
    /** ID of the member within the customer's organization who performed the action inside B2B. */
    member_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** ID of the member in your system within the customer's organization who performed the action inside B2B. */
    external_member_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** Number of direct child events linked to this event. */
    child_count: Schema.optionalKey(Schema.Number),
    /** The ID of the parent event. */
    parent_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** Human readable label of the event type. */
    label: Schema.String,
    /** The source of the event. `system` events are created by Polar. `user` events are the one you create through our ingestion API. */
    source: Schema.Literal("system"),
    /** The name of the event. */
    name: Schema.Literal("benefit.revoked"),
    metadata: BenefitGrantMetadata,
  }),
) {}

/**
 * BenefitSlackSharedChannelSubscriberProperties
 */
export class BenefitSlackSharedChannelSubscriberProperties extends Schema.Opaque<BenefitSlackSharedChannelSubscriberProperties>()(
  Schema.Struct({}),
) {}

/**
 * BenefitSlackSharedChannelSubscriber
 */
export class BenefitSlackSharedChannelSubscriber extends Schema.Opaque<BenefitSlackSharedChannelSubscriber>()(
  Schema.Struct({
    /** The ID of the benefit. */
    id: Schema.String,
    /** Creation timestamp of the object. */
    created_at: Schema.DateTimeUtcFromString,
    /** Last modification timestamp of the object. */
    modified_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    type: Schema.Literal("slack_shared_channel"),
    /** The description of the benefit. */
    description: Schema.String,
    /** Whether the benefit is selectable when creating a product. */
    selectable: Schema.Boolean,
    /** Whether the benefit is deletable. */
    deletable: Schema.Boolean,
    /** Whether the benefit is deleted. */
    is_deleted: Schema.Boolean,
    /** The ID of the organization owning the benefit. */
    organization_id: Schema.String,
    organization: BenefitSubscriberOrganization,
    properties: BenefitSlackSharedChannelSubscriberProperties,
  }),
) {}

/**
 * BenefitSlackSharedChannelUpdate
 */
export class BenefitSlackSharedChannelUpdate extends Schema.Opaque<BenefitSlackSharedChannelUpdate>()(
  Schema.Struct({
    /** Key-value object allowing you to store additional information. The key must be a string with a maximum length of **40 characters**. The value must be either: * A string with a maximum length of **500 characters** * An integer * A floating-point number * A boolean You can store up to **50 key-value pairs**. */
    metadata: Schema.optionalKey(
      Schema.Record(Schema.String, Schema.Union([Schema.String, Schema.Number, Schema.Boolean])),
    ),
    /** The description of the benefit. Will be displayed on products having this benefit. */
    description: Schema.optionalKey(Schema.NullOr(Schema.String)),
    type: Schema.Literal("slack_shared_channel"),
    properties: Schema.optionalKey(Schema.NullOr(BenefitSlackSharedChannelCreateProperties)),
  }),
) {}

/**
 * An event created by Polar when a benefit is updated.
 */
export class BenefitUpdatedEvent extends Schema.Opaque<BenefitUpdatedEvent>()(
  Schema.Struct({
    /** The ID of the object. */
    id: Schema.String,
    /** The timestamp of the event. */
    timestamp: Schema.DateTimeUtcFromString,
    /** The ID of the organization owning the event. */
    organization_id: Schema.String,
    /** ID of the customer in your Polar organization associated with the event. */
    customer_id: Schema.NullOr(Schema.String),
    /** The customer associated with the event. */
    customer: Schema.NullOr(Customer),
    /** ID of the customer in your system associated with the event. */
    external_customer_id: Schema.NullOr(Schema.String),
    /** ID of the member within the customer's organization who performed the action inside B2B. */
    member_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** ID of the member in your system within the customer's organization who performed the action inside B2B. */
    external_member_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** Number of direct child events linked to this event. */
    child_count: Schema.optionalKey(Schema.Number),
    /** The ID of the parent event. */
    parent_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** Human readable label of the event type. */
    label: Schema.String,
    /** The source of the event. `system` events are created by Polar. `user` events are the one you create through our ingestion API. */
    source: Schema.Literal("system"),
    /** The name of the event. */
    name: Schema.Literal("benefit.updated"),
    metadata: BenefitGrantMetadata,
  }),
) {}

/**
 * CannotCreateOrganizationError
 */
export class CannotCreateOrganizationError extends Schema.Opaque<CannotCreateOrganizationError>()(
  Schema.Struct({
    error: Schema.Literal("CannotCreateOrganizationError"),
    detail: Schema.String,
  }),
) {}

/**
 * Additional metadata for a card payment method.
 */
export class CardPaymentMetadata extends Schema.Opaque<CardPaymentMetadata>()(
  Schema.Struct({
    /** The brand of the card used for the payment. */
    brand: Schema.String,
    /** The last 4 digits of the card number. */
    last4: Schema.String,
  }),
) {}

/**
 * Schema of a payment with a card payment method.
 */
export class CardPayment extends Schema.Opaque<CardPayment>()(
  Schema.Struct({
    /** Creation timestamp of the object. */
    created_at: Schema.DateTimeUtcFromString,
    /** Last modification timestamp of the object. */
    modified_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** The ID of the object. */
    id: Schema.String,
    processor: openEnum(PaymentProcessor),
    status: openEnum(PaymentStatus),
    /** The payment amount in cents. */
    amount: Schema.Number,
    /** The payment currency */
    currency: Schema.String,
    /** The payment method used. */
    method: Schema.Literal("card"),
    /** What initiated this payment attempt, e.g. initial purchase, subscription renewal, or an automated dunning retry. */
    trigger: Schema.NullOr(openEnum(PaymentTrigger)),
    /** Error code, if the payment was declined. */
    decline_reason: Schema.NullOr(Schema.String),
    /** Human-readable error message, if the payment was declined. */
    decline_message: Schema.NullOr(Schema.String),
    /** The ID of the organization that owns the payment. */
    organization_id: Schema.String,
    /** The ID of the checkout session associated with this payment. */
    checkout_id: Schema.NullOr(Schema.String),
    /** The ID of the order associated with this payment. */
    order_id: Schema.NullOr(Schema.String),
    /** Additional metadata from the payment processor for internal use. */
    processor_metadata: Schema.optionalKey(Schema.Record(Schema.String, Schema.Unknown)),
    method_metadata: CardPaymentMetadata,
  }),
) {}

/**
 * CheckoutBillingAddressFields
 */
export class CheckoutBillingAddressFields extends Schema.Opaque<CheckoutBillingAddressFields>()(
  Schema.Struct({
    country: openEnum(BillingAddressFieldMode),
    state: openEnum(BillingAddressFieldMode),
    city: openEnum(BillingAddressFieldMode),
    postal_code: openEnum(BillingAddressFieldMode),
    line1: openEnum(BillingAddressFieldMode),
    line2: openEnum(BillingAddressFieldMode),
  }),
) {}

/**
 * Schema for a fixed amount discount that is applied once or forever.
 */
export class CheckoutDiscountFixedOnceForeverDuration extends Schema.Opaque<CheckoutDiscountFixedOnceForeverDuration>()(
  Schema.Struct({
    duration: openEnum(DiscountDuration),
    type: openEnum(DiscountType),
    amount: Schema.Number,
    currency: Schema.String,
    /** Map of currency to fixed amount to discount from the total. */
    amounts: Schema.Record(Schema.String, Schema.Number),
    /** The ID of the object. */
    id: Schema.String,
    name: Schema.String,
    code: Schema.NullOr(Schema.String),
  }),
) {}

/**
 * Schema for a fixed amount discount that is applied on every invoice
 * for a certain number of months.
 */
export class CheckoutDiscountFixedRepeatDuration extends Schema.Opaque<CheckoutDiscountFixedRepeatDuration>()(
  Schema.Struct({
    duration: openEnum(DiscountDuration),
    duration_in_months: Schema.Number,
    type: openEnum(DiscountType),
    amount: Schema.Number,
    currency: Schema.String,
    /** Map of currency to fixed amount to discount from the total. */
    amounts: Schema.Record(Schema.String, Schema.Number),
    /** The ID of the object. */
    id: Schema.String,
    name: Schema.String,
    code: Schema.NullOr(Schema.String),
  }),
) {}

/**
 * Schema for a percentage discount that is applied once or forever.
 */
export class CheckoutDiscountPercentageOnceForeverDuration extends Schema.Opaque<CheckoutDiscountPercentageOnceForeverDuration>()(
  Schema.Struct({
    duration: openEnum(DiscountDuration),
    type: openEnum(DiscountType),
    /** Discount percentage in basis points. A basis point is 1/100th of a percent. For example, 1000 basis points equals a 10% discount. */
    basis_points: Schema.Number,
    /** The ID of the object. */
    id: Schema.String,
    name: Schema.String,
    code: Schema.NullOr(Schema.String),
  }),
) {}

/**
 * Schema for a percentage discount that is applied on every invoice
 * for a certain number of months.
 */
export class CheckoutDiscountPercentageRepeatDuration extends Schema.Opaque<CheckoutDiscountPercentageRepeatDuration>()(
  Schema.Struct({
    duration: openEnum(DiscountDuration),
    duration_in_months: Schema.Number,
    type: openEnum(DiscountType),
    /** Discount percentage in basis points. A basis point is 1/100th of a percent. For example, 1000 basis points equals a 10% discount. */
    basis_points: Schema.Number,
    /** The ID of the object. */
    id: Schema.String,
    name: Schema.String,
    code: Schema.NullOr(Schema.String),
  }),
) {}

/**
 * A pay-what-you-want recurring price for a product, i.e. a subscription.
 *
 * **Deprecated**: The recurring interval should be set on the product itself.
 */
export class LegacyRecurringProductPriceCustom extends Schema.Opaque<LegacyRecurringProductPriceCustom>()(
  Schema.Struct({
    /** Creation timestamp of the object. */
    created_at: Schema.DateTimeUtcFromString,
    /** Last modification timestamp of the object. */
    modified_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** The ID of the price. */
    id: Schema.String,
    source: openEnum(ProductPriceSource),
    amount_type: Schema.Literal("custom"),
    /** The currency in which the customer will be charged. */
    price_currency: Schema.String,
    /** The tax behavior of the price. If null, it defaults to the organization's default tax behavior. */
    tax_behavior: Schema.NullOr(openEnum(TaxBehaviorOption)),
    /** Whether the price is archived and no longer available. */
    is_archived: Schema.Boolean,
    /** The ID of the product owning the price. */
    product_id: Schema.String,
    /** The type of the price. */
    type: Schema.Literal("recurring"),
    recurring_interval: openEnum(RecurringInterval),
    /** The minimum amount the customer can pay. If 0, the price is 'free or pay what you want'. */
    minimum_amount: Schema.Number,
    /** The maximum amount the customer can pay. */
    maximum_amount: Schema.NullOr(Schema.Number),
    /** The initial amount shown to the customer. */
    preset_amount: Schema.NullOr(Schema.Number),
    legacy: Schema.Literal(true),
  }),
) {}

/**
 * A recurring price for a product, i.e. a subscription.
 *
 * **Deprecated**: The recurring interval should be set on the product itself.
 */
export class LegacyRecurringProductPriceFixed extends Schema.Opaque<LegacyRecurringProductPriceFixed>()(
  Schema.Struct({
    /** Creation timestamp of the object. */
    created_at: Schema.DateTimeUtcFromString,
    /** Last modification timestamp of the object. */
    modified_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** The ID of the price. */
    id: Schema.String,
    source: openEnum(ProductPriceSource),
    amount_type: Schema.Literal("fixed"),
    /** The currency in which the customer will be charged. */
    price_currency: Schema.String,
    /** The tax behavior of the price. If null, it defaults to the organization's default tax behavior. */
    tax_behavior: Schema.NullOr(openEnum(TaxBehaviorOption)),
    /** Whether the price is archived and no longer available. */
    is_archived: Schema.Boolean,
    /** The ID of the product owning the price. */
    product_id: Schema.String,
    /** The type of the price. */
    type: Schema.Literal("recurring"),
    recurring_interval: openEnum(RecurringInterval),
    /** The price in cents. */
    price_amount: Schema.Number,
    legacy: Schema.Literal(true),
  }),
) {}

/**
 * LegacyRecurringProductPrice
 */
export const LegacyRecurringProductPrice = openUnion(
  [LegacyRecurringProductPriceFixed, LegacyRecurringProductPriceCustom],
  "amount_type",
  ["custom", "fixed"],
);
export type LegacyRecurringProductPrice = typeof LegacyRecurringProductPrice.Type;

/**
 * File to be used as a product media file.
 */
export class ProductMediaFileRead extends Schema.Opaque<ProductMediaFileRead>()(
  Schema.Struct({
    /** The ID of the object. */
    id: Schema.String,
    organization_id: Schema.String,
    name: Schema.String,
    path: Schema.String,
    mime_type: Schema.String,
    size: Schema.Number,
    storage_version: Schema.NullOr(Schema.String),
    checksum_etag: Schema.NullOr(Schema.String),
    checksum_sha256_base64: Schema.NullOr(Schema.String),
    checksum_sha256_hex: Schema.NullOr(Schema.String),
    last_modified_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    version: Schema.NullOr(Schema.String),
    service: Schema.Literal("product_media"),
    is_uploaded: Schema.Boolean,
    created_at: Schema.DateTimeUtcFromString,
    size_readable: Schema.String,
    public_url: Schema.String,
  }),
) {}

/**
 * A pay-what-you-want price for a product.
 */
export class ProductPriceCustom extends Schema.Opaque<ProductPriceCustom>()(
  Schema.Struct({
    /** Creation timestamp of the object. */
    created_at: Schema.DateTimeUtcFromString,
    /** Last modification timestamp of the object. */
    modified_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** The ID of the price. */
    id: Schema.String,
    source: openEnum(ProductPriceSource),
    amount_type: Schema.Literal("custom"),
    /** The currency in which the customer will be charged. */
    price_currency: Schema.String,
    /** The tax behavior of the price. If null, it defaults to the organization's default tax behavior. */
    tax_behavior: Schema.NullOr(openEnum(TaxBehaviorOption)),
    /** Whether the price is archived and no longer available. */
    is_archived: Schema.Boolean,
    /** The ID of the product owning the price. */
    product_id: Schema.String,
    /** The minimum amount the customer can pay. If 0, the price is 'free or pay what you want'. */
    minimum_amount: Schema.Number,
    /** The maximum amount the customer can pay. */
    maximum_amount: Schema.NullOr(Schema.Number),
    /** The initial amount shown to the customer. */
    preset_amount: Schema.NullOr(Schema.Number),
  }),
) {}

/**
 * A fixed price for a product.
 */
export class ProductPriceFixed extends Schema.Opaque<ProductPriceFixed>()(
  Schema.Struct({
    /** Creation timestamp of the object. */
    created_at: Schema.DateTimeUtcFromString,
    /** Last modification timestamp of the object. */
    modified_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** The ID of the price. */
    id: Schema.String,
    source: openEnum(ProductPriceSource),
    amount_type: Schema.Literal("fixed"),
    /** The currency in which the customer will be charged. */
    price_currency: Schema.String,
    /** The tax behavior of the price. If null, it defaults to the organization's default tax behavior. */
    tax_behavior: Schema.NullOr(openEnum(TaxBehaviorOption)),
    /** Whether the price is archived and no longer available. */
    is_archived: Schema.Boolean,
    /** The ID of the product owning the price. */
    product_id: Schema.String,
    /** The price in cents. */
    price_amount: Schema.Number,
  }),
) {}

/**
 * A meter associated to a metered price.
 */
export class ProductPriceMeter extends Schema.Opaque<ProductPriceMeter>()(
  Schema.Struct({
    /** The ID of the object. */
    id: Schema.String,
    /** The name of the meter. */
    name: Schema.String,
    unit: openEnum(MeterUnit),
    /** The label for the custom unit. */
    custom_label: Schema.NullOr(Schema.String),
    /** The multiplier to convert from base unit to display scale. */
    custom_multiplier: Schema.NullOr(Schema.Number),
  }),
) {}

/**
 * A per-unit rate up to and including `bound`.
 *
 * Each tier starts where the previous one ended. The first starts at
 * zero. `bound` is None on the last tier if it's unbounded. Rates are
 * in cents and may be fractional.
 *
 * Rates carry no precision bound: this schema reads stored rows, and a
 * bound tightened later would stop them loading. `TierInput` holds the
 * rules new rates must meet.
 */
export class Tier extends Schema.Opaque<Tier>()(
  Schema.Struct({
    bound: Schema.optionalKey(Schema.NullOr(Schema.Number)),
    unit_amount: Schema.String,
  }),
) {}

/**
 * The structure of the shared tiers JSONB column, used by every tiered
 * price type. Purchasable quantity bounds live in the `minimum_units` and
 * `maximum_units` columns, not here.
 */
export class Tiers extends Schema.Opaque<Tiers>()(
  Schema.Struct({
    type: openEnum(TierType),
    tiers: Schema.Array(Tier),
  }),
) {}

/**
 * A metered, usage-based, price for a product, billed from tiers.
 */
export class ProductPriceMeteredTiers extends Schema.Opaque<ProductPriceMeteredTiers>()(
  Schema.Struct({
    /** Creation timestamp of the object. */
    created_at: Schema.DateTimeUtcFromString,
    /** Last modification timestamp of the object. */
    modified_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** The ID of the price. */
    id: Schema.String,
    source: openEnum(ProductPriceSource),
    amount_type: Schema.Literal("metered_tiers"),
    /** The currency in which the customer will be charged. */
    price_currency: Schema.String,
    /** The tax behavior of the price. If null, it defaults to the organization's default tax behavior. */
    tax_behavior: Schema.NullOr(openEnum(TaxBehaviorOption)),
    /** Whether the price is archived and no longer available. */
    is_archived: Schema.Boolean,
    /** The ID of the product owning the price. */
    product_id: Schema.String,
    /** The maximum amount in cents that can be charged, regardless of the number of units consumed. */
    cap_amount: Schema.NullOr(Schema.Number),
    /** The ID of the meter associated to the price. */
    meter_id: Schema.String,
    meter: ProductPriceMeter,
    tiers: Tiers,
  }),
) {}

/**
 * A metered, usage-based, price for a product, with a fixed unit price.
 */
export class ProductPriceMeteredUnit extends Schema.Opaque<ProductPriceMeteredUnit>()(
  Schema.Struct({
    /** Creation timestamp of the object. */
    created_at: Schema.DateTimeUtcFromString,
    /** Last modification timestamp of the object. */
    modified_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** The ID of the price. */
    id: Schema.String,
    source: openEnum(ProductPriceSource),
    amount_type: Schema.Literal("metered_unit"),
    /** The currency in which the customer will be charged. */
    price_currency: Schema.String,
    /** The tax behavior of the price. If null, it defaults to the organization's default tax behavior. */
    tax_behavior: Schema.NullOr(openEnum(TaxBehaviorOption)),
    /** Whether the price is archived and no longer available. */
    is_archived: Schema.Boolean,
    /** The ID of the product owning the price. */
    product_id: Schema.String,
    /** The maximum amount in cents that can be charged, regardless of the number of units consumed. */
    cap_amount: Schema.NullOr(Schema.Number),
    /** The ID of the meter associated to the price. */
    meter_id: Schema.String,
    meter: ProductPriceMeter,
    /** The price per unit in cents. */
    unit_amount: Schema.String,
  }),
) {}

/**
 * A pricing tier for seat-based pricing.
 */
export class ProductPriceSeatTier extends Schema.Opaque<ProductPriceSeatTier>()(
  Schema.Struct({
    /** Minimum number of seats (inclusive) */
    min_seats: Schema.Number,
    /** Maximum number of seats (inclusive). None for unlimited. */
    max_seats: Schema.optionalKey(Schema.NullOr(Schema.Number)),
    /** Price per seat in cents for this tier */
    price_per_seat: Schema.Number,
  }),
) {}

/**
 * List of pricing tiers for seat-based pricing.
 *
 * The minimum and maximum seat limits are derived from the tiers:
 * - minimum_seats = first tier's min_seats
 * - maximum_seats = last tier's max_seats (None for unlimited)
 */
export class ProductPriceSeatTiersOutput extends Schema.Opaque<ProductPriceSeatTiersOutput>()(
  Schema.Struct({
    seat_tier_type: Schema.optionalKey(openEnum(SeatTierType)),
    /** List of pricing tiers */
    tiers: Schema.Array(ProductPriceSeatTier),
    /** Minimum number of seats required for purchase, derived from first tier. */
    minimum_seats: Schema.Number,
    /** Maximum number of seats allowed for purchase, derived from last tier. None for unlimited. */
    maximum_seats: Schema.NullOr(Schema.Number),
  }),
) {}

/**
 * A seat-based price for a product.
 */
export class ProductPriceSeatBased extends Schema.Opaque<ProductPriceSeatBased>()(
  Schema.Struct({
    /** Creation timestamp of the object. */
    created_at: Schema.DateTimeUtcFromString,
    /** Last modification timestamp of the object. */
    modified_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** The ID of the price. */
    id: Schema.String,
    source: openEnum(ProductPriceSource),
    amount_type: Schema.Literal("seat_based"),
    /** The currency in which the customer will be charged. */
    price_currency: Schema.String,
    /** The tax behavior of the price. If null, it defaults to the organization's default tax behavior. */
    tax_behavior: Schema.NullOr(openEnum(TaxBehaviorOption)),
    /** Whether the price is archived and no longer available. */
    is_archived: Schema.Boolean,
    /** The ID of the product owning the price. */
    product_id: Schema.String,
    seat_tiers: ProductPriceSeatTiersOutput,
  }),
) {}

/**
 * A unit-based price for a product: the buyer picks a quantity of units,
 * pays for it up-front. On subscriptions, quantity changes are prorated.
 */
export class ProductPriceUnitBased extends Schema.Opaque<ProductPriceUnitBased>()(
  Schema.Struct({
    /** Creation timestamp of the object. */
    created_at: Schema.DateTimeUtcFromString,
    /** Last modification timestamp of the object. */
    modified_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** The ID of the price. */
    id: Schema.String,
    source: openEnum(ProductPriceSource),
    amount_type: Schema.Literal("unit_based"),
    /** The currency in which the customer will be charged. */
    price_currency: Schema.String,
    /** The tax behavior of the price. If null, it defaults to the organization's default tax behavior. */
    tax_behavior: Schema.NullOr(openEnum(TaxBehaviorOption)),
    /** Whether the price is archived and no longer available. */
    is_archived: Schema.Boolean,
    /** The ID of the product owning the price. */
    product_id: Schema.String,
    tiers: Tiers,
    /** The minimum purchasable quantity (inclusive). */
    minimum_units: Schema.NullOr(Schema.Number),
    /** Per-locale unit nouns shown at checkout and on invoices. `null` defaults to "unit"/"units". */
    unit_label: Schema.NullOr(
      Schema.Record(Schema.String, Schema.Record(Schema.String, Schema.String)),
    ),
    /** The maximum purchasable quantity, from the last tier's bound. `null` for unlimited. */
    maximum_units: Schema.NullOr(Schema.Number),
  }),
) {}

/**
 * ProductPrice
 */
export const ProductPrice = openUnion(
  [
    ProductPriceFixed,
    ProductPriceCustom,
    ProductPriceSeatBased,
    ProductPriceUnitBased,
    ProductPriceMeteredUnit,
    ProductPriceMeteredTiers,
  ],
  "amount_type",
  ["custom", "fixed", "metered_tiers", "metered_unit", "seat_based", "unit_based"],
);
export type ProductPrice = typeof ProductPrice.Type;

/**
 * Product data for a checkout session.
 */
export class CheckoutProduct extends Schema.Opaque<CheckoutProduct>()(
  Schema.Struct({
    /** The ID of the object. */
    id: Schema.String,
    /** Creation timestamp of the object. */
    created_at: Schema.DateTimeUtcFromString,
    /** Last modification timestamp of the object. */
    modified_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** The interval unit for the trial period. */
    trial_interval: Schema.NullOr(openEnum(TrialInterval)),
    /** The number of interval units for the trial period. */
    trial_interval_count: Schema.NullOr(Schema.Number),
    /** The name of the product. */
    name: Schema.String,
    /** The description of the product. */
    description: Schema.NullOr(Schema.String),
    visibility: openEnum(ProductVisibility),
    /** The recurring interval of the product. If `None`, the product is a one-time purchase. */
    recurring_interval: Schema.NullOr(openEnum(RecurringInterval)),
    /** Number of interval units of the subscription. If this is set to 1 the charge will happen every interval (e.g. every month), if set to 2 it will be every other month, and so on. None for one-time products. */
    recurring_interval_count: Schema.NullOr(Schema.Number),
    /** The meter cycle of the product, independent of the billing interval. If `None`, metered concerns follow the billing interval. */
    meter_interval: Schema.NullOr(openEnum(RecurringInterval)),
    /** Number of meter interval units. None when no meter cycle is set. */
    meter_interval_count: Schema.NullOr(Schema.Number),
    /** Whether the product is a subscription. */
    is_recurring: Schema.Boolean,
    /** Whether the product is archived and no longer available. */
    is_archived: Schema.Boolean,
    /** The ID of the organization owning the product. */
    organization_id: Schema.String,
    /** List of prices for this product. */
    prices: Schema.Array(Schema.Union([LegacyRecurringProductPrice, ProductPrice])),
    /** List of benefits granted by the product. */
    benefits: Schema.Array(BenefitPublic),
    /** List of medias associated to the product. */
    medias: Schema.Array(ProductMediaFileRead),
  }),
) {}

/**
 * Checkout session data retrieved using an access token.
 */
export class Checkout extends Schema.Opaque<Checkout>()(
  Schema.Struct({
    /** The ID of the object. */
    id: Schema.String,
    /** Creation timestamp of the object. */
    created_at: Schema.DateTimeUtcFromString,
    /** Last modification timestamp of the object. */
    modified_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** Key-value object storing custom field values. */
    custom_field_data: Schema.optionalKey(
      Schema.Record(
        Schema.String,
        Schema.Union([
          Schema.String,
          Schema.Number,
          Schema.Boolean,
          Schema.DateTimeUtcFromString,
          Schema.Null,
        ]),
      ),
    ),
    payment_processor: openEnum(PaymentProcessor),
    status: openEnum(CheckoutStatus),
    /** Client secret used to update and complete the checkout session from the client. */
    client_secret: Schema.String,
    /** URL where the customer can access the checkout session. */
    url: Schema.String,
    /** Expiration date and time of the checkout session. */
    expires_at: Schema.DateTimeUtcFromString,
    /** URL where the customer will be redirected after a successful payment. */
    success_url: Schema.String,
    /** When set, a back button will be shown in the checkout to return to this URL. */
    return_url: Schema.NullOr(Schema.String),
    /** When checkout is embedded, represents the Origin of the page embedding the checkout. Used as a security measure to send messages only to the embedding page. */
    embed_origin: Schema.NullOr(Schema.String),
    /** Amount in cents, before discounts and taxes. */
    amount: Schema.Number,
    /** Predefined number of seats (works with seat-based pricing only) */
    seats: Schema.optionalKey(Schema.NullOr(Schema.Number)),
    /** Minimum number of seats (works with seat-based pricing only) */
    min_seats: Schema.optionalKey(Schema.NullOr(Schema.Number)),
    /** Maximum number of seats (works with seat-based pricing only) */
    max_seats: Schema.optionalKey(Schema.NullOr(Schema.Number)),
    /** Predefined number of units (works with unit-based pricing only) */
    units: Schema.NullOr(Schema.Number),
    /** Minimum number of units (works with unit-based pricing only) */
    min_units: Schema.NullOr(Schema.Number),
    /** Maximum number of units (works with unit-based pricing only) */
    max_units: Schema.NullOr(Schema.Number),
    /** Discount amount in cents. */
    discount_amount: Schema.Number,
    /** Amount in cents, after discounts but before taxes. */
    net_amount: Schema.Number,
    /** Sales tax amount in cents. If `null`, it means there is no enough information yet to calculate it. */
    tax_amount: Schema.NullOr(Schema.Number),
    /** Tax behavior of the checkout. `inclusive` means the price includes tax, `exclusive` means tax is added on top. If `null`, tax is not yet calculated. */
    tax_behavior: Schema.NullOr(openEnum(TaxBehavior)),
    /** Amount in cents, after discounts and taxes. */
    total_amount: Schema.Number,
    /** Currency code of the checkout session. */
    currency: Schema.String,
    /** Whether to enable the trial period for the checkout session. If `false`, the trial period will be disabled, even if the selected product has a trial configured. */
    allow_trial: Schema.NullOr(Schema.Boolean),
    /** Interval unit of the trial period, if any. This value is either set from the checkout, if `trial_interval` is set, or from the selected product. */
    active_trial_interval: Schema.NullOr(openEnum(TrialInterval)),
    /** Number of interval units of the trial period, if any. This value is either set from the checkout, if `trial_interval_count` is set, or from the selected product. */
    active_trial_interval_count: Schema.NullOr(Schema.Number),
    /** End date and time of the trial period, if any. */
    trial_end: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** ID of the organization owning the checkout session. */
    organization_id: Schema.String,
    /** ID of the product to checkout. */
    product_id: Schema.NullOr(Schema.String),
    /** ID of the product price to checkout. */
    product_price_id: Schema.NullOr(Schema.String),
    /** ID of the discount applied to the checkout. */
    discount_id: Schema.NullOr(Schema.String),
    /** Whether to allow the customer to apply discount codes. If you apply a discount through `discount_id`, it'll still be applied, but the customer won't be able to change it. */
    allow_discount_codes: Schema.Boolean,
    /** Whether to require the customer to fill their full billing address, instead of just the country. Customers in the US will always be required to fill their full address, regardless of this setting. If you preset the billing address, this setting will be automatically set to `true`. */
    require_billing_address: Schema.Boolean,
    /** Whether the discount is applicable to the checkout. Typically, free and custom prices are not discountable. */
    is_discount_applicable: Schema.Boolean,
    /** Whether the product price is free, regardless of discounts. */
    is_free_product_price: Schema.Boolean,
    /** Whether the checkout requires payment, e.g. in case of free products or discounts that cover the total amount. */
    is_payment_required: Schema.Boolean,
    /** Whether the checkout requires setting up a payment method, regardless of the amount, e.g. subscriptions that have first free cycles. */
    is_payment_setup_required: Schema.Boolean,
    /** Whether the checkout requires a payment form, whether because of a payment or payment method setup. */
    is_payment_form_required: Schema.Boolean,
    customer_id: Schema.NullOr(Schema.String),
    /** Whether the customer is a business or an individual. If `true`, the customer will be required to fill their full billing address and billing name. */
    is_business_customer: Schema.Boolean,
    /** Name of the customer. */
    customer_name: Schema.NullOr(Schema.String),
    /** Email address of the customer. */
    customer_email: Schema.NullOr(Schema.String),
    customer_ip_address: Schema.NullOr(Schema.String),
    customer_billing_name: Schema.NullOr(Schema.String),
    customer_billing_address: Schema.NullOr(Address),
    customer_tax_id: Schema.NullOr(Schema.String),
    locale: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** Payment method type selected by the customer in the checkout form, e.g. `card`, `apple_pay` or `upi`. */
    payment_method_type: Schema.NullOr(Schema.String),
    payment_processor_metadata: Schema.Record(Schema.String, Schema.String),
    billing_address_fields: CheckoutBillingAddressFields,
    /** The interval unit for the trial period. */
    trial_interval: Schema.NullOr(openEnum(TrialInterval)),
    /** The number of interval units for the trial period. */
    trial_interval_count: Schema.NullOr(Schema.Number),
    metadata: MetadataOutputType,
    /** ID of the customer in your system. If a matching customer exists on Polar, the resulting order will be linked to this customer. Otherwise, a new customer will be created with this external ID set. */
    external_customer_id: Schema.NullOr(Schema.String),
    /** List of products available to select. */
    products: Schema.Array(CheckoutProduct),
    /** Product selected to checkout. */
    product: Schema.NullOr(CheckoutProduct),
    /** Price of the selected product. */
    product_price: Schema.NullOr(Schema.Union([LegacyRecurringProductPrice, ProductPrice])),
    /** Mapping of product IDs to their list of prices. */
    prices: Schema.NullOr(
      Schema.Record(
        Schema.String,
        Schema.Array(Schema.Union([LegacyRecurringProductPrice, ProductPrice])),
      ),
    ),
    discount: Schema.NullOr(
      Schema.Union([
        CheckoutDiscountFixedOnceForeverDuration,
        CheckoutDiscountFixedRepeatDuration,
        CheckoutDiscountPercentageOnceForeverDuration,
        CheckoutDiscountPercentageRepeatDuration,
      ]),
    ),
    subscription_id: Schema.NullOr(Schema.String),
    attached_custom_fields: Schema.NullOr(Schema.Array(AttachedCustomField)),
    customer_metadata: Schema.Record(
      Schema.String,
      Schema.Union([Schema.String, Schema.Number, Schema.Boolean]),
    ),
  }),
) {}

/**
 * Confirm a checkout session using a Stripe confirmation token.
 */
export class CheckoutConfirmStripe extends Schema.Opaque<CheckoutConfirmStripe>()(
  Schema.Struct({
    /** Key-value object storing custom field values. */
    custom_field_data: Schema.optionalKey(
      Schema.Record(
        Schema.String,
        Schema.Union([Schema.String, Schema.Number, Schema.Boolean, DateTimeInput, Schema.Null]),
      ),
    ),
    /** ID of the product to checkout. Must be present in the checkout's product list. */
    product_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** ID of the product price to checkout. Must correspond to a price present in the checkout's product list. */
    product_price_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    amount: Schema.optionalKey(Schema.NullOr(Schema.Number)),
    /** Number of seats for seat-based pricing. */
    seats: Schema.optionalKey(Schema.NullOr(Schema.Number)),
    /** Number of units for unit-based pricing. */
    units: Schema.optionalKey(Schema.NullOr(Schema.Number)),
    is_business_customer: Schema.optionalKey(Schema.NullOr(Schema.Boolean)),
    customer_name: Schema.optionalKey(Schema.NullOr(Schema.String)),
    customer_email: Schema.optionalKey(Schema.NullOr(Schema.String)),
    customer_billing_name: Schema.optionalKey(Schema.NullOr(Schema.String)),
    customer_billing_address: Schema.optionalKey(Schema.NullOr(AddressInput)),
    customer_tax_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    locale: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** Payment method type selected by the customer in the checkout form, e.g. `card`, `apple_pay` or `upi`. */
    payment_method_type: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** Discount code to apply to the checkout. */
    discount_code: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** Disable the trial period for the checkout session. It's mainly useful when the trial is blocked because the customer already redeemed one. */
    allow_trial: Schema.optionalKey(Schema.NullOr(Schema.Literal(false))),
    /** ID of the Stripe confirmation token. Required for fixed prices and custom prices. */
    confirmation_token_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
  }),
) {}

/**
 * Schema to create a pay-what-you-want price.
 */
export class ProductPriceCustomCreate extends Schema.Opaque<ProductPriceCustomCreate>()(
  Schema.Struct({
    amount_type: Schema.Literal("custom"),
    price_currency: Schema.optionalKey(PresentmentCurrency),
    /** The tax behavior of the price. If not set, it will default to the organization's default tax behavior. */
    tax_behavior: Schema.optionalKey(Schema.NullOr(TaxBehaviorOption)),
    /** The minimum amount the customer can pay. If set to 0, the price is 'free or pay what you want' and $0 is accepted. If set to a value below the minimum price amount for the currency, it will be rejected. Defaults to the minimum price amount for the currency. Minimum per currency: - USD: 0.5 - AED: 2 - ALL: 50 - AMD: 200 - AOA: 500 - ARS: 750 - AUD: 0.7 - AWG: 1 - AZN: 1 - BAM: 1 - BBD: 2 - BDT: 70 - BIF: 2,000 - BMD: 1 - BND: 1 - BOB: 5 - BRL: 2.5 - BSD: 1 - BWP: 10 - BZD: 2 - CAD: 0.7 - CDF: 2,000 - CHF: 0.5 - CLP: 500 - CNY: 5 - COP: 2,000 - CRC: 300 - CVE: 50 - CZK: 15 - DJF: 100 - DKK: 3.2 - DOP: 40 - DZD: 70 - EGP: 30 - ETB: 80 - EUR: 0.5 - FJD: 2 - FKP: 1 - GBP: 0.4 - GEL: 2 - GNF: 5,000 - GIP: 1 - GMD: 40 - GTQ: 5 - GYD: 200 - HKD: 4 - HNL: 20 - HTG: 70 - HUF: 175 - IDR: 9,000 - ILS: 1.5 - INR: 60 - ISK: 70 - JMD: 80 - JPY: 80 - KES: 70 - KGS: 50 - KHR: 3,000 - KMF: 500 - KRW: 800 - KYD: 1 - KZT: 300 - LAK: 20,000 - LKR: 200 - LRD: 100 - LSL: 10 - MAD: 5 - MDL: 10 - MGA: 3,000 - MKD: 50 - MNT: 2,000 - MOP: 5 - MUR: 50 - MVR: 8 - MXN: 9 - MWK: 1,000 - MYR: 2 - MZN: 50 - NAD: 10 - NGN: 700 - NIO: 20 - NOK: 5 - NPR: 80 - NZD: 0.9 - PAB: 1 - PEN: 2 - PGK: 3 - PHP: 35 - PKR: 200 - PLN: 2 - PYG: 4,000 - QAR: 2 - RON: 2.5 - RSD: 60 - RWF: 1,000 - SAR: 2 - SBD: 4 - SCR: 8 - SEK: 5 - SGD: 0.7 - SHP: 1 - SOS: 500 - SRD: 20 - SZL: 10 - THB: 20 - TJS: 5 - TOP: 2 - TRY: 30 - TTD: 4 - TWD: 20 - TZS: 2,000 - UAH: 30 - UGX: 2,000 - UYU: 20 - UZS: 7,000 - VND: 20,000 - VUV: 100 - WST: 2 - XAF: 500 - XCD: 2 - XCG: 1 - XOF: 500 - XPF: 100 - YER: 200 - ZAR: 9 - ZMW: 10 - Other currencies: 50 minor units */
    minimum_amount: Schema.optionalKey(Schema.Number),
    /** The maximum amount the customer can pay. Maximum per currency: - USD: 999,999.99 - EUR: 999,999.99 - GBP: 999,999.99 - ARS: 1,400,000 - CDF: 2,800,000 - COP: 4,000,000 - IDR: 16,000,000 - KHR: 4,000,000 - LAK: 21,000,000 - MNT: 3,500,000 - MWK: 1,750,000 - NGN: 1,550,000 - TZS: 2,500,000 - UGX: 3,700,000 - UZS: 12,500,000 - Other currencies: 99,999,999 minor units */
    maximum_amount: Schema.optionalKey(Schema.NullOr(Schema.Number)),
    /** The initial amount shown to the customer. If 0, the customer will see $0 as the default. If set to a value below the minimum price amount for the currency, it will be rejected.Minimum per currency: - USD: 0.5 - AED: 2 - ALL: 50 - AMD: 200 - AOA: 500 - ARS: 750 - AUD: 0.7 - AWG: 1 - AZN: 1 - BAM: 1 - BBD: 2 - BDT: 70 - BIF: 2,000 - BMD: 1 - BND: 1 - BOB: 5 - BRL: 2.5 - BSD: 1 - BWP: 10 - BZD: 2 - CAD: 0.7 - CDF: 2,000 - CHF: 0.5 - CLP: 500 - CNY: 5 - COP: 2,000 - CRC: 300 - CVE: 50 - CZK: 15 - DJF: 100 - DKK: 3.2 - DOP: 40 - DZD: 70 - EGP: 30 - ETB: 80 - EUR: 0.5 - FJD: 2 - FKP: 1 - GBP: 0.4 - GEL: 2 - GNF: 5,000 - GIP: 1 - GMD: 40 - GTQ: 5 - GYD: 200 - HKD: 4 - HNL: 20 - HTG: 70 - HUF: 175 - IDR: 9,000 - ILS: 1.5 - INR: 60 - ISK: 70 - JMD: 80 - JPY: 80 - KES: 70 - KGS: 50 - KHR: 3,000 - KMF: 500 - KRW: 800 - KYD: 1 - KZT: 300 - LAK: 20,000 - LKR: 200 - LRD: 100 - LSL: 10 - MAD: 5 - MDL: 10 - MGA: 3,000 - MKD: 50 - MNT: 2,000 - MOP: 5 - MUR: 50 - MVR: 8 - MXN: 9 - MWK: 1,000 - MYR: 2 - MZN: 50 - NAD: 10 - NGN: 700 - NIO: 20 - NOK: 5 - NPR: 80 - NZD: 0.9 - PAB: 1 - PEN: 2 - PGK: 3 - PHP: 35 - PKR: 200 - PLN: 2 - PYG: 4,000 - QAR: 2 - RON: 2.5 - RSD: 60 - RWF: 1,000 - SAR: 2 - SBD: 4 - SCR: 8 - SEK: 5 - SGD: 0.7 - SHP: 1 - SOS: 500 - SRD: 20 - SZL: 10 - THB: 20 - TJS: 5 - TOP: 2 - TRY: 30 - TTD: 4 - TWD: 20 - TZS: 2,000 - UAH: 30 - UGX: 2,000 - UYU: 20 - UZS: 7,000 - VND: 20,000 - VUV: 100 - WST: 2 - XAF: 500 - XCD: 2 - XCG: 1 - XOF: 500 - XPF: 100 - YER: 200 - ZAR: 9 - ZMW: 10 - Other currencies: 50 minor units */
    preset_amount: Schema.optionalKey(Schema.NullOr(Schema.Number)),
  }),
) {}

/**
 * Schema to create a fixed price.
 */
export class ProductPriceFixedCreate extends Schema.Opaque<ProductPriceFixedCreate>()(
  Schema.Struct({
    amount_type: Schema.Literal("fixed"),
    price_currency: Schema.optionalKey(PresentmentCurrency),
    /** The tax behavior of the price. If not set, it will default to the organization's default tax behavior. */
    tax_behavior: Schema.optionalKey(Schema.NullOr(TaxBehaviorOption)),
    /** The price in cents. Set to `0` for a free price. Minimum amounts per currency: - USD: 0.5 - AED: 2 - ALL: 50 - AMD: 200 - AOA: 500 - ARS: 750 - AUD: 0.7 - AWG: 1 - AZN: 1 - BAM: 1 - BBD: 2 - BDT: 70 - BIF: 2,000 - BMD: 1 - BND: 1 - BOB: 5 - BRL: 2.5 - BSD: 1 - BWP: 10 - BZD: 2 - CAD: 0.7 - CDF: 2,000 - CHF: 0.5 - CLP: 500 - CNY: 5 - COP: 2,000 - CRC: 300 - CVE: 50 - CZK: 15 - DJF: 100 - DKK: 3.2 - DOP: 40 - DZD: 70 - EGP: 30 - ETB: 80 - EUR: 0.5 - FJD: 2 - FKP: 1 - GBP: 0.4 - GEL: 2 - GNF: 5,000 - GIP: 1 - GMD: 40 - GTQ: 5 - GYD: 200 - HKD: 4 - HNL: 20 - HTG: 70 - HUF: 175 - IDR: 9,000 - ILS: 1.5 - INR: 60 - ISK: 70 - JMD: 80 - JPY: 80 - KES: 70 - KGS: 50 - KHR: 3,000 - KMF: 500 - KRW: 800 - KYD: 1 - KZT: 300 - LAK: 20,000 - LKR: 200 - LRD: 100 - LSL: 10 - MAD: 5 - MDL: 10 - MGA: 3,000 - MKD: 50 - MNT: 2,000 - MOP: 5 - MUR: 50 - MVR: 8 - MXN: 9 - MWK: 1,000 - MYR: 2 - MZN: 50 - NAD: 10 - NGN: 700 - NIO: 20 - NOK: 5 - NPR: 80 - NZD: 0.9 - PAB: 1 - PEN: 2 - PGK: 3 - PHP: 35 - PKR: 200 - PLN: 2 - PYG: 4,000 - QAR: 2 - RON: 2.5 - RSD: 60 - RWF: 1,000 - SAR: 2 - SBD: 4 - SCR: 8 - SEK: 5 - SGD: 0.7 - SHP: 1 - SOS: 500 - SRD: 20 - SZL: 10 - THB: 20 - TJS: 5 - TOP: 2 - TRY: 30 - TTD: 4 - TWD: 20 - TZS: 2,000 - UAH: 30 - UGX: 2,000 - UYU: 20 - UZS: 7,000 - VND: 20,000 - VUV: 100 - WST: 2 - XAF: 500 - XCD: 2 - XCG: 1 - XOF: 500 - XPF: 100 - YER: 200 - ZAR: 9 - ZMW: 10 - Other currencies: 50 minor units */
    price_amount: Schema.Number,
  }),
) {}

/**
 * A tier submitted through the API. Rates stop at the reach of the
 * BigInteger amount columns, with 12 decimal places.
 */
export class TierInput extends Schema.Opaque<TierInput>()(
  Schema.Struct({
    bound: Schema.optionalKey(Schema.NullOr(Schema.Number)),
    unit_amount: Schema.Union([Schema.Number, Schema.String]),
  }),
) {}

/**
 * Tiers submitted through the API. Kept apart from `Tiers` so tightening
 * a rule here never stops a stored row from loading.
 */
export class TiersInput extends Schema.Opaque<TiersInput>()(
  Schema.Struct({
    type: TierType,
    tiers: Schema.Array(TierInput),
  }),
) {}

/**
 * Schema to create a metered price billed from tiers on consumed units.
 */
export class ProductPriceMeteredTiersCreate extends Schema.Opaque<ProductPriceMeteredTiersCreate>()(
  Schema.Struct({
    amount_type: Schema.Literal("metered_tiers"),
    price_currency: Schema.optionalKey(PresentmentCurrency),
    /** The tax behavior of the price. If not set, it will default to the organization's default tax behavior. */
    tax_behavior: Schema.optionalKey(Schema.NullOr(TaxBehaviorOption)),
    /** The ID of the meter associated to the price. */
    meter_id: Schema.String,
    tiers: TiersInput,
    /** Optional maximum amount in cents that can be charged, regardless of the number of units consumed. */
    cap_amount: Schema.optionalKey(Schema.NullOr(Schema.Number)),
  }),
) {}

/**
 * Schema to create a metered price with a fixed unit price.
 */
export class ProductPriceMeteredUnitCreate extends Schema.Opaque<ProductPriceMeteredUnitCreate>()(
  Schema.Struct({
    amount_type: Schema.Literal("metered_unit"),
    price_currency: Schema.optionalKey(PresentmentCurrency),
    /** The tax behavior of the price. If not set, it will default to the organization's default tax behavior. */
    tax_behavior: Schema.optionalKey(Schema.NullOr(TaxBehaviorOption)),
    /** The ID of the meter associated to the price. */
    meter_id: Schema.String,
    /** The price per unit in cents. Supports up to 12 decimal places. */
    unit_amount: Schema.Union([Schema.Number, Schema.String]),
    /** Optional maximum amount in cents that can be charged, regardless of the number of units consumed. */
    cap_amount: Schema.optionalKey(Schema.NullOr(Schema.Number)),
  }),
) {}

/**
 * List of pricing tiers for seat-based pricing.
 *
 * The minimum and maximum seat limits are derived from the tiers:
 * - minimum_seats = first tier's min_seats
 * - maximum_seats = last tier's max_seats (None for unlimited)
 */
export class ProductPriceSeatTiersInput extends Schema.Opaque<ProductPriceSeatTiersInput>()(
  Schema.Struct({
    seat_tier_type: Schema.optionalKey(SeatTierType),
    /** List of pricing tiers */
    tiers: Schema.Array(ProductPriceSeatTier),
  }),
) {}

/**
 * Schema to create a seat-based price with volume-based tiers.
 */
export class ProductPriceSeatBasedCreate extends Schema.Opaque<ProductPriceSeatBasedCreate>()(
  Schema.Struct({
    amount_type: Schema.Literal("seat_based"),
    price_currency: Schema.optionalKey(PresentmentCurrency),
    /** The tax behavior of the price. If not set, it will default to the organization's default tax behavior. */
    tax_behavior: Schema.optionalKey(Schema.NullOr(TaxBehaviorOption)),
    seat_tiers: ProductPriceSeatTiersInput,
  }),
) {}

/**
 * Schema to create a unit-based price: the buyer picks a quantity of units,
 * pays for it up-front. On subscriptions, quantity changes are prorated.
 */
export class ProductPriceUnitBasedCreate extends Schema.Opaque<ProductPriceUnitBasedCreate>()(
  Schema.Struct({
    amount_type: Schema.Literal("unit_based"),
    price_currency: Schema.optionalKey(PresentmentCurrency),
    /** The tax behavior of the price. If not set, it will default to the organization's default tax behavior. */
    tax_behavior: Schema.optionalKey(Schema.NullOr(TaxBehaviorOption)),
    tiers: TiersInput,
    /** The minimum purchasable quantity (inclusive). Defaults to 1 when not set. */
    minimum_units: Schema.optionalKey(Schema.NullOr(Schema.Number)),
    /** Per-locale unit nouns shown at checkout and on invoices. `{"en": {"=1": "device", "other": "devices"}}`. Defaults to "unit"/"units" when unset. */
    unit_label: Schema.optionalKey(
      Schema.NullOr(Schema.Record(Schema.String, Schema.Record(Schema.String, Schema.String))),
    ),
  }),
) {}

/**
 * Create a new checkout session from a list of products.
 * Customers will be able to switch between those products.
 *
 * Metadata set on the checkout will be copied
 * to the resulting order and/or subscription.
 */
export class CheckoutCreate extends Schema.Opaque<CheckoutCreate>()(
  Schema.Struct({
    /** The interval unit for the trial period. */
    trial_interval: Schema.optionalKey(Schema.NullOr(TrialInterval)),
    /** The number of interval units for the trial period. */
    trial_interval_count: Schema.optionalKey(Schema.NullOr(Schema.Number)),
    /** Key-value object allowing you to store additional information. The key must be a string with a maximum length of **40 characters**. The value must be either: * A string with a maximum length of **500 characters** * An integer * A floating-point number * A boolean You can store up to **50 key-value pairs**. */
    metadata: Schema.optionalKey(
      Schema.Record(Schema.String, Schema.Union([Schema.String, Schema.Number, Schema.Boolean])),
    ),
    /** Key-value object storing custom field values. */
    custom_field_data: Schema.optionalKey(
      Schema.Record(
        Schema.String,
        Schema.Union([Schema.String, Schema.Number, Schema.Boolean, DateTimeInput, Schema.Null]),
      ),
    ),
    /** ID of the discount to apply to the checkout. */
    discount_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** Whether to allow the customer to apply discount codes. If you apply a discount through `discount_id`, it'll still be applied, but the customer won't be able to change it. */
    allow_discount_codes: Schema.optionalKey(Schema.Boolean),
    /** Whether to require the customer to fill their full billing address, instead of just the country. Customers in the US will always be required to fill their full address, regardless of this setting. If you preset the billing address, this setting will be automatically set to `true`. */
    require_billing_address: Schema.optionalKey(Schema.Boolean),
    amount: Schema.optionalKey(Schema.NullOr(Schema.Number)),
    /** Predefined number of seats (works with seat-based pricing only) */
    seats: Schema.optionalKey(Schema.NullOr(Schema.Number)),
    /** Minimum number of seats (works with seat-based pricing only) */
    min_seats: Schema.optionalKey(Schema.NullOr(Schema.Number)),
    /** Maximum number of seats (works with seat-based pricing only) */
    max_seats: Schema.optionalKey(Schema.NullOr(Schema.Number)),
    /** Predefined number of units (works with unit-based pricing only) */
    units: Schema.optionalKey(Schema.NullOr(Schema.Number)),
    /** Minimum number of units (works with unit-based pricing only) */
    min_units: Schema.optionalKey(Schema.NullOr(Schema.Number)),
    /** Maximum number of units (works with unit-based pricing only) */
    max_units: Schema.optionalKey(Schema.NullOr(Schema.Number)),
    /** Whether to enable the trial period for the checkout session. If `false`, the trial period will be disabled, even if the selected product has a trial configured. */
    allow_trial: Schema.optionalKey(Schema.Boolean),
    /** ID of an existing customer in the organization. The customer data will be pre-filled in the checkout form. The resulting order will be linked to this customer. */
    customer_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** Whether the customer is a business or an individual. If `true`, the customer will be required to fill their full billing address and billing name. */
    is_business_customer: Schema.optionalKey(Schema.Boolean),
    /** ID of the customer in your system. If a matching customer exists on Polar, the resulting order will be linked to this customer. Otherwise, a new customer will be created with this external ID set. */
    external_customer_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    customer_name: Schema.optionalKey(Schema.NullOr(Schema.String)),
    customer_email: Schema.optionalKey(Schema.NullOr(Schema.String)),
    customer_ip_address: Schema.optionalKey(Schema.NullOr(Schema.String)),
    customer_billing_name: Schema.optionalKey(Schema.NullOr(Schema.String)),
    customer_billing_address: Schema.optionalKey(Schema.NullOr(AddressInput)),
    customer_tax_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** Key-value object allowing you to store additional information that'll be copied to the created customer. The key must be a string with a maximum length of **40 characters**. The value must be either: * A string with a maximum length of **500 characters** * An integer * A floating-point number * A boolean You can store up to **50 key-value pairs**. */
    customer_metadata: Schema.optionalKey(
      Schema.Record(Schema.String, Schema.Union([Schema.String, Schema.Number, Schema.Boolean])),
    ),
    /** ID of a subscription to upgrade. It must be on a free pricing. If checkout is successful, metadata set on this checkout will be copied to the subscription, and existing keys will be overwritten. */
    subscription_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** URL where the customer will be redirected after a successful payment.You can add the `checkout_id={CHECKOUT_ID}` query parameter to retrieve the checkout session id. */
    success_url: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** When set, a back button will be shown in the checkout to return to this URL. */
    return_url: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** If you plan to embed the checkout session, set this to the Origin of the embedding page. It'll allow the Polar iframe to communicate with the parent page. */
    embed_origin: Schema.optionalKey(Schema.NullOr(Schema.String)),
    locale: Schema.optionalKey(Schema.NullOr(Schema.String)),
    currency: Schema.optionalKey(Schema.NullOr(PresentmentCurrency)),
    /** List of product IDs available to select at that checkout. The first one will be selected by default. */
    products: Schema.Array(Schema.String),
    /** Optional mapping of product IDs to a list of ad-hoc prices to create for that product. If not set, catalog prices of the product will be used. */
    prices: Schema.optionalKey(
      Schema.NullOr(
        Schema.Record(
          Schema.String,
          Schema.Array(
            Schema.Union([
              ProductPriceFixedCreate,
              ProductPriceCustomCreate,
              ProductPriceSeatBasedCreate,
              ProductPriceUnitBasedCreate,
              ProductPriceMeteredUnitCreate,
              ProductPriceMeteredTiersCreate,
            ]),
          ),
        ),
      ),
    ),
  }),
) {}

/**
 * CheckoutCreatedMetadata
 */
export class CheckoutCreatedMetadata extends Schema.Opaque<CheckoutCreatedMetadata>()(
  Schema.Struct({
    checkout_id: Schema.String,
    checkout_status: Schema.String,
    product_id: Schema.optionalKey(Schema.String),
  }),
) {}

/**
 * An event created by Polar when a checkout is created.
 */
export class CheckoutCreatedEvent extends Schema.Opaque<CheckoutCreatedEvent>()(
  Schema.Struct({
    /** The ID of the object. */
    id: Schema.String,
    /** The timestamp of the event. */
    timestamp: Schema.DateTimeUtcFromString,
    /** The ID of the organization owning the event. */
    organization_id: Schema.String,
    /** ID of the customer in your Polar organization associated with the event. */
    customer_id: Schema.NullOr(Schema.String),
    /** The customer associated with the event. */
    customer: Schema.NullOr(Customer),
    /** ID of the customer in your system associated with the event. */
    external_customer_id: Schema.NullOr(Schema.String),
    /** ID of the member within the customer's organization who performed the action inside B2B. */
    member_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** ID of the member in your system within the customer's organization who performed the action inside B2B. */
    external_member_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** Number of direct child events linked to this event. */
    child_count: Schema.optionalKey(Schema.Number),
    /** The ID of the parent event. */
    parent_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** Human readable label of the event type. */
    label: Schema.String,
    /** The source of the event. `system` events are created by Polar. `user` events are the one you create through our ingestion API. */
    source: Schema.Literal("system"),
    /** The name of the event. */
    name: Schema.Literal("checkout.created"),
    metadata: CheckoutCreatedMetadata,
  }),
) {}

/**
 * DiscountRedemptionLimitReached
 */
export class DiscountRedemptionLimitReached extends Schema.Opaque<DiscountRedemptionLimitReached>()(
  Schema.Struct({
    error: Schema.Literal("DiscountRedemptionLimitReached"),
    detail: Schema.String,
  }),
) {}

/**
 * NotOpenCheckout
 */
export class NotOpenCheckout extends Schema.Opaque<NotOpenCheckout>()(
  Schema.Struct({
    error: Schema.Literal("NotOpenCheckout"),
    detail: Schema.String,
  }),
) {}

/**
 * PaymentNotReady
 */
export class PaymentNotReady extends Schema.Opaque<PaymentNotReady>()(
  Schema.Struct({
    error: Schema.Literal("PaymentNotReady"),
    detail: Schema.String,
  }),
) {}

/**
 * TrialAlreadyRedeemed
 */
export class TrialAlreadyRedeemed extends Schema.Opaque<TrialAlreadyRedeemed>()(
  Schema.Struct({
    error: Schema.Literal("TrialAlreadyRedeemed"),
    detail: Schema.String,
  }),
) {}

/**
 * CheckoutForbiddenError
 */
export const CheckoutForbiddenError = Schema.Union([
  AlreadyActiveSubscriptionError,
  NotOpenCheckout,
  PaymentNotReady,
  TrialAlreadyRedeemed,
  DiscountRedemptionLimitReached,
]);
export type CheckoutForbiddenError = typeof CheckoutForbiddenError.Type;

/**
 * Product data for a checkout link.
 */
export class CheckoutLinkProduct extends Schema.Opaque<CheckoutLinkProduct>()(
  Schema.Struct({
    metadata: MetadataOutputType,
    /** The ID of the object. */
    id: Schema.String,
    /** Creation timestamp of the object. */
    created_at: Schema.DateTimeUtcFromString,
    /** Last modification timestamp of the object. */
    modified_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** The interval unit for the trial period. */
    trial_interval: Schema.NullOr(openEnum(TrialInterval)),
    /** The number of interval units for the trial period. */
    trial_interval_count: Schema.NullOr(Schema.Number),
    /** The name of the product. */
    name: Schema.String,
    /** The description of the product. */
    description: Schema.NullOr(Schema.String),
    visibility: openEnum(ProductVisibility),
    /** The recurring interval of the product. If `None`, the product is a one-time purchase. */
    recurring_interval: Schema.NullOr(openEnum(RecurringInterval)),
    /** Number of interval units of the subscription. If this is set to 1 the charge will happen every interval (e.g. every month), if set to 2 it will be every other month, and so on. None for one-time products. */
    recurring_interval_count: Schema.NullOr(Schema.Number),
    /** The meter cycle of the product, independent of the billing interval. If `None`, metered concerns follow the billing interval. */
    meter_interval: Schema.NullOr(openEnum(RecurringInterval)),
    /** Number of meter interval units. None when no meter cycle is set. */
    meter_interval_count: Schema.NullOr(Schema.Number),
    /** Whether the product is a subscription. */
    is_recurring: Schema.Boolean,
    /** Whether the product is archived and no longer available. */
    is_archived: Schema.Boolean,
    /** The ID of the organization owning the product. */
    organization_id: Schema.String,
    /** List of prices for this product. */
    prices: Schema.Array(Schema.Union([LegacyRecurringProductPrice, ProductPrice])),
    /** List of benefits granted by the product. */
    benefits: Schema.Array(BenefitPublic),
    /** List of medias associated to the product. */
    medias: Schema.Array(ProductMediaFileRead),
  }),
) {}

/**
 * DiscountFixedOnceForeverDurationBase
 */
export class DiscountFixedOnceForeverDurationBase extends Schema.Opaque<DiscountFixedOnceForeverDurationBase>()(
  Schema.Struct({
    duration: openEnum(DiscountDuration),
    type: openEnum(DiscountType),
    amount: Schema.Number,
    currency: Schema.String,
    /** Map of currency to fixed amount to discount from the total. */
    amounts: Schema.Record(Schema.String, Schema.Number),
    /** Creation timestamp of the object. */
    created_at: Schema.DateTimeUtcFromString,
    /** Last modification timestamp of the object. */
    modified_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** The ID of the object. */
    id: Schema.String,
    metadata: MetadataOutputType,
    /** Name of the discount. Will be displayed to the customer when the discount is applied. */
    name: Schema.String,
    /** Code customers can use to apply the discount during checkout. */
    code: Schema.NullOr(Schema.String),
    /** Timestamp after which the discount is redeemable. */
    starts_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** Timestamp after which the discount is no longer redeemable. */
    ends_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** Maximum number of times the discount can be redeemed. */
    max_redemptions: Schema.NullOr(Schema.Number),
    /** Maximum number of times the discount can be redeemed by a single customer. */
    max_redemptions_per_customer: Schema.NullOr(Schema.Number),
    /** Number of times the discount has been redeemed. */
    redemptions_count: Schema.Number,
    /** The organization ID. */
    organization_id: Schema.String,
  }),
) {}

/**
 * DiscountFixedRepeatDurationBase
 */
export class DiscountFixedRepeatDurationBase extends Schema.Opaque<DiscountFixedRepeatDurationBase>()(
  Schema.Struct({
    duration: openEnum(DiscountDuration),
    duration_in_months: Schema.Number,
    type: openEnum(DiscountType),
    amount: Schema.Number,
    currency: Schema.String,
    /** Map of currency to fixed amount to discount from the total. */
    amounts: Schema.Record(Schema.String, Schema.Number),
    /** Creation timestamp of the object. */
    created_at: Schema.DateTimeUtcFromString,
    /** Last modification timestamp of the object. */
    modified_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** The ID of the object. */
    id: Schema.String,
    metadata: MetadataOutputType,
    /** Name of the discount. Will be displayed to the customer when the discount is applied. */
    name: Schema.String,
    /** Code customers can use to apply the discount during checkout. */
    code: Schema.NullOr(Schema.String),
    /** Timestamp after which the discount is redeemable. */
    starts_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** Timestamp after which the discount is no longer redeemable. */
    ends_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** Maximum number of times the discount can be redeemed. */
    max_redemptions: Schema.NullOr(Schema.Number),
    /** Maximum number of times the discount can be redeemed by a single customer. */
    max_redemptions_per_customer: Schema.NullOr(Schema.Number),
    /** Number of times the discount has been redeemed. */
    redemptions_count: Schema.Number,
    /** The organization ID. */
    organization_id: Schema.String,
  }),
) {}

/**
 * DiscountPercentageOnceForeverDurationBase
 */
export class DiscountPercentageOnceForeverDurationBase extends Schema.Opaque<DiscountPercentageOnceForeverDurationBase>()(
  Schema.Struct({
    duration: openEnum(DiscountDuration),
    type: openEnum(DiscountType),
    /** Discount percentage in basis points. A basis point is 1/100th of a percent. For example, 1000 basis points equals a 10% discount. */
    basis_points: Schema.Number,
    /** Creation timestamp of the object. */
    created_at: Schema.DateTimeUtcFromString,
    /** Last modification timestamp of the object. */
    modified_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** The ID of the object. */
    id: Schema.String,
    metadata: MetadataOutputType,
    /** Name of the discount. Will be displayed to the customer when the discount is applied. */
    name: Schema.String,
    /** Code customers can use to apply the discount during checkout. */
    code: Schema.NullOr(Schema.String),
    /** Timestamp after which the discount is redeemable. */
    starts_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** Timestamp after which the discount is no longer redeemable. */
    ends_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** Maximum number of times the discount can be redeemed. */
    max_redemptions: Schema.NullOr(Schema.Number),
    /** Maximum number of times the discount can be redeemed by a single customer. */
    max_redemptions_per_customer: Schema.NullOr(Schema.Number),
    /** Number of times the discount has been redeemed. */
    redemptions_count: Schema.Number,
    /** The organization ID. */
    organization_id: Schema.String,
  }),
) {}

/**
 * DiscountPercentageRepeatDurationBase
 */
export class DiscountPercentageRepeatDurationBase extends Schema.Opaque<DiscountPercentageRepeatDurationBase>()(
  Schema.Struct({
    duration: openEnum(DiscountDuration),
    duration_in_months: Schema.Number,
    type: openEnum(DiscountType),
    /** Discount percentage in basis points. A basis point is 1/100th of a percent. For example, 1000 basis points equals a 10% discount. */
    basis_points: Schema.Number,
    /** Creation timestamp of the object. */
    created_at: Schema.DateTimeUtcFromString,
    /** Last modification timestamp of the object. */
    modified_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** The ID of the object. */
    id: Schema.String,
    metadata: MetadataOutputType,
    /** Name of the discount. Will be displayed to the customer when the discount is applied. */
    name: Schema.String,
    /** Code customers can use to apply the discount during checkout. */
    code: Schema.NullOr(Schema.String),
    /** Timestamp after which the discount is redeemable. */
    starts_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** Timestamp after which the discount is no longer redeemable. */
    ends_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** Maximum number of times the discount can be redeemed. */
    max_redemptions: Schema.NullOr(Schema.Number),
    /** Maximum number of times the discount can be redeemed by a single customer. */
    max_redemptions_per_customer: Schema.NullOr(Schema.Number),
    /** Number of times the discount has been redeemed. */
    redemptions_count: Schema.Number,
    /** The organization ID. */
    organization_id: Schema.String,
  }),
) {}

/**
 * Checkout link data.
 */
export class CheckoutLink extends Schema.Opaque<CheckoutLink>()(
  Schema.Struct({
    /** The ID of the object. */
    id: Schema.String,
    /** Creation timestamp of the object. */
    created_at: Schema.DateTimeUtcFromString,
    /** Last modification timestamp of the object. */
    modified_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** The interval unit for the trial period. */
    trial_interval: Schema.NullOr(openEnum(TrialInterval)),
    /** The number of interval units for the trial period. */
    trial_interval_count: Schema.NullOr(Schema.Number),
    metadata: MetadataOutputType,
    payment_processor: openEnum(PaymentProcessor),
    /** Client secret used to access the checkout link. */
    client_secret: Schema.String,
    /** URL where the customer will be redirected after a successful payment. */
    success_url: Schema.NullOr(Schema.String),
    /** When set, a back button will be shown in the checkout to return to this URL. */
    return_url: Schema.NullOr(Schema.String),
    /** Optional label to distinguish links internally */
    label: Schema.NullOr(Schema.String),
    /** Whether to allow the customer to apply discount codes. If you apply a discount through `discount_id`, it'll still be applied, but the customer won't be able to change it. */
    allow_discount_codes: Schema.Boolean,
    /** Whether to require the customer to fill their full billing address, instead of just the country. Customers in the US will always be required to fill their full address, regardless of this setting. */
    require_billing_address: Schema.Boolean,
    /** ID of the discount to apply to the checkout. If the discount is not applicable anymore when opening the checkout link, it'll be ignored. */
    discount_id: Schema.NullOr(Schema.String),
    /** Preconfigured number of seats for seat-based pricing. When set, checkout sessions created from this link are locked to this number of seats and the customer won't be able to change it. All products on the link must use seat-based pricing and allow this number of seats. If the products no longer accommodate this value when the link is opened, it'll be ignored. */
    seats: Schema.NullOr(Schema.Number),
    /** Preconfigured number of units for unit-based pricing. When set, checkout sessions created from this link are locked to this number of units and the customer won't be able to change it. All products on the link must use unit-based pricing and allow this number of units. If the products no longer accommodate this value when the link is opened, it'll be ignored. */
    units: Schema.NullOr(Schema.Number),
    /** The organization ID. */
    organization_id: Schema.String,
    products: Schema.Array(CheckoutLinkProduct),
    discount: Schema.NullOr(
      Schema.Union([
        DiscountFixedOnceForeverDurationBase,
        DiscountFixedRepeatDurationBase,
        DiscountPercentageOnceForeverDurationBase,
        DiscountPercentageRepeatDurationBase,
      ]),
    ),
    url: Schema.String,
  }),
) {}

/**
 * Schema to create a new checkout link from a a single product.
 *
 * **Deprecated**: Use `CheckoutLinkCreateProducts` instead.
 */
export class CheckoutLinkCreateProduct extends Schema.Opaque<CheckoutLinkCreateProduct>()(
  Schema.Struct({
    /** Key-value object allowing you to store additional information. The key must be a string with a maximum length of **40 characters**. The value must be either: * A string with a maximum length of **500 characters** * An integer * A floating-point number * A boolean You can store up to **50 key-value pairs**. */
    metadata: Schema.optionalKey(
      Schema.Record(Schema.String, Schema.Union([Schema.String, Schema.Number, Schema.Boolean])),
    ),
    /** The interval unit for the trial period. */
    trial_interval: Schema.optionalKey(Schema.NullOr(TrialInterval)),
    /** The number of interval units for the trial period. */
    trial_interval_count: Schema.optionalKey(Schema.NullOr(Schema.Number)),
    /** Payment processor to use. Currently only Stripe is supported. */
    payment_processor: Schema.Literal("stripe"),
    /** Optional label to distinguish links internally */
    label: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** Whether to allow the customer to apply discount codes. If you apply a discount through `discount_id`, it'll still be applied, but the customer won't be able to change it. */
    allow_discount_codes: Schema.optionalKey(Schema.Boolean),
    /** Whether to require the customer to fill their full billing address, instead of just the country. Customers in the US will always be required to fill their full address, regardless of this setting. */
    require_billing_address: Schema.optionalKey(Schema.Boolean),
    /** ID of the discount to apply to the checkout. If the discount is not applicable anymore when opening the checkout link, it'll be ignored. */
    discount_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** Preconfigured number of seats for seat-based pricing. When set, checkout sessions created from this link are locked to this number of seats and the customer won't be able to change it. All products on the link must use seat-based pricing and allow this number of seats. If the products no longer accommodate this value when the link is opened, it'll be ignored. */
    seats: Schema.optionalKey(Schema.NullOr(Schema.Number)),
    /** Preconfigured number of units for unit-based pricing. When set, checkout sessions created from this link are locked to this number of units and the customer won't be able to change it. All products on the link must use unit-based pricing and allow this number of units. If the products no longer accommodate this value when the link is opened, it'll be ignored. */
    units: Schema.optionalKey(Schema.NullOr(Schema.Number)),
    /** URL where the customer will be redirected after a successful payment.You can add the `checkout_id={CHECKOUT_ID}` query parameter to retrieve the checkout session id. */
    success_url: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** When set, a back button will be shown in the checkout to return to this URL. */
    return_url: Schema.optionalKey(Schema.NullOr(Schema.String)),
    product_id: Schema.String,
  }),
) {}

/**
 * Schema to create a new checkout link from a a single product price.
 *
 * **Deprecated**: Use `CheckoutLinkCreateProducts` instead.
 */
export class CheckoutLinkCreateProductPrice extends Schema.Opaque<CheckoutLinkCreateProductPrice>()(
  Schema.Struct({
    /** Key-value object allowing you to store additional information. The key must be a string with a maximum length of **40 characters**. The value must be either: * A string with a maximum length of **500 characters** * An integer * A floating-point number * A boolean You can store up to **50 key-value pairs**. */
    metadata: Schema.optionalKey(
      Schema.Record(Schema.String, Schema.Union([Schema.String, Schema.Number, Schema.Boolean])),
    ),
    /** The interval unit for the trial period. */
    trial_interval: Schema.optionalKey(Schema.NullOr(TrialInterval)),
    /** The number of interval units for the trial period. */
    trial_interval_count: Schema.optionalKey(Schema.NullOr(Schema.Number)),
    /** Payment processor to use. Currently only Stripe is supported. */
    payment_processor: Schema.Literal("stripe"),
    /** Optional label to distinguish links internally */
    label: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** Whether to allow the customer to apply discount codes. If you apply a discount through `discount_id`, it'll still be applied, but the customer won't be able to change it. */
    allow_discount_codes: Schema.optionalKey(Schema.Boolean),
    /** Whether to require the customer to fill their full billing address, instead of just the country. Customers in the US will always be required to fill their full address, regardless of this setting. */
    require_billing_address: Schema.optionalKey(Schema.Boolean),
    /** ID of the discount to apply to the checkout. If the discount is not applicable anymore when opening the checkout link, it'll be ignored. */
    discount_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** Preconfigured number of seats for seat-based pricing. When set, checkout sessions created from this link are locked to this number of seats and the customer won't be able to change it. All products on the link must use seat-based pricing and allow this number of seats. If the products no longer accommodate this value when the link is opened, it'll be ignored. */
    seats: Schema.optionalKey(Schema.NullOr(Schema.Number)),
    /** Preconfigured number of units for unit-based pricing. When set, checkout sessions created from this link are locked to this number of units and the customer won't be able to change it. All products on the link must use unit-based pricing and allow this number of units. If the products no longer accommodate this value when the link is opened, it'll be ignored. */
    units: Schema.optionalKey(Schema.NullOr(Schema.Number)),
    /** URL where the customer will be redirected after a successful payment.You can add the `checkout_id={CHECKOUT_ID}` query parameter to retrieve the checkout session id. */
    success_url: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** When set, a back button will be shown in the checkout to return to this URL. */
    return_url: Schema.optionalKey(Schema.NullOr(Schema.String)),
    product_price_id: Schema.String,
  }),
) {}

/**
 * Schema to create a new checkout link.
 */
export class CheckoutLinkCreateProducts extends Schema.Opaque<CheckoutLinkCreateProducts>()(
  Schema.Struct({
    /** Key-value object allowing you to store additional information. The key must be a string with a maximum length of **40 characters**. The value must be either: * A string with a maximum length of **500 characters** * An integer * A floating-point number * A boolean You can store up to **50 key-value pairs**. */
    metadata: Schema.optionalKey(
      Schema.Record(Schema.String, Schema.Union([Schema.String, Schema.Number, Schema.Boolean])),
    ),
    /** The interval unit for the trial period. */
    trial_interval: Schema.optionalKey(Schema.NullOr(TrialInterval)),
    /** The number of interval units for the trial period. */
    trial_interval_count: Schema.optionalKey(Schema.NullOr(Schema.Number)),
    /** Payment processor to use. Currently only Stripe is supported. */
    payment_processor: Schema.Literal("stripe"),
    /** Optional label to distinguish links internally */
    label: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** Whether to allow the customer to apply discount codes. If you apply a discount through `discount_id`, it'll still be applied, but the customer won't be able to change it. */
    allow_discount_codes: Schema.optionalKey(Schema.Boolean),
    /** Whether to require the customer to fill their full billing address, instead of just the country. Customers in the US will always be required to fill their full address, regardless of this setting. */
    require_billing_address: Schema.optionalKey(Schema.Boolean),
    /** ID of the discount to apply to the checkout. If the discount is not applicable anymore when opening the checkout link, it'll be ignored. */
    discount_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** Preconfigured number of seats for seat-based pricing. When set, checkout sessions created from this link are locked to this number of seats and the customer won't be able to change it. All products on the link must use seat-based pricing and allow this number of seats. If the products no longer accommodate this value when the link is opened, it'll be ignored. */
    seats: Schema.optionalKey(Schema.NullOr(Schema.Number)),
    /** Preconfigured number of units for unit-based pricing. When set, checkout sessions created from this link are locked to this number of units and the customer won't be able to change it. All products on the link must use unit-based pricing and allow this number of units. If the products no longer accommodate this value when the link is opened, it'll be ignored. */
    units: Schema.optionalKey(Schema.NullOr(Schema.Number)),
    /** URL where the customer will be redirected after a successful payment.You can add the `checkout_id={CHECKOUT_ID}` query parameter to retrieve the checkout session id. */
    success_url: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** When set, a back button will be shown in the checkout to return to this URL. */
    return_url: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** List of products that will be available to select at checkout. */
    products: Schema.Array(Schema.String),
  }),
) {}

/**
 * CheckoutLinkCreate
 */
export const CheckoutLinkCreate = Schema.Union([
  CheckoutLinkCreateProductPrice,
  CheckoutLinkCreateProduct,
  CheckoutLinkCreateProducts,
]);
export type CheckoutLinkCreate = typeof CheckoutLinkCreate.Type;

/**
 * Schema to update an existing checkout link.
 */
export class CheckoutLinkUpdate extends Schema.Opaque<CheckoutLinkUpdate>()(
  Schema.Struct({
    /** The interval unit for the trial period. */
    trial_interval: Schema.optionalKey(Schema.NullOr(TrialInterval)),
    /** The number of interval units for the trial period. */
    trial_interval_count: Schema.optionalKey(Schema.NullOr(Schema.Number)),
    /** Key-value object allowing you to store additional information. The key must be a string with a maximum length of **40 characters**. The value must be either: * A string with a maximum length of **500 characters** * An integer * A floating-point number * A boolean You can store up to **50 key-value pairs**. */
    metadata: Schema.optionalKey(
      Schema.Record(Schema.String, Schema.Union([Schema.String, Schema.Number, Schema.Boolean])),
    ),
    /** List of products that will be available to select at checkout. */
    products: Schema.optionalKey(Schema.NullOr(Schema.Array(Schema.String))),
    label: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** Whether to allow the customer to apply discount codes. If you apply a discount through `discount_id`, it'll still be applied, but the customer won't be able to change it. */
    allow_discount_codes: Schema.optionalKey(Schema.NullOr(Schema.Boolean)),
    /** Whether to require the customer to fill their full billing address, instead of just the country. Customers in the US will always be required to fill their full address, regardless of this setting. */
    require_billing_address: Schema.optionalKey(Schema.NullOr(Schema.Boolean)),
    /** ID of the discount to apply to the checkout. If the discount is not applicable anymore when opening the checkout link, it'll be ignored. */
    discount_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** Preconfigured number of seats for seat-based pricing. When set, checkout sessions created from this link are locked to this number of seats and the customer won't be able to change it. All products on the link must use seat-based pricing and allow this number of seats. If the products no longer accommodate this value when the link is opened, it'll be ignored. */
    seats: Schema.optionalKey(Schema.NullOr(Schema.Number)),
    /** Preconfigured number of units for unit-based pricing. When set, checkout sessions created from this link are locked to this number of units and the customer won't be able to change it. All products on the link must use unit-based pricing and allow this number of units. If the products no longer accommodate this value when the link is opened, it'll be ignored. */
    units: Schema.optionalKey(Schema.NullOr(Schema.Number)),
    /** URL where the customer will be redirected after a successful payment.You can add the `checkout_id={CHECKOUT_ID}` query parameter to retrieve the checkout session id. */
    success_url: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** When set, a back button will be shown in the checkout to return to this URL. */
    return_url: Schema.optionalKey(Schema.NullOr(Schema.String)),
  }),
) {}

/**
 * CheckoutOrganization
 */
export class CheckoutOrganization extends Schema.Opaque<CheckoutOrganization>()(
  Schema.Struct({
    /** Creation timestamp of the object. */
    created_at: Schema.DateTimeUtcFromString,
    /** Last modification timestamp of the object. */
    modified_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** The ID of the object. */
    id: Schema.String,
    /** Organization name shown in checkout, customer portal, emails etc. */
    name: Schema.String,
    /** Unique organization slug in checkout, customer portal and credit card statements. */
    slug: Schema.String,
    /** Avatar URL shown in checkout, customer portal, emails etc. */
    avatar_url: Schema.NullOr(Schema.String),
    proration_behavior: openEnum(SubscriptionProrationBehavior),
    /** Whether customers can update their subscriptions from the customer portal. */
    allow_customer_updates: Schema.Boolean,
  }),
) {}

/**
 * Checkout session data retrieved using the client secret.
 */
export class CheckoutPublic extends Schema.Opaque<CheckoutPublic>()(
  Schema.Struct({
    /** The ID of the object. */
    id: Schema.String,
    /** Creation timestamp of the object. */
    created_at: Schema.DateTimeUtcFromString,
    /** Last modification timestamp of the object. */
    modified_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** Key-value object storing custom field values. */
    custom_field_data: Schema.optionalKey(
      Schema.Record(
        Schema.String,
        Schema.Union([
          Schema.String,
          Schema.Number,
          Schema.Boolean,
          Schema.DateTimeUtcFromString,
          Schema.Null,
        ]),
      ),
    ),
    payment_processor: openEnum(PaymentProcessor),
    status: openEnum(CheckoutStatus),
    /** Client secret used to update and complete the checkout session from the client. */
    client_secret: Schema.String,
    /** URL where the customer can access the checkout session. */
    url: Schema.String,
    /** Expiration date and time of the checkout session. */
    expires_at: Schema.DateTimeUtcFromString,
    /** URL where the customer will be redirected after a successful payment. */
    success_url: Schema.String,
    /** When set, a back button will be shown in the checkout to return to this URL. */
    return_url: Schema.NullOr(Schema.String),
    /** When checkout is embedded, represents the Origin of the page embedding the checkout. Used as a security measure to send messages only to the embedding page. */
    embed_origin: Schema.NullOr(Schema.String),
    /** Amount in cents, before discounts and taxes. */
    amount: Schema.Number,
    /** Predefined number of seats (works with seat-based pricing only) */
    seats: Schema.optionalKey(Schema.NullOr(Schema.Number)),
    /** Minimum number of seats (works with seat-based pricing only) */
    min_seats: Schema.optionalKey(Schema.NullOr(Schema.Number)),
    /** Maximum number of seats (works with seat-based pricing only) */
    max_seats: Schema.optionalKey(Schema.NullOr(Schema.Number)),
    /** Predefined number of units (works with unit-based pricing only) */
    units: Schema.NullOr(Schema.Number),
    /** Minimum number of units (works with unit-based pricing only) */
    min_units: Schema.NullOr(Schema.Number),
    /** Maximum number of units (works with unit-based pricing only) */
    max_units: Schema.NullOr(Schema.Number),
    /** Discount amount in cents. */
    discount_amount: Schema.Number,
    /** Amount in cents, after discounts but before taxes. */
    net_amount: Schema.Number,
    /** Sales tax amount in cents. If `null`, it means there is no enough information yet to calculate it. */
    tax_amount: Schema.NullOr(Schema.Number),
    /** Tax behavior of the checkout. `inclusive` means the price includes tax, `exclusive` means tax is added on top. If `null`, tax is not yet calculated. */
    tax_behavior: Schema.NullOr(openEnum(TaxBehavior)),
    /** Amount in cents, after discounts and taxes. */
    total_amount: Schema.Number,
    /** Currency code of the checkout session. */
    currency: Schema.String,
    /** Whether to enable the trial period for the checkout session. If `false`, the trial period will be disabled, even if the selected product has a trial configured. */
    allow_trial: Schema.NullOr(Schema.Boolean),
    /** Interval unit of the trial period, if any. This value is either set from the checkout, if `trial_interval` is set, or from the selected product. */
    active_trial_interval: Schema.NullOr(openEnum(TrialInterval)),
    /** Number of interval units of the trial period, if any. This value is either set from the checkout, if `trial_interval_count` is set, or from the selected product. */
    active_trial_interval_count: Schema.NullOr(Schema.Number),
    /** End date and time of the trial period, if any. */
    trial_end: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** ID of the organization owning the checkout session. */
    organization_id: Schema.String,
    /** ID of the product to checkout. */
    product_id: Schema.NullOr(Schema.String),
    /** ID of the product price to checkout. */
    product_price_id: Schema.NullOr(Schema.String),
    /** ID of the discount applied to the checkout. */
    discount_id: Schema.NullOr(Schema.String),
    /** Whether to allow the customer to apply discount codes. If you apply a discount through `discount_id`, it'll still be applied, but the customer won't be able to change it. */
    allow_discount_codes: Schema.Boolean,
    /** Whether to require the customer to fill their full billing address, instead of just the country. Customers in the US will always be required to fill their full address, regardless of this setting. If you preset the billing address, this setting will be automatically set to `true`. */
    require_billing_address: Schema.Boolean,
    /** Whether the discount is applicable to the checkout. Typically, free and custom prices are not discountable. */
    is_discount_applicable: Schema.Boolean,
    /** Whether the product price is free, regardless of discounts. */
    is_free_product_price: Schema.Boolean,
    /** Whether the checkout requires payment, e.g. in case of free products or discounts that cover the total amount. */
    is_payment_required: Schema.Boolean,
    /** Whether the checkout requires setting up a payment method, regardless of the amount, e.g. subscriptions that have first free cycles. */
    is_payment_setup_required: Schema.Boolean,
    /** Whether the checkout requires a payment form, whether because of a payment or payment method setup. */
    is_payment_form_required: Schema.Boolean,
    customer_id: Schema.NullOr(Schema.String),
    /** Whether the customer is a business or an individual. If `true`, the customer will be required to fill their full billing address and billing name. */
    is_business_customer: Schema.Boolean,
    /** Name of the customer. */
    customer_name: Schema.NullOr(Schema.String),
    /** Email address of the customer. */
    customer_email: Schema.NullOr(Schema.String),
    customer_ip_address: Schema.NullOr(Schema.String),
    customer_billing_name: Schema.NullOr(Schema.String),
    customer_billing_address: Schema.NullOr(Address),
    customer_tax_id: Schema.NullOr(Schema.String),
    locale: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** Payment method type selected by the customer in the checkout form, e.g. `card`, `apple_pay` or `upi`. */
    payment_method_type: Schema.NullOr(Schema.String),
    payment_processor_metadata: Schema.Record(Schema.String, Schema.String),
    billing_address_fields: CheckoutBillingAddressFields,
    /** List of products available to select. */
    products: Schema.Array(CheckoutProduct),
    /** Product selected to checkout. */
    product: Schema.NullOr(CheckoutProduct),
    /** Price of the selected product. */
    product_price: Schema.NullOr(Schema.Union([LegacyRecurringProductPrice, ProductPrice])),
    /** Mapping of product IDs to their list of prices. */
    prices: Schema.NullOr(
      Schema.Record(
        Schema.String,
        Schema.Array(Schema.Union([LegacyRecurringProductPrice, ProductPrice])),
      ),
    ),
    discount: Schema.NullOr(
      Schema.Union([
        CheckoutDiscountFixedOnceForeverDuration,
        CheckoutDiscountFixedRepeatDuration,
        CheckoutDiscountPercentageOnceForeverDuration,
        CheckoutDiscountPercentageRepeatDuration,
      ]),
    ),
    organization: CheckoutOrganization,
    attached_custom_fields: Schema.NullOr(Schema.Array(AttachedCustomField)),
  }),
) {}

/**
 * Checkout session data retrieved using the client secret after confirmation.
 *
 * It contains a customer session token to retrieve order information
 * right after the checkout.
 */
export class CheckoutPublicConfirmed extends Schema.Opaque<CheckoutPublicConfirmed>()(
  Schema.Struct({
    /** The ID of the object. */
    id: Schema.String,
    /** Creation timestamp of the object. */
    created_at: Schema.DateTimeUtcFromString,
    /** Last modification timestamp of the object. */
    modified_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** Key-value object storing custom field values. */
    custom_field_data: Schema.optionalKey(
      Schema.Record(
        Schema.String,
        Schema.Union([
          Schema.String,
          Schema.Number,
          Schema.Boolean,
          Schema.DateTimeUtcFromString,
          Schema.Null,
        ]),
      ),
    ),
    payment_processor: openEnum(PaymentProcessor),
    status: Schema.Literal("confirmed"),
    /** Client secret used to update and complete the checkout session from the client. */
    client_secret: Schema.String,
    /** URL where the customer can access the checkout session. */
    url: Schema.String,
    /** Expiration date and time of the checkout session. */
    expires_at: Schema.DateTimeUtcFromString,
    /** URL where the customer will be redirected after a successful payment. */
    success_url: Schema.String,
    /** When set, a back button will be shown in the checkout to return to this URL. */
    return_url: Schema.NullOr(Schema.String),
    /** When checkout is embedded, represents the Origin of the page embedding the checkout. Used as a security measure to send messages only to the embedding page. */
    embed_origin: Schema.NullOr(Schema.String),
    /** Amount in cents, before discounts and taxes. */
    amount: Schema.Number,
    /** Predefined number of seats (works with seat-based pricing only) */
    seats: Schema.optionalKey(Schema.NullOr(Schema.Number)),
    /** Minimum number of seats (works with seat-based pricing only) */
    min_seats: Schema.optionalKey(Schema.NullOr(Schema.Number)),
    /** Maximum number of seats (works with seat-based pricing only) */
    max_seats: Schema.optionalKey(Schema.NullOr(Schema.Number)),
    /** Predefined number of units (works with unit-based pricing only) */
    units: Schema.NullOr(Schema.Number),
    /** Minimum number of units (works with unit-based pricing only) */
    min_units: Schema.NullOr(Schema.Number),
    /** Maximum number of units (works with unit-based pricing only) */
    max_units: Schema.NullOr(Schema.Number),
    /** Discount amount in cents. */
    discount_amount: Schema.Number,
    /** Amount in cents, after discounts but before taxes. */
    net_amount: Schema.Number,
    /** Sales tax amount in cents. If `null`, it means there is no enough information yet to calculate it. */
    tax_amount: Schema.NullOr(Schema.Number),
    /** Tax behavior of the checkout. `inclusive` means the price includes tax, `exclusive` means tax is added on top. If `null`, tax is not yet calculated. */
    tax_behavior: Schema.NullOr(openEnum(TaxBehavior)),
    /** Amount in cents, after discounts and taxes. */
    total_amount: Schema.Number,
    /** Currency code of the checkout session. */
    currency: Schema.String,
    /** Whether to enable the trial period for the checkout session. If `false`, the trial period will be disabled, even if the selected product has a trial configured. */
    allow_trial: Schema.NullOr(Schema.Boolean),
    /** Interval unit of the trial period, if any. This value is either set from the checkout, if `trial_interval` is set, or from the selected product. */
    active_trial_interval: Schema.NullOr(openEnum(TrialInterval)),
    /** Number of interval units of the trial period, if any. This value is either set from the checkout, if `trial_interval_count` is set, or from the selected product. */
    active_trial_interval_count: Schema.NullOr(Schema.Number),
    /** End date and time of the trial period, if any. */
    trial_end: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** ID of the organization owning the checkout session. */
    organization_id: Schema.String,
    /** ID of the product to checkout. */
    product_id: Schema.NullOr(Schema.String),
    /** ID of the product price to checkout. */
    product_price_id: Schema.NullOr(Schema.String),
    /** ID of the discount applied to the checkout. */
    discount_id: Schema.NullOr(Schema.String),
    /** Whether to allow the customer to apply discount codes. If you apply a discount through `discount_id`, it'll still be applied, but the customer won't be able to change it. */
    allow_discount_codes: Schema.Boolean,
    /** Whether to require the customer to fill their full billing address, instead of just the country. Customers in the US will always be required to fill their full address, regardless of this setting. If you preset the billing address, this setting will be automatically set to `true`. */
    require_billing_address: Schema.Boolean,
    /** Whether the discount is applicable to the checkout. Typically, free and custom prices are not discountable. */
    is_discount_applicable: Schema.Boolean,
    /** Whether the product price is free, regardless of discounts. */
    is_free_product_price: Schema.Boolean,
    /** Whether the checkout requires payment, e.g. in case of free products or discounts that cover the total amount. */
    is_payment_required: Schema.Boolean,
    /** Whether the checkout requires setting up a payment method, regardless of the amount, e.g. subscriptions that have first free cycles. */
    is_payment_setup_required: Schema.Boolean,
    /** Whether the checkout requires a payment form, whether because of a payment or payment method setup. */
    is_payment_form_required: Schema.Boolean,
    customer_id: Schema.NullOr(Schema.String),
    /** Whether the customer is a business or an individual. If `true`, the customer will be required to fill their full billing address and billing name. */
    is_business_customer: Schema.Boolean,
    /** Name of the customer. */
    customer_name: Schema.NullOr(Schema.String),
    /** Email address of the customer. */
    customer_email: Schema.NullOr(Schema.String),
    customer_ip_address: Schema.NullOr(Schema.String),
    customer_billing_name: Schema.NullOr(Schema.String),
    customer_billing_address: Schema.NullOr(Address),
    customer_tax_id: Schema.NullOr(Schema.String),
    locale: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** Payment method type selected by the customer in the checkout form, e.g. `card`, `apple_pay` or `upi`. */
    payment_method_type: Schema.NullOr(Schema.String),
    payment_processor_metadata: Schema.Record(Schema.String, Schema.String),
    billing_address_fields: CheckoutBillingAddressFields,
    /** List of products available to select. */
    products: Schema.Array(CheckoutProduct),
    /** Product selected to checkout. */
    product: Schema.NullOr(CheckoutProduct),
    /** Price of the selected product. */
    product_price: Schema.NullOr(Schema.Union([LegacyRecurringProductPrice, ProductPrice])),
    /** Mapping of product IDs to their list of prices. */
    prices: Schema.NullOr(
      Schema.Record(
        Schema.String,
        Schema.Array(Schema.Union([LegacyRecurringProductPrice, ProductPrice])),
      ),
    ),
    discount: Schema.NullOr(
      Schema.Union([
        CheckoutDiscountFixedOnceForeverDuration,
        CheckoutDiscountFixedRepeatDuration,
        CheckoutDiscountPercentageOnceForeverDuration,
        CheckoutDiscountPercentageRepeatDuration,
      ]),
    ),
    organization: CheckoutOrganization,
    attached_custom_fields: Schema.NullOr(Schema.Array(AttachedCustomField)),
    customer_session_token: Schema.NullOr(Schema.String),
  }),
) {}

/**
 * Update an existing checkout session using an access token.
 */
export class CheckoutUpdate extends Schema.Opaque<CheckoutUpdate>()(
  Schema.Struct({
    /** Key-value object storing custom field values. */
    custom_field_data: Schema.optionalKey(
      Schema.Record(
        Schema.String,
        Schema.Union([Schema.String, Schema.Number, Schema.Boolean, DateTimeInput, Schema.Null]),
      ),
    ),
    /** ID of the product to checkout. Must be present in the checkout's product list. */
    product_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** ID of the product price to checkout. Must correspond to a price present in the checkout's product list. */
    product_price_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    amount: Schema.optionalKey(Schema.NullOr(Schema.Number)),
    /** Number of seats for seat-based pricing. */
    seats: Schema.optionalKey(Schema.NullOr(Schema.Number)),
    /** Number of units for unit-based pricing. */
    units: Schema.optionalKey(Schema.NullOr(Schema.Number)),
    is_business_customer: Schema.optionalKey(Schema.NullOr(Schema.Boolean)),
    customer_name: Schema.optionalKey(Schema.NullOr(Schema.String)),
    customer_email: Schema.optionalKey(Schema.NullOr(Schema.String)),
    customer_billing_name: Schema.optionalKey(Schema.NullOr(Schema.String)),
    customer_billing_address: Schema.optionalKey(Schema.NullOr(AddressInput)),
    customer_tax_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    locale: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** The interval unit for the trial period. */
    trial_interval: Schema.optionalKey(Schema.NullOr(TrialInterval)),
    /** The number of interval units for the trial period. */
    trial_interval_count: Schema.optionalKey(Schema.NullOr(Schema.Number)),
    /** Key-value object allowing you to store additional information. The key must be a string with a maximum length of **40 characters**. The value must be either: * A string with a maximum length of **500 characters** * An integer * A floating-point number * A boolean You can store up to **50 key-value pairs**. */
    metadata: Schema.optionalKey(
      Schema.Record(Schema.String, Schema.Union([Schema.String, Schema.Number, Schema.Boolean])),
    ),
    currency: Schema.optionalKey(Schema.NullOr(PresentmentCurrency)),
    /** ID of the discount to apply to the checkout. */
    discount_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** Whether to allow the customer to apply discount codes. If you apply a discount through `discount_id`, it'll still be applied, but the customer won't be able to change it. */
    allow_discount_codes: Schema.optionalKey(Schema.NullOr(Schema.Boolean)),
    /** Whether to require the customer to fill their full billing address, instead of just the country. Customers in the US will always be required to fill their full address, regardless of this setting. If you preset the billing address, this setting will be automatically set to `true`. */
    require_billing_address: Schema.optionalKey(Schema.NullOr(Schema.Boolean)),
    /** Whether to enable the trial period for the checkout session. If `false`, the trial period will be disabled, even if the selected product has a trial configured. */
    allow_trial: Schema.optionalKey(Schema.NullOr(Schema.Boolean)),
    customer_ip_address: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** Key-value object allowing you to store additional information that'll be copied to the created customer. The key must be a string with a maximum length of **40 characters**. The value must be either: * A string with a maximum length of **500 characters** * An integer * A floating-point number * A boolean You can store up to **50 key-value pairs**. */
    customer_metadata: Schema.optionalKey(
      Schema.NullOr(
        Schema.Record(Schema.String, Schema.Union([Schema.String, Schema.Number, Schema.Boolean])),
      ),
    ),
    /** URL where the customer will be redirected after a successful payment.You can add the `checkout_id={CHECKOUT_ID}` query parameter to retrieve the checkout session id. */
    success_url: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** When set, a back button will be shown in the checkout to return to this URL. */
    return_url: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** If you plan to embed the checkout session, set this to the Origin of the embedding page. It'll allow the Polar iframe to communicate with the parent page. */
    embed_origin: Schema.optionalKey(Schema.NullOr(Schema.String)),
  }),
) {}

/**
 * Update an existing checkout session using the client secret.
 */
export class CheckoutUpdatePublic extends Schema.Opaque<CheckoutUpdatePublic>()(
  Schema.Struct({
    /** Key-value object storing custom field values. */
    custom_field_data: Schema.optionalKey(
      Schema.Record(
        Schema.String,
        Schema.Union([Schema.String, Schema.Number, Schema.Boolean, DateTimeInput, Schema.Null]),
      ),
    ),
    /** ID of the product to checkout. Must be present in the checkout's product list. */
    product_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** ID of the product price to checkout. Must correspond to a price present in the checkout's product list. */
    product_price_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    amount: Schema.optionalKey(Schema.NullOr(Schema.Number)),
    /** Number of seats for seat-based pricing. */
    seats: Schema.optionalKey(Schema.NullOr(Schema.Number)),
    /** Number of units for unit-based pricing. */
    units: Schema.optionalKey(Schema.NullOr(Schema.Number)),
    is_business_customer: Schema.optionalKey(Schema.NullOr(Schema.Boolean)),
    customer_name: Schema.optionalKey(Schema.NullOr(Schema.String)),
    customer_email: Schema.optionalKey(Schema.NullOr(Schema.String)),
    customer_billing_name: Schema.optionalKey(Schema.NullOr(Schema.String)),
    customer_billing_address: Schema.optionalKey(Schema.NullOr(AddressInput)),
    customer_tax_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    locale: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** Payment method type selected by the customer in the checkout form, e.g. `card`, `apple_pay` or `upi`. */
    payment_method_type: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** Discount code to apply to the checkout. */
    discount_code: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** Disable the trial period for the checkout session. It's mainly useful when the trial is blocked because the customer already redeemed one. */
    allow_trial: Schema.optionalKey(Schema.NullOr(Schema.Literal(false))),
  }),
) {}

/**
 * Context
 */
export class Context extends Schema.Opaque<Context>()(Schema.Struct({})) {}

/**
 * CostMetadataInput
 */
export class CostMetadataInput extends Schema.Opaque<CostMetadataInput>()(
  Schema.Struct({
    /** The amount in cents. */
    amount: Schema.Union([Schema.Number, Schema.String]),
    /** The currency. Currently, only `usd` is supported. */
    currency: Schema.String,
  }),
) {}

/**
 * CostMetadataOutput
 */
export class CostMetadataOutput extends Schema.Opaque<CostMetadataOutput>()(
  Schema.Struct({
    /** The amount in cents. */
    amount: Schema.String,
    /** The currency. Currently, only `usd` is supported. */
    currency: Schema.String,
  }),
) {}

/**
 * CountAggregation
 */
export class CountAggregation extends Schema.Opaque<CountAggregation>()(
  Schema.Struct({
    func: Schema.optionalKey(Schema.Literal("count")),
  }),
) {}

/**
 * CursorPagination
 */
export class CursorPagination extends Schema.Opaque<CursorPagination>()(
  Schema.Struct({
    has_next_page: Schema.Boolean,
  }),
) {}

/**
 * Schema to create a custom field of type checkbox.
 */
export class CustomFieldCreateCheckbox extends Schema.Opaque<CustomFieldCreateCheckbox>()(
  Schema.Struct({
    /** Key-value object allowing you to store additional information. The key must be a string with a maximum length of **40 characters**. The value must be either: * A string with a maximum length of **500 characters** * An integer * A floating-point number * A boolean You can store up to **50 key-value pairs**. */
    metadata: Schema.optionalKey(
      Schema.Record(Schema.String, Schema.Union([Schema.String, Schema.Number, Schema.Boolean])),
    ),
    type: Schema.Literal("checkbox"),
    /** Identifier of the custom field. It'll be used as key when storing the value. Must be unique across the organization.It can only contain ASCII letters, numbers and hyphens. */
    slug: Schema.String,
    /** Name of the custom field. */
    name: Schema.String,
    /** The ID of the organization owning the custom field. **Required unless you use an organization token.** */
    organization_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    properties: CustomFieldCheckboxProperties,
  }),
) {}

/**
 * Schema to create a custom field of type date.
 */
export class CustomFieldCreateDate extends Schema.Opaque<CustomFieldCreateDate>()(
  Schema.Struct({
    /** Key-value object allowing you to store additional information. The key must be a string with a maximum length of **40 characters**. The value must be either: * A string with a maximum length of **500 characters** * An integer * A floating-point number * A boolean You can store up to **50 key-value pairs**. */
    metadata: Schema.optionalKey(
      Schema.Record(Schema.String, Schema.Union([Schema.String, Schema.Number, Schema.Boolean])),
    ),
    type: Schema.Literal("date"),
    /** Identifier of the custom field. It'll be used as key when storing the value. Must be unique across the organization.It can only contain ASCII letters, numbers and hyphens. */
    slug: Schema.String,
    /** Name of the custom field. */
    name: Schema.String,
    /** The ID of the organization owning the custom field. **Required unless you use an organization token.** */
    organization_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    properties: CustomFieldDateProperties,
  }),
) {}

/**
 * Schema to create a custom field of type number.
 */
export class CustomFieldCreateNumber extends Schema.Opaque<CustomFieldCreateNumber>()(
  Schema.Struct({
    /** Key-value object allowing you to store additional information. The key must be a string with a maximum length of **40 characters**. The value must be either: * A string with a maximum length of **500 characters** * An integer * A floating-point number * A boolean You can store up to **50 key-value pairs**. */
    metadata: Schema.optionalKey(
      Schema.Record(Schema.String, Schema.Union([Schema.String, Schema.Number, Schema.Boolean])),
    ),
    type: Schema.Literal("number"),
    /** Identifier of the custom field. It'll be used as key when storing the value. Must be unique across the organization.It can only contain ASCII letters, numbers and hyphens. */
    slug: Schema.String,
    /** Name of the custom field. */
    name: Schema.String,
    /** The ID of the organization owning the custom field. **Required unless you use an organization token.** */
    organization_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    properties: CustomFieldNumberProperties,
  }),
) {}

/**
 * Schema to create a custom field of type select.
 */
export class CustomFieldCreateSelect extends Schema.Opaque<CustomFieldCreateSelect>()(
  Schema.Struct({
    /** Key-value object allowing you to store additional information. The key must be a string with a maximum length of **40 characters**. The value must be either: * A string with a maximum length of **500 characters** * An integer * A floating-point number * A boolean You can store up to **50 key-value pairs**. */
    metadata: Schema.optionalKey(
      Schema.Record(Schema.String, Schema.Union([Schema.String, Schema.Number, Schema.Boolean])),
    ),
    type: Schema.Literal("select"),
    /** Identifier of the custom field. It'll be used as key when storing the value. Must be unique across the organization.It can only contain ASCII letters, numbers and hyphens. */
    slug: Schema.String,
    /** Name of the custom field. */
    name: Schema.String,
    /** The ID of the organization owning the custom field. **Required unless you use an organization token.** */
    organization_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    properties: CustomFieldSelectProperties,
  }),
) {}

/**
 * Schema to create a custom field of type text.
 */
export class CustomFieldCreateText extends Schema.Opaque<CustomFieldCreateText>()(
  Schema.Struct({
    /** Key-value object allowing you to store additional information. The key must be a string with a maximum length of **40 characters**. The value must be either: * A string with a maximum length of **500 characters** * An integer * A floating-point number * A boolean You can store up to **50 key-value pairs**. */
    metadata: Schema.optionalKey(
      Schema.Record(Schema.String, Schema.Union([Schema.String, Schema.Number, Schema.Boolean])),
    ),
    type: Schema.Literal("text"),
    /** Identifier of the custom field. It'll be used as key when storing the value. Must be unique across the organization.It can only contain ASCII letters, numbers and hyphens. */
    slug: Schema.String,
    /** Name of the custom field. */
    name: Schema.String,
    /** The ID of the organization owning the custom field. **Required unless you use an organization token.** */
    organization_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    properties: CustomFieldTextProperties,
  }),
) {}

/**
 * CustomFieldCreate
 */
export const CustomFieldCreate = Schema.Union([
  CustomFieldCreateText,
  CustomFieldCreateNumber,
  CustomFieldCreateDate,
  CustomFieldCreateCheckbox,
  CustomFieldCreateSelect,
]);
export type CustomFieldCreate = typeof CustomFieldCreate.Type;

/**
 * Schema to update a custom field of type checkbox.
 */
export class CustomFieldUpdateCheckbox extends Schema.Opaque<CustomFieldUpdateCheckbox>()(
  Schema.Struct({
    /** Key-value object allowing you to store additional information. The key must be a string with a maximum length of **40 characters**. The value must be either: * A string with a maximum length of **500 characters** * An integer * A floating-point number * A boolean You can store up to **50 key-value pairs**. */
    metadata: Schema.optionalKey(
      Schema.Record(Schema.String, Schema.Union([Schema.String, Schema.Number, Schema.Boolean])),
    ),
    name: Schema.optionalKey(Schema.NullOr(Schema.String)),
    slug: Schema.optionalKey(Schema.NullOr(Schema.String)),
    type: Schema.Literal("checkbox"),
    properties: Schema.optionalKey(Schema.NullOr(CustomFieldCheckboxProperties)),
  }),
) {}

/**
 * Schema to update a custom field of type date.
 */
export class CustomFieldUpdateDate extends Schema.Opaque<CustomFieldUpdateDate>()(
  Schema.Struct({
    /** Key-value object allowing you to store additional information. The key must be a string with a maximum length of **40 characters**. The value must be either: * A string with a maximum length of **500 characters** * An integer * A floating-point number * A boolean You can store up to **50 key-value pairs**. */
    metadata: Schema.optionalKey(
      Schema.Record(Schema.String, Schema.Union([Schema.String, Schema.Number, Schema.Boolean])),
    ),
    name: Schema.optionalKey(Schema.NullOr(Schema.String)),
    slug: Schema.optionalKey(Schema.NullOr(Schema.String)),
    type: Schema.Literal("date"),
    properties: Schema.optionalKey(Schema.NullOr(CustomFieldDateProperties)),
  }),
) {}

/**
 * Schema to update a custom field of type number.
 */
export class CustomFieldUpdateNumber extends Schema.Opaque<CustomFieldUpdateNumber>()(
  Schema.Struct({
    /** Key-value object allowing you to store additional information. The key must be a string with a maximum length of **40 characters**. The value must be either: * A string with a maximum length of **500 characters** * An integer * A floating-point number * A boolean You can store up to **50 key-value pairs**. */
    metadata: Schema.optionalKey(
      Schema.Record(Schema.String, Schema.Union([Schema.String, Schema.Number, Schema.Boolean])),
    ),
    name: Schema.optionalKey(Schema.NullOr(Schema.String)),
    slug: Schema.optionalKey(Schema.NullOr(Schema.String)),
    type: Schema.Literal("number"),
    properties: Schema.optionalKey(Schema.NullOr(CustomFieldNumberProperties)),
  }),
) {}

/**
 * Schema to update a custom field of type select.
 */
export class CustomFieldUpdateSelect extends Schema.Opaque<CustomFieldUpdateSelect>()(
  Schema.Struct({
    /** Key-value object allowing you to store additional information. The key must be a string with a maximum length of **40 characters**. The value must be either: * A string with a maximum length of **500 characters** * An integer * A floating-point number * A boolean You can store up to **50 key-value pairs**. */
    metadata: Schema.optionalKey(
      Schema.Record(Schema.String, Schema.Union([Schema.String, Schema.Number, Schema.Boolean])),
    ),
    name: Schema.optionalKey(Schema.NullOr(Schema.String)),
    slug: Schema.optionalKey(Schema.NullOr(Schema.String)),
    type: Schema.Literal("select"),
    properties: Schema.optionalKey(Schema.NullOr(CustomFieldSelectProperties)),
  }),
) {}

/**
 * Schema to update a custom field of type text.
 */
export class CustomFieldUpdateText extends Schema.Opaque<CustomFieldUpdateText>()(
  Schema.Struct({
    /** Key-value object allowing you to store additional information. The key must be a string with a maximum length of **40 characters**. The value must be either: * A string with a maximum length of **500 characters** * An integer * A floating-point number * A boolean You can store up to **50 key-value pairs**. */
    metadata: Schema.optionalKey(
      Schema.Record(Schema.String, Schema.Union([Schema.String, Schema.Number, Schema.Boolean])),
    ),
    name: Schema.optionalKey(Schema.NullOr(Schema.String)),
    slug: Schema.optionalKey(Schema.NullOr(Schema.String)),
    type: Schema.Literal("text"),
    properties: Schema.optionalKey(Schema.NullOr(CustomFieldTextProperties)),
  }),
) {}

/**
 * CustomFieldUpdate
 */
export const CustomFieldUpdate = Schema.Union([
  CustomFieldUpdateText,
  CustomFieldUpdateNumber,
  CustomFieldUpdateDate,
  CustomFieldUpdateCheckbox,
  CustomFieldUpdateSelect,
]);
export type CustomFieldUpdate = typeof CustomFieldUpdate.Type;

/**
 * CustomerPortalOAuthAccount
 */
export class CustomerPortalOAuthAccount extends Schema.Opaque<CustomerPortalOAuthAccount>()(
  Schema.Struct({
    account_id: Schema.String,
    account_username: Schema.NullOr(Schema.String),
  }),
) {}

/**
 * CustomerPortalCustomer
 */
export class CustomerPortalCustomer extends Schema.Opaque<CustomerPortalCustomer>()(
  Schema.Struct({
    /** Creation timestamp of the object. */
    created_at: Schema.DateTimeUtcFromString,
    /** Last modification timestamp of the object. */
    modified_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** The ID of the object. */
    id: Schema.String,
    email: Schema.NullOr(Schema.String),
    email_verified: Schema.Boolean,
    name: Schema.NullOr(Schema.String),
    billing_name: Schema.NullOr(Schema.String),
    billing_address: Schema.NullOr(Address),
    tax_id: Schema.NullOr(Schema.Array(Schema.Unknown)),
    oauth_accounts: Schema.Record(Schema.String, CustomerPortalOAuthAccount),
    default_payment_method_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    type: Schema.optionalKey(Schema.NullOr(openEnum(CustomerType))),
    locale: Schema.optionalKey(Schema.NullOr(Schema.String)),
  }),
) {}

/**
 * CustomerBenefitGrantCustom
 */
export class CustomerBenefitGrantCustom extends Schema.Opaque<CustomerBenefitGrantCustom>()(
  Schema.Struct({
    /** Creation timestamp of the object. */
    created_at: Schema.DateTimeUtcFromString,
    /** Last modification timestamp of the object. */
    modified_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** The ID of the object. */
    id: Schema.String,
    granted_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    revoked_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    customer_id: Schema.String,
    member_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    benefit_id: Schema.String,
    subscription_id: Schema.NullOr(Schema.String),
    order_id: Schema.NullOr(Schema.String),
    is_granted: Schema.Boolean,
    is_revoked: Schema.Boolean,
    error: Schema.optionalKey(Schema.NullOr(BenefitGrantError)),
    customer: CustomerPortalCustomer,
    benefit: BenefitCustomSubscriber,
    properties: BenefitGrantCustomProperties,
  }),
) {}

/**
 * CustomerBenefitGrantDiscord
 */
export class CustomerBenefitGrantDiscord extends Schema.Opaque<CustomerBenefitGrantDiscord>()(
  Schema.Struct({
    /** Creation timestamp of the object. */
    created_at: Schema.DateTimeUtcFromString,
    /** Last modification timestamp of the object. */
    modified_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** The ID of the object. */
    id: Schema.String,
    granted_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    revoked_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    customer_id: Schema.String,
    member_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    benefit_id: Schema.String,
    subscription_id: Schema.NullOr(Schema.String),
    order_id: Schema.NullOr(Schema.String),
    is_granted: Schema.Boolean,
    is_revoked: Schema.Boolean,
    error: Schema.optionalKey(Schema.NullOr(BenefitGrantError)),
    customer: CustomerPortalCustomer,
    benefit: BenefitDiscordSubscriber,
    properties: BenefitGrantDiscordProperties,
  }),
) {}

/**
 * CustomerBenefitGrantDownloadables
 */
export class CustomerBenefitGrantDownloadables extends Schema.Opaque<CustomerBenefitGrantDownloadables>()(
  Schema.Struct({
    /** Creation timestamp of the object. */
    created_at: Schema.DateTimeUtcFromString,
    /** Last modification timestamp of the object. */
    modified_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** The ID of the object. */
    id: Schema.String,
    granted_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    revoked_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    customer_id: Schema.String,
    member_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    benefit_id: Schema.String,
    subscription_id: Schema.NullOr(Schema.String),
    order_id: Schema.NullOr(Schema.String),
    is_granted: Schema.Boolean,
    is_revoked: Schema.Boolean,
    error: Schema.optionalKey(Schema.NullOr(BenefitGrantError)),
    customer: CustomerPortalCustomer,
    benefit: BenefitDownloadablesSubscriber,
    properties: BenefitGrantDownloadablesProperties,
  }),
) {}

/**
 * CustomerBenefitGrantFeatureFlag
 */
export class CustomerBenefitGrantFeatureFlag extends Schema.Opaque<CustomerBenefitGrantFeatureFlag>()(
  Schema.Struct({
    /** Creation timestamp of the object. */
    created_at: Schema.DateTimeUtcFromString,
    /** Last modification timestamp of the object. */
    modified_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** The ID of the object. */
    id: Schema.String,
    granted_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    revoked_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    customer_id: Schema.String,
    member_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    benefit_id: Schema.String,
    subscription_id: Schema.NullOr(Schema.String),
    order_id: Schema.NullOr(Schema.String),
    is_granted: Schema.Boolean,
    is_revoked: Schema.Boolean,
    error: Schema.optionalKey(Schema.NullOr(BenefitGrantError)),
    customer: CustomerPortalCustomer,
    benefit: BenefitFeatureFlagSubscriber,
    properties: BenefitGrantFeatureFlagProperties,
  }),
) {}

/**
 * CustomerBenefitGrantGitHubRepository
 */
export class CustomerBenefitGrantGitHubRepository extends Schema.Opaque<CustomerBenefitGrantGitHubRepository>()(
  Schema.Struct({
    /** Creation timestamp of the object. */
    created_at: Schema.DateTimeUtcFromString,
    /** Last modification timestamp of the object. */
    modified_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** The ID of the object. */
    id: Schema.String,
    granted_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    revoked_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    customer_id: Schema.String,
    member_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    benefit_id: Schema.String,
    subscription_id: Schema.NullOr(Schema.String),
    order_id: Schema.NullOr(Schema.String),
    is_granted: Schema.Boolean,
    is_revoked: Schema.Boolean,
    error: Schema.optionalKey(Schema.NullOr(BenefitGrantError)),
    customer: CustomerPortalCustomer,
    benefit: BenefitGitHubRepositorySubscriber,
    properties: BenefitGrantGitHubRepositoryProperties,
  }),
) {}

/**
 * CustomerBenefitGrantLicenseKeys
 */
export class CustomerBenefitGrantLicenseKeys extends Schema.Opaque<CustomerBenefitGrantLicenseKeys>()(
  Schema.Struct({
    /** Creation timestamp of the object. */
    created_at: Schema.DateTimeUtcFromString,
    /** Last modification timestamp of the object. */
    modified_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** The ID of the object. */
    id: Schema.String,
    granted_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    revoked_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    customer_id: Schema.String,
    member_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    benefit_id: Schema.String,
    subscription_id: Schema.NullOr(Schema.String),
    order_id: Schema.NullOr(Schema.String),
    is_granted: Schema.Boolean,
    is_revoked: Schema.Boolean,
    error: Schema.optionalKey(Schema.NullOr(BenefitGrantError)),
    customer: CustomerPortalCustomer,
    benefit: BenefitLicenseKeysSubscriber,
    properties: BenefitGrantLicenseKeysProperties,
  }),
) {}

/**
 * CustomerBenefitGrantMeterCredit
 */
export class CustomerBenefitGrantMeterCredit extends Schema.Opaque<CustomerBenefitGrantMeterCredit>()(
  Schema.Struct({
    /** Creation timestamp of the object. */
    created_at: Schema.DateTimeUtcFromString,
    /** Last modification timestamp of the object. */
    modified_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** The ID of the object. */
    id: Schema.String,
    granted_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    revoked_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    customer_id: Schema.String,
    member_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    benefit_id: Schema.String,
    subscription_id: Schema.NullOr(Schema.String),
    order_id: Schema.NullOr(Schema.String),
    is_granted: Schema.Boolean,
    is_revoked: Schema.Boolean,
    error: Schema.optionalKey(Schema.NullOr(BenefitGrantError)),
    customer: CustomerPortalCustomer,
    benefit: BenefitMeterCreditSubscriber,
    properties: BenefitGrantMeterCreditProperties,
  }),
) {}

/**
 * CustomerBenefitGrantSlackSharedChannel
 */
export class CustomerBenefitGrantSlackSharedChannel extends Schema.Opaque<CustomerBenefitGrantSlackSharedChannel>()(
  Schema.Struct({
    /** Creation timestamp of the object. */
    created_at: Schema.DateTimeUtcFromString,
    /** Last modification timestamp of the object. */
    modified_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** The ID of the object. */
    id: Schema.String,
    granted_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    revoked_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    customer_id: Schema.String,
    member_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    benefit_id: Schema.String,
    subscription_id: Schema.NullOr(Schema.String),
    order_id: Schema.NullOr(Schema.String),
    is_granted: Schema.Boolean,
    is_revoked: Schema.Boolean,
    error: Schema.optionalKey(Schema.NullOr(BenefitGrantError)),
    customer: CustomerPortalCustomer,
    benefit: BenefitSlackSharedChannelSubscriber,
    properties: BenefitGrantSlackSharedChannelProperties,
  }),
) {}

/**
 * CustomerBenefitGrant
 */
export const CustomerBenefitGrant = Schema.Union([
  CustomerBenefitGrantDiscord,
  CustomerBenefitGrantGitHubRepository,
  CustomerBenefitGrantDownloadables,
  CustomerBenefitGrantLicenseKeys,
  CustomerBenefitGrantCustom,
  CustomerBenefitGrantMeterCredit,
  CustomerBenefitGrantFeatureFlag,
  CustomerBenefitGrantSlackSharedChannel,
]);
export type CustomerBenefitGrant = typeof CustomerBenefitGrant.Type;

/**
 * CustomerBenefitGrantCustomUpdate
 */
export class CustomerBenefitGrantCustomUpdate extends Schema.Opaque<CustomerBenefitGrantCustomUpdate>()(
  Schema.Struct({
    benefit_type: Schema.Literal("custom"),
  }),
) {}

/**
 * CustomerBenefitGrantDiscordPropertiesUpdate
 */
export class CustomerBenefitGrantDiscordPropertiesUpdate extends Schema.Opaque<CustomerBenefitGrantDiscordPropertiesUpdate>()(
  Schema.Struct({
    account_id: Schema.NullOr(Schema.String),
  }),
) {}

/**
 * CustomerBenefitGrantDiscordUpdate
 */
export class CustomerBenefitGrantDiscordUpdate extends Schema.Opaque<CustomerBenefitGrantDiscordUpdate>()(
  Schema.Struct({
    benefit_type: Schema.Literal("discord"),
    properties: CustomerBenefitGrantDiscordPropertiesUpdate,
  }),
) {}

/**
 * CustomerBenefitGrantDownloadablesUpdate
 */
export class CustomerBenefitGrantDownloadablesUpdate extends Schema.Opaque<CustomerBenefitGrantDownloadablesUpdate>()(
  Schema.Struct({
    benefit_type: Schema.Literal("downloadables"),
  }),
) {}

/**
 * CustomerBenefitGrantFeatureFlagUpdate
 */
export class CustomerBenefitGrantFeatureFlagUpdate extends Schema.Opaque<CustomerBenefitGrantFeatureFlagUpdate>()(
  Schema.Struct({
    benefit_type: Schema.Literal("feature_flag"),
  }),
) {}

/**
 * CustomerBenefitGrantGitHubRepositoryPropertiesUpdate
 */
export class CustomerBenefitGrantGitHubRepositoryPropertiesUpdate extends Schema.Opaque<CustomerBenefitGrantGitHubRepositoryPropertiesUpdate>()(
  Schema.Struct({
    account_id: Schema.NullOr(Schema.String),
  }),
) {}

/**
 * CustomerBenefitGrantGitHubRepositoryUpdate
 */
export class CustomerBenefitGrantGitHubRepositoryUpdate extends Schema.Opaque<CustomerBenefitGrantGitHubRepositoryUpdate>()(
  Schema.Struct({
    benefit_type: Schema.Literal("github_repository"),
    properties: CustomerBenefitGrantGitHubRepositoryPropertiesUpdate,
  }),
) {}

/**
 * CustomerBenefitGrantLicenseKeysUpdate
 */
export class CustomerBenefitGrantLicenseKeysUpdate extends Schema.Opaque<CustomerBenefitGrantLicenseKeysUpdate>()(
  Schema.Struct({
    benefit_type: Schema.Literal("license_keys"),
  }),
) {}

/**
 * CustomerBenefitGrantMeterCreditUpdate
 */
export class CustomerBenefitGrantMeterCreditUpdate extends Schema.Opaque<CustomerBenefitGrantMeterCreditUpdate>()(
  Schema.Struct({
    benefit_type: Schema.Literal("meter_credit"),
  }),
) {}

/**
 * CustomerBenefitGrantSlackSharedChannelPropertiesUpdate
 */
export class CustomerBenefitGrantSlackSharedChannelPropertiesUpdate extends Schema.Opaque<CustomerBenefitGrantSlackSharedChannelPropertiesUpdate>()(
  Schema.Struct({
    invited_email: Schema.String,
  }),
) {}

/**
 * CustomerBenefitGrantSlackSharedChannelUpdate
 */
export class CustomerBenefitGrantSlackSharedChannelUpdate extends Schema.Opaque<CustomerBenefitGrantSlackSharedChannelUpdate>()(
  Schema.Struct({
    benefit_type: Schema.Literal("slack_shared_channel"),
    properties: CustomerBenefitGrantSlackSharedChannelPropertiesUpdate,
  }),
) {}

/**
 * CustomerBenefitGrantUpdate
 */
export const CustomerBenefitGrantUpdate = Schema.Union([
  CustomerBenefitGrantDiscordUpdate,
  CustomerBenefitGrantGitHubRepositoryUpdate,
  CustomerBenefitGrantDownloadablesUpdate,
  CustomerBenefitGrantLicenseKeysUpdate,
  CustomerBenefitGrantCustomUpdate,
  CustomerBenefitGrantMeterCreditUpdate,
  CustomerBenefitGrantFeatureFlagUpdate,
  CustomerBenefitGrantSlackSharedChannelUpdate,
]);
export type CustomerBenefitGrantUpdate = typeof CustomerBenefitGrantUpdate.Type;

/**
 * Schema for creating an owner member during customer creation.
 */
export class MemberOwnerCreate extends Schema.Opaque<MemberOwnerCreate>()(
  Schema.Struct({
    /** The email address of the member. */
    email: Schema.String,
    name: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** The ID of the member in your system. This must be unique within the customer. */
    external_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
  }),
) {}

/**
 * CustomerIndividualCreate
 */
export class CustomerIndividualCreate extends Schema.Opaque<CustomerIndividualCreate>()(
  Schema.Struct({
    /** Key-value object allowing you to store additional information. The key must be a string with a maximum length of **40 characters**. The value must be either: * A string with a maximum length of **500 characters** * An integer * A floating-point number * A boolean You can store up to **50 key-value pairs**. */
    metadata: Schema.optionalKey(
      Schema.Record(Schema.String, Schema.Union([Schema.String, Schema.Number, Schema.Boolean])),
    ),
    /** The ID of the customer in your system. This must be unique within the organization. Once set, it can't be updated. */
    external_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    name: Schema.optionalKey(Schema.NullOr(Schema.String)),
    billing_address: Schema.optionalKey(Schema.NullOr(AddressInput)),
    tax_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    locale: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** The ID of the organization owning the customer. **Required unless you use an organization token.** */
    organization_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** Optional owner member to create with the customer. If not provided, an owner member will be automatically created using the customer's email and name. */
    owner: Schema.optionalKey(Schema.NullOr(MemberOwnerCreate)),
    type: Schema.optionalKey(Schema.Literal("individual")),
    /** The email address of the customer. This must be unique within the organization. */
    email: Schema.String,
  }),
) {}

/**
 * CustomerTeamCreate
 */
export class CustomerTeamCreate extends Schema.Opaque<CustomerTeamCreate>()(
  Schema.Struct({
    /** Key-value object allowing you to store additional information. The key must be a string with a maximum length of **40 characters**. The value must be either: * A string with a maximum length of **500 characters** * An integer * A floating-point number * A boolean You can store up to **50 key-value pairs**. */
    metadata: Schema.optionalKey(
      Schema.Record(Schema.String, Schema.Union([Schema.String, Schema.Number, Schema.Boolean])),
    ),
    /** The ID of the customer in your system. This must be unique within the organization. Once set, it can't be updated. */
    external_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    name: Schema.optionalKey(Schema.NullOr(Schema.String)),
    billing_address: Schema.optionalKey(Schema.NullOr(AddressInput)),
    tax_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    locale: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** The ID of the organization owning the customer. **Required unless you use an organization token.** */
    organization_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** Optional owner member to create with the customer. If not provided, an owner member will be automatically created using the customer's email and name. */
    owner: Schema.optionalKey(Schema.NullOr(MemberOwnerCreate)),
    type: Schema.Literal("team"),
    /** The email address of the team customer. Optional for team customers — if omitted, an owner with an email must be provided. */
    email: Schema.optionalKey(Schema.NullOr(Schema.String)),
  }),
) {}

/**
 * CustomerCreate
 */
export const CustomerCreate = Schema.Union([CustomerIndividualCreate, CustomerTeamCreate]);
export type CustomerCreate = typeof CustomerCreate.Type;

/**
 * CustomerCreatedMetadata
 */
export class CustomerCreatedMetadata extends Schema.Opaque<CustomerCreatedMetadata>()(
  Schema.Struct({
    customer_id: Schema.String,
    customer_email: Schema.NullOr(Schema.String),
    customer_name: Schema.NullOr(Schema.String),
    customer_external_id: Schema.NullOr(Schema.String),
  }),
) {}

/**
 * An event created by Polar when a customer is created.
 */
export class CustomerCreatedEvent extends Schema.Opaque<CustomerCreatedEvent>()(
  Schema.Struct({
    /** The ID of the object. */
    id: Schema.String,
    /** The timestamp of the event. */
    timestamp: Schema.DateTimeUtcFromString,
    /** The ID of the organization owning the event. */
    organization_id: Schema.String,
    /** ID of the customer in your Polar organization associated with the event. */
    customer_id: Schema.NullOr(Schema.String),
    /** The customer associated with the event. */
    customer: Schema.NullOr(Customer),
    /** ID of the customer in your system associated with the event. */
    external_customer_id: Schema.NullOr(Schema.String),
    /** ID of the member within the customer's organization who performed the action inside B2B. */
    member_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** ID of the member in your system within the customer's organization who performed the action inside B2B. */
    external_member_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** Number of direct child events linked to this event. */
    child_count: Schema.optionalKey(Schema.Number),
    /** The ID of the parent event. */
    parent_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** Human readable label of the event type. */
    label: Schema.String,
    /** The source of the event. `system` events are created by Polar. `user` events are the one you create through our ingestion API. */
    source: Schema.Literal("system"),
    /** The name of the event. */
    name: Schema.Literal("customer.created"),
    metadata: CustomerCreatedMetadata,
  }),
) {}

/**
 * CustomerCustomerMeterMeter
 */
export class CustomerCustomerMeterMeter extends Schema.Opaque<CustomerCustomerMeterMeter>()(
  Schema.Struct({
    /** Creation timestamp of the object. */
    created_at: Schema.DateTimeUtcFromString,
    /** Last modification timestamp of the object. */
    modified_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** The ID of the object. */
    id: Schema.String,
    /** The name of the meter. Will be shown on customer's invoices and usage. */
    name: Schema.String,
  }),
) {}

/**
 * CustomerCustomerMeter
 */
export class CustomerCustomerMeter extends Schema.Opaque<CustomerCustomerMeter>()(
  Schema.Struct({
    /** The ID of the object. */
    id: Schema.String,
    /** Creation timestamp of the object. */
    created_at: Schema.DateTimeUtcFromString,
    /** Last modification timestamp of the object. */
    modified_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** The ID of the customer. */
    customer_id: Schema.String,
    /** The ID of the meter. */
    meter_id: Schema.String,
    /** The number of consumed units. */
    consumed_units: Schema.Number,
    /** The number of credited units. */
    credited_units: Schema.Number,
    /** The balance of the meter, i.e. the difference between credited and consumed units. */
    balance: Schema.Number,
    meter: CustomerCustomerMeterMeter,
  }),
) {}

/**
 * CustomerCustomerSession
 */
export class CustomerCustomerSession extends Schema.Opaque<CustomerCustomerSession>()(
  Schema.Struct({
    expires_at: Schema.DateTimeUtcFromString,
    return_url: Schema.NullOr(Schema.String),
  }),
) {}

/**
 * CustomerDeletedMetadata
 */
export class CustomerDeletedMetadata extends Schema.Opaque<CustomerDeletedMetadata>()(
  Schema.Struct({
    customer_id: Schema.String,
    customer_email: Schema.NullOr(Schema.String),
    customer_name: Schema.NullOr(Schema.String),
    customer_external_id: Schema.NullOr(Schema.String),
  }),
) {}

/**
 * An event created by Polar when a customer is deleted.
 */
export class CustomerDeletedEvent extends Schema.Opaque<CustomerDeletedEvent>()(
  Schema.Struct({
    /** The ID of the object. */
    id: Schema.String,
    /** The timestamp of the event. */
    timestamp: Schema.DateTimeUtcFromString,
    /** The ID of the organization owning the event. */
    organization_id: Schema.String,
    /** ID of the customer in your Polar organization associated with the event. */
    customer_id: Schema.NullOr(Schema.String),
    /** The customer associated with the event. */
    customer: Schema.NullOr(Customer),
    /** ID of the customer in your system associated with the event. */
    external_customer_id: Schema.NullOr(Schema.String),
    /** ID of the member within the customer's organization who performed the action inside B2B. */
    member_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** ID of the member in your system within the customer's organization who performed the action inside B2B. */
    external_member_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** Number of direct child events linked to this event. */
    child_count: Schema.optionalKey(Schema.Number),
    /** The ID of the parent event. */
    parent_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** Human readable label of the event type. */
    label: Schema.String,
    /** The source of the event. `system` events are created by Polar. `user` events are the one you create through our ingestion API. */
    source: Schema.Literal("system"),
    /** The name of the event. */
    name: Schema.Literal("customer.deleted"),
    metadata: CustomerDeletedMetadata,
  }),
) {}

/**
 * CustomerEmailUpdateRequest
 */
export class CustomerEmailUpdateRequest extends Schema.Opaque<CustomerEmailUpdateRequest>()(
  Schema.Struct({
    email: Schema.String,
  }),
) {}

/**
 * CustomerEmailUpdateVerifyRequest
 */
export class CustomerEmailUpdateVerifyRequest extends Schema.Opaque<CustomerEmailUpdateVerifyRequest>()(
  Schema.Struct({
    token: Schema.String,
  }),
) {}

/**
 * CustomerEmailUpdateVerifyResponse
 */
export class CustomerEmailUpdateVerifyResponse extends Schema.Opaque<CustomerEmailUpdateVerifyResponse>()(
  Schema.Struct({
    token: Schema.String,
  }),
) {}

/**
 * FilterClause
 */
export class FilterClause extends Schema.Opaque<FilterClause>()(
  Schema.Struct({
    property: Schema.String,
    operator: openEnum(FilterOperator),
    value: Schema.Union([Schema.String, Schema.Number, Schema.Boolean]),
  }),
) {}

/**
 * Filter
 */
export interface Filter {
  readonly conjunction: FilterConjunction | (string & {});
  readonly clauses: ReadonlyArray<FilterClause | Filter>;
}
export interface FilterEncoded {
  readonly conjunction: string;
  readonly clauses: ReadonlyArray<(typeof FilterClause)["Encoded"] | FilterEncoded>;
}
/**
 * Filter
 */
export const Filter: Schema.Codec<Filter, FilterEncoded> = Schema.Struct({
  conjunction: openEnum(FilterConjunction),
  clauses: Schema.Array(
    Schema.Union([FilterClause, Schema.suspend((): Schema.Codec<Filter, FilterEncoded> => Filter)]),
  ),
});

/**
 * PropertyAggregation
 */
export class PropertyAggregation extends Schema.Opaque<PropertyAggregation>()(
  Schema.Struct({
    func: openEnum(Func),
    property: Schema.String,
  }),
) {}

/**
 * UniqueAggregation
 */
export class UniqueAggregation extends Schema.Opaque<UniqueAggregation>()(
  Schema.Struct({
    func: Schema.optionalKey(Schema.Literal("unique")),
    property: Schema.String,
  }),
) {}

/**
 * Meter
 */
export class Meter extends Schema.Opaque<Meter>()(
  Schema.Struct({
    metadata: MetadataOutputType,
    /** Creation timestamp of the object. */
    created_at: Schema.DateTimeUtcFromString,
    /** Last modification timestamp of the object. */
    modified_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** The ID of the object. */
    id: Schema.String,
    /** The name of the meter. Will be shown on customer's invoices and usage. */
    name: Schema.String,
    unit: openEnum(MeterUnit),
    /** The label for the custom unit. */
    custom_label: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** The multiplier to convert from base unit to display scale. */
    custom_multiplier: Schema.optionalKey(Schema.NullOr(Schema.Number)),
    filter: Filter,
    /** The aggregation to apply on the filtered events to calculate the meter. */
    aggregation: openUnion([CountAggregation, PropertyAggregation, UniqueAggregation], "func", [
      "avg",
      "count",
      "max",
      "min",
      "sum",
      "unique",
    ]),
    /** The ID of the organization owning the meter. */
    organization_id: Schema.String,
    /** Whether the meter is archived and the time it was archived. */
    archived_at: Schema.optionalKey(Schema.NullOr(Schema.DateTimeUtcFromString)),
  }),
) {}

/**
 * An active customer meter, with current consumed and credited units.
 */
export class CustomerMeter extends Schema.Opaque<CustomerMeter>()(
  Schema.Struct({
    /** The ID of the object. */
    id: Schema.String,
    /** Creation timestamp of the object. */
    created_at: Schema.DateTimeUtcFromString,
    /** Last modification timestamp of the object. */
    modified_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** The ID of the customer. */
    customer_id: Schema.String,
    /** The ID of the meter. */
    meter_id: Schema.String,
    /** The number of consumed units. */
    consumed_units: Schema.Number,
    /** The number of credited units. */
    credited_units: Schema.Number,
    /** The balance of the meter, i.e. the difference between credited and consumed units. */
    balance: Schema.Number,
    customer: Customer,
    meter: Meter,
  }),
) {}

/**
 * CustomerNotReady
 */
export class CustomerNotReady extends Schema.Opaque<CustomerNotReady>()(
  Schema.Struct({
    error: Schema.Literal("CustomerNotReady"),
    detail: Schema.String,
  }),
) {}

/**
 * Feature flags exposed to the customer portal.
 */
export class CustomerOrganizationFeatureSettings extends Schema.Opaque<CustomerOrganizationFeatureSettings>()(
  Schema.Struct({
    /** Whether the member model is enabled for this organization. */
    member_model_enabled: Schema.optionalKey(Schema.Boolean),
    /** Whether localization is enabled for this organization. */
    checkout_localization_enabled: Schema.optionalKey(Schema.Boolean),
  }),
) {}

/**
 * CustomerPortalCustomerSettings
 */
export class CustomerPortalCustomerSettings extends Schema.Opaque<CustomerPortalCustomerSettings>()(
  Schema.Struct({
    allow_email_change: Schema.optionalKey(Schema.Boolean),
  }),
) {}

/**
 * CustomerPortalSubscriptionSettings
 */
export class CustomerPortalSubscriptionSettings extends Schema.Opaque<CustomerPortalSubscriptionSettings>()(
  Schema.Struct({
    update_seats: Schema.Boolean,
    update_plan: Schema.Boolean,
    update_units: Schema.optionalKey(Schema.Boolean),
    pause: Schema.optionalKey(Schema.Boolean),
  }),
) {}

/**
 * CustomerPortalUsageSettings
 */
export class CustomerPortalUsageSettings extends Schema.Opaque<CustomerPortalUsageSettings>()(
  Schema.Struct({
    show: Schema.Boolean,
  }),
) {}

/**
 * OrganizationCustomerPortalSettings
 */
export class OrganizationCustomerPortalSettings extends Schema.Opaque<OrganizationCustomerPortalSettings>()(
  Schema.Struct({
    usage: CustomerPortalUsageSettings,
    subscription: CustomerPortalSubscriptionSettings,
    customer: Schema.optionalKey(CustomerPortalCustomerSettings),
  }),
) {}

/**
 * CustomerOrganization
 */
export class CustomerOrganization extends Schema.Opaque<CustomerOrganization>()(
  Schema.Struct({
    /** Creation timestamp of the object. */
    created_at: Schema.DateTimeUtcFromString,
    /** Last modification timestamp of the object. */
    modified_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** The ID of the object. */
    id: Schema.String,
    /** Organization name shown in checkout, customer portal, emails etc. */
    name: Schema.String,
    /** Unique organization slug in checkout, customer portal and credit card statements. */
    slug: Schema.String,
    /** Avatar URL shown in checkout, customer portal, emails etc. */
    avatar_url: Schema.NullOr(Schema.String),
    proration_behavior: openEnum(SubscriptionProrationBehavior),
    /** Whether customers can update their subscriptions from the customer portal. */
    allow_customer_updates: Schema.Boolean,
    customer_portal_settings: OrganizationCustomerPortalSettings,
    organization_features: Schema.optionalKey(CustomerOrganizationFeatureSettings),
  }),
) {}

/**
 * CustomerOrderProduct
 */
export class CustomerOrderProduct extends Schema.Opaque<CustomerOrderProduct>()(
  Schema.Struct({
    /** The ID of the object. */
    id: Schema.String,
    /** Creation timestamp of the object. */
    created_at: Schema.DateTimeUtcFromString,
    /** Last modification timestamp of the object. */
    modified_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** The interval unit for the trial period. */
    trial_interval: Schema.NullOr(openEnum(TrialInterval)),
    /** The number of interval units for the trial period. */
    trial_interval_count: Schema.NullOr(Schema.Number),
    /** The name of the product. */
    name: Schema.String,
    /** The description of the product. */
    description: Schema.NullOr(Schema.String),
    visibility: openEnum(ProductVisibility),
    /** The recurring interval of the product. If `None`, the product is a one-time purchase. */
    recurring_interval: Schema.NullOr(openEnum(RecurringInterval)),
    /** Number of interval units of the subscription. If this is set to 1 the charge will happen every interval (e.g. every month), if set to 2 it will be every other month, and so on. None for one-time products. */
    recurring_interval_count: Schema.NullOr(Schema.Number),
    /** The meter cycle of the product, independent of the billing interval. If `None`, metered concerns follow the billing interval. */
    meter_interval: Schema.NullOr(openEnum(RecurringInterval)),
    /** Number of meter interval units. None when no meter cycle is set. */
    meter_interval_count: Schema.NullOr(Schema.Number),
    /** Whether the product is a subscription. */
    is_recurring: Schema.Boolean,
    /** Whether the product is archived and no longer available. */
    is_archived: Schema.Boolean,
    /** The ID of the organization owning the product. */
    organization_id: Schema.String,
    /** List of prices for this product. */
    prices: Schema.Array(Schema.Union([LegacyRecurringProductPrice, ProductPrice])),
    /** List of benefits granted by the product. */
    benefits: Schema.Array(BenefitPublic),
    /** List of medias associated to the product. */
    medias: Schema.Array(ProductMediaFileRead),
    organization: CustomerOrganization,
  }),
) {}

/**
 * CustomerOrderSubscription
 */
export class CustomerOrderSubscription extends Schema.Opaque<CustomerOrderSubscription>()(
  Schema.Struct({
    /** Creation timestamp of the object. */
    created_at: Schema.DateTimeUtcFromString,
    /** Last modification timestamp of the object. */
    modified_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** The ID of the object. */
    id: Schema.String,
    /** The amount of the subscription. */
    amount: Schema.Number,
    /** The currency of the subscription. */
    currency: Schema.String,
    recurring_interval: openEnum(RecurringInterval),
    /** Number of interval units of the subscription. If this is set to 1 the charge will happen every interval (e.g. every month), if set to 2 it will be every other month, and so on. */
    recurring_interval_count: Schema.Number,
    status: openEnum(SubscriptionStatus),
    /** The start timestamp of the current billing period. */
    current_period_start: Schema.DateTimeUtcFromString,
    /** The end timestamp of the current billing period. */
    current_period_end: Schema.DateTimeUtcFromString,
    /** The start timestamp of the current meter period, if the product has a meter cycle set. Metered credits are granted and overage is settled on this cadence. */
    current_meter_period_start: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** The end timestamp of the current meter period, if the product has a meter cycle set. This is when credits next renew. */
    current_meter_period_end: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** The start timestamp of the trial period, if any. */
    trial_start: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** The end timestamp of the trial period, if any. */
    trial_end: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** Whether the subscription will be canceled at the end of the current period. */
    cancel_at_period_end: Schema.Boolean,
    /** The timestamp when the subscription was canceled. The subscription might still be active if `cancel_at_period_end` is `true`. */
    canceled_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** The timestamp when the subscription started. */
    started_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** The timestamp when the subscription will end. */
    ends_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** The timestamp when the subscription ended. */
    ended_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** The timestamp when the subscription entered `past_due` status. */
    past_due_at: Schema.optionalKey(Schema.NullOr(Schema.DateTimeUtcFromString)),
    /** Whether the subscription will be paused at the end of the current period. */
    pause_at_period_end: Schema.Boolean,
    /** The timestamp when the subscription was paused. */
    paused_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** The timestamp when a paused subscription is scheduled to automatically resume, if set. */
    resumes_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** The ID of the subscribed customer. */
    customer_id: Schema.String,
    /** The ID of the subscribed product. */
    product_id: Schema.String,
    /** The ID of the applied discount, if any. */
    discount_id: Schema.NullOr(Schema.String),
    checkout_id: Schema.NullOr(Schema.String),
    /** The number of seats for seat-based subscriptions. None for non-seat subscriptions. */
    seats: Schema.optionalKey(Schema.NullOr(Schema.Number)),
    /** The number of units for unit-based subscriptions. None for non-unit subscriptions. */
    units: Schema.NullOr(Schema.Number),
    customer_cancellation_reason: Schema.NullOr(openEnum(CustomerCancellationReason)),
    customer_cancellation_comment: Schema.NullOr(Schema.String),
  }),
) {}

/**
 * An order line item.
 */
export class OrderItemSchema extends Schema.Opaque<OrderItemSchema>()(
  Schema.Struct({
    /** Creation timestamp of the object. */
    created_at: Schema.DateTimeUtcFromString,
    /** Last modification timestamp of the object. */
    modified_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** The ID of the object. */
    id: Schema.String,
    /** Description of the line item charge. */
    label: Schema.String,
    /** Amount in cents, before discounts and taxes. */
    amount: Schema.Number,
    /** Sales tax amount in cents. */
    tax_amount: Schema.Number,
    /** Whether this charge is due to a proration. */
    proration: Schema.Boolean,
    /** Associated price ID, if any. */
    product_price_id: Schema.NullOr(Schema.String),
    /** Start of the period covered by this line item, if any. */
    start_timestamp: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** End of the period covered by this line item, if any. */
    end_timestamp: Schema.NullOr(Schema.DateTimeUtcFromString),
  }),
) {}

/**
 * CustomerOrder
 */
export class CustomerOrder extends Schema.Opaque<CustomerOrder>()(
  Schema.Struct({
    /** The ID of the object. */
    id: Schema.String,
    /** Creation timestamp of the object. */
    created_at: Schema.DateTimeUtcFromString,
    /** Last modification timestamp of the object. */
    modified_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    status: openEnum(OrderStatus),
    /** Whether the order has been paid for. */
    paid: Schema.Boolean,
    /** Amount in cents, before discounts and taxes. */
    subtotal_amount: Schema.Number,
    /** Discount amount in cents. */
    discount_amount: Schema.Number,
    /** Amount in cents, after discounts but before taxes. */
    net_amount: Schema.Number,
    /** Sales tax amount in cents. */
    tax_amount: Schema.Number,
    /** Amount in cents, after discounts and taxes. */
    total_amount: Schema.Number,
    /** Customer's balance amount applied to this invoice. Can increase the total amount paid, if the customer has a negative balance, or decrease it, if the customer has a positive balance.Amount in cents. */
    applied_balance_amount: Schema.Number,
    /** Amount in cents that is due for this order. */
    due_amount: Schema.Number,
    /** Amount refunded in cents. */
    refunded_amount: Schema.Number,
    /** Sales tax refunded in cents. */
    refunded_tax_amount: Schema.Number,
    currency: Schema.String,
    billing_reason: openEnum(OrderBillingReason),
    /** The name of the customer that should appear on the invoice. */
    billing_name: Schema.NullOr(Schema.String),
    billing_address: Schema.NullOr(Address),
    /** The invoice number associated with this order. `null` while the order is in `draft` status; assigned at finalize. */
    invoice_number: Schema.NullOr(Schema.String),
    /** Whether an invoice has been generated for this order. */
    is_invoice_generated: Schema.Boolean,
    /** The receipt number for this order. Set once the order is paid for organizations with receipts enabled. When set, a downloadable receipt PDF can be obtained via the receipt endpoint. */
    receipt_number: Schema.NullOr(Schema.String),
    /** Number of seats purchased (for seat-based one-time orders). */
    seats: Schema.optionalKey(Schema.NullOr(Schema.Number)),
    /** Number of units purchased (for unit-based pricing). */
    units: Schema.NullOr(Schema.Number),
    customer_id: Schema.String,
    product_id: Schema.NullOr(Schema.String),
    discount_id: Schema.NullOr(Schema.String),
    subscription_id: Schema.NullOr(Schema.String),
    checkout_id: Schema.NullOr(Schema.String),
    /** When the next automatic payment retry is scheduled. `null` if the order is not in dunning or all retries have been exhausted. */
    next_payment_attempt_at: Schema.optionalKey(Schema.NullOr(Schema.DateTimeUtcFromString)),
    product: Schema.NullOr(CustomerOrderProduct),
    subscription: Schema.NullOr(CustomerOrderSubscription),
    /** Line items composing the order. */
    items: Schema.Array(OrderItemSchema),
    /** A summary description of the order. */
    description: Schema.String,
    /** Amount in cents that can still be refunded (net, before taxes). Accounts for any applied customer balance and previous refunds. */
    refundable_amount: Schema.Number,
    /** Sales tax in cents that would be refunded if the full refundable amount is refunded. */
    refundable_tax_amount: Schema.Number,
  }),
) {}

/**
 * Schema to confirm a retry payment using either a saved payment method or a new confirmation token.
 */
export class CustomerOrderConfirmPayment extends Schema.Opaque<CustomerOrderConfirmPayment>()(
  Schema.Struct({
    /** ID of the Stripe confirmation token for new payment methods. */
    confirmation_token_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** ID of an existing saved payment method. */
    payment_method_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    payment_processor: Schema.optionalKey(PaymentProcessor),
  }),
) {}

/**
 * Order's invoice data.
 */
export class CustomerOrderInvoice extends Schema.Opaque<CustomerOrderInvoice>()(
  Schema.Struct({
    /** The URL to the invoice. */
    url: Schema.String,
  }),
) {}

/**
 * Response after confirming a retry payment.
 */
export class CustomerOrderPaymentConfirmation extends Schema.Opaque<CustomerOrderPaymentConfirmation>()(
  Schema.Struct({
    /** Payment status after confirmation. */
    status: Schema.String,
    /** Client secret for handling additional actions. */
    client_secret: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** Error message if confirmation failed. */
    error: Schema.optionalKey(Schema.NullOr(Schema.String)),
  }),
) {}

/**
 * Payment status for an order.
 */
export class CustomerOrderPaymentStatus extends Schema.Opaque<CustomerOrderPaymentStatus>()(
  Schema.Struct({
    /** Current payment status. */
    status: Schema.String,
    /** Error message if payment failed. */
    error: Schema.optionalKey(Schema.NullOr(Schema.String)),
  }),
) {}

/**
 * Order's receipt data.
 */
export class CustomerOrderReceipt extends Schema.Opaque<CustomerOrderReceipt>()(
  Schema.Struct({
    /** The URL to the receipt PDF. */
    url: Schema.String,
  }),
) {}

/**
 * Schema to update an order.
 */
export class CustomerOrderUpdate extends Schema.Opaque<CustomerOrderUpdate>()(
  Schema.Struct({
    /** The name of the customer that should appear on the invoice. */
    billing_name: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** The address of the customer that should appear on the invoice. Country and state fields cannot be updated. */
    billing_address: Schema.optionalKey(Schema.NullOr(AddressInput)),
  }),
) {}

/**
 * Schema of a product for customer portal.
 */
export class CustomerProduct extends Schema.Opaque<CustomerProduct>()(
  Schema.Struct({
    /** The ID of the object. */
    id: Schema.String,
    /** Creation timestamp of the object. */
    created_at: Schema.DateTimeUtcFromString,
    /** Last modification timestamp of the object. */
    modified_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** The interval unit for the trial period. */
    trial_interval: Schema.NullOr(openEnum(TrialInterval)),
    /** The number of interval units for the trial period. */
    trial_interval_count: Schema.NullOr(Schema.Number),
    /** The name of the product. */
    name: Schema.String,
    /** The description of the product. */
    description: Schema.NullOr(Schema.String),
    visibility: openEnum(ProductVisibility),
    /** The recurring interval of the product. If `None`, the product is a one-time purchase. */
    recurring_interval: Schema.NullOr(openEnum(RecurringInterval)),
    /** Number of interval units of the subscription. If this is set to 1 the charge will happen every interval (e.g. every month), if set to 2 it will be every other month, and so on. None for one-time products. */
    recurring_interval_count: Schema.NullOr(Schema.Number),
    /** The meter cycle of the product, independent of the billing interval. If `None`, metered concerns follow the billing interval. */
    meter_interval: Schema.NullOr(openEnum(RecurringInterval)),
    /** Number of meter interval units. None when no meter cycle is set. */
    meter_interval_count: Schema.NullOr(Schema.Number),
    /** Whether the product is a subscription. */
    is_recurring: Schema.Boolean,
    /** Whether the product is archived and no longer available. */
    is_archived: Schema.Boolean,
    /** The ID of the organization owning the product. */
    organization_id: Schema.String,
    /** List of available prices for this product. */
    prices: Schema.Array(Schema.Union([LegacyRecurringProductPrice, ProductPrice])),
    /** List of benefits granted by the product. */
    benefits: Schema.Array(BenefitPublic),
    /** The medias associated to the product. */
    medias: Schema.Array(ProductMediaFileRead),
  }),
) {}

/**
 * Schema of an organization and related data for customer portal.
 */
export class CustomerOrganizationData extends Schema.Opaque<CustomerOrganizationData>()(
  Schema.Struct({
    organization: CustomerOrganization,
    products: Schema.Array(CustomerProduct),
  }),
) {}

/**
 * PaymentMethodCardMetadata
 */
export class PaymentMethodCardMetadata extends Schema.Opaque<PaymentMethodCardMetadata>()(
  Schema.Struct({
    brand: Schema.String,
    last4: Schema.String,
    exp_month: Schema.Number,
    exp_year: Schema.Number,
    wallet: Schema.optionalKey(Schema.NullOr(Schema.String)),
  }),
) {}

/**
 * PaymentMethodCard
 */
export class PaymentMethodCard extends Schema.Opaque<PaymentMethodCard>()(
  Schema.Struct({
    /** The ID of the object. */
    id: Schema.String,
    /** Creation timestamp of the object. */
    created_at: Schema.DateTimeUtcFromString,
    /** Last modification timestamp of the object. */
    modified_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    processor: openEnum(PaymentProcessor),
    customer_id: Schema.String,
    type: Schema.Literal("card"),
    method_metadata: PaymentMethodCardMetadata,
  }),
) {}

/**
 * PaymentMethodGeneric
 */
export class PaymentMethodGeneric extends Schema.Opaque<PaymentMethodGeneric>()(
  Schema.Struct({
    /** The ID of the object. */
    id: Schema.String,
    /** Creation timestamp of the object. */
    created_at: Schema.DateTimeUtcFromString,
    /** Last modification timestamp of the object. */
    modified_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    processor: openEnum(PaymentProcessor),
    customer_id: Schema.String,
    type: Schema.String,
  }),
) {}

/**
 * PaymentMethodKrCardMetadata
 */
export class PaymentMethodKrCardMetadata extends Schema.Opaque<PaymentMethodKrCardMetadata>()(
  Schema.Struct({
    brand: Schema.NullOr(Schema.String),
    last4: Schema.NullOr(Schema.String),
  }),
) {}

/**
 * PaymentMethodKrCard
 */
export class PaymentMethodKrCard extends Schema.Opaque<PaymentMethodKrCard>()(
  Schema.Struct({
    /** The ID of the object. */
    id: Schema.String,
    /** Creation timestamp of the object. */
    created_at: Schema.DateTimeUtcFromString,
    /** Last modification timestamp of the object. */
    modified_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    processor: openEnum(PaymentProcessor),
    customer_id: Schema.String,
    type: Schema.Literal("kr_card"),
    method_metadata: PaymentMethodKrCardMetadata,
  }),
) {}

/**
 * CustomerPaymentMethod
 */
export const CustomerPaymentMethod = Schema.Union([
  PaymentMethodCard,
  PaymentMethodKrCard,
  PaymentMethodGeneric,
]);
export type CustomerPaymentMethod = typeof CustomerPaymentMethod.Type;

/**
 * CustomerPaymentMethodCard
 */
export class CustomerPaymentMethodCard extends Schema.Opaque<CustomerPaymentMethodCard>()(
  Schema.Struct({
    /** The ID of the object. */
    id: Schema.String,
    /** Creation timestamp of the object. */
    created_at: Schema.DateTimeUtcFromString,
    /** Last modification timestamp of the object. */
    modified_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    processor: openEnum(PaymentProcessor),
    customer_id: Schema.String,
    type: Schema.Literal("card"),
    method_metadata: PaymentMethodCardMetadata,
    /** Whether this payment method is the customer's default payment method. */
    is_default: Schema.Boolean,
  }),
) {}

/**
 * CustomerPaymentMethodConfirm
 */
export class CustomerPaymentMethodConfirm extends Schema.Opaque<CustomerPaymentMethodConfirm>()(
  Schema.Struct({
    setup_intent_id: Schema.String,
    set_default: Schema.Boolean,
  }),
) {}

/**
 * CustomerPaymentMethodCreate
 */
export class CustomerPaymentMethodCreate extends Schema.Opaque<CustomerPaymentMethodCreate>()(
  Schema.Struct({
    confirmation_token_id: Schema.String,
    set_default: Schema.Boolean,
    return_url: Schema.String,
  }),
) {}

/**
 * CustomerPaymentMethodCreateRequiresActionResponse
 */
export class CustomerPaymentMethodCreateRequiresActionResponse extends Schema.Opaque<CustomerPaymentMethodCreateRequiresActionResponse>()(
  Schema.Struct({
    status: Schema.Literal("requires_action"),
    client_secret: Schema.String,
  }),
) {}

/**
 * CustomerPaymentMethodCreateSucceededResponse
 */
export class CustomerPaymentMethodCreateSucceededResponse extends Schema.Opaque<CustomerPaymentMethodCreateSucceededResponse>()(
  Schema.Struct({
    status: Schema.Literal("succeeded"),
    payment_method: CustomerPaymentMethod,
  }),
) {}

/**
 * CustomerPaymentMethodCreateResponse
 */
export const CustomerPaymentMethodCreateResponse = openUnion(
  [CustomerPaymentMethodCreateSucceededResponse, CustomerPaymentMethodCreateRequiresActionResponse],
  "status",
  ["requires_action", "succeeded"],
);
export type CustomerPaymentMethodCreateResponse = typeof CustomerPaymentMethodCreateResponse.Type;

/**
 * CustomerPaymentMethodGeneric
 */
export class CustomerPaymentMethodGeneric extends Schema.Opaque<CustomerPaymentMethodGeneric>()(
  Schema.Struct({
    /** The ID of the object. */
    id: Schema.String,
    /** Creation timestamp of the object. */
    created_at: Schema.DateTimeUtcFromString,
    /** Last modification timestamp of the object. */
    modified_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    processor: openEnum(PaymentProcessor),
    customer_id: Schema.String,
    type: Schema.String,
    /** Whether this payment method is the customer's default payment method. */
    is_default: Schema.Boolean,
  }),
) {}

/**
 * CustomerPaymentMethodKrCard
 */
export class CustomerPaymentMethodKrCard extends Schema.Opaque<CustomerPaymentMethodKrCard>()(
  Schema.Struct({
    /** The ID of the object. */
    id: Schema.String,
    /** Creation timestamp of the object. */
    created_at: Schema.DateTimeUtcFromString,
    /** Last modification timestamp of the object. */
    modified_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    processor: openEnum(PaymentProcessor),
    customer_id: Schema.String,
    type: Schema.Literal("kr_card"),
    method_metadata: PaymentMethodKrCardMetadata,
    /** Whether this payment method is the customer's default payment method. */
    is_default: Schema.Boolean,
  }),
) {}

/**
 * CustomerPortalCustomerUpdate
 */
export class CustomerPortalCustomerUpdate extends Schema.Opaque<CustomerPortalCustomerUpdate>()(
  Schema.Struct({
    billing_name: Schema.optionalKey(Schema.NullOr(Schema.String)),
    billing_address: Schema.optionalKey(Schema.NullOr(AddressInput)),
    tax_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    default_payment_method_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
  }),
) {}

/**
 * A member of the customer's team as seen in the customer portal.
 */
export class CustomerPortalMember extends Schema.Opaque<CustomerPortalMember>()(
  Schema.Struct({
    /** Creation timestamp of the object. */
    created_at: Schema.DateTimeUtcFromString,
    /** Last modification timestamp of the object. */
    modified_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** The ID of the object. */
    id: Schema.String,
    /** The email address of the member. */
    email: Schema.String,
    /** The name of the member. */
    name: Schema.NullOr(Schema.String),
    role: openEnum(MemberRole),
  }),
) {}

/**
 * Schema for adding a new member to the customer's team.
 */
export class CustomerPortalMemberCreate extends Schema.Opaque<CustomerPortalMemberCreate>()(
  Schema.Struct({
    /** The email address of the new member. */
    email: Schema.String,
    /** The name of the new member (optional). */
    name: Schema.optionalKey(Schema.NullOr(Schema.String)),
    role: Schema.optionalKey(MemberRole),
  }),
) {}

/**
 * Schema for updating a member in the customer portal.
 */
export class CustomerPortalMemberUpdate extends Schema.Opaque<CustomerPortalMemberUpdate>()(
  Schema.Struct({
    /** The new name for the member. */
    name: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** The new role for the member. */
    role: Schema.optionalKey(Schema.NullOr(MemberRole)),
  }),
) {}

/**
 * CustomerSeat
 */
export class CustomerSeat extends Schema.Opaque<CustomerSeat>()(
  Schema.Struct({
    /** Creation timestamp of the object. */
    created_at: Schema.DateTimeUtcFromString,
    /** Last modification timestamp of the object. */
    modified_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** The seat ID */
    id: Schema.String,
    /** The subscription ID (for recurring seats) */
    subscription_id: Schema.NullOr(Schema.String),
    /** The order ID (for one-time purchase seats) */
    order_id: Schema.NullOr(Schema.String),
    status: openEnum(SeatStatus),
    /** The customer ID. When member_model_enabled is true, this is the billing customer (purchaser). When false, this is the seat member customer. */
    customer_id: Schema.NullOr(Schema.String),
    /** The member ID of the seat occupant */
    member_id: Schema.NullOr(Schema.String),
    /** The member associated with this seat */
    member: Schema.NullOr(Member),
    /** Email of the seat member (set when member_model_enabled is true) */
    email: Schema.NullOr(Schema.String),
    /** The assigned customer email */
    customer_email: Schema.NullOr(Schema.String),
    /** When the invitation token expires */
    invitation_token_expires_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** When the seat was claimed */
    claimed_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** When the seat was revoked */
    revoked_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** Additional metadata for the seat */
    seat_metadata: Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
  }),
) {}

/**
 * CustomerSeatAssign
 */
export class CustomerSeatAssign extends Schema.Opaque<CustomerSeatAssign>()(
  Schema.Struct({
    /** Subscription ID. Required if neither order_id nor checkout_id is provided. */
    subscription_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** Order ID for one-time purchases. Required if subscription_id is not provided. */
    order_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** Email of the customer to assign the seat to */
    email: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** External customer ID for the seat assignment */
    external_customer_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** Customer ID for the seat assignment */
    customer_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** External member ID for the seat assignment. Can be used alone (lookup existing member) or with email (create/validate member). */
    external_member_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** Member ID for the seat assignment. */
    member_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** Additional metadata for the seat (max 10 keys, 1KB total) */
    metadata: Schema.optionalKey(Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown))),
    /** If true, the seat will be immediately claimed without sending an invitation email. API-only feature. */
    immediate_claim: Schema.optionalKey(Schema.Boolean),
    /** Checkout ID. Resolves to the subscription or order produced by the checkout. */
    checkout_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
  }),
) {}

/**
 * Response after successfully claiming a seat.
 */
export class CustomerSeatClaimResponse extends Schema.Opaque<CustomerSeatClaimResponse>()(
  Schema.Struct({
    seat: CustomerSeat,
    /** Session token for immediate customer portal access */
    customer_session_token: Schema.String,
  }),
) {}

/**
 * A customer session that can be used to authenticate as a customer.
 */
export class CustomerSession extends Schema.Opaque<CustomerSession>()(
  Schema.Struct({
    /** Creation timestamp of the object. */
    created_at: Schema.DateTimeUtcFromString,
    /** Last modification timestamp of the object. */
    modified_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** The ID of the object. */
    id: Schema.String,
    token: Schema.String,
    expires_at: Schema.DateTimeUtcFromString,
    return_url: Schema.NullOr(Schema.String),
    customer_portal_url: Schema.String,
    customer_id: Schema.String,
    customer: Customer,
  }),
) {}

/**
 * Schema for creating a customer session using an external customer ID.
 */
export class CustomerSessionCustomerExternalIDCreate extends Schema.Opaque<CustomerSessionCustomerExternalIDCreate>()(
  Schema.Struct({
    /** ID of the member to create a session for. When not provided and the organization has `member_model_enabled`, the owner member of the customer will be used for individual customers. */
    member_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** External ID of the member to create a session for. Alternative to `member_id`. */
    external_member_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** When set, a back button will be shown in the customer portal to return to this URL. */
    return_url: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** External ID of the customer to create a session for. */
    external_customer_id: Schema.String,
  }),
) {}

/**
 * Schema for creating a customer session using a customer ID.
 */
export class CustomerSessionCustomerIDCreate extends Schema.Opaque<CustomerSessionCustomerIDCreate>()(
  Schema.Struct({
    /** ID of the member to create a session for. When not provided and the organization has `member_model_enabled`, the owner member of the customer will be used for individual customers. */
    member_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** External ID of the member to create a session for. Alternative to `member_id`. */
    external_member_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** When set, a back button will be shown in the customer portal to return to this URL. */
    return_url: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** ID of the customer to create a session for. */
    customer_id: Schema.String,
  }),
) {}

/**
 * An active benefit grant for a customer.
 */
export class CustomerStateBenefitGrant extends Schema.Opaque<CustomerStateBenefitGrant>()(
  Schema.Struct({
    /** The ID of the grant. */
    id: Schema.String,
    /** Creation timestamp of the object. */
    created_at: Schema.DateTimeUtcFromString,
    /** Last modification timestamp of the object. */
    modified_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** The timestamp when the benefit was granted. */
    granted_at: Schema.DateTimeUtcFromString,
    /** The ID of the benefit concerned by this grant. */
    benefit_id: Schema.String,
    benefit_type: openEnum(BenefitType),
    benefit_metadata: MetadataOutputType,
    properties: Schema.Union([
      BenefitGrantDiscordProperties,
      BenefitGrantGitHubRepositoryProperties,
      BenefitGrantDownloadablesProperties,
      BenefitGrantLicenseKeysProperties,
      BenefitGrantCustomProperties,
      BenefitGrantFeatureFlagProperties,
      BenefitGrantSlackSharedChannelProperties,
    ]),
  }),
) {}

/**
 * An active meter for a customer, with latest consumed and credited units.
 */
export class CustomerStateMeter extends Schema.Opaque<CustomerStateMeter>()(
  Schema.Struct({
    /** The ID of the object. */
    id: Schema.String,
    /** Creation timestamp of the object. */
    created_at: Schema.DateTimeUtcFromString,
    /** Last modification timestamp of the object. */
    modified_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** The ID of the meter. */
    meter_id: Schema.String,
    /** The number of consumed units. */
    consumed_units: Schema.Number,
    /** The number of credited units. */
    credited_units: Schema.Number,
    /** The balance of the meter, i.e. the difference between credited and consumed units. */
    balance: Schema.Number,
  }),
) {}

/**
 * Current consumption and spending for a subscription meter.
 */
export class CustomerStateSubscriptionMeter extends Schema.Opaque<CustomerStateSubscriptionMeter>()(
  Schema.Struct({
    /** Creation timestamp of the object. */
    created_at: Schema.DateTimeUtcFromString,
    /** Last modification timestamp of the object. */
    modified_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** The ID of the object. */
    id: Schema.String,
    /** The number of consumed units so far in this billing period. */
    consumed_units: Schema.Number,
    /** The number of credited units so far in this billing period. */
    credited_units: Schema.Number,
    /** The amount due in cents so far in this billing period. */
    amount: Schema.Number,
    /** The ID of the meter. */
    meter_id: Schema.String,
  }),
) {}

/**
 * An active customer subscription.
 */
export class CustomerStateSubscription extends Schema.Opaque<CustomerStateSubscription>()(
  Schema.Struct({
    /** The ID of the subscription. */
    id: Schema.String,
    /** Creation timestamp of the object. */
    created_at: Schema.DateTimeUtcFromString,
    /** Last modification timestamp of the object. */
    modified_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** Key-value object storing custom field values. */
    custom_field_data: Schema.optionalKey(
      Schema.Record(
        Schema.String,
        Schema.Union([
          Schema.String,
          Schema.Number,
          Schema.Boolean,
          Schema.DateTimeUtcFromString,
          Schema.Null,
        ]),
      ),
    ),
    metadata: MetadataOutputType,
    status: openEnum(Status),
    /** The amount of the subscription. */
    amount: Schema.Number,
    /** The currency of the subscription. */
    currency: Schema.String,
    recurring_interval: openEnum(RecurringInterval),
    /** The start timestamp of the current billing period. */
    current_period_start: Schema.DateTimeUtcFromString,
    /** The end timestamp of the current billing period. */
    current_period_end: Schema.DateTimeUtcFromString,
    /** The start timestamp of the trial period, if any. */
    trial_start: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** The end timestamp of the trial period, if any. */
    trial_end: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** Whether the subscription will be canceled at the end of the current period. */
    cancel_at_period_end: Schema.Boolean,
    /** The timestamp when the subscription was canceled. The subscription might still be active if `cancel_at_period_end` is `true`. */
    canceled_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** The timestamp when the subscription started. */
    started_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** The timestamp when the subscription will end. */
    ends_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** The ID of the subscribed product. */
    product_id: Schema.String,
    /** The ID of the applied discount, if any. */
    discount_id: Schema.NullOr(Schema.String),
    /** The number of seats for seat-based subscriptions. None for non-seat subscriptions. */
    seats: Schema.NullOr(Schema.Number),
    /** The number of units for unit-based subscriptions. None for non-unit subscriptions. */
    units: Schema.NullOr(Schema.Number),
    /** List of meters associated with the subscription. */
    meters: Schema.Array(CustomerStateSubscriptionMeter),
  }),
) {}

/**
 * A customer along with additional state information:
 *
 * * Active subscriptions
 * * Granted benefits
 * * Active meters
 */
export class CustomerStateIndividual extends Schema.Opaque<CustomerStateIndividual>()(
  Schema.Struct({
    /** The ID of the customer. */
    id: Schema.String,
    /** Creation timestamp of the object. */
    created_at: Schema.DateTimeUtcFromString,
    /** Last modification timestamp of the object. */
    modified_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    metadata: MetadataOutputType,
    /** The ID of the customer in your system. This must be unique within the organization. Once set, it can't be updated. */
    external_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** The email address of the customer. This must be unique within the organization. */
    email: Schema.String,
    /** Whether the customer email address is verified. The address is automatically verified when the customer accesses the customer portal using their email address. */
    email_verified: Schema.Boolean,
    /** The type of customer. */
    type: Schema.Literal("individual"),
    /** The name of the customer. */
    name: Schema.NullOr(Schema.String),
    /** The name that should appear on the customer's invoices. Falls back to the customer name when not explicitly set. */
    billing_name: Schema.NullOr(Schema.String),
    billing_address: Schema.NullOr(Address),
    tax_id: Schema.NullOr(Schema.Array(Schema.Unknown)),
    locale: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** The ID of the organization owning the customer. */
    organization_id: Schema.String,
    /** The ID of the customer's default payment method, if any. Use the payment methods endpoint to retrieve its details. */
    default_payment_method_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** Timestamp for when the customer was soft deleted. */
    deleted_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** Timestamp of the first event ingested for this customer. Can predate `created_at`, and is null if no event was ever ingested. */
    first_user_event_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    avatar_url: Schema.NullOr(Schema.String),
    /** The customer's active subscriptions. */
    active_subscriptions: Schema.Array(CustomerStateSubscription),
    /** The customer's active benefit grants. */
    granted_benefits: Schema.Array(CustomerStateBenefitGrant),
    /** The customer's active meters. */
    active_meters: Schema.Array(CustomerStateMeter),
  }),
) {}

/**
 * A team customer along with additional state information:
 *
 * * Active subscriptions
 * * Granted benefits
 * * Active meters
 */
export class CustomerStateTeam extends Schema.Opaque<CustomerStateTeam>()(
  Schema.Struct({
    /** The ID of the customer. */
    id: Schema.String,
    /** Creation timestamp of the object. */
    created_at: Schema.DateTimeUtcFromString,
    /** Last modification timestamp of the object. */
    modified_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    metadata: MetadataOutputType,
    /** The ID of the customer in your system. This must be unique within the organization. Once set, it can't be updated. */
    external_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** The email address of the customer. This must be unique within the organization. */
    email: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** Whether the customer email address is verified. The address is automatically verified when the customer accesses the customer portal using their email address. */
    email_verified: Schema.Boolean,
    /** The type of customer. Team customers can have multiple members. */
    type: Schema.Literal("team"),
    /** The name of the customer. */
    name: Schema.NullOr(Schema.String),
    /** The name that should appear on the customer's invoices. Falls back to the customer name when not explicitly set. */
    billing_name: Schema.NullOr(Schema.String),
    billing_address: Schema.NullOr(Address),
    tax_id: Schema.NullOr(Schema.Array(Schema.Unknown)),
    locale: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** The ID of the organization owning the customer. */
    organization_id: Schema.String,
    /** The ID of the customer's default payment method, if any. Use the payment methods endpoint to retrieve its details. */
    default_payment_method_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** Timestamp for when the customer was soft deleted. */
    deleted_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** Timestamp of the first event ingested for this customer. Can predate `created_at`, and is null if no event was ever ingested. */
    first_user_event_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    avatar_url: Schema.NullOr(Schema.String),
    /** The customer's active subscriptions. */
    active_subscriptions: Schema.Array(CustomerStateSubscription),
    /** The customer's active benefit grants. */
    granted_benefits: Schema.Array(CustomerStateBenefitGrant),
    /** The customer's active meters. */
    active_meters: Schema.Array(CustomerStateMeter),
  }),
) {}

/**
 * CustomerState
 */
export const CustomerState = openUnion([CustomerStateIndividual, CustomerStateTeam], "type", [
  "individual",
  "team",
]);
export type CustomerState = typeof CustomerState.Type;

/**
 * CustomerSubscriptionMeterMeter
 */
export class CustomerSubscriptionMeterMeter extends Schema.Opaque<CustomerSubscriptionMeterMeter>()(
  Schema.Struct({
    /** Creation timestamp of the object. */
    created_at: Schema.DateTimeUtcFromString,
    /** Last modification timestamp of the object. */
    modified_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** The ID of the object. */
    id: Schema.String,
    /** The name of the meter. Will be shown on customer's invoices and usage. */
    name: Schema.String,
  }),
) {}

/**
 * CustomerSubscriptionMeter
 */
export class CustomerSubscriptionMeter extends Schema.Opaque<CustomerSubscriptionMeter>()(
  Schema.Struct({
    /** Creation timestamp of the object. */
    created_at: Schema.DateTimeUtcFromString,
    /** Last modification timestamp of the object. */
    modified_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** The ID of the object. */
    id: Schema.String,
    /** The number of consumed units so far in this billing period. */
    consumed_units: Schema.Number,
    /** The number of credited units so far in this billing period. */
    credited_units: Schema.Number,
    /** The amount due in cents so far in this billing period. */
    amount: Schema.Number,
    /** The ID of the meter. */
    meter_id: Schema.String,
    meter: CustomerSubscriptionMeterMeter,
  }),
) {}

/**
 * CustomerSubscriptionProduct
 */
export class CustomerSubscriptionProduct extends Schema.Opaque<CustomerSubscriptionProduct>()(
  Schema.Struct({
    /** The ID of the object. */
    id: Schema.String,
    /** Creation timestamp of the object. */
    created_at: Schema.DateTimeUtcFromString,
    /** Last modification timestamp of the object. */
    modified_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** The interval unit for the trial period. */
    trial_interval: Schema.NullOr(openEnum(TrialInterval)),
    /** The number of interval units for the trial period. */
    trial_interval_count: Schema.NullOr(Schema.Number),
    /** The name of the product. */
    name: Schema.String,
    /** The description of the product. */
    description: Schema.NullOr(Schema.String),
    visibility: openEnum(ProductVisibility),
    /** The recurring interval of the product. If `None`, the product is a one-time purchase. */
    recurring_interval: Schema.NullOr(openEnum(RecurringInterval)),
    /** Number of interval units of the subscription. If this is set to 1 the charge will happen every interval (e.g. every month), if set to 2 it will be every other month, and so on. None for one-time products. */
    recurring_interval_count: Schema.NullOr(Schema.Number),
    /** The meter cycle of the product, independent of the billing interval. If `None`, metered concerns follow the billing interval. */
    meter_interval: Schema.NullOr(openEnum(RecurringInterval)),
    /** Number of meter interval units. None when no meter cycle is set. */
    meter_interval_count: Schema.NullOr(Schema.Number),
    /** Whether the product is a subscription. */
    is_recurring: Schema.Boolean,
    /** Whether the product is archived and no longer available. */
    is_archived: Schema.Boolean,
    /** The ID of the organization owning the product. */
    organization_id: Schema.String,
    /** List of prices for this product. */
    prices: Schema.Array(Schema.Union([LegacyRecurringProductPrice, ProductPrice])),
    /** List of benefits granted by the product. */
    benefits: Schema.Array(BenefitPublic),
    /** List of medias associated to the product. */
    medias: Schema.Array(ProductMediaFileRead),
    organization: CustomerOrganization,
  }),
) {}

/**
 * Pending update to be applied to a subscription at the beginning of the next period.
 */
export class PendingSubscriptionUpdate extends Schema.Opaque<PendingSubscriptionUpdate>()(
  Schema.Struct({
    /** Creation timestamp of the object. */
    created_at: Schema.DateTimeUtcFromString,
    /** Last modification timestamp of the object. */
    modified_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** The ID of the object. */
    id: Schema.String,
    /** The date and time when the subscription update will be applied. */
    applies_at: Schema.DateTimeUtcFromString,
    /** ID of the new product to apply to the subscription. If `null`, the product won't be changed. */
    product_id: Schema.NullOr(Schema.String),
    /** Number of seats to apply to the subscription. If `null`, the number of seats won't be changed. */
    seats: Schema.NullOr(Schema.Number),
    /** Number of units to apply to the subscription. If `null`, the number of units won't be changed. */
    units: Schema.NullOr(Schema.Number),
  }),
) {}

/**
 * CustomerSubscription
 */
export class CustomerSubscription extends Schema.Opaque<CustomerSubscription>()(
  Schema.Struct({
    /** Creation timestamp of the object. */
    created_at: Schema.DateTimeUtcFromString,
    /** Last modification timestamp of the object. */
    modified_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** The ID of the object. */
    id: Schema.String,
    /** The amount of the subscription. */
    amount: Schema.Number,
    /** The currency of the subscription. */
    currency: Schema.String,
    recurring_interval: openEnum(RecurringInterval),
    /** Number of interval units of the subscription. If this is set to 1 the charge will happen every interval (e.g. every month), if set to 2 it will be every other month, and so on. */
    recurring_interval_count: Schema.Number,
    status: openEnum(SubscriptionStatus),
    /** The start timestamp of the current billing period. */
    current_period_start: Schema.DateTimeUtcFromString,
    /** The end timestamp of the current billing period. */
    current_period_end: Schema.DateTimeUtcFromString,
    /** The start timestamp of the current meter period, if the product has a meter cycle set. Metered credits are granted and overage is settled on this cadence. */
    current_meter_period_start: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** The end timestamp of the current meter period, if the product has a meter cycle set. This is when credits next renew. */
    current_meter_period_end: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** The start timestamp of the trial period, if any. */
    trial_start: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** The end timestamp of the trial period, if any. */
    trial_end: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** Whether the subscription will be canceled at the end of the current period. */
    cancel_at_period_end: Schema.Boolean,
    /** The timestamp when the subscription was canceled. The subscription might still be active if `cancel_at_period_end` is `true`. */
    canceled_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** The timestamp when the subscription started. */
    started_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** The timestamp when the subscription will end. */
    ends_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** The timestamp when the subscription ended. */
    ended_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** The timestamp when the subscription entered `past_due` status. */
    past_due_at: Schema.optionalKey(Schema.NullOr(Schema.DateTimeUtcFromString)),
    /** Whether the subscription will be paused at the end of the current period. */
    pause_at_period_end: Schema.Boolean,
    /** The timestamp when the subscription was paused. */
    paused_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** The timestamp when a paused subscription is scheduled to automatically resume, if set. */
    resumes_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** The ID of the subscribed customer. */
    customer_id: Schema.String,
    /** The ID of the subscribed product. */
    product_id: Schema.String,
    /** The ID of the applied discount, if any. */
    discount_id: Schema.NullOr(Schema.String),
    checkout_id: Schema.NullOr(Schema.String),
    /** The number of seats for seat-based subscriptions. None for non-seat subscriptions. */
    seats: Schema.optionalKey(Schema.NullOr(Schema.Number)),
    /** The number of units for unit-based subscriptions. None for non-unit subscriptions. */
    units: Schema.NullOr(Schema.Number),
    customer_cancellation_reason: Schema.NullOr(openEnum(CustomerCancellationReason)),
    customer_cancellation_comment: Schema.NullOr(Schema.String),
    product: CustomerSubscriptionProduct,
    /** List of enabled prices for the subscription. */
    prices: Schema.Array(Schema.Union([LegacyRecurringProductPrice, ProductPrice])),
    /** List of meters associated with the subscription. */
    meters: Schema.Array(CustomerSubscriptionMeter),
    /** Pending subscription update that will be applied at the beginning of the next period. If `null`, there is no pending update. */
    pending_update: Schema.NullOr(PendingSubscriptionUpdate),
  }),
) {}

/**
 * CustomerSubscriptionCancel
 */
export class CustomerSubscriptionCancel extends Schema.Opaque<CustomerSubscriptionCancel>()(
  Schema.Struct({
    /** Cancel an active subscription once the current period ends. Or uncancel a subscription currently set to be revoked at period end. */
    cancel_at_period_end: Schema.optionalKey(Schema.NullOr(Schema.Boolean)),
    /** Customers reason for cancellation. * `too_expensive`: Too expensive for the customer. * `missing_features`: Customer is missing certain features. * `switched_service`: Customer switched to another service. * `unused`: Customer is not using it enough. * `customer_service`: Customer is not satisfied with the customer service. * `low_quality`: Customer is unhappy with the quality. * `too_complex`: Customer considers the service too complicated. * `other`: Other reason(s). */
    cancellation_reason: Schema.optionalKey(Schema.NullOr(CustomerCancellationReason)),
    /** Customer feedback and why they decided to cancel. */
    cancellation_comment: Schema.optionalKey(Schema.NullOr(Schema.String)),
  }),
) {}

/**
 * CustomerSubscriptionPause
 */
export class CustomerSubscriptionPause extends Schema.Opaque<CustomerSubscriptionPause>()(
  Schema.Struct({
    /** Pause an active subscription at the end of the current period. Or cancel a scheduled pause on a subscription set to be paused at period end. */
    pause_at_period_end: Schema.Boolean,
    /** Date at which the paused subscription should automatically resume. If not set, it stays paused until resumed. Must be after the current period end. */
    resumes_at: Schema.optionalKey(Schema.NullOr(DateTimeInput)),
  }),
) {}

/**
 * CustomerSubscriptionResume
 */
export class CustomerSubscriptionResume extends Schema.Opaque<CustomerSubscriptionResume>()(
  Schema.Struct({
    /** Resume a paused subscription immediately, starting a new billing period and charging the customer. */
    resume: Schema.Literal(true),
  }),
) {}

/**
 * CustomerSubscriptionUpdateClear
 */
export class CustomerSubscriptionUpdateClear extends Schema.Opaque<CustomerSubscriptionUpdateClear>()(
  Schema.Struct({
    /** Clear the pending subscription update. */
    pending_update: Schema.Null,
  }),
) {}

/**
 * CustomerSubscriptionUpdateProduct
 */
export class CustomerSubscriptionUpdateProduct extends Schema.Opaque<CustomerSubscriptionUpdateProduct>()(
  Schema.Struct({
    /** Update subscription to another product. */
    product_id: Schema.String,
  }),
) {}

/**
 * CustomerSubscriptionUpdateSeats
 */
export class CustomerSubscriptionUpdateSeats extends Schema.Opaque<CustomerSubscriptionUpdateSeats>()(
  Schema.Struct({
    /** Update the number of seats for this subscription. */
    seats: Schema.Number,
  }),
) {}

/**
 * CustomerSubscriptionUpdateUnits
 */
export class CustomerSubscriptionUpdateUnits extends Schema.Opaque<CustomerSubscriptionUpdateUnits>()(
  Schema.Struct({
    /** Update the number of units for this subscription. */
    units: Schema.Number,
  }),
) {}

/**
 * CustomerSubscriptionUpdate
 */
export const CustomerSubscriptionUpdate = Schema.Union([
  CustomerSubscriptionUpdateProduct,
  CustomerSubscriptionUpdateSeats,
  CustomerSubscriptionUpdateUnits,
  CustomerSubscriptionCancel,
  CustomerSubscriptionPause,
  CustomerSubscriptionResume,
  CustomerSubscriptionUpdateClear,
]);
export type CustomerSubscriptionUpdate = typeof CustomerSubscriptionUpdate.Type;

/**
 * CustomerUpdate
 */
export class CustomerUpdate extends Schema.Opaque<CustomerUpdate>()(
  Schema.Struct({
    /** Key-value object allowing you to store additional information. The key must be a string with a maximum length of **40 characters**. The value must be either: * A string with a maximum length of **500 characters** * An integer * A floating-point number * A boolean You can store up to **50 key-value pairs**. */
    metadata: Schema.optionalKey(
      Schema.Record(Schema.String, Schema.Union([Schema.String, Schema.Number, Schema.Boolean])),
    ),
    /** The email address of the customer. This must be unique within the organization. */
    email: Schema.optionalKey(Schema.NullOr(Schema.String)),
    name: Schema.optionalKey(Schema.NullOr(Schema.String)),
    billing_address: Schema.optionalKey(Schema.NullOr(AddressInput)),
    tax_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    locale: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** The ID of the customer in your system. This must be unique within the organization. Once set, it can't be updated. */
    external_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** The customer type. Can only be upgraded from 'individual' to 'team', never downgraded. */
    type: Schema.optionalKey(Schema.NullOr(CustomerType)),
  }),
) {}

/**
 * CustomerUpdateExternalID
 */
export class CustomerUpdateExternalID extends Schema.Opaque<CustomerUpdateExternalID>()(
  Schema.Struct({
    /** Key-value object allowing you to store additional information. The key must be a string with a maximum length of **40 characters**. The value must be either: * A string with a maximum length of **500 characters** * An integer * A floating-point number * A boolean You can store up to **50 key-value pairs**. */
    metadata: Schema.optionalKey(
      Schema.Record(Schema.String, Schema.Union([Schema.String, Schema.Number, Schema.Boolean])),
    ),
    /** The email address of the customer. This must be unique within the organization. */
    email: Schema.optionalKey(Schema.NullOr(Schema.String)),
    name: Schema.optionalKey(Schema.NullOr(Schema.String)),
    billing_address: Schema.optionalKey(Schema.NullOr(AddressInput)),
    tax_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    locale: Schema.optionalKey(Schema.NullOr(Schema.String)),
  }),
) {}

/**
 * CustomerUpdatedFields
 */
export class CustomerUpdatedFields extends Schema.Opaque<CustomerUpdatedFields>()(
  Schema.Struct({
    name: Schema.optionalKey(Schema.NullOr(Schema.String)),
    billing_name: Schema.optionalKey(Schema.NullOr(Schema.String)),
    email: Schema.optionalKey(Schema.NullOr(Schema.String)),
    billing_address: Schema.optionalKey(Schema.NullOr(AddressDict)),
    tax_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    metadata: Schema.optionalKey(
      Schema.NullOr(
        Schema.Record(Schema.String, Schema.Union([Schema.String, Schema.Number, Schema.Boolean])),
      ),
    ),
  }),
) {}

/**
 * CustomerUpdatedMetadata
 */
export class CustomerUpdatedMetadata extends Schema.Opaque<CustomerUpdatedMetadata>()(
  Schema.Struct({
    customer_id: Schema.String,
    customer_email: Schema.NullOr(Schema.String),
    customer_name: Schema.NullOr(Schema.String),
    customer_external_id: Schema.NullOr(Schema.String),
    updated_fields: CustomerUpdatedFields,
  }),
) {}

/**
 * An event created by Polar when a customer is updated.
 */
export class CustomerUpdatedEvent extends Schema.Opaque<CustomerUpdatedEvent>()(
  Schema.Struct({
    /** The ID of the object. */
    id: Schema.String,
    /** The timestamp of the event. */
    timestamp: Schema.DateTimeUtcFromString,
    /** The ID of the organization owning the event. */
    organization_id: Schema.String,
    /** ID of the customer in your Polar organization associated with the event. */
    customer_id: Schema.NullOr(Schema.String),
    /** The customer associated with the event. */
    customer: Schema.NullOr(Customer),
    /** ID of the customer in your system associated with the event. */
    external_customer_id: Schema.NullOr(Schema.String),
    /** ID of the member within the customer's organization who performed the action inside B2B. */
    member_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** ID of the member in your system within the customer's organization who performed the action inside B2B. */
    external_member_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** Number of direct child events linked to this event. */
    child_count: Schema.optionalKey(Schema.Number),
    /** The ID of the parent event. */
    parent_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** Human readable label of the event type. */
    label: Schema.String,
    /** The source of the event. `system` events are created by Polar. `user` events are the one you create through our ingestion API. */
    source: Schema.Literal("system"),
    /** The name of the event. */
    name: Schema.Literal("customer.updated"),
    metadata: CustomerUpdatedMetadata,
  }),
) {}

/**
 * A wallet represents your balance with an organization.
 *
 * You can top-up your wallet and use the balance to pay for usage.
 */
export class CustomerWallet extends Schema.Opaque<CustomerWallet>()(
  Schema.Struct({
    /** The ID of the object. */
    id: Schema.String,
    /** Creation timestamp of the object. */
    created_at: Schema.DateTimeUtcFromString,
    /** Last modification timestamp of the object. */
    modified_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** The ID of the customer that owns the wallet. */
    customer_id: Schema.String,
    /** The current balance of the wallet, in cents. */
    balance: Schema.Number,
    /** The currency of the wallet. */
    currency: Schema.String,
  }),
) {}

/**
 * A product that a discount can be applied to.
 */
export class DiscountProduct extends Schema.Opaque<DiscountProduct>()(
  Schema.Struct({
    metadata: MetadataOutputType,
    /** The ID of the object. */
    id: Schema.String,
    /** Creation timestamp of the object. */
    created_at: Schema.DateTimeUtcFromString,
    /** Last modification timestamp of the object. */
    modified_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** The interval unit for the trial period. */
    trial_interval: Schema.NullOr(openEnum(TrialInterval)),
    /** The number of interval units for the trial period. */
    trial_interval_count: Schema.NullOr(Schema.Number),
    /** The name of the product. */
    name: Schema.String,
    /** The description of the product. */
    description: Schema.NullOr(Schema.String),
    visibility: openEnum(ProductVisibility),
    /** The recurring interval of the product. If `None`, the product is a one-time purchase. */
    recurring_interval: Schema.NullOr(openEnum(RecurringInterval)),
    /** Number of interval units of the subscription. If this is set to 1 the charge will happen every interval (e.g. every month), if set to 2 it will be every other month, and so on. None for one-time products. */
    recurring_interval_count: Schema.NullOr(Schema.Number),
    /** The meter cycle of the product, independent of the billing interval. If `None`, metered concerns follow the billing interval. */
    meter_interval: Schema.NullOr(openEnum(RecurringInterval)),
    /** Number of meter interval units. None when no meter cycle is set. */
    meter_interval_count: Schema.NullOr(Schema.Number),
    /** Whether the product is a subscription. */
    is_recurring: Schema.Boolean,
    /** Whether the product is archived and no longer available. */
    is_archived: Schema.Boolean,
    /** The ID of the organization owning the product. */
    organization_id: Schema.String,
  }),
) {}

/**
 * Schema for a fixed amount discount that is applied once or forever.
 */
export class DiscountFixedOnceForeverDuration extends Schema.Opaque<DiscountFixedOnceForeverDuration>()(
  Schema.Struct({
    duration: openEnum(DiscountDuration),
    type: openEnum(DiscountType),
    amount: Schema.Number,
    currency: Schema.String,
    /** Map of currency to fixed amount to discount from the total. */
    amounts: Schema.Record(Schema.String, Schema.Number),
    /** Creation timestamp of the object. */
    created_at: Schema.DateTimeUtcFromString,
    /** Last modification timestamp of the object. */
    modified_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** The ID of the object. */
    id: Schema.String,
    metadata: MetadataOutputType,
    /** Name of the discount. Will be displayed to the customer when the discount is applied. */
    name: Schema.String,
    /** Code customers can use to apply the discount during checkout. */
    code: Schema.NullOr(Schema.String),
    /** Timestamp after which the discount is redeemable. */
    starts_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** Timestamp after which the discount is no longer redeemable. */
    ends_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** Maximum number of times the discount can be redeemed. */
    max_redemptions: Schema.NullOr(Schema.Number),
    /** Maximum number of times the discount can be redeemed by a single customer. */
    max_redemptions_per_customer: Schema.NullOr(Schema.Number),
    /** Number of times the discount has been redeemed. */
    redemptions_count: Schema.Number,
    /** The organization ID. */
    organization_id: Schema.String,
    products: Schema.Array(DiscountProduct),
  }),
) {}

/**
 * Schema for a fixed amount discount that is applied on every invoice
 * for a certain number of months.
 */
export class DiscountFixedRepeatDuration extends Schema.Opaque<DiscountFixedRepeatDuration>()(
  Schema.Struct({
    duration: openEnum(DiscountDuration),
    duration_in_months: Schema.Number,
    type: openEnum(DiscountType),
    amount: Schema.Number,
    currency: Schema.String,
    /** Map of currency to fixed amount to discount from the total. */
    amounts: Schema.Record(Schema.String, Schema.Number),
    /** Creation timestamp of the object. */
    created_at: Schema.DateTimeUtcFromString,
    /** Last modification timestamp of the object. */
    modified_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** The ID of the object. */
    id: Schema.String,
    metadata: MetadataOutputType,
    /** Name of the discount. Will be displayed to the customer when the discount is applied. */
    name: Schema.String,
    /** Code customers can use to apply the discount during checkout. */
    code: Schema.NullOr(Schema.String),
    /** Timestamp after which the discount is redeemable. */
    starts_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** Timestamp after which the discount is no longer redeemable. */
    ends_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** Maximum number of times the discount can be redeemed. */
    max_redemptions: Schema.NullOr(Schema.Number),
    /** Maximum number of times the discount can be redeemed by a single customer. */
    max_redemptions_per_customer: Schema.NullOr(Schema.Number),
    /** Number of times the discount has been redeemed. */
    redemptions_count: Schema.Number,
    /** The organization ID. */
    organization_id: Schema.String,
    products: Schema.Array(DiscountProduct),
  }),
) {}

/**
 * Schema for a percentage discount that is applied once or forever.
 */
export class DiscountPercentageOnceForeverDuration extends Schema.Opaque<DiscountPercentageOnceForeverDuration>()(
  Schema.Struct({
    duration: openEnum(DiscountDuration),
    type: openEnum(DiscountType),
    /** Discount percentage in basis points. A basis point is 1/100th of a percent. For example, 1000 basis points equals a 10% discount. */
    basis_points: Schema.Number,
    /** Creation timestamp of the object. */
    created_at: Schema.DateTimeUtcFromString,
    /** Last modification timestamp of the object. */
    modified_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** The ID of the object. */
    id: Schema.String,
    metadata: MetadataOutputType,
    /** Name of the discount. Will be displayed to the customer when the discount is applied. */
    name: Schema.String,
    /** Code customers can use to apply the discount during checkout. */
    code: Schema.NullOr(Schema.String),
    /** Timestamp after which the discount is redeemable. */
    starts_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** Timestamp after which the discount is no longer redeemable. */
    ends_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** Maximum number of times the discount can be redeemed. */
    max_redemptions: Schema.NullOr(Schema.Number),
    /** Maximum number of times the discount can be redeemed by a single customer. */
    max_redemptions_per_customer: Schema.NullOr(Schema.Number),
    /** Number of times the discount has been redeemed. */
    redemptions_count: Schema.Number,
    /** The organization ID. */
    organization_id: Schema.String,
    products: Schema.Array(DiscountProduct),
  }),
) {}

/**
 * Schema for a percentage discount that is applied on every invoice
 * for a certain number of months.
 */
export class DiscountPercentageRepeatDuration extends Schema.Opaque<DiscountPercentageRepeatDuration>()(
  Schema.Struct({
    duration: openEnum(DiscountDuration),
    duration_in_months: Schema.Number,
    type: openEnum(DiscountType),
    /** Discount percentage in basis points. A basis point is 1/100th of a percent. For example, 1000 basis points equals a 10% discount. */
    basis_points: Schema.Number,
    /** Creation timestamp of the object. */
    created_at: Schema.DateTimeUtcFromString,
    /** Last modification timestamp of the object. */
    modified_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** The ID of the object. */
    id: Schema.String,
    metadata: MetadataOutputType,
    /** Name of the discount. Will be displayed to the customer when the discount is applied. */
    name: Schema.String,
    /** Code customers can use to apply the discount during checkout. */
    code: Schema.NullOr(Schema.String),
    /** Timestamp after which the discount is redeemable. */
    starts_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** Timestamp after which the discount is no longer redeemable. */
    ends_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** Maximum number of times the discount can be redeemed. */
    max_redemptions: Schema.NullOr(Schema.Number),
    /** Maximum number of times the discount can be redeemed by a single customer. */
    max_redemptions_per_customer: Schema.NullOr(Schema.Number),
    /** Number of times the discount has been redeemed. */
    redemptions_count: Schema.Number,
    /** The organization ID. */
    organization_id: Schema.String,
    products: Schema.Array(DiscountProduct),
  }),
) {}

/**
 * Discount
 */
export const Discount = Schema.Union([
  DiscountFixedOnceForeverDuration,
  DiscountFixedRepeatDuration,
  DiscountPercentageOnceForeverDuration,
  DiscountPercentageRepeatDuration,
]);
export type Discount = typeof Discount.Type;

/**
 * Schema to create a fixed amount discount.
 */
export class DiscountFixedCreate extends Schema.Opaque<DiscountFixedCreate>()(
  Schema.Struct({
    /** Key-value object allowing you to store additional information. The key must be a string with a maximum length of **40 characters**. The value must be either: * A string with a maximum length of **500 characters** * An integer * A floating-point number * A boolean You can store up to **50 key-value pairs**. */
    metadata: Schema.optionalKey(
      Schema.Record(Schema.String, Schema.Union([Schema.String, Schema.Number, Schema.Boolean])),
    ),
    /** Name of the discount. Will be displayed to the customer when the discount is applied. */
    name: Schema.String,
    /** Code customers can use to apply the discount during checkout. Must be between 3 and 256 characters long and contain only alphanumeric characters.If not provided, the discount can only be applied via the API. */
    code: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** Optional timestamp after which the discount is redeemable. */
    starts_at: Schema.optionalKey(Schema.NullOr(DateTimeInput)),
    /** Optional timestamp after which the discount is no longer redeemable. */
    ends_at: Schema.optionalKey(Schema.NullOr(DateTimeInput)),
    /** Optional maximum number of times the discount can be redeemed. */
    max_redemptions: Schema.optionalKey(Schema.NullOr(Schema.Number)),
    /** Optional maximum number of times the discount can be redeemed by a single customer. */
    max_redemptions_per_customer: Schema.optionalKey(Schema.NullOr(Schema.Number)),
    products: Schema.optionalKey(Schema.NullOr(Schema.Array(Schema.String))),
    /** The ID of the organization owning the discount. **Required unless you use an organization token.** */
    organization_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    type: Schema.optionalKey(Schema.Literal("fixed")),
    duration: DiscountDuration,
    /** Number of months the discount should be applied. Required when `duration` is `repeating`. Must be omitted otherwise. For this to work on yearly pricing, you should multiply this by 12. For example, to apply the discount for 2 years, set this to 24. */
    duration_in_months: Schema.optionalKey(Schema.NullOr(Schema.Number)),
    amount: Schema.optionalKey(Schema.NullOr(Schema.Number)),
    currency: Schema.optionalKey(Schema.NullOr(PresentmentCurrency)),
    amounts: Schema.optionalKey(Schema.NullOr(Schema.Record(Schema.String, Schema.Number))),
  }),
) {}

/**
 * Schema to create a percentage discount.
 */
export class DiscountPercentageCreate extends Schema.Opaque<DiscountPercentageCreate>()(
  Schema.Struct({
    /** Key-value object allowing you to store additional information. The key must be a string with a maximum length of **40 characters**. The value must be either: * A string with a maximum length of **500 characters** * An integer * A floating-point number * A boolean You can store up to **50 key-value pairs**. */
    metadata: Schema.optionalKey(
      Schema.Record(Schema.String, Schema.Union([Schema.String, Schema.Number, Schema.Boolean])),
    ),
    /** Name of the discount. Will be displayed to the customer when the discount is applied. */
    name: Schema.String,
    /** Code customers can use to apply the discount during checkout. Must be between 3 and 256 characters long and contain only alphanumeric characters.If not provided, the discount can only be applied via the API. */
    code: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** Optional timestamp after which the discount is redeemable. */
    starts_at: Schema.optionalKey(Schema.NullOr(DateTimeInput)),
    /** Optional timestamp after which the discount is no longer redeemable. */
    ends_at: Schema.optionalKey(Schema.NullOr(DateTimeInput)),
    /** Optional maximum number of times the discount can be redeemed. */
    max_redemptions: Schema.optionalKey(Schema.NullOr(Schema.Number)),
    /** Optional maximum number of times the discount can be redeemed by a single customer. */
    max_redemptions_per_customer: Schema.optionalKey(Schema.NullOr(Schema.Number)),
    products: Schema.optionalKey(Schema.NullOr(Schema.Array(Schema.String))),
    /** The ID of the organization owning the discount. **Required unless you use an organization token.** */
    organization_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    type: Schema.optionalKey(Schema.Literal("percentage")),
    duration: DiscountDuration,
    /** Number of months the discount should be applied. Required when `duration` is `repeating`. Must be omitted otherwise. For this to work on yearly pricing, you should multiply this by 12. For example, to apply the discount for 2 years, set this to 24. */
    duration_in_months: Schema.optionalKey(Schema.NullOr(Schema.Number)),
    /** Discount percentage in basis points. A basis point is 1/100th of a percent. For example, to create a 25.5% discount, set this to 2550. */
    basis_points: Schema.Number,
  }),
) {}

/**
 * DiscountCreate
 */
export const DiscountCreate = Schema.Union([DiscountFixedCreate, DiscountPercentageCreate]);
export type DiscountCreate = typeof DiscountCreate.Type;

/**
 * Schema to update a discount.
 */
export class DiscountUpdate extends Schema.Opaque<DiscountUpdate>()(
  Schema.Struct({
    /** Key-value object allowing you to store additional information. The key must be a string with a maximum length of **40 characters**. The value must be either: * A string with a maximum length of **500 characters** * An integer * A floating-point number * A boolean You can store up to **50 key-value pairs**. */
    metadata: Schema.optionalKey(
      Schema.Record(Schema.String, Schema.Union([Schema.String, Schema.Number, Schema.Boolean])),
    ),
    name: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** Code customers can use to apply the discount during checkout. Must be between 3 and 256 characters long and contain only alphanumeric characters.If not provided, the discount can only be applied via the API. */
    code: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** Optional timestamp after which the discount is redeemable. */
    starts_at: Schema.optionalKey(Schema.NullOr(DateTimeInput)),
    /** Optional timestamp after which the discount is no longer redeemable. */
    ends_at: Schema.optionalKey(Schema.NullOr(DateTimeInput)),
    /** Optional maximum number of times the discount can be redeemed. */
    max_redemptions: Schema.optionalKey(Schema.NullOr(Schema.Number)),
    /** Optional maximum number of times the discount can be redeemed by a single customer. */
    max_redemptions_per_customer: Schema.optionalKey(Schema.NullOr(Schema.Number)),
    duration: Schema.optionalKey(Schema.NullOr(DiscountDuration)),
    duration_in_months: Schema.optionalKey(Schema.NullOr(Schema.Number)),
    type: Schema.optionalKey(Schema.NullOr(DiscountType)),
    amount: Schema.optionalKey(Schema.NullOr(Schema.Number)),
    currency: Schema.optionalKey(Schema.NullOr(PresentmentCurrency)),
    amounts: Schema.optionalKey(Schema.NullOr(Schema.Record(Schema.String, Schema.Number))),
    basis_points: Schema.optionalKey(Schema.NullOr(Schema.Number)),
    products: Schema.optionalKey(Schema.NullOr(Schema.Array(Schema.String))),
  }),
) {}

/**
 * DisputeCustomer
 */
export class DisputeCustomer extends Schema.Opaque<DisputeCustomer>()(
  Schema.Struct({
    /** The ID of the customer. */
    id: Schema.String,
    /** Creation timestamp of the object. */
    created_at: Schema.DateTimeUtcFromString,
    /** Last modification timestamp of the object. */
    modified_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    metadata: MetadataOutputType,
    /** The ID of the customer in your system. This must be unique within the organization. Once set, it can't be updated. */
    external_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** The email address of the customer. This must be unique within the organization. */
    email: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** Whether the customer email address is verified. The address is automatically verified when the customer accesses the customer portal using their email address. */
    email_verified: Schema.Boolean,
    type: openEnum(CustomerType),
    /** The name of the customer. */
    name: Schema.NullOr(Schema.String),
    /** The name that should appear on the customer's invoices. Falls back to the customer name when not explicitly set. */
    billing_name: Schema.NullOr(Schema.String),
    billing_address: Schema.NullOr(Address),
    tax_id: Schema.NullOr(Schema.Array(Schema.Unknown)),
    locale: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** The ID of the organization owning the customer. */
    organization_id: Schema.String,
    /** The ID of the customer's default payment method, if any. Use the payment methods endpoint to retrieve its details. */
    default_payment_method_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** Timestamp for when the customer was soft deleted. */
    deleted_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** Timestamp of the first event ingested for this customer. Can predate `created_at`, and is null if no event was ever ingested. */
    first_user_event_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    avatar_url: Schema.NullOr(Schema.String),
  }),
) {}

/**
 * Schema representing a dispute.
 *
 * A dispute is a challenge raised by a customer or their bank regarding a payment.
 */
export class Dispute extends Schema.Opaque<Dispute>()(
  Schema.Struct({
    /** Creation timestamp of the object. */
    created_at: Schema.DateTimeUtcFromString,
    /** Last modification timestamp of the object. */
    modified_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** The ID of the object. */
    id: Schema.String,
    status: openEnum(DisputeStatus),
    /** Whether the dispute has been resolved (won or lost). */
    resolved: Schema.Boolean,
    /** Whether the dispute is closed (prevented, won, or lost). */
    closed: Schema.Boolean,
    /** Amount in cents disputed. */
    amount: Schema.Number,
    /** Tax amount in cents disputed. */
    tax_amount: Schema.Number,
    /** Currency code of the dispute. */
    currency: Schema.String,
    /** The reason for the dispute as reported by the card network (e.g. `fraudulent`, `product_not_received`). `None` until the processor reports it. */
    reason: Schema.NullOr(Schema.String),
    /** Deadline to submit evidence in response to the dispute. `None` when no response is required. */
    evidence_due_by: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** Whether the evidence submission deadline has passed. */
    past_due: Schema.Boolean,
    /** The ID of the order associated with the dispute. */
    order_id: Schema.String,
    /** The ID of the payment associated with the dispute. */
    payment_id: Schema.String,
    customer: DisputeCustomer,
    /** The ID of the support case for this dispute, if one was opened. */
    case_id: Schema.NullOr(Schema.String),
  }),
) {}

/**
 * DisputeAutoAcceptNotEnabled
 */
export class DisputeAutoAcceptNotEnabled extends Schema.Opaque<DisputeAutoAcceptNotEnabled>()(
  Schema.Struct({
    error: Schema.Literal("DisputeAutoAcceptNotEnabled"),
    detail: Schema.String,
  }),
) {}

/**
 * DisputeNotOpenError
 */
export class DisputeNotOpenError extends Schema.Opaque<DisputeNotOpenError>()(
  Schema.Struct({
    error: Schema.Literal("DisputeNotOpenError"),
    detail: Schema.String,
  }),
) {}

/**
 * S3FileCreatePart
 */
export class S3FileCreatePart extends Schema.Opaque<S3FileCreatePart>()(
  Schema.Struct({
    number: Schema.Number,
    chunk_start: Schema.Number,
    chunk_end: Schema.Number,
    checksum_sha256_base64: Schema.optionalKey(Schema.NullOr(Schema.String)),
  }),
) {}

/**
 * S3FileCreateMultipart
 */
export class S3FileCreateMultipart extends Schema.Opaque<S3FileCreateMultipart>()(
  Schema.Struct({
    parts: Schema.Array(S3FileCreatePart),
  }),
) {}

/**
 * Schema to create a file to be associated with the downloadables benefit.
 */
export class DownloadableFileCreate extends Schema.Opaque<DownloadableFileCreate>()(
  Schema.Struct({
    organization_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    name: Schema.String,
    mime_type: Schema.String,
    size: Schema.Number,
    checksum_sha256_base64: Schema.optionalKey(Schema.NullOr(Schema.String)),
    upload: S3FileCreateMultipart,
    service: Schema.Literal("downloadable"),
    version: Schema.optionalKey(Schema.NullOr(Schema.String)),
  }),
) {}

/**
 * File to be associated with the downloadables benefit.
 */
export class DownloadableFileRead extends Schema.Opaque<DownloadableFileRead>()(
  Schema.Struct({
    /** The ID of the object. */
    id: Schema.String,
    organization_id: Schema.String,
    name: Schema.String,
    path: Schema.String,
    mime_type: Schema.String,
    size: Schema.Number,
    storage_version: Schema.NullOr(Schema.String),
    checksum_etag: Schema.NullOr(Schema.String),
    checksum_sha256_base64: Schema.NullOr(Schema.String),
    checksum_sha256_hex: Schema.NullOr(Schema.String),
    last_modified_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    version: Schema.NullOr(Schema.String),
    service: Schema.Literal("downloadable"),
    is_uploaded: Schema.Boolean,
    created_at: Schema.DateTimeUtcFromString,
    flagged_malicious_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    size_readable: Schema.String,
  }),
) {}

/**
 * S3DownloadURL
 */
export class S3DownloadURL extends Schema.Opaque<S3DownloadURL>()(
  Schema.Struct({
    url: Schema.String,
    headers: Schema.optionalKey(Schema.Record(Schema.String, Schema.String)),
    expires_at: Schema.DateTimeUtcFromString,
  }),
) {}

/**
 * FileDownload
 */
export class FileDownload extends Schema.Opaque<FileDownload>()(
  Schema.Struct({
    /** The ID of the object. */
    id: Schema.String,
    organization_id: Schema.String,
    name: Schema.String,
    path: Schema.String,
    mime_type: Schema.String,
    size: Schema.Number,
    storage_version: Schema.NullOr(Schema.String),
    checksum_etag: Schema.NullOr(Schema.String),
    checksum_sha256_base64: Schema.NullOr(Schema.String),
    checksum_sha256_hex: Schema.NullOr(Schema.String),
    last_modified_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    download: S3DownloadURL,
    version: Schema.NullOr(Schema.String),
    is_uploaded: Schema.Boolean,
    service: openEnum(FileServiceTypes),
    size_readable: Schema.String,
  }),
) {}

/**
 * DownloadableRead
 */
export class DownloadableRead extends Schema.Opaque<DownloadableRead>()(
  Schema.Struct({
    id: Schema.String,
    benefit_id: Schema.String,
    file: FileDownload,
  }),
) {}

/**
 * MeterCreditedMetadata
 */
export class MeterCreditedMetadata extends Schema.Opaque<MeterCreditedMetadata>()(
  Schema.Struct({
    meter_id: Schema.String,
    units: Schema.Number,
    rollover: Schema.Boolean,
  }),
) {}

/**
 * An event created by Polar when credits are added to a customer meter.
 */
export class MeterCreditEvent extends Schema.Opaque<MeterCreditEvent>()(
  Schema.Struct({
    /** The ID of the object. */
    id: Schema.String,
    /** The timestamp of the event. */
    timestamp: Schema.DateTimeUtcFromString,
    /** The ID of the organization owning the event. */
    organization_id: Schema.String,
    /** ID of the customer in your Polar organization associated with the event. */
    customer_id: Schema.NullOr(Schema.String),
    /** The customer associated with the event. */
    customer: Schema.NullOr(Customer),
    /** ID of the customer in your system associated with the event. */
    external_customer_id: Schema.NullOr(Schema.String),
    /** ID of the member within the customer's organization who performed the action inside B2B. */
    member_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** ID of the member in your system within the customer's organization who performed the action inside B2B. */
    external_member_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** Number of direct child events linked to this event. */
    child_count: Schema.optionalKey(Schema.Number),
    /** The ID of the parent event. */
    parent_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** Human readable label of the event type. */
    label: Schema.String,
    /** The source of the event. `system` events are created by Polar. `user` events are the one you create through our ingestion API. */
    source: Schema.Literal("system"),
    /** The name of the event. */
    name: Schema.Literal("meter.credited"),
    metadata: MeterCreditedMetadata,
  }),
) {}

/**
 * MeterResetMetadata
 */
export class MeterResetMetadata extends Schema.Opaque<MeterResetMetadata>()(
  Schema.Struct({
    meter_id: Schema.String,
  }),
) {}

/**
 * An event created by Polar when a customer meter is reset.
 */
export class MeterResetEvent extends Schema.Opaque<MeterResetEvent>()(
  Schema.Struct({
    /** The ID of the object. */
    id: Schema.String,
    /** The timestamp of the event. */
    timestamp: Schema.DateTimeUtcFromString,
    /** The ID of the organization owning the event. */
    organization_id: Schema.String,
    /** ID of the customer in your Polar organization associated with the event. */
    customer_id: Schema.NullOr(Schema.String),
    /** The customer associated with the event. */
    customer: Schema.NullOr(Customer),
    /** ID of the customer in your system associated with the event. */
    external_customer_id: Schema.NullOr(Schema.String),
    /** ID of the member within the customer's organization who performed the action inside B2B. */
    member_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** ID of the member in your system within the customer's organization who performed the action inside B2B. */
    external_member_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** Number of direct child events linked to this event. */
    child_count: Schema.optionalKey(Schema.Number),
    /** The ID of the parent event. */
    parent_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** Human readable label of the event type. */
    label: Schema.String,
    /** The source of the event. `system` events are created by Polar. `user` events are the one you create through our ingestion API. */
    source: Schema.Literal("system"),
    /** The name of the event. */
    name: Schema.Literal("meter.reset"),
    metadata: MeterResetMetadata,
  }),
) {}

/**
 * OrderPaidMetadata
 */
export class OrderPaidMetadata extends Schema.Opaque<OrderPaidMetadata>()(
  Schema.Struct({
    order_id: Schema.String,
    product_id: Schema.optionalKey(Schema.String),
    billing_type: Schema.optionalKey(Schema.String),
    amount: Schema.Number,
    currency: Schema.optionalKey(Schema.String),
    net_amount: Schema.optionalKey(Schema.Number),
    tax_amount: Schema.optionalKey(Schema.Number),
    applied_balance_amount: Schema.optionalKey(Schema.Number),
    discount_amount: Schema.optionalKey(Schema.Number),
    discount_id: Schema.optionalKey(Schema.String),
    platform_fee: Schema.optionalKey(Schema.Number),
    subscription_id: Schema.optionalKey(Schema.String),
    recurring_interval: Schema.optionalKey(Schema.String),
    recurring_interval_count: Schema.optionalKey(Schema.Number),
  }),
) {}

/**
 * An event created by Polar when an order is paid.
 */
export class OrderPaidEvent extends Schema.Opaque<OrderPaidEvent>()(
  Schema.Struct({
    /** The ID of the object. */
    id: Schema.String,
    /** The timestamp of the event. */
    timestamp: Schema.DateTimeUtcFromString,
    /** The ID of the organization owning the event. */
    organization_id: Schema.String,
    /** ID of the customer in your Polar organization associated with the event. */
    customer_id: Schema.NullOr(Schema.String),
    /** The customer associated with the event. */
    customer: Schema.NullOr(Customer),
    /** ID of the customer in your system associated with the event. */
    external_customer_id: Schema.NullOr(Schema.String),
    /** ID of the member within the customer's organization who performed the action inside B2B. */
    member_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** ID of the member in your system within the customer's organization who performed the action inside B2B. */
    external_member_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** Number of direct child events linked to this event. */
    child_count: Schema.optionalKey(Schema.Number),
    /** The ID of the parent event. */
    parent_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** Human readable label of the event type. */
    label: Schema.String,
    /** The source of the event. `system` events are created by Polar. `user` events are the one you create through our ingestion API. */
    source: Schema.Literal("system"),
    /** The name of the event. */
    name: Schema.Literal("order.paid"),
    metadata: OrderPaidMetadata,
  }),
) {}

/**
 * OrderRefundedMetadata
 */
export class OrderRefundedMetadata extends Schema.Opaque<OrderRefundedMetadata>()(
  Schema.Struct({
    order_id: Schema.String,
    refunded_amount: Schema.Number,
    currency: Schema.String,
  }),
) {}

/**
 * An event created by Polar when an order is refunded.
 */
export class OrderRefundedEvent extends Schema.Opaque<OrderRefundedEvent>()(
  Schema.Struct({
    /** The ID of the object. */
    id: Schema.String,
    /** The timestamp of the event. */
    timestamp: Schema.DateTimeUtcFromString,
    /** The ID of the organization owning the event. */
    organization_id: Schema.String,
    /** ID of the customer in your Polar organization associated with the event. */
    customer_id: Schema.NullOr(Schema.String),
    /** The customer associated with the event. */
    customer: Schema.NullOr(Customer),
    /** ID of the customer in your system associated with the event. */
    external_customer_id: Schema.NullOr(Schema.String),
    /** ID of the member within the customer's organization who performed the action inside B2B. */
    member_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** ID of the member in your system within the customer's organization who performed the action inside B2B. */
    external_member_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** Number of direct child events linked to this event. */
    child_count: Schema.optionalKey(Schema.Number),
    /** The ID of the parent event. */
    parent_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** Human readable label of the event type. */
    label: Schema.String,
    /** The source of the event. `system` events are created by Polar. `user` events are the one you create through our ingestion API. */
    source: Schema.Literal("system"),
    /** The name of the event. */
    name: Schema.Literal("order.refunded"),
    metadata: OrderRefundedMetadata,
  }),
) {}

/**
 * OrderUnvoidedMetadata
 */
export class OrderUnvoidedMetadata extends Schema.Opaque<OrderUnvoidedMetadata>()(
  Schema.Struct({
    order_id: Schema.String,
    amount: Schema.Number,
    currency: Schema.String,
  }),
) {}

/**
 * An event created by Polar when an order is unvoided.
 */
export class OrderUnvoidedEvent extends Schema.Opaque<OrderUnvoidedEvent>()(
  Schema.Struct({
    /** The ID of the object. */
    id: Schema.String,
    /** The timestamp of the event. */
    timestamp: Schema.DateTimeUtcFromString,
    /** The ID of the organization owning the event. */
    organization_id: Schema.String,
    /** ID of the customer in your Polar organization associated with the event. */
    customer_id: Schema.NullOr(Schema.String),
    /** The customer associated with the event. */
    customer: Schema.NullOr(Customer),
    /** ID of the customer in your system associated with the event. */
    external_customer_id: Schema.NullOr(Schema.String),
    /** ID of the member within the customer's organization who performed the action inside B2B. */
    member_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** ID of the member in your system within the customer's organization who performed the action inside B2B. */
    external_member_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** Number of direct child events linked to this event. */
    child_count: Schema.optionalKey(Schema.Number),
    /** The ID of the parent event. */
    parent_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** Human readable label of the event type. */
    label: Schema.String,
    /** The source of the event. `system` events are created by Polar. `user` events are the one you create through our ingestion API. */
    source: Schema.Literal("system"),
    /** The name of the event. */
    name: Schema.Literal("order.unvoided"),
    metadata: OrderUnvoidedMetadata,
  }),
) {}

/**
 * OrderVoidedMetadata
 */
export class OrderVoidedMetadata extends Schema.Opaque<OrderVoidedMetadata>()(
  Schema.Struct({
    order_id: Schema.String,
    amount: Schema.Number,
    currency: Schema.String,
  }),
) {}

/**
 * An event created by Polar when an order is voided.
 */
export class OrderVoidedEvent extends Schema.Opaque<OrderVoidedEvent>()(
  Schema.Struct({
    /** The ID of the object. */
    id: Schema.String,
    /** The timestamp of the event. */
    timestamp: Schema.DateTimeUtcFromString,
    /** The ID of the organization owning the event. */
    organization_id: Schema.String,
    /** ID of the customer in your Polar organization associated with the event. */
    customer_id: Schema.NullOr(Schema.String),
    /** The customer associated with the event. */
    customer: Schema.NullOr(Customer),
    /** ID of the customer in your system associated with the event. */
    external_customer_id: Schema.NullOr(Schema.String),
    /** ID of the member within the customer's organization who performed the action inside B2B. */
    member_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** ID of the member in your system within the customer's organization who performed the action inside B2B. */
    external_member_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** Number of direct child events linked to this event. */
    child_count: Schema.optionalKey(Schema.Number),
    /** The ID of the parent event. */
    parent_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** Human readable label of the event type. */
    label: Schema.String,
    /** The source of the event. `system` events are created by Polar. `user` events are the one you create through our ingestion API. */
    source: Schema.Literal("system"),
    /** The name of the event. */
    name: Schema.Literal("order.voided"),
    metadata: OrderVoidedMetadata,
  }),
) {}

/**
 * SubscriptionBillingPeriodUpdatedMetadata
 */
export class SubscriptionBillingPeriodUpdatedMetadata extends Schema.Opaque<SubscriptionBillingPeriodUpdatedMetadata>()(
  Schema.Struct({
    subscription_id: Schema.String,
    old_period_end: Schema.String,
    new_period_end: Schema.String,
  }),
) {}

/**
 * An event created by Polar when a subscription billing period is updated.
 */
export class SubscriptionBillingPeriodUpdatedEvent extends Schema.Opaque<SubscriptionBillingPeriodUpdatedEvent>()(
  Schema.Struct({
    /** The ID of the object. */
    id: Schema.String,
    /** The timestamp of the event. */
    timestamp: Schema.DateTimeUtcFromString,
    /** The ID of the organization owning the event. */
    organization_id: Schema.String,
    /** ID of the customer in your Polar organization associated with the event. */
    customer_id: Schema.NullOr(Schema.String),
    /** The customer associated with the event. */
    customer: Schema.NullOr(Customer),
    /** ID of the customer in your system associated with the event. */
    external_customer_id: Schema.NullOr(Schema.String),
    /** ID of the member within the customer's organization who performed the action inside B2B. */
    member_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** ID of the member in your system within the customer's organization who performed the action inside B2B. */
    external_member_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** Number of direct child events linked to this event. */
    child_count: Schema.optionalKey(Schema.Number),
    /** The ID of the parent event. */
    parent_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** Human readable label of the event type. */
    label: Schema.String,
    /** The source of the event. `system` events are created by Polar. `user` events are the one you create through our ingestion API. */
    source: Schema.Literal("system"),
    /** The name of the event. */
    name: Schema.Literal("subscription.billing_period_updated"),
    metadata: SubscriptionBillingPeriodUpdatedMetadata,
  }),
) {}

/**
 * SubscriptionCanceledMetadata
 */
export class SubscriptionCanceledMetadata extends Schema.Opaque<SubscriptionCanceledMetadata>()(
  Schema.Struct({
    subscription_id: Schema.String,
    product_id: Schema.optionalKey(Schema.String),
    amount: Schema.Number,
    currency: Schema.String,
    recurring_interval: Schema.String,
    recurring_interval_count: Schema.Number,
    customer_cancellation_reason: Schema.optionalKey(Schema.String),
    customer_cancellation_comment: Schema.optionalKey(Schema.String),
    canceled_at: Schema.String,
    ends_at: Schema.optionalKey(Schema.String),
    cancel_at_period_end: Schema.optionalKey(Schema.Boolean),
  }),
) {}

/**
 * An event created by Polar when a subscription is canceled.
 */
export class SubscriptionCanceledEvent extends Schema.Opaque<SubscriptionCanceledEvent>()(
  Schema.Struct({
    /** The ID of the object. */
    id: Schema.String,
    /** The timestamp of the event. */
    timestamp: Schema.DateTimeUtcFromString,
    /** The ID of the organization owning the event. */
    organization_id: Schema.String,
    /** ID of the customer in your Polar organization associated with the event. */
    customer_id: Schema.NullOr(Schema.String),
    /** The customer associated with the event. */
    customer: Schema.NullOr(Customer),
    /** ID of the customer in your system associated with the event. */
    external_customer_id: Schema.NullOr(Schema.String),
    /** ID of the member within the customer's organization who performed the action inside B2B. */
    member_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** ID of the member in your system within the customer's organization who performed the action inside B2B. */
    external_member_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** Number of direct child events linked to this event. */
    child_count: Schema.optionalKey(Schema.Number),
    /** The ID of the parent event. */
    parent_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** Human readable label of the event type. */
    label: Schema.String,
    /** The source of the event. `system` events are created by Polar. `user` events are the one you create through our ingestion API. */
    source: Schema.Literal("system"),
    /** The name of the event. */
    name: Schema.Literal("subscription.canceled"),
    metadata: SubscriptionCanceledMetadata,
  }),
) {}

/**
 * SubscriptionCreatedMetadata
 */
export class SubscriptionCreatedMetadata extends Schema.Opaque<SubscriptionCreatedMetadata>()(
  Schema.Struct({
    subscription_id: Schema.String,
    product_id: Schema.String,
    amount: Schema.Number,
    currency: Schema.String,
    recurring_interval: Schema.String,
    recurring_interval_count: Schema.Number,
    started_at: Schema.String,
  }),
) {}

/**
 * An event created by Polar when a subscription is created.
 */
export class SubscriptionCreatedEvent extends Schema.Opaque<SubscriptionCreatedEvent>()(
  Schema.Struct({
    /** The ID of the object. */
    id: Schema.String,
    /** The timestamp of the event. */
    timestamp: Schema.DateTimeUtcFromString,
    /** The ID of the organization owning the event. */
    organization_id: Schema.String,
    /** ID of the customer in your Polar organization associated with the event. */
    customer_id: Schema.NullOr(Schema.String),
    /** The customer associated with the event. */
    customer: Schema.NullOr(Customer),
    /** ID of the customer in your system associated with the event. */
    external_customer_id: Schema.NullOr(Schema.String),
    /** ID of the member within the customer's organization who performed the action inside B2B. */
    member_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** ID of the member in your system within the customer's organization who performed the action inside B2B. */
    external_member_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** Number of direct child events linked to this event. */
    child_count: Schema.optionalKey(Schema.Number),
    /** The ID of the parent event. */
    parent_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** Human readable label of the event type. */
    label: Schema.String,
    /** The source of the event. `system` events are created by Polar. `user` events are the one you create through our ingestion API. */
    source: Schema.Literal("system"),
    /** The name of the event. */
    name: Schema.Literal("subscription.created"),
    metadata: SubscriptionCreatedMetadata,
  }),
) {}

/**
 * SubscriptionCycledMetadata
 */
export class SubscriptionCycledMetadata extends Schema.Opaque<SubscriptionCycledMetadata>()(
  Schema.Struct({
    subscription_id: Schema.String,
    product_id: Schema.optionalKey(Schema.String),
    amount: Schema.optionalKey(Schema.Number),
    currency: Schema.optionalKey(Schema.String),
    recurring_interval: Schema.optionalKey(Schema.String),
    recurring_interval_count: Schema.optionalKey(Schema.Number),
  }),
) {}

/**
 * An event created by Polar when a subscription is cycled.
 */
export class SubscriptionCycledEvent extends Schema.Opaque<SubscriptionCycledEvent>()(
  Schema.Struct({
    /** The ID of the object. */
    id: Schema.String,
    /** The timestamp of the event. */
    timestamp: Schema.DateTimeUtcFromString,
    /** The ID of the organization owning the event. */
    organization_id: Schema.String,
    /** ID of the customer in your Polar organization associated with the event. */
    customer_id: Schema.NullOr(Schema.String),
    /** The customer associated with the event. */
    customer: Schema.NullOr(Customer),
    /** ID of the customer in your system associated with the event. */
    external_customer_id: Schema.NullOr(Schema.String),
    /** ID of the member within the customer's organization who performed the action inside B2B. */
    member_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** ID of the member in your system within the customer's organization who performed the action inside B2B. */
    external_member_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** Number of direct child events linked to this event. */
    child_count: Schema.optionalKey(Schema.Number),
    /** The ID of the parent event. */
    parent_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** Human readable label of the event type. */
    label: Schema.String,
    /** The source of the event. `system` events are created by Polar. `user` events are the one you create through our ingestion API. */
    source: Schema.Literal("system"),
    /** The name of the event. */
    name: Schema.Literal("subscription.cycled"),
    metadata: SubscriptionCycledMetadata,
  }),
) {}

/**
 * SubscriptionMigratedMetadata
 */
export class SubscriptionMigratedMetadata extends Schema.Opaque<SubscriptionMigratedMetadata>()(
  Schema.Struct({
    subscription_id: Schema.String,
    provider: Schema.String,
    provider_subscription_id: Schema.String,
    product_id: Schema.String,
  }),
) {}

/**
 * An event created by Polar when a subscription is migrated to Polar.
 */
export class SubscriptionMigratedEvent extends Schema.Opaque<SubscriptionMigratedEvent>()(
  Schema.Struct({
    /** The ID of the object. */
    id: Schema.String,
    /** The timestamp of the event. */
    timestamp: Schema.DateTimeUtcFromString,
    /** The ID of the organization owning the event. */
    organization_id: Schema.String,
    /** ID of the customer in your Polar organization associated with the event. */
    customer_id: Schema.NullOr(Schema.String),
    /** The customer associated with the event. */
    customer: Schema.NullOr(Customer),
    /** ID of the customer in your system associated with the event. */
    external_customer_id: Schema.NullOr(Schema.String),
    /** ID of the member within the customer's organization who performed the action inside B2B. */
    member_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** ID of the member in your system within the customer's organization who performed the action inside B2B. */
    external_member_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** Number of direct child events linked to this event. */
    child_count: Schema.optionalKey(Schema.Number),
    /** The ID of the parent event. */
    parent_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** Human readable label of the event type. */
    label: Schema.String,
    /** The source of the event. `system` events are created by Polar. `user` events are the one you create through our ingestion API. */
    source: Schema.Literal("system"),
    /** The name of the event. */
    name: Schema.Literal("subscription.migrated"),
    metadata: SubscriptionMigratedMetadata,
  }),
) {}

/**
 * SubscriptionPastDueMetadata
 */
export class SubscriptionPastDueMetadata extends Schema.Opaque<SubscriptionPastDueMetadata>()(
  Schema.Struct({
    subscription_id: Schema.String,
    product_id: Schema.optionalKey(Schema.String),
    past_due_at: Schema.String,
    amount: Schema.optionalKey(Schema.Number),
    currency: Schema.optionalKey(Schema.String),
    recurring_interval: Schema.optionalKey(Schema.String),
    recurring_interval_count: Schema.optionalKey(Schema.Number),
  }),
) {}

/**
 * An event created by Polar when a subscription becomes past due.
 */
export class SubscriptionPastDueEvent extends Schema.Opaque<SubscriptionPastDueEvent>()(
  Schema.Struct({
    /** The ID of the object. */
    id: Schema.String,
    /** The timestamp of the event. */
    timestamp: Schema.DateTimeUtcFromString,
    /** The ID of the organization owning the event. */
    organization_id: Schema.String,
    /** ID of the customer in your Polar organization associated with the event. */
    customer_id: Schema.NullOr(Schema.String),
    /** The customer associated with the event. */
    customer: Schema.NullOr(Customer),
    /** ID of the customer in your system associated with the event. */
    external_customer_id: Schema.NullOr(Schema.String),
    /** ID of the member within the customer's organization who performed the action inside B2B. */
    member_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** ID of the member in your system within the customer's organization who performed the action inside B2B. */
    external_member_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** Number of direct child events linked to this event. */
    child_count: Schema.optionalKey(Schema.Number),
    /** The ID of the parent event. */
    parent_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** Human readable label of the event type. */
    label: Schema.String,
    /** The source of the event. `system` events are created by Polar. `user` events are the one you create through our ingestion API. */
    source: Schema.Literal("system"),
    /** The name of the event. */
    name: Schema.Literal("subscription.past_due"),
    metadata: SubscriptionPastDueMetadata,
  }),
) {}

/**
 * SubscriptionPausedMetadata
 */
export class SubscriptionPausedMetadata extends Schema.Opaque<SubscriptionPausedMetadata>()(
  Schema.Struct({
    subscription_id: Schema.String,
    product_id: Schema.optionalKey(Schema.String),
    amount: Schema.optionalKey(Schema.Number),
    currency: Schema.optionalKey(Schema.String),
    recurring_interval: Schema.optionalKey(Schema.String),
    recurring_interval_count: Schema.optionalKey(Schema.Number),
    paused_at: Schema.String,
    resumes_at: Schema.optionalKey(Schema.String),
  }),
) {}

/**
 * An event created by Polar when a subscription is paused.
 */
export class SubscriptionPausedEvent extends Schema.Opaque<SubscriptionPausedEvent>()(
  Schema.Struct({
    /** The ID of the object. */
    id: Schema.String,
    /** The timestamp of the event. */
    timestamp: Schema.DateTimeUtcFromString,
    /** The ID of the organization owning the event. */
    organization_id: Schema.String,
    /** ID of the customer in your Polar organization associated with the event. */
    customer_id: Schema.NullOr(Schema.String),
    /** The customer associated with the event. */
    customer: Schema.NullOr(Customer),
    /** ID of the customer in your system associated with the event. */
    external_customer_id: Schema.NullOr(Schema.String),
    /** ID of the member within the customer's organization who performed the action inside B2B. */
    member_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** ID of the member in your system within the customer's organization who performed the action inside B2B. */
    external_member_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** Number of direct child events linked to this event. */
    child_count: Schema.optionalKey(Schema.Number),
    /** The ID of the parent event. */
    parent_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** Human readable label of the event type. */
    label: Schema.String,
    /** The source of the event. `system` events are created by Polar. `user` events are the one you create through our ingestion API. */
    source: Schema.Literal("system"),
    /** The name of the event. */
    name: Schema.Literal("subscription.paused"),
    metadata: SubscriptionPausedMetadata,
  }),
) {}

/**
 * SubscriptionProductUpdatedMetadata
 */
export class SubscriptionProductUpdatedMetadata extends Schema.Opaque<SubscriptionProductUpdatedMetadata>()(
  Schema.Struct({
    subscription_id: Schema.String,
    old_product_id: Schema.String,
    new_product_id: Schema.String,
  }),
) {}

/**
 * An event created by Polar when a subscription changes the product.
 */
export class SubscriptionProductUpdatedEvent extends Schema.Opaque<SubscriptionProductUpdatedEvent>()(
  Schema.Struct({
    /** The ID of the object. */
    id: Schema.String,
    /** The timestamp of the event. */
    timestamp: Schema.DateTimeUtcFromString,
    /** The ID of the organization owning the event. */
    organization_id: Schema.String,
    /** ID of the customer in your Polar organization associated with the event. */
    customer_id: Schema.NullOr(Schema.String),
    /** The customer associated with the event. */
    customer: Schema.NullOr(Customer),
    /** ID of the customer in your system associated with the event. */
    external_customer_id: Schema.NullOr(Schema.String),
    /** ID of the member within the customer's organization who performed the action inside B2B. */
    member_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** ID of the member in your system within the customer's organization who performed the action inside B2B. */
    external_member_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** Number of direct child events linked to this event. */
    child_count: Schema.optionalKey(Schema.Number),
    /** The ID of the parent event. */
    parent_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** Human readable label of the event type. */
    label: Schema.String,
    /** The source of the event. `system` events are created by Polar. `user` events are the one you create through our ingestion API. */
    source: Schema.Literal("system"),
    /** The name of the event. */
    name: Schema.Literal("subscription.product_updated"),
    metadata: SubscriptionProductUpdatedMetadata,
  }),
) {}

/**
 * SubscriptionReactivatedMetadata
 */
export class SubscriptionReactivatedMetadata extends Schema.Opaque<SubscriptionReactivatedMetadata>()(
  Schema.Struct({
    subscription_id: Schema.String,
    product_id: Schema.optionalKey(Schema.String),
    amount: Schema.optionalKey(Schema.Number),
    currency: Schema.optionalKey(Schema.String),
    recurring_interval: Schema.optionalKey(Schema.String),
    recurring_interval_count: Schema.optionalKey(Schema.Number),
  }),
) {}

/**
 * An event created by Polar when a past due subscription is recovered.
 */
export class SubscriptionReactivatedEvent extends Schema.Opaque<SubscriptionReactivatedEvent>()(
  Schema.Struct({
    /** The ID of the object. */
    id: Schema.String,
    /** The timestamp of the event. */
    timestamp: Schema.DateTimeUtcFromString,
    /** The ID of the organization owning the event. */
    organization_id: Schema.String,
    /** ID of the customer in your Polar organization associated with the event. */
    customer_id: Schema.NullOr(Schema.String),
    /** The customer associated with the event. */
    customer: Schema.NullOr(Customer),
    /** ID of the customer in your system associated with the event. */
    external_customer_id: Schema.NullOr(Schema.String),
    /** ID of the member within the customer's organization who performed the action inside B2B. */
    member_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** ID of the member in your system within the customer's organization who performed the action inside B2B. */
    external_member_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** Number of direct child events linked to this event. */
    child_count: Schema.optionalKey(Schema.Number),
    /** The ID of the parent event. */
    parent_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** Human readable label of the event type. */
    label: Schema.String,
    /** The source of the event. `system` events are created by Polar. `user` events are the one you create through our ingestion API. */
    source: Schema.Literal("system"),
    /** The name of the event. */
    name: Schema.Literal("subscription.reactivated"),
    metadata: SubscriptionReactivatedMetadata,
  }),
) {}

/**
 * SubscriptionReinstatedMetadata
 */
export class SubscriptionReinstatedMetadata extends Schema.Opaque<SubscriptionReinstatedMetadata>()(
  Schema.Struct({
    subscription_id: Schema.String,
    product_id: Schema.optionalKey(Schema.String),
    amount: Schema.optionalKey(Schema.Number),
    currency: Schema.optionalKey(Schema.String),
    recurring_interval: Schema.optionalKey(Schema.String),
    recurring_interval_count: Schema.optionalKey(Schema.Number),
  }),
) {}

/**
 * An event created by Polar when a canceled subscription is reinstated.
 */
export class SubscriptionReinstatedEvent extends Schema.Opaque<SubscriptionReinstatedEvent>()(
  Schema.Struct({
    /** The ID of the object. */
    id: Schema.String,
    /** The timestamp of the event. */
    timestamp: Schema.DateTimeUtcFromString,
    /** The ID of the organization owning the event. */
    organization_id: Schema.String,
    /** ID of the customer in your Polar organization associated with the event. */
    customer_id: Schema.NullOr(Schema.String),
    /** The customer associated with the event. */
    customer: Schema.NullOr(Customer),
    /** ID of the customer in your system associated with the event. */
    external_customer_id: Schema.NullOr(Schema.String),
    /** ID of the member within the customer's organization who performed the action inside B2B. */
    member_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** ID of the member in your system within the customer's organization who performed the action inside B2B. */
    external_member_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** Number of direct child events linked to this event. */
    child_count: Schema.optionalKey(Schema.Number),
    /** The ID of the parent event. */
    parent_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** Human readable label of the event type. */
    label: Schema.String,
    /** The source of the event. `system` events are created by Polar. `user` events are the one you create through our ingestion API. */
    source: Schema.Literal("system"),
    /** The name of the event. */
    name: Schema.Literal("subscription.reinstated"),
    metadata: SubscriptionReinstatedMetadata,
  }),
) {}

/**
 * SubscriptionResumedMetadata
 */
export class SubscriptionResumedMetadata extends Schema.Opaque<SubscriptionResumedMetadata>()(
  Schema.Struct({
    subscription_id: Schema.String,
    product_id: Schema.optionalKey(Schema.String),
    amount: Schema.optionalKey(Schema.Number),
    currency: Schema.optionalKey(Schema.String),
    recurring_interval: Schema.optionalKey(Schema.String),
    recurring_interval_count: Schema.optionalKey(Schema.Number),
  }),
) {}

/**
 * An event created by Polar when a paused subscription is resumed.
 */
export class SubscriptionResumedEvent extends Schema.Opaque<SubscriptionResumedEvent>()(
  Schema.Struct({
    /** The ID of the object. */
    id: Schema.String,
    /** The timestamp of the event. */
    timestamp: Schema.DateTimeUtcFromString,
    /** The ID of the organization owning the event. */
    organization_id: Schema.String,
    /** ID of the customer in your Polar organization associated with the event. */
    customer_id: Schema.NullOr(Schema.String),
    /** The customer associated with the event. */
    customer: Schema.NullOr(Customer),
    /** ID of the customer in your system associated with the event. */
    external_customer_id: Schema.NullOr(Schema.String),
    /** ID of the member within the customer's organization who performed the action inside B2B. */
    member_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** ID of the member in your system within the customer's organization who performed the action inside B2B. */
    external_member_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** Number of direct child events linked to this event. */
    child_count: Schema.optionalKey(Schema.Number),
    /** The ID of the parent event. */
    parent_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** Human readable label of the event type. */
    label: Schema.String,
    /** The source of the event. `system` events are created by Polar. `user` events are the one you create through our ingestion API. */
    source: Schema.Literal("system"),
    /** The name of the event. */
    name: Schema.Literal("subscription.resumed"),
    metadata: SubscriptionResumedMetadata,
  }),
) {}

/**
 * SubscriptionRevokedMetadata
 */
export class SubscriptionRevokedMetadata extends Schema.Opaque<SubscriptionRevokedMetadata>()(
  Schema.Struct({
    subscription_id: Schema.String,
    product_id: Schema.optionalKey(Schema.String),
    amount: Schema.optionalKey(Schema.Number),
    currency: Schema.optionalKey(Schema.String),
    recurring_interval: Schema.optionalKey(Schema.String),
    recurring_interval_count: Schema.optionalKey(Schema.Number),
  }),
) {}

/**
 * An event created by Polar when a subscription is revoked from a customer.
 */
export class SubscriptionRevokedEvent extends Schema.Opaque<SubscriptionRevokedEvent>()(
  Schema.Struct({
    /** The ID of the object. */
    id: Schema.String,
    /** The timestamp of the event. */
    timestamp: Schema.DateTimeUtcFromString,
    /** The ID of the organization owning the event. */
    organization_id: Schema.String,
    /** ID of the customer in your Polar organization associated with the event. */
    customer_id: Schema.NullOr(Schema.String),
    /** The customer associated with the event. */
    customer: Schema.NullOr(Customer),
    /** ID of the customer in your system associated with the event. */
    external_customer_id: Schema.NullOr(Schema.String),
    /** ID of the member within the customer's organization who performed the action inside B2B. */
    member_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** ID of the member in your system within the customer's organization who performed the action inside B2B. */
    external_member_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** Number of direct child events linked to this event. */
    child_count: Schema.optionalKey(Schema.Number),
    /** The ID of the parent event. */
    parent_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** Human readable label of the event type. */
    label: Schema.String,
    /** The source of the event. `system` events are created by Polar. `user` events are the one you create through our ingestion API. */
    source: Schema.Literal("system"),
    /** The name of the event. */
    name: Schema.Literal("subscription.revoked"),
    metadata: SubscriptionRevokedMetadata,
  }),
) {}

/**
 * SubscriptionSeatsUpdatedMetadata
 */
export class SubscriptionSeatsUpdatedMetadata extends Schema.Opaque<SubscriptionSeatsUpdatedMetadata>()(
  Schema.Struct({
    subscription_id: Schema.String,
    old_seats: Schema.Number,
    new_seats: Schema.Number,
    proration_behavior: Schema.String,
  }),
) {}

/**
 * An event created by Polar when a the seats on a subscription is changed.
 */
export class SubscriptionSeatsUpdatedEvent extends Schema.Opaque<SubscriptionSeatsUpdatedEvent>()(
  Schema.Struct({
    /** The ID of the object. */
    id: Schema.String,
    /** The timestamp of the event. */
    timestamp: Schema.DateTimeUtcFromString,
    /** The ID of the organization owning the event. */
    organization_id: Schema.String,
    /** ID of the customer in your Polar organization associated with the event. */
    customer_id: Schema.NullOr(Schema.String),
    /** The customer associated with the event. */
    customer: Schema.NullOr(Customer),
    /** ID of the customer in your system associated with the event. */
    external_customer_id: Schema.NullOr(Schema.String),
    /** ID of the member within the customer's organization who performed the action inside B2B. */
    member_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** ID of the member in your system within the customer's organization who performed the action inside B2B. */
    external_member_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** Number of direct child events linked to this event. */
    child_count: Schema.optionalKey(Schema.Number),
    /** The ID of the parent event. */
    parent_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** Human readable label of the event type. */
    label: Schema.String,
    /** The source of the event. `system` events are created by Polar. `user` events are the one you create through our ingestion API. */
    source: Schema.Literal("system"),
    /** The name of the event. */
    name: Schema.Literal("subscription.seats_updated"),
    metadata: SubscriptionSeatsUpdatedMetadata,
  }),
) {}

/**
 * SubscriptionUncanceledMetadata
 */
export class SubscriptionUncanceledMetadata extends Schema.Opaque<SubscriptionUncanceledMetadata>()(
  Schema.Struct({
    subscription_id: Schema.String,
    product_id: Schema.String,
    amount: Schema.Number,
    currency: Schema.String,
    recurring_interval: Schema.String,
    recurring_interval_count: Schema.Number,
  }),
) {}

/**
 * An event created by Polar when a subscription cancellation is reversed.
 */
export class SubscriptionUncanceledEvent extends Schema.Opaque<SubscriptionUncanceledEvent>()(
  Schema.Struct({
    /** The ID of the object. */
    id: Schema.String,
    /** The timestamp of the event. */
    timestamp: Schema.DateTimeUtcFromString,
    /** The ID of the organization owning the event. */
    organization_id: Schema.String,
    /** ID of the customer in your Polar organization associated with the event. */
    customer_id: Schema.NullOr(Schema.String),
    /** The customer associated with the event. */
    customer: Schema.NullOr(Customer),
    /** ID of the customer in your system associated with the event. */
    external_customer_id: Schema.NullOr(Schema.String),
    /** ID of the member within the customer's organization who performed the action inside B2B. */
    member_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** ID of the member in your system within the customer's organization who performed the action inside B2B. */
    external_member_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** Number of direct child events linked to this event. */
    child_count: Schema.optionalKey(Schema.Number),
    /** The ID of the parent event. */
    parent_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** Human readable label of the event type. */
    label: Schema.String,
    /** The source of the event. `system` events are created by Polar. `user` events are the one you create through our ingestion API. */
    source: Schema.Literal("system"),
    /** The name of the event. */
    name: Schema.Literal("subscription.uncanceled"),
    metadata: SubscriptionUncanceledMetadata,
  }),
) {}

/**
 * SubscriptionUnitsUpdatedMetadata
 */
export class SubscriptionUnitsUpdatedMetadata extends Schema.Opaque<SubscriptionUnitsUpdatedMetadata>()(
  Schema.Struct({
    subscription_id: Schema.String,
    old_units: Schema.Number,
    new_units: Schema.Number,
    proration_behavior: Schema.String,
  }),
) {}

/**
 * An event created by Polar when the units on a subscription are changed.
 */
export class SubscriptionUnitsUpdatedEvent extends Schema.Opaque<SubscriptionUnitsUpdatedEvent>()(
  Schema.Struct({
    /** The ID of the object. */
    id: Schema.String,
    /** The timestamp of the event. */
    timestamp: Schema.DateTimeUtcFromString,
    /** The ID of the organization owning the event. */
    organization_id: Schema.String,
    /** ID of the customer in your Polar organization associated with the event. */
    customer_id: Schema.NullOr(Schema.String),
    /** The customer associated with the event. */
    customer: Schema.NullOr(Customer),
    /** ID of the customer in your system associated with the event. */
    external_customer_id: Schema.NullOr(Schema.String),
    /** ID of the member within the customer's organization who performed the action inside B2B. */
    member_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** ID of the member in your system within the customer's organization who performed the action inside B2B. */
    external_member_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** Number of direct child events linked to this event. */
    child_count: Schema.optionalKey(Schema.Number),
    /** The ID of the parent event. */
    parent_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** Human readable label of the event type. */
    label: Schema.String,
    /** The source of the event. `system` events are created by Polar. `user` events are the one you create through our ingestion API. */
    source: Schema.Literal("system"),
    /** The name of the event. */
    name: Schema.Literal("subscription.units_updated"),
    metadata: SubscriptionUnitsUpdatedMetadata,
  }),
) {}

/**
 * SubscriptionUpdateClearedMetadata
 */
export class SubscriptionUpdateClearedMetadata extends Schema.Opaque<SubscriptionUpdateClearedMetadata>()(
  Schema.Struct({
    subscription_id: Schema.String,
  }),
) {}

/**
 * An event created by Polar when a pending subscription update is cleared without being applied.
 */
export class SubscriptionUpdateClearedEvent extends Schema.Opaque<SubscriptionUpdateClearedEvent>()(
  Schema.Struct({
    /** The ID of the object. */
    id: Schema.String,
    /** The timestamp of the event. */
    timestamp: Schema.DateTimeUtcFromString,
    /** The ID of the organization owning the event. */
    organization_id: Schema.String,
    /** ID of the customer in your Polar organization associated with the event. */
    customer_id: Schema.NullOr(Schema.String),
    /** The customer associated with the event. */
    customer: Schema.NullOr(Customer),
    /** ID of the customer in your system associated with the event. */
    external_customer_id: Schema.NullOr(Schema.String),
    /** ID of the member within the customer's organization who performed the action inside B2B. */
    member_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** ID of the member in your system within the customer's organization who performed the action inside B2B. */
    external_member_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** Number of direct child events linked to this event. */
    child_count: Schema.optionalKey(Schema.Number),
    /** The ID of the parent event. */
    parent_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** Human readable label of the event type. */
    label: Schema.String,
    /** The source of the event. `system` events are created by Polar. `user` events are the one you create through our ingestion API. */
    source: Schema.Literal("system"),
    /** The name of the event. */
    name: Schema.Literal("subscription.update_cleared"),
    metadata: SubscriptionUpdateClearedMetadata,
  }),
) {}

/**
 * SubscriptionUpdatedMetadata
 */
export class SubscriptionUpdatedMetadata extends Schema.Opaque<SubscriptionUpdatedMetadata>()(
  Schema.Struct({
    product_id: Schema.optionalKey(Schema.String),
    proration_behavior: Schema.optionalKey(openEnum(SubscriptionProrationBehavior)),
    discount_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    trial_end: Schema.optionalKey(Schema.String),
    seats: Schema.optionalKey(Schema.Number),
    units: Schema.optionalKey(Schema.Number),
    billing_period_end: Schema.optionalKey(Schema.String),
    subscription_id: Schema.String,
  }),
) {}

/**
 * An event created by Polar when a subscription is updated.
 */
export class SubscriptionUpdatedEvent extends Schema.Opaque<SubscriptionUpdatedEvent>()(
  Schema.Struct({
    /** The ID of the object. */
    id: Schema.String,
    /** The timestamp of the event. */
    timestamp: Schema.DateTimeUtcFromString,
    /** The ID of the organization owning the event. */
    organization_id: Schema.String,
    /** ID of the customer in your Polar organization associated with the event. */
    customer_id: Schema.NullOr(Schema.String),
    /** The customer associated with the event. */
    customer: Schema.NullOr(Customer),
    /** ID of the customer in your system associated with the event. */
    external_customer_id: Schema.NullOr(Schema.String),
    /** ID of the member within the customer's organization who performed the action inside B2B. */
    member_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** ID of the member in your system within the customer's organization who performed the action inside B2B. */
    external_member_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** Number of direct child events linked to this event. */
    child_count: Schema.optionalKey(Schema.Number),
    /** The ID of the parent event. */
    parent_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** Human readable label of the event type. */
    label: Schema.String,
    /** The source of the event. `system` events are created by Polar. `user` events are the one you create through our ingestion API. */
    source: Schema.Literal("system"),
    /** The name of the event. */
    name: Schema.Literal("subscription.updated"),
    metadata: SubscriptionUpdatedMetadata,
  }),
) {}

/**
 * SystemEvent
 */
export const SystemEvent = openUnion(
  [
    MeterCreditEvent,
    MeterResetEvent,
    BenefitGrantedEvent,
    BenefitCycledEvent,
    BenefitUpdatedEvent,
    BenefitRevokedEvent,
    SubscriptionCreatedEvent,
    SubscriptionUpdatedEvent,
    SubscriptionCycledEvent,
    SubscriptionCanceledEvent,
    SubscriptionRevokedEvent,
    SubscriptionPastDueEvent,
    SubscriptionReactivatedEvent,
    SubscriptionReinstatedEvent,
    SubscriptionPausedEvent,
    SubscriptionResumedEvent,
    SubscriptionMigratedEvent,
    SubscriptionUncanceledEvent,
    SubscriptionProductUpdatedEvent,
    SubscriptionSeatsUpdatedEvent,
    SubscriptionUnitsUpdatedEvent,
    SubscriptionBillingPeriodUpdatedEvent,
    SubscriptionUpdateClearedEvent,
    OrderPaidEvent,
    OrderRefundedEvent,
    OrderVoidedEvent,
    OrderUnvoidedEvent,
    CheckoutCreatedEvent,
    CustomerCreatedEvent,
    CustomerUpdatedEvent,
    CustomerDeletedEvent,
    BalanceOrderEvent,
    BalanceCreditOrderEvent,
    BalanceRefundEvent,
    BalanceRefundReversalEvent,
    BalanceDisputeEvent,
    BalanceDisputeReversalEvent,
  ],
  "name",
  [
    "balance.credit_order",
    "balance.dispute",
    "balance.dispute_reversal",
    "balance.order",
    "balance.refund",
    "balance.refund_reversal",
    "benefit.cycled",
    "benefit.granted",
    "benefit.revoked",
    "benefit.updated",
    "checkout.created",
    "customer.created",
    "customer.deleted",
    "customer.updated",
    "meter.credited",
    "meter.reset",
    "order.paid",
    "order.refunded",
    "order.unvoided",
    "order.voided",
    "subscription.billing_period_updated",
    "subscription.canceled",
    "subscription.created",
    "subscription.cycled",
    "subscription.migrated",
    "subscription.past_due",
    "subscription.paused",
    "subscription.product_updated",
    "subscription.reactivated",
    "subscription.reinstated",
    "subscription.resumed",
    "subscription.revoked",
    "subscription.seats_updated",
    "subscription.uncanceled",
    "subscription.units_updated",
    "subscription.update_cleared",
    "subscription.updated",
  ],
);
export type SystemEvent = typeof SystemEvent.Type;

/**
 * LLMMetadata
 */
export class LLMMetadata extends Schema.Opaque<LLMMetadata>()(
  Schema.Struct({
    /** The vendor of the event. */
    vendor: Schema.String,
    /** The model used for the event. */
    model: Schema.String,
    /** The LLM prompt used for the event. */
    prompt: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** The LLM response used for the event. */
    response: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** The number of LLM input tokens used for the event. */
    input_tokens: Schema.Number,
    /** The number of LLM cached tokens that were used for the event. */
    cached_input_tokens: Schema.optionalKey(Schema.Number),
    /** The number of LLM output tokens used for the event. */
    output_tokens: Schema.Number,
    /** The total number of LLM tokens used for the event. */
    total_tokens: Schema.Number,
  }),
) {}

/**
 * EventMetadataOutput
 */
export class EventMetadataOutput extends Schema.Opaque<EventMetadataOutput>()(
  Schema.StructWithRest(
    Schema.Struct({
      _cost: Schema.optionalKey(CostMetadataOutput),
      _llm: Schema.optionalKey(LLMMetadata),
    }),
    [
      Schema.Record(
        Schema.String,
        Schema.Union([
          Schema.Union([Schema.String, Schema.Number, Schema.Boolean]),
          CostMetadataOutput,
          LLMMetadata,
        ]),
      ),
    ],
  ),
) {}

/**
 * An event you created through the ingestion API.
 */
export class UserEvent extends Schema.Opaque<UserEvent>()(
  Schema.Struct({
    /** The ID of the object. */
    id: Schema.String,
    /** The timestamp of the event. */
    timestamp: Schema.DateTimeUtcFromString,
    /** The ID of the organization owning the event. */
    organization_id: Schema.String,
    /** ID of the customer in your Polar organization associated with the event. */
    customer_id: Schema.NullOr(Schema.String),
    /** The customer associated with the event. */
    customer: Schema.NullOr(Customer),
    /** ID of the customer in your system associated with the event. */
    external_customer_id: Schema.NullOr(Schema.String),
    /** ID of the member within the customer's organization who performed the action inside B2B. */
    member_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** ID of the member in your system within the customer's organization who performed the action inside B2B. */
    external_member_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** Number of direct child events linked to this event. */
    child_count: Schema.optionalKey(Schema.Number),
    /** The ID of the parent event. */
    parent_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** Human readable label of the event type. */
    label: Schema.String,
    /** The name of the event. */
    name: Schema.String,
    /** The source of the event. `system` events are created by Polar. `user` events are the one you create through our ingestion API. */
    source: Schema.Literal("user"),
    metadata: EventMetadataOutput,
  }),
) {}

/**
 * Event
 */
export const Event = openUnion([SystemEvent, UserEvent], "source", ["system", "user"]);
export type Event = typeof Event.Type;

/**
 * EventMetadataInput
 */
export class EventMetadataInput extends Schema.Opaque<EventMetadataInput>()(
  Schema.StructWithRest(
    Schema.Struct({
      _cost: Schema.optionalKey(CostMetadataInput),
      _llm: Schema.optionalKey(LLMMetadata),
    }),
    [
      Schema.Record(
        Schema.String,
        Schema.Union([
          Schema.Union([Schema.String, Schema.Number, Schema.Boolean]),
          CostMetadataInput,
          LLMMetadata,
        ]),
      ),
    ],
  ),
) {}

/**
 * EventCreateCustomer
 */
export class EventCreateCustomer extends Schema.Opaque<EventCreateCustomer>()(
  Schema.Struct({
    /** The timestamp of the event. */
    timestamp: Schema.optionalKey(DateTimeInput),
    /** The name of the event. */
    name: Schema.String,
    /** The ID of the organization owning the event. **Required unless you use an organization token.** */
    organization_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** Your unique identifier for this event. Useful for deduplication and parent-child relationships. */
    external_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** The ID of the parent event. Can be either a Polar event ID (UUID) or an external event ID. */
    parent_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    metadata: Schema.optionalKey(EventMetadataInput),
    /** ID of the customer in your Polar organization associated with the event. */
    customer_id: Schema.String,
    /** ID of the member within the customer's organization who performed the action. Used for member-level attribution in B2B. */
    member_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
  }),
) {}

/**
 * EventCreateExternalCustomer
 */
export class EventCreateExternalCustomer extends Schema.Opaque<EventCreateExternalCustomer>()(
  Schema.Struct({
    /** The timestamp of the event. */
    timestamp: Schema.optionalKey(DateTimeInput),
    /** The name of the event. */
    name: Schema.String,
    /** The ID of the organization owning the event. **Required unless you use an organization token.** */
    organization_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** Your unique identifier for this event. Useful for deduplication and parent-child relationships. */
    external_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** The ID of the parent event. Can be either a Polar event ID (UUID) or an external event ID. */
    parent_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    metadata: Schema.optionalKey(EventMetadataInput),
    /** ID of the customer in your system associated with the event. */
    external_customer_id: Schema.String,
    /** ID of the member in your system within the customer's organization who performed the action. Used for member-level attribution in B2B. */
    external_member_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
  }),
) {}

/**
 * EventName
 */
export class EventName extends Schema.Opaque<EventName>()(
  Schema.Struct({
    /** The name of the event. */
    name: Schema.String,
    /** Human readable label of the event. */
    label: Schema.String,
    source: openEnum(EventSource),
    /** Number of times the event has occurred. */
    occurrences: Schema.Number,
    /** The first time the event occurred. */
    first_seen: Schema.DateTimeUtcFromString,
    /** The last time the event occurred. */
    last_seen: Schema.DateTimeUtcFromString,
  }),
) {}

/**
 * EventType
 */
export class EventType extends Schema.Opaque<EventType>()(
  Schema.Struct({
    /** Creation timestamp of the object. */
    created_at: Schema.DateTimeUtcFromString,
    /** Last modification timestamp of the object. */
    modified_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** The ID of the object. */
    id: Schema.String,
    /** The name of the event type. */
    name: Schema.String,
    /** The label for the event type. */
    label: Schema.String,
    /** Property path to extract dynamic label from event metadata. */
    label_property_selector: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** The ID of the organization owning the event type. */
    organization_id: Schema.String,
  }),
) {}

/**
 * EventTypeUpdate
 */
export class EventTypeUpdate extends Schema.Opaque<EventTypeUpdate>()(
  Schema.Struct({
    /** The label for the event type. */
    label: Schema.String,
    /** Property path to extract dynamic label from event metadata (e.g., 'subject' or 'metadata.subject'). */
    label_property_selector: Schema.optionalKey(Schema.NullOr(Schema.String)),
  }),
) {}

/**
 * EventTypeWithStats
 */
export class EventTypeWithStats extends Schema.Opaque<EventTypeWithStats>()(
  Schema.Struct({
    /** The ID of the event type. Null for system event types. */
    id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** Creation timestamp of the event type. Null for system event types. */
    created_at: Schema.optionalKey(Schema.NullOr(Schema.DateTimeUtcFromString)),
    /** Last modification timestamp of the event type. Null for system event types. */
    modified_at: Schema.optionalKey(Schema.NullOr(Schema.DateTimeUtcFromString)),
    /** The name of the event type. */
    name: Schema.String,
    /** The label for the event type. */
    label: Schema.String,
    /** Property path to extract dynamic label from event metadata. */
    label_property_selector: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** The ID of the organization owning the event type. */
    organization_id: Schema.String,
    source: openEnum(EventSource),
    /** Number of times the event has occurred. */
    occurrences: Schema.Number,
    /** The first time the event occurred. */
    first_seen: Schema.DateTimeUtcFromString,
    /** The last time the event occurred. */
    last_seen: Schema.DateTimeUtcFromString,
  }),
) {}

/**
 * EventsIngest
 */
export class EventsIngest extends Schema.Opaque<EventsIngest>()(
  Schema.Struct({
    /** List of events to ingest. */
    events: Schema.Array(Schema.Union([EventCreateCustomer, EventCreateExternalCustomer])),
  }),
) {}

/**
 * EventsIngestResponse
 */
export class EventsIngestResponse extends Schema.Opaque<EventsIngestResponse>()(
  Schema.Struct({
    /** Number of events inserted. */
    inserted: Schema.Number,
    /** Number of duplicate events skipped. */
    duplicates: Schema.optionalKey(Schema.Number),
  }),
) {}

/**
 * A price that already exists for this product.
 *
 * Useful when updating a product if you want to keep an existing price.
 */
export class ExistingProductPrice extends Schema.Opaque<ExistingProductPrice>()(
  Schema.Struct({
    id: Schema.String,
  }),
) {}

/**
 * ExpiredCheckoutError
 */
export class ExpiredCheckoutError extends Schema.Opaque<ExpiredCheckoutError>()(
  Schema.Struct({
    error: Schema.Literal("ExpiredCheckoutError"),
    detail: Schema.String,
  }),
) {}

/**
 * Schema to create a file to be used as an organization avatar.
 */
export class OrganizationAvatarFileCreate extends Schema.Opaque<OrganizationAvatarFileCreate>()(
  Schema.Struct({
    organization_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    name: Schema.String,
    /** MIME type of the file. Only images are supported for this type of file. */
    mime_type: Schema.String,
    /** Size of the file. A maximum of 1 MB is allowed for this type of file. */
    size: Schema.Number,
    checksum_sha256_base64: Schema.optionalKey(Schema.NullOr(Schema.String)),
    upload: S3FileCreateMultipart,
    service: Schema.Literal("organization_avatar"),
    version: Schema.optionalKey(Schema.NullOr(Schema.String)),
  }),
) {}

/**
 * Schema to create a file to be used as a product media file.
 */
export class ProductMediaFileCreate extends Schema.Opaque<ProductMediaFileCreate>()(
  Schema.Struct({
    organization_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    name: Schema.String,
    /** MIME type of the file. Only images are supported for this type of file. */
    mime_type: Schema.String,
    /** Size of the file. A maximum of 10 MB is allowed for this type of file. */
    size: Schema.Number,
    checksum_sha256_base64: Schema.optionalKey(Schema.NullOr(Schema.String)),
    upload: S3FileCreateMultipart,
    service: Schema.Literal("product_media"),
    version: Schema.optionalKey(Schema.NullOr(Schema.String)),
  }),
) {}

/**
 * Schema to create a file attached to a support case.
 */
export class SupportCaseAttachmentFileCreate extends Schema.Opaque<SupportCaseAttachmentFileCreate>()(
  Schema.Struct({
    organization_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    name: Schema.String,
    /** MIME type of the file. Images, videos, PDF, CSV, plain text, Word and Excel documents are supported. */
    mime_type: Schema.String,
    /** Size of the file. A maximum of 250 MB is allowed for this type of file. */
    size: Schema.Number,
    checksum_sha256_base64: Schema.optionalKey(Schema.NullOr(Schema.String)),
    upload: S3FileCreateMultipart,
    service: Schema.Literal("support_case_attachment"),
    version: Schema.optionalKey(Schema.NullOr(Schema.String)),
  }),
) {}

/**
 * FileCreate
 */
export const FileCreate = Schema.Union([
  DownloadableFileCreate,
  ProductMediaFileCreate,
  OrganizationAvatarFileCreate,
  SupportCaseAttachmentFileCreate,
]);
export type FileCreate = typeof FileCreate.Type;

/**
 * FilePatch
 */
export class FilePatch extends Schema.Opaque<FilePatch>()(
  Schema.Struct({
    name: Schema.optionalKey(Schema.NullOr(Schema.String)),
    version: Schema.optionalKey(Schema.NullOr(Schema.String)),
  }),
) {}

/**
 * File to be used as an organization avatar.
 */
export class OrganizationAvatarFileRead extends Schema.Opaque<OrganizationAvatarFileRead>()(
  Schema.Struct({
    /** The ID of the object. */
    id: Schema.String,
    organization_id: Schema.String,
    name: Schema.String,
    path: Schema.String,
    mime_type: Schema.String,
    size: Schema.Number,
    storage_version: Schema.NullOr(Schema.String),
    checksum_etag: Schema.NullOr(Schema.String),
    checksum_sha256_base64: Schema.NullOr(Schema.String),
    checksum_sha256_hex: Schema.NullOr(Schema.String),
    last_modified_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    version: Schema.NullOr(Schema.String),
    service: Schema.Literal("organization_avatar"),
    is_uploaded: Schema.Boolean,
    created_at: Schema.DateTimeUtcFromString,
    size_readable: Schema.String,
    public_url: Schema.String,
  }),
) {}

/**
 * File attached to a support case (private; fetched via presigned URL).
 */
export class SupportCaseAttachmentFileRead extends Schema.Opaque<SupportCaseAttachmentFileRead>()(
  Schema.Struct({
    /** The ID of the object. */
    id: Schema.String,
    organization_id: Schema.String,
    name: Schema.String,
    path: Schema.String,
    mime_type: Schema.String,
    size: Schema.Number,
    storage_version: Schema.NullOr(Schema.String),
    checksum_etag: Schema.NullOr(Schema.String),
    checksum_sha256_base64: Schema.NullOr(Schema.String),
    checksum_sha256_hex: Schema.NullOr(Schema.String),
    last_modified_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    version: Schema.NullOr(Schema.String),
    service: Schema.Literal("support_case_attachment"),
    is_uploaded: Schema.Boolean,
    created_at: Schema.DateTimeUtcFromString,
    size_readable: Schema.String,
  }),
) {}

/**
 * FileRead
 */
export const FileRead = openUnion(
  [
    DownloadableFileRead,
    ProductMediaFileRead,
    OrganizationAvatarFileRead,
    SupportCaseAttachmentFileRead,
  ],
  "service",
  ["downloadable", "organization_avatar", "product_media", "support_case_attachment"],
);
export type FileRead = typeof FileRead.Type;

/**
 * S3FileUploadPart
 */
export class S3FileUploadPart extends Schema.Opaque<S3FileUploadPart>()(
  Schema.Struct({
    number: Schema.Number,
    chunk_start: Schema.Number,
    chunk_end: Schema.Number,
    checksum_sha256_base64: Schema.optionalKey(Schema.NullOr(Schema.String)),
    url: Schema.String,
    expires_at: Schema.DateTimeUtcFromString,
    headers: Schema.optionalKey(Schema.Record(Schema.String, Schema.String)),
  }),
) {}

/**
 * S3FileUploadMultipart
 */
export class S3FileUploadMultipart extends Schema.Opaque<S3FileUploadMultipart>()(
  Schema.Struct({
    id: Schema.String,
    path: Schema.String,
    parts: Schema.Array(S3FileUploadPart),
  }),
) {}

/**
 * FileUpload
 */
export class FileUpload extends Schema.Opaque<FileUpload>()(
  Schema.Struct({
    /** The ID of the object. */
    id: Schema.String,
    organization_id: Schema.String,
    name: Schema.String,
    path: Schema.String,
    mime_type: Schema.String,
    size: Schema.Number,
    storage_version: Schema.NullOr(Schema.String),
    checksum_etag: Schema.NullOr(Schema.String),
    checksum_sha256_base64: Schema.NullOr(Schema.String),
    checksum_sha256_hex: Schema.NullOr(Schema.String),
    last_modified_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    upload: S3FileUploadMultipart,
    version: Schema.NullOr(Schema.String),
    is_uploaded: Schema.optionalKey(Schema.Boolean),
    service: openEnum(FileServiceTypes),
    size_readable: Schema.String,
  }),
) {}

/**
 * S3FileUploadCompletedPart
 */
export class S3FileUploadCompletedPart extends Schema.Opaque<S3FileUploadCompletedPart>()(
  Schema.Struct({
    number: Schema.Number,
    checksum_etag: Schema.String,
    checksum_sha256_base64: Schema.NullOr(Schema.String),
  }),
) {}

/**
 * FileUploadCompleted
 */
export class FileUploadCompleted extends Schema.Opaque<FileUploadCompleted>()(
  Schema.Struct({
    id: Schema.String,
    path: Schema.String,
    parts: Schema.Array(S3FileUploadCompletedPart),
  }),
) {}

/**
 * Schema of a payment with a generic payment method.
 */
export class GenericPayment extends Schema.Opaque<GenericPayment>()(
  Schema.Struct({
    /** Creation timestamp of the object. */
    created_at: Schema.DateTimeUtcFromString,
    /** Last modification timestamp of the object. */
    modified_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** The ID of the object. */
    id: Schema.String,
    processor: openEnum(PaymentProcessor),
    status: openEnum(PaymentStatus),
    /** The payment amount in cents. */
    amount: Schema.Number,
    /** The payment currency */
    currency: Schema.String,
    /** The payment method used. */
    method: Schema.String,
    /** What initiated this payment attempt, e.g. initial purchase, subscription renewal, or an automated dunning retry. */
    trigger: Schema.NullOr(openEnum(PaymentTrigger)),
    /** Error code, if the payment was declined. */
    decline_reason: Schema.NullOr(Schema.String),
    /** Human-readable error message, if the payment was declined. */
    decline_message: Schema.NullOr(Schema.String),
    /** The ID of the organization that owns the payment. */
    organization_id: Schema.String,
    /** The ID of the checkout session associated with this payment. */
    checkout_id: Schema.NullOr(Schema.String),
    /** The ID of the order associated with this payment. */
    order_id: Schema.NullOr(Schema.String),
    /** Additional metadata from the payment processor for internal use. */
    processor_metadata: Schema.optionalKey(Schema.Record(Schema.String, Schema.Unknown)),
  }),
) {}

/**
 * LicenseKeyCustomer
 */
export class LicenseKeyCustomer extends Schema.Opaque<LicenseKeyCustomer>()(
  Schema.Struct({
    /** The ID of the customer. */
    id: Schema.String,
    /** Creation timestamp of the object. */
    created_at: Schema.DateTimeUtcFromString,
    /** Last modification timestamp of the object. */
    modified_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    metadata: MetadataOutputType,
    /** The ID of the customer in your system. This must be unique within the organization. Once set, it can't be updated. */
    external_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** The email address of the customer. This must be unique within the organization. */
    email: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** Whether the customer email address is verified. The address is automatically verified when the customer accesses the customer portal using their email address. */
    email_verified: Schema.Boolean,
    type: openEnum(CustomerType),
    /** The name of the customer. */
    name: Schema.NullOr(Schema.String),
    /** The name that should appear on the customer's invoices. Falls back to the customer name when not explicitly set. */
    billing_name: Schema.NullOr(Schema.String),
    billing_address: Schema.NullOr(Address),
    tax_id: Schema.NullOr(Schema.Array(Schema.Unknown)),
    locale: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** The ID of the organization owning the customer. */
    organization_id: Schema.String,
    /** The ID of the customer's default payment method, if any. Use the payment methods endpoint to retrieve its details. */
    default_payment_method_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** Timestamp for when the customer was soft deleted. */
    deleted_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** Timestamp of the first event ingested for this customer. Can predate `created_at`, and is null if no event was ever ingested. */
    first_user_event_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    avatar_url: Schema.NullOr(Schema.String),
  }),
) {}

/**
 * LicenseKeyMember
 */
export class LicenseKeyMember extends Schema.Opaque<LicenseKeyMember>()(
  Schema.Struct({
    /** The ID of the object. */
    id: Schema.String,
    /** The email address of the seat member. */
    email: Schema.String,
    /** The external ID of the seat member, if set. */
    external_id: Schema.NullOr(Schema.String),
  }),
) {}

/**
 * GrantedLicenseKey
 */
export class GrantedLicenseKey extends Schema.Opaque<GrantedLicenseKey>()(
  Schema.Struct({
    /** The ID of the object. */
    id: Schema.String,
    /** Creation timestamp of the object. */
    created_at: Schema.DateTimeUtcFromString,
    /** Last modification timestamp of the object. */
    modified_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    organization_id: Schema.String,
    customer_id: Schema.String,
    customer: LicenseKeyCustomer,
    /** The ID of the seat member holding this key, if any. */
    member_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** The seat member holding this key. Set for keys granted through a seat-based product; `null` for keys granted to the customer directly. */
    member: Schema.optionalKey(Schema.NullOr(LicenseKeyMember)),
    /** The benefit ID. */
    benefit_id: Schema.String,
    key: Schema.String,
    display_key: Schema.String,
    status: Schema.Literal("granted"),
    limit_activations: Schema.NullOr(Schema.Number),
    usage: Schema.Number,
    limit_usage: Schema.NullOr(Schema.Number),
    validations: Schema.Number,
    last_validated_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    expires_at: Schema.NullOr(Schema.DateTimeUtcFromString),
  }),
) {}

/**
 * ValidationError
 */
export class ValidationError extends Schema.Opaque<ValidationError>()(
  Schema.Struct({
    loc: Schema.Array(Schema.Union([Schema.String, Schema.Number])),
    msg: Schema.String,
    type: Schema.String,
    input: Schema.optionalKey(Schema.Unknown),
    ctx: Schema.optionalKey(Context),
  }),
) {}

/**
 * HTTPValidationError
 */
export class HTTPValidationError extends Schema.Opaque<HTTPValidationError>()(
  Schema.Struct({
    detail: Schema.optionalKey(Schema.Array(ValidationError)),
  }),
) {}

/**
 * InactiveSubscription
 */
export class InactiveSubscription extends Schema.Opaque<InactiveSubscription>()(
  Schema.Struct({
    error: Schema.Literal("InactiveSubscription"),
    detail: Schema.String,
  }),
) {}

/**
 * IntrospectTokenResponse
 */
export class IntrospectTokenResponse extends Schema.Opaque<IntrospectTokenResponse>()(
  Schema.Struct({
    active: Schema.Boolean,
    client_id: Schema.String,
    token_type: openEnum(TokenType),
    scope: Schema.String,
    sub_type: openEnum(SubType),
    sub: Schema.String,
    organizations: Schema.Array(Schema.String),
    aud: Schema.String,
    iss: Schema.String,
    exp: Schema.Number,
    iat: Schema.Number,
  }),
) {}

/**
 * Additional metadata for a South Korean card payment method.
 */
export class KrCardPaymentMetadata extends Schema.Opaque<KrCardPaymentMetadata>()(
  Schema.Struct({
    /** The local South Korean card brand used for the payment. */
    brand: Schema.NullOr(Schema.String),
    /** The last 4 digits of the card number. */
    last4: Schema.NullOr(Schema.String),
  }),
) {}

/**
 * Schema of a payment with a South Korean card payment method.
 */
export class KrCardPayment extends Schema.Opaque<KrCardPayment>()(
  Schema.Struct({
    /** Creation timestamp of the object. */
    created_at: Schema.DateTimeUtcFromString,
    /** Last modification timestamp of the object. */
    modified_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** The ID of the object. */
    id: Schema.String,
    processor: openEnum(PaymentProcessor),
    status: openEnum(PaymentStatus),
    /** The payment amount in cents. */
    amount: Schema.Number,
    /** The payment currency */
    currency: Schema.String,
    /** The payment method used. */
    method: Schema.Literal("kr_card"),
    /** What initiated this payment attempt, e.g. initial purchase, subscription renewal, or an automated dunning retry. */
    trigger: Schema.NullOr(openEnum(PaymentTrigger)),
    /** Error code, if the payment was declined. */
    decline_reason: Schema.NullOr(Schema.String),
    /** Human-readable error message, if the payment was declined. */
    decline_message: Schema.NullOr(Schema.String),
    /** The ID of the organization that owns the payment. */
    organization_id: Schema.String,
    /** The ID of the checkout session associated with this payment. */
    checkout_id: Schema.NullOr(Schema.String),
    /** The ID of the order associated with this payment. */
    order_id: Schema.NullOr(Schema.String),
    /** Additional metadata from the payment processor for internal use. */
    processor_metadata: Schema.optionalKey(Schema.Record(Schema.String, Schema.Unknown)),
    method_metadata: KrCardPaymentMetadata,
  }),
) {}

/**
 * LicenseKeyActivate
 */
export class LicenseKeyActivate extends Schema.Opaque<LicenseKeyActivate>()(
  Schema.Struct({
    key: Schema.String,
    organization_id: Schema.String,
    label: Schema.String,
    /** Key-value object allowing you to set conditions that must match when validating the license key. The key must be a string with a maximum length of **40 characters**. The value must be either: * A string with a maximum length of **500 characters** * An integer * A floating-point number * A boolean You can store up to **50 key-value pairs**. */
    conditions: Schema.optionalKey(
      Schema.Record(Schema.String, Schema.Union([Schema.String, Schema.Number, Schema.Boolean])),
    ),
    /** Key-value object allowing you to store additional information about the activation The key must be a string with a maximum length of **40 characters**. The value must be either: * A string with a maximum length of **500 characters** * An integer * A floating-point number * A boolean You can store up to **50 key-value pairs**. */
    meta: Schema.optionalKey(
      Schema.Record(Schema.String, Schema.Union([Schema.String, Schema.Number, Schema.Boolean])),
    ),
  }),
) {}

/**
 * LicenseKeyActivationBase
 */
export class LicenseKeyActivationBase extends Schema.Opaque<LicenseKeyActivationBase>()(
  Schema.Struct({
    id: Schema.String,
    license_key_id: Schema.String,
    label: Schema.String,
    meta: Schema.Record(
      Schema.String,
      Schema.Union([Schema.String, Schema.Number, Schema.Boolean]),
    ),
    created_at: Schema.DateTimeUtcFromString,
    modified_at: Schema.NullOr(Schema.DateTimeUtcFromString),
  }),
) {}

/**
 * LicenseKeyActivationCreated
 */
export class LicenseKeyActivationCreated extends Schema.Opaque<LicenseKeyActivationCreated>()(
  Schema.Struct({
    id: Schema.String,
    license_key_id: Schema.String,
    label: Schema.String,
    meta: Schema.Record(
      Schema.String,
      Schema.Union([Schema.String, Schema.Number, Schema.Boolean]),
    ),
    created_at: Schema.DateTimeUtcFromString,
    modified_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    license_key: GrantedLicenseKey,
  }),
) {}

/**
 * LicenseKeyRead
 */
export class LicenseKeyRead extends Schema.Opaque<LicenseKeyRead>()(
  Schema.Struct({
    /** The ID of the object. */
    id: Schema.String,
    /** Creation timestamp of the object. */
    created_at: Schema.DateTimeUtcFromString,
    /** Last modification timestamp of the object. */
    modified_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    organization_id: Schema.String,
    customer_id: Schema.String,
    customer: LicenseKeyCustomer,
    /** The ID of the seat member holding this key, if any. */
    member_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** The seat member holding this key. Set for keys granted through a seat-based product; `null` for keys granted to the customer directly. */
    member: Schema.optionalKey(Schema.NullOr(LicenseKeyMember)),
    /** The benefit ID. */
    benefit_id: Schema.String,
    key: Schema.String,
    display_key: Schema.String,
    status: openEnum(LicenseKeyStatus),
    limit_activations: Schema.NullOr(Schema.Number),
    usage: Schema.Number,
    limit_usage: Schema.NullOr(Schema.Number),
    validations: Schema.Number,
    last_validated_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    expires_at: Schema.NullOr(Schema.DateTimeUtcFromString),
  }),
) {}

/**
 * LicenseKeyActivationRead
 */
export class LicenseKeyActivationRead extends Schema.Opaque<LicenseKeyActivationRead>()(
  Schema.Struct({
    id: Schema.String,
    license_key_id: Schema.String,
    label: Schema.String,
    meta: Schema.Record(
      Schema.String,
      Schema.Union([Schema.String, Schema.Number, Schema.Boolean]),
    ),
    created_at: Schema.DateTimeUtcFromString,
    modified_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    license_key: LicenseKeyRead,
  }),
) {}

/**
 * LicenseKeyDeactivate
 */
export class LicenseKeyDeactivate extends Schema.Opaque<LicenseKeyDeactivate>()(
  Schema.Struct({
    key: Schema.String,
    organization_id: Schema.String,
    activation_id: Schema.String,
  }),
) {}

/**
 * LicenseKeyUpdate
 */
export class LicenseKeyUpdate extends Schema.Opaque<LicenseKeyUpdate>()(
  Schema.Struct({
    status: Schema.optionalKey(Schema.NullOr(LicenseKeyStatus)),
    usage: Schema.optionalKey(Schema.Number),
    limit_activations: Schema.optionalKey(Schema.NullOr(Schema.Number)),
    limit_usage: Schema.optionalKey(Schema.NullOr(Schema.Number)),
    expires_at: Schema.optionalKey(Schema.NullOr(DateTimeInput)),
  }),
) {}

/**
 * LicenseKeyValidate
 */
export class LicenseKeyValidate extends Schema.Opaque<LicenseKeyValidate>()(
  Schema.Struct({
    key: Schema.String,
    organization_id: Schema.String,
    activation_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    benefit_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    customer_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    increment_usage: Schema.optionalKey(Schema.NullOr(Schema.Number)),
    /** Key-value object allowing you to set conditions that must match when validating the license key. The key must be a string with a maximum length of **40 characters**. The value must be either: * A string with a maximum length of **500 characters** * An integer * A floating-point number * A boolean You can store up to **50 key-value pairs**. */
    conditions: Schema.optionalKey(
      Schema.Record(Schema.String, Schema.Union([Schema.String, Schema.Number, Schema.Boolean])),
    ),
  }),
) {}

/**
 * LicenseKeyWithActivations
 */
export class LicenseKeyWithActivations extends Schema.Opaque<LicenseKeyWithActivations>()(
  Schema.Struct({
    /** The ID of the object. */
    id: Schema.String,
    /** Creation timestamp of the object. */
    created_at: Schema.DateTimeUtcFromString,
    /** Last modification timestamp of the object. */
    modified_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    organization_id: Schema.String,
    customer_id: Schema.String,
    customer: LicenseKeyCustomer,
    /** The ID of the seat member holding this key, if any. */
    member_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** The seat member holding this key. Set for keys granted through a seat-based product; `null` for keys granted to the customer directly. */
    member: Schema.optionalKey(Schema.NullOr(LicenseKeyMember)),
    /** The benefit ID. */
    benefit_id: Schema.String,
    key: Schema.String,
    display_key: Schema.String,
    status: openEnum(LicenseKeyStatus),
    limit_activations: Schema.NullOr(Schema.Number),
    usage: Schema.Number,
    limit_usage: Schema.NullOr(Schema.Number),
    validations: Schema.Number,
    last_validated_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    expires_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    activations: Schema.Array(LicenseKeyActivationBase),
  }),
) {}

/**
 * Pagination
 */
export class Pagination extends Schema.Opaque<Pagination>()(
  Schema.Struct({
    total_count: Schema.Number,
    max_page: Schema.Number,
  }),
) {}

/**
 * ListResourceBenefit
 */
export class ListResourceBenefit extends Schema.Opaque<ListResourceBenefit>()(
  Schema.Struct({
    items: Schema.Array(Benefit),
    pagination: Pagination,
  }),
) {}

/**
 * ListResourceBenefitDownloadableFile
 */
export class ListResourceBenefitDownloadableFile extends Schema.Opaque<ListResourceBenefitDownloadableFile>()(
  Schema.Struct({
    items: Schema.Array(BenefitDownloadableFile),
    pagination: Pagination,
  }),
) {}

/**
 * ListResourceBenefitGrant
 */
export class ListResourceBenefitGrant extends Schema.Opaque<ListResourceBenefitGrant>()(
  Schema.Struct({
    items: Schema.Array(BenefitGrant),
    pagination: Pagination,
  }),
) {}

/**
 * ListResourceCheckout
 */
export class ListResourceCheckout extends Schema.Opaque<ListResourceCheckout>()(
  Schema.Struct({
    items: Schema.Array(Checkout),
    pagination: Pagination,
  }),
) {}

/**
 * ListResourceCheckoutLink
 */
export class ListResourceCheckoutLink extends Schema.Opaque<ListResourceCheckoutLink>()(
  Schema.Struct({
    items: Schema.Array(CheckoutLink),
    pagination: Pagination,
  }),
) {}

/**
 * ListResourceCustomField
 */
export class ListResourceCustomField extends Schema.Opaque<ListResourceCustomField>()(
  Schema.Struct({
    items: Schema.Array(CustomField),
    pagination: Pagination,
  }),
) {}

/**
 * ListResourceCustomer
 */
export class ListResourceCustomer extends Schema.Opaque<ListResourceCustomer>()(
  Schema.Struct({
    items: Schema.Array(Customer),
    pagination: Pagination,
  }),
) {}

/**
 * ListResourceCustomerBenefitGrant
 */
export class ListResourceCustomerBenefitGrant extends Schema.Opaque<ListResourceCustomerBenefitGrant>()(
  Schema.Struct({
    items: Schema.Array(CustomerBenefitGrant),
    pagination: Pagination,
  }),
) {}

/**
 * ListResourceCustomerCustomerMeter
 */
export class ListResourceCustomerCustomerMeter extends Schema.Opaque<ListResourceCustomerCustomerMeter>()(
  Schema.Struct({
    items: Schema.Array(CustomerCustomerMeter),
    pagination: Pagination,
  }),
) {}

/**
 * ListResourceCustomerMeter
 */
export class ListResourceCustomerMeter extends Schema.Opaque<ListResourceCustomerMeter>()(
  Schema.Struct({
    items: Schema.Array(CustomerMeter),
    pagination: Pagination,
  }),
) {}

/**
 * ListResourceCustomerOrder
 */
export class ListResourceCustomerOrder extends Schema.Opaque<ListResourceCustomerOrder>()(
  Schema.Struct({
    items: Schema.Array(CustomerOrder),
    pagination: Pagination,
  }),
) {}

/**
 * ListResourceCustomerPaymentMethod
 */
export class ListResourceCustomerPaymentMethod extends Schema.Opaque<ListResourceCustomerPaymentMethod>()(
  Schema.Struct({
    items: Schema.Array(CustomerPaymentMethod),
    pagination: Pagination,
  }),
) {}

/**
 * ListResourceCustomerPortalMember
 */
export class ListResourceCustomerPortalMember extends Schema.Opaque<ListResourceCustomerPortalMember>()(
  Schema.Struct({
    items: Schema.Array(CustomerPortalMember),
    pagination: Pagination,
  }),
) {}

/**
 * ListResourceCustomerSubscription
 */
export class ListResourceCustomerSubscription extends Schema.Opaque<ListResourceCustomerSubscription>()(
  Schema.Struct({
    items: Schema.Array(CustomerSubscription),
    pagination: Pagination,
  }),
) {}

/**
 * ListResourceCustomerWallet
 */
export class ListResourceCustomerWallet extends Schema.Opaque<ListResourceCustomerWallet>()(
  Schema.Struct({
    items: Schema.Array(CustomerWallet),
    pagination: Pagination,
  }),
) {}

/**
 * ListResourceDiscount
 */
export class ListResourceDiscount extends Schema.Opaque<ListResourceDiscount>()(
  Schema.Struct({
    items: Schema.Array(Discount),
    pagination: Pagination,
  }),
) {}

/**
 * ListResourceDispute
 */
export class ListResourceDispute extends Schema.Opaque<ListResourceDispute>()(
  Schema.Struct({
    items: Schema.Array(Dispute),
    pagination: Pagination,
  }),
) {}

/**
 * ListResourceDownloadableRead
 */
export class ListResourceDownloadableRead extends Schema.Opaque<ListResourceDownloadableRead>()(
  Schema.Struct({
    items: Schema.Array(DownloadableRead),
    pagination: Pagination,
  }),
) {}

/**
 * ListResourceEvent
 */
export class ListResourceEvent extends Schema.Opaque<ListResourceEvent>()(
  Schema.Struct({
    items: Schema.Array(Event),
    pagination: Pagination,
  }),
) {}

/**
 * ListResourceEventName
 */
export class ListResourceEventName extends Schema.Opaque<ListResourceEventName>()(
  Schema.Struct({
    items: Schema.Array(EventName),
    pagination: Pagination,
  }),
) {}

/**
 * ListResourceEventTypeWithStats
 */
export class ListResourceEventTypeWithStats extends Schema.Opaque<ListResourceEventTypeWithStats>()(
  Schema.Struct({
    items: Schema.Array(EventTypeWithStats),
    pagination: Pagination,
  }),
) {}

/**
 * ListResourceFileRead
 */
export class ListResourceFileRead extends Schema.Opaque<ListResourceFileRead>()(
  Schema.Struct({
    items: Schema.Array(FileRead),
    pagination: Pagination,
  }),
) {}

/**
 * ListResourceLicenseKeyRead
 */
export class ListResourceLicenseKeyRead extends Schema.Opaque<ListResourceLicenseKeyRead>()(
  Schema.Struct({
    items: Schema.Array(LicenseKeyRead),
    pagination: Pagination,
  }),
) {}

/**
 * ListResourceMember
 */
export class ListResourceMember extends Schema.Opaque<ListResourceMember>()(
  Schema.Struct({
    items: Schema.Array(Member),
    pagination: Pagination,
  }),
) {}

/**
 * ListResourceMeter
 */
export class ListResourceMeter extends Schema.Opaque<ListResourceMeter>()(
  Schema.Struct({
    items: Schema.Array(Meter),
    pagination: Pagination,
  }),
) {}

/**
 * OrderCustomer
 */
export class OrderCustomer extends Schema.Opaque<OrderCustomer>()(
  Schema.Struct({
    /** The ID of the customer. */
    id: Schema.String,
    /** Creation timestamp of the object. */
    created_at: Schema.DateTimeUtcFromString,
    /** Last modification timestamp of the object. */
    modified_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    metadata: MetadataOutputType,
    /** The ID of the customer in your system. This must be unique within the organization. Once set, it can't be updated. */
    external_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** The email address of the customer. This must be unique within the organization. */
    email: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** Whether the customer email address is verified. The address is automatically verified when the customer accesses the customer portal using their email address. */
    email_verified: Schema.Boolean,
    type: openEnum(CustomerType),
    /** The name of the customer. */
    name: Schema.NullOr(Schema.String),
    /** The name that should appear on the customer's invoices. Falls back to the customer name when not explicitly set. */
    billing_name: Schema.NullOr(Schema.String),
    billing_address: Schema.NullOr(Address),
    tax_id: Schema.NullOr(Schema.Array(Schema.Unknown)),
    locale: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** The ID of the organization owning the customer. */
    organization_id: Schema.String,
    /** The ID of the customer's default payment method, if any. Use the payment methods endpoint to retrieve its details. */
    default_payment_method_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** Timestamp for when the customer was soft deleted. */
    deleted_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** Timestamp of the first event ingested for this customer. Can predate `created_at`, and is null if no event was ever ingested. */
    first_user_event_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    avatar_url: Schema.NullOr(Schema.String),
  }),
) {}

/**
 * OrderProduct
 */
export class OrderProduct extends Schema.Opaque<OrderProduct>()(
  Schema.Struct({
    metadata: MetadataOutputType,
    /** The ID of the object. */
    id: Schema.String,
    /** Creation timestamp of the object. */
    created_at: Schema.DateTimeUtcFromString,
    /** Last modification timestamp of the object. */
    modified_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** The interval unit for the trial period. */
    trial_interval: Schema.NullOr(openEnum(TrialInterval)),
    /** The number of interval units for the trial period. */
    trial_interval_count: Schema.NullOr(Schema.Number),
    /** The name of the product. */
    name: Schema.String,
    /** The description of the product. */
    description: Schema.NullOr(Schema.String),
    visibility: openEnum(ProductVisibility),
    /** The recurring interval of the product. If `None`, the product is a one-time purchase. */
    recurring_interval: Schema.NullOr(openEnum(RecurringInterval)),
    /** Number of interval units of the subscription. If this is set to 1 the charge will happen every interval (e.g. every month), if set to 2 it will be every other month, and so on. None for one-time products. */
    recurring_interval_count: Schema.NullOr(Schema.Number),
    /** The meter cycle of the product, independent of the billing interval. If `None`, metered concerns follow the billing interval. */
    meter_interval: Schema.NullOr(openEnum(RecurringInterval)),
    /** Number of meter interval units. None when no meter cycle is set. */
    meter_interval_count: Schema.NullOr(Schema.Number),
    /** Whether the product is a subscription. */
    is_recurring: Schema.Boolean,
    /** Whether the product is archived and no longer available. */
    is_archived: Schema.Boolean,
    /** The ID of the organization owning the product. */
    organization_id: Schema.String,
  }),
) {}

/**
 * OrderSubscription
 */
export class OrderSubscription extends Schema.Opaque<OrderSubscription>()(
  Schema.Struct({
    metadata: MetadataOutputType,
    /** Creation timestamp of the object. */
    created_at: Schema.DateTimeUtcFromString,
    /** Last modification timestamp of the object. */
    modified_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** The ID of the object. */
    id: Schema.String,
    /** The amount of the subscription. */
    amount: Schema.Number,
    /** The currency of the subscription. */
    currency: Schema.String,
    recurring_interval: openEnum(RecurringInterval),
    /** Number of interval units of the subscription. If this is set to 1 the charge will happen every interval (e.g. every month), if set to 2 it will be every other month, and so on. */
    recurring_interval_count: Schema.Number,
    status: openEnum(SubscriptionStatus),
    /** The start timestamp of the current billing period. */
    current_period_start: Schema.DateTimeUtcFromString,
    /** The end timestamp of the current billing period. */
    current_period_end: Schema.DateTimeUtcFromString,
    /** The start timestamp of the current meter period, if the product has a meter cycle set. Metered credits are granted and overage is settled on this cadence. */
    current_meter_period_start: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** The end timestamp of the current meter period, if the product has a meter cycle set. This is when credits next renew. */
    current_meter_period_end: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** The start timestamp of the trial period, if any. */
    trial_start: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** The end timestamp of the trial period, if any. */
    trial_end: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** Whether the subscription will be canceled at the end of the current period. */
    cancel_at_period_end: Schema.Boolean,
    /** The timestamp when the subscription was canceled. The subscription might still be active if `cancel_at_period_end` is `true`. */
    canceled_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** The timestamp when the subscription started. */
    started_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** The timestamp when the subscription will end. */
    ends_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** The timestamp when the subscription ended. */
    ended_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** The timestamp when the subscription entered `past_due` status. */
    past_due_at: Schema.optionalKey(Schema.NullOr(Schema.DateTimeUtcFromString)),
    /** Whether the subscription will be paused at the end of the current period. */
    pause_at_period_end: Schema.Boolean,
    /** The timestamp when the subscription was paused. */
    paused_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** The timestamp when a paused subscription is scheduled to automatically resume, if set. */
    resumes_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** The ID of the subscribed customer. */
    customer_id: Schema.String,
    /** The ID of the subscribed product. */
    product_id: Schema.String,
    /** The ID of the applied discount, if any. */
    discount_id: Schema.NullOr(Schema.String),
    checkout_id: Schema.NullOr(Schema.String),
    /** The number of seats for seat-based subscriptions. None for non-seat subscriptions. */
    seats: Schema.optionalKey(Schema.NullOr(Schema.Number)),
    /** The number of units for unit-based subscriptions. None for non-unit subscriptions. */
    units: Schema.NullOr(Schema.Number),
    customer_cancellation_reason: Schema.NullOr(openEnum(CustomerCancellationReason)),
    customer_cancellation_comment: Schema.NullOr(Schema.String),
  }),
) {}

/**
 * Order
 */
export class Order extends Schema.Opaque<Order>()(
  Schema.Struct({
    /** The ID of the object. */
    id: Schema.String,
    /** Creation timestamp of the object. */
    created_at: Schema.DateTimeUtcFromString,
    /** Last modification timestamp of the object. */
    modified_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    status: openEnum(OrderStatus),
    /** Whether the order has been paid for. */
    paid: Schema.Boolean,
    /** Amount in cents, before discounts and taxes. */
    subtotal_amount: Schema.Number,
    /** Discount amount in cents. */
    discount_amount: Schema.Number,
    /** Amount in cents, after discounts but before taxes. */
    net_amount: Schema.Number,
    /** Sales tax amount in cents. */
    tax_amount: Schema.Number,
    /** Amount in cents, after discounts and taxes. */
    total_amount: Schema.Number,
    /** Customer's balance amount applied to this invoice. Can increase the total amount paid, if the customer has a negative balance, or decrease it, if the customer has a positive balance.Amount in cents. */
    applied_balance_amount: Schema.Number,
    /** Amount in cents that is due for this order. */
    due_amount: Schema.Number,
    /** Amount refunded in cents. */
    refunded_amount: Schema.Number,
    /** Sales tax refunded in cents. */
    refunded_tax_amount: Schema.Number,
    currency: Schema.String,
    billing_reason: openEnum(OrderBillingReason),
    /** The name of the customer that should appear on the invoice. */
    billing_name: Schema.NullOr(Schema.String),
    billing_address: Schema.NullOr(Address),
    /** The invoice number associated with this order. `null` while the order is in `draft` status; assigned at finalize. */
    invoice_number: Schema.NullOr(Schema.String),
    /** Whether an invoice has been generated for this order. */
    is_invoice_generated: Schema.Boolean,
    /** The receipt number for this order. Set once the order is paid for organizations with receipts enabled. When set, a downloadable receipt PDF can be obtained via the receipt endpoint. */
    receipt_number: Schema.NullOr(Schema.String),
    /** Number of seats purchased (for seat-based one-time orders). */
    seats: Schema.optionalKey(Schema.NullOr(Schema.Number)),
    /** Number of units purchased (for unit-based pricing). */
    units: Schema.NullOr(Schema.Number),
    customer_id: Schema.String,
    product_id: Schema.NullOr(Schema.String),
    discount_id: Schema.NullOr(Schema.String),
    subscription_id: Schema.NullOr(Schema.String),
    checkout_id: Schema.NullOr(Schema.String),
    /** When the next automatic payment retry is scheduled. `null` if the order is not in dunning or all retries have been exhausted. */
    next_payment_attempt_at: Schema.optionalKey(Schema.NullOr(Schema.DateTimeUtcFromString)),
    metadata: MetadataOutputType,
    /** Key-value object storing custom field values. */
    custom_field_data: Schema.optionalKey(
      Schema.Record(
        Schema.String,
        Schema.Union([
          Schema.String,
          Schema.Number,
          Schema.Boolean,
          Schema.DateTimeUtcFromString,
          Schema.Null,
        ]),
      ),
    ),
    /** Platform fee amount in cents. */
    platform_fee_amount: Schema.Number,
    /** Currency of the platform fee. */
    platform_fee_currency: Schema.NullOr(Schema.String),
    customer: OrderCustomer,
    product: Schema.NullOr(OrderProduct),
    discount: Schema.NullOr(
      Schema.Union([
        DiscountFixedOnceForeverDurationBase,
        DiscountFixedRepeatDurationBase,
        DiscountPercentageOnceForeverDurationBase,
        DiscountPercentageRepeatDurationBase,
      ]),
    ),
    subscription: Schema.NullOr(OrderSubscription),
    /** Line items composing the order. */
    items: Schema.Array(OrderItemSchema),
    /** A summary description of the order. */
    description: Schema.String,
    /** Amount in cents that can still be refunded (net, before taxes). Accounts for any applied customer balance and previous refunds. */
    refundable_amount: Schema.Number,
    /** Sales tax in cents that would be refunded if the full refundable amount is refunded. */
    refundable_tax_amount: Schema.Number,
  }),
) {}

/**
 * ListResourceOrder
 */
export class ListResourceOrder extends Schema.Opaque<ListResourceOrder>()(
  Schema.Struct({
    items: Schema.Array(Order),
    pagination: Pagination,
  }),
) {}

/**
 * OrganizationCapabilities
 */
export class OrganizationCapabilities extends Schema.Opaque<OrganizationCapabilities>()(
  Schema.Struct({
    /** Whether the organization can accept new checkout payments. */
    checkout_payments: Schema.Boolean,
    /** Whether the organization can process subscription renewals. */
    subscription_renewals: Schema.Boolean,
    /** Whether the organization can withdraw its balance. */
    payouts: Schema.Boolean,
    /** Whether the organization can issue refunds. */
    refunds: Schema.Boolean,
    /** Whether the organization can access the API. */
    api_access: Schema.Boolean,
    /** Whether the organization can access the dashboard. */
    dashboard_access: Schema.Boolean,
  }),
) {}

/**
 * OrganizationCustomerEmailSettings
 */
export class OrganizationCustomerEmailSettings extends Schema.Opaque<OrganizationCustomerEmailSettings>()(
  Schema.Struct({
    order_confirmation: Schema.Boolean,
    payment_method_expiration_reminder: Schema.Boolean,
    subscription_cancellation: Schema.Boolean,
    subscription_confirmation: Schema.Boolean,
    subscription_cycled: Schema.Boolean,
    subscription_cycled_after_trial: Schema.Boolean,
    subscription_past_due: Schema.Boolean,
    subscription_paused: Schema.Boolean,
    subscription_resumed: Schema.Boolean,
    subscription_renewal_reminder: Schema.Boolean,
    subscription_revoked: Schema.Boolean,
    subscription_trial_conversion_reminder: Schema.Boolean,
    subscription_uncanceled: Schema.Boolean,
    subscription_updated: Schema.Boolean,
  }),
) {}

/**
 * `auto_accept_below_amount` is in Polar's settlement currency (USD).
 */
export class OrganizationDisputeSettings extends Schema.Opaque<OrganizationDisputeSettings>()(
  Schema.Struct({
    auto_accept_below_amount: Schema.NullOr(Schema.Number),
  }),
) {}

/**
 * OrganizationFeatureSettings
 */
export class OrganizationFeatureSettings extends Schema.Opaque<OrganizationFeatureSettings>()(
  Schema.Struct({
    /** If this organization has issue funding enabled */
    issue_funding_enabled: Schema.optionalKey(Schema.Boolean),
    /** If this organization has Wallets enabled */
    wallets_enabled: Schema.optionalKey(Schema.Boolean),
    /** If this organization has the Member model enabled */
    member_model_enabled: Schema.optionalKey(Schema.Boolean),
    /** If this organization has checkout localization enabled */
    checkout_localization_enabled: Schema.optionalKey(Schema.Boolean),
    /** Ordered list of metric slugs shown on the dashboard overview. */
    overview_metrics: Schema.optionalKey(Schema.NullOr(Schema.Array(Schema.String))),
    /** If this organization has access to reset proration behavior. */
    reset_proration_behavior_enabled: Schema.optionalKey(Schema.Boolean),
    /** If this organization can create and finalize draft orders via the API (off-session charges against a saved payment method). */
    off_session_charges_enabled: Schema.optionalKey(Schema.Boolean),
    /** If this organization can set a separate meter cycle on recurring products (a meter interval independent of the billing interval). */
    meter_cycling_enabled: Schema.optionalKey(Schema.Boolean),
    /** Enables the slack shared channel benefit */
    slack_benefit_enabled: Schema.optionalKey(Schema.Boolean),
    /** If this organization has preview access to new features enabled */
    preview_access_enabled: Schema.optionalKey(Schema.Boolean),
    /** If this organization has the disputes dashboard enabled */
    disputes_enabled: Schema.optionalKey(Schema.Boolean),
    /** If this organization has single sign-on configuration enabled */
    sso_enabled: Schema.optionalKey(Schema.Boolean),
    /** If this organization can set a threshold below which Polar concedes disputes on its behalf. Requires `disputes_enabled`. */
    dispute_auto_accept_enabled: Schema.optionalKey(Schema.Boolean),
    /** If this organization has the split product navigation (Billing / Compass / Customers) enabled in the dashboard */
    compass_enabled: Schema.optionalKey(Schema.Boolean),
    /** If this organization can migrate its billing from another provider (e.g. Stripe) to Polar. */
    merchant_migration_enabled: Schema.optionalKey(Schema.Boolean),
    /** If this organization's checkout tells the browser to refuse framing from any host outside its embed hosts. */
    frame_ancestors_enforced: Schema.optionalKey(Schema.Boolean),
  }),
) {}

/**
 * OrganizationSocialLink
 */
export class OrganizationSocialLink extends Schema.Opaque<OrganizationSocialLink>()(
  Schema.Struct({
    platform: openEnum(OrganizationSocialPlatforms),
    /** The URL to the organization profile */
    url: Schema.String,
  }),
) {}

/**
 * OrganizationSubscriptionSettings
 */
export class OrganizationSubscriptionSettings extends Schema.Opaque<OrganizationSubscriptionSettings>()(
  Schema.Struct({
    allow_multiple_subscriptions: Schema.Boolean,
    proration_behavior: openEnum(PublicSubscriptionProrationBehavior),
    benefit_revocation_grace_period: Schema.Number,
    prevent_trial_abuse: Schema.Boolean,
    allow_customer_updates: Schema.Boolean,
  }),
) {}

/**
 * Organization
 */
export class Organization extends Schema.Opaque<Organization>()(
  Schema.Struct({
    /** Creation timestamp of the object. */
    created_at: Schema.DateTimeUtcFromString,
    /** Last modification timestamp of the object. */
    modified_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** The ID of the object. */
    id: Schema.String,
    /** Organization name shown in checkout, customer portal, emails etc. */
    name: Schema.String,
    /** Unique organization slug in checkout, customer portal and credit card statements. */
    slug: Schema.String,
    /** Avatar URL shown in checkout, customer portal, emails etc. */
    avatar_url: Schema.NullOr(Schema.String),
    proration_behavior: openEnum(SubscriptionProrationBehavior),
    /** Whether customers can update their subscriptions from the customer portal. */
    allow_customer_updates: Schema.Boolean,
    /** Public support email. */
    email: Schema.NullOr(Schema.String),
    /** Official website of the organization. */
    website: Schema.NullOr(Schema.String),
    /** Links to social profiles. */
    socials: Schema.Array(OrganizationSocialLink),
    status: openEnum(OrganizationStatus),
    /** When the business details were submitted for review. */
    details_submitted_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** When Polar requested that the organization review and resubmit its onboarding information, if applicable. */
    onboarding_resubmission_requested_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** Whether members must access this organization through its SSO connection. */
    sso_enforced: Schema.Boolean,
    /** Default presentment currency. Used as fallback in checkout and customer portal, if the customer's local currency is not available. */
    default_presentment_currency: Schema.String,
    default_tax_behavior: openEnum(TaxBehaviorOption),
    /** Organization feature settings */
    feature_settings: Schema.NullOr(OrganizationFeatureSettings),
    subscription_settings: OrganizationSubscriptionSettings,
    customer_email_settings: OrganizationCustomerEmailSettings,
    customer_portal_settings: OrganizationCustomerPortalSettings,
    dispute_settings: OrganizationDisputeSettings,
    /** Hosts allowed to embed this organization's checkout. An entry is a host and an optional port, without a scheme: HTTPS is always allowed, and HTTP too for local hosts — `localhost`, any `.localhost` or `.local` name, and loopback or private addresses. `*.example.com` matches any subdomain, but not `example.com` itself. An app origin such as `chrome-extension://abcdef` carries its scheme, having no host to match on. */
    embed_hosts: Schema.Array(Schema.String),
    /** Two-letter country code (ISO 3166-1 alpha-2). */
    country: Schema.optionalKey(Schema.NullOr(openEnum(CountryAlpha2))),
    /** ID of the transactions account. */
    account_id: Schema.NullOr(Schema.String),
    /** ID of the payout account. */
    payout_account_id: Schema.NullOr(Schema.String),
    capabilities: OrganizationCapabilities,
  }),
) {}

/**
 * ListResourceOrganization
 */
export class ListResourceOrganization extends Schema.Opaque<ListResourceOrganization>()(
  Schema.Struct({
    items: Schema.Array(Organization),
    pagination: Pagination,
  }),
) {}

/**
 * Payment
 */
export const Payment = Schema.Union([CardPayment, KrCardPayment, GenericPayment]);
export type Payment = typeof Payment.Type;

/**
 * ListResourcePayment
 */
export class ListResourcePayment extends Schema.Opaque<ListResourcePayment>()(
  Schema.Struct({
    items: Schema.Array(Payment),
    pagination: Pagination,
  }),
) {}

/**
 * PaymentMethod
 */
export const PaymentMethod = Schema.Union([
  CustomerPaymentMethodCard,
  CustomerPaymentMethodKrCard,
  CustomerPaymentMethodGeneric,
]);
export type PaymentMethod = typeof PaymentMethod.Type;

/**
 * ListResourcePaymentMethod
 */
export class ListResourcePaymentMethod extends Schema.Opaque<ListResourcePaymentMethod>()(
  Schema.Struct({
    items: Schema.Array(PaymentMethod),
    pagination: Pagination,
  }),
) {}

/**
 * A product.
 */
export class Product extends Schema.Opaque<Product>()(
  Schema.Struct({
    /** The ID of the object. */
    id: Schema.String,
    /** Creation timestamp of the object. */
    created_at: Schema.DateTimeUtcFromString,
    /** Last modification timestamp of the object. */
    modified_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** The interval unit for the trial period. */
    trial_interval: Schema.NullOr(openEnum(TrialInterval)),
    /** The number of interval units for the trial period. */
    trial_interval_count: Schema.NullOr(Schema.Number),
    /** The name of the product. */
    name: Schema.String,
    /** The description of the product. */
    description: Schema.NullOr(Schema.String),
    visibility: openEnum(ProductVisibility),
    /** The recurring interval of the product. If `None`, the product is a one-time purchase. */
    recurring_interval: Schema.NullOr(openEnum(RecurringInterval)),
    /** Number of interval units of the subscription. If this is set to 1 the charge will happen every interval (e.g. every month), if set to 2 it will be every other month, and so on. None for one-time products. */
    recurring_interval_count: Schema.NullOr(Schema.Number),
    /** The meter cycle of the product, independent of the billing interval. If `None`, metered concerns follow the billing interval. */
    meter_interval: Schema.NullOr(openEnum(RecurringInterval)),
    /** Number of meter interval units. None when no meter cycle is set. */
    meter_interval_count: Schema.NullOr(Schema.Number),
    /** Whether the product is a subscription. */
    is_recurring: Schema.Boolean,
    /** Whether the product is archived and no longer available. */
    is_archived: Schema.Boolean,
    /** The ID of the organization owning the product. */
    organization_id: Schema.String,
    metadata: MetadataOutputType,
    /** List of prices for this product. */
    prices: Schema.Array(Schema.Union([LegacyRecurringProductPrice, ProductPrice])),
    /** List of benefits granted by the product. */
    benefits: Schema.Array(Benefit),
    /** List of medias associated to the product. */
    medias: Schema.Array(ProductMediaFileRead),
    /** List of custom fields attached to the product. */
    attached_custom_fields: Schema.Array(AttachedCustomField),
  }),
) {}

/**
 * ListResourceProduct
 */
export class ListResourceProduct extends Schema.Opaque<ListResourceProduct>()(
  Schema.Struct({
    items: Schema.Array(Product),
    pagination: Pagination,
  }),
) {}

/**
 * Dispute associated with a refund,
 * in case we prevented a dispute by issuing a refund.
 */
export class RefundDispute extends Schema.Opaque<RefundDispute>()(
  Schema.Struct({
    /** Creation timestamp of the object. */
    created_at: Schema.DateTimeUtcFromString,
    /** Last modification timestamp of the object. */
    modified_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** The ID of the object. */
    id: Schema.String,
    status: openEnum(DisputeStatus),
    /** Whether the dispute has been resolved (won or lost). */
    resolved: Schema.Boolean,
    /** Whether the dispute is closed (prevented, won, or lost). */
    closed: Schema.Boolean,
    /** Amount in cents disputed. */
    amount: Schema.Number,
    /** Tax amount in cents disputed. */
    tax_amount: Schema.Number,
    /** Currency code of the dispute. */
    currency: Schema.String,
    /** The reason for the dispute as reported by the card network (e.g. `fraudulent`, `product_not_received`). `None` until the processor reports it. */
    reason: Schema.NullOr(Schema.String),
    /** Deadline to submit evidence in response to the dispute. `None` when no response is required. */
    evidence_due_by: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** Whether the evidence submission deadline has passed. */
    past_due: Schema.Boolean,
    /** The ID of the order associated with the dispute. */
    order_id: Schema.String,
    /** The ID of the payment associated with the dispute. */
    payment_id: Schema.String,
  }),
) {}

/**
 * Refund
 */
export class Refund extends Schema.Opaque<Refund>()(
  Schema.Struct({
    /** Creation timestamp of the object. */
    created_at: Schema.DateTimeUtcFromString,
    /** Last modification timestamp of the object. */
    modified_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** The ID of the object. */
    id: Schema.String,
    metadata: MetadataOutputType,
    status: openEnum(RefundStatus),
    reason: openEnum(RefundReason),
    amount: Schema.Number,
    tax_amount: Schema.Number,
    currency: Schema.String,
    organization_id: Schema.String,
    order_id: Schema.String,
    subscription_id: Schema.NullOr(Schema.String),
    customer_id: Schema.String,
    revoke_benefits: Schema.Boolean,
    dispute: Schema.NullOr(RefundDispute),
  }),
) {}

/**
 * ListResourceRefund
 */
export class ListResourceRefund extends Schema.Opaque<ListResourceRefund>()(
  Schema.Struct({
    items: Schema.Array(Refund),
    pagination: Pagination,
  }),
) {}

/**
 * SubscriptionCustomer
 */
export class SubscriptionCustomer extends Schema.Opaque<SubscriptionCustomer>()(
  Schema.Struct({
    /** The ID of the customer. */
    id: Schema.String,
    /** Creation timestamp of the object. */
    created_at: Schema.DateTimeUtcFromString,
    /** Last modification timestamp of the object. */
    modified_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    metadata: MetadataOutputType,
    /** The ID of the customer in your system. This must be unique within the organization. Once set, it can't be updated. */
    external_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** The email address of the customer. This must be unique within the organization. */
    email: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** Whether the customer email address is verified. The address is automatically verified when the customer accesses the customer portal using their email address. */
    email_verified: Schema.Boolean,
    type: openEnum(CustomerType),
    /** The name of the customer. */
    name: Schema.NullOr(Schema.String),
    /** The name that should appear on the customer's invoices. Falls back to the customer name when not explicitly set. */
    billing_name: Schema.NullOr(Schema.String),
    billing_address: Schema.NullOr(Address),
    tax_id: Schema.NullOr(Schema.Array(Schema.Unknown)),
    locale: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** The ID of the organization owning the customer. */
    organization_id: Schema.String,
    /** The ID of the customer's default payment method, if any. Use the payment methods endpoint to retrieve its details. */
    default_payment_method_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** Timestamp for when the customer was soft deleted. */
    deleted_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** Timestamp of the first event ingested for this customer. Can predate `created_at`, and is null if no event was ever ingested. */
    first_user_event_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    avatar_url: Schema.NullOr(Schema.String),
  }),
) {}

/**
 * Current consumption and spending for a subscription meter.
 */
export class SubscriptionMeter extends Schema.Opaque<SubscriptionMeter>()(
  Schema.Struct({
    /** Creation timestamp of the object. */
    created_at: Schema.DateTimeUtcFromString,
    /** Last modification timestamp of the object. */
    modified_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** The ID of the object. */
    id: Schema.String,
    /** The number of consumed units so far in this billing period. */
    consumed_units: Schema.Number,
    /** The number of credited units so far in this billing period. */
    credited_units: Schema.Number,
    /** The amount due in cents so far in this billing period. */
    amount: Schema.Number,
    /** The ID of the meter. */
    meter_id: Schema.String,
    meter: Meter,
  }),
) {}

/**
 * Subscription
 */
export class Subscription extends Schema.Opaque<Subscription>()(
  Schema.Struct({
    /** Creation timestamp of the object. */
    created_at: Schema.DateTimeUtcFromString,
    /** Last modification timestamp of the object. */
    modified_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** The ID of the object. */
    id: Schema.String,
    /** The amount of the subscription. */
    amount: Schema.Number,
    /** The currency of the subscription. */
    currency: Schema.String,
    recurring_interval: openEnum(RecurringInterval),
    /** Number of interval units of the subscription. If this is set to 1 the charge will happen every interval (e.g. every month), if set to 2 it will be every other month, and so on. */
    recurring_interval_count: Schema.Number,
    status: openEnum(SubscriptionStatus),
    /** The start timestamp of the current billing period. */
    current_period_start: Schema.DateTimeUtcFromString,
    /** The end timestamp of the current billing period. */
    current_period_end: Schema.DateTimeUtcFromString,
    /** The start timestamp of the current meter period, if the product has a meter cycle set. Metered credits are granted and overage is settled on this cadence. */
    current_meter_period_start: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** The end timestamp of the current meter period, if the product has a meter cycle set. This is when credits next renew. */
    current_meter_period_end: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** The start timestamp of the trial period, if any. */
    trial_start: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** The end timestamp of the trial period, if any. */
    trial_end: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** Whether the subscription will be canceled at the end of the current period. */
    cancel_at_period_end: Schema.Boolean,
    /** The timestamp when the subscription was canceled. The subscription might still be active if `cancel_at_period_end` is `true`. */
    canceled_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** The timestamp when the subscription started. */
    started_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** The timestamp when the subscription will end. */
    ends_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** The timestamp when the subscription ended. */
    ended_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** The timestamp when the subscription entered `past_due` status. */
    past_due_at: Schema.optionalKey(Schema.NullOr(Schema.DateTimeUtcFromString)),
    /** Whether the subscription will be paused at the end of the current period. */
    pause_at_period_end: Schema.Boolean,
    /** The timestamp when the subscription was paused. */
    paused_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** The timestamp when a paused subscription is scheduled to automatically resume, if set. */
    resumes_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** The ID of the subscribed customer. */
    customer_id: Schema.String,
    /** The ID of the subscribed product. */
    product_id: Schema.String,
    /** The ID of the applied discount, if any. */
    discount_id: Schema.NullOr(Schema.String),
    checkout_id: Schema.NullOr(Schema.String),
    /** The number of seats for seat-based subscriptions. None for non-seat subscriptions. */
    seats: Schema.optionalKey(Schema.NullOr(Schema.Number)),
    /** The number of units for unit-based subscriptions. None for non-unit subscriptions. */
    units: Schema.NullOr(Schema.Number),
    customer_cancellation_reason: Schema.NullOr(openEnum(CustomerCancellationReason)),
    customer_cancellation_comment: Schema.NullOr(Schema.String),
    metadata: MetadataOutputType,
    /** Key-value object storing custom field values. */
    custom_field_data: Schema.optionalKey(
      Schema.Record(
        Schema.String,
        Schema.Union([
          Schema.String,
          Schema.Number,
          Schema.Boolean,
          Schema.DateTimeUtcFromString,
          Schema.Null,
        ]),
      ),
    ),
    customer: SubscriptionCustomer,
    product: Product,
    discount: Schema.NullOr(
      Schema.Union([
        DiscountFixedOnceForeverDurationBase,
        DiscountFixedRepeatDurationBase,
        DiscountPercentageOnceForeverDurationBase,
        DiscountPercentageRepeatDurationBase,
      ]),
    ),
    /** List of enabled prices for the subscription. */
    prices: Schema.Array(Schema.Union([LegacyRecurringProductPrice, ProductPrice])),
    /** List of meters associated with the subscription. */
    meters: Schema.Array(SubscriptionMeter),
    /** Pending subscription update that will be applied at the beginning of the next period. If `null`, there is no pending update. */
    pending_update: Schema.NullOr(PendingSubscriptionUpdate),
  }),
) {}

/**
 * ListResourceSubscription
 */
export class ListResourceSubscription extends Schema.Opaque<ListResourceSubscription>()(
  Schema.Struct({
    items: Schema.Array(Subscription),
    pagination: Pagination,
  }),
) {}

/**
 * A webhook event.
 *
 * An event represent something that happened in the system
 * that should be sent to the webhook endpoint.
 *
 * It can be delivered multiple times until it's marked as succeeded,
 * each one creating a new delivery.
 */
export class WebhookEvent extends Schema.Opaque<WebhookEvent>()(
  Schema.Struct({
    /** Creation timestamp of the object. */
    created_at: Schema.DateTimeUtcFromString,
    /** Last modification timestamp of the object. */
    modified_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** The ID of the object. */
    id: Schema.String,
    /** Last HTTP code returned by the URL. `null` if no delviery has been attempted or if the endpoint was unreachable. */
    last_http_code: Schema.optionalKey(Schema.NullOr(Schema.Number)),
    /** Whether this event was successfully delivered. `null` if no delivery has been attempted. */
    succeeded: Schema.optionalKey(Schema.NullOr(Schema.Boolean)),
    /** Whether this event was skipped because the webhook endpoint was disabled. */
    skipped: Schema.Boolean,
    /** The API version used in the payload of this event. */
    api_version: Schema.String,
    /** The payload of the webhook event. */
    payload: Schema.NullOr(Schema.String),
    type: openEnum(WebhookEventType),
    /** Whether this event is archived. Archived events can't be redelivered, and the payload is not accessible anymore. */
    is_archived: Schema.Boolean,
  }),
) {}

/**
 * A webhook delivery for a webhook event.
 */
export class WebhookDelivery extends Schema.Opaque<WebhookDelivery>()(
  Schema.Struct({
    /** Creation timestamp of the object. */
    created_at: Schema.DateTimeUtcFromString,
    /** Last modification timestamp of the object. */
    modified_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** The ID of the object. */
    id: Schema.String,
    /** Whether the delivery was successful. */
    succeeded: Schema.Boolean,
    /** The HTTP code returned by the URL. `null` if the endpoint was unreachable. */
    http_code: Schema.NullOr(Schema.Number),
    /** The response body returned by the URL, or the error message if the endpoint was unreachable. */
    response: Schema.NullOr(Schema.String),
    webhook_event: WebhookEvent,
  }),
) {}

/**
 * ListResourceWebhookDelivery
 */
export class ListResourceWebhookDelivery extends Schema.Opaque<ListResourceWebhookDelivery>()(
  Schema.Struct({
    items: Schema.Array(WebhookDelivery),
    pagination: Pagination,
  }),
) {}

/**
 * A webhook endpoint.
 */
export class WebhookEndpoint extends Schema.Opaque<WebhookEndpoint>()(
  Schema.Struct({
    /** Creation timestamp of the object. */
    created_at: Schema.DateTimeUtcFromString,
    /** Last modification timestamp of the object. */
    modified_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** The ID of the object. */
    id: Schema.String,
    /** The URL where the webhook events will be sent. */
    url: Schema.String,
    /** An optional name for the webhook endpoint to help organize and identify it. */
    name: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** The API version that'll be used in event payloads. */
    api_version: Schema.String,
    format: openEnum(WebhookFormat),
    /** The secret used to sign the webhook events. */
    secret: Schema.String,
    /** The organization ID associated with the webhook endpoint. */
    organization_id: Schema.String,
    /** The events that will trigger the webhook. */
    events: Schema.Array(openEnum(WebhookEventType)),
    /** Whether the webhook endpoint is enabled and will receive events. */
    enabled: Schema.Boolean,
    /** Whether Polar signs deliveries to this endpoint with Standard Webhooks. False means Polar's original HMAC over the UTF-8 bytes of the full secret. */
    uses_standard_webhook_signature: Schema.Boolean,
  }),
) {}

/**
 * ListResourceWebhookEndpoint
 */
export class ListResourceWebhookEndpoint extends Schema.Opaque<ListResourceWebhookEndpoint>()(
  Schema.Struct({
    items: Schema.Array(WebhookEndpoint),
    pagination: Pagination,
  }),
) {}

/**
 * ListResourceWithCursorPaginationEvent
 */
export class ListResourceWithCursorPaginationEvent extends Schema.Opaque<ListResourceWithCursorPaginationEvent>()(
  Schema.Struct({
    items: Schema.Array(Event),
    pagination: CursorPagination,
  }),
) {}

/**
 * ManualRetryLimitExceeded
 */
export class ManualRetryLimitExceeded extends Schema.Opaque<ManualRetryLimitExceeded>()(
  Schema.Struct({
    error: Schema.Literal("ManualRetryLimitExceeded"),
    detail: Schema.String,
  }),
) {}

/**
 * Schema for creating a new member nested under a customer.
 *
 * The customer is taken from the URL path, so it's not part of the body.
 */
export class MemberCreateFromCustomer extends Schema.Opaque<MemberCreateFromCustomer>()(
  Schema.Struct({
    /** The email address of the member. */
    email: Schema.String,
    name: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** The ID of the member in your system. This must be unique within the customer. */
    external_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** The role of the member within the customer. To assign or transfer ownership, use the member update endpoint. */
    role: Schema.optionalKey(Role),
  }),
) {}

/**
 * Schema for updating a member.
 */
export class MemberUpdate extends Schema.Opaque<MemberUpdate>()(
  Schema.Struct({
    name: Schema.optionalKey(Schema.NullOr(Schema.String)),
    email: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** The role of the member within the customer. */
    role: Schema.optionalKey(Schema.NullOr(MemberRole)),
  }),
) {}

/**
 * MetadataQuery
 */
export const MetadataQuery = Schema.Union([
  Schema.Record(
    Schema.String,
    Schema.Union([
      Schema.String,
      Schema.Number,
      Schema.Boolean,
      Schema.Array(Schema.String),
      Schema.Array(Schema.Number),
      Schema.Array(Schema.Boolean),
    ]),
  ),
  Schema.Null,
]);
export type MetadataQuery = typeof MetadataQuery.Type;

/**
 * MeterCreate
 */
export class MeterCreate extends Schema.Opaque<MeterCreate>()(
  Schema.Struct({
    /** Key-value object allowing you to store additional information. The key must be a string with a maximum length of **40 characters**. The value must be either: * A string with a maximum length of **500 characters** * An integer * A floating-point number * A boolean You can store up to **50 key-value pairs**. */
    metadata: Schema.optionalKey(
      Schema.Record(Schema.String, Schema.Union([Schema.String, Schema.Number, Schema.Boolean])),
    ),
    /** The name of the meter. Will be shown on customer's invoices and usage. */
    name: Schema.String,
    unit: Schema.optionalKey(MeterUnit),
    /** The label for the custom unit, e.g. 'request'. Required when unit is 'custom'. */
    custom_label: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** The multiplier to convert from the base unit to display scale, e.g. 1000 to display per 1000 units. Defaults to 1 when not provided. */
    custom_multiplier: Schema.optionalKey(Schema.NullOr(Schema.Number)),
    filter: Filter,
    /** The aggregation to apply on the filtered events to calculate the meter. */
    aggregation: Schema.Union([CountAggregation, PropertyAggregation, UniqueAggregation]),
    /** The ID of the organization owning the meter. **Required unless you use an organization token.** */
    organization_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
  }),
) {}

/**
 * MeterQuantity
 */
export class MeterQuantity extends Schema.Opaque<MeterQuantity>()(
  Schema.Struct({
    /** The timestamp for the current period. */
    timestamp: Schema.DateTimeUtcFromString,
    /** The quantity for the current period. */
    quantity: Schema.Number,
  }),
) {}

/**
 * MeterQuantities
 */
export class MeterQuantities extends Schema.Opaque<MeterQuantities>()(
  Schema.Struct({
    quantities: Schema.Array(MeterQuantity),
    /** The total quantity for the period. */
    total: Schema.Number,
  }),
) {}

/**
 * MeterUpdate
 */
export class MeterUpdate extends Schema.Opaque<MeterUpdate>()(
  Schema.Struct({
    /** Key-value object allowing you to store additional information. The key must be a string with a maximum length of **40 characters**. The value must be either: * A string with a maximum length of **500 characters** * An integer * A floating-point number * A boolean You can store up to **50 key-value pairs**. */
    metadata: Schema.optionalKey(
      Schema.Record(Schema.String, Schema.Union([Schema.String, Schema.Number, Schema.Boolean])),
    ),
    /** The name of the meter. Will be shown on customer's invoices and usage. */
    name: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** The unit of the meter. */
    unit: Schema.optionalKey(Schema.NullOr(MeterUnit)),
    /** The label for the custom unit. Required when unit is 'custom'. */
    custom_label: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** The multiplier to convert from base unit to display scale. Required when unit is 'custom'. */
    custom_multiplier: Schema.optionalKey(Schema.NullOr(Schema.Number)),
    /** The filter to apply on events that'll be used to calculate the meter. */
    filter: Schema.optionalKey(Schema.NullOr(Filter)),
    /** The aggregation to apply on the filtered events to calculate the meter. */
    aggregation: Schema.optionalKey(
      Schema.NullOr(Schema.Union([CountAggregation, PropertyAggregation, UniqueAggregation])),
    ),
    /** Whether the meter is archived. Archived meters are no longer used for billing. */
    is_archived: Schema.optionalKey(Schema.NullOr(Schema.Boolean)),
  }),
) {}

/**
 * Information about a metric.
 */
export class Metric extends Schema.Opaque<Metric>()(
  Schema.Struct({
    /** Unique identifier for the metric. */
    slug: Schema.String,
    /** Human-readable name for the metric. */
    display_name: Schema.String,
    type: openEnum(MetricType),
  }),
) {}

/**
 * Schema for creating a metrics dashboard.
 */
export class MetricDashboardCreate extends Schema.Opaque<MetricDashboardCreate>()(
  Schema.Struct({
    /** Display name for the dashboard. */
    name: Schema.String,
    /** List of metric slugs to display in this dashboard. */
    metrics: Schema.optionalKey(Schema.Array(Schema.String)),
    /** The ID of the organization owning this dashboard. **Required unless you use an organization token.** */
    organization_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
  }),
) {}

/**
 * A user-defined metrics dashboard.
 */
export class MetricDashboardSchema extends Schema.Opaque<MetricDashboardSchema>()(
  Schema.Struct({
    /** Creation timestamp of the object. */
    created_at: Schema.DateTimeUtcFromString,
    /** Last modification timestamp of the object. */
    modified_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    /** The ID of the object. */
    id: Schema.String,
    /** Display name for the dashboard. */
    name: Schema.String,
    /** List of metric slugs displayed in this dashboard. */
    metrics: Schema.Array(Schema.String),
    /** The ID of the organization owning this dashboard. */
    organization_id: Schema.String,
  }),
) {}

/**
 * Schema for updating a metrics dashboard.
 */
export class MetricDashboardUpdate extends Schema.Opaque<MetricDashboardUpdate>()(
  Schema.Struct({
    /** Display name for the dashboard. */
    name: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** List of metric slugs to display in this dashboard. */
    metrics: Schema.optionalKey(Schema.NullOr(Schema.Array(Schema.String))),
  }),
) {}

/**
 * MetricPeriod
 */
export class MetricPeriod extends Schema.Opaque<MetricPeriod>()(
  Schema.Struct({
    /** Timestamp of this period data. */
    timestamp: Schema.DateTimeUtcFromString,
    active_subscriptions: Schema.optionalKey(Schema.Union([Schema.Number, Schema.Null])),
    committed_subscriptions: Schema.optionalKey(Schema.Union([Schema.Number, Schema.Null])),
    monthly_recurring_revenue: Schema.optionalKey(Schema.Union([Schema.Number, Schema.Null])),
    trial_monthly_recurring_revenue: Schema.optionalKey(Schema.Union([Schema.Number, Schema.Null])),
    committed_monthly_recurring_revenue: Schema.optionalKey(
      Schema.Union([Schema.Number, Schema.Null]),
    ),
    trial_committed_monthly_recurring_revenue: Schema.optionalKey(
      Schema.Union([Schema.Number, Schema.Null]),
    ),
    average_revenue_per_user: Schema.optionalKey(Schema.Union([Schema.Number, Schema.Null])),
    checkouts: Schema.optionalKey(Schema.Union([Schema.Number, Schema.Null])),
    succeeded_checkouts: Schema.optionalKey(Schema.Union([Schema.Number, Schema.Null])),
    churned_subscriptions: Schema.optionalKey(Schema.Union([Schema.Number, Schema.Null])),
    churn_rate: Schema.optionalKey(Schema.Union([Schema.Number, Schema.Null])),
    seats_total: Schema.optionalKey(Schema.Union([Schema.Number, Schema.Null])),
    seats_claimed: Schema.optionalKey(Schema.Union([Schema.Number, Schema.Null])),
    seats_pending: Schema.optionalKey(Schema.Union([Schema.Number, Schema.Null])),
    seat_customers: Schema.optionalKey(Schema.Union([Schema.Number, Schema.Null])),
    new_seat_customers: Schema.optionalKey(Schema.Union([Schema.Number, Schema.Null])),
    churned_seat_customers: Schema.optionalKey(Schema.Union([Schema.Number, Schema.Null])),
    orders: Schema.optionalKey(Schema.Union([Schema.Number, Schema.Null])),
    revenue: Schema.optionalKey(Schema.Union([Schema.Number, Schema.Null])),
    net_revenue: Schema.optionalKey(Schema.Union([Schema.Number, Schema.Null])),
    cumulative_revenue: Schema.optionalKey(Schema.Union([Schema.Number, Schema.Null])),
    net_cumulative_revenue: Schema.optionalKey(Schema.Union([Schema.Number, Schema.Null])),
    costs: Schema.optionalKey(Schema.Union([Schema.Number, Schema.Null])),
    cumulative_costs: Schema.optionalKey(Schema.Union([Schema.Number, Schema.Null])),
    average_order_value: Schema.optionalKey(Schema.Union([Schema.Number, Schema.Null])),
    net_average_order_value: Schema.optionalKey(Schema.Union([Schema.Number, Schema.Null])),
    cost_per_user: Schema.optionalKey(Schema.Union([Schema.Number, Schema.Null])),
    active_user_by_event: Schema.optionalKey(Schema.Union([Schema.Number, Schema.Null])),
    one_time_products: Schema.optionalKey(Schema.Union([Schema.Number, Schema.Null])),
    one_time_products_revenue: Schema.optionalKey(Schema.Union([Schema.Number, Schema.Null])),
    one_time_products_net_revenue: Schema.optionalKey(Schema.Union([Schema.Number, Schema.Null])),
    new_subscriptions: Schema.optionalKey(Schema.Union([Schema.Number, Schema.Null])),
    new_subscriptions_revenue: Schema.optionalKey(Schema.Union([Schema.Number, Schema.Null])),
    new_subscriptions_net_revenue: Schema.optionalKey(Schema.Union([Schema.Number, Schema.Null])),
    renewed_subscriptions: Schema.optionalKey(Schema.Union([Schema.Number, Schema.Null])),
    renewed_subscriptions_revenue: Schema.optionalKey(Schema.Union([Schema.Number, Schema.Null])),
    renewed_subscriptions_net_revenue: Schema.optionalKey(
      Schema.Union([Schema.Number, Schema.Null]),
    ),
    canceled_subscriptions: Schema.optionalKey(Schema.Union([Schema.Number, Schema.Null])),
    canceled_subscriptions_customer_service: Schema.optionalKey(
      Schema.Union([Schema.Number, Schema.Null]),
    ),
    canceled_subscriptions_low_quality: Schema.optionalKey(
      Schema.Union([Schema.Number, Schema.Null]),
    ),
    canceled_subscriptions_missing_features: Schema.optionalKey(
      Schema.Union([Schema.Number, Schema.Null]),
    ),
    canceled_subscriptions_switched_service: Schema.optionalKey(
      Schema.Union([Schema.Number, Schema.Null]),
    ),
    canceled_subscriptions_too_complex: Schema.optionalKey(
      Schema.Union([Schema.Number, Schema.Null]),
    ),
    canceled_subscriptions_too_expensive: Schema.optionalKey(
      Schema.Union([Schema.Number, Schema.Null]),
    ),
    canceled_subscriptions_unused: Schema.optionalKey(Schema.Union([Schema.Number, Schema.Null])),
    canceled_subscriptions_other: Schema.optionalKey(Schema.Union([Schema.Number, Schema.Null])),
    annual_recurring_revenue: Schema.optionalKey(Schema.Union([Schema.Number, Schema.Null])),
    committed_annual_recurring_revenue: Schema.optionalKey(
      Schema.Union([Schema.Number, Schema.Null]),
    ),
    checkouts_conversion: Schema.optionalKey(Schema.Union([Schema.Number, Schema.Null])),
    ltv: Schema.optionalKey(Schema.Union([Schema.Number, Schema.Null])),
    gross_margin: Schema.optionalKey(Schema.Union([Schema.Number, Schema.Null])),
    gross_margin_percentage: Schema.optionalKey(Schema.Union([Schema.Number, Schema.Null])),
    cashflow: Schema.optionalKey(Schema.Union([Schema.Number, Schema.Null])),
    average_seats_per_customer: Schema.optionalKey(Schema.Union([Schema.Number, Schema.Null])),
    seat_utilization_rate: Schema.optionalKey(Schema.Union([Schema.Number, Schema.Null])),
  }),
) {}

/**
 * Metrics
 */
export class Metrics extends Schema.Opaque<Metrics>()(
  Schema.Struct({
    active_subscriptions: Schema.optionalKey(Schema.NullOr(Metric)),
    committed_subscriptions: Schema.optionalKey(Schema.NullOr(Metric)),
    monthly_recurring_revenue: Schema.optionalKey(Schema.NullOr(Metric)),
    trial_monthly_recurring_revenue: Schema.optionalKey(Schema.NullOr(Metric)),
    committed_monthly_recurring_revenue: Schema.optionalKey(Schema.NullOr(Metric)),
    trial_committed_monthly_recurring_revenue: Schema.optionalKey(Schema.NullOr(Metric)),
    average_revenue_per_user: Schema.optionalKey(Schema.NullOr(Metric)),
    checkouts: Schema.optionalKey(Schema.NullOr(Metric)),
    succeeded_checkouts: Schema.optionalKey(Schema.NullOr(Metric)),
    churned_subscriptions: Schema.optionalKey(Schema.NullOr(Metric)),
    churn_rate: Schema.optionalKey(Schema.NullOr(Metric)),
    seats_total: Schema.optionalKey(Schema.NullOr(Metric)),
    seats_claimed: Schema.optionalKey(Schema.NullOr(Metric)),
    seats_pending: Schema.optionalKey(Schema.NullOr(Metric)),
    seat_customers: Schema.optionalKey(Schema.NullOr(Metric)),
    new_seat_customers: Schema.optionalKey(Schema.NullOr(Metric)),
    churned_seat_customers: Schema.optionalKey(Schema.NullOr(Metric)),
    orders: Schema.optionalKey(Schema.NullOr(Metric)),
    revenue: Schema.optionalKey(Schema.NullOr(Metric)),
    net_revenue: Schema.optionalKey(Schema.NullOr(Metric)),
    cumulative_revenue: Schema.optionalKey(Schema.NullOr(Metric)),
    net_cumulative_revenue: Schema.optionalKey(Schema.NullOr(Metric)),
    costs: Schema.optionalKey(Schema.NullOr(Metric)),
    cumulative_costs: Schema.optionalKey(Schema.NullOr(Metric)),
    average_order_value: Schema.optionalKey(Schema.NullOr(Metric)),
    net_average_order_value: Schema.optionalKey(Schema.NullOr(Metric)),
    cost_per_user: Schema.optionalKey(Schema.NullOr(Metric)),
    active_user_by_event: Schema.optionalKey(Schema.NullOr(Metric)),
    one_time_products: Schema.optionalKey(Schema.NullOr(Metric)),
    one_time_products_revenue: Schema.optionalKey(Schema.NullOr(Metric)),
    one_time_products_net_revenue: Schema.optionalKey(Schema.NullOr(Metric)),
    new_subscriptions: Schema.optionalKey(Schema.NullOr(Metric)),
    new_subscriptions_revenue: Schema.optionalKey(Schema.NullOr(Metric)),
    new_subscriptions_net_revenue: Schema.optionalKey(Schema.NullOr(Metric)),
    renewed_subscriptions: Schema.optionalKey(Schema.NullOr(Metric)),
    renewed_subscriptions_revenue: Schema.optionalKey(Schema.NullOr(Metric)),
    renewed_subscriptions_net_revenue: Schema.optionalKey(Schema.NullOr(Metric)),
    canceled_subscriptions: Schema.optionalKey(Schema.NullOr(Metric)),
    canceled_subscriptions_customer_service: Schema.optionalKey(Schema.NullOr(Metric)),
    canceled_subscriptions_low_quality: Schema.optionalKey(Schema.NullOr(Metric)),
    canceled_subscriptions_missing_features: Schema.optionalKey(Schema.NullOr(Metric)),
    canceled_subscriptions_switched_service: Schema.optionalKey(Schema.NullOr(Metric)),
    canceled_subscriptions_too_complex: Schema.optionalKey(Schema.NullOr(Metric)),
    canceled_subscriptions_too_expensive: Schema.optionalKey(Schema.NullOr(Metric)),
    canceled_subscriptions_unused: Schema.optionalKey(Schema.NullOr(Metric)),
    canceled_subscriptions_other: Schema.optionalKey(Schema.NullOr(Metric)),
    annual_recurring_revenue: Schema.optionalKey(Schema.NullOr(Metric)),
    committed_annual_recurring_revenue: Schema.optionalKey(Schema.NullOr(Metric)),
    checkouts_conversion: Schema.optionalKey(Schema.NullOr(Metric)),
    ltv: Schema.optionalKey(Schema.NullOr(Metric)),
    gross_margin: Schema.optionalKey(Schema.NullOr(Metric)),
    gross_margin_percentage: Schema.optionalKey(Schema.NullOr(Metric)),
    cashflow: Schema.optionalKey(Schema.NullOr(Metric)),
    average_seats_per_customer: Schema.optionalKey(Schema.NullOr(Metric)),
    seat_utilization_rate: Schema.optionalKey(Schema.NullOr(Metric)),
  }),
) {}

/**
 * Date interval limit to get metrics for a given interval.
 */
export class MetricsIntervalLimit extends Schema.Opaque<MetricsIntervalLimit>()(
  Schema.Struct({
    /** Minimum number of days for this interval. */
    min_days: Schema.Number,
    /** Maximum number of days for this interval. */
    max_days: Schema.Number,
  }),
) {}

/**
 * Date interval limits to get metrics for each interval.
 */
export class MetricsIntervalsLimits extends Schema.Opaque<MetricsIntervalsLimits>()(
  Schema.Struct({
    hour: MetricsIntervalLimit,
    day: MetricsIntervalLimit,
    week: MetricsIntervalLimit,
    month: MetricsIntervalLimit,
    year: MetricsIntervalLimit,
  }),
) {}

/**
 * Date limits to get metrics.
 */
export class MetricsLimits extends Schema.Opaque<MetricsLimits>()(
  Schema.Struct({
    /** Minimum date to get metrics. */
    min_date: Schema.String,
    intervals: MetricsIntervalsLimits,
  }),
) {}

/**
 * MetricsTotals
 */
export class MetricsTotals extends Schema.Opaque<MetricsTotals>()(
  Schema.Struct({
    active_subscriptions: Schema.optionalKey(Schema.Union([Schema.Number, Schema.Null])),
    committed_subscriptions: Schema.optionalKey(Schema.Union([Schema.Number, Schema.Null])),
    monthly_recurring_revenue: Schema.optionalKey(Schema.Union([Schema.Number, Schema.Null])),
    trial_monthly_recurring_revenue: Schema.optionalKey(Schema.Union([Schema.Number, Schema.Null])),
    committed_monthly_recurring_revenue: Schema.optionalKey(
      Schema.Union([Schema.Number, Schema.Null]),
    ),
    trial_committed_monthly_recurring_revenue: Schema.optionalKey(
      Schema.Union([Schema.Number, Schema.Null]),
    ),
    average_revenue_per_user: Schema.optionalKey(Schema.Union([Schema.Number, Schema.Null])),
    checkouts: Schema.optionalKey(Schema.Union([Schema.Number, Schema.Null])),
    succeeded_checkouts: Schema.optionalKey(Schema.Union([Schema.Number, Schema.Null])),
    churned_subscriptions: Schema.optionalKey(Schema.Union([Schema.Number, Schema.Null])),
    churn_rate: Schema.optionalKey(Schema.Union([Schema.Number, Schema.Null])),
    seats_total: Schema.optionalKey(Schema.Union([Schema.Number, Schema.Null])),
    seats_claimed: Schema.optionalKey(Schema.Union([Schema.Number, Schema.Null])),
    seats_pending: Schema.optionalKey(Schema.Union([Schema.Number, Schema.Null])),
    seat_customers: Schema.optionalKey(Schema.Union([Schema.Number, Schema.Null])),
    new_seat_customers: Schema.optionalKey(Schema.Union([Schema.Number, Schema.Null])),
    churned_seat_customers: Schema.optionalKey(Schema.Union([Schema.Number, Schema.Null])),
    orders: Schema.optionalKey(Schema.Union([Schema.Number, Schema.Null])),
    revenue: Schema.optionalKey(Schema.Union([Schema.Number, Schema.Null])),
    net_revenue: Schema.optionalKey(Schema.Union([Schema.Number, Schema.Null])),
    cumulative_revenue: Schema.optionalKey(Schema.Union([Schema.Number, Schema.Null])),
    net_cumulative_revenue: Schema.optionalKey(Schema.Union([Schema.Number, Schema.Null])),
    costs: Schema.optionalKey(Schema.Union([Schema.Number, Schema.Null])),
    cumulative_costs: Schema.optionalKey(Schema.Union([Schema.Number, Schema.Null])),
    average_order_value: Schema.optionalKey(Schema.Union([Schema.Number, Schema.Null])),
    net_average_order_value: Schema.optionalKey(Schema.Union([Schema.Number, Schema.Null])),
    cost_per_user: Schema.optionalKey(Schema.Union([Schema.Number, Schema.Null])),
    active_user_by_event: Schema.optionalKey(Schema.Union([Schema.Number, Schema.Null])),
    one_time_products: Schema.optionalKey(Schema.Union([Schema.Number, Schema.Null])),
    one_time_products_revenue: Schema.optionalKey(Schema.Union([Schema.Number, Schema.Null])),
    one_time_products_net_revenue: Schema.optionalKey(Schema.Union([Schema.Number, Schema.Null])),
    new_subscriptions: Schema.optionalKey(Schema.Union([Schema.Number, Schema.Null])),
    new_subscriptions_revenue: Schema.optionalKey(Schema.Union([Schema.Number, Schema.Null])),
    new_subscriptions_net_revenue: Schema.optionalKey(Schema.Union([Schema.Number, Schema.Null])),
    renewed_subscriptions: Schema.optionalKey(Schema.Union([Schema.Number, Schema.Null])),
    renewed_subscriptions_revenue: Schema.optionalKey(Schema.Union([Schema.Number, Schema.Null])),
    renewed_subscriptions_net_revenue: Schema.optionalKey(
      Schema.Union([Schema.Number, Schema.Null]),
    ),
    canceled_subscriptions: Schema.optionalKey(Schema.Union([Schema.Number, Schema.Null])),
    canceled_subscriptions_customer_service: Schema.optionalKey(
      Schema.Union([Schema.Number, Schema.Null]),
    ),
    canceled_subscriptions_low_quality: Schema.optionalKey(
      Schema.Union([Schema.Number, Schema.Null]),
    ),
    canceled_subscriptions_missing_features: Schema.optionalKey(
      Schema.Union([Schema.Number, Schema.Null]),
    ),
    canceled_subscriptions_switched_service: Schema.optionalKey(
      Schema.Union([Schema.Number, Schema.Null]),
    ),
    canceled_subscriptions_too_complex: Schema.optionalKey(
      Schema.Union([Schema.Number, Schema.Null]),
    ),
    canceled_subscriptions_too_expensive: Schema.optionalKey(
      Schema.Union([Schema.Number, Schema.Null]),
    ),
    canceled_subscriptions_unused: Schema.optionalKey(Schema.Union([Schema.Number, Schema.Null])),
    canceled_subscriptions_other: Schema.optionalKey(Schema.Union([Schema.Number, Schema.Null])),
    annual_recurring_revenue: Schema.optionalKey(Schema.Union([Schema.Number, Schema.Null])),
    committed_annual_recurring_revenue: Schema.optionalKey(
      Schema.Union([Schema.Number, Schema.Null]),
    ),
    checkouts_conversion: Schema.optionalKey(Schema.Union([Schema.Number, Schema.Null])),
    ltv: Schema.optionalKey(Schema.Union([Schema.Number, Schema.Null])),
    gross_margin: Schema.optionalKey(Schema.Union([Schema.Number, Schema.Null])),
    gross_margin_percentage: Schema.optionalKey(Schema.Union([Schema.Number, Schema.Null])),
    cashflow: Schema.optionalKey(Schema.Union([Schema.Number, Schema.Null])),
    average_seats_per_customer: Schema.optionalKey(Schema.Union([Schema.Number, Schema.Null])),
    seat_utilization_rate: Schema.optionalKey(Schema.Union([Schema.Number, Schema.Null])),
  }),
) {}

/**
 * Metrics response schema.
 */
export class MetricsResponse extends Schema.Opaque<MetricsResponse>()(
  Schema.Struct({
    /** List of data for each timestamp. */
    periods: Schema.Array(MetricPeriod),
    totals: MetricsTotals,
    metrics: Metrics,
  }),
) {}

/**
 * MissingInvoiceBillingDetails
 */
export class MissingInvoiceBillingDetails extends Schema.Opaque<MissingInvoiceBillingDetails>()(
  Schema.Struct({
    error: Schema.Literal("MissingInvoiceBillingDetails"),
    detail: Schema.String,
  }),
) {}

/**
 * NotPermitted
 */
export class NotPermitted extends Schema.Opaque<NotPermitted>()(
  Schema.Struct({
    error: Schema.Literal("NotPermitted"),
    detail: Schema.String,
  }),
) {}

/**
 * OAuth2ClientConfiguration
 */
export class OAuth2ClientConfiguration extends Schema.Opaque<OAuth2ClientConfiguration>()(
  Schema.Struct({
    redirect_uris: Schema.Array(Schema.String),
    token_endpoint_auth_method: Schema.optionalKey(TokenEndpointAuthMethod),
    grant_types: Schema.optionalKey(
      Schema.Array(
        Schema.Union([Schema.Literal("authorization_code"), Schema.Literal("refresh_token")]),
      ),
    ),
    response_types: Schema.optionalKey(Schema.Array(Schema.Literal("code"))),
    scope: Schema.optionalKey(Schema.String),
    client_name: Schema.String,
    client_uri: Schema.optionalKey(Schema.NullOr(Schema.String)),
    logo_uri: Schema.optionalKey(Schema.NullOr(Schema.String)),
    tos_uri: Schema.optionalKey(Schema.NullOr(Schema.String)),
    policy_uri: Schema.optionalKey(Schema.NullOr(Schema.String)),
    default_sub_type: Schema.optionalKey(SubType),
  }),
) {}

/**
 * OAuth2ClientConfigurationUpdate
 */
export class OAuth2ClientConfigurationUpdate extends Schema.Opaque<OAuth2ClientConfigurationUpdate>()(
  Schema.Struct({
    redirect_uris: Schema.Array(Schema.String),
    token_endpoint_auth_method: Schema.optionalKey(TokenEndpointAuthMethod),
    grant_types: Schema.optionalKey(
      Schema.Array(
        Schema.Union([Schema.Literal("authorization_code"), Schema.Literal("refresh_token")]),
      ),
    ),
    response_types: Schema.optionalKey(Schema.Array(Schema.Literal("code"))),
    scope: Schema.optionalKey(Schema.String),
    client_name: Schema.String,
    client_uri: Schema.optionalKey(Schema.NullOr(Schema.String)),
    logo_uri: Schema.optionalKey(Schema.NullOr(Schema.String)),
    tos_uri: Schema.optionalKey(Schema.NullOr(Schema.String)),
    policy_uri: Schema.optionalKey(Schema.NullOr(Schema.String)),
    default_sub_type: Schema.optionalKey(SubType),
    client_id: Schema.String,
  }),
) {}

/**
 * OffSessionChargesNotEnabled
 */
export class OffSessionChargesNotEnabled extends Schema.Opaque<OffSessionChargesNotEnabled>()(
  Schema.Struct({
    error: Schema.Literal("OffSessionChargesNotEnabled"),
    detail: Schema.String,
  }),
) {}

/**
 * Schema to create a draft order for an off-session charge.
 */
export class OrderCreate extends Schema.Opaque<OrderCreate>()(
  Schema.Struct({
    /** Key-value object storing custom field values. */
    custom_field_data: Schema.optionalKey(
      Schema.Record(
        Schema.String,
        Schema.Union([Schema.String, Schema.Number, Schema.Boolean, DateTimeInput, Schema.Null]),
      ),
    ),
    /** Key-value object allowing you to store additional information. The key must be a string with a maximum length of **40 characters**. The value must be either: * A string with a maximum length of **500 characters** * An integer * A floating-point number * A boolean You can store up to **50 key-value pairs**. */
    metadata: Schema.optionalKey(
      Schema.Record(Schema.String, Schema.Union([Schema.String, Schema.Number, Schema.Boolean])),
    ),
    /** The ID of the organization the order belongs to. **Required unless you use an organization token.** The customer and product must belong to this organization. */
    organization_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** The ID of the customer the order is for. Must belong to the order's organization. */
    customer_id: Schema.String,
    /** The ID of the one-time product to charge for. Must belong to the order's organization. Only fixed-price, free and unit-based products are supported. */
    product_id: Schema.String,
    /** The currency to charge in (ISO 4217, lowercase, e.g. `usd`). Defaults to the organization's default currency; specify it to force a different one, or when the product isn't priced in the organization's default currency. */
    currency: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** A custom amount to charge, in the smallest currency unit. Overrides the product's price; defaults to the product's configured price (0 for free products). A positive amount must be at least the currency's minimum. Can't be combined with `units`. */
    amount: Schema.optionalKey(Schema.NullOr(Schema.Number)),
    /** The number of units to charge for. Required when the product has unit-based pricing, and rejected otherwise. The amount comes from the price's tiers. Can't be combined with `amount`. */
    units: Schema.optionalKey(Schema.NullOr(Schema.Number)),
    /** A custom description for the order's line item, shown on the invoice and receipt (e.g. `5,000 tokens`). Defaults to the product name. */
    description: Schema.optionalKey(Schema.NullOr(Schema.String)),
  }),
) {}

/**
 * Schema to finalize a draft order and trigger an off-session charge.
 */
export class OrderFinalize extends Schema.Opaque<OrderFinalize>()(
  Schema.Struct({
    /** ID of the payment method to charge. Must belong to the order's customer. Falls back to the customer's default payment method when unset. */
    payment_method_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
  }),
) {}

/**
 * Order's invoice data.
 */
export class OrderInvoice extends Schema.Opaque<OrderInvoice>()(
  Schema.Struct({
    /** The URL to the invoice. */
    url: Schema.String,
  }),
) {}

/**
 * OrderNotDraft
 */
export class OrderNotDraft extends Schema.Opaque<OrderNotDraft>()(
  Schema.Struct({
    error: Schema.Literal("OrderNotDraft"),
    detail: Schema.String,
  }),
) {}

/**
 * OrderNotEligibleForInvoice
 */
export class OrderNotEligibleForInvoice extends Schema.Opaque<OrderNotEligibleForInvoice>()(
  Schema.Struct({
    error: Schema.Literal("OrderNotEligibleForInvoice"),
    detail: Schema.String,
  }),
) {}

/**
 * OrderNotEligibleForRetry
 */
export class OrderNotEligibleForRetry extends Schema.Opaque<OrderNotEligibleForRetry>()(
  Schema.Struct({
    error: Schema.Literal("OrderNotEligibleForRetry"),
    detail: Schema.String,
  }),
) {}

/**
 * Order's receipt data.
 */
export class OrderReceipt extends Schema.Opaque<OrderReceipt>()(
  Schema.Struct({
    /** The URL to the receipt PDF. */
    url: Schema.String,
  }),
) {}

/**
 * Schema to update an order.
 */
export class OrderUpdate extends Schema.Opaque<OrderUpdate>()(
  Schema.Struct({
    /** The name of the customer that should appear on the invoice. */
    billing_name: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** The address of the customer that should appear on the invoice. Country and state fields cannot be updated. */
    billing_address: Schema.optionalKey(Schema.NullOr(AddressInput)),
  }),
) {}

/**
 * OrganizationCompanyLegalEntitySchema
 */
export class OrganizationCompanyLegalEntitySchema extends Schema.Opaque<OrganizationCompanyLegalEntitySchema>()(
  Schema.Struct({
    type: Schema.Literal("company"),
    registered_name: Schema.String,
  }),
) {}

/**
 * OrganizationDetails
 */
export class OrganizationDetails extends Schema.Opaque<OrganizationDetails>()(
  Schema.Struct({
    /** Brief information about you and your business. */
    about: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** Description of digital products being sold. */
    product_description: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** Categories of products being sold. */
    selling_categories: Schema.optionalKey(Schema.Array(Schema.String)),
    /** Pricing models used by the organization. */
    pricing_models: Schema.optionalKey(Schema.Array(Schema.String)),
    /** How the organization will integrate and use Polar. */
    intended_use: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** Main customer acquisition channels. */
    customer_acquisition: Schema.optionalKey(Schema.Array(Schema.String)),
    /** Estimated revenue in the next 12 months */
    future_annual_revenue: Schema.optionalKey(Schema.NullOr(Schema.Number)),
    /** Switching from another platform? */
    switching: Schema.optionalKey(Schema.Boolean),
    /** Which platform the organization is migrating from. */
    switching_from: Schema.optionalKey(
      Schema.NullOr(
        Schema.Union([
          Schema.Literal("paddle"),
          Schema.Literal("lemon_squeezy"),
          Schema.Literal("gumroad"),
          Schema.Literal("stripe"),
          Schema.Literal("other"),
        ]),
      ),
    ),
    /** Revenue from last year if applicable. */
    previous_annual_revenue: Schema.optionalKey(Schema.NullOr(Schema.Number)),
  }),
) {}

/**
 * Feature settings that organizations can update themselves.
 *
 * Other feature settings are managed by Polar staff: they're ignored if
 * provided and keep their current value.
 */
export class OrganizationFeatureSettingsUpdate extends Schema.Opaque<OrganizationFeatureSettingsUpdate>()(
  Schema.Struct({
    /** If this organization has the Member model enabled */
    member_model_enabled: Schema.optionalKey(Schema.Boolean),
    /** If this organization has checkout localization enabled */
    checkout_localization_enabled: Schema.optionalKey(Schema.Boolean),
    /** Ordered list of metric slugs shown on the dashboard overview. */
    overview_metrics: Schema.optionalKey(Schema.NullOr(Schema.Array(Schema.String))),
  }),
) {}

/**
 * OrganizationIndividualLegalEntitySchema
 */
export class OrganizationIndividualLegalEntitySchema extends Schema.Opaque<OrganizationIndividualLegalEntitySchema>()(
  Schema.Struct({
    type: Schema.Literal("individual"),
  }),
) {}

/**
 * OrganizationCreate
 */
export class OrganizationCreate extends Schema.Opaque<OrganizationCreate>()(
  Schema.Struct({
    name: Schema.String,
    slug: Schema.String,
    avatar_url: Schema.optionalKey(Schema.NullOr(Schema.String)),
    legal_entity: Schema.optionalKey(
      Schema.NullOr(
        Schema.Union([
          OrganizationIndividualLegalEntitySchema,
          OrganizationCompanyLegalEntitySchema,
        ]),
      ),
    ),
    /** Public support email. */
    email: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** Official website of the organization. */
    website: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** Link to social profiles. */
    socials: Schema.optionalKey(Schema.NullOr(Schema.Array(OrganizationSocialLink))),
    /** Additional, private, business details Polar needs about active organizations for compliance (KYC). */
    details: Schema.optionalKey(Schema.NullOr(OrganizationDetails)),
    /** Two-letter country code (ISO 3166-1 alpha-2). */
    country: Schema.optionalKey(Schema.NullOr(CountryAlpha2Input)),
    feature_settings: Schema.optionalKey(Schema.NullOr(OrganizationFeatureSettingsUpdate)),
    subscription_settings: Schema.optionalKey(Schema.NullOr(OrganizationSubscriptionSettings)),
    customer_email_settings: Schema.optionalKey(Schema.NullOr(OrganizationCustomerEmailSettings)),
    customer_portal_settings: Schema.optionalKey(Schema.NullOr(OrganizationCustomerPortalSettings)),
    default_presentment_currency: Schema.optionalKey(PresentmentCurrency),
    default_tax_behavior: Schema.optionalKey(TaxBehaviorOption),
  }),
) {}

/**
 * OrganizationDisputeSettingsUpdate
 */
export class OrganizationDisputeSettingsUpdate extends Schema.Opaque<OrganizationDisputeSettingsUpdate>()(
  Schema.Struct({
    /** Concede disputes below this amount, in USD cents, without asking the organization. A dispute charged in another currency converts at the rate its payment settled at. `null` turns it off. The disputed amount and the processor's dispute fee are still deducted. */
    auto_accept_below_amount: Schema.optionalKey(Schema.NullOr(Schema.Number)),
  }),
) {}

/**
 * OrganizationNotReadyForPayments
 */
export class OrganizationNotReadyForPayments extends Schema.Opaque<OrganizationNotReadyForPayments>()(
  Schema.Struct({
    error: Schema.Literal("OrganizationNotReadyForPayments"),
    detail: Schema.String,
  }),
) {}

/**
 * OrganizationUpdate
 */
export class OrganizationUpdate extends Schema.Opaque<OrganizationUpdate>()(
  Schema.Struct({
    name: Schema.optionalKey(Schema.NullOr(Schema.String)),
    avatar_url: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** Public support email. */
    email: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** Official website of the organization. */
    website: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** Links to social profiles. */
    socials: Schema.optionalKey(Schema.NullOr(Schema.Array(OrganizationSocialLink))),
    /** Additional, private, business details Polar needs about active organizations for compliance (KYC). */
    details: Schema.optionalKey(Schema.NullOr(OrganizationDetails)),
    /** Two-letter country code (ISO 3166-1 alpha-2). */
    country: Schema.optionalKey(Schema.NullOr(CountryAlpha2Input)),
    feature_settings: Schema.optionalKey(Schema.NullOr(OrganizationFeatureSettingsUpdate)),
    subscription_settings: Schema.optionalKey(Schema.NullOr(OrganizationSubscriptionSettings)),
    customer_email_settings: Schema.optionalKey(Schema.NullOr(OrganizationCustomerEmailSettings)),
    customer_portal_settings: Schema.optionalKey(Schema.NullOr(OrganizationCustomerPortalSettings)),
    dispute_settings: Schema.optionalKey(Schema.NullOr(OrganizationDisputeSettingsUpdate)),
    embed_hosts: Schema.optionalKey(Schema.NullOr(Schema.Array(Schema.String))),
    /** Default presentment currency for the organization */
    default_presentment_currency: Schema.optionalKey(Schema.NullOr(PresentmentCurrency)),
    /** Default tax behavior applied on products. */
    default_tax_behavior: Schema.optionalKey(Schema.NullOr(TaxBehaviorOption)),
    /** Whether members must access this organization through its SSO connection. Turning this on requires an active SSO session for this organization and at least one enabled SSO connection. */
    sso_enforced: Schema.optionalKey(Schema.NullOr(Schema.Boolean)),
  }),
) {}

/**
 * PauseResumeNotAllowed
 */
export class PauseResumeNotAllowed extends Schema.Opaque<PauseResumeNotAllowed>()(
  Schema.Struct({
    error: Schema.Literal("PauseResumeNotAllowed"),
    detail: Schema.String,
  }),
) {}

/**
 * PaymentActionRequired
 */
export class PaymentActionRequired extends Schema.Opaque<PaymentActionRequired>()(
  Schema.Struct({
    error: Schema.Literal("PaymentActionRequired"),
    detail: Schema.String,
  }),
) {}

/**
 * PaymentAlreadyInProgress
 */
export class PaymentAlreadyInProgress extends Schema.Opaque<PaymentAlreadyInProgress>()(
  Schema.Struct({
    error: Schema.Literal("PaymentAlreadyInProgress"),
    detail: Schema.String,
  }),
) {}

/**
 * PaymentError
 */
export class PaymentError extends Schema.Opaque<PaymentError>()(
  Schema.Struct({
    error: Schema.Literal("PaymentError"),
    detail: Schema.String,
  }),
) {}

/**
 * PaymentFailed
 */
export class PaymentFailed extends Schema.Opaque<PaymentFailed>()(
  Schema.Struct({
    error: Schema.Literal("PaymentFailed"),
    detail: Schema.String,
  }),
) {}

/**
 * PaymentMethodInUseByActiveSubscription
 */
export class PaymentMethodInUseByActiveSubscription extends Schema.Opaque<PaymentMethodInUseByActiveSubscription>()(
  Schema.Struct({
    error: Schema.Literal("PaymentMethodInUseByActiveSubscription"),
    detail: Schema.String,
  }),
) {}

/**
 * PaymentMethodRequired
 */
export class PaymentMethodRequired extends Schema.Opaque<PaymentMethodRequired>()(
  Schema.Struct({
    error: Schema.Literal("PaymentMethodRequired"),
    detail: Schema.String,
  }),
) {}

/**
 * PaymentMethodSetupFailed
 */
export class PaymentMethodSetupFailed extends Schema.Opaque<PaymentMethodSetupFailed>()(
  Schema.Struct({
    error: Schema.Literal("PaymentMethodSetupFailed"),
    detail: Schema.String,
  }),
) {}

/**
 * Information about the authenticated portal user.
 */
export class PortalAuthenticatedUser extends Schema.Opaque<PortalAuthenticatedUser>()(
  Schema.Struct({
    /** Type of authenticated user: 'customer' or 'member' */
    type: Schema.String,
    /** User's name, if available. */
    name: Schema.NullOr(Schema.String),
    /** User's email address. */
    email: Schema.String,
    /** Associated customer ID. */
    customer_id: Schema.String,
    /** Member ID. Only set for members. */
    member_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** Member role (owner, billing_manager, member). Only set for members. */
    role: Schema.optionalKey(Schema.NullOr(Schema.String)),
  }),
) {}

/**
 * Schema to update the benefits granted by a product.
 */
export class ProductBenefitsUpdate extends Schema.Opaque<ProductBenefitsUpdate>()(
  Schema.Struct({
    /** List of benefit IDs. Each one must be on the same organization as the product. */
    benefits: Schema.Array(Schema.String),
  }),
) {}

/**
 * ProductCreateOneTime
 */
export class ProductCreateOneTime extends Schema.Opaque<ProductCreateOneTime>()(
  Schema.Struct({
    /** Key-value object allowing you to store additional information. The key must be a string with a maximum length of **40 characters**. The value must be either: * A string with a maximum length of **500 characters** * An integer * A floating-point number * A boolean You can store up to **50 key-value pairs**. */
    metadata: Schema.optionalKey(
      Schema.Record(Schema.String, Schema.Union([Schema.String, Schema.Number, Schema.Boolean])),
    ),
    /** The name of the product. */
    name: Schema.String,
    /** The description of the product. */
    description: Schema.optionalKey(Schema.NullOr(Schema.String)),
    visibility: Schema.optionalKey(ProductVisibility),
    /** List of available prices for this product. It may combine at most one fixed price with one seat-based price (billed as `fixed + seat_charge`), or contain a single custom or free price, plus any number of metered prices. A free price cannot be combined with other prices, and a custom price cannot be combined with a fixed or seat-based price. Metered prices are not supported on one-time purchase products. */
    prices: Schema.Array(
      Schema.Union([
        ProductPriceFixedCreate,
        ProductPriceCustomCreate,
        ProductPriceSeatBasedCreate,
        ProductPriceUnitBasedCreate,
        ProductPriceMeteredUnitCreate,
        ProductPriceMeteredTiersCreate,
      ]),
    ),
    /** List of file IDs. Each one must be on the same organization as the product, of type `product_media` and correctly uploaded. */
    medias: Schema.optionalKey(Schema.NullOr(Schema.Array(Schema.String))),
    /** List of custom fields to attach. */
    attached_custom_fields: Schema.optionalKey(Schema.Array(AttachedCustomFieldCreate)),
    /** The ID of the organization owning the product. **Required unless you use an organization token.** */
    organization_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** States that the product is a one-time purchase. */
    recurring_interval: Schema.optionalKey(Schema.Null),
    /** One-time products don't have a recurring interval count. */
    recurring_interval_count: Schema.optionalKey(Schema.Null),
  }),
) {}

/**
 * ProductCreateRecurring
 */
export class ProductCreateRecurring extends Schema.Opaque<ProductCreateRecurring>()(
  Schema.Struct({
    /** Key-value object allowing you to store additional information. The key must be a string with a maximum length of **40 characters**. The value must be either: * A string with a maximum length of **500 characters** * An integer * A floating-point number * A boolean You can store up to **50 key-value pairs**. */
    metadata: Schema.optionalKey(
      Schema.Record(Schema.String, Schema.Union([Schema.String, Schema.Number, Schema.Boolean])),
    ),
    /** The name of the product. */
    name: Schema.String,
    /** The description of the product. */
    description: Schema.optionalKey(Schema.NullOr(Schema.String)),
    visibility: Schema.optionalKey(ProductVisibility),
    /** List of available prices for this product. It may combine at most one fixed price with one seat-based price (billed as `fixed + seat_charge`), or contain a single custom or free price, plus any number of metered prices. A free price cannot be combined with other prices, and a custom price cannot be combined with a fixed or seat-based price. Metered prices are not supported on one-time purchase products. */
    prices: Schema.Array(
      Schema.Union([
        ProductPriceFixedCreate,
        ProductPriceCustomCreate,
        ProductPriceSeatBasedCreate,
        ProductPriceUnitBasedCreate,
        ProductPriceMeteredUnitCreate,
        ProductPriceMeteredTiersCreate,
      ]),
    ),
    /** List of file IDs. Each one must be on the same organization as the product, of type `product_media` and correctly uploaded. */
    medias: Schema.optionalKey(Schema.NullOr(Schema.Array(Schema.String))),
    /** List of custom fields to attach. */
    attached_custom_fields: Schema.optionalKey(Schema.Array(AttachedCustomFieldCreate)),
    /** The ID of the organization owning the product. **Required unless you use an organization token.** */
    organization_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** The interval unit for the trial period. */
    trial_interval: Schema.optionalKey(Schema.NullOr(TrialInterval)),
    /** The number of interval units for the trial period. */
    trial_interval_count: Schema.optionalKey(Schema.NullOr(Schema.Number)),
    recurring_interval: RecurringInterval,
    /** Number of interval units of the subscription. If this is set to 1 the charge will happen every interval (e.g. every month), if set to 2 it will be every other month, and so on. */
    recurring_interval_count: Schema.optionalKey(Schema.Number),
    /** Optional meter cycle, independent of the billing interval. When set, overage settlement, meter resets and meter-credit grants run on this cadence rather than the billing interval — e.g. yearly billing with monthly credits. It must evenly divide the billing interval. If `None`, metered concerns follow the billing interval. **Once set, it can't be changed.** */
    meter_interval: Schema.optionalKey(Schema.NullOr(RecurringInterval)),
    /** Number of meter interval units. Defaults to 1 when `meter_interval` is set. Ignored when `meter_interval` is `None`. */
    meter_interval_count: Schema.optionalKey(Schema.NullOr(Schema.Number)),
  }),
) {}

/**
 * ProductCreate
 */
export const ProductCreate = Schema.Union([ProductCreateRecurring, ProductCreateOneTime]);
export type ProductCreate = typeof ProductCreate.Type;

/**
 * Schema to update a product.
 */
export class ProductUpdate extends Schema.Opaque<ProductUpdate>()(
  Schema.Struct({
    /** Key-value object allowing you to store additional information. The key must be a string with a maximum length of **40 characters**. The value must be either: * A string with a maximum length of **500 characters** * An integer * A floating-point number * A boolean You can store up to **50 key-value pairs**. */
    metadata: Schema.optionalKey(
      Schema.Record(Schema.String, Schema.Union([Schema.String, Schema.Number, Schema.Boolean])),
    ),
    /** The interval unit for the trial period. */
    trial_interval: Schema.optionalKey(Schema.NullOr(TrialInterval)),
    /** The number of interval units for the trial period. */
    trial_interval_count: Schema.optionalKey(Schema.NullOr(Schema.Number)),
    name: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** The description of the product. */
    description: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** The recurring interval of the product. If `None`, the product is a one-time purchase. **Can only be set on legacy recurring products. Once set, it can't be changed.** */
    recurring_interval: Schema.optionalKey(Schema.NullOr(RecurringInterval)),
    /** Number of interval units of the subscription. If this is set to 1 the charge will happen every interval (e.g. every month), if set to 2 it will be every other month, and so on. Once set, it can't be changed.** */
    recurring_interval_count: Schema.optionalKey(Schema.NullOr(Schema.Number)),
    /** Whether the product is archived. If `true`, the product won't be available for purchase anymore. Existing customers will still have access to their benefits, and subscriptions will continue normally. */
    is_archived: Schema.optionalKey(Schema.NullOr(Schema.Boolean)),
    /** The visibility of the product. */
    visibility: Schema.optionalKey(Schema.NullOr(ProductVisibility)),
    /** List of available prices for this product. If you want to keep existing prices, include them in the list as an `ExistingProductPrice` object. */
    prices: Schema.optionalKey(
      Schema.NullOr(
        Schema.Array(
          Schema.Union([
            ExistingProductPrice,
            Schema.Union([
              ProductPriceFixedCreate,
              ProductPriceCustomCreate,
              ProductPriceSeatBasedCreate,
              ProductPriceUnitBasedCreate,
              ProductPriceMeteredUnitCreate,
              ProductPriceMeteredTiersCreate,
            ]),
          ]),
        ),
      ),
    ),
    /** List of file IDs. Each one must be on the same organization as the product, of type `product_media` and correctly uploaded. */
    medias: Schema.optionalKey(Schema.NullOr(Schema.Array(Schema.String))),
    attached_custom_fields: Schema.optionalKey(
      Schema.NullOr(Schema.Array(AttachedCustomFieldCreate)),
    ),
  }),
) {}

/**
 * RefundCreate
 */
export class RefundCreate extends Schema.Opaque<RefundCreate>()(
  Schema.Struct({
    /** Key-value object allowing you to store additional information. The key must be a string with a maximum length of **40 characters**. The value must be either: * A string with a maximum length of **500 characters** * An integer * A floating-point number * A boolean You can store up to **50 key-value pairs**. */
    metadata: Schema.optionalKey(
      Schema.Record(Schema.String, Schema.Union([Schema.String, Schema.Number, Schema.Boolean])),
    ),
    order_id: Schema.String,
    /** Reason for the refund. */
    reason: Reason,
    /** Amount to refund in cents. Minimum is 1. */
    amount: Schema.Number,
    /** An internal comment about the refund. */
    comment: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** Should this refund trigger the associated customer benefits to be revoked? **Note:** Only allowed in case the `order` is a one-time purchase. Subscriptions automatically revoke customer benefits once the subscription itself is revoked, i.e fully canceled. */
    revoke_benefits: Schema.optionalKey(Schema.Boolean),
  }),
) {}

/**
 * RefundedAlready
 */
export class RefundedAlready extends Schema.Opaque<RefundedAlready>()(
  Schema.Struct({
    error: Schema.Literal("RefundedAlready"),
    detail: Schema.String,
  }),
) {}

/**
 * ResourceNotFound
 */
export class ResourceNotFound extends Schema.Opaque<ResourceNotFound>()(
  Schema.Struct({
    error: Schema.Literal("ResourceNotFound"),
    detail: Schema.String,
  }),
) {}

/**
 * RevokeTokenResponse
 */
export class RevokeTokenResponse extends Schema.Opaque<RevokeTokenResponse>()(Schema.Struct({})) {}

/**
 * RotateNotPermitted
 */
export class RotateNotPermitted extends Schema.Opaque<RotateNotPermitted>()(
  Schema.Struct({
    error: Schema.Literal("RotateNotPermitted"),
    detail: Schema.String,
  }),
) {}

/**
 * RotatedLicenseKey
 */
export class RotatedLicenseKey extends Schema.Opaque<RotatedLicenseKey>()(
  Schema.Struct({
    /** The ID of the object. */
    id: Schema.String,
    /** Creation timestamp of the object. */
    created_at: Schema.DateTimeUtcFromString,
    /** Last modification timestamp of the object. */
    modified_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    organization_id: Schema.String,
    customer_id: Schema.String,
    customer: LicenseKeyCustomer,
    /** The ID of the seat member holding this key, if any. */
    member_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** The seat member holding this key. Set for keys granted through a seat-based product; `null` for keys granted to the customer directly. */
    member: Schema.optionalKey(Schema.NullOr(LicenseKeyMember)),
    /** The benefit ID. */
    benefit_id: Schema.String,
    key: Schema.String,
    display_key: Schema.String,
    status: openEnum(Status),
    limit_activations: Schema.NullOr(Schema.Number),
    usage: Schema.Number,
    limit_usage: Schema.NullOr(Schema.Number),
    validations: Schema.Number,
    last_validated_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    expires_at: Schema.NullOr(Schema.DateTimeUtcFromString),
  }),
) {}

/**
 * SSOEnforcementRequiresConnection
 */
export class SSOEnforcementRequiresConnection extends Schema.Opaque<SSOEnforcementRequiresConnection>()(
  Schema.Struct({
    error: Schema.Literal("SSOEnforcementRequiresConnection"),
    detail: Schema.String,
  }),
) {}

/**
 * SeatAssign
 */
export class SeatAssign extends Schema.Opaque<SeatAssign>()(
  Schema.Struct({
    /** Subscription ID. Required if neither order_id nor checkout_id is provided. */
    subscription_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** Order ID for one-time purchases. Required if subscription_id is not provided. */
    order_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** Email of the customer to assign the seat to */
    email: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** External customer ID for the seat assignment */
    external_customer_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** Customer ID for the seat assignment */
    customer_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** External member ID for the seat assignment. Can be used alone (lookup existing member) or with email (create/validate member). */
    external_member_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** Member ID for the seat assignment. */
    member_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** Additional metadata for the seat (max 10 keys, 1KB total) */
    metadata: Schema.optionalKey(Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown))),
    /** If true, the seat will be immediately claimed without sending an invitation email. API-only feature. */
    immediate_claim: Schema.optionalKey(Schema.Boolean),
  }),
) {}

/**
 * SeatClaim
 */
export class SeatClaim extends Schema.Opaque<SeatClaim>()(
  Schema.Struct({
    /** Invitation token to claim the seat */
    invitation_token: Schema.String,
  }),
) {}

/**
 * Read-only information about a seat claim invitation.
 * Safe for email scanners - no side effects when fetched.
 */
export class SeatClaimInfo extends Schema.Opaque<SeatClaimInfo>()(
  Schema.Struct({
    /** Name of the product */
    product_name: Schema.String,
    /** ID of the product */
    product_id: Schema.String,
    /** Name of the organization */
    organization_name: Schema.String,
    /** Slug of the organization */
    organization_slug: Schema.String,
    /** Email of the customer assigned to this seat */
    customer_email: Schema.String,
    /** Whether the seat can be claimed */
    can_claim: Schema.Boolean,
  }),
) {}

/**
 * SeatsList
 */
export class SeatsList extends Schema.Opaque<SeatsList>()(
  Schema.Struct({
    /** List of seats */
    seats: Schema.Array(CustomerSeat),
    /** Number of available seats */
    available_seats: Schema.Number,
    /** Total number of seats for the subscription */
    total_seats: Schema.Number,
  }),
) {}

/**
 * SubscriptionCancel
 */
export class SubscriptionCancel extends Schema.Opaque<SubscriptionCancel>()(
  Schema.Struct({
    /** Customer reason for cancellation. Helpful to monitor reasons behind churn for future improvements. Only set this in case your own service is requesting the reason from the customer. Or you know based on direct conversations, i.e support, with the customer. * `too_expensive`: Too expensive for the customer. * `missing_features`: Customer is missing certain features. * `switched_service`: Customer switched to another service. * `unused`: Customer is not using it enough. * `customer_service`: Customer is not satisfied with the customer service. * `low_quality`: Customer is unhappy with the quality. * `too_complex`: Customer considers the service too complicated. * `other`: Other reason(s). */
    customer_cancellation_reason: Schema.optionalKey(Schema.NullOr(CustomerCancellationReason)),
    /** Customer feedback and why they decided to cancel. **IMPORTANT:** Do not use this to store internal notes! It's intended to be input from the customer and is therefore also available in their Polar purchases library. Only set this in case your own service is requesting the reason from the customer. Or you copy a message directly from a customer conversation, i.e support. */
    customer_cancellation_comment: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** Cancel an active subscription once the current period ends. Or uncancel a subscription currently set to be revoked at period end. */
    cancel_at_period_end: Schema.Boolean,
  }),
) {}

/**
 * Create a subscription for an existing customer.
 */
export class SubscriptionCreateCustomer extends Schema.Opaque<SubscriptionCreateCustomer>()(
  Schema.Struct({
    /** Key-value object allowing you to store additional information. The key must be a string with a maximum length of **40 characters**. The value must be either: * A string with a maximum length of **500 characters** * An integer * A floating-point number * A boolean You can store up to **50 key-value pairs**. */
    metadata: Schema.optionalKey(
      Schema.Record(Schema.String, Schema.Union([Schema.String, Schema.Number, Schema.Boolean])),
    ),
    /** The ID of the recurring product to subscribe to. Must be a free product, otherwise the customer should go through a checkout flow. */
    product_id: Schema.String,
    /** The ID of the customer to create the subscription for. */
    customer_id: Schema.String,
  }),
) {}

/**
 * Create a subscription for an existing customer identified by an external ID.
 */
export class SubscriptionCreateExternalCustomer extends Schema.Opaque<SubscriptionCreateExternalCustomer>()(
  Schema.Struct({
    /** Key-value object allowing you to store additional information. The key must be a string with a maximum length of **40 characters**. The value must be either: * A string with a maximum length of **500 characters** * An integer * A floating-point number * A boolean You can store up to **50 key-value pairs**. */
    metadata: Schema.optionalKey(
      Schema.Record(Schema.String, Schema.Union([Schema.String, Schema.Number, Schema.Boolean])),
    ),
    /** The ID of the recurring product to subscribe to. Must be a free product, otherwise the customer should go through a checkout flow. */
    product_id: Schema.String,
    /** The ID of the customer in your system to create the subscription for. It must already exist in Polar. */
    external_customer_id: Schema.String,
  }),
) {}

/**
 * SubscriptionLocked
 */
export class SubscriptionLocked extends Schema.Opaque<SubscriptionLocked>()(
  Schema.Struct({
    error: Schema.Literal("SubscriptionLocked"),
    detail: Schema.String,
  }),
) {}

/**
 * SubscriptionNotScheduledToCancel
 */
export class SubscriptionNotScheduledToCancel extends Schema.Opaque<SubscriptionNotScheduledToCancel>()(
  Schema.Struct({
    error: Schema.Literal("SubscriptionNotScheduledToCancel"),
    detail: Schema.String,
  }),
) {}

/**
 * SubscriptionPause
 */
export class SubscriptionPause extends Schema.Opaque<SubscriptionPause>()(
  Schema.Struct({
    /** Pause an active subscription at the end of the current period. Or cancel a scheduled pause on a subscription set to be paused at period end. */
    pause_at_period_end: Schema.Boolean,
    /** Date at which the paused subscription should automatically resume. If not set, the subscription stays paused until it is resumed manually. Must be after the current period end. */
    resumes_at: Schema.optionalKey(Schema.NullOr(DateTimeInput)),
  }),
) {}

/**
 * SubscriptionResume
 */
export class SubscriptionResume extends Schema.Opaque<SubscriptionResume>()(
  Schema.Struct({
    /** Resume a paused subscription immediately, starting a new billing period and charging the customer. */
    resume: Schema.Literal(true),
  }),
) {}

/**
 * SubscriptionRevoke
 */
export class SubscriptionRevoke extends Schema.Opaque<SubscriptionRevoke>()(
  Schema.Struct({
    /** Customer reason for cancellation. Helpful to monitor reasons behind churn for future improvements. Only set this in case your own service is requesting the reason from the customer. Or you know based on direct conversations, i.e support, with the customer. * `too_expensive`: Too expensive for the customer. * `missing_features`: Customer is missing certain features. * `switched_service`: Customer switched to another service. * `unused`: Customer is not using it enough. * `customer_service`: Customer is not satisfied with the customer service. * `low_quality`: Customer is unhappy with the quality. * `too_complex`: Customer considers the service too complicated. * `other`: Other reason(s). */
    customer_cancellation_reason: Schema.optionalKey(Schema.NullOr(CustomerCancellationReason)),
    /** Customer feedback and why they decided to cancel. **IMPORTANT:** Do not use this to store internal notes! It's intended to be input from the customer and is therefore also available in their Polar purchases library. Only set this in case your own service is requesting the reason from the customer. Or you copy a message directly from a customer conversation, i.e support. */
    customer_cancellation_comment: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** Cancel and revoke an active subscription immediately */
    revoke: Schema.Literal(true),
  }),
) {}

/**
 * SubscriptionUpdateBase
 */
export class SubscriptionUpdateBase extends Schema.Opaque<SubscriptionUpdateBase>()(
  Schema.Struct({
    /** Key-value object allowing you to store additional information. The key must be a string with a maximum length of **40 characters**. The value must be either: * A string with a maximum length of **500 characters** * An integer * A floating-point number * A boolean You can store up to **50 key-value pairs**. */
    metadata: Schema.optionalKey(
      Schema.Record(Schema.String, Schema.Union([Schema.String, Schema.Number, Schema.Boolean])),
    ),
    /** Update subscription to another product. */
    product_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** Determine how to handle the proration billing. If not provided, will use the default organization setting. */
    proration_behavior: Schema.optionalKey(Schema.NullOr(SubscriptionProrationBehavior)),
    /** Update the subscription to apply a new discount. If set to `null`, the discount will be removed. The change will be applied on the next billing cycle. */
    discount_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** Set or extend the trial period of the subscription. If set to `now`, the trial will end immediately. */
    trial_end: Schema.optionalKey(
      Schema.Union([DateTimeInput, Schema.Literal("now"), Schema.Null]),
    ),
  }),
) {}

/**
 * SubscriptionUpdateBillingPeriod
 */
export class SubscriptionUpdateBillingPeriod extends Schema.Opaque<SubscriptionUpdateBillingPeriod>()(
  Schema.Struct({
    /** Set a new date for the end of the current billing period. The subscription will renew on this date. The new date can be earlier or later than the current period end, as long as it's in the future. If the subscription is set to cancel at the end of the period, it'll end on this new date instead. It is not possible to update the current billing period on a subscription that's already revoked or not active. */
    current_billing_period_end: DateTimeInput,
  }),
) {}

/**
 * SubscriptionUpdateClear
 */
export class SubscriptionUpdateClear extends Schema.Opaque<SubscriptionUpdateClear>()(
  Schema.Struct({
    /** Clear the pending subscription update. Set to null to remove scheduled changes. */
    pending_update: Schema.Null,
  }),
) {}

/**
 * SubscriptionUpdateSeats
 */
export class SubscriptionUpdateSeats extends Schema.Opaque<SubscriptionUpdateSeats>()(
  Schema.Struct({
    /** Update the number of seats for this subscription. */
    seats: Schema.Number,
    /** Determine how to handle the proration billing. If not provided, will use the default organization setting. */
    proration_behavior: Schema.optionalKey(Schema.NullOr(SubscriptionProrationBehavior)),
  }),
) {}

/**
 * SubscriptionUpdateUnits
 */
export class SubscriptionUpdateUnits extends Schema.Opaque<SubscriptionUpdateUnits>()(
  Schema.Struct({
    /** Update the number of units for this subscription. */
    units: Schema.Number,
    /** Determine how to handle the proration billing. If not provided, will use the default organization setting. */
    proration_behavior: Schema.optionalKey(Schema.NullOr(SubscriptionProrationBehavior)),
  }),
) {}

/**
 * SubscriptionUpdate
 */
export const SubscriptionUpdate = Schema.Union([
  SubscriptionUpdateBase,
  SubscriptionUpdateSeats,
  SubscriptionUpdateUnits,
  SubscriptionUpdateBillingPeriod,
  SubscriptionCancel,
  SubscriptionRevoke,
  SubscriptionPause,
  SubscriptionResume,
  SubscriptionUpdateClear,
]);
export type SubscriptionUpdate = typeof SubscriptionUpdate.Type;

/**
 * TokenResponse
 */
export class TokenResponse extends Schema.Opaque<TokenResponse>()(
  Schema.Struct({
    access_token: Schema.String,
    token_type: Schema.Literal("Bearer"),
    expires_in: Schema.Number,
    refresh_token: Schema.optionalKey(Schema.NullOr(Schema.String)),
    scope: Schema.String,
    id_token: Schema.optionalKey(Schema.NullOr(Schema.String)),
  }),
) {}

/**
 * Unauthorized
 */
export class Unauthorized extends Schema.Opaque<Unauthorized>()(
  Schema.Struct({
    error: Schema.Literal("Unauthorized"),
    detail: Schema.String,
  }),
) {}

/**
 * UpdateSubscriptionPlanNotAllowed
 */
export class UpdateSubscriptionPlanNotAllowed extends Schema.Opaque<UpdateSubscriptionPlanNotAllowed>()(
  Schema.Struct({
    error: Schema.Literal("UpdateSubscriptionPlanNotAllowed"),
    detail: Schema.String,
  }),
) {}

/**
 * UpdateSubscriptionSeatsNotAllowed
 */
export class UpdateSubscriptionSeatsNotAllowed extends Schema.Opaque<UpdateSubscriptionSeatsNotAllowed>()(
  Schema.Struct({
    error: Schema.Literal("UpdateSubscriptionSeatsNotAllowed"),
    detail: Schema.String,
  }),
) {}

/**
 * UpdateSubscriptionUnitsNotAllowed
 */
export class UpdateSubscriptionUnitsNotAllowed extends Schema.Opaque<UpdateSubscriptionUnitsNotAllowed>()(
  Schema.Struct({
    error: Schema.Literal("UpdateSubscriptionUnitsNotAllowed"),
    detail: Schema.String,
  }),
) {}

/**
 * UserInfoOrganization
 */
export class UserInfoOrganization extends Schema.Opaque<UserInfoOrganization>()(
  Schema.Struct({
    sub: Schema.String,
    name: Schema.optionalKey(Schema.NullOr(Schema.String)),
  }),
) {}

/**
 * UserInfoUser
 */
export class UserInfoUser extends Schema.Opaque<UserInfoUser>()(
  Schema.Struct({
    sub: Schema.String,
    name: Schema.optionalKey(Schema.NullOr(Schema.String)),
    email: Schema.optionalKey(Schema.NullOr(Schema.String)),
    email_verified: Schema.optionalKey(Schema.NullOr(Schema.Boolean)),
  }),
) {}

/**
 * ValidatedLicenseKey
 */
export class ValidatedLicenseKey extends Schema.Opaque<ValidatedLicenseKey>()(
  Schema.Struct({
    /** The ID of the object. */
    id: Schema.String,
    /** Creation timestamp of the object. */
    created_at: Schema.DateTimeUtcFromString,
    /** Last modification timestamp of the object. */
    modified_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    organization_id: Schema.String,
    customer_id: Schema.String,
    customer: LicenseKeyCustomer,
    /** The ID of the seat member holding this key, if any. */
    member_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** The seat member holding this key. Set for keys granted through a seat-based product; `null` for keys granted to the customer directly. */
    member: Schema.optionalKey(Schema.NullOr(LicenseKeyMember)),
    /** The benefit ID. */
    benefit_id: Schema.String,
    key: Schema.String,
    display_key: Schema.String,
    status: Schema.Literal("granted"),
    limit_activations: Schema.NullOr(Schema.Number),
    usage: Schema.Number,
    limit_usage: Schema.NullOr(Schema.Number),
    validations: Schema.Number,
    last_validated_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    expires_at: Schema.NullOr(Schema.DateTimeUtcFromString),
    activation: Schema.optionalKey(Schema.NullOr(LicenseKeyActivationBase)),
  }),
) {}

/**
 * Schema to create a webhook endpoint.
 */
export class WebhookEndpointCreate extends Schema.Opaque<WebhookEndpointCreate>()(
  Schema.Struct({
    /** The URL where the webhook events will be sent. */
    url: Schema.String,
    /** An optional name for the webhook endpoint to help organize and identify it. */
    name: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** The API version that'll be used in event payloads. */
    api_version: Schema.optionalKey(ApiVersion),
    format: WebhookFormat,
    /** The events that will trigger the webhook. */
    events: Schema.Array(WebhookEventType),
    /** The organization ID associated with the webhook endpoint. **Required unless you use an organization token.** */
    organization_id: Schema.optionalKey(Schema.NullOr(Schema.String)),
  }),
) {}

/**
 * Schema to update a webhook endpoint.
 */
export class WebhookEndpointUpdate extends Schema.Opaque<WebhookEndpointUpdate>()(
  Schema.Struct({
    url: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** An optional name for the webhook endpoint to help organize and identify it. */
    name: Schema.optionalKey(Schema.NullOr(Schema.String)),
    /** The API version that'll be used in event payloads. */
    api_version: Schema.optionalKey(
      Schema.NullOr(Schema.Union([Schema.Literal("2026-04"), Schema.Literal("2026-10")])),
    ),
    format: Schema.optionalKey(Schema.NullOr(WebhookFormat)),
    events: Schema.optionalKey(Schema.NullOr(Schema.Array(WebhookEventType))),
    /** Whether the webhook endpoint is enabled. */
    enabled: Schema.optionalKey(Schema.NullOr(Schema.Boolean)),
  }),
) {}
