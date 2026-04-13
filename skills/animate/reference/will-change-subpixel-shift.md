# Use `will-change` surgically when layer instability causes visual shifts

If an animation ends with a tiny 1px snap or subpixel wobble, the issue can sometimes come from the element moving on and off its own compositor layer.

In those cases, `will-change: transform` can help by keeping the element promoted consistently through the transition.

```css
.card {
  transition: transform 200ms cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform;
}
```

Use this carefully:

- good for frequently animated elements
- good for elements showing a real rendering issue
- bad as a blanket default across the whole app

`will-change` spends memory. Treat it like a scalpel, not a wallpaper pattern.