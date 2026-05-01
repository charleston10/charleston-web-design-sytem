# Toolbar

Componente composto para barras de ferramentas superiores ou inferiores.

## Estrutura

```tsx
<Toolbar.Root position="top">
  <Toolbar.Content>Conteudo principal</Toolbar.Content>
  <Toolbar.Actions>
    <Button size="sm">Acao</Button>
  </Toolbar.Actions>
  <Toolbar.Separator />
</Toolbar.Root>
```

## Subcomponentes

- `Toolbar.Root`: define orientacao, posicao e estilo base da barra.
- `Toolbar.Content`: container para conteudo principal.
- `Toolbar.Actions`: agrupador para acoes alinhadas ao fim.
- `Toolbar.Separator`: separador visual com adaptacao por orientacao.

## Props principais de `Toolbar.Root`

- `orientation`: `"horizontal" | "vertical"` (padrao: `"horizontal"`).
- `position`: `"top" | "bottom"` (padrao: `"top"`).
- `radius`: token de `theme.radius` (padrao: `"none"`).
- `bordered`: habilita borda superior/inferior (padrao: `true`).

## Acessibilidade

- `role="toolbar"` aplicado no root.
- `aria-orientation` sincronizado com a orientacao da barra.
