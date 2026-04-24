### Auth / account / settings

Prioritize:

- clarity
- reassurance
- error resilience
- reduced ambiguity over decorative flourish

Also:

- reduce credential friction: support password managers, pasted credentials, and clear password rules
- explain why extra verification is happening instead of dropping users into mysterious dead ends
- treat recovery as getting back into the account, not just forcing a password reset ceremony
- avoid mystery-disabled primary actions on sign-in, sign-up, verification, and recovery flows; keep the CTA explainable or enabled with clear recovery guidance
- keep social sign-in optional for broad audiences unless the product truly depends on federation
- preserve destination and progress across session expiry or re-authentication when possible
- treat language, country, currency, and similar regional settings as distinct choices when the product serves global users
- avoid assuming IP or browser locale should silently override the user's intent
- separate personal settings, organization settings, billing, security, and notification preferences according to who is affected and who has permission to change them

For redesigns of existing auth surfaces:

- preserve task order, field expectations, and recovery paths unless the current flow is demonstrably broken
- explore differences through trust tone, copy clarity, typography, color, spacing, and support content more than through novel interaction patterns

Pair this with [authentication-and-account-recovery](../../frontend-design/reference/authentication-and-account-recovery.md) when the work touches sign-in, sign-up, reset password, magic links, social sign-in, two-factor flows, or access recovery.
Pair this with [disabled-buttons-ux](../../frontend-design/reference/disabled-buttons-ux.md) when the work depends on blocked `Continue` / `Verify` / `Create account` actions, unavailable states, or in-progress button locking.
Pair this with [language-and-locale-selection](../../frontend-design/reference/language-and-locale-selection.md) when the work touches language selectors, region pickers, currency preferences, or locale settings.
Pair this with [information-architecture-ux](../../frontend-design/reference/information-architecture-ux.md) when the work depends on settings structure, role-based grouping, or keeping account and organization scope clear.
Pair this with [responsive-design](../../frontend-design/reference/responsive-design.md) when settings navigation, authentication forms, or account-management layouts need different structures across narrow, wide, and split-screen contexts.
