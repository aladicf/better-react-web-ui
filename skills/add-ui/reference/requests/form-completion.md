### Form completion / blocked CTAs / disabled buttons

Prioritize:

- clear next-step visibility
- obvious explanation for blockage
- accessible recovery guidance
- a real way out when validation or availability fails

Also:

- prefer enabled submit plus clear validation feedback over mystery-disabled primary actions when the task can recover cleanly on submit
- disable actions mainly for true unavailability or short in-progress duplicate-prevention states, not as a vague proxy for hidden validation problems
- explain why an action is unavailable close to the button, especially in long narrow layouts where the root cause may be far away
- use default selections, alternative actions, or support/notify-me paths when those keep users moving more honestly than a blocked CTA
- if a disabled state is necessary, keep keyboard and assistive-technology discoverability in mind instead of turning the control into a silent dead zone

Pair this with [disabled-buttons-ux](../../frontend-design/reference/disabled-buttons-ux.md) when the request involves disabled submit buttons, blocked progress, unavailable actions, or deciding whether the CTA should stay enabled and explain errors on click.
Pair this with [live-validation-ux](../../frontend-design/reference/live-validation-ux.md) when the blocked state depends on inline validation timing or structured-field feedback.
Pair this with [error-recovery](../../frontend-design/reference/error-recovery.md) when the work depends on summaries, jump-links, or field-level recovery after submit.
