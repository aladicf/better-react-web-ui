# Search Engine Content UX

Use this reference when designing React, Next.js, React Router, TanStack Start, Vite React, or Astro with React islands pages that need to be understandable to users and search engines.

This is not a full SEO operations manual. It covers page-level UX, content, metadata, crawlability, and AI-sounding copy risks that frontend agents can affect.

## Start With Search Intent

Ask only what is missing.

- What query or topic should this page answer?
- Is the searcher comparing, learning, buying, troubleshooting, or navigating?
- What is the primary conversion after the search visit?
- Is this a landing page, product page, docs page, article, comparison page, category page, or support page?
- What changed recently: migration, redesign, routing, content, metadata, performance, or indexing?

If the page does not answer a real searcher question, metadata will not rescue it.

## Page-Level Checklist

For each important route, check:

- one clear `<h1>` that matches page intent
- logical heading order
- title tag that names topic and value
- meta description that sets a truthful expectation
- canonical URL when duplicate or parameterized routes exist
- indexable content present in initial HTML when SEO matters
- meaningful internal links to and from related pages
- descriptive link text, not `click here`
- image alt text for informational images
- stable, human-readable URLs
- no accidental `noindex`, blocked route, or client-only empty shell

React implementation note: do not hide all meaningful page content behind client-only loading if organic search is important. Use framework-level server rendering, static generation, or streamed content where the stack supports it.

## React and Framework Notes

### Next.js

- use route-level `metadata` or `generateMetadata`
- keep canonical, Open Graph, and Twitter metadata aligned with the page job
- use `next/image` or equivalent optimized media when images matter to LCP
- avoid rendering SEO-critical copy only after client-side effects
- validate structured data in rendered output, not only source files

### React Router, TanStack Start, and Vite React

- define title and meta handling explicitly through the chosen router or head manager
- ensure important marketing pages are prerendered, server rendered, or otherwise crawlable when SEO matters
- avoid a blank root plus client fetch for pages expected to rank

### Astro with React Islands

- keep static SEO content in Astro markup by default
- use React islands only for interactive parts
- do not move an entire SEO page into a client island unless it genuinely needs it

## Structured Data

Structured data can help when it reflects visible page content.

Useful page types:

- product
- article
- FAQ
- breadcrumb
- organization
- review or rating, when genuine and visible

Guardrails:

- do not add schema for content users cannot see
- keep names, prices, ratings, availability, and dates in sync with visible UI
- test rendered HTML because some libraries inject JSON-LD client-side
- keep schema generation close to the data source when possible

## AI-Sounding Copy Checks

Search pages often fail because they sound generic, not because they miss one keyword.

Avoid repeated AI-tell phrases:

- `In today's digital landscape`
- `At its core`
- `It is worth noting`
- `Let's delve into`
- `Unlock the power of`
- `Seamlessly transform`
- `Revolutionize your workflow`
- `This begs the question`

Avoid overused vague words unless they are truly specific:

- `robust`
- `comprehensive`
- `cutting-edge`
- `innovative`
- `seamless`
- `transformative`
- `holistic`
- `pivotal`

Better pattern:

- name the concrete problem
- show the specific outcome
- prove or demonstrate the claim
- link to the next useful page

Weak:

`In today's digital landscape, our robust platform revolutionizes collaboration.`

Stronger:

`Plan launches, assign owners, and track blockers from one shared workspace.`

## Content Freshness

Use freshness cues when currency affects trust:

- comparison pages
- pricing or packaging pages
- integration pages
- technical guides
- legal or compliance content
- product docs

Good defaults:

- show `Last updated` when content changes over time
- update screenshots with UI changes
- remove deprecated feature claims
- check broken links during refresh
- preserve URLs when refreshing unless there is a migration plan

## Performance and Search

SEO and UX share the same performance basics:

- optimize LCP media
- avoid layout shifts from banners, fonts, ads, and late-loading embeds
- keep interaction latency low on pages with forms, filters, accordions, or pricing toggles
- defer non-critical scripts
- avoid stacking chat, popup, analytics, heatmap, and tracking scripts without measuring impact

For deeper performance work, use [core web vitals](./core-web-vitals.md).

## Audit Output Shape

For page-level SEO reviews, report:

- issue
- affected route
- user impact
- search impact
- recommended React/framework fix
- priority

Useful priorities:

- P0: page is not indexable or renders empty
- P1: missing or misleading title, canonical, headings, or content
- P2: weak metadata, internal linking, alt text, or structured data
- P3: copy polish, snippets, freshness, or minor schema improvements

For writing and refresh work, also use [marketing copywriting](./marketing-copywriting.md), [copy editing sweeps](./copy-editing-sweeps.md), [natural copy transitions](./natural-copy-transitions.md), and [search and findability](./search-and-findability.md).
