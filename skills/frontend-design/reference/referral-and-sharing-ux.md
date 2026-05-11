# Referral and Sharing UX

Use this reference when designing React and Tailwind referral programs, affiliate entry points, share links, invite flows, ambassador dashboards, referral landing pages, or word-of-mouth loops.

Referral UX is not just a reward banner. It is a loop:

```text
Trigger moment -> Share action -> Referred user converts -> Reward -> Repeat
```

## Start With Program Fit

Ask only what is missing.

- Is this a customer referral program, affiliate program, partner program, or simple invite/share loop?
- Is the product B2B, B2C, marketplace, ecommerce, subscription, or community-led?
- What is customer LTV, current CAC, and target payback?
- Do users naturally share the product, invite teammates, publish output, or recommend it?
- What is the reward for the referrer, the referred user, or both?
- What fraud and attribution rules exist?
- What does success mean: shares, referred signups, activated referrals, paid conversions, or partner revenue?

If the product has no natural reason to share, a referral program will not fix that. Build share-worthy product moments first.

## Trigger Moments

Ask for referrals after value, not before trust.

Strong trigger moments:

- after first meaningful success
- after a user invites a teammate or shares output
- after renewal, upgrade, or repeat purchase
- after positive support or high satisfaction feedback
- after a milestone, published project, shipped report, or completed transaction

Weak trigger moments:

- first session before value
- during signup
- during payment, account recovery, or error handling
- immediately after dismissal
- as a generic dashboard banner with no context

## Share Mechanisms

Rank mechanisms by friction:

1. in-product share action tied to a real object or achievement
2. copyable personal referral link
3. email invitation with editable message
4. contact import or team invite flow
5. social share
6. referral code for offline or podcast use

React/Tailwind UI notes:

- make copying the referral link a one-click action with visible copied feedback
- keep native share available with `navigator.share` where supported
- provide a fallback copy link button
- show terms and reward status without making users hunt
- keep sharing controls compact on mobile
- use `aria-live="polite"` for copied and sent confirmations

## Incentive Design

Common incentive types:

| Incentive | Best for | UX note |
| --- | --- | --- |
| product credit | SaaS, subscriptions | ties reward to continued use |
| free month | subscription products | easy to understand |
| cash | affiliates, marketplaces | needs trust, payout status, tax context |
| feature unlock | freemium products | works only if feature has clear value |
| gift or swag | community brands | needs shipping and status handling |
| charity donation | mission-led brands | needs proof and transparency |

Double-sided rewards often explain better than one-sided rewards because the user is not only asking for a favor.

Good copy:

- `Give $20, get $20`
- `Invite a teammate. You both get one month of Pro after they upgrade.`
- `Share your link. Earn 20% for each paid customer you refer.`

Weak copy:

- `Refer now`
- `Unlock rewards`
- `Monetize your network`

## Referral Dashboard Anatomy

A useful referral surface includes:

- personal link or code
- one-click copy and share actions
- reward summary
- referral status list
- pending, approved, rejected, and paid states
- clear payout or credit timing
- fraud and eligibility rules in plain language
- support path for missing credit

Status states should be explicit:

| State | Meaning |
| --- | --- |
| invited | referral link used or invite sent |
| signed up | referred user created account |
| activated | referred user completed qualifying action |
| rewarded | credit or payout issued |
| ineligible | rule was not met |

Avoid vague states like `processing` without timing or next step.

## Affiliate and Partner UI

Affiliate programs need more operational clarity than customer referrals.

Provide:

- tracking links and campaign parameters
- approved positioning and claims
- brand assets and screenshots
- sample copy and talking points
- commission structure
- cookie duration or attribution window
- payout threshold and schedule
- tax or payment setup status
- performance reporting

Do not bury program rules in legal PDFs only. Affiliates need a usable dashboard, not archaeology.

## Referral Landing Page

For referred users, the page should answer:

- who invited them
- what product does
- what reward or benefit they get
- what happens after signup
- whether the offer expires

Use the referrer identity carefully. `Alex invited you to try Product` is helpful. Surprise social pressure can feel creepy.

## Fraud and Abuse Guardrails

Design should make rules visible before users invest effort.

Common guardrails:

- email verification before reward eligibility
- activation or purchase threshold before payout
- delayed reward payout until refund or chargeback window passes
- caps per period or lifetime
- no self-referrals
- manual review for suspicious patterns
- clear reward clawback rules

UX rule: if a referral is rejected, say why and whether it can be fixed.

## Metrics

Track:

- referral program views
- active referrers
- share clicks
- copied links
- invites sent
- referral landing-page conversion
- referred activation
- referred paid conversion
- rewards earned and paid
- referral CAC
- referred customer LTV
- fraud or rejection rate

Useful formulas:

```text
Referral rate = customers who refer / total customers
Viral coefficient = invitations per user * invitation conversion rate
Referral ROI = (revenue from referred customers - program costs) / program costs
```

Do not optimize only for shares. Optimize for referred users who activate and stay.

## React and Tailwind Checklist

- Copy-link button has success, failure, and retry states.
- Referral status list is accessible as a table or structured list.
- Reward cards use semantic status colors plus text, not color alone.
- Mobile layout keeps share action and reward terms visible.
- Dashboard loading states do not imply a reward has been earned before eligibility is confirmed.
- Affiliate asset downloads have clear filenames and formats.
- Referral landing page preserves attribution through signup without leaking private data.
- Fraud or eligibility errors are written in plain language.

For related work, use [social proof patterns](./social-proof-patterns.md), [onboarding UX](./onboarding-ux.md), [status communication](./status-communication.md), and [conversion experimentation](./conversion-experimentation.md).
