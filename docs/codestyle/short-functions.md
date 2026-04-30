### Funções Curtas e de Responsabilidade Única

Manter as funções curtas e com responsabilidade única é uma prática essencial para facilitar a manutenção, legibilidade e testabilidade do código. Cada função deve se concentrar em um único objetivo e evitar realizar múltiplas tarefas. Abaixo estão exemplos mais complexos que seguem esses princípios, incluindo operações de venda e processamento de vídeo.

#### 1. **Responsabilidade Única**

Cada função deve se concentrar em uma única responsabilidade. Funções com múltiplas responsabilidades devem ser divididas em funções menores para facilitar o teste unitário e a manutenção.

#### Exemplo: Operação de Venda

Neste exemplo, temos uma operação de venda onde diferentes aspectos da venda (validação, cálculo de preço, geração de recibo) são isolados em suas próprias funções.

```typescript
class Sale {
    public processSale(items: Item[], customer: Customer): void {
        if (!this.validateStock(items)) {
            throw new Error("Insufficient stock");
        }

        const totalPrice = this.calculateTotalPrice(items);
        const receipt = this.generateReceipt(items, totalPrice, customer);

        this.saveSale(items, customer, totalPrice, receipt);
        this.printReceipt(receipt);
    }

    private validateStock(items: Item[]): boolean {
        // Lógica para validar o estoque dos itens
        return items.every((item) => item.stock > 0);
    }

    private calculateTotalPrice(items: Item[]): number {
        // Lógica para calcular o preço total
        return items.reduce((total, item) => total + item.price, 0);
    }

    private generateReceipt(items: Item[], totalPrice: number, customer: Customer): Receipt {
        // Lógica para gerar o recibo
        return {
            items,
            totalPrice,
            customer,
            date: new Date(),
        };
    }

    private saveSale(
        items: Item[],
        customer: Customer,
        totalPrice: number,
        receipt: Receipt,
    ): void {
        // Lógica para salvar a venda no sistema
        console.log("Sale saved:", { items, customer, totalPrice, receipt });
    }

    private printReceipt(receipt: Receipt): void {
        // Lógica para imprimir o recibo
        console.log("Printing receipt:", receipt);
    }
}
```

Neste exemplo:

- **`processSale`**: É a função principal que orquestra todo o processo de venda, mas delega as responsabilidades específicas (validação, cálculo de preço, geração de recibo) para funções auxiliares.
- **Funções auxiliares**: Cada função (`validateStock`, `calculateTotalPrice`, `generateReceipt`, `saveSale`, `printReceipt`) foca em uma tarefa única e bem definida, facilitando testes unitários e manutenção.

#### 2. **Handler de Erros**

Erros devem ser tratados de forma isolada, com a lógica de manipulação de exceções separada da lógica principal. Isso facilita a testabilidade e a reutilização do código de tratamento de erros.

#### Exemplo: Operação de Venda com Tratamento de Erros

```typescript
class SaleWithErrorHandling {
    public processSale(items: Item[], customer: Customer): void {
        try {
            this.performSale(items, customer);
        } catch (error) {
            this.handleError(error);
        }
    }

    private performSale(items: Item[], customer: Customer): void {
        if (!this.validateStock(items)) {
            throw new Error("Insufficient stock");
        }

        const totalPrice = this.calculateTotalPrice(items);
        const receipt = this.generateReceipt(items, totalPrice, customer);

        this.saveSale(items, customer, totalPrice, receipt);
        this.printReceipt(receipt);
    }

    private handleError(error: Error): void {
        // Lógica para lidar com o erro de forma adequada
        console.error("Error processing sale:", error);
        // Talvez enviar uma notificação ou log para um serviço
    }

    // Outras funções de venda, como validateStock, calculateTotalPrice, etc.
}
```

#### 3. **Handler de Comportamento**

Funções que lidam com comportamentos específicos, como regras de negócios ou respostas a eventos, devem ser isoladas em handlers dedicados.

#### Exemplo: Comportamento de Desconto em Operação de Venda

Neste exemplo, temos uma função que lida com a aplicação de descontos, isolando a lógica de verificação de elegibilidade e aplicação de desconto.

```typescript
class SaleWithDiscount {
    public applyDiscount(items: Item[], customer: Customer): number {
        const isEligibleForDiscount = this.checkDiscountEligibility(customer);
        const totalPrice = this.calculateTotalPrice(items);

        return isEligibleForDiscount ? this.applyDiscountToTotal(totalPrice) : totalPrice;
    }

    private checkDiscountEligibility(customer: Customer): boolean {
        // Lógica para verificar se o cliente é elegível para desconto
        return customer.loyaltyPoints > 100;
    }

    private applyDiscountToTotal(totalPrice: number): number {
        // Aplica um desconto de 10%
        return totalPrice * 0.9;
    }

    private calculateTotalPrice(items: Item[]): number {
        // Lógica para calcular o preço total
        return items.reduce((total, item) => total + item.price, 0);
    }
}
```

#### 4. **Handler de Eventos**

Eventos, como interações do usuário ou processos assíncronos, devem ser processados separadamente em funções específicas. Isso facilita o isolamento de lógica específica de eventos e melhora a testabilidade.

#### Exemplo: Processamento de Vídeo com Handler de Evento

Aqui, criamos handlers para processar diferentes eventos durante o processamento de um vídeo, como `onProcessingStart`, `onProcessingProgress` e `onProcessingEnd`.

```typescript
class VideoProcessor {
    public startProcessing(video: Video): void {
        this.onProcessingStart();

        try {
            this.processVideo(video);
            this.onProcessingEnd(video);
        } catch (error) {
            this.handleProcessingError(error);
        }
    }

    private onProcessingStart(): void {
        // Lógica para iniciar o processamento (ex. iniciar um loader)
        console.log("Processing started...");
    }

    private onProcessingProgress(progress: number): void {
        // Lógica para lidar com o progresso do processamento
        console.log(`Processing ${progress}% complete`);
    }

    private onProcessingEnd(video: Video): void {
        // Lógica para quando o processamento for concluído
        console.log("Processing completed:", video);
    }

    private processVideo(video: Video): void {
        // Simulação de processamento de vídeo
        for (let i = 0; i <= 100; i += 10) {
            this.onProcessingProgress(i);
        }
    }

    private handleProcessingError(error: Error): void {
        // Lógica para lidar com erros durante o processamento do vídeo
        console.error("Error processing video:", error);
    }
}
```

#### 5. **Testabilidade**

Funções curtas e de responsabilidade única permitem testar cada parte do comportamento separadamente. Em vez de testar o processo de venda completo, por exemplo, podemos isolar e testar a validação, o cálculo de preço e o comportamento de descontos de forma independente.

```typescript
describe("SaleWithDiscount", () => {
    it("should apply a 10% discount when customer is eligible", () => {
        const sale = new SaleWithDiscount();
        const customer = { loyaltyPoints: 150 };
        const items = [{ price: 100 }, { price: 50 }];

        const result = sale.applyDiscount(items, customer);

        expect(result).toBe(135); // 150 * 0.9
    });

    it("should not apply a discount when customer is not eligible", () => {
        const sale = new SaleWithDiscount();
        const customer = { loyaltyPoints: 50 };
        const items = [{ price: 100 }, { price: 50 }];

        const result = sale.applyDiscount(items, customer);

        expect(result).toBe(150);
    });
});
```

### Benefícios

- **Facilidade de Teste**: Funções curtas e com responsabilidades bem definidas facilitam a criação de testes unitários.
- **Reutilização**: Handlers podem ser reutilizados em diferentes partes da classe ou projeto, promovendo a prática de DRY (Don't Repeat Yourself).
- **Legibilidade e Manutenção**: Funções pequenas são mais fáceis de entender e manter, além de serem menos propensas a introduzir bugs.

Aqui está um exemplo de **código ruim**, onde uma única função faz muitas coisas diferentes, violando o princípio da responsabilidade única. Esse tipo de função é difícil de testar, de manter e de compreender.

### Exemplo de Código Ruim

Neste exemplo, temos uma operação de venda em que uma única função lida com validação de estoque, cálculo do total, aplicação de desconto, geração de recibo, e até tratamento de erros, tudo misturado. Essa função faz muito mais do que deveria e torna o código mais difícil de testar e manter.

```typescript
class SaleBadExample {
    public processSale(items: Item[], customer: Customer): void {
        try {
            // Validação de estoque
            for (const item of items) {
                if (item.stock < 1) {
                    console.error("Insufficient stock for item:", item.name);
                    return;
                }
            }

            // Cálculo do total
            let totalPrice = 0;
            for (const item of items) {
                totalPrice += item.price;
            }

            // Aplicação de desconto
            if (customer.loyaltyPoints > 100) {
                console.log("Applying 10% discount for loyal customer");
                totalPrice *= 0.9;
            }

            // Geração de recibo
            const receipt = {
                items: items,
                totalPrice: totalPrice,
                customer: customer,
                date: new Date(),
            };

            // Salvar a venda no sistema
            console.log("Saving sale:", receipt);

            // Imprimir o recibo
            console.log("Printing receipt:", receipt);
        } catch (error) {
            // Tratamento de erro
            console.error("An error occurred while processing the sale:", error);
        }
    }
}
```

### Problemas com esse Código

1. **Múltiplas responsabilidades**: A função `processSale` está lidando com validação de estoque, cálculo de total, aplicação de desconto, geração de recibo, tratamento de erros e até impressão. Cada uma dessas tarefas deveria estar em funções separadas.
2. **Difícil de testar**: Testar essa função é complicado, porque ela faz muitas coisas. Para testar apenas a validação de estoque, por exemplo, você ainda precisaria lidar com o cálculo do preço e a aplicação do desconto.
3. **Baixa reutilização**: Não há separação clara de responsabilidades, então a lógica de validação de estoque, cálculo de preço e aplicação de desconto não podem ser reutilizadas em outras partes do sistema.
4. **Pouca legibilidade**: A função é longa e difícil de ler, dificultando a compreensão de seu propósito geral. Qualquer modificação futura pode aumentar ainda mais sua complexidade.

### Como Melhorar

A solução é aplicar o princípio da **responsabilidade única** e dividir essa função em várias funções menores, como mostrado nos exemplos anteriores. Cada uma delas deve fazer apenas uma coisa, tornando o código mais legível, fácil de testar e de manter.

Ao melhorar esse código, você pode separar:

- A validação de estoque
- O cálculo do preço total
- A aplicação do desconto
- A geração e a impressão do recibo
- O tratamento de erros

Essa abordagem facilita a testabilidade, permite a reutilização de lógica e torna o código mais limpo e compreensível.
