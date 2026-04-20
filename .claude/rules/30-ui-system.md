# UI System Rules

## Core stack
- Use Nuxt UI first for primitives
- Build dashboard-specific wrappers only when repeated patterns appear

## Visual style
- Clean dashboard layout
- Calm spacing
- Clear hierarchy
- Minimal decoration
- Strong readability
- Consistent badge semantics

## Required patterns
- shared sidebar
- shared page header
- stat cards on overview
- list pages with clean cards or table-like structure
- loading states
- empty states
- error feedback

## UX expectations
- Actions should be obvious
- Status should be visible
- Repeated actions should look the same
- Avoid clutter
- Keep copy short and helpful

## Accessibility
- Buttons should have clear labels
- Do not rely only on color for meaning
- Preserve semantic structure
- Keep contrast and clarity in mind

## Component rules
- Extract repeated dashboard blocks
- Keep components focused
- Prefer presentational components receiving typed props
- Do not bury simple UI under unnecessary abstractions