# Nuxt 4 Structure Rules

## Directory rules
- Put routed pages in `app/pages/`
- Put layouts in `app/layouts/`
- Put components in `app/components/`
- Put composables in `app/composables/`
- Put static processed assets in `app/assets/`
- Put server routes in `server/api/`
- Put server-only utilities in `server/utils/`
- Put shared non-framework code in `shared/`

## Do not
- create root `pages/` for this project
- mix client and server concerns
- import Vue-specific code into `shared/`
- import server-only aliases into client code

## File naming
- Components: PascalCase
- Composables: useXxx
- Utility files: kebab-case or domain-specific clear naming
- API route files: descriptive and route-oriented

## Page rules
Each page should:
- use the shared dashboard layout
- define a page header
- keep rendering logic readable
- delegate repeated UI into components

## Shared rules
Use `shared/` for:
- shared types
- shared constants
- shared schemas
- pure helpers safe for both app and server