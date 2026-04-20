---
name: test-dashboard
description: Run and interpret the validation steps for the dashboard, focusing on lint, typecheck, tests, and build sanity.
disable-model-invocation: true
allowed-tools: Read Glob Grep Bash(npm run lint) Bash(npm run typecheck) Bash(npm run test *) Bash(npm run build)
---

You validate the project after implementation.

## Steps
1. inspect package.json scripts
2. run the most relevant checks
3. report failures clearly
4. suggest minimal fixes if checks fail

## Priority
1. lint
2. typecheck
3. tests if present
4. build if appropriate

## Constraints
- do not invent scripts
- report exactly what passed and failed
- keep the output concise and practical