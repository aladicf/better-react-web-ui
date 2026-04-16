# Permissions and Roles UX

Use this reference when the work involves roles, permissions, team access, request-access flows, capability boundaries, admin-vs-member behavior, access-denied states, or any interface where users need to understand what they can see, change, approve, or manage.

Permissions UX is not only a security concern.

It is a product-clarity problem.

Users need to understand:

- what scope they are in
- what they can do there
- what they can see there
- who controls those rules
- how to recover when access is missing

## Start with the model, not the settings page

Before designing role editors or access states, ask:

- what object or scope does this permission apply to?
- is access personal, project-level, workspace-level, or organization-wide?
- what is the difference between seeing, editing, approving, publishing, exporting, billing, and administering?
- who grants access, and how often does it change?
- what is the cost of a wrong permission decision?

If the underlying permission model is unclear, the UI will only make the confusion more visible.

## Separate roles, permissions, visibility, and capability

These concepts are related, but they are not interchangeable.

### Roles

Roles are bundles of responsibility or trust.

Examples:

- Viewer
- Member
- Editor
- Manager
- Billing admin
- Workspace owner

Good roles help users predict the general shape of their access.

### Permissions

Permissions are the specific capabilities those roles grant.

Examples:

- can edit content
- can invite members
- can export reports
- can change billing
- can delete projects

### Visibility

Visibility answers what the user can see.

Examples:

- can view the project list
- can see financial metrics
- can access audit logs
- can discover the existence of private resources

### Capability

Capability answers what the user can actually do.

Examples:

- can open settings but not save changes
- can view a document but not comment
- can see a project exists but cannot open it

Do not blur these distinctions.

Many permission problems start when the UI acts as if `visible`, `available`, and `editable` are the same thing.

## Admin and member mental models should differ clearly

Admins often think in terms of:

- governance
- organization-wide consequences
- user management
- risk and compliance
- system configuration

Members often think in terms of:

- getting work done
- what is available to them right now
- why an action is blocked
- who to ask when they need more access

Do not design every access screen from the admin’s point of view.

A user blocked from taking one action usually needs a fast explanation and a path forward, not a miniature IAM console.

## Role models should match user language, not internal org charts

Prefer role labels users can understand quickly.

Good defaults:

- keep role names short and stable
- group roles by responsibility or scope, not by internal service ownership
- explain the practical consequences of each role
- expose the highest-impact differences first

If two roles differ only on one rare edge case, the model may be too fine-grained for the surface you are designing.

## Permission editing needs consequence clarity

Permission screens become risky when users cannot tell:

- which person or group is changing
- which scope is affected
- what the change grants or removes
- whether the change is immediate
- whether the change affects other users, automations, or billing

Good defaults:

- keep subject, role, and scope visible while editing
- show the before/after state for meaningful changes
- isolate dangerous capabilities like owner transfer, billing control, destructive admin powers, or publish rights
- use review or confirmation steps when the consequence is broad or irreversible
- preserve a clear way back when users are comparing options

For high-risk changes, also use [destructive action UX](./destructive-action-ux.md).

## Risky role changes should feel appropriately serious

Examples of higher-risk changes:

- granting admin or owner access
- removing the last admin
- revoking a user’s access entirely
- transferring billing responsibility
- changing publication or approval rights
- widening access to sensitive data

Good safeguards may include:

- explicit consequence copy
- review summaries
- warnings about downstream impact
- requirement to choose a replacement admin before removal
- short undo windows where genuinely safe
- audit-log visibility when organizational consequences matter

Do not hide these consequences behind a generic dropdown and toast.

## Request-access flows should reduce dead ends

Users often need access at the exact moment they are trying to finish something.

Strong request-access patterns answer:

- what is blocked
- why it is blocked
- who can approve access
- what the user can do next
- what happens after they request access

Good defaults:

- explain the missing role or permission in plain language when known
- show a `Request access` path when the product can support it
- show `Switch account`, `Back to workspace`, or equivalent fallback actions when the issue is account or scope mismatch
- preserve the intended destination when users return with the right access later
- include enough context in the request that approvers understand what the user needs and why

A request-access flow should feel like progress, not like an apologetic dead end.

## Access-denied recovery should match the real failure

Not every block is the same.

### Signed out

The recovery is authentication.

### Signed in to the wrong account or workspace

The recovery is switching context.

### Missing role or approval

The recovery is request access, escalation, or read-only fallback.

### Feature not available on this plan

The recovery may be upgrade, workspace transfer, or a different path entirely.

The error state should match the real cause.

For route-level permission states, also use [empty-state patterns](./empty-state-patterns.md).

## Visibility and capability should be chosen deliberately

Common patterns include:

### Hidden entirely

Use when revealing the existence of the object would itself create risk or noise.

### Visible but unavailable

Use when users benefit from knowing the feature or object exists, but cannot use it yet.

Examples:

- disabled controls with explanation
- locked premium features with honest plan language
- read-only views with missing edit rights

### Discoverable with escalation path

Use when seeing the feature helps users understand what to request next.

Examples:

- `You can view this dashboard after your admin grants reporting access.`
- `Billing settings are visible to organization admins only. Request access.`

Do not choose one visibility pattern accidentally.

The choice shapes user trust and learnability.

## Scope must stay visible in enterprise products

Permissions often break down because users cannot tell which layer they are editing.

Make scope explicit:

- organization
- workspace
- project
- environment
- document or object
- personal preference vs shared setting

If users think they are editing one project but actually change an entire workspace, the UI has failed before the backend even runs.

For broader structural scope and settings grouping, also use [information architecture UX](./information-architecture-ux.md).

## Good permission UI is specific without becoming a wall of toggles

A gigantic matrix of checkboxes is not automatically clarity.

Prefer:

- role-based presets when users mostly assign common bundles
- advanced per-permission editing only when it is genuinely needed
- grouped capabilities by task or domain
- explanatory summaries that say what a role can do in plain language
- progressive disclosure for rare or advanced controls

The goal is not to expose every bit flag.

The goal is to help users make confident access decisions.

## Request, review, and audit should feel connected

When access changes matter operationally, users benefit from seeing:

- pending requests
- who approved what
- recent changes
- who currently holds privileged access
- when elevated access was granted or removed

This is especially useful for admin surfaces, audit-sensitive products, and shared workspaces where mistakes affect teams, not just individuals.

## Practical checklist

- Can users tell the difference between role, permission, visibility, and capability?
- Is the current scope obvious while viewing or editing access?
- Do admin and non-admin users get appropriately different explanations?
- Are risky role changes treated with clear consequence framing?
- Does a blocked user get a real next step instead of a dead end?
- Are request-access flows specific about who controls approval and what happens next?
- Is the UI using bundles when they help and detailed per-permission editing only when necessary?
- Can users tell what they can see versus what they can change?

## Anti-patterns

Avoid:

- naming roles after internal teams or infrastructure instead of user-understandable responsibility
- hiding scope so completely that users do not know what level they are editing
- using the same recovery state for signed-out, wrong-account, and permission-denied failures
- making users request access without saying who can grant it
- collapsing dangerous role changes into ordinary low-friction dropdown edits
- showing a giant permission matrix when most users only need a few stable role bundles
- treating visibility and edit capability as the same thing when they are not

Good permissions UX makes access feel understandable, governable, and recoverable — not mysterious, punitive, or bureaucratically decorative.

For sign-in and recovery flows, also use [authentication and account recovery](./authentication-and-account-recovery.md).
For blocked-action states, also use [disabled buttons UX](./disabled-buttons-ux.md).
For honest permission and upgrade language, also use [interface honesty](./interface-honesty.md).
