# Make animations interruptible

Users should be able to reverse or retarget motion at any point. If the UI feels locked until an animation finishes, it stops feeling polished and starts feeling broken.

For state-driven UI, transitions are usually a better default than one-shot keyframes because they can smoothly retarget when the state changes mid-flight.

```css
.sidebar {
  transform: translateX(-100%);
  transition: transform 280ms cubic-bezier(0.16, 1, 0.3, 1);
}

.sidebar[data-open='true'] {
  transform: translateX(0%);
}
```

Why this matters:

- rapid open/close input stays smooth
- the interface feels responsive under indecisive or repeated input
- the user stays in control instead of waiting for choreography to finish

Motion libraries such as Motion / Framer Motion also support interruption well, but the principle matters more than the tool.