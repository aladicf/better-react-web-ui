# Live Validation UX

Live validation can feel helpful when it works and punishing when it does not.

Use this reference when the work involves:

- inline form validation
- validation timing decisions
- blur vs real-time vs submit-only tradeoffs
- password strength and username availability
- copy-paste-heavy structured inputs
- validator override and recovery strategy

The core rule: validation timing should match the cost of interruption **and** the cost of letting the user continue.

## Treat validation as a per-field strategy, not one global rule

Different fields need different timing.

Examples:

- password strength often benefits from immediate feedback
- username availability may need near-real-time feedback
- date, phone, and structured business fields often need calmer timing
- empty required fields usually do **not** need instant scolding

One validation policy for the whole form is usually too blunt.

## Premature validation is the classic failure mode

The most frustrating pattern is showing errors before the user has actually finished giving input.

Common causes:

- validating on focus
- validating after an arbitrary character threshold even though the field is still incomplete
- validating dependent parts separately when the real unit is the whole value

If users are still typing, the UI should usually not act like they already failed.

## Late validation is usually the strongest default

For many fields, validating on `blur` is calmer than validating while the user types.

Why it often works better:

- fewer distracting flashes
- less interruption during typing and copy-paste
- lower risk of premature errors
- simpler mental model for users

This is not perfect, but it is often the best baseline for ordinary form fields.

## Show immediate errors only when users benefit from the interruption

Immediate validation makes sense when continuing would obviously waste effort.

Good candidates:

- strict prefixes or checksums
- impossible character classes for the field
- standardized identifiers where the first characters already disqualify the input
- real-time password strength guidance
- username availability or character-limit feedback

Ask:

- does the user benefit from knowing this *now*?
- would waiting until blur or submit only make the correction slower?

If not, late validation is usually safer.

## Validate empty required fields on submit by default

An empty field is not always a meaningful error the moment a user leaves it.

Users may have:

- entered the wrong field accidentally
- skipped ahead intentionally
- gone to copy something from elsewhere
- jumped back to fix another issue first

For many forms, required-empty feedback is calmer and more accurate on submit.

The earliest safer moment for many fields is when a user leaves a **non-empty** field.

## Reward early, punish late

One of the best timing patterns is:

- if a field is wrong and the user edits it, remove the error as soon as it becomes valid
- if a field was valid and the user starts changing it, wait before showing a new error until they finish the edit or leave the field

This gives users quick relief when they fix something without punishing them mid-edit.

## Copy-paste UX often matters more than live validation cleverness

Many structured fields are completed by paste, not by careful typing.

That means validation should respect:

- pasted spaces, delimiters, or line breaks
- international prefixes
- slight formatting variation when the meaning stays unambiguous

Good defaults:

- never disable copy-paste
- accept reasonable variants when they are unambiguous
- normalize on the client or server when safe
- if cleanup is needed, explain what changed or allow users to confirm it

Do not make users fight the field because the validator prefers one ceremonial format.

## Just-in-time validation can beat always-on live validation

For long or restrictive values, users may prefer to validate when they believe they are done.

Useful pattern:

- provide a `Validate` or `Verify` action for the high-friction field
- let other ordinary fields use calmer late validation or submit-time validation

This is often useful for:

- codes
- IDs
- policy numbers
- VAT / tax references
- other long structured inputs

## Override paths matter when validators are fallible

Validators are not perfect, especially for real-world addresses, names, phone numbers, and region-specific formats.

When blocking is more expensive than allowing reviewable imperfect data, provide a way forward.

Examples:

- `Use this address anyway`
- `Continue with the number I entered`
- `Skip automatic verification`

Use this carefully:

- explain the warning clearly
- require an intentional action
- measure downstream cost vs abandonment cost

Do **not** loosen validation for inputs that must obey hard technical rules.

## Server truth can still overturn client optimism

A green local checkmark is not the same as confirmed truth.

Be careful not to imply certainty the client cannot actually guarantee.

Useful distinctions:

- `Looks right` for client-side format validation
- `Available` or `Verified` only after the relevant server check succeeds

Do not let users feel tricked by a cheerful local pass that later turns into a blocking server error without explanation.

## Shorter forms reduce validation pain more than better timing alone

For long, dense journeys, one of the best fixes is often structural:

- split the task into shorter steps or pages
- validate mostly on submit for each step
- provide a task-list or step-based structure when the journey is long

Users make fewer errors when each screen asks for less.

## Use clear inline feedback, not floating scolding

When errors appear:

- keep them near the field
- keep the field, label, and message visually connected
- avoid toasts as the main home for recoverable validation
- avoid messages that linger after the field is already fixed

Once an error is truly resolved, acknowledge that quickly and calmly.

## Good situations for live validation

Live validation is often worth it when:

- the field has strong, objective rules
- mistakes are common and costly
- immediate guidance saves significant effort
- autofill or generated input handles much of the value anyway

Examples:

- password strength and requirement matching
- username availability
- strict code prefixes or impossible character classes
- character-count or content-limit feedback

## Situations where submit-only is worth testing

Validation on submit can be strong when:

- the form is short
- the page asks for only a few inputs
- live interruption would be more annoying than helpful
- users can recover quickly without scanning a giant surface

For long forms, submit-only tends to work better after the flow is broken into smaller tasks.

## Practical checklist

- Does each field use the timing that matches its risk and interruption cost?
- Are empty required fields validated at a calmer moment rather than too early?
- Are users rewarded quickly when they fix an error?
- Is copy-paste supported rather than treated like suspicious behavior?
- Are forgiving parsing and normalization used where meaning stays unambiguous?
- Is there an override path when real-world variation breaks the validator?
- Are client-side checks described honestly rather than implying server certainty?
- Would shorter steps beat more aggressive live validation altogether?

## Strong defaults to remember

- validate late by default
- interrupt immediately only for severe or obviously invalid input
- validate empty required fields on submit unless a stronger reason exists
- reward early, punish late
- prioritize copy-paste and forgiving input handling
- give users a way out when validators fail

For broader guidance on blocked submit buttons, enabled-submit alternatives, in-progress locking, and recovery paths when users cannot proceed, also use [disabled buttons UX](./disabled-buttons-ux.md).