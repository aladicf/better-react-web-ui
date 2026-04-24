### Forms / dates / date-time scheduling

Prioritize:

- fast direct entry for known dates
- low ambiguity about format
- specific validation and recovery
- accessibility across keyboard, touch, and assistive tech

Also:

- distinguish memorable dates from dates users need to choose on a calendar
- prefer three clearly labeled fields for date of birth and other known dates instead of long year dropdowns or native date pickers
- keep labels and examples visible above the fields rather than hiding the format inside placeholders or floating labels
- avoid automatic focus jumps between date fields
- validate late by default for ordinary inputs instead of flashing errors while users are still typing
- validate empty required fields on submit unless interruption clearly helps users
- use reward-early/punish-late behavior so fixed errors clear quickly but newly edited valid fields are not punished too soon
- prioritize copy-paste-friendly acceptance and forgiving normalization for structured values
- use just-in-time verification or explicit `Validate` actions for long restrictive fields when that is calmer than always-on live validation
- use the picker only when users genuinely need help choosing a date rather than recalling one
- for booking or appointment flows, decide whether users care more about the day, the time band, or the exact slot before locking the interaction model
- expose availability, price, or other decisive signals inside the calendar when they materially affect choice
- make date-range selection feel like one coordinated interaction instead of two disconnected calendars
- use quick presets, mini-steppers, or flexible-date shortcuts when near-term or fuzzy scheduling is common

Pair this with [date-input-ux](../../frontend-design/reference/date-input-ux.md) when the request involves date of birth, memorable dates, calendar widgets, typed date entry, or date-specific form-field redesign.
Pair this with [date-time-picker-ux](../../frontend-design/reference/date-time-picker-ux.md) when the request involves booking calendars, date-range pickers, flexible dates, time-slot selection, or combined date-and-time scheduling flows.
Pair this with [live-validation-ux](../../frontend-design/reference/live-validation-ux.md) when the work depends on inline validation timing, field-level feedback strategy, severe-error interrupts, copy-paste-heavy structured input, or validator overrides.
Pair this with [error-recovery](../../frontend-design/reference/error-recovery.md) when the work depends on clear date validation, incomplete-field handling, or recoverable error messaging.
