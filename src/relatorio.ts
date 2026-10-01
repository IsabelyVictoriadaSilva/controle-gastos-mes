import type { Despesa } from "./tipos.js";
export function descricaoCategoria(
    categoria: string
): string {
    // Verifica a categoria e retorna seu nome de exibição.
    switch (categoria) {
        case "alimentacao":
            return "Alimentação";

        case "transporte":
            return "Transporte";

        case "lazer":
            return "Lazer";

        case "moradia":
            return "Moradia";

        default:
            return categoria;
    }
}
export function matrizCategoriaMes(
    despesas: Despesa[]
): number[][] {
    throw new Error("não implementado");
}