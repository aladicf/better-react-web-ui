# Keep keyboard-driven interactions instant

Keyboard navigation often happens in rapid sequences. Adding visible animation to those sequences makes the interface feel slower and less in sync with the user's intent.

```tsx
function handleKeyDown(event: KeyboardEvent) {
  if (event.key === 'ArrowDown') {
    setSelectedIndex((value) => value + 1)
  }
}
```

Prefer:

- immediate selection changes
- instant highlight movement
- no decorative travel for rapid arrow-key or command-palette interaction

If pointer users get motion and keyboard users do not, that is often correct. The interaction frequency and expectation are different.