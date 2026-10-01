import type { Despesa } from "./tipos.js";
import { describe, it, expect } from "vitest";
import {
    adicionarDespesa,
    removerDespesa,
    despesasDaCategoria,
    totalGasto,
    maiorDespesa
} from "./despesas.js";



// começo do teste da função adicionarDespesa
// 3 testes


describe("adicionarDespesa", () => {

    it("deve adicionar uma despesa válida", () => {
        const despesas: Despesa[] = [];

        const nova: Despesa = {
            id: 1,
            descricao: "Almoço",
            valor: 25,
            categoria: "alimentacao",
            mes: 2
        };

        const resultado = adicionarDespesa(despesas, nova);

        expect(resultado).toEqual([nova]);
    });


    it("deve lançar erro quando o valor for zero", () => {
        const despesas: Despesa[] = [];

        const nova: Despesa = {
            id: 2,
            descricao: "Cinema",
            valor: 0,
            categoria: "lazer",
            mes: 2
        };

        expect(() => adicionarDespesa(despesas, nova)).toThrow();
    });


    it("não deve alterar o array original", () => {
        const despesas: Despesa[] = [];

        const nova: Despesa = {
            id: 3,
            descricao: "Ônibus",
            valor: 10,
            categoria: "transporte",
            mes: 2
        };
// A função cria um novo array para adicionar a despesa, por isso o array original não é alterado.
        adicionarDespesa(despesas, nova);

        expect(despesas).toEqual([]);
    });

});

// começo do teste da função removerDespesa
// 2 testes

describe("removerDespesa", () => {

    it("deve remover uma despesa pelo id", () => {
        const despesas: Despesa[] = [
            {
                id: 1,
                descricao: "Almoço",
                valor: 25,
                categoria: "alimentacao",
                mes: 2
            },
            {
                id: 2,
                descricao: "Cinema",
                valor: 30,
                categoria: "lazer",
                mes: 2
            }
        ];

        const resultado = removerDespesa(despesas, 1);

        expect(resultado).toEqual([despesas[1]]);
    });


    it("deve retornar uma cópia quando o id não existir", () => {
        const despesas: Despesa[] = [
            {
                id: 1,
                descricao: "Almoço",
                valor: 25,
                categoria: "alimentacao",
                mes: 2
            }
        ];

        const resultado = removerDespesa(despesas, 99);

        // O conteúdo deve continuar igual
        expect(resultado).toEqual(despesas);

        // Mas deve ser um novo array
        expect(resultado).not.toBe(despesas);
    });

});

// começo do teste da função despesasDaCategoria
// 2 testes


describe("despesasDaCategoria", () => {

    it("deve retornar somente as despesas da categoria informada", () => {
        const despesas: Despesa[] = [
            {
                id: 1,
                descricao: "Almoço",
                valor: 25,
                categoria: "alimentacao",
                mes: 2
            },
            {
                id: 2,
                descricao: "Cinema",
                valor: 30,
                categoria: "lazer",
                mes: 2
            },
            {
                id: 3,
                descricao: "Jantar",
                valor: 40,
                categoria: "alimentacao",
                mes: 2
            }
        ];

        const resultado = despesasDaCategoria(despesas, "alimentacao");

        expect(resultado).toEqual([despesas[0], despesas[2]]);
    });

    it("deve retornar um array vazio quando não houver despesas da categoria", () => {
        const despesas: Despesa[] = [
            {
                id: 1,
                descricao: "Almoço",
                valor: 25,
                categoria: "alimentacao",
                mes: 2
            }
        ];

        const resultado = despesasDaCategoria(despesas, "lazer");

        expect(resultado).toEqual([]);
    });

});

// começo do teste da função totalGasto
// 2 testes
describe("totalGasto", () => {

    it("deve retornar a soma dos valores das despesas", () => {
        const despesas: Despesa[] = [
            {
                id: 1,
                descricao: "Almoço",
                valor: 25,
                categoria: "alimentacao",
                mes: 2
            },
            {
                id: 2,
                descricao: "Cinema",
                valor: 30,
                categoria: "lazer",
                mes: 2
            }
        ];

        const resultado = totalGasto(despesas);

        expect(resultado).toBe(55);
    });

    it("deve retornar zero quando a lista estiver vazia", () => {
        const despesas: Despesa[] = [];

        const resultado = totalGasto(despesas);

        expect(resultado).toBe(0);
    });

});

// começo do teste da função maiorDespesa
// 2 testes

describe("maiorDespesa", () => {

    it("deve retornar a despesa de maior valor", () => {
        const despesas: Despesa[] = [
            {
                id: 1,
                descricao: "Almoço",
                valor: 25,
                categoria: "alimentacao",
                mes: 2
            },
            {
                id: 2,
                descricao: "Cinema",
                valor: 30,
                categoria: "lazer",
                mes: 2
            },
            {
                id: 3,
                descricao: "Mercado",
                valor: 80,
                categoria: "alimentacao",
                mes: 2
            }
        ];

        const resultado = maiorDespesa(despesas);

        expect(resultado).toEqual(despesas[2]);
    });

    it("deve retornar undefined quando a lista estiver vazia", () => {
        const despesas: Despesa[] = [];

        const resultado = maiorDespesa(despesas);

        expect(resultado).toBeUndefined();
    });

});