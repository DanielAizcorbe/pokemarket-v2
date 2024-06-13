const POKEAPI_URL = "https://pokeapi.co/api/v2/";

export enum Categoria {
    POKEMON_ENDPOINT = "pokemon/",
    MOVIMIENTO_ENDPOINT = "move/",
    ITEM_ENDPOINT = "item/",
    MT_MO_ENDPOINT = "machine/",
    TYPE_ENDPOINT = "type/"
}

const VERSION_DATA = "emerald"

export const LENGUAJE_DATA = "es"

export const MAX_ID_POKEMON = 151

export const getFromPokeApi = async (category : Categoria, id: string, noCache?: boolean ) => {
    //console.log("category: ",category," id:",id);
    const response = await fetch(`${POKEAPI_URL}${category}${id}`, {cache: noCache ? "no-cache" : "default"});
    const data = await response.json();
    return data;
}
