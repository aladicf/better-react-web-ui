# Destructive Action UX

Use this reference when the work involves delete, archive, remove, revoke, disconnect, reset, cancel, bulk actions, undo patterns, confirmation states, or recovery after risky changes.

Destructive actions are not just dangerous buttons.

They are trust moments where the interface needs to answer four questions clearly:

- what exactly will change?
- can this be undone?
- what else is affected?
- what is the safest fast path for the common case?

## Start with reversibility, not with dialog chrome

Before choosing a toast, inline warning, modal, or review step, ask:

- is the action reversible?
- what is the blast radius?
- is the user acting on one thing or many?
- are other people, systems, or automations affected?
- does the consequence happen immediately, eventually, or only after a retention window?

The right pattern depends more on reversibility and scope than on how scary the button looks.

## Choose the object state deliberately

Users hear `Delete` as permanent.

Only use that label when the product is materially behaving that way.

### Soft delete

Prefer soft delete when:

- regret is common
- restoring is technically safe
- the record has relationships or history
- support or operations may need recovery
- the object should disappear from the active workflow without being truly erased yet

Strong defaults:

- remove the item from the active surface immediately so the action feels complete
- keep it recoverable for a clear retention window
- show where it went, such as `Trash` or `Archived`
- state who can restore it and how long recovery lasts
- separate `Archive` from `Delete` when they mean different things

Soft delete works best when the retention promise is real and discoverable.

Do not make users guess whether `deleted` means hidden, archived, queued for purge, or actually gone.

### Hard delete

Use hard delete when:

- regulation, privacy, or security requires actual removal
- keeping recoverable copies would violate the product promise
- the object is so sensitive that restoration creates risk
- the system can honestly perform permanent deletion

If the action is truly permanent, say so plainly.

Do not label a recoverable action as permanent just because `delete` sounds cleaner in the UI.

### Archive, remove from list, disconnect, and deactivate are different jobs

These verbs are not interchangeable.

- `Archive` keeps the record but removes it from the active workflow
- `Remove from list` changes membership without destroying the underlying object
- `Disconnect` breaks a relationship or integration
- `Deactivate` prevents use without necessarily deleting data

The label should match the consequence, not just the visual style of the control.

## Undo beats confirm when the action is low-risk and reversible

For many single-item reversible actions, the strongest pattern is:

1. update the interface immediately
2. show a concise undo surface
3. commit permanently only after the undo window expires

This works especially well for:

- dismissing, archiving, or moving an item
- removing an item from a list or queue
- low-risk single-item deletion with trustworthy recoverability

Why it helps:

- users move faster
- confirmation fatigue drops
- the interface stays calmer than a product full of interruption modals

### Use confirmation instead when

- the action is irreversible
- the action has legal, financial, or security consequences
- the action affects many items or many people
- the scope is easy to misunderstand from the current surface
- the system cannot offer a trustworthy undo path

Do not stack a dramatic confirmation dialog and an undo toast by default.

If the cost justifies two layers of friction, that should be an explicit decision, not a habit.

## Bulk actions need scope clarity before commitment

Bulk operations feel safe in mockups and risky in production.

Users need to know:

- how many items are affected
- which items are selected
- whether some items are ineligible or exempt
- whether the action is reversible
- whether the action happens now, later, or in a queued job

### Strong bulk-action defaults

- keep the selected count visible near the action
- reflect scope in labels such as `Delete 12 invoices` instead of just `Delete`
- let users review or narrow the selection before commit
- explain partial eligibility before execution
- separate reversible bulk actions from irreversible ones visually and semantically

### Guardrails that earn their keep

Use stronger safeguards when:

- items belong to different owners, states, or permission levels
- some rows will succeed and others will fail
- the action triggers billing, notifications, data loss, or downstream automations
- the selection is unusually large or unusually risky for the workflow

Good guardrails include:

- confirmation copy that names the scope and consequence explicitly
- preflight warnings for locked or ineligible items
- grouped summaries of affected subtypes when one blanket label would hide important differences
- typed confirmation only for truly high-consequence operations
- clear alternatives such as `Archive instead` or `Export first` when they materially reduce risk

Avoid making users discover partial failure only after the batch runs.

## Post-error escape hatches should preserve momentum

When a destructive flow fails, users should not be stranded between danger and uncertainty.

Useful escape hatches include:

- `Undo`
- `Restore`
- `Retry`
- `Try again later`
- `Archive instead`
- `Export before deleting`
- `Request access`
- `Contact support with affected item list`

### Keep context after failure

After a failed destructive or bulk action:

- preserve the user’s selection when safe
- keep failed items easy to review
- show which items changed and which did not
- keep the user near the affected surface instead of kicking them to a generic error page
- provide a stable way to recover without rebuilding the whole selection from memory

If only some items succeeded, say so plainly.

Partial success is a state, not a secret.

## Copy should lead with consequence, not ceremony

Strong destructive copy answers:

- what will happen
- what will remain recoverable
- when the action becomes permanent
- whether other people, systems, or connected data are affected

Prefer:

- `Delete 3 API keys`
- `Archived. Undo`
- `Permanently delete workspace? This also removes 12 connected projects.`

Avoid:

- vague `Are you sure?`
- euphemisms that hide deletion
- cheerful copy at the moment of data loss
- ambiguous labels that make users re-read the buttons three times

For tone and consequence framing, also use [interface honesty](./interface-honesty.md).

## Visual hierarchy should change with the moment

On ordinary screens:

- destructive actions should usually stay secondary or tertiary
- safer adjacent actions should remain easier to choose accidentally

In the confirmation moment:

- the consequence becomes explicit
- the destructive action can become visually primary because that is now the real task
- the escape route should remain clear instead of being camouflaged

For deeper action-priority treatment, also use [action hierarchy](./action-hierarchy.md).

## Use the least interruptive pattern that still protects users

Choose the container by consequence, not by habit.

| Pattern | Best for |
| --- | --- |
| **Undo toast / inline status** | low-risk reversible single-item actions |
| **Inline confirmation or local sheet** | local actions where nearby context helps users judge the consequence |
| **Modal confirmation** | irreversible, cross-object, or high-consequence actions that require a deliberate pause |
| **Dedicated review step** | large bulk operations, workspace or account destruction, and actions with unusual downstream effects |

If the action is local and reversible, a modal is often too much.

If the action is permanent and high-blast-radius, a toast is often too little.

For feedback channels, undo containers, and interruption levels, also use [status communication](./status-communication.md).

## Hidden constraints should not become mystery-disabled danger zones

If a destructive action is unavailable, users still need to understand:

- why it is blocked
- whether the block is temporary or structural
- what can be done instead

Examples:

- `You can archive this workspace, but permanent deletion requires owner access.`
- `3 selected records are locked and cannot be deleted.`
- `Delete is unavailable until export finishes.`

Do not rely on a silent disabled destructive button to communicate policy or risk.

For blocked-action handling, also use [disabled buttons UX](./disabled-buttons-ux.md).

## Practical checklist

- Is this really a delete, or is it archive, remove, disconnect, or deactivate?
- Is the action reversible, and does the label match that reality?
- Would undo serve users better than a confirmation dialog?
- If confirmation is needed, is the scope and consequence explicit?
- For bulk actions, can users see item count, eligibility, and blast radius before commit?
- If failure happens, can users retry or recover without rebuilding context from memory?
- Are partial successes and failures explained honestly?
- Are destructive actions visually quieter on routine screens and only escalated when the decision moment truly arrives?
- Is the copy naming the real consequence instead of performing caution theatrics?

## Anti-patterns

Avoid:

- using confirmation dialogs for every archive, remove, or dismiss action
- labeling recoverable actions as permanent deletion
- hiding retention windows or restore paths
- generic `Are you sure?` dialogs with no scope detail
- bulk destructive actions with no count, no review, and no explanation of partial failure
- disabled destructive buttons with no visible reason or alternative
- dropping users onto a generic error page after a failed destructive action

Destructive-action UX is good when the interface is honest about risk, fast for low-risk reversible work, and specific about recovery when things go wrong.

For validation and recoverable failure behavior, also use [error recovery](./error-recovery.md).
