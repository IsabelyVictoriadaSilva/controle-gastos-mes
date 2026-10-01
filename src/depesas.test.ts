import type { Despesa } from "./tipos.js";
import { describe, it, expect } from "vitest";
import { adicionarDespesa, removerDespesa } from "./despesas.js";



// começo do teste da função adicionarDespesa


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

        adicionarDespesa(despesas, nova);

        expect(despesas).toEqual([]);
    });

});

// começo do teste da função removerDespesa

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