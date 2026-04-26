---
name: data-viz
description: Design or improve data visualizations, charts, and data presentation interfaces. Use when the user asks to add charts, build dashboards, visualize data, choose chart types, make data accessible, or present metrics and analytics.
metadata:
  argument-hint: "[chart, dashboard, or data surface]"
---

Create data visualizations that clarify rather than decorate. The goal is not to make data look impressive; it is to help users understand patterns, compare values, and make decisions.

Consult the [data visualization](../frontend-design/reference/data-visualization.md) reference for chart type selection, responsive patterns, accessible data tables, color-vision-friendly palettes, and interaction design.
Consult the [colorblindness UX](../frontend-design/reference/colorblindness-ux.md) reference when semantic states, chart palettes, or category colors must remain distinguishable under color-vision deficiencies.
Consult the [complex table UX](../frontend-design/reference/complex-table-ux.md) reference when a data table is a better or complementary presentation to a chart.

## MANDATORY PREPARATION

Users start this workflow with `/data-viz`. Once this skill is active, load $frontend-design — it contains design principles, anti-patterns, and the **Context Gathering Protocol**. Follow that protocol before proceeding — if no design context exists yet, you MUST load $setup first. Additionally gather: what question the user is trying to answer with the data, who the audience is, and whether the data updates in real time or is static.

## Assess Visualization Needs

Understand the data story before choosing a chart:

1. **What is the user trying to understand?**
   - Comparisons across categories (bar chart)
   - Trends over time (line chart)
   - Part-to-whole relationships (stacked bar or treemap, rarely pie)
   - Distributions or ranges (histogram, box plot, scatter plot)
   - Hierarchical structures (treemap, sunburst)

2. **What is the data shape?**
   - Number of data points (a few values vs. thousands)
   - Number of series or categories (single series vs. multi-series)
   - Time granularity (daily, monthly, yearly)
   - Whether the data is continuous or categorical

3. **What is the context?**
   - Dashboard (at-a-glance summaries) vs. exploratory analysis (deep interaction)
- Expected viewport range, density needs, and primary input modes
   - Real-time updates vs. static reports
   - Accessibility requirements (screen readers, color-vision deficiencies)

## Visualization Dimensions

### Chart Selection

Match the chart to the data relationship, not the aesthetic preference.

**Bar charts** for comparing values across categories. Use horizontal bars when category names are long. Start the value axis at zero.

**Line charts** for trends over time. Limit to ~5 lines. Label lines directly at the end when possible.

**Scatter plots** for relationships between two variables. Add trend lines only when correlation is real. Label interesting outliers.

**Histograms** for frequency distributions. Use when the shape of the data (clustering, spread, skew) matters.

**Treemaps** for hierarchical part-to-whole relationships with many categories.

**Avoid pie charts** except when there are very few categories and one slice clearly dominates. Even then, prefer donut charts or stacked bars.

### Accessible Data Presentation

Every chart must have an accessible alternative.

- Provide a text summary of the main insight before the visualization
- Include a properly marked-up data table as a fallback (`<caption>`, `<th scope="...">`)
- Associate the chart with its summary using `aria-describedby`
- Ensure keyboard navigation between data points with audible value announcements
- Do not rely on color alone; use pattern, texture, or direct labeling

### Color Strategy

Use color intentionally in data visualization.

- **Sequential scales**: Single hue varying in lightness for magnitude (density, volume)
- **Diverging scales**: Two hues with a neutral midpoint for deviation from center (variance, profit/loss)
- **Categorical scales**: Maximally distinct hues with consistent luminance for distinct groups
- Avoid red-green combinations; use blue-orange or purple-yellow instead
- Test palettes with color-vision simulators

### Responsive Behavior

Charts must remain legible across viewport sizes.

- Simplify legends and rotate labels on medium layouts
- Consider switching chart types on narrow layouts (horizontal bars instead of vertical)
- Use interaction to compensate: zoom controls, explicit value reveal, summary views by default
- Test truncation and wrapping behavior at minimum widths

### Interaction Design

- Activate legend items to toggle series visibility
- Hover or focus to highlight a series and dim others
- Brush or drag to select time ranges for zooming
- Click a data point to reveal detail in a panel or adjacent view
- Provide a "reset view" option after filtering or zooming
- Update real-time charts without full re-renders; animate only changed elements

## Dashboard Design

Dashboards combine multiple visualizations into an at-a-glance surface.

**Layout principles**:
- Most important metrics at the top left (for left-to-right readers)
- Group related charts visually with proximity and consistent sizing
- Use consistent color coding across all charts for the same categories
- Leave breathing room; dense dashboards overwhelm rather than inform

**Interactivity**:
- Global filters (date range, category) should update all charts simultaneously
- Clicking a chart element should update detail panels or related charts
- Avoid auto-refreshing dashboards without clear indication; show "last updated" timestamp

## Anti-Patterns

- **Chart junk**: Decorative 3D, gradients, shadows, and unnecessary gridlines obscure data
- **Dual y-axes**: They invite misleading comparisons. Use side-by-side charts instead
- **Truncated y-axes**: Starting above zero exaggerates differences and is visually deceptive
- **Too many data series**: Charts with 10+ lines become unreadable. Group, filter, or split
- **Pie charts with many slices**: Human perception of angle is poor
- **Missing data without explanation**: Gaps should be visually distinct from zero values
- **Color without pattern backup**: Colorblind users cannot distinguish purely color-coded series
- **Animated charts without static fallback**: Auto-playing animations frustrate users who need stable reference points
- **Tooltips as the only data source**: Coarse-pointer and motor-impaired users may struggle to trigger them
- **Charts without context**: A number without comparison, baseline, or unit is meaningless

## Verify Visualization Quality

Before shipping:

- [ ] The chart type matches the data relationship being shown
- [ ] The y-axis starts at zero for bar charts
- [ ] Colors are distinguishable under color-vision deficiencies
- [ ] An accessible data table is available as a fallback
- [ ] A text summary of the main insight is provided
- [ ] The chart is legible at narrow viewport widths
- [ ] Interactive features work with keyboard, coarse pointers, and precise pointers
- [ ] Tooltips add precision, not just repetition
- [ ] Real-time updates do not disorient users
- [ ] The visualization answers a specific user question
