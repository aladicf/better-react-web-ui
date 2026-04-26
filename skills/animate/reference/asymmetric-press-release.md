# Use asymmetric timing for press and release when the interaction meaning changes

Press and release are not always mirror-image events. Sometimes press should feel deliberate while release should feel immediate.

This is especially useful for hold-to-confirm or hold-to-delete interactions, where the user should have time to reconsider during press, but should get fast relief when they let go.

```css
.hold-button .progress {
  transition: clip-path 200ms ease-out;
}

.hold-button:active .progress {
  transition: clip-path 2s linear;
}
```

Use this pattern when:

- press implies commitment or dwell time
- release should feel forgiving and fast
- the interaction benefits from a built-in reconsideration window

Do not apply asymmetric timing to ordinary activation interactions by default. Save it for interactions where press and release genuinely have different jobs.
