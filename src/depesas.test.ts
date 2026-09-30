import type { Despesa } from "./tipos.js";
import { describe, it, expect } from "vitest";
import { adicionarDespesa } from "./despesas.js";

describe("adicionarDespesa", () => {

    //const despesas - cria uma variável chamada despesas
    //: Despesa[] - diz que ela será uma LISTA de Despesa
    //= [] - começa essa lista vazia
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

    // A função deve criar um novo array, sem modificar o array recebido
    expect(despesas).toEqual([]);
});
});