# Use ease-in-out for on-screen movement

When an element is already visible and needs to travel from one position to another, `ease-in-out` usually feels more natural than `ease-out`.

Why:

- the element accelerates into motion instead of jumping forward abruptly
- it decelerates before stopping, which avoids a snap at the end
- the whole move feels more like an object traveling through space instead of a panel simply appearing

This is a strong fit for:

- tab indicators
- carousel or slider movement
- drag-and-drop reordering animations
- shared indicators and handles moving across the screen

```css
.slider-thumb {
  transition: transform 260ms cubic-bezier(0.65, 0, 0.35, 1);
}

.slider-thumb[data-position='end'] {
  transform: translateX(100%);
}
```

Avoid using a strong `ease-out` for long visible travel unless you intentionally want the motion to feel punchy or abrupt. It often starts too aggressively for repositioning work.