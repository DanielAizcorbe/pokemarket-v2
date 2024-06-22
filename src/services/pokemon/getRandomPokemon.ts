import { getRandomBoolean } from "app/data/generadores/utils";
import { Filtros, getFilteredPokemon } from "./getByFiltros";

interface Levels {
    maxLevel?: number, 
    minLevel?: number
}

export async function getRandomPokemons(size: number, levels?: Levels, allDiscount?: boolean, evoCompleta?: boolean) {

    const filtros: Filtros = {
        maxLevel: levels?.maxLevel || 100,
        minLevel: levels?.minLevel || 5,
        lenght:size,
        evolucionCompleta: evoCompleta,
        descuento: allDiscount || getRandomBoolean(20)
    }

    const pokemons = await getFilteredPokemon(filtros);
    return pokemons;
}