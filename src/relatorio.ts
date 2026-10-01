import type { Despesa } from "./tipos.js";
import { CATEGORIAS } from "./tipos.js";
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
    const matriz: number[][] = [];

// Cria uma linha para cada categoria
for (let i = 0; i < CATEGORIAS.length; i++) {
    const linha: number[] = [];

    // Cria 12 colunas, uma para cada mês, começando com zero
    for (let mes = 0; mes < 12; mes++) {
        linha.push(0);
    }

    matriz.push(linha);
}

// Percorre todas as despesas
for (let i = 0; i < despesas.length; i++) {
    const despesa = despesas[i];

    // Procura a linha correspondente à categoria da despesa
    for (let categoria = 0; categoria < CATEGORIAS.length; categoria++) {
        if (despesa.categoria === CATEGORIAS[categoria]) {

            // mes - 1 porque janeiro (mês 1) fica na posição 0
            matriz[categoria][despesa.mes - 1] += despesa.valor;
        }
    }
}

return matriz;
}

export function formatarRelatorio(
    despesas: Despesa[]
): string {
    throw new Error("não implementado");
}