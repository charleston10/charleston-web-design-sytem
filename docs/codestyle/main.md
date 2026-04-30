# Code Style Guide

Este documento define as regras oficiais de organização de código para projetos que utilizam o Charleston Design System, com foco em legibilidade, previsibilidade e escalabilidade.

As regras aqui descritas são obrigatórias para componentes React / React Native e devem ser aplicadas em todo o código do design system e aplicações que o consomem.

---

## 1. Objetivos

- Garantir consistência entre arquivos
- Facilitar leitura e manutenção
- Reduzir conflitos em code review
- Padronizar a estrutura mental do código
- Escalar bem para times grandes

---

## 2. Organização de Imports

### 2.1 Princípios gerais

- Imports devem ser agrupados por tipo
- Cada grupo deve ser separado por uma linha em branco
- Dentro de cada grupo, os imports devem estar em ordem alfabética
- O projeto utiliza Prettier com plugin de ordenação de imports

---

### 2.2 Ordem dos grupos de import

A ordem correta é sempre a seguinte:

#### 1. Bibliotecas externas (React, React Native, libs npm)

```ts
import React, { useEffect, useState } from "react";

import { View } from "react-native";
```

#### 2. Imports internos via alias (design system ou aplicação)

```ts
import { Button } from "@charleston/design-system";

import { ListTile } from "@ds/components/list/tile";
```

#### 3. Imports relativos (arquivos e pastas locais)

```ts
import { hideActionSheet, subscribe } from "./action-sheet.stack";
```

---

### 2.3 Regras adicionais

- Não misturar grupos
- Não pular grupos
- Não usar imports relativos profundos quando existir alias
- Preferir sempre imports nomeados
- Evitar imports com efeitos colaterais
- **Remover imports não utilizados:** Nunca deve existir um import no arquivo que não seja efetivamente usado ou referenciado no código.

---

## 3. Organização Interna de Componentes React (TSX)

### 3.1 Princípio fundamental

A estrutura interna de um componente deve seguir uma ordem lógica fixa, para que qualquer desenvolvedor consiga entender rapidamente o fluxo do código.

Essa ordem não é estética, é arquitetural.

---

### 3.2 Ordem oficial dentro do componente

A função do componente deve seguir exatamente a ordem abaixo:

1. Hooks de bibliotecas externas
2. Hooks internos (custom hooks da aplicação / DS)
3. Declaração de constantes
4. Declaração de variáveis mutáveis
5. Hooks de ciclo de vida e memoização
6. Funções auxiliares e handlers
7. Retorno (return)

---

### 3.3 Exemplo completo

```tsx
export function ExampleComponent() {
    /* =====================
     * External hooks
     * ===================== */
    const navigation = useNavigation();
    const theme = useTheme();

    /* =====================
     * Internal hooks
     * ===================== */
    const user = useUser();
    const permissions = usePermissions();

    /* =====================
     * Constants
     * ===================== */
    const isDisabled = !permissions.canEdit;
    const title = user.name ?? "Guest";

    /* =====================
     * State
     * ===================== */
    const [loading, setLoading] = useState(false);

    /* =====================
     * Effects & memo
     * ===================== */
    useEffect(() => {
        if (user.id) {
            loadData();
        }
    }, [user.id]);

    const computedValue = useMemo(() => {
        return title.toUpperCase();
    }, [title]);

    /* =====================
     * Handlers
     * ===================== */
    const handlePress = () => {
        setLoading(true);
    };

    return (
        <View>
            <Text>{computedValue}</Text>
            <Button disabled={isDisabled} loading={loading} onPress={handlePress} />
        </View>
    );
}
```

---

## 4. Regras Importantes

### 4.1 Hooks

- Hooks devem sempre estar no topo do componente
- Nunca declarar hooks dentro de funções, loops ou condicionais
- Hooks externos devem vir antes de hooks internos

### 4.2 Constantes vs Variáveis

- const deve ser usado sempre que possível
- Variáveis mutáveis (let) devem ser raras e justificadas
- Nunca declarar variáveis após o return

### 4.3 useEffect, useCallback, useMemo

- Devem vir após declarações de estado e constantes
- Nunca depois de handlers
- Devem estar agrupados no bloco “Effects & memo”

### 4.4 Funções auxiliares

- Handlers (handleX) devem vir após hooks
- Funções auxiliares não devem conter hooks
- Funções grandes devem ser extraídas para hooks ou utilitários

---

## 5. O que não é permitido

- Código após o return
- Hooks fora do topo do componente
- Misturar imports internos e externos
- Lógica de negócio pesada dentro do JSX
- Estados espalhados sem organização
- **Providers sem children:** Todos os providers (ex: `ToastProvider`, `DialogProvider`) devem obrigatoriamente aceitar a prop `children` e envolver o conteúdo da aplicação. Eles nunca devem ser usados como componentes autocontidos (`<Provider />`).

---

## 6. Ferramentas que reforçam esse padrão

- Prettier (formatação e imports)
- ESLint (react-hooks, no-use-before-define, no-unreachable)
- Code review obrigatório

Essas regras são reforçadas automaticamente sempre que possível, mas também dependem de disciplina do time.

---

## 7. Considerações finais

Este padrão existe para:

- Reduzir carga cognitiva
- Facilitar onboarding
- Evitar estilos individuais conflitantes
- Garantir longevidade do código

Qualquer exceção deve ser rara, justificada e documentada.
