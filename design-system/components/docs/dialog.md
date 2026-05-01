# Dialog

Componente para janelas modais com foco em acessibilidade WAI-ARIA, navegação por teclado e composição.

## Estrutura (Compound Components)

- `Dialog.Root`: controla estado aberto/fechado (controlado ou não controlado).
- `Dialog.Trigger`: elemento que abre o modal.
- `Dialog.Overlay`: camada de fundo com fechamento opcional por clique.
- `Dialog.Content`: conteúdo modal com `role="dialog"`, `aria-modal` e trap de foco.
- `Dialog.Header`: agrupamento de título/descrição.
- `Dialog.Footer`: agrupamento de ações.
- `Dialog.Title`: título semântico associado ao `Dialog.Content`.
- `Dialog.Description`: descrição semântica associada ao `Dialog.Content`.
- `Dialog.Close`: elemento para fechamento explícito.

## API

### `Dialog.Root`

Props principais:

- `open?: boolean`
- `defaultOpen?: boolean` (default: `false`)
- `onOpenChange?: (open: boolean) => void`
- `closeOnOverlayClick?: boolean` (default: `true`)

Comportamento:

- Suporta modo controlado e não controlado.
- Restaura o foco para o `Trigger` ao fechar.

### `Dialog.Content`

Comportamento:

- Renderiza apenas quando aberto.
- Usa `role="dialog"` e `aria-modal`.
- Aplica `aria-labelledby` somente quando `Dialog.Title` está presente.
- Aplica `aria-describedby` somente quando `Dialog.Description` está presente.
- Fecha com `Escape`.
- Mantém foco no conteúdo com navegação cíclica em `Tab`/`Shift+Tab`.

## Exemplo

```tsx
<Dialog.Root>
    <Dialog.Trigger>Abrir diálogo</Dialog.Trigger>
    <Dialog.Overlay />
    <Dialog.Content>
        <Dialog.Header>
            <Dialog.Title>Excluir item</Dialog.Title>
            <Dialog.Description>Essa ação não poderá ser desfeita.</Dialog.Description>
        </Dialog.Header>
        <Dialog.Footer>
            <Dialog.Close>Cancelar</Dialog.Close>
            <button type="button">Confirmar</button>
        </Dialog.Footer>
    </Dialog.Content>
</Dialog.Root>
```

## Acessibilidade

- Semântica de modal via `role="dialog"` e `aria-modal`.
- Associação de rótulo/descrição via `aria-labelledby` e `aria-describedby` apenas quando os elementos correspondentes existem.
- `Dialog.Trigger` expõe `aria-haspopup="dialog"`, `aria-expanded`, `aria-controls` e `data-state="open|closed"`.
- Fechamento por `Escape` e suporte a navegação por teclado (`Tab`, `Shift+Tab`, `Enter`, `Space`).
