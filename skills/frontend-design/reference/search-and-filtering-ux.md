# Search and Filtering UX

Use this reference when designing search experiences, autocomplete, filter interfaces, result presentation, and zero-results recovery. This covers both site-wide search and in-app filtering of collections, lists, and datasets.

If the project already uses a mature search or filter component, keep its baseline query handling, result rendering, and accessibility behavior first. Use this reference mainly to decide search strategy, filter architecture, result presentation, and recovery from empty states.

## Search Strategy

### Simple search vs. faceted search

**Simple search** is a single query field that matches against all relevant content.

- Best for: small datasets, clear user intent, compact viewports, and focused search tasks
- Keep it fast and forgiving — typos, partial matches, and synonym handling improve success rates
- Show recent searches and suggestions to reduce typing

**Faceted search** adds structured filters (category, price, date, status) alongside free-text query.

- Best for: large datasets, browse-and-narrow behavior, ecommerce and catalog interfaces
- Filters should be discoverable but not overwhelming
- Show active filter count and provide a clear "clear all" path

### Query input design

- **Placeholder text**: Use a concrete example ("Search for "project alpha""), not generic filler ("Search...")
- **Clear button**: Show once the user has typed, allowing one-action reset
- **Submit on Enter**: Always support Enter to submit; do not rely solely on live results
- **Search button**: Visible and accessible, not just a decorative icon
- **Scope selector**: If search can be scoped (e.g., "All", "Products", "Help"), make the scope obvious and changeable

### Autocomplete and suggestions

Suggestions reduce typing and guide users toward valid queries.

- **Trigger timing**: Show suggestions after 2-3 characters, not immediately
- **Categories**: Group suggestions by type (recent searches, popular queries, products, help articles)
- **Highlighting**: Bold the matching substring in each suggestion
- **Keyboard support**: Allow arrow-key navigation, Enter to select, Escape to close
- **Compact viewports**: Ensure suggestion lists are scrollable and do not overflow the viewport
- **No suggestions state**: If nothing matches, show a helpful message instead of an empty list

## Filter Architecture

### Filter placement

- **Sidebar**: Best for many filters on wide layouts; persistent visibility encourages exploration
- **Top bar**: Good for a few key filters; keeps the main content area wide
- **Drawer/overlay**: Preferred on narrow layouts where sidebar filters would consume the entire screen
- **Inline chips**: For active filters that can be removed directly from the result list

### Filter types and controls

| Filter type | Best control | Notes |
|-------------|--------------|-------|
| Boolean (yes/no, in stock) | Toggle or checkbox | Single toggle for binary; checkbox when multiple booleans are grouped |
| Single select (category, status) | Dropdown or radio buttons | Radio buttons for < 6 options; dropdown for more |
| Multi-select (tags, features) | Checkbox group or multi-select dropdown | Show selected count when collapsed |
| Range (price, date, rating) | Dual-handle slider or min/max inputs | Sliders for exploration; inputs for precision |
| Free text (keywords, location) | Text input with autocomplete | Debounce at ~300ms |

### Filter state management

- **URL synchronization**: Active filters should be reflected in the URL so results are shareable and bookmarkable
- **Persistent filters**: Remember a user's last filter choices across sessions when it makes sense (e.g., preferred category)
- **Reset behavior**: Provide a visible "Clear all" or "Reset" that returns to the default unfiltered state
- **Filter count badge**: Show how many filters are active when the filter panel is collapsed

### Responsive filter behavior

- **Wide layouts** (> 768px): Sidebar filters or persistent top filter bar
- **Medium layouts** (480-768px): Collapsible filter bar or horizontal scrollable filter chips
- **Narrow layouts** (< 480px): Filter drawer or modal, active filters shown as removable chips above results

## Result Presentation

### Result list design

- **Clear hierarchy**: Title, metadata, snippet, and thumbnail (if relevant) should have distinct visual treatment
- **Highlight matches**: Bold or highlight the matching query terms in titles and snippets
- **Consistent formatting**: Same fields in the same order for every result
- **Actionable**: Each result should be a clear link or have a primary action

### Empty and loading states

**Loading**:
- Show skeleton screens that match the result layout, not generic spinners
- Preserve the previous result set while loading new results when possible (stale-while-revalidate)

**Zero results**:
- Acknowledge the query clearly ("No results for 'xyz'")
- Suggest alternatives: corrected spelling, related terms, broader categories
- Offer a way to clear filters if any are active
- Provide a fallback action ("Browse all products", "Contact support")

### Pagination vs. infinite scroll vs. load more

| Pattern | Best for | Avoid when |
|---------|----------|------------|
| Pagination | Large result sets, SEO-critical pages, users who need to reference specific pages | Small result sets where pagination adds unnecessary clicks |
| Infinite scroll | Discovery browsing, image galleries, social feeds | Users need to reach footer content, result sets with clear ranking |
| Load more button | Balanced approach; user controls when to load more | Very large result sets where the button becomes tedious |

## Ranking and Relevance Signals

Help users understand why results appear in a given order:

- **Relevance indicators**: "Best match", "Most popular", "Recently updated" labels
- **Sort controls**: Allow users to change ranking (relevance, price, date, rating)
- **Default sort**: Choose the default that serves the most common intent, but make it changeable
- **Boosted results**: If certain results are promoted, label them ("Sponsored", "Featured") transparently

## Accessibility

### Screen reader support

- Announce result count changes ("12 results found" or "No results found")
- Associate filter controls with their result regions using `aria-controls`
- Ensure active filters are announced when changed
- Provide skip links to jump from filters to results

### Keyboard navigation

- Tab through filters in logical order
- Arrow keys for slider and dropdown filter controls
- Enter to apply or remove filters
- Escape to close filter drawers or suggestion lists

### Focus management

- Return focus to the search input after clearing filters
- Move focus to the result list or first result after submitting a search
- Trap focus appropriately inside filter drawers while they are open

## Anti-Patterns

- **Case-sensitive search**: Users should not have to guess capitalization
- **No visual feedback during search**: A silent search feels broken; show loading state
- **Filters that produce zero results**: Disable or hide filter combinations that yield no results
- **Overwhelming filter panels**: Too many filters create decision paralysis; prioritize the most impactful
- **Hidden active filters**: Users forget what they filtered; always show active filters prominently
- **Losing filter state on refresh**: Filters should persist in the URL
- **Infinite scroll without footer access**: Users who need footer links can never reach them
- **Search that requires exact matches**: Fuzzy matching and stemming are table stakes
- **No zero-results recovery**: An empty screen with no guidance is a dead end
- **Autocomplete that hijacks the cursor**: Suggestions should not auto-submit or replace the user's query unexpectedly

## Verify Search and Filter Quality

Before shipping:

- [ ] Search handles typos, partial matches, and common synonyms
- [ ] Autocomplete is keyboard-navigable, pointer-friendly, and resilient in compact viewports
- [ ] Active filters are visible and removable individually
- [ ] Filter state is reflected in the URL
- [ ] Zero-results pages offer alternatives and recovery paths
- [ ] Result rankings can be changed by the user
- [ ] Loading states match the result layout
- [ ] Screen readers announce result count and filter changes
- [ ] Focus management follows a logical path through search, filters, and results
- [ ] The search experience is tested with realistic queries, including edge cases and misspellings
