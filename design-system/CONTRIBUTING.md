# Contributing Guidelines

Thank you for your interest in contributing to the Charleston Design System.

This document defines the rules, conventions, and expectations for maintaining code quality and consistency across the project.

---

## Scope

This repository is a **private design system**. Contributions are limited to approved collaborators.

---

## Development Principles

- React Native only
- Token-first design
- Theme-driven behavior
- Accessibility by default
- No application-specific logic
- Predictable APIs

---

## Code Standards

- TypeScript is mandatory
- Functional components only
- No inline hardcoded colors, spacing, or sizes
- Always consume values from tokens or theme
- Prefer composition over configuration
- Avoid breaking public APIs

---

## Component Rules

Every component must:

- Support theming
- Accept style overrides
- Use semantic props
- Avoid platform-specific hacks unless justified
- Be documented in code comments

Compound components must follow:

```tsx
Component.Subcomponent;
```

Example:

```tsx
<Button.Group />
<Checkbox.Group />
<Toolbar.Actions />
```

---

## Folder Conventions

- kebab-case for folders
- kebab-case for files
- Explicit index.ts exports
- One component per folder

---

## Commits

Follow Conventional Commits:

```txt
feat: add radio group component
fix: correct theme token resolution
refactor: extract typography tokens
```

---

## Pull Requests

Pull requests must:

- Have a clear description
- Reference the problem being solved
- Avoid unrelated changes
- Pass type checking and build

---

## Version Updates

Do not manually change versions.
Versioning is handled during release.

---

## Questions

For questions or architectural discussions, contact the maintainers directly.
