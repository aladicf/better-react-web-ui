# Fill hover gaps when groups should feel continuous

If hover should persist while the pointer moves between stacked or adjacent elements, small physical gaps can cause the state to drop unexpectedly.

One practical fix is to use a pseudo-element to fill the gap so the hoverable region stays continuous.

```css
.toast {
  position: relative;
  margin-bottom: 8px;
}

.toast::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: -8px;
  height: 8px;
}
```

This helps when:

- moving between stacked toasts
- hovering adjacent cards with shared controls
- transitioning between trigger and floating UI where a tiny gap would otherwise drop state

Use it only where persistent hover genuinely improves the interaction.