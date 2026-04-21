# CLAUDE.md

## Project
This repository builds a Nuxt 4 dashboard application.

## Main objective
Create a clean, readable, maintainable dashboard using:
- Nuxt 4
- Nuxt UI
- TypeScript
- Mock API routes first
- Reusable UI patterns
- Clear folder structure

## Non-negotiable rules
- Follow Nuxt 4 structure.
- Use `app/` for application code.
- Use `server/` for API and server logic.
- Use `shared/` for code shared by app and server.
- Prefer simple composition over clever abstractions.
- Keep files readable.
- Keep components focused.
- Avoid duplication.
- Do not introduce unnecessary dependencies.
- Do not use `any` unless there is no practical alternative.
- Always preserve a polished dashboard user experience.

## Expected first version
Build these pages:
- Overview
- MCP Servers
- Skills
- Workflows
- Logs

## UI expectations
- Left sidebar
- Top page header
- Card-based overview
- Table-like list pages
- Clear badges for status
- Clean spacing
- Good empty/loading/error states

## Engineering expectations
- Respect SOLID, DRY, and KISS in practical ways.
- Prefer clarity over patterns.
- Keep naming obvious.
- Use shared types and schemas where appropriate.
- Validate API input when needed.
- Keep business logic out of page components.

## Git workflow rules
- NEVER commit directly to the `main` branch.
- ALWAYS create a new branch before making changes.
- ALWAYS commit on the new branch.
- ALWAYS open a Pull Request after committing.
- DO NOT push directly to protected branches.
- Use descriptive branch names like `feature/...`, `fix/...`, or `chore/...`.

## Working style
Before major implementation:
1. Read the relevant rules.
2. Make a short plan.
3. Implement in small clear steps.
4. Run checks.
5. Summarize what changed.

## Required checks after meaningful code changes
- lint
- typecheck
- test if available
- build if the change is large enough

## Important
- Use the skills in `.claude/skills/` when they match the task.
- Use hooks and rules as enforcement layers, not as documentation substitutes.
- Use docs for human-readable context and examples.