import type { Despesa } from "./tipos.js";

import {
    adicionarDespesa,
    removerDespesa,
    despesasDaCategoria,
    totalGasto,
    maiorDespesa
} from "./despesas.js";

import {
    matrizCategoriaMes,
    formatarRelatorio
} from "./relatorio.js";

console.log("Projeto Controle de Gastos");

const despesas: Despesa[] = [
    {
        id: 1,
        descricao: "Almoço",
        valor: 25,
        categoria: "alimentacao",
        mes: 1
    },
    {
        id: 2,
        descricao: "Ônibus",
        valor: 10,
        categoria: "transporte",
        mes: 1
    },
    {
        id: 3,
        descricao: "Cinema",
        valor: 30,
        categoria: "lazer",
        mes: 2
    },
    {
        id: 4,
        descricao: "Aluguel",
        valor: 800,
        categoria: "moradia",
        mes: 2
    },
    {
        id: 5,
        descricao: "Mercado",
        valor: 150,
        categoria: "alimentacao",
        mes: 3
    },
    {
        id: 6,
        descricao: "Uber",
        valor: 20,
        categoria: "transporte",
        mes: 3
    },
    {
        id: 7,
        descricao: "Show",
        valor: 100,
        categoria: "lazer",
        mes: 3
    },
    {
        id: 8,
        descricao: "Conta de luz",
        valor: 120,
        categoria: "moradia",
        mes: 1
    }
];
// Adiciona uma nova despesa à lista
const despesasAtualizadas = adicionarDespesa(despesas, {
    id: 9,
    descricao: "Café",
    valor: 15,
    categoria: "alimentacao",
    mes: 3
});
// Remove a despesa de id 9 da lista
const despesasFinais = removerDespesa(despesasAtualizadas, 9);  

// Gera o relatório usando as despesas cadastradas
// Chama as funções de despesas
const despesasAlimentacao = despesasDaCategoria(despesasFinais, "alimentacao");
const total = totalGasto(despesasFinais);
const maior = maiorDespesa(despesasFinais);

const matriz = matrizCategoriaMes(despesasFinais);
const relatorio = formatarRelatorio(despesasFinais);

// Exibe o relatório no terminal
console.log(relatorio);
