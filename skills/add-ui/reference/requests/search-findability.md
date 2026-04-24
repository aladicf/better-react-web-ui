### Search / command palette / help search / result pages

Prioritize:

- intent matching
- fast scanability
- zero dead-ends
- query-specific filtering

Also:

- design for the user's language rather than internal taxonomy
- make autosuggest predict goals, not just finish strings
- distinguish command palettes, site search, and filter bars by the job each one is doing
- distinguish result types clearly with labels, thumbnails, or metadata when that improves recognition
- use microcopy around placeholder text, recent searches, related searches, and no-results states to help users recover quickly
- turn zero-results screens into recovery surfaces with suggestions, nearby categories, or support paths
- keep search responsive enough to feel trustworthy, with loading feedback when the wait is noticeable

Pair this with [search-and-findability](../../frontend-design/reference/search-and-findability.md) when the request involves site search, help-center search, command palettes, autocomplete, result ranking, or no-results recovery.
Pair this with [loading-feedback-and-perceived-performance](../../frontend-design/reference/loading-feedback-and-perceived-performance.md) when the search experience depends on autosuggest latency, incremental result loading, stale-result states, or honest waiting feedback.
Pair this with [predictive-and-intent-ui](../../frontend-design/reference/predictive-and-intent-ui.md) when the work depends on recent searches, likely destinations, contextual suggestions, or resume flows that should speed users up without hiding browse/search alternatives.
