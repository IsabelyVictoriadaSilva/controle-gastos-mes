// Importa o modelo de despesa
import type { Despesa } from "./tipos.js";

// Define a função que será implementada depois dos testes
export function adicionarDespesa(
    despesas: Despesa[],
    nova: Despesa
): Despesa[] {
    if (nova.valor <= 0) {
        throw new Error("O valor deve ser maior que zero");
    }

    if (nova.mes < 1 || nova.mes > 12) {
        throw new Error("O mês deve estar entre 1 e 12");
    }

    return [...despesas, nova];
}

export function removerDespesa(
    despesas: Despesa[],
    id: number
): Despesa[] {
    return despesas.filter((despesa) => despesa.id !== id);

    // filter percorre a lista de despesas e cria uma nova lista.
    // despesa.id !== id vai manter todas as despesas que o id seja diferente do id passado como parâmetro
}

export function despesasDaCategoria(
    despesas: Despesa[],
    categoria: string
): Despesa[] {
   return despesas.filter((despesa) => despesa.categoria === categoria);
  // Filtra as despesas pela categoria informada e retorna um novo array com as despesas encontradas.
}   

export function totalGasto(
    despesas: Despesa[]
): number {
    throw new Error("não implementado");
}