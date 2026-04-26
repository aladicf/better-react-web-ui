# Data Visualization

Use this reference when the UI needs to present data visually through charts, graphs, or plots. This covers chart type selection, responsive patterns, accessible alternatives, color strategies, and interaction design for data-heavy interfaces.

If the project already uses a mature charting library, keep its baseline rendering, animation, and accessibility behavior first. Use this reference mainly to decide which chart type fits the data story, how to make the visualization accessible, and how to handle responsive and interactive behaviors around the chart.

## Choose the Right Chart Type

The chart type should serve the data relationship, not decorate the page.

### Comparisons (category vs value)

**Bar charts** are the safest default for comparing values across categories.

- Use vertical bars for fewer than ~12 categories with readable labels
- Use horizontal bars when category names are long or there are many categories
- Start the value axis at zero to avoid distorting proportions
- Group related bars when comparing subcategories; stack them only when the total matters

**Avoid** bar charts when the story is about trends over time or part-to-whole relationships.

### Trends over time

**Line charts** show change and continuity across a continuous axis.

- Use for time-series data where the sequence matters
- Limit to roughly 5 lines before the chart becomes unreadable
- Directly label lines at the end when possible instead of relying solely on a legend
- Use meaningful intervals on the time axis; do not force daily granularity on yearly data

**Area charts** are line charts with the area below filled. Use them when the magnitude under the line is as important as the trend itself. Stack area charts only when the sum is meaningful.

### Part-to-whole relationships

**Pie charts** are rarely the best choice. Human eyes judge angle and area poorly.

- Use only when there are very few categories (ideally 2-4) and one slice clearly dominates
- Prefer **donut charts** over pie charts; the hole makes labels easier to place and comparisons slightly easier
- Always label slices directly with values and percentages
- Never use 3D pie charts; they distort proportions

**Better alternatives to pie charts**:
- **Stacked bar charts** when comparing part-to-whole across multiple groups
- **Treemaps** when there are many categories and relative size matters
- **Waffle charts** for simple percentage breakdowns that need to feel intuitive

### Distributions and ranges

**Histograms** show frequency distributions. Use when the shape of the data (clustering, spread, skew) matters.

**Box plots** summarize distributions with median, quartiles, and outliers. Use when comparing distributions across groups, not individual values.

**Scatter plots** show relationships between two variables. Use when correlation, clustering, or outliers are the story.

- Add trend lines only when a real correlation exists
- Label interesting outliers directly
- Handle overplotting with transparency or jitter when many points overlap

### Hierarchical data

**Treemaps** show nested part-to-whole relationships. Use when there are many categories at multiple levels and relative size is the primary signal.

**Sunburst charts** are radial treemaps. Use sparingly; they are harder to read than rectangular treemaps but can work for shallow hierarchies with clear ancestry paths.

## Responsive Chart Patterns

Charts must remain legible across viewport sizes without becoming noise.

### Breakpoint strategy

- **Wide layouts** (> 768px): Full chart with all labels, legends, and annotations visible
- **Medium layouts** (480-768px): Simplify legends, rotate or truncate labels, reduce tick density
- **Narrow layouts** (< 480px): Consider switching chart types (horizontal bars instead of vertical), showing summary statistics instead of the full chart, or using a scrollable container

### Label handling

- Rotate long x-axis labels 45 degrees before truncating
- Truncate with ellipsis and provide full text on hover or in a companion table
- Move legends inline or directly label data series to save space
- Remove gridlines on narrow viewports before removing data

### Interaction as a responsive tool

On small screens, interaction can compensate for reduced visible detail:

- Pinch-to-zoom for time-series charts
- Panning for wide datasets
- Use explicit activation to reveal exact values instead of showing all labels
- Summary view by default with "explore" expansion to full detail

## Accessible Data Presentation

Charts exclude many users unless thoughtful alternatives are provided.

### Data tables as primary alternatives

Every chart should have an accessible data table fallback. Screen readers and search engines need the underlying data.

- Place the table near the chart, not hidden behind a tab
- Use proper table markup: `<caption>`, `<th>` with `scope`, and summary rows
- Make the table sortable when it helps users explore the data

### Screen reader strategies

- Provide a text summary of the chart's main insight before the visualization
- Use `aria-label` or `aria-describedby` to link the chart to its summary
- For interactive charts, ensure keyboard navigation between data points with audible value announcements
- Do not rely on color alone to distinguish series; use pattern, texture, or direct labeling

### Color-vision-friendly palettes

- Avoid red-green combinations; they are indistinguishable for deuteranopia and protanopia
- Use pattern, hatching, or shape differences in addition to color
- Test palettes with a color-vision simulator (Coblis, Chrome DevTools Rendering tab, or Stark)
- Prefer palettes with luminance variation, not just hue variation

Good sequential palettes use brightness to show magnitude. Good categorical palettes maximize distance in both hue and luminance.

### Motion and animation

- Respect `prefers-reduced-motion` for animated chart transitions
- Do not auto-play animated charts; start static and allow users to trigger animation
- Ensure that animated data updates do not disorient screen reader users

## Color Strategy for Data

Color in data visualization carries meaning. Use it intentionally.

### Sequential scales (magnitude)

Use a single hue that varies in lightness or saturation. Darker or more saturated means more.

- Best for: population density, sales volume, temperature
- Avoid: using more than one hue for a sequential scale; it implies categorical meaning

### Diverging scales (deviation from center)

Use two hues with a neutral midpoint. One hue for positive, another for negative, with white or gray at the center.

- Best for: variance from a target, temperature relative to freezing, profit/loss
- Avoid: red-green diverging scales; use blue-orange or purple-yellow instead

### Categorical scales (distinct groups)

Use maximally distinct hues with consistent luminance.

- Best for: comparing regions, product lines, departments
- Avoid: more than ~8 colors; group smaller categories into "other" instead

### Direct labeling over legends

When space allows, label data series directly on the chart instead of using a separate legend. This reduces eye travel and eliminates the color-matching step.

## Tooltips and Annotations

### Tooltips

Tooltips should add precision, not repeat what is already visible.

- Show exact values, not rounded approximations
- Include units and context ("$1,234 in Q3 2024" not just "1,234")
- Keep tooltips near the cursor or focused point; do not let them overflow the viewport
- Use a subtle delay (~100ms) to avoid flickering on rapid mouse movement
- Ensure tooltips are keyboard-accessible: focus on a data point should reveal its tooltip

### Annotations

Annotations call attention to specific data points or events.

- Use sparingly; too many annotations become wallpaper
- Label the insight, not the data point ("Launch day spike" not "Value: 847")
- Connect annotations to their targets with thin, unobtrusive lines
- Ensure annotations remain readable at all viewport sizes

## Interaction Patterns

### Filtering and highlighting

- Activate a legend item to toggle series visibility
- Hover or focus to highlight a single series and dim others
- Brush or drag to select a time range for zooming
- Always provide a "reset view" option after filtering or zooming

### Drill-down

- Click a data point to reveal more detail in a panel, modal, or adjacent view
- Preserve breadcrumb context so users know where they are in the hierarchy
- Provide a clear path back to the parent view

### Real-time data

- Update charts without full re-renders when possible; animate only the changed elements
- Show a "last updated" timestamp so users know the data is live
- For rapidly updating data, consider throttling updates to avoid visual noise

## Anti-Patterns

- **Chart junk**: Decorative 3D, gradients, shadows, and unnecessary gridlines obscure data
- **Dual y-axes**: They invite misleading comparisons. Use side-by-side charts or normalized indices instead
- **Truncated y-axes starting above zero**: This exaggerates differences and is visually deceptive
- **Too many data series**: Charts with 10+ lines or colors become unreadable. Group, filter, or split into multiple charts
- **Pie charts with many slices**: Human perception of angle is poor; use bar charts instead
- **Missing data without explanation**: Gaps in lines or bars should be visually distinct from zero values
- **Color without pattern backup**: Colorblind users cannot distinguish purely color-coded series
- **Animated charts without static fallback**: Auto-playing animations frustrate users who need stable reference points
- **Tooltips as the only data source**: Users in coarse-pointer contexts or with motor impairments may struggle to trigger them
- **Charts without context**: A number without comparison, baseline, or unit is meaningless. Always frame data with context

## Verify Data Visualization Quality

Before shipping a chart:

- [ ] The chart type matches the data relationship being shown
- [ ] The y-axis starts at zero for bar charts
- [ ] Colors are distinguishable under color-vision deficiencies
- [ ] An accessible data table is available as a fallback
- [ ] Text summary of the main insight is provided for screen readers
- [ ] The chart is legible at narrow viewport widths
- [ ] Interactive features work with keyboard, coarse pointers, and precise pointers
- [ ] Tooltips add precision, not just repetition
- [ ] Annotations are meaningful and sparse
- [ ] The chart answers a specific user question, not just displaying data for decoration
