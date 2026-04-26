---
name: search
description: Design or improve search experiences, result presentation, and filtering interfaces. Use when the user asks to add search, redesign search results, improve findability, build autocomplete, add filters, or fix zero-results dead ends.
metadata:
  argument-hint: "[search surface or result set]"
---

Build search experiences that help users find what they need quickly, even when they are uncertain about what they are looking for. The goal is not perfect relevance on the first try; it is guiding users from intent to outcome through forgiving search and clear results.

Consult the [search and filtering UX](../frontend-design/reference/search-and-filtering-ux.md) reference for autocomplete patterns, filter architecture, result presentation, and zero-results recovery.
Consult the [search and findability](../frontend-design/reference/search-and-findability.md) reference for site search, autosuggest, command palettes, and intent-aware findability.
Consult the [collection browsing and filtering](../frontend-design/reference/collection-browsing-and-filtering.md) reference for long result lists, faceted browsing, and filter overlays.
Consult the [predictive and intent-driven UI](../frontend-design/reference/predictive-and-intent-ui.md) reference for recommendations, smart defaults, and resume flows.

## MANDATORY PREPARATION

Users start this workflow with `/search`. Once this skill is active, load $frontend-design — it contains design principles, anti-patterns, and the **Context Gathering Protocol**. Follow that protocol before proceeding — if no design context exists yet, you MUST load $setup first. Additionally gather: what users typically search for, what common queries fail, and how large the searchable dataset is.

## Assess Search Needs

Understand the search context before designing the interface:

1. **Search intent**: Are users looking for a specific item (known-item search), exploring a category (exploratory), or trying to complete a task (transactional)?
2. **Dataset size**: Small datasets (< 100 items) may not need search; filtering or categorization may suffice. Large datasets need faceted search and ranking.
3. **Query patterns**: What do users actually type? Common misspellings, synonyms, and abbreviations should be handled.
4. **Failure modes**: What happens when search returns nothing? When it returns too much?

## Search Interface Design

### Query input

- Use concrete placeholder text ("Search for "project alpha"") instead of generic filler
- Show a clear button once the user has typed
- Support Enter to submit; do not rely solely on live results
- Include a visible search button, not just a decorative icon
- If scope is selectable ("All", "Products", "Help"), make it obvious and changeable

### Autocomplete and suggestions

- Show suggestions after 2-3 characters
- Group by type: recent searches, popular queries, products, help articles
- Bold the matching substring
- Support arrow-key navigation, Enter to select, Escape to close
- In compact viewports, ensure suggestions are scrollable and do not overflow
- Show a helpful message when nothing matches instead of an empty list

### Filter integration

- Sidebar filters for many filters on wide layouts
- Top bar for a few key filters
- Drawer/overlay on narrow layouts
- Inline chips for active filters that can be removed directly
- Synchronize filter state with the URL for shareability
- Show active filter count when collapsed

## Result Presentation

### Result list

- Clear hierarchy: title, metadata, snippet, thumbnail
- Highlight matching query terms in titles and snippets
- Consistent formatting across all results
- Each result should be a clear link or have a primary action

### Empty states

- Acknowledge the query ("No results for 'xyz'")
- Suggest alternatives: corrected spelling, related terms, broader categories
- Offer to clear filters if any are active
- Provide a fallback action ("Browse all", "Contact support")

### Ranking controls

- Allow users to change sort order (relevance, price, date, rating)
- Label the default sort and explain why it is the default
- If results are promoted, label them transparently ("Featured")

## Pagination and Loading

| Pattern | Best for |
|---------|----------|
| Pagination | Large result sets, SEO-critical pages, users who reference specific pages |
| Infinite scroll | Discovery browsing, image galleries, social feeds |
| Load more | Balanced approach; user controls when to load |

- Show skeleton screens that match result layout during loading
- Preserve previous results while loading new ones when possible

## Accessibility

- Announce result count changes for screen readers
- Associate filter controls with result regions using `aria-controls`
- Ensure active filters are announced when changed
- Provide skip links from filters to results
- Support keyboard navigation through suggestions and filters

## Anti-Patterns

- **Case-sensitive search**: Users should not guess capitalization
- **No visual feedback during search**: Silent search feels broken
- **Filters that produce zero results**: Disable or hide invalid combinations
- **Overwhelming filter panels**: Too many filters create decision paralysis
- **Hidden active filters**: Users forget what they filtered
- **Losing filter state on refresh**: Filters should persist in the URL
- **Infinite scroll without footer access**: Users cannot reach footer links
- **Search requiring exact matches**: Fuzzy matching and stemming are essential
- **No zero-results recovery**: An empty screen with no guidance is a dead end
- **Autocomplete that hijacks the cursor**: Suggestions should not auto-submit

## Verify Search Quality

Before shipping:

- [ ] Search handles typos, partial matches, and common synonyms
- [ ] Autocomplete is keyboard-navigable, pointer-friendly, and resilient in compact viewports
- [ ] Active filters are visible and individually removable
- [ ] Filter state is reflected in the URL
- [ ] Zero-results pages offer alternatives and recovery paths
- [ ] Result rankings can be changed by the user
- [ ] Loading states match the result layout
- [ ] Screen readers announce result count and filter changes
- [ ] Focus management follows a logical path
- [ ] Search is tested with realistic queries and misspellings
