# StepIndicator (Web Construction Guide)

Este documento descreve as especificações técnicas e diretrizes de arquitetura para a construção do componente `StepIndicator` para a plataforma Web, seguindo os padrões de excelência do Charleston Design System.

## 🎯 Objetivo

Indicador visual de progresso em etapas. Na Web, deve ser otimizado para performance, acessibilidade (WAI-ARIA) e consistência visual, utilizando o padrão de **Compound Components**.

## 🏗️ Anatomia e Composição

A estrutura deve permitir controle total sobre a renderização:

1.  **StepIndicator.Root**: Container principal que gerencia o estado e contexto.
2.  **StepIndicator.Content**: Onde o conteúdo principal é renderizado.

### Exemplo de Uso Desejado:
```tsx
<StepIndicator>
  <StepIndicator.Content>
    {/* Conteúdo do componente */}
  </StepIndicator.Content>
</StepIndicator>
```

## 🎨 Design Tokens

-   **Background:** `theme.colors.surface.default` ou conforme o estado.
-   **Bordas:** `theme.colors.border.default` para divisores ou contornos.
-   **Espaçamento:** Uso de tokens `theme.spacing` para paddings e gaps.
-   **Tipografia:** Uso de tokens `theme.typography` para garantir consistência.

## ⚙️ Especificações Técnicas

### Propriedades (StepIndicator.Root)

| Prop            | Tipo                     | Padrão     | Descrição                                  |
| --------------- | ------------------------ | ---------- | ------------------------------------------ |
| `children`      | `ReactNode`              | -          | Conteúdo do componente.                    |
| `className`     | `string`                 | -          | Classes CSS adicionais.                    |

### Acessibilidade (WAI-ARIA)

-   **Semântica:** Utilizar elementos HTML5 nativos sempre que possível.
-   **Keyboard:** Garantir que todos os elementos interativos sejam acessíveis via `Tab`, `Enter` e `Space`.
-   **Roles:** Aplicar `role` apropriado conforme a especificação W3C/WAI-ARIA para StepIndicator.

## 📂 Estrutura de Arquivos Recomendada

```
step-indicator/
├── step-indicator.root.tsx
├── step-indicator.content.tsx
├── step-indicator.context.ts
├── step-indicator.types.ts
├── step-indicator.styles.ts
└── README.md
```

## 🧪 Estratégia de Testes

1.  **Renderização:** Garantir que o componente e seus sub-componentes montem sem erros.
2.  **Acessibilidade:** Validar atributos ARIA e navegação via teclado.
3.  **Propriedades:** Verificar se as props customizadas alteram o comportamento/estilo conforme esperado.

---

> [!IMPORTANT]
> **Docs as Code:** Mantenha este documento atualizado em relação à implementação real. Qualquer mudança na API do componente deve refletir aqui.
