# Project Core Rules

## Scope
These rules apply to the entire repository.

## Mandatory principles
- Prefer readability first.
- Prefer small reusable units.
- Prefer direct naming.
- Prefer composition over inheritance.
- Prefer boring code over clever code.

## Always do
- Check existing structure before adding files.
- Reuse existing patterns before inventing new ones.
- Keep user-facing UI consistent.
- Keep code generation deterministic and easy to follow.
- Explain changes briefly after implementation.

## Avoid
- giant files
- giant components
- unnecessary abstraction
- hidden magic
- duplicate business logic
- inconsistent naming
- unused code
- speculative architecture

## Architecture stance
- App UI belongs in `app/`
- API and server handlers belong in `server/`
- Shared types, constants, and schemas belong in `shared/`
- Domain logic should be extracted from pages when it grows

## Quality bar
If a choice is ambiguous:
1. choose the simpler option
2. choose the more readable option
3. choose the option more aligned with Nuxt 4 conventions