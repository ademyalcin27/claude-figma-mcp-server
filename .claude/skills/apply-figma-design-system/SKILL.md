---
name: apply-figma-design-system
description: Inspect a provided Figma design system or UI file through MCP and translate it into reusable Nuxt 4 dashboard implementation decisions.
disable-model-invocation: true
allowed-tools: Read Glob Grep Edit Write Bash ListMcpResourcesTool ReadMcpResourceTool
---

You apply a Figma design system to this project.

## When invoked
The user will usually provide:
- a Figma URL
- a Figma file key
- a page/frame name
- or a request to align the dashboard with a Figma design system kit

## Required reading
- `CLAUDE.md`
- all files under `.claude/rules/`
- especially `.claude/rules/35-figma-design-system.md`

## Process
1. Inspect the current Nuxt 4 project structure.
2. Inspect available MCP servers and confirm whether a Figma-capable MCP server is connected.
3. Read the Figma design data through MCP if available.
4. Extract the design system:
   - spacing
   - colors
   - typography
   - components
   - states
   - layout patterns
5. Map those findings to:
   - Nuxt UI primitives
   - shared dashboard components
   - shared layout patterns
   - reusable tokens or constants if needed
6. Before making code changes, produce a short implementation summary.
7. Then implement the necessary project changes in small readable steps.
8. Summarize:
   - files created
   - files updated
   - design decisions applied
   - anything that could not be read from Figma

## Constraints
- Do not invent Figma details you cannot access.
- If Figma MCP access is missing, state that clearly.
- Preserve Nuxt 4 structure.
- Prefer reusable components over one-off page markup.
- Keep the output consistent with project rules.

## Arguments
Treat `$ARGUMENTS` as the Figma URL or the user’s Figma-related instruction.