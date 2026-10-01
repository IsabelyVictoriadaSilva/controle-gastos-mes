import { describe, it, expect } from "vitest";
import {
    descricaoCategoria,
    matrizCategoriaMes
} from "./relatorio.js";

describe("descricaoCategoria", () => {

    it("deve retornar o nome de exibição da categoria", () => {
        const resultado = descricaoCategoria("alimentacao");

        expect(resultado).toBe("Alimentação");
    });

    it("deve retornar a própria categoria quando ela for desconhecida", () => {
        const resultado = descricaoCategoria("outra");

        expect(resultado).toBe("outra");
    });

});

describe("matrizCategoriaMes", () => {

    it("deve somar os gastos por categoria e mês", () => {

        // Despesas usadas para testar a matriz
        const despesas = [
            {
                id: 1,
                descricao: "Almoço",
                valor: 25,
                categoria: "alimentacao" as const,
                mes: 1
            },
            {
                id: 2,
                descricao: "Mercado",
                valor: 40,
                categoria: "alimentacao" as const,
                mes: 1
            },
            {
                id: 3,
                descricao: "Ônibus",
                valor: 10,
                categoria: "transporte" as const,
                mes: 2
            }
        ];

        const resultado = matrizCategoriaMes(despesas);

        // Linha 0 = alimentação e coluna 0 = janeiro
        // 25 + 40 = 65
        expect(resultado[0][0]).toBe(65);

        // Linha 1 = transporte e coluna 1 = fevereiro
        expect(resultado[1][1]).toBe(10);
    });


    it("deve retornar uma matriz zerada quando não houver despesas", () => {

        // Lista vazia: não existe nenhuma despesa
        const resultado = matrizCategoriaMes([]);

        // Cada linha representa uma categoria
        // Cada linha possui 12 zeros, um para cada mês do ano
        expect(resultado).toEqual([
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // alimentação
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // transporte
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // lazer
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]  // moradia
        ]);
    });

});