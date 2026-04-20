# Figma Design System Rules

## When to use
Use these rules whenever a Figma URL, Figma file, design system kit, component library, or UI spec is provided.

## Primary behavior
- Prefer reading the design through an MCP server if one is connected.
- Treat the Figma design as the source of truth for visual decisions.
- Preserve product requirements from `CLAUDE.md` and other project rules.
- Translate design decisions into Nuxt 4 + Nuxt UI implementation patterns.

## What to extract from Figma
Before coding, identify:
- layout structure
- page hierarchy
- navigation pattern
- spacing scale
- typography scale
- color tokens
- status colors
- card patterns
- table/list patterns
- form patterns
- button hierarchy
- empty/loading/error states
- repeated reusable components

## Implementation rules
- Do not copy raw pixel values blindly if they conflict with the existing system.
- Map Figma patterns into reusable components.
- Prefer design tokens and repeated UI primitives.
- Keep the implementation readable and maintainable.
- Keep Nuxt UI as the first choice for base primitives.
- If the design system includes variants, document and preserve them.

## Required output before coding
Summarize:
- key design tokens
- reusable components to create
- pages affected
- what can reuse Nuxt UI directly
- what needs custom wrappers

## If MCP access is missing
If no Figma MCP server is available:
- say clearly that direct Figma access is unavailable
- ask for exported specs, screenshots, or tokens only if needed
- do not pretend to have inspected the design