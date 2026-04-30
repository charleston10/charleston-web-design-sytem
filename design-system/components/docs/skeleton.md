# Skeleton (Web Construction Guide)

Este documento descreve as especificações técnicas e diretrizes de arquitetura para a construção do componente `Skeleton` para a plataforma Web, seguindo os padrões de excelência do Charleston Design System.

## 🎯 Objetivo

Placeholders de carregamento. Na Web, deve ser otimizado para performance, acessibilidade (WAI-ARIA) e consistência visual, utilizando o padrão de **Compound Components**.

## 🏗️ Anatomia e Composição

A estrutura deve permitir controle total sobre a renderização:

1.  **Skeleton.Root**: Container principal que gerencia o estado e contexto.
2.  **Skeleton.Content**: Onde o conteúdo principal é renderizado.

### Exemplo de Uso Desejado:
```tsx
<Skeleton>
  <Skeleton.Content>
    {/* Conteúdo do componente */}
  </Skeleton.Content>
</Skeleton>
```

## 🎨 Design Tokens

-   **Background:** `theme.colors.surface.default` ou conforme o estado.
-   **Bordas:** `theme.colors.border.default` para divisores ou contornos.
-   **Espaçamento:** Uso de tokens `theme.spacing` para paddings e gaps.
-   **Tipografia:** Uso de tokens `theme.typography` para garantir consistência.

## ⚙️ Especificações Técnicas

### Propriedades (Skeleton.Root)

| Prop            | Tipo                     | Padrão     | Descrição                                  |
| --------------- | ------------------------ | ---------- | ------------------------------------------ |
| `children`      | `ReactNode`              | -          | Conteúdo do componente.                    |
| `className`     | `string`                 | -          | Classes CSS adicionais.                    |

### Acessibilidade (WAI-ARIA)

-   **Semântica:** Utilizar elementos HTML5 nativos sempre que possível.
-   **Keyboard:** Garantir que todos os elementos interativos sejam acessíveis via `Tab`, `Enter` e `Space`.
-   **Roles:** Aplicar `role` apropriado conforme a especificação W3C/WAI-ARIA para Skeleton.

## 📂 Estrutura de Arquivos Recomendada

```
skeleton/
├── skeleton.root.tsx
├── skeleton.content.tsx
├── skeleton.context.ts
├── skeleton.types.ts
├── skeleton.styles.ts
└── README.md
```

## 🧪 Estratégia de Testes

1.  **Renderização:** Garantir que o componente e seus sub-componentes montem sem erros.
2.  **Acessibilidade:** Validar atributos ARIA e navegação via teclado.
3.  **Propriedades:** Verificar se as props customizadas alteram o comportamento/estilo conforme esperado.

---

> [!IMPORTANT]
> **Docs as Code:** Mantenha este documento atualizado em relação à implementação real. Qualquer mudança na API do componente deve refletir aqui.
