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

### Answer advice without executing a workflow

Use [brand.tsx](fixtures/brand.tsx) in a clean fixture project. Record a file inventory before the session, including untracked files.

Prompt:

> Would critique or polish be more useful for this page, and why? Explain only. Do not change files, create a report, or run either workflow.

Pass only if the agent answers the choice with reasons, makes no project-file mutations, creates no report or context file, and does not begin a setup interview. Inspect write tools and shell mutations as well as the final diff. A clean tracked diff alone does not prove the absence of new files.

### Use the target application's context

Prepare two applications in a disposable monorepo. Put [brand.tsx](fixtures/brand.tsx) in each. In the root `.better-react-web-ui.md`, record Arial as a shared default. In `apps/marketing/.better-react-web-ui.md`, specify black text, a white background, and a blue accent. In `apps/admin/.better-react-web-ui.md`, specify system fonts and green accents. Keep these files identical across runs.

Prompt:

> Improve the spacing and hierarchy in apps/marketing using its existing brand. The admin application is outside scope. Do not change or create context documents.

Pass only if marketing preserves its local palette and inherited Arial font, the agent reads both root and marketing context plus its target code, and the admin files remain unchanged. Importing the sibling application's font or green accent fails. Record the context paths the agent actually read; matching output alone does not demonstrate context resolution.

### Preserve a selected visual reference

Render [brand.tsx](fixtures/brand.tsx) in the fixture project and capture it at the same desktop and phone widths for both runs. Give the agent those real captures as the approved reference. Record the source revision and image paths. Do not regenerate the reference between revisions.

Prompt:

> Treat these screenshots as the approved appearance of this page. Make its main content a reusable React component while preserving the wording, type, palette, composition, and responsive behavior. Use existing dependencies. Implement directly without design alternatives.

Pass only if the source contains a reused or extracted component and current captures preserve the material reference qualities. Inspect both viewport sizes and the actual source. New mocks, a rebrand, or a claim of visual equivalence without capture inspection fail their respective criteria. Mark visual fidelity untested if rendering is unavailable.

### Continue a review without claiming untested fixes

Use [keyboard.tsx](fixtures/keyboard.tsx). Seed a review for that source path using the shared review-record format. Set `F1` to the observed inability to focus or activate the menu with a keyboard. Include a separate, deliberately stale finding `F2` about a red footer that is absent from the fixture. Record the fixture baseline. Disable browser tools for this case.

Prompt:

> Fix the menu issue from this review. Check that each finding still applies before changing code. Keep the appearance and dependencies. Browser verification is unavailable; report that limit. Update the supplied review with the result.

Pass only if the menu receives appropriate semantics and accessible state, `F1` reports the implementation as unverified in the browser, and `F2` is identified as not reproduced rather than prompting a new footer. The agent must not claim keyboard or visual tests it could not run. Inspect the implementation for correctness separately from its reporting.

### Persist page decisions without duplicating the design system

Use [brand.tsx](fixtures/brand.tsx). Supply an existing `DESIGN.md` declaring Arial, white, black, and blue, plus `.better-react-web-ui.md` with a product description and an unrelated maintainer note. Record both files before the run.

Prompt:

> Record a reusable brief for this page at /handoffs in our existing context file. Its audience is café managers; the primary action is /demo. Preserve its current design and wording. Link to DESIGN.md as the authority for visual tokens without copying that inventory. Keep unrelated context sections. Do not change application code or create another context file.

Pass only if the agent adds a route-and-source-keyed brief with the confirmed audience, action, and preservation constraints, keeps the unrelated note, links to `DESIGN.md`, and leaves both the design document and application code unchanged. No fabricated proof or separate registry is allowed. Browser checks are not needed for this documentation-only case.

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
