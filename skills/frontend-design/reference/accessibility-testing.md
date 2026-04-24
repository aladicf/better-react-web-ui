# Accessibility Testing

Automated accessibility testing catches issues early, before they reach users. Use it as a fast warning system, not as a replacement for judgment or manual testing.

## When to use automated checks

- **During development**: run checks in the editor or browser as you build
- **In CI/CD**: block merges that introduce new accessibility regressions
- **Before releases**: scan full pages and flows for issues that slipped through
- **After refactors**: verify that component or layout changes did not break accessibility

## Core automated tools

### axe-core and axe DevTools

**axe-core** is the most widely adopted accessibility testing engine. It powers Lighthouse, Microsoft's accessibility insights, and many CI integrations.

**What it checks well**:
- color contrast ratios
- missing ARIA labels and roles
- incorrect ARIA usage
- keyboard focus issues
- heading hierarchy problems
- form label associations
- touch target sizing

**What it cannot catch**:
- whether alt text is meaningful (only that it exists)
- whether focus order follows visual layout
- whether custom components behave correctly with screen readers
- whether motion is respectful of reduced-motion preferences
- colorblindness-safe design choices

**Running axe**:

```bash
# Browser extension (fastest for single pages)
# Install axe DevTools Extension for Chrome or Firefox

# CLI for CI/CD
npm install @axe-core/cli
npx axe https://your-site.com --tags wcag2a,wcag2aa,wcag21aa

# React testing
npm install @axe-core/react
# Wrap component renders with axe during development
```

**Configuration tips**:
- target WCAG 2.1 AA as the baseline (`wcag21aa`)
- enable `best-practice` rules for stricter checks
- disable rules only when you have a genuine reason, not to silence noise
- set `reporter: 'v2'` for cleaner CI output

### WAVE

**WAVE** (Web Accessibility Evaluation Tools) is good for visual, side-by-side inspection.

**Best for**:
- designers and product managers who want to see issues on the actual page
- quick spot checks without installing dependencies
- understanding *where* on the page problems occur

**Use it when**:
- you need a second opinion after axe
- stakeholders want a visual report
- you are evaluating competitor pages or reference sites

**Limitations**:
- fewer rules than axe
- no CI integration
- results require human interpretation

### Pa11y

**Pa11y** is a command-line runner that can scan multiple URLs and output reports in various formats.

**Best for**:
- batch scanning entire site sections
- scheduled monitoring (daily or weekly regression checks)
- generating HTML or CSV reports for audits

**Running Pa11y**:

```bash
npm install pa11y
npx pa11y https://your-site.com --standard WCAG2AA

# Batch scan with pa11y-ci
npm install pa11y-ci
npx pa11y-ci --sitemap https://your-site.com/sitemap.xml
```

**Configuration tips**:
- use `WCAG2AA` standard for most projects
- set `--timeout 60000` for pages with heavy JavaScript
- add `--wait 2000` when animations or lazy loading affect content
- ignore known false positives in `.pa11yci` config instead of disabling rules globally

## What automated testing should never replace

Automated tools catch roughly 20-30% of accessibility issues. The rest require human judgment.

**Always test manually**:
- **Keyboard navigation**: tab through every interactive element. Can you reach everything? Is the order logical?
- **Screen reader flow**: use NVDA, JAWS, or VoiceOver. Do headings make sense? Are dynamic changes announced?
- **Colorblindness simulation**: use browser devtools or Coblis to verify that color-only meaning collapses
- **Reduced motion**: enable `prefers-reduced-motion` and confirm the interface remains usable
- **Zoom and reflow**: test at 200% and 400% zoom. Does content remain reachable without horizontal scrolling?
- **Touch targets**: verify on actual devices that tap targets are large enough and not overlapping

## Integrating into workflow

### Developer workflow

1. Build the feature
2. Run axe DevTools in browser before committing
3. Fix contrast, label, and focus issues immediately
4. Write or update relevant unit tests with `@axe-core/react` or `@testing-library/jest-dom` accessibility matchers

### CI/CD workflow

1. Build the app
2. Run `pa11y-ci` or `@axe-core/cli` against critical pages
3. Fail the build on new WCAG AA violations
4. Upload HTML report as artifact for review

**Example GitHub Actions step**:

```yaml
- name: Accessibility audit
  run: |
    npx pa11y-ci --sitemap http://localhost:3000/sitemap.xml
  continue-on-error: false
```

### Pre-release workflow

1. Run automated scan across all major page types
2. Perform manual keyboard and screen-reader pass
3. Check colorblindness simulation for charts, status indicators, and semantic color
4. Verify responsive behavior at 200% zoom
5. Document any known issues and remediation timeline

## Practical checklist

- [ ] axe or equivalent runs without WCAG AA violations on critical pages
- [ ] All interactive elements are reachable by keyboard
- [ ] Focus indicators are visible and follow a logical order
- [ ] Color is not the only signal for state or meaning
- [ ] Images have alt text (and decorative images are marked as such)
- [ ] Form inputs have associated labels
- [ ] Touch targets are at least 44 by 44 pixels
- [ ] Interface remains usable at 200% zoom
- [ ] Motion respects `prefers-reduced-motion`
- [ ] Screen readers announce dynamic content changes

## Tool selection quick guide

| Need | Tool |
|------|------|
| Fast single-page check during development | axe DevTools Extension |
| CI/CD gate with detailed rule coverage | axe-core CLI |
| Visual report for stakeholders | WAVE |
| Batch scan of many URLs | Pa11y / pa11y-ci |
| React component testing | @axe-core/react |
| Scheduled monitoring | Pa11y with cron or GitHub Actions |

Remember: automated testing finds code-level problems. It does not find design-level problems. Run the tools, then use your judgment.
