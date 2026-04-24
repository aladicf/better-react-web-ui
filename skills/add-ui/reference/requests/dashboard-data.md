### Dashboard / charts / widgets / data tables

Prioritize:

- information hierarchy
- density control
- state handling
- labeling clarity

Also:

- design the dashboard as a decision assistant, not just a monitoring wall
- make the most urgent or consequential KPIs visually lead instead of giving every widget equal weight
- use deltas, meaningful trend sparklines, and short recent-history cues to explain change at a glance
- keep update motion subtle and orientation-preserving rather than flashy
- provide freshness, paused, stale, offline, or reconnecting states when timing or reliability matters
- allow filtering, snapshot, or pause controls when the stream can outpace human comprehension
- personalize prominence, alerting, or defaults by role when the same dashboard serves different decision-makers

Pair this with [complex-table-ux](../../frontend-design/reference/complex-table-ux.md) when the dashboard includes dense operational tables, editable grids, pinned columns, header filters, or row-command toolbars rather than lightweight summary widgets alone.
Pair this with [loading-feedback-and-perceived-performance](../../frontend-design/reference/loading-feedback-and-perceived-performance.md) when the surface depends on freshness, stale-data cues, streaming updates, or honest feedback during live refresh and slow data work.
Pair this with [predictive-and-intent-ui](../../frontend-design/reference/predictive-and-intent-ui.md) when the surface depends on suggested next actions, role-aware prioritization, or resume/recommendation patterns layered on top of a clear dashboard structure.
