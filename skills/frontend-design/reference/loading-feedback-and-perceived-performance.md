# Loading Feedback and Perceived Performance

Use this reference when the work involves loading states, skeletons, spinners, streaming content, optimistic UI, stale-data indicators, prefetching, or any surface where the system needs to acknowledge waiting without drifting into performance theatre.

Loading UI is not decoration.

It is a trust surface.

## Start with the honest question

Before choosing a loading pattern, ask:

- what is actually slow here?
- how long does the user usually wait?
- does the system know progress precisely, vaguely, or not at all?
- can any real content appear sooner?
- can the interface preserve previous useful state instead of blanking out?

If the answer is `we do not know, but we want it to look busy`, the problem is not the loading indicator.

The problem is performance honesty.

## Loading feedback should explain, not camouflage

Users need to know:

- that their action registered
- whether the system is working
- whether they can keep using the surface
- whether the current data is fresh, stale, partial, or paused

Good loading feedback reduces uncertainty.

Bad loading feedback creates the illusion of progress while hiding a weak system underneath.

## Match the loading pattern to the wait

### Instant or nearly instant

Use:

- pressed state
- tiny inline progress cue
- optimistic state update when the risk is low

Do not add a loader just to prove work happened.

### Short but noticeable waits

Use:

- inline busy state
- lightweight spinner near the affected region
- a short stage label like `Saving…` or `Loading results…`

Keep the rest of the interface usable if possible.

### Longer or uncertain waits

Use:

- stage-based progress
- honest time ranges when known
- cancellable or retryable flows when appropriate
- preserved last-good content plus freshness state when that helps decisions

For longer waits, silence is expensive.

## Skeletons are a tool, not the default

Skeleton screens can help when:

- users already know what kind of content to expect
- the final layout is stable and predictable
- preserving spatial structure reduces jumpiness
- the skeleton matches the real UI closely enough to stay believable

Skeletons are weaker when:

- the final content shape varies wildly
- the layout is still unknown or highly dynamic
- the skeleton is generic gray wallpaper unrelated to the final UI
- teams delay real content just to let the skeleton shimmer longer

Do not use a skeleton just because it feels more `modern` than a spinner.

## Faithful skeletons or none at all

If a skeleton is used, it should resemble the real layout closely:

- same proportions
- same density
- same likely wrapping
- same media scale and crop logic

If the placeholder implies five lines of text and a large hero image but the real content is a one-line title and a tiny thumbnail, users feel tricked rather than reassured.

## Prefer real progress over gray theatre

Better alternatives often include:

- streaming partial real content
- preserving the last useful view while refreshing in the background
- optimistic UI for low-risk interactions
- prefetching likely-next content
- subtle fade or state transitions instead of fake content blocks

If you can show something real sooner, do that before polishing a fake placeholder.

## Preserve useful context whenever possible

Blanking the interface is often worse than showing an honest partial state.

Prefer:

- last known data with `Updated 2m ago`
- list content that remains visible while details update
- disabling only the affected control instead of freezing the whole screen
- local loading states over global takeover states

Users usually want continuity more than spectacle.

## Do not let perceived performance excuse real slowness

Perceived performance matters.

It just should not become an excuse to stop improving actual performance.

Warning signs:

- styling the skeleton before fixing the bottleneck
- adding loaders to mask hydration or data-layer debt
- making transitions longer so the wait `feels smooth`
- celebrating a calmer loading state while the real response time stays poor

Loading feedback should support real improvement, not replace it.

## Freshness states matter as much as loaders

In dashboards, feeds, or dynamic lists, users often care whether the data is trustworthy more than whether a shimmer appears.

Useful states:

- `Live`
- `Updated 30s ago`
- `Refreshing…`
- `Offline`
- `Paused`
- `Showing cached results`

These cues often do more for confidence than a generic loading placeholder.

## Practical checklist

- Does the chosen loading state match the real wait length and uncertainty?
- Can real content appear earlier through streaming, prefetch, or state preservation?
- Is the loading feedback describing reality, not just keeping the screen busy?
- If a skeleton is used, does it match the final UI closely enough to preserve trust?
- Can the unaffected parts of the interface stay usable while one region updates?
- Are freshness and retry states visible when they matter?
- Is the team still working on actual performance instead of only polishing the mask?

## Anti-patterns

Avoid:

- treating skeletons as the universal answer
- delaying real content so the placeholder can complete its animation
- replacing local loading feedback with whole-page takeover states unnecessarily
- using vague progress copy like `Almost there` when timing is unknown
- making users wonder whether the page is frozen, stale, or actually finished

Good loading UX feels calm because the system is honest.

Not because the gray boxes are better dressed.
