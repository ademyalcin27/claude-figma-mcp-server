# API Standards Rules

## API style
- Start with mock routes in `server/api/`
- Keep response shapes predictable
- Keep route names explicit
- Return JSON-friendly data only
- Prefer stable field names

## Validation
- Validate incoming request data when the route accepts input
- Prefer schemas in `shared/schemas/`
- Reject malformed input clearly

## Response structure
Prefer this shape when useful:
- `data`
- `meta`
- `error`

For simple mock GET routes, returning arrays or objects directly is acceptable in early iterations.

## Errors
- Do not leak internal implementation detail
- Use clear, short error messages
- Keep status handling predictable

## Separation of concerns
- Page components should not contain API business logic
- Server handlers should not contain UI formatting
- Shared transformation logic should live in shared utilities when reused

## Naming
- use plural nouns for collections when appropriate
- keep route file names obvious
- avoid deeply nested route files unless needed