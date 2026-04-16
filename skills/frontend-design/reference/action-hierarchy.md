# Action Hierarchy

## Primary / Secondary / Tertiary Model

Most screens should present actions in a clear hierarchy:

### Primary
- the main action the user is most likely to take now
- visually strongest treatment
- usually only one per area or screen

### Secondary
- important but not dominant
- clearly available, less prominent than the primary action

### Tertiary
- low-frequency or supporting actions
- discoverable without competing
- often text links or understated controls

If multiple actions all feel primary, the interface is flattening decision-making.

## von Restorff Effect

Things that stand out get noticed and remembered. That is useful only when the right thing is the one standing out.

Use distinction deliberately for:
- the primary call to action
- the currently selected or active state
- warnings, destructive confirmations, and critical statuses
- genuinely new or time-sensitive items that deserve attention

Protect the effect by being selective:
- let one action or state carry the strongest contrast in a region
- quiet nearby supporting controls so the focal item can actually stand out
- reserve loud emphasis for moments that matter instead of making every button compete

If multiple items are all visually loud, the effect disappears and the interface becomes noisier rather than clearer.

## Destructive Action Treatment

Destructive does not automatically mean visually primary.

- On general screens, destructive actions are often better as secondary or tertiary controls
- In the confirmation moment where the destructive act is the actual task, it can become the primary action

## Confirmation-State Escalation

Escalate visual severity in stages:

1. Normal screen: destructive option is present but quiet
2. Confirmation state: consequence is explicit, destructive action becomes the clear focal action

This prevents accidental emphasis while still making the decision unmistakable when it matters.

## When Links Beat Buttons

Use links or tertiary treatments when:
- the action is optional
- it should stay discoverable but quiet
- it supports the task rather than leading it

Not every action needs a button.

## When Secondary Actions Should Recede or Disappear

Secondary actions should step back when:
- the user hasn’t reached the decision point yet
- the feature has no content yet
- the options are advanced and would raise cognitive load too early

Let actions appear when they become useful.

## Disabled primary actions are risky by default

Disabling the main call to action often removes the clearest next step while giving users very little explanation.

Prefer a disabled primary action only when:

- the action is genuinely unavailable
- the system is preventing duplicate submission while work is in progress
- a hard technical constraint makes early activation genuinely unsafe

For many forms, a better baseline is:

- keep the primary action enabled
- validate on submit
- explain what is wrong and point users to recovery

If a primary action must stay disabled, the reason and the way out should be obvious nearby.

Consult [disabled buttons UX](./disabled-buttons-ux.md) for deeper guidance on blocked CTAs, action availability, and accessible disabled-state behavior.

## Practical Checks

- Is there one obvious next step?
- Are supportive actions clearly quieter?
- Are destructive actions properly escalated only when needed?
- Are there controls visible that should not compete yet?
- Is the primary action disabled for a real reason, or just hiding unresolved validation and explanation work?

---

**Avoid**: two or three equally prominent buttons, overly loud destructive controls on routine screens, and giving tertiary actions full button treatment when a link would do.