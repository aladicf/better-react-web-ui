### Permissions / roles / access management

Prioritize:

- scope clarity
- understandable role models
- real recovery paths for blocked users
- consequence-aware editing for risky changes

Also:

- distinguish role, permission, visibility, and capability instead of flattening them into one fuzzy access concept
- make it obvious whether the user is editing organization, workspace, project, or object-level access
- explain who can grant access and what happens after a `Request access` action instead of leaving users at a 403 dead end
- treat admin/owner transfers, last-admin removal, and broad permission grants as high-consequence edits that need stronger framing than an ordinary dropdown change
- prefer role bundles for most people and expose detailed per-permission editing only when the product genuinely needs it

Pair this with [permissions-and-roles-ux](../../frontend-design/reference/permissions-and-roles-ux.md) when the request involves role models, request-access flows, access-denied recovery, capability boundaries, or risky permission changes.
Pair this with [information-architecture-ux](../../frontend-design/reference/information-architecture-ux.md) when the problem is really scope confusion across organization, workspace, project, and object settings.
Pair this with [authentication-and-account-recovery](../../frontend-design/reference/authentication-and-account-recovery.md) when the issue is identity proof, sign-in recovery, or step-up authentication rather than authorization structure.
Pair this with [destructive-action-ux](../../frontend-design/reference/destructive-action-ux.md) when the work depends on revoking access, removing admins, or other risky role changes with organizational impact.
