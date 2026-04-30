# Theme & Tokens Rules (`src/theme/`, `src/tokens/`)

Regras para definição de identidade visual e temas.

## 1. Design Tokens (`src/tokens/`)

- Os tokens são a "única fonte de verdade" para valores visuais.
- **Categorias:** `colors`, `spacing`, `typography`, `radius`, `shadows`, `z-index`.
- Novos tokens devem ser discutidos com o time de design antes da implementação.

## 2. Temas (`src/theme/`)

- Suporte nativo para Light e Dark mode.
- Use o provedor de tema para acessar tokens de forma dinâmica.
- Evite acessar tokens diretamente se eles variarem conforme o tema (use variáveis de tema).
- Documente mudanças no tema seguindo `docs/codestyle/docs-and-comments.md`.

## 3. Nomenclatura de Cores

- Use nomes semânticos (ex: `brand-primary`, `surface-background`) em vez de nomes literais (ex: `blue-500`).
