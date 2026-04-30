# Padrão de Nomes de Funções

Este documento define as convenções de nomes para funções, visando garantir consistência e clareza no código.

## Diretrizes Gerais

1. Use nomes que sejam claros e descritivos para a função que ela realiza.
2. Funções booleanas devem começar com `is`, `has`, `can` ou `should`, para indicar claramente o tipo de retorno.
3. Funções que retornam valores ou objetos devem usar o prefixo `get`, enquanto funções que alteram ou configuram algo devem usar `set`.
4. Nomes de funções devem ser escritos em **camelCase**.
5. Evite abreviações, exceto quando amplamente aceitas e compreendidas no contexto do código.

| Convenção               | Indicação                                                            | Exemplo                                                       |
| ----------------------- | -------------------------------------------------------------------- | ------------------------------------------------------------- |
| `is` + [Adjective/Noun] | A função retorna um booleano.                                        | `isAvailable()`, `isEmpty()`, `isFoo()`                       |
| `get` + [Noun]          | A função retorna um valor ou objeto.                                 | `getUser()`, `getData()`, `getName()`                         |
| `set` + [Noun]          | A função define ou altera um valor ou objeto.                        | `setUser()`, `setData()`, `setName()`                         |
| `has` + [Noun]          | A função retorna um booleano indicando a presença de algo.           | `hasChildren()`, `hasItems()`, `hasPermission()`              |
| `can` + [Verb]          | A função retorna um booleano indicando a capacidade de fazer algo.   | `canEdit()`, `canView()`, `canDelete()`                       |
| `should` + [Verb]       | A função retorna um booleano indicando uma condição ou recomendação. | `shouldSave()`, `shouldUpdate()`, `shouldFetch()`             |
| `load` + [Noun]         | A função carrega ou inicializa dados.                                | `loadUser()`, `loadData()`, `loadSettings()`                  |
| `save` + [Noun]         | A função salva dados.                                                | `saveUser()`, `saveData()`, `saveSettings()`                  |
| `update` + [Noun]       | A função atualiza dados ou estado.                                   | `updateUser()`, `updateData()`, `updateSettings()`            |
| `delete` + [Noun]       | A função exclui dados ou objetos.                                    | `deleteUser()`, `deleteData()`, `deleteFile()`                |
| `calculate` + [Noun]    | A função realiza um cálculo e retorna um valor.                      | `calculateTotal()`, `calculateAverage()`, `calculateScore()`  |
| `fetch` + [Noun]        | A função obtém dados, geralmente de uma fonte externa.               | `fetchUser()`, `fetchData()`, `fetchResults()`                |
| `initialize` + [Noun]   | A função configura ou inicializa um objeto ou estado.                | `initializeApp()`, `initializeSettings()`, `initializeUser()` |
| `create` + [Noun]       | A função cria um novo objeto ou instância.                           | `createUser()`, `createDocument()`, `createReport()`          |
| `reset` + [Noun]        | A função redefine um valor ou estado para o padrão.                  | `resetPassword()`, `resetSettings()`, `resetForm()`           |
