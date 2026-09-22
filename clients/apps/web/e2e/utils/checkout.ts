import type { schemas } from '@polar-sh/client'
import { expect } from 'vitest'
import { actionClicking, actionFilling, actionMatching, type App } from './app'
import { BILLING_ADDRESS, CARD, ORG_TOKEN, STRIPE_FRAME } from './constants'
import type { ProductSpec } from './products'

type Checkout = schemas['CheckoutPublic']
export type Subscription = schemas['CustomerSubscription']
export type Order = schemas['CustomerOrder']

const orgApi = <T>(
  app: App,
  path: string,
  init: { method?: string; body?: unknown } = {},
): Promise<T> => {
  if (!ORG_TOKEN) {
    throw new Error('E2E_ORG_TOKEN is not set: run `dev e2e setup`')
  }
  return app.api<T>(path, { ...init, token: ORG_TOKEN })
}

const ensureProduct = async (app: App, spec: ProductSpec): Promise<string> => {
  const { items } = await orgApi<schemas['ListResource_Product_']>(
    app,
    `/v1/products/?query=${encodeURIComponent(spec.name)}&is_archived=false&limit=100`,
  )
  const existing = items.find((product) => product.name === spec.name)
  if (existing) return existing.id
  const created = await orgApi<schemas['Product']>(app, '/v1/products/', {
    method: 'POST',
    body: spec,
  })
  return created.id
}

export const openCheckout = async (
  app: App,
  spec: ProductSpec,
): Promise<CheckoutPage> => {
  const productId = await ensureProduct(app, spec)
  const body: Pick<schemas['CheckoutProductsCreate'], 'products'> = {
    products: [productId],
  }
  const { url, client_secret } = await orgApi<schemas['Checkout']>(
    app,
    '/v1/checkouts/',
    { method: 'POST', body },
  )
  app.meta.checkoutUrl = url
  await app.goto(url)
  return new CheckoutPage(app, client_secret)
}

export class CheckoutPage {
  constructor(
    private readonly app: App,
    readonly clientSecret: string,
  ) {}

  state = (): Promise<Checkout> =>
    this.app.api<Checkout>(`/v1/checkouts/client/${this.clientSecret}`)

  private address = async () => (await this.state()).customer_billing_address

  async fillEmail(email = `e2e+${Date.now()}@polar.sh`): Promise<string> {
    const plan = await this.app.plan('Find the email field', { email })
    await this.app.fill(
      actionFilling(plan, 'email'),
      { email },
      async () => (await this.state()).customer_email === email,
    )
    return email
  }

  async setAmount(cents: number): Promise<void> {
    const amount = String(cents / 100)
    const plan = await this.app.plan(
      'Find the field where the customer enters the amount they want to pay',
      { amount },
    )
    await this.app.fill(
      actionFilling(plan, 'amount'),
      { amount },
      async () => (await this.state()).amount === cents,
    )
  }

  async setSeats(seats: number): Promise<void> {
    const plan = await this.app.plan(
      'Find the buttons that increase and decrease the number of seats',
    )
    let current = (await this.state()).seats ?? 1
    while (current !== seats) {
      const next = current + Math.sign(seats - current)
      await this.app.click(
        actionMatching(plan, next > current ? /increase/i : /decrease/i),
        async () => (await this.state()).seats === next,
      )
      current = next
    }
  }

  async payWithCard(name = 'E2E Tester'): Promise<void> {
    const plan = await this.app.plan('Find the cardholder name field', { name })
    await this.app.fill(
      actionFilling(plan, 'name'),
      { name },
      async () => (await this.state()).customer_name === name,
    )
    await this.fillBillingAddress()
    await this.app.type(`${STRIPE_FRAME} >> input[name="number"]`, CARD.number)
    await this.app.type(`${STRIPE_FRAME} >> input[name="expiry"]`, CARD.expiry)
    await this.app.type(`${STRIPE_FRAME} >> input[name="cvc"]`, CARD.cvc)
  }

  private async fillBillingAddress(): Promise<void> {
    const { country, line1, postalCode, city, state } = BILLING_ADDRESS
    if ((await this.address())?.country !== country) {
      const countryName = new Intl.DisplayNames(['en'], { type: 'region' }).of(
        country,
      )
      await this.app.select(
        'billing address country',
        countryName!,
        async () => (await this.address())?.country === country,
      )
    }
    const plan = await this.app.plan(
      'Find the street address, postal code and city fields of the billing address',
      { line1, postalCode, city },
    )
    await this.app.fill(
      actionFilling(plan, 'line1'),
      { line1 },
      async () => (await this.address())?.line1 === line1,
    )
    await this.app.fill(
      actionFilling(plan, 'postalCode'),
      { postalCode },
      async () => (await this.address())?.postal_code === postalCode,
    )
    await this.app.fill(
      actionFilling(plan, 'city'),
      { city },
      async () => (await this.address())?.city === city,
    )
    await this.app.select(
      'billing address state',
      state.name,
      async () => (await this.address())?.state === `${country}-${state.code}`,
    )
  }

  async submit(): Promise<Portal> {
    const plan = await this.app.plan(
      'Find the button that completes the checkout',
    )
    await this.app.click(
      actionClicking(plan),
      async () => (await this.state()).status !== 'open',
    )
    await expect
      .poll(() => this.app.url(), { message: 'confirmation page' })
      .toContain('/confirmation')
    const token = new URL(await this.app.url()).searchParams.get(
      'customer_session_token',
    )
    expect(token, 'customer session token in the confirmation URL').toBeTruthy()
    const portal = new Portal(this.app, token!)
    this.app.onCleanup(() => portal.cancelSubscriptions())
    await expect
      .poll(async () => (await this.state()).status, {
        message: 'checkout status',
      })
      .toBe('succeeded')
    return portal
  }
}

export class Portal {
  constructor(
    private readonly app: App,
    private readonly token: string,
  ) {}

  private list = async <T>(path: string): Promise<T[]> =>
    (await this.app.api<{ items: T[] }>(path, { token: this.token })).items

  subscriptions = (): Promise<Subscription[]> =>
    this.list<Subscription>('/v1/customer-portal/subscriptions/')

  orders = (): Promise<Order[]> =>
    this.list<Order>('/v1/customer-portal/orders/')

  async cancelSubscriptions(): Promise<void> {
    const live = (await this.subscriptions()).filter(
      (subscription) =>
        !subscription.ended_at && !subscription.cancel_at_period_end,
    )
    for (const { id } of live) {
      await this.app.api(`/v1/customer-portal/subscriptions/${id}`, {
        method: 'DELETE',
        token: this.token,
      })
    }
  }
}
