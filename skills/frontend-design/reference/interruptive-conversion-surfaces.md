# Interruptive Conversion Surfaces

Use this reference when designing React and Tailwind popups, modals, slide-ins, announcement bars, sticky bars, exit-intent offers, newsletter captures, lead-magnet forms, promotional overlays, or survey prompts.

Interruption has a cost. A popup that converts 3% while teaching 97% of users to distrust the product is weak design.

## Start With Purpose and Context

Ask only what is missing.

- What is the goal: email capture, lead magnet, discount, announcement, demo request, survey, feedback, or feature promotion?
- Who should see it: new visitors, returning visitors, engaged readers, pricing visitors, free users, or high-intent accounts?
- What trigger starts it: click, scroll depth, time, page count, exit intent, behavior, or explicit user action?
- What page or flow will it appear on?
- What should never be interrupted: checkout, signup, payment, critical task, onboarding first value, or account recovery?
- What is the current impression rate, conversion rate, close rate, complaint rate, and mobile split?

If the popup does not offer context-relevant value, do not ship it.

## Choose the Least Interruptive Surface

| Surface | Use when | Avoid when |
| --- | --- | --- |
| Click-triggered modal | user asked for a guide, demo, details, or form | trying to force cold capture |
| Top announcement bar | message is broad, time-bound, and low-friction | message needs a full explanation |
| Bottom sticky bar | reminder or offer should stay visible without blocking content | it covers mobile navigation or CTAs |
| Slide-in | secondary prompt after real engagement | task flow needs focus |
| Center modal | decision is important and worth a deliberate pause | routine newsletter capture |
| Full-screen overlay | age gate, legal requirement, or truly primary campaign | mobile SEO, casual browsing, early visits |

Prefer click-triggered and contextual prompts. Auto-triggered modals need a higher bar.

## Trigger Rules

### Better triggers

- user clicks `Download guide`, `Get checklist`, `Book demo`, or similar
- user reaches a meaningful scroll depth on long content
- user views several related pages in one session
- user returns to a high-intent page
- user hits a genuine product limit or paid boundary
- user attempts to leave after meaningful engagement

### Weak triggers

- show on first paint
- show after 5 seconds regardless of intent
- show immediately after another prompt
- show during checkout, payment, signup, account recovery, or active form completion
- show again right after dismissal

Default timing:

- do not interrupt before the page has delivered value
- cap to once per session unless the user explicitly opens it
- remember dismissal for 7-30 days depending on campaign importance
- exclude converted users and users who already declined recently

## Popup Anatomy

A strong popup or slide-in includes:

- **Headline**: concrete value, not `Subscribe to our newsletter`
- **Supporting copy**: what the user gets, how often, or what happens next
- **Form or CTA**: one primary action
- **Trust note**: privacy, no spam, response time, or terms when relevant
- **Dismiss control**: visible close button and keyboard Escape
- **Mobile-safe layout**: no hidden close target, no covered content, no tiny controls

Keep forms minimal. Most popup forms should ask for email only unless the user requested a high-intent action like a demo.

## Copy Patterns

Prefer:

- `Get the 12-point launch checklist`
- `Send me the guide`
- `Book a 15-minute demo`
- `Get weekly React UI patterns`
- `Save 15% on this order`

Avoid:

- `Submit`
- `Subscribe now!!!`
- `No, I hate saving money`
- fake urgency
- vague `Unlock exclusive insights`

Decline copy should be neutral: `No thanks`, `Maybe later`, `Not now`.

## React and Tailwind Implementation

Use established accessible primitives when available. In React apps with shadcn/Radix, keep their focus, portal, escape, and aria behavior intact.

Implementation checklist:

- move focus into modal surfaces deliberately
- restore focus to the opener on close
- support Escape, close button, and outside click when appropriate
- make close targets at least 44px on touch screens
- trap focus only for modal surfaces, not non-modal bars or slide-ins
- use `aria-labelledby` and `aria-describedby`
- persist dismissal state in a cookie, server preference, or local storage according to product needs
- avoid layout shift when inserting sticky bars; reserve space or place them where they do not push critical content unexpectedly
- respect `prefers-reduced-motion`
- test narrow viewports where browser UI reduces usable height

Tailwind pattern:

```tsx
<div className="fixed inset-x-3 bottom-3 z-50 rounded-lg border border-zinc-200 bg-white p-4 shadow-lg md:left-auto md:w-[28rem]">
  <div className="flex items-start gap-3">
    <div className="min-w-0 flex-1">
      <h2 className="text-sm font-semibold text-zinc-950">Get the launch checklist</h2>
      <p className="mt-1 text-sm text-zinc-600">
        Twelve checks for React and Tailwind pages before release.
      </p>
    </div>
    <button className="grid size-11 place-items-center rounded-md text-zinc-500 hover:bg-zinc-100" aria-label="Dismiss">
      <X className="size-4" />
    </button>
  </div>
</div>
```

## Mobile Rules

- avoid full-screen marketing overlays before content on mobile
- use bottom sheets or compact slide-ins when interruption is justified
- keep close control visible without scrolling
- ensure sticky bars do not cover primary navigation, cookie controls, chat widgets, or form submit buttons
- do not rely on desktop exit-intent behavior; use back intent, scroll-up behavior, or return visits carefully

## Measurement

Track:

- impressions
- close rate
- conversion rate
- form focus
- submission attempts
- successful submissions
- time to close
- Escape key closes
- outside-click closes
- downstream conversion or lead quality
- unsubscribe, complaint, or bounce signals after capture

High close rate with low downstream quality means the prompt is noise, even if it collects emails.

## Experiment Ideas

- click-triggered modal vs auto-triggered popup
- slide-in vs top bar vs center modal
- scroll depth trigger at 25%, 50%, or 75%
- new visitor vs returning visitor targeting
- page-specific offer vs generic offer
- email-only vs email plus name
- proof included vs no proof
- product preview image vs text-only
- 7-day vs 30-day dismissal cooldown
- sticky bar on desktop only vs desktop and mobile

## Anti-Patterns

Avoid:

- hiding or shrinking the close button
- guilt-trip decline copy
- stacking popups, cookie prompts, chat widgets, and notification asks in the same first session
- showing popups during task-critical flows
- showing the same dismissed popup repeatedly
- blocking mobile content with intrusive interstitials
- collecting more data than the offer justifies
- using countdown timers unless the deadline is real

For broader overlay behavior, use [interaction design](./interaction-design.md), [component accessibility](./component-accessibility.md), and [status communication](./status-communication.md). For experiment planning, use [conversion experimentation](./conversion-experimentation.md).
