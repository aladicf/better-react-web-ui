# Self-evident interface design

Use this reference when a React/Tailwind interface needs too much explanatory text, helper copy, onboarding, or visual ceremony before users can act.

Core rule: if the UI needs instructions for a routine task, fix the UI before rewriting the instructions.

This does not mean deleting necessary labels, accessibility text, legal copy, or domain explanation. It means structure, defaults, constraints, previews, and feedback should carry as much meaning as possible before copy compensates for weak design.

## Decision order

Before adding helper text, try these in order:

1. improve grouping and proximity
2. make the primary action visually obvious
3. use a more specific control or label
4. choose a better default
5. constrain impossible choices
6. show a preview, example, or inline result
7. add one short sentence only where ambiguity remains

Text should confirm meaning, not create it from scratch.

## Intuitive UI Checklist

An interface feels intuitive when users can predict what objects do before they interact and can recover when prediction fails.

For React/Tailwind work, check:

- expected global actions such as navigation, search, settings, profile, close, save, and back stay in familiar locations across routes
- common patterns use recognizable primitives before custom invention: buttons, tabs, forms, dialogs, menus, accordions, filters, and pagination
- affordances match behavior: clickable things look clickable, disabled things explain why, destructive things look risky
- each route has one obvious first action and one obvious recovery path
- feedback appears near the object that changed, not only in distant toasts
- mistakes are recoverable with undo, editable state, suggestions, or clear correction paths
- keyboard, screen-reader, and high-contrast usage still expose the same workflow, not a reduced one

Do not confuse novelty with intuitiveness. If users must learn a new interaction model for a routine task, the design is probably worse, not more original.

## React and Tailwind patterns

### Use state and structure instead of narration

Weak:

```tsx
<p className="text-sm text-muted-foreground">
  Click the button below to upload your CSV file.
</p>
<button>Upload CSV</button>
```

Stronger:

```tsx
<label className="flex cursor-pointer items-center justify-between rounded-md border p-3 hover:bg-muted/50">
  <span>
    <span className="block font-medium">CSV file</span>
    <span className="block text-sm text-muted-foreground">Orders, customers, or inventory</span>
  </span>
  <span className="rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground">
    Choose file
  </span>
  <input type="file" accept=".csv" className="sr-only" />
</label>
```

The stronger version makes the object, accepted file type, and action visible at the point of interaction.

### Prefer inline examples over rule paragraphs

```tsx
<div className="space-y-1.5">
  <label htmlFor="workspace-slug" className="text-sm font-medium">
    Workspace URL
  </label>
  <div className="flex rounded-md border focus-within:ring-2 focus-within:ring-ring">
    <span className="border-r bg-muted px-3 py-2 text-sm text-muted-foreground">
      app.com/
    </span>
    <input
      id="workspace-slug"
      name="workspace-slug"
      className="min-w-0 flex-1 bg-transparent px-3 py-2 outline-none"
      placeholder="acme"
      aria-describedby="workspace-slug-example"
    />
  </div>
  <p id="workspace-slug-example" className="text-sm text-muted-foreground">
    Use lowercase letters, numbers, and hyphens.
  </p>
</div>
```

Keep the helper sentence because the rule is not fully visible from the control. Delete it if constraints or validation make the rule obvious enough.

### Put feedback at the object

Do not use a toast or top-of-page banner for errors the user is already looking at. Field-level and object-level feedback usually wins.

```tsx
<div className="space-y-1.5">
  <label htmlFor="email" className="text-sm font-medium">
    Email
  </label>
  <input
    id="email"
    type="email"
    aria-invalid={Boolean(error)}
    aria-describedby={error ? 'email-error' : undefined}
    className="w-full rounded-md border px-3 py-2 aria-[invalid=true]:border-destructive"
  />
  {error ? (
    <p id="email-error" className="text-sm text-destructive">
      Enter an email with an @ symbol.
    </p>
  ) : null}
</div>
```

### Use defaults to remove decisions

If one option is correct for most users, preselect it and make advanced alternatives quieter.

```tsx
<fieldset className="space-y-2">
  <legend className="text-sm font-medium">Export format</legend>
  <label className="flex items-start gap-3 rounded-md border p-3 has-[:checked]:border-primary has-[:checked]:bg-primary/5">
    <input type="radio" name="format" value="csv" defaultChecked className="mt-1" />
    <span>
      <span className="block font-medium">CSV</span>
      <span className="block text-sm text-muted-foreground">Best for spreadsheets and imports</span>
    </span>
  </label>
  <label className="flex items-start gap-3 rounded-md border p-3 has-[:checked]:border-primary has-[:checked]:bg-primary/5">
    <input type="radio" name="format" value="json" className="mt-1" />
    <span>
      <span className="block font-medium">JSON</span>
      <span className="block text-sm text-muted-foreground">Best for API workflows</span>
    </span>
  </label>
</fieldset>
```

The helper text is useful because it differentiates choices. It is not generic explanation.

## Forms and settings

For forms, labels are not optional. The goal is not label removal; the goal is removing unnecessary helper copy and preventing avoidable errors.

Good defaults:

- visible label above the input
- helper text only for format, consequence, privacy, or non-obvious reason
- examples inside or beside the control when they reduce explanation
- validation near the field
- common option preselected when safe
- advanced options collapsed behind a clear trigger
- constraints through input type, min/max, pattern, segmented choices, or disabled impossible options

Avoid:

- helper text under every field
- placeholder-only labels
- top-of-form instructions for field-level rules
- disabled submit buttons with no visible reason
- paragraphs explaining a control that could be clearer as radio cards, segmented controls, previews, or inline examples

## Review process

1. Temporarily remove descriptive helper text.
2. Check whether the primary action and object still make sense.
3. Fix layout, grouping, affordance, default, or constraint before restoring copy.
4. Restore only copy that directly enables action or prevents a meaningful mistake.
5. Keep remaining explanation inline and short.

## Heuristics

- If all descriptive text disappeared, would the flow still mostly work?
- Is there exactly one obvious next action?
- Does the UI prevent invalid input before explaining it?
- Does any text repeat what the control, state, or layout already shows?
- Are section headings helping scan, or only naming obvious groups?
- Is empty space doing all the hierarchy work, or are grouping and action priority clear?
- Does dense layout remain understandable without decorative cards or extra prose?

## Anti-patterns

- onboarding tooltips for simple controls
- pages that explain before allowing interaction
- naming every small section
- helper text that repeats the label
- instructions such as `click below`, `use this form`, or `select an option`
- AI-generated over-description where every component gets a sentence

Dense is acceptable when the structure is obvious. Sparse is not automatically clear.
