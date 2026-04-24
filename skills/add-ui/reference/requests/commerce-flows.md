### Commerce flows

Prioritize:

- friction reduction
- trust signals
- legible totals and decisions
- clean path to completion

Also:

- choose the list continuation pattern by browsing mode: exploratory category browsing can support `Load more` plus lazy-loading, but ranked search results usually need a more deliberate `Load more` or pagination rhythm
- avoid infinite scroll where footer access, backtracking, or careful result comparison matter
- keep filters and sorting stable and close to the results; top-aligned controls often adapt better than heavy sidebars, especially across narrow and wide layouts
- keep filter panels stable while results update; do not auto-scroll, freeze, or collapse the user out of their current narrowing flow
- prefer full-height overlays or calmer top-aligned filter surfaces over cramped narrow-layout split filtering
- keep search visible and predictive when it is a common shortcut through the catalog
- use breadcrumbs when the hierarchy is deep enough that users need help climbing back up through categories, and keep the nearest useful parent obvious in narrow layouts
- make the product page capable of a convincing 30-second pitch above the fold: product name, price, critical options, primary CTA, and high-trust delivery / returns information should be easy to find immediately
- show review trust signals with enough context: decimal rating, rating count, and richer distribution or attribute detail when the purchase is high-consideration
- make negative reviews, customer photos, pros/cons, and recommendation signals work as confidence builders rather than burying them below generic social-proof polish
- allow filters, helpful sorting, and reviewer-like-me context when the review corpus is large enough to justify discovery tooling
- collapse secondary product detail into accordions or linked subsections instead of forcing every detail into the first screenful
- keep auxiliary widgets such as chat, loyalty prompts, or support controls available but visually quiet so they do not derail the buying decision
- match variant controls to the attribute being chosen: swatches for visual choices, buttons/chips for short textual sets, and richer dropdown/list patterns when options are longer or carry metadata
- show unavailable or out-of-stock variant options clearly before the user reaches the final action so the flow feels honest rather than bait-and-switch

Pair this with [breadcrumb-ux](../../frontend-design/reference/breadcrumb-ux.md) when category depth, product-family navigation, or documentation-like wayfinding is part of the brief.
Pair this with [accordion-ux](../../frontend-design/reference/accordion-ux.md) when the brief depends on product-detail accordions, FAQ stacks, collapsible shipping/returns/spec sections, or long filter groups.
Pair this with [collection-browsing-and-filtering](../../frontend-design/reference/collection-browsing-and-filtering.md) when the brief hinges on filters, sorting, result browsing, `Load more`, pagination, infinite scroll, or return-to-list behavior.
Pair this with [ecommerce-ux](../../frontend-design/reference/ecommerce-ux.md) when the brief spans merchandising, trust, product understanding, cart/checkout flow, support-widget restraint, or commerce-specific responsive behavior across more than one commerce surface.
Pair this with [reviews-and-ratings](../../frontend-design/reference/reviews-and-ratings.md) when reviews, recommendations, rating distributions, or customer-photo credibility cues materially affect the purchase decision.
Pair this with [social-proof-patterns](../../frontend-design/reference/social-proof-patterns.md) when testimonials, customer logos, certifications, badges, or case-study proof need to support the buying decision beyond product-review mechanics alone.
