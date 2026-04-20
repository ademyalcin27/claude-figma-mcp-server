# Figma Workflow

## Purpose
This project can apply a Figma design system through Claude Code when a Figma-capable MCP server is connected.

## Recommended flow
1. Connect the Figma MCP server in `.mcp.json`
2. Start Claude Code in the repo
3. Verify MCP access with `/mcp`
4. Invoke:
   `/apply-figma-design-system https://www.figma.com/design/Hg9PD6k0sH7orw7QU7imid/Nuxt-UI-v4-%E2%80%A2-Official-Design-Kit-%E2%80%A2-Free--Community-?node-id=0-1&p=f&t=DdPkZXx8NC8XCv96-0`
5. Review the implementation summary
6. Run validation:
   - lint
   - typecheck
   - build

## Notes
- The Figma design should be treated as the visual source of truth.
- Implementation should still follow Nuxt 4 structure and project code-quality rules.
- If direct Figma access is unavailable, exported tokens or screenshots may be needed.