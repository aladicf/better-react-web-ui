### Accessibility / keyboard support / component hardening

Prioritize:

- semantic honesty
- visible focus and state clarity
- keyboard parity for every important interaction
- realistic verification of component accessibility claims

Also:

- prefer native elements before custom widget inventions
- make hover-dependent behavior reachable by focus or explicit activation too
- treat focus movement after modals, add/remove actions, and dynamic UI changes as part of the UX, not just implementation trivia
- use more than color alone for current-page or selected-state cues
- treat tiny repeated glitches, state loss, and weak feedback as real UX issues even when QA says the feature technically works
- test semantic states, charts, and selected/current cues under color-vision deficiency rather than assuming contrast alone is enough
- document hidden-content rules, accessible names, and expected keyboard behavior when handing complex components to engineering
- test third-party components with skepticism; ARIA-complete does not automatically mean user-friendly or assistive-tech safe

Pair this with [component-accessibility](../../frontend-design/reference/component-accessibility.md) when the request involves accessible components, focus indicators, skip links, modal focus handling, hidden content, or vetting third-party component accessibility.
Pair this with [colorblindness-ux](../../frontend-design/reference/colorblindness-ux.md) when the work depends on semantic color, chart palettes, active-state cues, or non-color-only differentiation.
Pair this with [micro-failures-and-perceived-quality](../../frontend-design/reference/micro-failures-and-perceived-quality.md) when the interface feels unreliable because of repeated small papercuts, hover traps, weak acknowledgments, or brittle state continuity.
