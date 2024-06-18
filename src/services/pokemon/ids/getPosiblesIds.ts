import { getFromPokeApi } from "app/services/pokeapi";
import { getIdFromUrl } from "./utils";
import { Atributos, Categoria, MAX_ID_POKEMON } from "app/services/typos";

 export async function getPosiblesIdsDe(atributo: Atributos): Promise<Array<number>> {

    const typeData = await getFromPokeApi(Categoria.TYPE_ENDPOINT, atributo);
    console.log(typeData);
    
    const pokemonUrls = typeData
        .pokemon
        .map(p => p.pokemon.url);

    const ids = pokemonUrls
        .map((url: string) => getIdFromUrl(url))
        .filter((id: number) => id < MAX_ID_POKEMON);

    return ids;
}

