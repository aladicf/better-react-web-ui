### Destructive actions / delete / archive / bulk operations

Prioritize:

- honest consequence framing
- reversibility clarity
- scope awareness before commitment
- recovery that preserves momentum

Also:

- decide whether the action is really `Delete`, `Archive`, `Remove`, `Disconnect`, or `Deactivate` instead of using one scary verb for every job
- prefer undo for low-risk reversible single-item actions instead of interruptive confirmation churn
- use confirmation for irreversible, high-consequence, or broad-blast-radius actions
- keep the affected count and eligibility visible for bulk operations instead of hiding scope inside a generic dialog
- preserve selection, show partial success honestly, and offer retry or restore paths when destructive batch work fails

Pair this with [destructive-action-ux](../../frontend-design/reference/destructive-action-ux.md) when the request involves deletion flows, archive patterns, dangerous bulk actions, undo behavior, or destructive recovery.
Pair this with [action-hierarchy](../../frontend-design/reference/action-hierarchy.md) when the work depends on how prominently destructive controls should appear before and during confirmation.
Pair this with [interface-honesty](../../frontend-design/reference/interface-honesty.md) when the copy needs to explain irreversible consequences, retention windows, or decline/escape paths clearly.
