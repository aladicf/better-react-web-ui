# Make transform origins match where the motion comes from

Surfaces such as dropdowns, popovers, and menus should appear to grow from their trigger or anchor edge, not from an arbitrary center point.

```css
.dropdown {
  transform-origin: top center;
  animation: scale-in 200ms cubic-bezier(0.16, 1, 0.3, 1);
}
```

Why this matters:

- the motion feels connected to the trigger
- spatial relationships read faster
- the component feels intentional rather than mechanically centered

When a library exposes origin variables, use them. For example, Radix-style primitives often provide a transform-origin custom property so the component can animate from the correct edge automatically.

Origin-aware motion is a small detail, but it does a lot of perceptual work.