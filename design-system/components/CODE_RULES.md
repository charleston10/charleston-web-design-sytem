# Components Rules (`src/components/`)

Regras para criação e manutenção de componentes de UI.

## 1. Estrutura de Pasta de Componente

Cada componente deve estar em sua própria pasta com a seguinte estrutura sugerida:

- `index.tsx`: Exportação principal.
- `[component-name].root.tsx`: Implementação base do componente.
- `[component-name].styles.ts`: Estilos (se necessário).
- `[component-name].types.ts`: Definições de interfaces e tipos.
- `[component-name].context.ts`: Contexto local (se necessário).

## 2. Padrões de Componentes TSX

### 2.1 Composition Pattern

Todos os componentes devem ser criados utilizando o **Composition Pattern** para garantir flexibilidade e reuso.

- **Root:** Componente principal que provê o contexto ou wrapper.
- **Sub-componentes:** Partes atômicas expostas como componentes independentes (ex: `DialogTitle`, `DialogContent`). Não usar como propriedade do Root (`Dialog.Title`).
- **Exemplos:** Consulte componentes como `action-sheet` ou `dialog` para referência interna.
- **Referência Externa:** Para novos componentes, siga o padrão de composição do [Shadcn UI](https://ui.shadcn.com/docs/components).

### 2.2 Ordem Interna (TSX)

Siga rigorosamente a ordem interna definida em `docs/codestyle/main.md` (Seção 3):

1. External hooks
2. Internal hooks
3. Constants
4. State
5. Effects & memo
6. Handlers
7. Return

## 3. Nomenclatura e Documentação

- **Nomenclatura Geral:** Siga `docs/codestyle/nomenclature-classes-idhtml.md` para elementos e classes.
- **Funções:** Siga `docs/codestyle/nomenclature-functions.md`.
- **Comentários:** Use o padrão de `docs/codestyle/docs-and-comments.md`.
- **Pastas e Arquivos:** kebab-case (ex: `bottom-sheet/`).
- **Componentes:** PascalCase (ex: `BottomSheet`).
- **Props:** camelCase (ex: `isLoading`).

## 4. Estilização

- Utilize os design tokens localizados em `src/tokens`.
- Evite valores "hardcoded" de cores ou espaçamentos.
