const POKEAPI_URL = "https://pokeapi.co/api/v2/";

const POKEMON_ENDPOINT = "pokemon/";
const MOVIMIENTO_ENDPOINT = "move/";
const ITEM_ENDPOINT = "item/"
const MT_MO_ENDPOINT = "machine/";

export enum Categoria {
    POKEMON_ENDPOINT = "pokemon/",
    MOVIMIENTO_ENDPOINT = "move/",
    ITEM_ENDPOINT = "item/",
    MT_MO_ENDPOINT = "machine/",
}

const VERSION_DATA = "emerald"
export const LENGUAJE_DATA = "es"

const MAX_ID_POKEMON = 151

export const getFromPokeApi = async (category : Categoria, id: number ) => {
    if(id > MAX_ID_POKEMON) {
        throw new Error("Límite excedido");
    }
    const response = await fetch(`${POKEAPI_URL}${category}${id}`);
    const data = await response.json();
    return data;
}
