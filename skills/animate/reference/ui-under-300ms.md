# Keep routine UI motion under 300ms

For most product UI, motion longer than `300ms` starts to feel slow instead of polished. The interface begins to feel like it is catching up to the user instead of responding with them.

```css
.dropdown {
  transition:
    opacity 200ms cubic-bezier(0.16, 1, 0.3, 1),
    transform 200ms cubic-bezier(0.16, 1, 0.3, 1);
}
```

## Practical duration guide

- **150-250ms** → micro-interactions, button states, toggles, small reveals
- **250-400ms** → larger context switches such as modals or bigger panel changes
- **500ms and above** → mostly reserved for exceptional cases like sheets, marketing, or guided storytelling

When in doubt, shorten the duration and test again. Product UI usually benefits more from responsiveness than from theatrical settling.