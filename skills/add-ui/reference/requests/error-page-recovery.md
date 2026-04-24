### 401 / 403 / 429 / 500 / 503 / error-page recovery

Prioritize:

- recovery that matches the failure
- trust and clarity over cleverness
- preserving task context where possible
- calm, brand-consistent tone

Also:

- for `401` or session-expired flows, give users a strong sign-in path and preserve the interrupted destination when possible
- for `403` or access-denied flows, explain the restriction clearly and show request-access, switch-account, or fallback navigation paths
- for `429` or rate-limit states, explain that the limit is temporary and show retry timing if the product knows it
- for `500` or server-error states, provide retry plus a dependable fallback like home, dashboard, or recent stable destinations
- for `503` or maintenance flows, link to status/incident detail and set expectations about timing when known
- keep route-level recovery actions more prominent than illustrations, mascots, or novelty copy

Pair this with [empty-state-patterns](../../frontend-design/reference/empty-state-patterns.md) when the work is specifically about sign-in-required, access-denied, rate-limited, server-error, maintenance, or not-found recovery surfaces.
