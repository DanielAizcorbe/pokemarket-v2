import { Filtros, getFilteredPokemon } from "./getByFiltros";

export async function getRandomPokemons(size: number) {

    const filtros: Filtros = {
        maxLevel: 100,
        minLevel: 5,
        lenght:size,
        evolucionCompleta: true
    }

    const pokemons = await getFilteredPokemon(filtros);
    return pokemons;
}