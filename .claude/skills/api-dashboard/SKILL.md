---
name: api-dashboard
description: Create or refine mock and real API routes for the dashboard using Nuxt server conventions and predictable response shapes.
disable-model-invocation: true
allowed-tools: Read Glob Grep Edit Write Bash(npm run lint) Bash(npm run typecheck)
---

You implement server-side route work.

## Rules
- Follow `CLAUDE.md`
- Follow `.claude/rules/20-api-standards.md`
- Keep handlers under `server/api/`
- Reuse shared types and schemas when useful
- Keep server logic separate from page rendering

## Deliverables
- new route files or updates to existing routes
- shared types or schemas when clearly useful
- predictable JSON output
- concise summary of routes added or updated

## Constraints
- Start with mock data unless explicitly asked for real integration
- Do not overbuild data access layers