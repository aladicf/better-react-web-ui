# Verify an interface and its fixes

Use this procedure for visual implementation, critique, audit, and final polish. Scale the checks to the changed feature and the evidence available.

## Establish the evidence

1. Identify the target source path, route, and revision or working-tree state.
2. Use the project's existing development server and browser tools when available. Respect command restrictions. Start a server only when inspection requires it, and record how to stop any server you start.
3. Capture the intended page at desktop and phone widths appropriate to the product. For a local component repair, capture that component in its real context. Record viewport dimensions, theme, and relevant interaction state.
4. Inspect the captures. An error page, loading overlay, missing asset, wrong route, or blank image does not establish visual quality. Retake unusable captures after resolving the cause.
5. Test relevant interaction separately. A screenshot cannot establish keyboard behavior, focus order, screen-reader output, performance, or successful submission.

When browser tools or a working application are unavailable, continue useful source inspection. Say that visual behavior is unverified. Existing screenshots can inform the review only when their target and freshness are known. A user-provided screenshot is evidence of what they saw, but its viewport and revision may need clarification.

Do not require physical devices or a second reviewer when unavailable. Identify the concrete limit of emulation or single-reviewer inspection. Use subagents only when the user explicitly requests them.

## Review against the task

Check the primary action, hierarchy, readability, responsive behavior, and relevant states. Preserve explicit brand and scope constraints. If there is an approved visual reference, use [reference fidelity](reference-fidelity.md).

Classify findings as observed defects, reasoned risks, or untested conditions. Name the evidence and affected element. A qualitative score is a reviewer judgment, not a measured conversion result. Do not predict abandonment or claim accessibility compliance from appearance alone.

## Carry findings into a fix pass

The response is the default review deliverable. Reuse a prior report in the conversation when the target matches. Save a Markdown review only when the user requests a durable report or the authorized workflow already includes one. Reuse the project's report location; if none exists, use `.better-react-web-ui/reviews/` inside the owning application.

Keep the record small:

```markdown
# Review: [route and source path]

- Baseline: [revision or working-tree state]
- Evidence: [capture paths, viewports, themes, states, and performed checks]
- Scope: [requested changes and preserved constraints]

| ID | Finding and location | Evidence | Severity | Status |
| --- | --- | --- | --- | --- |
| F1 | [specific defect] | [capture or interaction result] | P2 | unresolved |

## Intentional exceptions

- [finding ID, exact element or pattern, reason, and source of authorization]

## Untested conditions

- [missing evidence and the check needed]
```

Keep finding IDs stable through the same fix cycle. Do not suppress a real accessibility defect because the visual pattern was intentional. Scope aesthetic exceptions to the element and reason that justified them.

Before applying a saved finding, check its target and compare the recorded baseline with current code. A finding from another route or an older implementation must be re-established. Do not carry an old score forward as current evidence.

If a stale finding does not apply to the current target, mark it `not reproduced` with the inspected baseline and reason. Do not mark it resolved by this work or create the missing element just to satisfy an old report. If verification is unavailable, report that uncertainty instead of concluding the defect is absent.

## Verify changes and report the result

After fixing a finding, recapture the same viewport, theme, and state when those conditions remain relevant. Repeat the interaction check that exposed a behavioral defect. Mark each finding:

- `resolved` when current evidence shows the requested fix.
- `partial` when some of the defect remains.
- `unresolved` when the defect persists.
- `unverified` when a fix was implemented but could not be checked.

Check for regressions caused by the fix. Do not repeatedly expand a focused review into unrelated work. Report remaining findings and untested states alongside completed work. Say that the scoped checks passed only when their evidence supports it; avoid claiming the entire application is verified.

Stop temporary inspection servers you started when they are no longer needed, unless the user wants them kept running. Retain evidence only in the agreed location and avoid capturing secrets or personal data unrelated to the review.
