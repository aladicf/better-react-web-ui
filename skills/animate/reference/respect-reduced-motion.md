# Always respect `prefers-reduced-motion`

Motion is not neutral for every user. Large movement, rapid transforms, and some continuous animations can trigger motion sickness, distraction, or fatigue.

Respect the `prefers-reduced-motion` media query and provide gentler alternatives.

```css
.element {
  animation: entrance 200ms ease-out;
}

@media (prefers-reduced-motion: reduce) {
  .element {
    animation: fade 200ms ease-out;
  }
}
```

The key principle is not simply “turn animations off.” It is “provide a version of the interaction that communicates state without unnecessary motion.”

Use reduced-motion planning as part of the design process, not as an afterthought patch.