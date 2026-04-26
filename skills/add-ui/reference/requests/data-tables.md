### Data tables / operational grids

Prioritize:

- clear table type and task fit
- dense but readable scanability
- explicit row/cell/header states
- command logic that matches real operational work

Also:

- distinguish read-only, search, and editable tables early because they need different interactions
- define cells, rows, headers, columns, filters, toolbars, and validation states systematically before polishing the whole table
- use rational default widths, pinned key columns, and manual resizing when dense datasets demand them
- keep command availability, row selection, and bulk action rules explicit instead of relying on hidden logic
- be honest about wide-viewport usage when the grid is truly large; convert only smaller tables to cards in narrow viewports instead of shrinking giant spreadsheets into confusion

Pair this with [complex-table-ux](../../frontend-design/reference/complex-table-ux.md) when the request involves dense enterprise tables, search grids, editable tables, pinned columns, row selection, or command-heavy operational data work.
Pair this with [feature-comparison-ux](../../frontend-design/reference/feature-comparison-ux.md) only when the table is specifically a side-by-side considered-purchase comparison rather than an operational grid.
