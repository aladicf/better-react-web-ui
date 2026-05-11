# Tailwind and WAAPI motion

Use this reference when the animation concept is real, but a heavy framework-specific motion library is **not automatically required**.

The goal is to keep agents honest:

- use **Tailwind utilities** first for simple state transitions
- use **Tailwind theme variables, utilities, and keyframes** when the project already lives in Tailwind
- use the **Web Animations API** when the effect is imperative, synchronized, or should stay smooth outside a React render loop
- use **Motion** only when the animation genuinely benefits from layout animation, state-driven orchestration, gesture APIs, motion values, or framework-specific composition

## Default implementation order

1. **Tailwind utility composition first**
2. **Tailwind-compatible keyframes and theme variables** when utility composition is not enough
3. **WAAPI** for imperative or synchronized animation control
4. **Motion** when the interaction complexity justifies it

Do not treat Motion as the default answer to every hover, opacity, or scale change.

Choose the lightest mechanism that still explains the interaction:

| Need | First mechanism | Why |
| --- | --- | --- |
| single element state change | Tailwind transition utilities | reversible, cheap, easy to inspect |
| multi-step or repeated sequence | Tailwind keyframes | declarative timeline without React churn |
| cancel, reverse, sync, or playback control | WAAPI | imperative control without a framework dependency |
| route, DOM-swap, or list/detail continuity | View Transitions API | browser-managed snapshots and shared elements |

If motion does not improve continuity, feedback, hierarchy, or focus guidance, cut it.

## When Tailwind utilities are usually enough

Use Tailwind utilities for:

- hover, focus, and active state transitions
- button press scale feedback
- opacity + translate entrances and exits
- reduced-motion variants
- disclosure rotation or small icon state changes
- clip-path reveals
- shimmer and skeleton gradients
- simple stagger using Tailwind arbitrary values or theme variables
- theme, color, and shadow transitions

Most micro-interactions can stay utility-first.

```html
<button
  class="transition-transform duration-150 ease-[cubic-bezier(0.16,1,0.3,1)] active:scale-[0.97]"
>
  Save
</button>
```

Useful Tailwind patterns:

- `transition-transform`, `transition-opacity`, `transition-colors`, and arbitrary property lists such as `transition-[transform,opacity]`
- `duration-150`, `duration-200`, `duration-300`, `duration-500`
- `ease-linear`, `ease-in`, `ease-out`, or custom `ease-[cubic-bezier(...)]`
- `translate-y-*`, `scale-*`, `rotate-*`, `opacity-*`
- `motion-reduce:*` variants for reduced motion
- arbitrary values for `clip-path`, `transform-origin`, and custom timing when the design needs them

Prefer Tailwind's individual transform utilities when independent states control independent channels:

```html
<div class="translate-y-2 scale-95 opacity-0 transition-[translate,scale,opacity] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] data-[state=open]:translate-y-0 data-[state=open]:scale-100 data-[state=open]:opacity-100">
  ...
</div>
```

Use a single arbitrary `transform-[...]` value only when transform order is intentionally coupled or the effect needs functions that Tailwind utilities do not expose cleanly.

Do not use `translate3d()` as a reflexive GPU hack. Use 3D transforms only for real 3D/perspective behavior or after profiling shows a compositor win in a real bottleneck.

Avoid `transition-all` when the moving properties are known. It is easy to ship accidental animation of layout, colors, shadows, filters, or future CSS changes. Be explicit:

```html
<div class="transition-[transform,opacity] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)]">
  ...
</div>
```

Gate hover-only motion so touch devices do not inherit fake hover behavior. Tailwind has built-in state variants, but hover capability usually needs a media query or project variant:

```css
@custom-variant can-hover {
  @media (hover: hover) and (pointer: fine) {
    @slot;
  }
}
```

```html
<button class="transition-transform can-hover:hover:scale-[1.02] active:scale-[0.97] motion-reduce:transform-none">
  Save
</button>
```

Example reduced-motion fallback:

```html
<div
  class="transition-transform transition-opacity duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transform-none motion-reduce:duration-200"
></div>
```

## Tailwind-compatible easing tokens

Use cubic-bezier tokens for most product motion. Use CSS `linear()` tokens when piecewise velocity control is useful, such as soft enter curves, crisp exits, controlled settle, or a brand-specific motion signature. Keep point counts readable, usually 4-8 points.

For a fuller React and Tailwind token workflow with applied component examples, consult [linear easing patterns](./linear-easing-patterns.md).

Tailwind v4 CSS-first theme example:

```css
@theme {
  --ease-enter-soft: linear(0, 0.08 12%, 0.34 36%, 0.74 66%, 0.93 84%, 1);
  --ease-exit-crisp: linear(0, 0.3 18%, 0.72 58%, 0.9 78%, 1);
  --ease-settle-gentle: linear(0, 0.06 10%, 0.31 32%, 0.72 62%, 0.92 82%, 1);
  --ease-emphasis-pop: linear(0, 0.38 20%, 0.88 62%, 1);
}
```

Use the tokens through Tailwind utilities:

```tsx
<div className="translate-y-2 opacity-0 transition-[translate,opacity] duration-[180ms] ease-enter-soft data-[state=open]:translate-y-0 data-[state=open]:opacity-100 motion-reduce:translate-y-0">
  ...
</div>

<button className="transition-transform duration-150 ease-emphasis-pop active:scale-[0.97] motion-reduce:transform-none">
  Save
</button>
```

If the project is on older Tailwind config, add the same values under `theme.extend.transitionTimingFunction` instead of inventing per-component arbitrary easing.

## When WAAPI is the better built-in option

Use the Web Animations API when you need:

- synchronized animation phases across many elements
- imperative control over `play()`, `pause()`, `cancel()`, or timeline values
- animations that should stay smooth even while other JS work is happening
- dynamic keyframes without a framework render cycle

```js
const animation = element.animate(
  [
    { transform: 'translateY(8px)', opacity: 0 },
    { transform: 'translateY(0)', opacity: 1 },
  ],
  {
    duration: 200,
    easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
    fill: 'both',
  }
)
```

WAAPI is especially useful for synchronized skeleton shimmer, imperative toasts, or built-in browser animation control inside React projects.

## When Motion is actually worth it

Use Motion when the problem is not just “animate a property,” but one of these:

- layout animation between changing positions or sizes
- shared layout / `layoutId`-style transitions
- gesture-heavy drag, press, hover, and momentum interactions in framework apps
- motion values, springs, scroll-linked state, or composable variants
- React component orchestration tied directly to state and lifecycle

Motion is powerful because it scales. That does **not** mean every effect should start there.

## Concept-to-tool matrix

| Concept | Best first choice | Escalate when needed |
| --- | --- | --- |
| button press scale | Tailwind utilities | Motion only if already in a larger gesture system |
| hover/focus polish | Tailwind utilities | rarely needs more |
| opacity + translate entry | Tailwind utilities | WAAPI for imperative control |
| accordion reveal | Tailwind grid utilities / clip-path arbitrary values | Motion if part of a bigger layout choreography |
| tooltip fade / delay | Tailwind utilities / JS state | Motion rarely required |
| skeleton shimmer | Tailwind gradients + WAAPI sync | Motion optional, not required |
| staggered list reveal | Tailwind arbitrary values / WAAPI | Motion variants for richer orchestration |
| drag / swipe dismissal | Motion or custom pointer logic | Tailwind alone usually not enough |
| shared layout transition | Motion | Tailwind utilities cannot do the same job well |
| disclosure icon state | Tailwind rotate utilities or SVG morph | Motion optional |

## Practical guidance for common concepts in this library

### Most concepts that are directly doable with web platform APIs

- easing and timing rules
- button press scaling
- tooltip delays
- reduced-motion alternatives
- clip-path reveals
- origin-aware transforms
- percentage-based travel
- staggered entrances
- shimmer skeletons
- dark-only `color-scheme` setup

### Concepts that often need JS or Motion

- momentum-based dismissal
- velocity-aware snap points
- drag friction and boundary damping
- pointer capture gesture systems
- shared layout transitions
- live path morphing when SVG state is not trivially CSS-addressable

Even then, prefer the smallest tool that honestly fits the job.

## Tailwind-specific note

If the project uses Tailwind, describe the implementation in Tailwind terms whenever that keeps the guidance clearer and more copyable.

Do not translate a tiny utility-first interaction into a bespoke component animation system unless the product already has one.
