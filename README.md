# Controle de Gastos do Mês

Projeto desenvolvido em TypeScript para registrar despesas e gerar um relatório de gastos por categoria.

## Como instalar, testar e rodar o projeto

### Instalar as dependências

```bash
npm install

```

### Executar os testes

```bash
npm test
```

### Rodar o projeto

```bash
npm run dev
```

## Arquivos de configuração

- `package.json`: contém as informações do projeto, os scripts para testar e executar e as dependências utilizadas.
- `tsconfig.json`: contém as configurações do TypeScript utilizadas no projeto.
- `.gitignore`: define os arquivos e pastas que não devem ser enviados para o GitHub

## Registro de uso de IA

| Função | Uso da IA | Revisão/ajuste realizado |
| --- | --- | --- |
| `adicionarDespesa` |A IA auxiliou na implementação depois da criação dos testes.|Revisei a implementação e aceitei|
| `removerDespesa` | A IA auxiliou na implementação depois da criação dos testes. | Revisei a função e testei também o caso em que o ID não existe. |
| `despesasDaCategoria` | A IA auxiliou na implementação depois da criação dos testes. | Revisei o filtro por categoria e o caso em que nenhuma despesa é encontrada. |
| `totalGasto` | A IA auxiliou na implementação depois da criação dos testes. | Revisei a soma dos valores e testei também uma lista vazia. |
| `maiorDespesa` | A IA auxiliou na implementação depois da criação dos testes. | Revisei a função e testei o comportamento quando a lista está vazia. |
| `descricaoCategoria` | A IA auxiliou na implementação depois da criação dos testes. | Revisei a implementação e conferi o uso do `switch`. |
| `matrizCategoriaMes` | A IA auxiliou na implementação depois da criação dos testes. | Revisei as posições das categorias e dos meses e conferi o uso dos laços. |
| `formatarRelatorio` | A IA auxiliou na implementação depois da criação dos testes. | Revisei a formatação do relatório, os totais e a maior despesa. |

## Reflexão sobre o uso de IA

A IA ajudou na implementação das funções depois que os testes foram criados.
Um ponto que exigiu atenção foi garantir que as funções não alterassem o array original.
Por isso, foi importante testar se `adicionarDespesa` retornava um novo array sem modificar o anterior.
Também conferi casos de borda, como listas vazias e a remoção de um ID que não existe.
Os testes ajudaram a identificar se as implementações sugeridas pela IA realmente funcionavam como esperado.
Antes de aceitar cada implementação, revisei o código e confirmei o resultado executando os testes.