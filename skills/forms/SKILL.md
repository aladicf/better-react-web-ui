---
name: forms
description: Design, structure, or improve form interfaces for clarity, completion rates, and user confidence. Use when the user asks to build a form, redesign a form flow, improve form conversion, add multi-step forms, fix form UX, or structure field layouts and validation.
metadata:
  argument-hint: "[form or flow]"
---

Build forms that users complete without confusion, anxiety, or abandonment. The goal is not to collect every possible field; it is to remove every unnecessary obstacle between the user and their goal.

Consult the [form validation patterns](../frontend-design/reference/form-validation-patterns.md) reference for validation timing, error placement, multi-field dependencies, async validation, and recovery design.
Consult the [live validation UX](../frontend-design/reference/live-validation-ux.md) reference for blur-vs-real-time timing, reward-early/punish-late behavior, and copy-paste-friendly validation.
Consult the [error recovery](../frontend-design/reference/error-recovery.md) reference for what happens after validation or submission fails.
Consult the [disabled buttons UX](../frontend-design/reference/disabled-buttons-ux.md) reference when deciding whether to block submit buttons or keep them enabled with error explanation.
Consult the [component anatomy](../frontend-design/reference/component-anatomy.md) reference for button, input, checkbox, radio, toggle, dropdown, and textarea anatomy guidance.

## MANDATORY PREPARATION

Users start this workflow with `/forms`. Once this skill is active, load $frontend-design — it contains design principles, anti-patterns, and the **Context Gathering Protocol**. Follow that protocol before proceeding — if no design context exists yet, you MUST load $setup first. Additionally gather: what goal the user is trying to achieve, which fields are truly required, and what causes abandonment in the current flow.

## Assess Form Needs

Understand the form's purpose and context:

1. **User goal**: What does the user get by completing this form? The clearer the payoff, the higher the completion rate.
2. **Field necessity**: Every field you add drops completion rates. Challenge each field: is it required now, or can it be collected later?
3. **Context of use**: Is the user rushed, distracted, using a compact viewport or coarse pointer, or in a stressful situation? Stressful contexts need simpler forms.
4. **Failure points**: Where do users currently drop off? Long forms, unclear labels, and unexpected validation are common culprits.

## Form Structure

### Field order

- Ask easy questions first to build momentum
- Group related fields visually (name fields together, address fields together)
- Place optional fields at the end or mark them clearly
- Separate billing and shipping only when they are genuinely different

### Label design

- Use clear, scannable labels above the input (not inside as placeholder text)
- Sentence case is easier to read than Title Case
- Be specific: "Card number" not "Payment info"
- Helper text should explain format requirements, not repeat the label

### Input design

- Match input width to expected content (postal code fields should not be full-width)
- Use the appropriate input type (`type="email"`, `type="tel"`, `type="date"`) for better browser keyboards, autofill, and validation hints
- Show formatting hints as the user types (credit card spacing, phone number grouping)
- Autofill-friendly: use standard `name` and `autocomplete` attributes

### Multi-step forms

Break long forms into steps when:
- There are more than 6-8 fields
- The form covers distinct topics (account info, payment, confirmation)
- Users need to review before final submission

**Step design**:
- Show progress ("Step 2 of 4") so users know what remains
- Allow navigation back to previous steps
- Preserve entered data if the user leaves and returns
- Validate each step before allowing progression, but do not block navigation backward

## Validation Strategy

### Timing

- Validate on blur for clearly completed fields (email, phone, format-required fields)
- Validate on input only for immediate feedback that helps (password strength, character count)
- Validate on submit for everything else, especially cross-field dependencies
- Never validate a pristine field; it creates anxiety

### Error design

- Place error messages directly below the field
- Explain what went wrong and how to fix it
- Use `aria-invalid` and `aria-describedby` for screen reader association
- Preserve all user input when validation fails
- Move focus to the first error after failed submission

### Success states

- Subtly confirm valid fields with a checkmark or green border
- Remove success indicators when the user edits the field again
- Do not celebrate every valid field; it becomes noise

## Responsive Form UX

- Ensure coarse-pointer targets are at least 44×44px
- Use appropriate input types for optimized keyboards
- Minimize scrolling by breaking into steps or using progressive disclosure
- Show the numeric keyboard for number fields, email keyboard for email fields
- Avoid dropdowns for short lists; use radio buttons or segmented controls instead

## Accessibility

- Associate every input with a label using `for`/`id`
- Use `fieldset` and `legend` for grouped fields
- Announce form-level errors with `role="alert"` or `aria-live="polite"`
- Ensure error messages are programmatically associated with fields
- Test keyboard navigation through the entire form
- Do not rely on color alone for error indication

## Anti-Patterns

- **Too many fields**: Every additional field reduces completion rates
- **Placeholder as label**: Disappears when the user types; bad for memory and accessibility
- **Validate on load**: Pristine fields showing errors feel accusatory
- **Vague errors**: "Invalid input" without explanation leaves users guessing
- **Clearing fields on error**: Losing typed data is deeply frustrating
- **Disabled submit without guidance**: A grayed-out button with no visible errors is a dead end
- **Multi-step without progress indicator**: Users do not know how much remains
- **Inconsistent validation timing**: Some on blur, some on submit, with no clear logic
- **Ignoring input semantics**: Using `type="text"` for phone numbers prevents browsers from showing the best available keyboard and autofill behavior
- **No save-and-resume**: Long forms that cannot be saved mid-progress punish interruptions

## Verify Form Quality

Before shipping:

- [ ] Every field is justified; optional fields are clearly marked
- [ ] Labels are clear, specific, and above the input
- [ ] Validation does not trigger on pristine fields
- [ ] Errors explain what went wrong and how to fix it
- [ ] Input is preserved when validation fails
- [ ] Focus moves to the first error after failed submission
- [ ] Multi-step forms show progress and allow backward navigation
- [ ] Browser keyboards, autofill, and validation hints are optimized per field type
- [ ] The form is fully keyboard-navigable
- [ ] Color is not the only indicator of error or success
