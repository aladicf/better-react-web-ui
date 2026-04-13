# Provide immediate feedback for every action

An interface should feel like it heard the user. If an action starts with silence, the user starts wondering whether the click, tap, or submit actually registered.

Feedback should appear immediately even when the real work takes longer.

```tsx
async function onSubmit() {
  setIsLoading(true)

  try {
    await saveData()
    setShowSuccess(true)
  } finally {
    setIsLoading(false)
  }
}
```

Common feedback forms:

- pressed state on click
- spinner or progress indicator
- optimistic state update
- success confirmation
- error acknowledgment

The operation can be slow. The interface response should not be.