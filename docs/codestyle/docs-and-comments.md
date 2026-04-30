# Comentários e Documentação

Manter o código bem comentado e documentado é fundamental para garantir que todos os desenvolvedores entendam o funcionamento das funções e lógicas implementadas, além de facilitar a manutenção e evolução do projeto. No entanto, é importante seguir diretrizes para que os comentários e a documentação sejam claros, concisos e úteis.

## 1. **Objetivo dos Comentários**

- Comentários devem **explicar o "porquê"** do código, não o "como". Se o código não for autoexplicativo, pode ser necessário refatorá-lo em vez de apenas adicionar comentários explicando o que ele faz.
- Use comentários para esclarecer **decisões de design**, **explicações sobre lógica complexa** ou **avisos sobre possíveis armadilhas** que outros desenvolvedores podem encontrar.
- Evite comentários óbvios que descrevem o que o código já deixa claro.

## 2. **Comentários em Bloco vs. Comentários Inline**

- **Comentários em bloco** devem ser usados para explicar seções maiores de código ou a lógica geral de uma função ou classe. Esses comentários são geralmente colocados antes de funções ou blocos de código complexos:
    ```javascript
    // Esta função calcula o total de vendas com base no valor das vendas e descontos aplicados
    function calcularTotal(vendas, desconto) {
      ...
    }
    ```
- **Comentários inline** devem ser usados de forma sucinta, diretamente ao lado de uma linha de código para esclarecer partes específicas da lógica que podem não ser óbvias à primeira vista:
    ```javascript
    const resultado = calcularTotal(vendas, desconto); // Total com desconto aplicado
    ```

## 3. **Boas Práticas de Comentários**

- **Manter os comentários atualizados**: Se o código mudar, o comentário também deve ser atualizado para refletir a nova lógica. Comentários desatualizados são piores do que a ausência de comentários.
- **Evitar excessos**: Não comente cada linha de código. Use comentários de forma estratégica para esclarecer o código onde realmente for necessário.
- **Ser claro e conciso**: Comentários devem ser escritos em linguagem simples e objetiva. Evite descrições longas e desnecessárias.

## 4. **Documentação com JSDoc (ou similares)**

- Use **JSDoc** ou outra ferramenta de documentação similar para criar descrições estruturadas de funções, métodos, parâmetros e retornos.
- Exemplos de uso de JSDoc:

    ```javascript
    /**
     * Calcula o total de vendas com desconto.
     *
     * @param {number} vendas - O valor total das vendas.
     * @param {number} desconto - O desconto aplicado às vendas.
     * @returns {number} - O valor total após o desconto ser aplicado.
     */
    function calcularTotal(vendas, desconto) {
        return vendas - vendas * desconto;
    }
    ```

- **@param**: Documenta cada parâmetro da função, incluindo o tipo de dado e a descrição.
- **@returns**: Explica o valor retornado pela função, também com o tipo de dado e uma descrição do que representa.

## 5. **Uso de Bibliotecas de Terceiros**

- Quando uma função ou parte do código for baseada em uma biblioteca de terceiros, deve-se adicionar o **link para a documentação oficial** da biblioteca via JSDoc no início da função, facilitando o entendimento da implementação:

    ```javascript
    /**
     * Valida o esquema de dados usando a biblioteca Joi.
     * Documentação: https://joi.dev/api/?v=17.4.0
     *
     * @param {Object} dados - O objeto de dados a ser validado.
     * @param {Object} schema - O esquema de validação Joi.
     * @returns {Object} - O resultado da validação.
     */
    function validarDados(dados, schema) {
        return schema.validate(dados);
    }
    ```

- Isso garante que quem estiver mantendo o código saiba onde encontrar mais informações sobre o funcionamento da biblioteca utilizada, sem precisar procurar pela documentação externa.

## 6. **Comentários de TODO**

- Use o formato `TODO` para marcar pontos no código que necessitam de melhorias, revisão futura ou estão pendentes de conclusão:
    ```javascript
    // TODO: Refatorar esta função para melhorar a eficiência
    function antigaFuncao() {
      ...
    }
    ```
- Os `TODO` devem ser usados com moderação e revisados periodicamente para evitar que se acumulem.

## 7. **Comentários de Revisão (FIXME)**

- Use `FIXME` para marcar trechos de código que contêm bugs ou possíveis problemas conhecidos que precisam ser corrigidos.
    ```javascript
    // FIXME: Corrigir o cálculo de desconto quando o valor for negativo
    ```
