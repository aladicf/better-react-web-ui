# Subscription Retention UX

Use this reference when designing React and Tailwind subscription surfaces that handle cancellation, pause, downgrade, failed-payment recovery, reactivation, exit surveys, save offers, or billing-risk states.

This is product UX guidance, not a license to trap users. Strong retention design keeps a valuable customer, learns why others leave, and preserves trust for people who are done.

## Start With Context

Ask only what is missing.

- Is churn voluntary, involuntary, or unclear?
- Is this B2C self-serve, B2B team billing, or enterprise-managed billing?
- What billing provider owns subscription state?
- Does cancellation happen immediately or at period end?
- Are pause, downgrade, or plan changes technically supported?
- What account data is available in React at this surface: plan, seats, billing date, usage, MRR, tenure, failed-payment reason?
- Are there legal requirements for easy online cancellation, refunds, data retention, or account deletion?

If context is weak, build a simple honest flow first. Fancy segmentation on bad data becomes manipulative noise.

## Cancellation Flow

Default sequence:

```text
Cancel entry -> Exit survey -> Matched alternative -> Final confirmation -> Post-cancel state
```

Good cancellation UX:

- keeps `Continue cancelling` visible through the flow
- asks one cancellation-reason question before showing any targeted offer
- limits choices to one primary alternative and one fallback
- states access end date, data retention, and reactivation path clearly
- processes cancellation even if the save-offer API fails
- works on narrow mobile layouts without hidden secondary actions

Weak cancellation UX:

- hides cancel behind support contact when signup was self-serve
- repeats guilt copy or emotional pressure
- shows same discount for every reason
- buries final cancellation in low-contrast text links
- loses survey input or user intent after validation or network failure

Treat cancellation like a high-trust destructive action with a reversible period, not like a marketing popup.

## Exit Survey Pattern

Use radio buttons or segmented options when the list is short. Add optional text only after the selected reason or as a final `Other` field.

Reason set:

- Too expensive
- Not using it enough
- Missing feature
- Switching tools
- Technical issues
- Temporary need
- Business changed
- Other

React implementation notes:

- keep reason state local until submission succeeds
- persist draft state during multi-step route transitions
- send analytics events for `cancel_started`, `cancel_reason_selected`, `save_offer_shown`, `save_offer_accepted`, and `cancel_confirmed`
- never block final cancellation because analytics failed
- use `fieldset`, `legend`, accessible radio labels, and visible focus states

Tailwind pattern:

```tsx
<fieldset className="space-y-3">
  <legend className="text-base font-semibold text-zinc-950">
    What is the main reason you are cancelling?
  </legend>
  <div className="grid gap-2">
    {reasons.map((reason) => (
      <label
        key={reason.value}
        className="flex min-h-11 items-center gap-3 rounded-md border border-zinc-200 px-3 py-2 text-sm hover:bg-zinc-50 has-[:checked]:border-zinc-950 has-[:checked]:bg-zinc-50"
      >
        <input
          type="radio"
          name="cancelReason"
          value={reason.value}
          className="size-4 accent-zinc-950"
        />
        <span>{reason.label}</span>
      </label>
    ))}
  </div>
</fieldset>
```

## Match Alternative to Reason

Offers should answer the user's stated problem.

| Reason | Better alternative | Poor alternative |
| --- | --- | --- |
| Too expensive | temporary discount, annual switch, lower plan | onboarding call |
| Not using it enough | pause, setup help, value recap | discount only |
| Missing feature | roadmap timing, workaround, feedback route | generic coupon |
| Switching tools | comparison, migration help, feedback call | guilt copy |
| Technical issues | support escalation, status, credit where appropriate | upsell |
| Temporary need | pause with auto-reactivation notice | permanent cancellation pressure |
| Business changed | respectful confirmation | aggressive retention offer |

Discounts are blunt. Use them only when price is the actual reason.

## Pause and Downgrade UX

Pause works when the need is temporary. Downgrade works when the current plan is too large.

Pause pattern:

- offer 1, 2, and 3 month durations
- default to shortest duration
- state what happens to access, data, billing, and renewal
- send advance notice before auto-reactivation
- limit repeat pauses if product policy requires it

Downgrade pattern:

- show current plan and target plan side by side
- list what remains available and what changes
- preserve data where technically possible
- avoid upgrade nags immediately after a downgrade
- keep downgrade language factual, not punitive

Use Tailwind grids that collapse cleanly:

```tsx
<section className="grid gap-3 md:grid-cols-2">
  <PlanSummary tone="current" />
  <PlanSummary tone="target" />
</section>
```

## B2B Team Cancellation

Team subscriptions need impact clarity.

Show:

- affected seats or members
- workspaces, projects, automations, or integrations that will lose access
- owner or admin requirement for cancellation
- billing-period end date
- support or customer-success path for high-value accounts

Do not overgeneralize enterprise rules into self-serve products. Forcing every B2B user into a call is a bad default if purchase was self-serve.

## Failed Payment Recovery

Failed-payment UX should be visible, direct, and recoverable.

Surface hierarchy:

- persistent banner during grace period
- account/billing page alert with exact problem and action
- modal only for final access-risk warning
- email for asynchronous recovery

Banner anatomy:

- amount or plan context when useful
- card last four digits when available
- clear consequence date
- primary `Update payment method` action
- secondary dismiss or remind-later action when access is not ending immediately

Tailwind pattern:

```tsx
<div className="flex flex-col gap-3 border-b border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-950 md:flex-row md:items-center md:justify-between">
  <p>
    Payment for Pro failed. Update your card by May 18 to keep access.
  </p>
  <Button className="shrink-0">Update payment method</Button>
</div>
```

Do not rely on email alone. Users who are already in the app should see the billing risk in context.

## Grace, Access, and Reactivation States

Grace period:

- keep product usable when possible, especially for teams
- use read-only mode when full access is not acceptable
- state exact pause or cancellation date
- show payment recovery action near blocked features

Post-cancel:

- confirm subscription status
- show access end date
- explain data retention period
- provide reactivation path
- avoid desperate immediate win-back pressure

Reactivate:

- prefill known billing and plan context
- restore access immediately after successful payment when possible
- confirm what changed and where user can continue

## Compliance and Trust Guardrails

Subscription UX often intersects regulation. When unsure, tell the user legal review is needed.

Hard rules for interface work:

- cancellation must remain discoverable from account or billing settings
- save offers must not hide or visually bury the cancellation path
- final confirmation must describe timing, billing impact, and data retention
- account deletion and subscription cancellation must not be conflated
- payment failure copy should not blame the user
- marketing consent and post-cancel email preferences must be respected

If retention design depends on confusion, it is not design. It is debt.

## Metrics to Instrument

Track enough to improve the UX without blocking the user.

- cancel starts
- reason distribution
- offer impressions
- offer acceptance
- final cancellation completion
- save durability after 30, 60, and 90 days
- pause reactivation
- downgrade retention
- failed-payment recovery
- time from failed payment to recovery
- post-cancel reactivation

Do not celebrate short-term saves without measuring whether those customers stay.

## React and Tailwind Checklist

- Cancellation, pause, downgrade, and payment recovery have explicit loading, success, error, and retry states.
- Final cancellation action remains reachable with keyboard and screen reader.
- Destructive billing actions use clear labels and consequences.
- Multi-step state survives refresh or route transitions where appropriate.
- Mobile layout keeps primary action and cancellation path visible without horizontal scrolling.
- Tailwind semantic color tokens distinguish warning, danger, neutral, and success states without color-only meaning.
- Analytics failures never block billing actions.
- Provider webhook lag is represented with honest pending or syncing states instead of stale certainty.

For related guidance, also use [destructive action UX](./destructive-action-ux.md), [status communication](./status-communication.md), [paywalls and upgrade flows](./paywalls-and-upgrade-flows.md), [interface honesty](./interface-honesty.md), and [pricing and packaging](./pricing-and-packaging.md).
