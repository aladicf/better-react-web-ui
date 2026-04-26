---
name: a11y
description: Systematically audit and remediate accessibility issues in UI, focusing on keyboard navigation, screen reader support, color contrast, semantic HTML, ARIA usage, and motion sensitivity. Use when the user wants to improve accessibility, make a component accessible, fix WCAG violations, add keyboard support, or ensure screen reader compatibility.
metadata:
  argument-hint: "[target]"
---

Systematically improve accessibility so the interface works for users with disabilities, temporary impairments, and assistive technology.

This skill focuses on remediation and implementation, not just scoring. It complements `audit` (which measures across dimensions) and `harden` (which handles edge cases broadly). Use this when accessibility is the primary goal.

## MANDATORY PREPARATION

Users start this workflow with `/a11y`. Once this skill is active, load $frontend-design — it contains design principles, anti-patterns, and the **Context Gathering Protocol**. Follow that protocol before proceeding — if no design context exists yet, you MUST load $setup first.

Consult the [accessibility testing reference](../frontend-design/reference/accessibility-testing.md) for automated tool integration (axe, WAVE, Pa11y) and CI workflow guidance.
Consult the [colorblindness UX reference](../frontend-design/reference/colorblindness-ux.md) when color is carrying meaning in states, charts, or validation.
Consult the [component accessibility reference](../frontend-design/reference/component-accessibility.md) for keyboard support, focus handling, skip links, and hidden content patterns.
Consult the [interaction design reference](../frontend-design/reference/interaction-design.md) for focus, loading, transitions, and feedback states.
Consult the [semantic color reference](../frontend-design/reference/semantic-color.md) when checking whether color communicates state or just decoration.
Consult the [responsive design reference](../frontend-design/reference/responsive-design.md) when accessibility needs to adapt across compact viewports, coarse-pointer contexts, or zoom levels.

## Assess Accessibility

Identify what is broken and who it affects:

1. **Run automated checks first**:
   - Use axe-core, WAVE, or Pa11y against critical pages
   - Target WCAG 2.1 AA as the baseline
   - Document violations by severity: critical (blocks task), serious (difficult workaround), moderate (annoying), minor (polish)
   - Treat automated results as a fast warning system, not a complete audit

2. **Test keyboard navigation manually**:
   - Unplug the mouse. Can you reach every interactive element?
   - Is the tab order logical and predictable?
   - Are focus indicators visible and clear?
   - Are there keyboard traps (places you cannot tab out of)?
   - Do custom components respond to Enter, Space, Escape, and arrow keys?

3. **Test with a screen reader**:
   - Use NVDA (Windows), VoiceOver (macOS/iOS), or TalkBack (Android)
   - Navigate by headings, landmarks, and form fields
   - Verify that dynamic content changes are announced
   - Check that decorative elements are hidden from assistive technology
   - Confirm that error messages and status updates are read aloud

4. **Check visual accessibility**:
   - Verify contrast ratios: 4.5:1 for normal text, 3:1 for large text, 3:1 for UI components
   - Test at 200% and 400% zoom without horizontal scrolling or content loss
   - Simulate color-vision deficiencies (deuteranopia, protanopia, tritanopia)
   - Ensure color is not the only signal for state or meaning
   - Check that text remains readable when high-contrast mode is enabled

5. **Check motion and animation**:
   - Enable `prefers-reduced-motion` and confirm the interface remains usable
   - Ensure no critical information is hidden behind motion-only reveals
   - Verify that auto-playing content can be paused or stopped

## Remediate by Area

### Semantic HTML

Use the right element for the job. Native HTML elements come with built-in accessibility.

**Fixes**:
- Replace `<div>` or `<span>` buttons with `<button>` elements
- Use `<a>` only for navigation, `<button>` for actions
- Use `<nav>`, `<main>`, `<aside>`, `<header>`, `<footer>` for landmarks
- Use `<ul>` / `<ol>` for lists, not styled divs
- Use `<table>` for tabular data, not CSS grid layouts
- Use `<label>` explicitly associated with inputs via `for` attribute
- Use `<fieldset>` and `<legend>` for related form groups

**Anti-patterns to remove**:
- Clickable divs without `role`, `tabindex`, and keyboard handlers
- Headings used only for sizing (`<h1>` through `<h6>` should reflect document structure)
- Placeholder text used as labels
- Empty links or buttons with only icons and no accessible name

### Keyboard Navigation

Every interactive element must be reachable and operable without a mouse.

**Fixes**:
- Ensure all interactive elements have `tabindex="0"` (or are naturally focusable)
- Remove `tabindex="-1"` from elements that should be focusable
- Remove positive `tabindex` values (they create unpredictable order)
- Implement keyboard handlers for custom components:
  - Buttons: Enter and Space activate
  - Toggles: Enter or Space toggle
  - Menus: Enter opens, Escape closes, arrow keys navigate
  - Modals: Tab cycles within, Escape closes, focus returns to trigger
  - Accordions: Enter or Space toggle, arrow keys move between items
- Ensure focus is visible: provide a clear focus ring that is not suppressed by `outline: none` without replacement

### Focus Management

Focus must be intentional, visible, and predictable.

**Fixes**:
- On route change in SPAs, move focus to the new page heading or main content
- When a modal opens, trap focus inside and return focus to the trigger on close
- When a dropdown opens, move focus to the first item
- When an error occurs, move focus to the error summary or first invalid field
- When content is removed, move focus to a logical remaining element (not document.body)
- Do not auto-focus fields on page load unless the user explicitly initiated the action

### ARIA

Use ARIA only when native HTML is insufficient. ARIA does not change behavior, only semantics.

**When to use ARIA**:
- Custom components that have no native HTML equivalent (tabs, tree views, complex menus)
- Landmark regions that need explicit roles
- Live regions for dynamic content announcements
- Accessible names or descriptions that cannot be provided by visible text

**Common ARIA fixes**:
- Add `role="dialog"` and `aria-modal="true"` to modals
- Add `aria-expanded` to disclosure buttons and accordion triggers
- Add `aria-current="page"` to the active navigation item
- Add `aria-live="polite"` or `aria-live="assertive"` to status containers
- Add `aria-label` or `aria-labelledby` to icons and icon-only buttons
- Add `aria-describedby` to inputs with helper text or error messages
- Add `aria-invalid="true"` to invalid form fields

**ARIA anti-patterns**:
- Do not add `role="button"` to actual `<button>` elements
- Do not use `aria-hidden="true"` on focusable elements
- Do not use conflicting roles (e.g., `role="button"` on a link)
- Do not nest interactive elements inside each other
- Do not rely on ARIA alone without implementing the corresponding keyboard behavior

### Color and Contrast

Ensure information is perceivable regardless of visual ability.

**Fixes**:
- Meet WCAG AA contrast: 4.5:1 for normal text, 3:1 for large text and UI components
- Never rely on color alone for state, error, or required indicators
- Pair semantic colors with text labels, icons, or shape differences
- Check semantic color ramps under color-vision simulation
- Ensure focus indicators have sufficient contrast against their background
- Provide visible text labels or icons alongside colored status indicators

### Screen Reader Support

Ensure assistive technology users receive equivalent information.

**Fixes**:
- Provide descriptive alt text for informative images; use empty alt for decorative images
- Use `aria-live` regions for dynamic updates (search results, form submissions, notifications)
- Ensure form errors are associated with their fields via `aria-describedby`
- Provide accessible names for all icons, buttons, and controls
- Use headings hierarchically (do not skip levels)
- Mark decorative SVGs with `aria-hidden="true"` or `role="img"` with a title
- Ensure tables have proper `th` headers and `scope` attributes

### Motion and Animation

Respect users who cannot tolerate or do not want motion.

**Fixes**:
- Wrap animations in `@media (prefers-reduced-motion: no-preference)` or provide reduced-motion alternatives
- For `prefers-reduced-motion: reduce`, replace motion with instant state changes or subtle fades
- Do not auto-play video or animations without a pause/stop control
- Ensure parallax and scroll-triggered effects do not cause disorientation
- Respect motion preferences in carousels, slideshows, and onboarding tours

## Verify Improvements

After remediation, verify that fixes work:

- **Re-run automated checks**: confirm previous violations are resolved and no new ones were introduced
- **Keyboard pass**: tab through every interactive element again
- **Screen reader pass**: navigate by headings, landmarks, and form fields
- **Zoom test**: confirm usability at 200% and 400%
- **Color-vision simulation**: confirm states and charts remain distinguishable
- **Reduced motion**: enable `prefers-reduced-motion` and confirm the interface is still usable
- **Real devices**: test on actual assistive technology when possible

## Practical Checklist

- [ ] All interactive elements are reachable by keyboard
- [ ] Focus order is logical and predictable
- [ ] Focus indicators are visible
- [ ] Native HTML elements are used where possible
- [ ] ARIA is used only when HTML is insufficient
- [ ] Custom components have appropriate keyboard handlers
- [ ] Color contrast meets WCAG AA (4.5:1 for text)
- [ ] Color is not the only signal for state or meaning
- [ ] Images have descriptive alt text (decorative images are marked as such)
- [ ] Form inputs have associated labels
- [ ] Form errors are linked to fields and announced
- [ ] Dynamic content changes use aria-live regions
- [ ] Coarse-pointer targets are at least 44 by 44 pixels
- [ ] Interface remains usable at 200% zoom
- [ ] Motion respects `prefers-reduced-motion`
- [ ] Automated tests pass with no WCAG AA violations
- [ ] Manual keyboard and screen reader tests pass

**NEVER**:
- Rely on automated testing alone
- Use ARIA without implementing corresponding keyboard behavior
- Rely on color alone for important information
- Remove focus indicators without providing a replacement
- Skip manual testing with real assistive technology for critical flows
- Treat accessibility as a one-time fix rather than an ongoing practice

Remember: accessible design is usable design. Fixing accessibility issues usually improves the experience for everyone.
