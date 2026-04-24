### Error states / alerts / recovery

Prioritize:

- clear explanation of what failed
- the fastest likely recovery path
- local context before global alarm
- calm trust over theatrical interruption

Also:

- keep fixable problems close to the field, row, or region that caused them instead of shouting from somewhere unrelated
- prefer inline errors or persistent local alerts before toasts or modals for recoverable issues
- use banners or route-level states when the whole region or page is affected
- include retry, undo, help, or support actions when they materially reduce abandonment
- group repeated failures instead of stacking several alerts in a row
- avoid vague `Something went wrong` copy when the system knows what failed and what users should do next
- if the failure happens during delete, archive, revoke, or other risky operations, preserve context and offer a clear recovery path instead of dumping users into a generic dead end

Pair this with [error-recovery](../../frontend-design/reference/error-recovery.md) when the request depends on validation behavior, summaries, or recoverable field and form errors.
Pair this with [status-communication](../../frontend-design/reference/status-communication.md) when the request depends on alert placement, interruption level, banners, toasts, or broader notification hierarchy.
Pair this with [destructive-action-ux](../../frontend-design/reference/destructive-action-ux.md) when the work depends on delete/archive/remove flows, undo-vs-confirm choices, bulk destructive actions, or post-failure escape hatches.
