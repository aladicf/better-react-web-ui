---
name: polish
description: Perform a final quality pass fixing alignment, spacing, consistency, and micro-detail issues before shipping. Use when the work is functionally complete and needs finishing touches—not when the hierarchy, structure, tone, or technical foundation still need major changes.
metadata:
  argument-hint: "[complete feature or page]"
---

## MANDATORY PREPARATION

Read [frontend-design](../frontend-design/SKILL.md) and follow its Context Gathering Protocol. Reuse available context and ask only about consequential gaps. Additionally gather: quality bar (MVP vs flagship).

---

Perform a meticulous final pass to catch all the small details that separate good work from great work. The difference between shipped and polished.

Polish should make existing hierarchy and systems more precise. It should not be used to decorate a weak foundation.

Consult the `empty-state` skill when zero-data surfaces themselves need design work. Use `onboard` when the broader activation flow, aha moment, or first-run strategy is the real issue.

Use [visual verification](../frontend-design/reference/visual-verification.md) for evidence, reusable findings, and final status. Reuse a matching critique from the conversation or an authorized saved report. Verify its target and baseline before acting; do not blindly apply stale findings or another route's exceptions.

## Pre-Polish Assessment

Understand the current state and goals:

1. **Review completeness**:
   - Is it functionally complete?
   - Are there known issues to preserve (mark with TODOs)?
   - What's the quality bar? (MVP vs flagship feature?)
   - When does it ship? (How much time for polish?)

2. **Identify polish areas**:
   - Visual inconsistencies
   - Spacing and alignment issues
   - Interaction state gaps
   - Copy inconsistencies
   - Edge cases and error states
   - Loading and transition smoothness

**CRITICAL**: Polish is the last step, not the first. Don't polish work that's not functionally complete.

## Polish Systematically

Work through these dimensions methodically:

Consult the [hierarchy checklist](../frontend-design/reference/hierarchy-checklist.md) for grayscale tests, action hierarchy, and label/value treatment.
Consult the [text hierarchy and readability](../frontend-design/reference/text-hierarchy-and-readability.md) for line length, line-height, alignment, baseline, and title restraint.
Consult the [action hierarchy](../frontend-design/reference/action-hierarchy.md) when checking whether actions lead or recede correctly.
Consult the [semantic color](../frontend-design/reference/semantic-color.md) when checking alerts, status, and tinted semantic surfaces.
Consult the [design-system alignment](../frontend-design/reference/design-system-alignment.md) when deciding whether a polish issue is really local detail or system drift.
Consult the [surface separation](../frontend-design/reference/surface-separation.md) when borders, cards, shadows, overlap, or background shifts feel noisy or inconsistent.
Consult the [image treatment](../frontend-design/reference/image-treatment.md) when screenshots, icons, or media feel awkward, unreadable, or poorly contained.
Consult the [finishing touches](../frontend-design/reference/finishing-touches.md) when default UI elements, accents, or decorative backgrounds need more intentional refinement.

### Visual Alignment & Spacing

- **Pixel-perfect alignment**: Everything lines up to grid
- **Consistent spacing**: All gaps use spacing scale (no random 13px gaps)
- **Optical alignment**: Adjust for visual weight (icons may need offset for optical centering)
- **Responsive consistency**: Spacing and alignment work at all breakpoints
- **Grid adherence**: Elements snap to baseline grid
- **Group clarity**: There is more space around groups than within them
- **Surface separation**: Borders, shadows, cards, and background shifts are used deliberately instead of all at once

**Check**:
- Enable grid overlay and verify alignment
- Check spacing with browser inspector
- Test at multiple viewport sizes
- Look for elements that "feel" off

### Typography Refinement

- **Hierarchy consistency**: Same elements use same sizes/weights throughout
- **Line length**: 45-75 characters for body text
- **Line height**: Appropriate for font size and context
- **Widows & orphans**: No single words on last line
- **Hyphenation**: Appropriate for language and column width
- **Kerning**: Adjust letter spacing where needed (especially headlines)
- **Font loading**: No FOUT/FOIT flashes
- **Baseline alignment**: Mixed-size text aligns cleanly when sharing a row
- **Link restraint**: Secondary links are not colored so loudly that they compete with the main path
- **Number alignment**: Numeric columns are right-aligned when comparison matters
- **Title restraint**: Section headings support the content instead of overpowering it

### Color & Contrast

- **Contrast ratios**: All text meets WCAG standards
- **Consistent token usage**: No hard-coded colors, all use design tokens
- **Theme consistency**: Works in all theme variants
- **Color meaning**: Same colors mean same things throughout
- **Accessible focus**: Focus indicators visible with sufficient contrast
- **Brand neutrals**: Preserve approved gray, black, and white tokens. Consider tinting only when the palette is open.
- **Text on color**: Check the rendered contrast and emphasis against the actual background.
- **Palette discipline**: Surfaces and accents use defined ramps, not improvised one-off shades

### Interaction States

Check the states relevant to each control. Do not add unused loading, error, or success behavior to a simple navigation link:

- **Default**: Resting state
- **Hover**: Subtle feedback (color, scale, shadow)
- **Focus**: Keyboard focus indicator (never remove without replacement)
- **Active**: Click / press feedback
- **Disabled**: Clearly non-interactive
- **Loading**: Async action feedback
- **Error**: Validation or error state
- **Success**: Successful completion

**Missing states create confusion and broken experiences**.

Make sure action hierarchy remains intact across states: the primary action should still read as primary on hover, focus, active, loading, and disabled.

### Micro-interactions & Transitions

- **Transitions**: Animate state changes only when motion clarifies feedback. Match the existing motion system.
- **Consistent easing**: Preserve purposeful project motion and remove distracting overshoot when it impedes the task.
- **No jank**: Measure problematic motion before optimizing it. Prefer transform and opacity when they fit the effect.
- **Appropriate motion**: Motion serves purpose, not decoration
- **Reduced motion**: Respects `prefers-reduced-motion`

### Content & Copy

- **Consistent terminology**: Same things called same names throughout
- **Consistent capitalization**: Title Case vs Sentence case applied consistently
- **Grammar & spelling**: No typos
- **Appropriate length**: Not too wordy, not too terse
- **Punctuation consistency**: Periods on sentences, not on labels (unless all labels have them)

### Icons & Images

- **Consistent style**: All icons from same family or matching style
- **Appropriate sizing**: Icons sized consistently for context
- **Proper alignment**: Icons align with adjacent text optically
- **Alt text**: Informative images have useful text alternatives. Decorative images use empty alt text.
- **Loading states**: Images don't cause layout shift, proper aspect ratios
- **Retina support**: 2x assets for high-DPI screens
- **Screenshot legibility**: Screenshots are not scaled so small that their structure becomes useless
- **Icon sizing discipline**: Tiny icons are not enlarged into chunky blobs, and detailed icons are not reduced to mush

### Forms & Inputs

- **Label consistency**: All inputs properly labeled
- **Required indicators**: Clear and consistent
- **Error messages**: Helpful and consistent
- **Tab order**: Logical keyboard navigation
- **Auto-focus**: Appropriate (don't overuse)
- **Validation timing**: Consistent (on blur vs on submit)

### Edge Cases & Error States

- **Loading states**: All async actions have loading feedback
- **Empty states**: Helpful empty states, not just blank space
- **Error states**: Clear error messages with recovery paths
- **Success states**: Confirmation of successful actions
- **Long content**: Handles very long names, descriptions, etc.
- **No content**: Handles missing data gracefully
- **Offline**: Appropriate offline handling (if applicable)
- **Empty-state hierarchy**: Empty states have a clear next action and don't leave dead controls hanging around needlessly

### Responsiveness

- **All breakpoints**: Test narrow, medium, and wide layouts
- **Pointer targets**: 44x44px minimum for coarse-pointer contexts
- **Readable text**: No text smaller than 14px in compact layouts
- **Overflow**: Avoid accidental page overflow. Keep intentional tables or galleries scrollable and usable.
- **Appropriate reflow**: Content adapts logically

### Performance

- **Fast initial load**: Optimize critical path
- **No layout shift**: Elements don't jump after load (CLS)
- **Smooth interactions**: No lag or jank
- **Optimized images**: Appropriate formats and sizes
- **Lazy loading**: Off-screen content loads lazily

### Code quality

- Fix errors introduced by the change and run the project's relevant existing checks.
- Remove unused imports and temporary debugging introduced by this work. Preserve intentional logging and useful TODOs.
- Address unsafe typing when it affects the changed behavior. Do not rewrite unrelated types or dependencies to satisfy a blanket ban.
- Preserve semantic HTML, accessible names, and error handling.

## Polish Checklist

Go through systematically:

- [ ] Alignment checked at the relevant viewport sizes
- [ ] Spacing uses design tokens consistently
- [ ] Typography hierarchy consistent
- [ ] Relevant interactive states implemented and checked
- [ ] Relevant transitions checked; performance claims supported by measurement
- [ ] Copy is consistent and polished
- [ ] Icons are consistent and properly sized
- [ ] All forms properly labeled and validated
- [ ] Error states are helpful
- [ ] Loading states are clear
- [ ] Empty states are welcoming
- [ ] Coarse-pointer targets are 44x44px minimum
- [ ] Contrast ratios meet WCAG AA
- [ ] Keyboard navigation works
- [ ] Focus indicators visible
- [ ] No console errors or warnings
- [ ] No layout shift on load
- [ ] Tested browsers named; remaining browser coverage reported
- [ ] Respects reduced motion preference
- [ ] No unrelated cleanup; intentional TODOs and logging preserved

**IMPORTANT**: Polish is about details. Zoom in. Squint at it. Use it yourself. The little things add up.

**NEVER**:
- Polish before it's functionally complete
- Spend hours on polish if it ships in 30 minutes (triage)
- Introduce bugs while polishing (test thoroughly)
- Ignore systematic issues (if spacing is off everywhere, fix the system)
- Perfect one thing while leaving others rough (consistent quality level)
- Use borders, shadows, or color flourishes to hide unresolved hierarchy problems
- Use bright link color, border clutter, or decorative overlap where quieter separation would work better

## Final verification

Follow [visual verification](../frontend-design/reference/visual-verification.md). Recheck changed interactions and recapture relevant visual states. For each carried finding, report resolved, partial, unresolved, or unverified with current evidence.

Use real devices or an additional reviewer when available and appropriate to the task. Otherwise state the verification limit. Do not require another person or a subagent to complete authorized work.

Report implemented changes, performed checks, and remaining material findings. Do not claim whole-application verification from a focused polish pass.
