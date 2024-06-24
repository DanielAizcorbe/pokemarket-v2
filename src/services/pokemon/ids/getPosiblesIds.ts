import { getFromPokeApi } from "app/services/pokeapi";
import { getIdFromUrl } from "./utils";
import { Atributo, Categoria, MAX_ID_POKEMON } from "app/services/typos";
import { DefaultData } from "app/services/types/genericos";

interface TypeData {
    pokemon: Pokemon[],
}

interface Pokemon {
    pokemon: DefaultData,
    slot: number
}

export async function getPosiblesIdsDe(atributo: Atributo): Promise<number[]> {

    const typeData: TypeData = await getFromPokeApi(Categoria.TYPE_ENDPOINT, atributo);

    const pokemonUrls = typeData
        .pokemon
        .map(p => p.pokemon.url);

    const ids: number[] = pokemonUrls
        .map(url => getIdFromUrl(url))
        .filter(id => id < MAX_ID_POKEMON);

    return ids;
}

