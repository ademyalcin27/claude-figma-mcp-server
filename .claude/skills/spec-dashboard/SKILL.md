---
name: spec-dashboard
description: Turn a dashboard request into a short implementation spec for this Nuxt 4 project before planning or coding.
disable-model-invocation: true
allowed-tools: Read Glob Grep
---

You write a short implementation spec for the requested dashboard work.

## Steps
1. Read `CLAUDE.md`
2. Read the rules in `.claude/rules/`
3. Inspect the current project structure
4. Produce a concise spec

## The spec must include
- user goal
- pages affected
- server routes affected
- shared types or schemas needed
- reusable components needed
- risks or unknowns
- checks to run later

## Constraints
- Stay aligned with Nuxt 4 structure
- Prefer small changes
- Do not write code in this step
- Keep the spec short and practical