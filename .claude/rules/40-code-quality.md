# Code Quality Rules

## Practical SOLID
- Single Responsibility: each file and function should have one clear reason to change
- Open/Closed: extend via composition and small utilities
- Liskov: keep interfaces predictable
- Interface Segregation: do not force broad props or broad return types
- Dependency Inversion: depend on clear interfaces and abstractions only when needed

## Practical DRY
- Extract repeated logic after the second clear repetition
- Do not over-abstract early

## Practical KISS
- The simplest readable implementation wins
- Prefer straightforward control flow
- Prefer explicit over magical

## TypeScript rules
- Prefer explicit interfaces and types for domain objects
- Avoid `any`
- Prefer narrow unions for statuses
- Use shared types for app and server when reused

## Vue rules
- Keep templates easy to scan
- Keep computed values named clearly
- Avoid overly nested markup
- Avoid complex inline logic in templates

## File size guidance
- If a file becomes hard to scan, split it
- If a component does too much, split it
- If a composable has multiple responsibilities, split it

## Comments
- Write comments only when intent is not obvious
- Do not comment the obvious