# Notification and Permission Systems

Use this reference when designing browser permission prompts, push notification strategy, in-app notification centers, and permission-denied recovery flows. This covers the full lifecycle from requesting access to handling denial gracefully.

If the project already uses a mature notification or permission library, keep its baseline prompt timing, delivery, and management behavior first. Use this reference mainly to decide when and how to ask for permissions, how to structure notification content, and how to recover when users say no.

## Permission Strategy

### Ask at the right time

The biggest mistake in permission UX is asking too early or without context.

**Good timing**:
- After the user has performed an action that clearly benefits from the permission (e.g., after clicking "Upload photo", request camera access)
- When the user has reached a point where the value is obvious (e.g., after creating a reminder, ask for notification permission)
- In response to a user-initiated preference change (e.g., toggling "Enable notifications" in settings)

**Bad timing**:
- On first app load before the user understands the product
- On page load in a browser before any interaction
- In a modal that blocks the entire experience
- During a critical workflow where the interruption breaks momentum

### Pre-permission priming

Before showing the system permission dialog, use an in-app priming screen to explain the value:

- **Why**: What will the user get? ("Get notified when your order ships")
- **When**: What triggers the notification? ("Only for delivery updates")
- **Control**: How can they change it later? ("You can turn this off anytime in settings")

If the user declines the priming screen, do not show the system dialog. Wait for a better moment or a clearer value proposition.

### Progressive permission requests

Start with the least invasive permissions and build trust before requesting sensitive ones:

1. **Non-invasive**: Local storage, session persistence
2. **Mildly invasive**: Notifications for clear user benefits
3. **Sensitive**: Camera, microphone, location, contacts

Never request multiple permissions in rapid succession. Space them out and tie each to a specific feature moment.

## Browser Permission Prompts

### The Permission API

Modern browsers expose permissions through the Permissions API. Check status before requesting:

```javascript
const status = await navigator.permissions.query({ name: 'notifications' });
if (status.state === 'prompt') {
  // Show priming, then request
} else if (status.state === 'denied') {
  // Show recovery path
}
```

### Permission states

| State | Meaning | UX Response |
|-------|---------|-------------|
| `prompt` | User has not been asked yet | Show priming, then request |
| `granted` | User has allowed | Proceed silently; do not ask again |
| `denied` | User has blocked | Show recovery path; never re-prompt |

**Critical**: If the state is `denied`, never show the system prompt again. The user must change this in browser settings, and your job is to help them find the path.

## Push Notification Strategy

### Notification content design

Every notification should be:
- **Actionable**: The user should know what happens when they activate it
- **Timely**: Send only when the information is relevant now
- **Personal**: Use the user's name, order number, or context when appropriate
- **Concise**: Title under 40 characters, body under 100 characters when possible

### Notification types and frequency

| Type | Frequency | Example |
|------|-----------|---------|
| Transactional | Per event | "Your order has shipped" |
| Reminder | Scheduled | "Your appointment is in 30 minutes" |
| Re-engagement | Sparingly | "You have 3 unread messages" |
| Marketing | Rare, opt-in | "New arrivals in your favorite category" |

**Rules**:
- Transactional notifications are expected and welcome
- Re-engagement notifications feel pushy if overused; limit to weekly at most
- Marketing notifications should always be opt-in and easy to disable
- Respect quiet hours based on user's local timezone

### Notification center

An in-app notification center gives users control and history:

- Group by date (Today, Yesterday, Earlier)
- Allow marking as read/unread and deleting
- Show unread count badge on the notification icon
- Deep-link each notification to the relevant content
- Support bulk actions (mark all as read, clear all)

## Permission-Denied Recovery

### When permission is denied

If a user denies a permission that is needed for a feature:

1. **Explain the impact clearly**: "Without camera access, you cannot scan receipts."
2. **Offer an alternative**: "You can upload photos manually instead."
3. **Show how to re-enable**: Provide step-by-step instructions for browser or OS settings.
4. **Never block the entire app**: The user should be able to continue using unrelated features.

### Re-enable instructions

Provide platform-specific instructions:

- **Chromium browser**: "Click the lock icon in the address bar → Site settings → Camera → Allow"
- **iOS Safari**: "Go to Settings → Safari → Camera → Allow"
- **Chrome with overflow menu**: "Open the three-dot menu → Settings → Site settings → Camera → Allow"

Use illustrations or screenshots when possible. Text-only instructions are often missed.

## In-App Notification Surfaces

### Toast notifications

Brief, non-blocking messages that appear and dismiss automatically.

- **Duration**: 3-5 seconds for simple messages; longer for actions ("Undo" buttons)
- **Position**: Top-right or bottom-center are common defaults; keep consistent
- **Stacking**: Limit to 3 visible toasts; older ones should fade or collapse
- **Actions**: Allow undo, retry, or dismiss on toasts that represent state changes
- **Accessibility**: Use `aria-live="polite"` so screen readers announce toasts without interrupting

### Badges and indicators

Small counts or dots that indicate unread or new activity.

- **Badge count**: Show exact numbers up to 99; use "99+" for larger counts
- **Dot indicator**: Use when the count is not meaningful but presence is (e.g., new settings available)
- **Clear on view**: Remove badges once the user has seen the content, not just opened the section

### Banners and alerts

Persistent messages for important but non-blocking information.

- Use for: new features, policy updates, maintenance windows
- Allow dismissal with a clear close button
- Do not re-show dismissed banners in the same session
- Keep the message scannable; link to details if needed

## Accessibility

### Screen reader announcements

- Announce permission dialogs with `role="alertdialog"` and clear focus management
- Use `aria-live="polite"` for toast notifications
- Associate badges with their target elements using `aria-describedby`
- Ensure notification centers are fully keyboard-navigable

### Focus management

- Move focus to the permission dialog when it appears
- Return focus to the trigger element after the dialog closes
- Trap focus inside the dialog while it is open

### Motion sensitivity

- Respect `prefers-reduced-motion` for toast entrance/exit animations
- Do not auto-dismiss toasts too quickly; give users time to read and act
- Avoid flashing or vibrating notifications for users with motion sensitivity

## Anti-Patterns

- **Permission on first load**: Users do not understand the value yet and will deny
- **Multiple rapid permission requests**: Asking for camera, location, and contacts in the first minute feels invasive
- **Blocking the app on denial**: Users should always be able to continue with reduced functionality
- **No re-enable path**: A denied permission with no guidance on how to fix it is a dead end
- **Notification spam**: Too many notifications trains users to disable them entirely
- **Generic notification copy**: "You have a new notification" tells the user nothing
- **Undismissible banners**: Persistent banners that cannot be closed feel like ads
- **Ignoring quiet hours**: Notifications at 3 AM destroy trust
- **No notification history**: Users should be able to review past notifications they may have missed
- **Toasts without actions**: A toast that says "Changes saved" without an "Undo" button misses a recovery opportunity

## Verify Notification and Permission Quality

Before shipping:

- [ ] Permissions are requested after the user understands the value, not on first load
- [ ] Pre-permission priming explains why, when, and how to change later
- [ ] Denied permissions show clear recovery paths with re-enable instructions
- [ ] Notifications are actionable, timely, and concise
- [ ] Notification frequency respects user trust (transactional welcome, marketing rare)
- [ ] In-app notification center provides history and control
- [ ] Toasts are accessible, dismissible, and respect reduced motion
- [ ] Badges clear when content is viewed, not just when the section is opened
- [ ] The app remains usable when permissions are denied
- [ ] Focus management follows users through permission dialogs and notification surfaces
