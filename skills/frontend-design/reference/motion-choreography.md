# Motion choreography

Use this reference when multiple UI elements move together: staggered reveals, list insert/remove/reorder, modal stacks, drawers, dense table expansion, search result changes, route transitions, and gesture commit states.

Choreography exists to preserve hierarchy and attention. If the sequence delays completion, hides state, or makes routine work feel theatrical, cut it back.

## Actor model

Treat each sequence as three actor layers:

- **primary actor**: element that represents the state change
- **supporting actors**: nearby content that reinforces context
- **environment actors**: scrim, backdrop, container, page root, or route continuity

Usually animate primary first, then supporting actors, then environment. Reverse that only when the environment must establish context first, such as scrim before a destructive modal.

## Timing architecture

Use predictable beats:

| Beat | Timing | Job |
| --- | --- | --- |
| lead | `0-80ms` | acknowledge input immediately |
| primary | `120-240ms` | move or reveal the main actor |
| follow | `20-60ms` offset | update nearby supporting context |
| settle | `80-180ms` | stabilize after drag, reorder, or route change |

Keep exits faster than enters for routine UI. Keep total cascade under roughly `320ms` for common product surfaces.

## Tailwind choreography tokens

For Tailwind v4, define reusable tokens in the CSS theme layer:

```css
@theme {
  --duration-choreo-enter: 220ms;
  --duration-choreo-exit: 180ms;
  --duration-choreo-settle: 160ms;

  --spacing-choreo-xs: 4px;
  --spacing-choreo-sm: 8px;
  --spacing-choreo-md: 12px;

  --ease-choreo-enter: cubic-bezier(0.2, 0, 0, 1);
  --ease-choreo-exit: cubic-bezier(0.4, 0, 1, 1);
}
```

For older Tailwind config, add the same values under `theme.extend.transitionDuration`, `theme.extend.spacing`, and `theme.extend.transitionTimingFunction`.

## Staggered content reveal

Use for small groups where sequence supports reading order: cards, menu sections, grouped controls, or hero copy. Do not stagger high-density lists where users need immediate scanning.

```css
@theme {
  --animate-item-enter-up: item-enter-up var(--duration-choreo-enter) var(--ease-choreo-enter) both;

  @keyframes item-enter-up {
    from {
      opacity: 0;
      transform: translateY(var(--spacing-choreo-sm));
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
}
```

```tsx
function StaggeredList({ items }: { items: Array<{ id: string; label: string }> }) {
  return (
    <ul className="motion-safe:[&>*]:animate-item-enter-up motion-reduce:[&>*]:animate-none">
      {items.slice(0, 8).map((item, index) => (
        <li
          key={item.id}
          className="[animation-delay:calc(var(--item-index)*32ms)] motion-reduce:[animation-delay:0ms]"
          style={{ '--item-index': index } as React.CSSProperties}
        >
          {item.label}
        </li>
      ))}
    </ul>
  );
}
```

Keep order semantic. Do not randomize delays. Cap staggered items, then render the rest without delay if the list is long.

## List insert, remove, and reorder

For simple insert/remove, use Tailwind transitions on opacity and translate where React state preserves the element long enough to exit.

For reorder, use FLIP-like logic when identity and spatial continuity matter:

1. capture first positions
2. apply React state update
3. capture last positions
4. invert with `transform`
5. play back to zero

Use WAAPI or a motion/layout library when reorder complexity is real. Tailwind alone cannot measure positions.

Rules:

- reorder settles should be shorter than insert/remove
- avoid bounce in productivity UI
- keep scroll position stable
- do not animate unrelated rows long distances

## Modal and overlay stacks

Pattern:

- primary: panel transform plus opacity
- supporting: focused content block and close action
- environment: scrim fade and background de-emphasis

```tsx
function DialogPanel({ open }: { open: boolean }) {
  return (
    <div data-state={open ? 'open' : 'closed'} className="group fixed inset-0">
      <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-150 group-data-[state=open]:opacity-100 motion-reduce:transition-none" />
      <section className="absolute left-1/2 top-1/2 w-[min(32rem,calc(100vw-2rem))] -translate-x-1/2 -translate-y-[calc(50%-8px)] scale-95 opacity-0 transition-[translate,scale,opacity] duration-choreo-enter ease-choreo-enter group-data-[state=open]:-translate-y-1/2 group-data-[state=open]:scale-100 group-data-[state=open]:opacity-100 motion-reduce:scale-100 motion-reduce:duration-150">
        ...
      </section>
    </div>
  );
}
```

Exit should make the panel leave faster than it entered, with scrim fade near-synchronous. If the component unmounts instantly, use a lifecycle-aware primitive or keep it mounted through exit.

## Drawer and side panel

Use one dominant axis aligned to the drawer direction. Do not combine a large drawer slide with page zoom or unrelated content movement.

```tsx
<aside
  data-state={open ? 'open' : 'closed'}
  className="translate-x-full transition-transform duration-choreo-enter ease-choreo-enter data-[state=open]:translate-x-0 data-[state=closed]:duration-choreo-exit data-[state=closed]:ease-choreo-exit motion-reduce:transition-none"
/>
```

Couple panel and scrim timing, but do not make every actor identical. The panel is the primary actor; the scrim supports context.

## Route or layout mode change

Use View Transitions when continuity helps: selected card to detail view, layout mode changes, or result-set swaps where users might lose their place.

```tsx
function runViewTransition(update: () => void) {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reduceMotion || !document.startViewTransition) {
    update();
    return;
  }

  document.startViewTransition(update);
}
```

Name only meaningful shared elements. Keep root movement calm and make the shared object the primary actor.

## Interaction scenarios

### Dense table row expansion

- primary: row detail container reveal
- supporting: detail content fades in after `20-40ms`
- environment: no global movement

Keep expand/collapse under `220ms`. Avoid moving unrelated rows long distances. Preserve focus inside the row when keyboard users expand it.

### Kanban card move

- drag: card follows pointer directly with no transition lag
- drop: short settle transform, usually `120-180ms`
- supporting: target column highlight fades quickly

Do not run decorative effects during drag. Neighbor reorders should be brief and identity-preserving.

### Search result filter change

- primary: results container or shared selected card
- supporting: entering cards fade/translate lightly
- environment: filter bar remains stable as anchor

Query feedback must be immediate. Do not animate the full page when only results changed.

### Modal form submit success

- primary: submit button state, check mark, or success message
- supporting: form content quiets or confirms saved values
- environment: modal exits only after confirmation delay if task closure is clear

Keep focus stable. Reduced-motion mode should avoid dramatic modal travel.

### Toast and ephemeral feedback

Enter quickly, stay non-blocking, and exit slightly faster than enter. Movement should be small so feedback does not steal attention from the main task.

## Reduced motion

When `prefers-reduced-motion: reduce` is active:

- remove spatial travel where possible
- keep sequencing with opacity, state, contrast, or layering
- preserve hierarchy without distance
- keep state changes obvious and immediate
- do not rely on motion as the only signal

## Output contract

When specifying choreography, provide:

1. **Storyboard**: who moves, in what order, and why
2. **Timeline Spec**: durations, offsets, easing tokens, and distances
3. **Implementation Plan**: Tailwind classes, keyframes, WAAPI, Motion, or View Transition structure
4. **A11y + Fallback**: reduced-motion, focus, keyboard, and unsupported-feature behavior
5. **Validation Plan**: performance, rapid interaction, viewport, and usability checks

## QA checklist

- primary actor is obvious at every beat
- sequence order matches interaction importance
- motion direction supports spatial logic
- stagger offsets are intentional and capped
- interaction acknowledgment appears within `80ms`
- motion does not block core task completion
- rapid repeated interactions do not break the sequence
- reduced-motion mode remains understandable
- focus and keyboard navigation remain correct
- no essential information is conveyed by motion alone
- animated properties avoid layout work unless justified
- layer count and long tasks stay controlled during sequences
