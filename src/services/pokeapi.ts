import { Categoria, POKEAPI_URL } from "./typos";

export const getFromPokeApi = async (category: Categoria, id: string, noCache?: boolean) => {
    const response = await fetch(`${POKEAPI_URL}${category}${id}`, { cache: noCache ? "no-cache" : "default" });
    const data = await response.json();
    return data;
}

export const rawFetch = async (url: string) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

export const getPokemonById = async (id: number) => {
    const pokemon = await getFromPokeApi(Categoria.POKEMON_ENDPOINT, id.toString());
    return pokemon;
}

export const getPokemonByName = async (name: string) => {
    const pokemon = await getFromPokeApi(Categoria.POKEMON_ENDPOINT, name);
    return pokemon;
}

export async function getSpecie(pokemonId: string) {
    
    const specie = await getFromPokeApi(Categoria.SPECIES_ENDPOINT, pokemonId);
    return specie;
}
