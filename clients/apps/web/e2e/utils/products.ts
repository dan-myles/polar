import type { schemas } from '@polar-sh/client'

export type ProductSpec =
  | schemas['ProductCreateOneTime']
  | schemas['ProductCreateRecurring']

export const PRODUCTS = {
  trialSubscription: {
    name: 'E2E Trial subscription',
    visibility: 'public',
    description:
      'Monthly subscription with a free trial, created by the E2E tests',
    prices: [
      { amount_type: 'fixed', price_amount: 1000, price_currency: 'usd' },
    ],
    recurring_interval: 'month',
    recurring_interval_count: 1,
    trial_interval: 'day',
    trial_interval_count: 7,
  },
  oneTimePurchase: {
    name: 'E2E One-time purchase',
    visibility: 'public',
    description: 'Fixed-price one-time purchase, created by the E2E tests',
    prices: [
      { amount_type: 'fixed', price_amount: 1000, price_currency: 'usd' },
    ],
  },
  freeProduct: {
    name: 'E2E Free product',
    visibility: 'public',
    description: 'Free one-time product, created by the E2E tests',
    prices: [{ amount_type: 'fixed', price_amount: 0, price_currency: 'usd' }],
  },
  payWhatYouWant: {
    name: 'E2E Pay what you want',
    visibility: 'public',
    description: 'Pay-what-you-want one-time product, created by the E2E tests',
    prices: [
      {
        amount_type: 'custom',
        price_currency: 'usd',
        minimum_amount: 500,
        preset_amount: 1000,
      },
    ],
  },
} satisfies Record<string, ProductSpec>
