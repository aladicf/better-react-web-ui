# Use `clip-path` when tab highlights and label state should move together

A tab highlight and the active label color can fall out of sync when they animate separately. One way to avoid that is to treat the active state as a single revealed layer instead of two coordinated animations.

Duplicate the tab row with active styling, position it above the inactive row, and animate a `clip-path` to reveal the active state in one motion.

```css
.tabs-wrapper {
  position: relative;
}

.tabs-inactive {
  color: var(--color-muted);
}

.tabs-active {
  position: absolute;
  inset: 0;
  color: white;
  background: var(--color-accent);
  clip-path: inset(0 75% 0 0 round 17px);
  transition: clip-path 200ms cubic-bezier(0.16, 1, 0.3, 1);
}
```

Why this works:

- the active surface and active text reveal together
- slow-motion playback shows fewer timing mismatches
- the result feels more like one moving state than two loosely coordinated ones

This pattern is especially useful for segmented controls, pill tabs, and compact nav bars.