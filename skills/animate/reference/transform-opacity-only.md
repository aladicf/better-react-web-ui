# Animate transform and opacity first

As a default rule, animate `transform` and `opacity` before reaching for layout-affecting properties.

Why:

1. **Layout** is expensive
2. **Paint** is expensive
3. **Composite** is comparatively cheap

`transform` and `opacity` often stay in the composite stage, while properties such as `height`, `width`, `margin`, `padding`, or `top` can trigger layout and paint on every frame.

```css
.panel {
  transition:
    transform 240ms cubic-bezier(0.16, 1, 0.3, 1),
    opacity 240ms cubic-bezier(0.16, 1, 0.3, 1);
}
```

This is not a law with zero exceptions, but it should be the default starting point for performance-sensitive UI motion.