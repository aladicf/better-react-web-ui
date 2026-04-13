# Use `preserve-3d` when the effect truly depends on depth

If an interaction uses `rotateX()` or `rotateY()` and the illusion depends on front and back faces existing in depth, use `transform-style: preserve-3d` with a parent `perspective`.

```css
.card-container {
  perspective: 1000px;
}

.card {
  transform-style: preserve-3d;
  transition: transform 500ms cubic-bezier(0.16, 1, 0.3, 1);
}

.card:hover {
  transform: rotateY(180deg);
}

.card-front,
.card-back {
  backface-visibility: hidden;
}

.card-back {
  transform: rotateY(180deg);
}
```

Use this for:

- card flips
- orbiting or layered 3D decoration
- interfaces where true front/back depth helps the interaction read correctly

Do not use 3D transforms as decoration by default. Reach for them when the depth model actually explains the motion better than a 2D transition would.