## Request mapping heuristics

Use this reference to shape the five directions for common request types.

When React-based fallback defaults are relevant, pair this with [component library integration](./component-library-integration.md) so you decide not just *what* artifact is being requested, but also whether that artifact should be led by primitives, reusable patterns, or block accelerators.

When a request maps to a component-pattern reference such as accordion, breadcrumb, carousel, slider, date input, date-time picker, navigation menu, comparison, configurator, or table guidance, treat that reference as custom/headless-first by default. If a mature component library already owns the primitive, match the library first and use the reference mainly for fit, composition, defaults, surrounding states, and workflow decisions.

### Quick lookup: what are you designing?

| Problem or surface | File |
|---|---|
| Hero, landing page, marketing CTA | [hero-landing-cta](./requests/hero-landing-cta.md) |
| Pricing page, plan comparison, billing | [pricing-comparison](./requests/pricing-comparison.md) |
| Feature or product comparison table | [feature-comparison](./requests/feature-comparison.md) |
| Product category browsing, filtering, search results | [commerce-flows](./requests/commerce-flows.md) |
| Product page, cart, checkout flow | [commerce-flows](./requests/commerce-flows.md) |
| Dashboard, KPI widgets, charts, data overview | [dashboard-data](./requests/dashboard-data.md) |
| Data table, operational grid, editable grid | [data-tables](./requests/data-tables.md) |
| Configurator, builder, step-based customization | [configurators-builders](./requests/configurators-builders.md) |
| Cards, listings, media blocks, browse grids | [cards-listings](./requests/cards-listings.md) |
| Content page, article, documentation | [content-surfaces](./requests/content-surfaces.md) |
| Navigation menu, mega-dropdown, section discovery | [navigation-discovery](./requests/navigation-discovery.md) |
| Information architecture, settings structure, enterprise nav | [information-architecture](./requests/information-architecture.md) |
| Sidebar, footer, support panels, right rails | [sidebar-footer](./requests/sidebar-footer.md) |
| Search page, command palette, autosuggest, zero results | [search-findability](./requests/search-findability.md) |
| Breadcrumb, nested navigation, docs hierarchy | *see [breadcrumb-ux](../../frontend-design/reference/breadcrumb-ux.md)* |
| Form, date input, date-time picker, scheduling | [forms-dates](./requests/forms-dates.md) |
| Form completion flow, blocked submit, disabled buttons | [form-completion](./requests/form-completion.md) |
| Live validation, inline errors, field recovery | *see [live-validation-ux](../../frontend-design/reference/live-validation-ux.md)* |
| FAQ, accordion, disclosure groups, stacked details | [faq-disclosures](./requests/faq-disclosures.md) |
| Sign-in, sign-up, password, MFA, account settings | [auth-account-settings](./requests/auth-account-settings.md) |
| Permissions, roles, access request, admin tools | [permissions-roles](./requests/permissions-roles.md) |
| Onboarding, first-run, activation, setup wizard | [onboarding-activation](./requests/onboarding-activation.md) |
| Paywall, upgrade prompt, trial expiration, feature gate | [paywalls-upgrades](./requests/paywalls-upgrades.md) |
| Social proof, testimonials, reviews, trust badges | *see [social-proof-patterns](../../frontend-design/reference/social-proof-patterns.md)* |
| Slider, range control, calculator, filter | [configurators-builders](./requests/configurators-builders.md) |
| Carousel, gallery rail, testimonial slider | *see [carousel-ux](../../frontend-design/reference/carousel-ux.md)* |
| Notification center, inbox, activity feed, alerts | [notifications-feeds](./requests/notifications-feeds.md) |
| Inline error, alert banner, toast, system message | [error-states](./requests/error-states.md) |
| Error page, 404, 500, broken link recovery | [404-recovery](./requests/404-recovery.md) |
| Server error page, 401/403/429/503 recovery | [error-page-recovery](./requests/error-page-recovery.md) |
| Delete, archive, revoke, bulk destructive action | [destructive-actions](./requests/destructive-actions.md) |
| Legacy modernization, hybrid old/new flow, beta replacement | [legacy-modernization](./requests/legacy-modernization.md) |
| Accessibility audit, keyboard hardening, component a11y | [accessibility-hardening](./requests/accessibility-hardening.md) |

### Request categories

- [Hero / landing / CTA](./requests/hero-landing-cta.md)
- [Error states / alerts / recovery](./requests/error-states.md)
- [Destructive actions / delete / archive / bulk operations](./requests/destructive-actions.md)
- [Pricing / comparison / plan selection](./requests/pricing-comparison.md)
- [Feature comparison / product comparison](./requests/feature-comparison.md)
- [Paywalls / upgrade prompts / trial expiration](./requests/paywalls-upgrades.md)
- [Onboarding / activation / first-run setup](./requests/onboarding-activation.md)
- [Auth / account / settings](./requests/auth-account-settings.md)
- [Permissions / roles / access management](./requests/permissions-roles.md)
- [Form completion / blocked CTAs / disabled buttons](./requests/form-completion.md)
- [Notifications / inbox / activity feed / notification settings](./requests/notifications-feeds.md)
- [Legacy modernization / replacement beta / hybrid old-new flow](./requests/legacy-modernization.md)
- [Search / command palette / help search / result pages](./requests/search-findability.md)
- [Accessibility / keyboard support / component hardening](./requests/accessibility-hardening.md)
- [Navigation / mega menus / section discovery](./requests/navigation-discovery.md)
- [Information architecture / settings / enterprise product structure](./requests/information-architecture.md)
- [FAQ / disclosures / stacked detail sections](./requests/faq-disclosures.md)
- [Forms / dates / date-time scheduling](./requests/forms-dates.md)
- [Configurators / builders / customizers](./requests/configurators-builders.md)
- [Dashboard / charts / widgets / data tables](./requests/dashboard-data.md)
- [Sidebar / footer / support surfaces](./requests/sidebar-footer.md)
- [Data tables / operational grids](./requests/data-tables.md)
- [Commerce flows](./requests/commerce-flows.md)
- [Content surfaces](./requests/content-surfaces.md)
- [Cards / listings / media blocks](./requests/cards-listings.md)
- [404 / not-found / broken-link recovery](./requests/404-recovery.md)
- [401 / 403 / 429 / 500 / 503 / error-page recovery](./requests/error-page-recovery.md)
