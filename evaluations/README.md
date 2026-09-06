# Evaluate skill behavior

Use this procedure to compare two library revisions in real agent sessions. The routing-fixture validator checks fixture consistency. It does not measure an agent's choices or generated UI quality.

## Prepare comparable runs

1. Use a disposable copy of an existing React and Tailwind project with a working development server. Record its commit, framework versions, and start command.
2. Install the complete skill set from the library revision under evaluation into that project scope. Use the explicit supported agent flag for your host.
3. Copy one fixture below into the project's page or route component location. Keep the same location and baseline for both revisions.
4. Start a fresh agent session with the same model, reasoning settings, tools, and project instructions for each run. Exclude unrelated design skills where the host permits it.
5. Send the case prompt without the acceptance criteria or expected skill names. Do not coach the agent after a failure.
6. Save the transcript, source diff, elapsed time, and checks. Record token usage only when the host exposes it.

Use existing development and test commands. A build is not required by this evaluation. Do not authorize publishing, paid services, or messages to others for these cases.

## Run the cases

### Preserve an existing brand

Use [brand.tsx](fixtures/brand.tsx).

Prompt:

> Improve the spacing and heading hierarchy on this page. Keep Arial, the pure white background, black text, blue accent, wording, section order, and the existing React and Tailwind setup. Implement directly. Do not create design alternatives.

Expected routing includes `arrange` or `hierarchy`, with shared `frontend-design` guidance. Pass only if the result preserves every explicit brand constraint, improves grouping at desktop and phone widths, and introduces no dependency or selection checkpoint. An unrelated rebrand fails the case.

### Build one landing page

Use [landing.tsx](fixtures/landing.tsx).

Prompt:

> Build one landing page for ShiftNote, a fictional handoff notebook for small café teams. It records opening tasks, stock notes, and unfinished work for the next shift. The audience is café managers. Use a warm, practical tone and choose the visual direction yourself. The only primary action is a link to /demo, which already exists. Do not invent customers, testimonials, prices, or results. Use this project's React and Tailwind setup. Implement directly, without alternatives or another design approval.

Expected routing includes `frontend-design` or the direct path in `add-ui`. Pass only if there is one implemented page, the offer is clear, `/demo` works, and no fabricated proof appears. Inspect at desktop and phone widths. Review composition separately from functional correctness.

### Repair keyboard interaction without redesigning

Use [keyboard.tsx](fixtures/keyboard.tsx). Do not provide a design-context file.

Prompt:

> The menu control works with a mouse but not a keyboard. Fix its semantics, accessible name, expanded state, and visible keyboard focus. Preserve the wording, appearance, toggle behavior, and existing dependencies. Do not redesign the page.

Expected routing includes `a11y`. Pass only if Tab reaches the control, Enter and Space toggle it, a visible focus indicator appears, and assistive technology can identify its name and expanded state. A brand interview or cosmetic redesign fails the scope check.

### Restore content under reduced motion

Use [motion.tsx](fixtures/motion.tsx).

Prompt:

> This feature sequence leaves content invisible with reduced motion enabled. Fix the fallback so every feature remains readable and reachable in that mode. Preserve the normal animation and the content. Use the current React and Tailwind setup without new packages.

Expected routing includes `animate` or `a11y`. Pass only if all three features are visible in reduced-motion mode, ordinary scrolling reaches them on a phone, and the normal animation still runs when reduced motion is off. Removing only the animation while leaving opacity at zero fails.

## Review and record evidence

Copy [result-template.md](result-template.md) into an output directory outside the library. Keep one record per case, model, and library revision.

Record the observed skill selection from tool events when available. Otherwise mark routing as unobserved. Do not infer activation from polished output or a matching word in the answer.

Mark each acceptance criterion `pass`, `fail`, or `untested`, with a source location, transcript event, or browser artifact. Record unnecessary questions, new dependencies, scope changes, broken interactions, and visual findings separately.

For changed workflows, run the relevant cases on both revisions. Repeat a failure once in a fresh session to distinguish a recurring problem from a single run. Keep both results. Do not select only the better attempt.

Use these criteria for the visual review:

- The offer and primary action are clear at desktop and phone widths.
- Text remains readable without clipping or horizontal overflow.
- The hierarchy supports the requested task and preserves explicit constraints.
- Keyboard and reduced-motion states remain usable.

A maintainer reviews the browser evidence before accepting a visual result. Static inspection and repository validation do not establish visual quality. This evaluation is a manual replay procedure, not an automated model benchmark or a CI certification.
