// cria um tipo para definir quais categorias podem ser usadas
export type Categoria =
  | "alimentacao"
  | "transporte"
  | "lazer"
  | "moradia";

  // Cria um molde para definir como uma despesa deve ser estruturada
  export interface Despesa {
  readonly id: number; // Identificador da despesa
  descricao: string;
  valor: number;
  categoria: Categoria; // Só aceita uma das categorias definidas acima
  mes: number;
  observacao?: string; // uma despesa pode não ter observação
}

// Guarda todas as categorias na ordem que será usada no relatório
export const CATEGORIAS: Categoria[] = [
  "alimentacao",
  "transporte",
  "lazer",
  "moradia"
];