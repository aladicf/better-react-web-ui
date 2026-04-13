# Never animate entry from `scale(0)`

Starting an element at `scale(0)` usually feels abrupt and synthetic. It suggests the object appeared from nothing rather than gently entering the interface.

Start closer to its real size and combine that with opacity instead.

```css
@keyframes appear {
  from {
    transform: scale(0.95);
    opacity: 0;
  }

  to {
    transform: scale(1);
    opacity: 1;
  }
}
```

Why this feels better:

- the element keeps believable mass
- the movement feels softer and more elegant
- text and child content suffer less distortion during entry

As a rough rule, stay around `0.9-0.98` for entry scaling unless the interaction has a very specific reason to exaggerate.