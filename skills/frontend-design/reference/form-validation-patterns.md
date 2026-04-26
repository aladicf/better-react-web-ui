# Form Validation Patterns

Use this reference when designing validation behavior for forms: when to validate, where to show errors, how to handle multi-field dependencies, async validation, and recovery paths that help users fix mistakes rather than punishing them.

If the project already uses a mature form library, keep its baseline validation timing, error display, and accessibility behavior first. Use this reference mainly to decide validation strategy, error copy, placement, and recovery design.

## When to Validate

### Reward early, punish late

The timing of validation affects how users feel about the form.

**Validate on blur** for fields that are clearly finished:
- Email, phone, URL — formats that are complete when the user leaves the field
- Password confirmation — only after the user has had a chance to type both fields
- Required fields — after the user has visited the field, not before they interact with it

**Validate on input** only when immediate feedback is genuinely helpful:
- Password strength indicators
- Character counters with limits
- Real-time availability checks (username, coupon code)

**Validate on submit** for everything else:
- Multi-field dependencies ("end date must be after start date")
- Complex business rules that require full context
- Forms where inline validation would be noisy

**Never validate a field before the user has interacted with it.** Showing an error on a pristine field creates anxiety and feels accusatory.

### Progressive validation

1. **Pristine state**: No validation shown, helper text visible
2. **Touched state**: User has focused and left the field — validate on blur
3. **Active state**: User is editing — show inline validation only for clearly recoverable errors (password strength, format hints)
4. **Submitted state**: Full validation across all fields, summary at the top

## Error Message Placement

### Inline errors

Place error messages directly below or adjacent to the field they describe.

- **Below the input** is the strongest default — users read top-to-bottom and expect feedback to follow the field
- **Inside the input** as placeholder replacement works only for simple format errors and should not persist once the user re-enters the field
- **Above the input** is acceptable when the error must be announced before the field for screen reader users, but it breaks visual scanning

```html
<!-- Good: error below the field -->
<label for="email">Email</label>
<input id="email" type="email" aria-invalid="true" aria-describedby="email-error">
<p id="email-error" class="error">Please enter a valid email address.</p>
```

### Form-level summaries

For forms with multiple errors, add a summary at the top that:
- Lists all errors with links or focus management to jump to each field
- Uses clear, actionable language ("Fix these 3 issues before continuing")
- Appears immediately after submission, not as a toast or banner that scrolls away

### Error copy principles

- Say what went wrong and how to fix it ("Password must be at least 8 characters" not "Invalid password")
- Use plain language, not system error codes
- Avoid blaming the user ("We couldn't find that email" not "You entered a wrong email")
- Keep messages concise; long error text is often ignored
- Match the tone of the product; a banking app can be more formal than a creative tool

## Multi-Field Validation

### Cross-field dependencies

Some validation requires multiple fields to be evaluated together.

- **Date ranges**: End date must be after start date. Validate on submit or after both fields are touched.
- **Password confirmation**: Only validate after both fields have been blurred.
- **Conditional fields**: Show validation only when the conditional field is relevant (e.g., "Other" text field only when "Other" is selected).
- **Mutually exclusive groups**: At least one option must be selected. Validate on submit and show the error at the group level, not on every individual option.

### Group-level errors

When validation applies to a group of fields, display the error at the group level with a clear association to each affected field.

```html
<fieldset aria-describedby="dates-error">
  <legend>Travel dates</legend>
  <label for="start">Start date</label>
  <input id="start" type="date" aria-invalid="true">
  <label for="end">End date</label>
  <input id="end" type="date" aria-invalid="true">
  <p id="dates-error" class="error">End date must be after start date.</p>
</fieldset>
```

## Async Validation

Async validation checks server-side conditions: username availability, email uniqueness, coupon validity.

### UX rules for async validation

- **Debounce the request**: Wait ~300-500ms after the user stops typing before sending. Firing on every keystroke creates lag and server load.
- **Show pending state**: A subtle spinner or "Checking..." text lets users know validation is in progress.
- **Handle race conditions**: If the user types faster than the server responds, discard stale responses. Only show the result for the most recent input.
- **Fail gracefully**: If the network request fails, do not block submission. Treat it as unvalidated and check again on submit.
- **Do not block the form**: Async validation should not prevent the user from continuing to fill other fields.

### Async error handling

```html
<label for="username">Username</label>
<input id="username" type="text" aria-describedby="username-status">
<p id="username-status">
  <span class="checking" hidden>Checking availability...</span>
  <span class="error" hidden>That username is taken. Try another.</span>
</p>
```

## Recovery Design

### Preserve input on error

Never clear a user's input when validation fails. Losing typed data is one of the most frustrating form experiences.

### Suggest corrections

When possible, suggest a fix rather than just stating the error:
- "Did you mean example@gmail.com?" for common email typos
- "Password must contain at least one number and one special character"
- "Start time must be before end time"

### Allow resubmission

After fixing errors, the user should be able to resubmit immediately. Do not:
- Lock the form for a cooldown period
- Require re-entering unaffected fields
- Reset the form to pristine state

### Success states

Confirm valid fields subtly to reduce anxiety:
- A green checkmark or border change on clearly valid fields
- Keep it subtle — excessive celebration for every valid field becomes noise
- Remove success indicators once the user edits the field again

## Accessibility

### Screen reader announcements

- Use `aria-invalid="true"` on fields with errors
- Associate errors with fields using `aria-describedby`
- Announce form-level summaries with `role="alert"` or `aria-live="polite"` on submit
- Ensure error messages are programmatically associated, not just visually nearby

### Keyboard navigation

- Focus should move to the first error field after failed submission
- Error summaries should be keyboard-navigable if they contain links to error fields
- Do not trap focus in validation modals or overlays

### Color independence

- Do not rely on red/green color alone to indicate error/success
- Add icons, text labels, or border styles in addition to color
- Ensure contrast ratios meet WCAG AA for error text (4.5:1 against background)

## Anti-Patterns

- **Validate on page load**: Pristine fields showing errors create immediate anxiety
- **Validate on every keystroke**: Constant red borders while typing feel aggressive
- **Vague errors**: "Invalid input" without explanation leaves users guessing
- **Blaming the user**: "You entered an incorrect password" instead of "Password does not match our records"
- **Clearing fields on error**: Losing typed data is deeply frustrating
- **Blocking submission without clear guidance**: A disabled submit button with no visible errors is a dead end
- **Error messages that disappear too quickly**: Users need time to read and act on feedback
- **Inconsistent validation timing**: Some fields validate on blur, others on submit, with no clear logic
- **Async validation without debounce**: Every keystroke triggers a network request
- **Ignoring server errors on submit**: Client-side validation passing does not guarantee server acceptance

## Verify Validation Quality

Before shipping a form:

- [ ] Required fields validate after the user has interacted with them, not before
- [ ] Error messages explain what went wrong and how to fix it
- [ ] Errors are associated with fields via `aria-describedby` or equivalent
- [ ] Multi-field dependencies validate after all relevant fields are touched
- [ ] Async validation is debounced and shows a pending state
- [ ] Input is preserved when validation fails
- [ ] Focus moves to the first error after failed submission
- [ ] Color is not the only indicator of error or success
- [ ] Form-level summaries are present for multi-error forms
- [ ] Users can resubmit immediately after fixing errors
