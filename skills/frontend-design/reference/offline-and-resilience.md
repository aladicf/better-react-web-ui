# Offline and Resilience Patterns

Use this reference when designing interfaces that must remain usable during network interruptions, slow connections, or server failures. This covers service worker UX, stale-while-revalidate strategies, offline fallbacks, sync queues, and conflict resolution for collaborative editing.

If the project already uses a mature offline or state management library, keep its baseline caching, sync, and recovery behavior first. Use this reference mainly to decide what to show users when the network fails, how to queue and retry actions, and how to handle conflicting data.

## Resilience Mindset

**The network is not reliable.** Design for intermittent connectivity as the default, not the exception. Users on mobile networks, public Wi-Fi, and rural connections experience flaky connectivity regularly.

**Goal**: The interface should feel responsive and trustworthy even when the network is not. Users should never lose work because of a connection blip.

## Service Worker UX

### Registration and transparency

- Register the service worker without blocking page load
- Do not ask users to install or enable service workers manually
- Provide a subtle indicator (optional) that content is available offline

### Cache strategies by content type

| Content type | Strategy | Rationale |
|--------------|----------|-----------|
| Shell (HTML, CSS, JS) | Cache first, network fallback | App must load instantly |
| User data | Network first, cache fallback | Show fresh data when possible |
| Static assets (images, fonts) | Cache first, long-term | Rarely change, expensive to re-fetch |
| API responses | Stale-while-revalidate | Show cached data immediately, refresh in background |

### Update notifications

When a new version of the app is available:
- Show a non-blocking toast or banner: "A new version is available. Refresh to update."
- Do not force-refresh without user consent — they may be in the middle of a task
- Allow users to dismiss and continue using the current version

## Stale-While-Revalidate

### The pattern

Show cached data immediately while fetching fresh data in the background. Update the UI silently when new data arrives.

```
1. User opens page
2. Show cached data instantly (even if hours old)
3. Fetch fresh data in background
4. If fresh data differs, update UI with subtle indicator
5. If fetch fails, user already has usable content
```

### Indicators

When cached data is displayed while fresh data loads:
- **Subtle**: A small "Updating..." text or gentle spinner near the data
- **Last updated timestamp**: "Updated 2 hours ago" lets users judge freshness
- **Pull-to-refresh**: Allow users to manually trigger a refresh when they want certainty

### Skeleton vs. cached content

- **Prefer cached content** over skeletons when data exists in cache. Skeletons feel like loading; cached content feels instant.
- **Use skeletons** only when there is no cached data available.

## Offline Fallbacks

### Read-only fallback

When the user is offline and requests data:
- Show cached data if available
- Indicate offline status clearly but unobtrusively ("You're offline. Showing saved content.")
- Disable actions that require connectivity (submit, sync, share) with clear disabled states
- Allow navigation to previously visited pages from cache

### Read-write fallback

When the user attempts an action while offline:
- **Queue the action** for later sync instead of failing immediately
- Show optimistic UI: update the interface as if the action succeeded
- Add an "Pending sync" indicator to queued actions
- Retry automatically when connectivity returns

### Offline pages

For pages that have never been cached:
- Show a branded offline page with useful options: "Browse saved content", "Try again", "Check connection"
- Do not show the browser's default offline error page
- Provide entertainment or utility while offline (cached reading list, saved drafts)

## Sync Queues

### Action queuing

Queue user actions that cannot complete offline:

- Form submissions
- Content creation (posts, comments, messages)
- File uploads
- State changes (likes, bookmarks, settings)

### Queue UX

- **Indicator**: Show a persistent "X changes pending" badge or bar
- **Retry**: Retry automatically when online; do not require manual action
- **Failure handling**: If a queued action fails on retry, show an error and allow manual retry or edit
- **Order preservation**: Maintain action order to prevent conflicts (e.g., delete before update)
- **Conflict alerts**: If an action conflicts with server state, notify the user and offer resolution

### Background sync

Use the Background Sync API where available:
- Register sync tags for each queued action
- The browser retries when connectivity returns, even if the app is closed
- Provide fallback polling for browsers that do not support Background Sync

## Conflict Resolution

### Conflict scenarios

Conflicts arise when offline changes compete with server changes:
- **Last-write-wins**: Simplest; the most recent timestamp wins. Risks losing meaningful work.
- **Merge**: Combine non-conflicting fields from both versions.
- **Manual resolution**: Present both versions to the user and ask them to choose.

### Conflict UX

When manual resolution is needed:
- Show both versions side by side with clear labels ("Your version" / "Server version")
- Highlight the differences visually
- Allow selecting one version or editing a merged result
- Explain why the conflict occurred ("This item was edited by another user while you were offline")

### Prevention

- Lock items being edited by showing "Someone else is editing" indicators
- Use operational transforms for real-time collaborative editing
- Prefer incremental updates over full-document replacements

## Perceived Performance

### Optimistic UI

Update the interface immediately when the user performs an action, before the server confirms:
- **Like/heart**: Increment the count immediately; revert on failure
- **Send message**: Append to the chat immediately; mark as sent when confirmed
- **Add to cart**: Update cart count immediately; show error only if the server rejects

### Loading states

- **Skeleton screens**: Match the layout of the expected content; avoid generic spinners
- **Progressive loading**: Load text first, images lazy; show structure before details
- **Incremental reveals**: Show partial data as it arrives instead of waiting for the full payload

### Honest waiting states

When the user must wait:
- Show real progress if known ("Uploading 3 of 5 files")
- Use human-friendly language ("Saving your changes..." not "Processing request...")
- Provide cancellation for long-running operations
- Never fake progress bars that move at arbitrary rates

## Accessibility

### Screen reader announcements

- Announce offline/online status changes with `aria-live="polite"`
- Announce sync progress ("3 changes saved" / "Sync failed, 2 changes pending")
- Ensure queued-action indicators are perceivable to screen readers

### Keyboard and focus

- Allow keyboard users to trigger manual retry on failed actions
- Ensure offline pages are fully keyboard-navigable
- Maintain focus position after background content updates

## Anti-Patterns

- **Blocking the entire UI on offline**: Users should be able to browse cached content
- **Silent failures**: Actions that fail offline should be queued or clearly explained
- **No sync indicator**: Users should know when their offline work is safely saved
- **Overwriting without warning**: Last-write-wins without informing the user risks data loss
- **Fake offline detection**: Relying solely on `navigator.onLine` is unreliable; use request timeouts and error handling
- **Infinite retry loops**: Failed syncs should back off and eventually surface an error
- **Optimistic UI without rollback**: If the server rejects an action, the UI must revert cleanly
- **Ignoring queue order**: Reordering queued actions can cause logical errors
- **Full-page reload on reconnect**: Refreshing the entire page destroys user context
- **No offline navigation**: Users should be able to browse previously visited pages while offline

## Verify Offline Resilience

Before shipping:

- [ ] Cached content loads instantly, even when fresh data is still fetching
- [ ] User actions are queued when offline, not lost
- [ ] Optimistic UI updates are rolled back on failure
- [ ] Sync status is visible and understandable
- [ ] Conflicts are detected and surfaced to users when necessary
- [ ] Offline pages provide useful alternatives, not dead ends
- [ ] Background sync retries automatically when connectivity returns
- [ ] Screen readers announce connectivity and sync state changes
- [ ] Keyboard users can retry failed actions manually
- [ ] The app feels responsive and trustworthy on slow or flaky networks