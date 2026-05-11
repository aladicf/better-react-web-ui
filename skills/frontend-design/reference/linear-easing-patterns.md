# Linear easing patterns

Use CSS `linear()` only when the motion needs explicit velocity shaping. It is not a replacement for every `linear` keyword or cubic-bezier curve.

Good fits:

- snappy or soft settle without adding a JavaScript spring runtime
- shared motion tokens used across several React components
- emphasis motion where the speed profile needs to feel intentional
- View Transition shared elements that need controlled settle

Weak fits:

- constant-speed progress or loaders, where Tailwind `ease-linear` is clearer
- one-off component flourishes with no reuse
- frequent interactions with long durations or too many inflection points

## Workflow

1. Define perception goal: snappy settle, soft settle, crisp exit, or restrained emphasis.
2. Start with 4 points.
3. Refine to 6-8 points only when the real React UI still feels wrong.
4. Name tokens by intent, not by component.
5. Validate in context, including rapid repeated interactions and reduced-motion mode.

## Tailwind tokens

For Tailwind v4, define easing and duration tokens in the CSS theme layer:

```css
@theme {
  --duration-motion-quick: 140ms;
  --duration-motion-normal: 220ms;
  --duration-motion-structural: 320ms;
  --duration-motion-route: 420ms;

  --spacing-motion-xs: 4px;
  --spacing-motion-sm: 8px;
  --spacing-motion-md: 16px;
  --spacing-motion-lg: 24px;

  --ease-linear-snappy: linear(0, 0.18 20%, 0.68 58%, 0.92 82%, 1);
  --ease-linear-soft: linear(0, 0.06 12%, 0.3 34%, 0.72 63%, 0.92 84%, 1);
  --ease-linear-emphasis: linear(0, 0.3 18%, 0.86 62%, 1);
  --ease-linear-exit-crisp: linear(0, 0.32 20%, 0.74 60%, 0.92 82%, 1);
  --ease-linear-settle-gentle: linear(0, 0.05 10%, 0.28 30%, 0.67 60%, 0.9 82%, 1);
  --ease-linear-snap-pop: linear(0, 0.42 22%, 0.9 66%, 1);
}
```

For older Tailwind config, put the easing values under `theme.extend.transitionTimingFunction`, durations under `theme.extend.transitionDuration`, and distances under spacing or a project-owned token map.

Avoid elastic/bouncy emphasis curves as defaults. They make routine product UI feel unserious. If a brand truly needs playful motion, isolate it to low-frequency moments.

## React and Tailwind examples

Card enter, soft and readable:

```tsx
function ResultCard({ state }: { state: 'entering' | 'entered' }) {
  return (
    <article
      data-state={state}
      className="translate-y-[var(--spacing-motion-sm)] opacity-0 transition-[translate,opacity] duration-motion-normal ease-linear-soft data-[state=entered]:translate-y-0 data-[state=entered]:opacity-100 motion-reduce:translate-y-0 motion-reduce:duration-motion-quick"
    >
      ...
    </article>
  );
}
```

Popover exit, crisp and fast:

```tsx
function MenuSurface({ open }: { open: boolean }) {
  return (
    <div
      data-state={open ? 'open' : 'closed'}
      className="origin-top translate-y-[-4px] scale-[0.985] opacity-0 transition-[translate,scale,opacity] duration-motion-quick ease-linear-exit-crisp data-[state=open]:translate-y-0 data-[state=open]:scale-100 data-[state=open]:opacity-100 motion-reduce:translate-y-0 motion-reduce:scale-100"
    >
      ...
    </div>
  );
}
```

CTA emphasis, single non-looping pulse:

```css
@theme {
  --animate-cta-pulse: cta-pulse 220ms var(--ease-linear-snap-pop) 1;

  @keyframes cta-pulse {
    0% {
      transform: scale(1);
    }
    55% {
      transform: scale(1.04);
    }
    100% {
      transform: scale(1);
    }
  }
}
```

```tsx
<button
  data-emphasis={shouldEmphasize}
  className="data-[emphasis=true]:animate-cta-pulse motion-reduce:animate-none"
>
  Upgrade
</button>
```

Progress indicator with constant velocity:

```tsx
<div
  className="h-1 origin-left scale-x-[var(--progress)] bg-current transition-transform duration-[240ms] ease-linear motion-reduce:transition-none"
/>
```

Use `ease-linear` here, not `linear()`, because constant velocity is the intent.

## View Transition pairing

Keep View Transition styling in CSS because pseudo-elements cannot be expressed cleanly as Tailwind utilities:

```css
::view-transition-old(root),
::view-transition-new(root) {
  animation-duration: var(--duration-motion-structural);
  animation-timing-function: var(--ease-linear-soft);
}

::view-transition-group(card-image) {
  animation-duration: var(--duration-motion-route);
  animation-timing-function: var(--ease-linear-settle-gentle);
}

@media (prefers-reduced-motion: reduce) {
  ::view-transition-old(root),
  ::view-transition-new(root),
  ::view-transition-group(*) {
    animation-duration: 1ms;
    animation-timing-function: linear;
  }
}
```

React same-document wrapper:

```tsx
function updateWithViewTransition(update: () => void) {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reduceMotion || !document.startViewTransition) {
    update();
    return;
  }

  document.startViewTransition(update);
}
```

Keep the update callback synchronous and deterministic. Do not stuff data fetching, expensive measurement, or broad DOM work inside it.

## Pairing recommendations

| Job | Token | Duration |
| --- | --- | --- |
| enter | `ease-linear-soft` | `duration-motion-normal` |
| exit | `ease-linear-exit-crisp` | `duration-motion-quick` |
| emphasis | `ease-linear-emphasis` or `ease-linear-snap-pop` | `140-220ms` |
| shared element settle | `ease-linear-settle-gentle` | `280-380ms` |
| route transition | `ease-linear-soft` | `320-420ms` |

## Review checklist

- motion explains state change instead of decorating it
- direction and distance match spatial context
- enter and exit timings are intentionally asymmetrical
- primary animated properties are `translate`, `scale`, `rotate`, `transform`, or `opacity`
- no avoidable layout-thrashing animation in frequent interactions
- layer promotion is controlled and not sprayed through `will-change`
- reduced-motion behavior preserves understandable state change
- focus management remains correct through transitions
- keyboard and assistive technology flows are not blocked by animation
- View Transition feature detection and fallback are present
- shared element names are scoped and meaningful
- desktop, mobile, rapid interaction, and throttled scenarios have been checked

## Common mistakes

- too many `linear()` points with no visible UX gain
- different custom curves for every component
- long durations with complex curves on frequent controls
- missing `motion-reduce:*` fallbacks in React components
- using `linear()` where Tailwind `ease-linear` communicates constant velocity better
