import { describe, it, expect } from "vitest";
import { descricaoCategoria } from "./relatorio.js";

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