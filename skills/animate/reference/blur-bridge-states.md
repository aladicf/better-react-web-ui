# Use blur to bridge awkward state changes

When easing and timing are close but a transition still feels visually harsh, a tiny amount of blur can smooth the handoff between states.

Blur works by reducing the eye's ability to compare the before and after states too sharply. This can hide small mismatches in color, scale, or layout detail that feel jarring at full sharpness.

```css
.button {
  transition:
    background-color 200ms cubic-bezier(0.16, 1, 0.3, 1),
    filter 200ms cubic-bezier(0.16, 1, 0.3, 1);
}

.button:active {
  filter: blur(2px);
}
```

Use this sparingly:

- around `1-2px` is usually enough
- remove it once the state has settled
- do not blur important text for long enough to hurt readability

Blur is not a substitute for fixing bad motion fundamentals. Reach for it after timing, easing, and property selection are already in good shape.