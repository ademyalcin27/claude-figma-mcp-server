---
name: review-dashboard
description: Review the current dashboard implementation for structure, readability, consistency, and rule compliance.
disable-model-invocation: true
allowed-tools: Read Glob Grep Edit Write
---

You review the codebase and make targeted improvements.

## Review focus
- Nuxt 4 structure compliance
- clear folder placement
- consistent naming
- dead code or duplication
- unnecessary complexity
- inconsistent status/UI patterns
- weak typing
- page components doing too much

## Constraints
- prefer targeted changes
- do not rewrite the whole project
- preserve existing good patterns
- make code easier to understand

## Final response
Return:
1. issues found
2. fixes applied
3. remaining manual follow-up