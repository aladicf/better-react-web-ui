# React and Tailwind Implementation Review

Use this reference when reviewing React and Tailwind code for implementation quality after UI work: accessibility, focus, forms, animation, content resilience, performance, navigation state, safe areas, localization, and hydration safety.

This is a code-level checklist. Use it after the design direction is chosen and components exist.

## Accessibility

Check:

- icon-only buttons have `aria-label`
- decorative icons use `aria-hidden="true"`
- form controls have visible labels or `aria-label`
- labels are clickable with `htmlFor` or wrapped controls
- buttons are used for actions, links for navigation
- interactive custom elements support keyboard activation or are replaced with semantic elements
- meaningful images have `alt`, decorative images use `alt=""`
- async validation, toast, or status updates use `aria-live="polite"` when users need announcement
- landmarks and semantic elements are used before ARIA-heavy custom markup
- heading levels follow document order
- skip link exists for full app or long page layouts
- anchor targets account for sticky headers with `scroll-margin-top`

## Focus States

Check:

- every interactive element has visible `focus-visible` treatment
- `outline-none` is paired with a real replacement
- compound controls use `focus-within` when the whole group should respond
- modal focus enters, stays inside, and returns to the opener
- drawer, sheet, and popover focus behavior is tested with keyboard

Tailwind example:

```tsx
<button className="rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2">
  Save changes
</button>
```

## Forms

Check:

- inputs use correct `type`: `email`, `tel`, `url`, `number`, `password`, `search`
- mobile-specific fields use useful `inputMode`
- fields use meaningful `name`
- browser autofill is helped with correct `autocomplete`
- email, code, and username fields set `spellCheck={false}` when appropriate
- paste is not blocked
- submit button stays enabled until request starts unless visible errors explain why it is blocked
- request state has a visible loading label or spinner
- errors appear inline near fields and are associated with `aria-describedby`
- failed submit focuses the first invalid field or the error summary
- unsaved changes are protected before navigation when losing input would hurt

Bad:

```tsx
<input placeholder="Email" onPaste={(event) => event.preventDefault()} />
```

Better:

```tsx
<label htmlFor="email">Email</label>
<input id="email" name="email" type="email" autoComplete="email" spellCheck={false} />
```

## Animation and Motion

Check:

- reduced-motion users get a reduced variant or no nonessential motion
- animations use `transform` and `opacity` whenever possible
- avoid `transition-all`; list properties explicitly
- `transform-origin` matches the interaction
- animations are interruptible and respond to quick repeated input
- scroll effects avoid continuous layout reads
- `will-change` is temporary or tightly scoped

Tailwind example:

```tsx
<div className="transition-[transform,opacity] duration-200 ease-out motion-reduce:transition-none" />
```

## Content Resilience

Check:

- text containers handle short, normal, and very long content
- flex children that need truncation use `min-w-0`
- long words and user-generated content can wrap with `break-words` or equivalent
- card titles and table cells use deliberate `truncate`, `line-clamp-*`, or wrapping
- empty arrays and empty strings render composed empty states, not broken chrome
- loading, empty, error, and success states match the same layout shape where possible
- numbers in comparisons use tabular figures
- headings use `text-wrap: balance` or `text-pretty` where supported

Tailwind examples:

```tsx
<div className="min-w-0">
  <h3 className="truncate text-sm font-medium">Workspace name</h3>
</div>

<td className="text-right tabular-nums">$12,480</td>
```

## Images and Media

Check:

- images have explicit width and height or stable aspect-ratio wrappers
- below-fold images lazy-load
- likely LCP images are prioritized according to framework conventions
- `sizes` matches actual responsive layout
- screenshot and product media remain legible at rendered size
- decorative overlays do not erase contrast

## Performance

Check:

- large lists are virtualized or use browser-level containment where appropriate
- no layout reads happen during render
- DOM reads and writes are not interleaved in loops
- controlled inputs are cheap per keystroke
- unnecessary libraries were not imported for simple UI states
- asset and font domains are preconnected only when they matter
- critical fonts use `font-display: swap`

For long repeated lists, consider `content-visibility: auto` when virtualization is unnecessary or too heavy.

## Navigation and State

Check:

- filters, tabs, pagination, selected views, and expanded panels use URL state when deep-linking matters
- links support browser behavior such as open in new tab, copy link, and middle-click
- destructive actions use confirmation or undo depending on risk
- back navigation preserves user context where expected
- page-level dead ends have a clear route back

When a React component stores user-visible navigation state in `useState`, ask whether that state should live in the URL.

## Touch, Layout, and Safe Areas

Check:

- touch targets are at least 44px where coarse pointers matter
- `touch-action: manipulation` is used when it improves tap responsiveness without harming gestures
- modals, drawers, and sheets use `overscroll-behavior: contain`
- full-height page sections use `min-h-svh` or `min-h-[100dvh]`, not brittle `h-screen`
- full-bleed layouts account for `env(safe-area-inset-*)`
- grid or flex handles layout before JavaScript measurement is introduced
- horizontal overflow is fixed at the source, not hidden globally as a first reflex

## Dark Mode and Theming

Check:

- dark themes set `color-scheme: dark` where appropriate
- native controls and scrollbars match the theme
- local scroll containers use Tailwind scrollbar utilities before custom scrollbar CSS
- conditionally scrollable panels reserve space with `scrollbar-gutter-stable` or `scrollbar-gutter-both` when layout shift would be visible
- long identifiers, emails, URLs, and user-generated text use `wrap-anywhere` or `wrap-break-word` where overflow would break layout
- coarse-pointer controls use pointer-aware sizing instead of viewport guesses
- native dialogs, popovers, and details use Tailwind state variants such as `starting:*`, `open:*`, and `details-content:*` where they simplify CSS without weakening semantics
- theme color metadata matches page background when the framework supports it
- hard-coded colors do not bypass semantic tokens
- dark mode relies on contrast and depth alternatives, not only inverted light-mode colors

## Locale and Hydration Safety

Check:

- dates use `Intl.DateTimeFormat`
- numbers and currency use `Intl.NumberFormat`
- brand names, code tokens, and IDs use `translate="no"` when machine translation would corrupt them
- client-only date/time values do not create hydration mismatch
- inputs use `defaultValue` when uncontrolled or pair `value` with `onChange`
- `suppressHydrationWarning` is used only for genuinely unavoidable mismatch

## Review Output

Group findings by file and line. Keep each finding terse:

```text
src/components/BillingCard.tsx:42 - icon-only button missing aria-label
src/components/ProfileForm.tsx:18 - email input lacks visible label
src/components/Hero.tsx:55 - LCP image missing width/height
src/components/Tabs.tsx:67 - stateful tab selection should be reflected in URL
```

Skip lectures unless the fix is non-obvious.

For broader audit scoring, use [accessibility testing](./accessibility-testing.md), [core web vitals](./core-web-vitals.md), [responsive design](./responsive-design.md), [component accessibility](./component-accessibility.md), [form validation patterns](./form-validation-patterns.md), and [interaction design](./interaction-design.md).
