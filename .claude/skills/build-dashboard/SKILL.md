---
name: build-dashboard
description: Build or extend the Nuxt 4 dashboard in this repository using the project rules, shared structure, and mock API-first approach.
disable-model-invocation: true
allowed-tools: Read Write Edit Bash Glob Grep
---

You implement the dashboard.

## Required reading
- `CLAUDE.md`
- all files under `.claude/rules/`

## Build order
1. inspect repository
2. align with Nuxt 4 structure
3. create or refine shared layout
4. add or update reusable UI components
5. add or update mock API routes
6. connect pages to data
7. clean obvious duplication
8. summarize results

## Mandatory standards
- use `app/` not root `pages/`
- keep files readable
- prefer typed props and shared types
- keep templates simple
- keep business logic out of pages when it grows
- preserve a polished dashboard UX

## Final response
Return:
1. files created
2. files updated
3. commands to run
4. known follow-up items