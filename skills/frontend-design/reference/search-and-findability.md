# Search and Findability

Use this reference when the work involves site search, global search, autosuggest, search result pages, command palettes, no-results states, taxonomy gaps, or any situation where users rely on search because navigation is too slow or unclear.

Search is not just a technical utility. It is an information architecture and language problem.

## The search box is a conversation

When users type into search, they tell the product what they want **in their own words**.

If the system cannot understand those words — because of jargon, exact-match limitations, or weak metadata — users assume either:

- the content does not exist, or
- the product is not helping them.

That is why people fall back to Google or leave entirely.

## Do not charge a syntax tax

The syntax tax happens when search only works if the user guesses the exact label your system uses.

Examples:

- `sofa` vs `couch`
- `loan payoff` vs `loan release`
- `color` vs `colour`
- `plant` vs `plants`

Users should not need to learn internal taxonomy, SKU naming, or brand vocabulary just to find what they need.

Prefer intent matching over literal string matching.

## Search failure is often an IA failure

If search produces irrelevant results or zero results for important queries, the problem may be:

- poor titles
- weak metadata
- missing synonyms
- hidden internal vocabulary
- content types that are not clearly distinguishable
- filters that do not match the result set

This is not only an algorithm problem. It is often a structuring problem.

## Design for intent, not just exact matches

Good search should be able to handle:

- plurals and singulars
- common misspellings
- abbreviations and symbols
- British vs American spellings
- synonyms users actually say
- nearby conceptual matches when exact matches fail

Search should feel forgiving. The user should not be punished for being human.

## Command palettes vs site search vs filter bars

These tools can all look like a box plus some results, but they solve different problems.

| Pattern | Best for | User mindset | Scope |
| --- | --- | --- | --- |
| **Command palette** | jumping to known actions, pages, or power-user workflows | "I know roughly what I want to do" | actions, destinations, app-level navigation |
| **Site search / help search** | discovering content, products, docs, or answers across a larger corpus | "I need to find something relevant" | content discovery across the site or product |
| **Filter bar / faceting** | narrowing an already-known result set | "I need to reduce what I'm already looking at" | the currently visible dataset |

Use this as the default rule:

- if the user is trying to **act**, a command palette may be the right pattern
- if the user is trying to **find or learn**, site search is usually the right pattern
- if the user is trying to **narrow**, filters are usually the right pattern

Do not force a filter bar to behave like search, or a command palette to behave like a category browser. Users should not have to reverse-engineer which box they are standing in.

When more than one of these patterns exists in the same product, label and scope them clearly so they do not feel redundant or rivalrous.

## Place and label search clearly

Search already has a higher interaction cost than browsing, so do not add unnecessary mystery.

Good defaults:

- use an obvious rectangular field in a familiar location unless the product has a strong reason not to
- keep the search affordance visible when search is a primary route through the product
- use a clear label, accessible placeholder, or explicit `Search` button when an icon alone could be ambiguous
- avoid hiding critical search behind a decorative magnifying-glass-only trigger if that adds interpretation work

If there is any real chance the icon could be mistaken for zoom, inspect, or expand behavior, add clearer labeling.

## Never dead-end the results page

Avoid a cold `No results found` wall.

If exact matches are missing, offer something useful:

- similar categories
- nearby query suggestions
- top results in a related section
- contact/help escalation path
- a clearer refinement suggestion

The most important no-results state is often the **maybe** state, not the binary empty state.

## A practical search audit framework

Treat search as a living product, not a set-and-forget widget.

### 1. Zero-result audit

Pull recent search logs and group failed queries into:

- **true gaps** — content does not exist
- **synonym gaps** — content exists but uses different words
- **format gaps** — users want a PDF, video, guide, or other format your indexing misses

### 2. Query intent mapping

Classify top queries by intent:

- **navigational** — find a known destination
- **informational** — learn how something works
- **transactional** — complete a task or find a purchasable item

Different intents should produce different search experiences.

### 3. Fuzzy matching tests

Test top queries with:

- typos
- pluralization
- alternate spellings
- abbreviations

If those fail, the product is too literal.

### 4. Filtering and scoping review

The result page should offer filters that actually match the query domain.

For `shoes`, users want filters like:

- size
- color
- brand

Generic filters that ignore query context often add noise instead of control.

## Autosuggest should predict goals, not just words

Autosuggest should help users complete tasks faster, not merely echo characters.

Good autosuggest can include:

- likely destinations
- likely intents
- categories
- recent searches
- common tasks

Examples:

- `Track my order`
- `Reset password`
- `Shipping policy`
- `Running shoes`

This is closer to concierge behavior than dictionary lookup.

## Search microcopy should help at speed

People who use search often move quickly and reformulate reluctantly. Microcopy needs to help without getting theatrical.

### Placeholder text

Avoid wasting the placeholder on a generic `Search` if the product can be more useful.

Better placeholder patterns:

- what can be searched: `Search products, brands, or inspiration`
- what outcome is supported: `Search manuals, parts, or setup guides`
- what tone the brand wants to reinforce, as long as clarity survives

The placeholder can:

- reduce anxiety by suggesting valid query types
- teach vocabulary breadth
- reinforce brand tone lightly

But it should never become the only label when accessibility or clarity would suffer.

### Helpful labels around the search flow

Useful microcopy patterns include:

- `Recent searches`
- `Related searches`
- `Other users searched for`
- `Results for “{query}”`
- `{count} results`
- `Clear`
- `Cancel`

These labels are small, but they reduce uncertainty and memory load.

### Handling no-results states

When no results appear:

- make that fact obvious
- avoid cutesy copy that buries the problem
- offer recovery paths immediately

Useful recovery moves:

- suggest spelling or broader terms
- offer nearby categories or popular content
- explain what kinds of things can be searched
- provide a help/contact path when appropriate

The user should feel redirected, not stranded.

### Handling empty-submit states

If the user submits with no query at all, do not blindly dump the entire database on them.

Instead, show:

- popular searches
- helpful categories
- recent searches when available
- a prompt that clarifies what the search can do

## Show users what kind of result they are looking at

Search results become easier to scan when people can distinguish result types quickly.

Use clear visual cues for:

- product vs article vs help doc vs manual
- title vs excerpt vs metadata
- thumbnail when it genuinely helps recognition
- labels or chips for format/type when ambiguity is common

Search should not feel like one undifferentiated list of links.

## Fix the internal language gap

Teams often use formal or internal labels that users never say.

Bridge that gap with:

- controlled vocabulary
- synonym mapping
- hidden metadata keywords
- human-readable titles
- search logs reviewed regularly

If the company calls it one thing and users call it another, search needs to translate.

## Speed is trust

If search is slow, people assume it is weak.

Good defaults:

- keep obvious latency low
- if the wait is noticeable, use a clear loading state
- for longer work, explain what is happening
- avoid frozen or silent states that make users retry blindly

Fast enough search feels competent. Slow opaque search feels broken.

## Search logs are product language research

Search logs are one of the clearest signals of how users actually describe their intent.

Use them to find:

- vocabulary mismatches
- high-volume zero-result terms
- misunderstood labels
- missing content types
- recurring intent clusters that deserve shortcuts or navigation improvements

Reviewing failed queries regularly is not just search maintenance — it is ongoing IA and copy research.

## Practical checklist

- never dead-end zero results
- distinguish command palettes, site search, and filter bars by job and scope
- support plurals, typos, spelling variants, and common synonyms
- use search logs as a recurring product to-do list
- place search in a predictable location when it is a primary path
- use placeholder text to teach what can be searched, not just restate the obvious
- separate result types visually
- use filters that match the query context
- make autosuggest intention-aware, not only word-complete
- label recent, related, or suggested searches clearly when they appear
- prefer human-facing titles and metadata over internal IDs
- keep search and navigation aligned rather than acting like rival systems

## Anti-patterns

Avoid:

- exact-match-only behavior for common human language variation
- making users learn the company’s internal vocabulary
- empty results with no recovery path
- generic filters that do not fit the searched domain
- result pages that hide content type differences
- treating a Google-powered site search as a long-term UX substitute for better IA and metadata

Search wins when the product understands intent, vocabulary, and context — not only strings.