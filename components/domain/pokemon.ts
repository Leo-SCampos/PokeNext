// src/domain/pokemon.ts

/**
 * 1. Interface que define a estrutura de dados do Pokémon
 * utilizada dentro da sua aplicação (Domínio).
 */
export interface Pokemon {
  id: number;
  name: string;
  types?: string[];
}

/**
 * 2. Tipagem para as propriedades de componentes que consomem essa entidade.
 */
export interface CardProps {
  pokemon: Pokemon;
}

/**
 * 3. Regras de Negócio / Métodos de Domínio
 * Centraliza funções utilitárias para evitar repetição de código.
 */

// Formata o ID numérico para o padrão de exibição da Pokédex (ex: 1 vira #001)
export function formatPokemonId(id: number): string {
  return `#${String(id).padStart(3, '0')}`;
}

// Centraliza a geração da URL da imagem oficial para evitar URLs quebradas no código
export function getPokemonImageUrl(id: number): string {
  return `https://githubusercontent.com/${id}.png`;
}
