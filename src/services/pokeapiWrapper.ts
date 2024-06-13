import { MAX_ID_POKEMON } from 'app/services/pokeapi';
import { Categoria, getFromPokeApi } from "./pokeapi";

const pokemonUrlRegex = /\/pokemon\/(\d+)/;

export async function getPosiblesIdsDe(type: any): Promise<Array<number>> {

    const types = await getFromPokeApi(Categoria.TYPE_ENDPOINT,"?limit=30");
    
    const typeNames = types.results.map((t: any) => t.name);
    //console.log(typeNames);
    
    if (!typeNames.some((n: string) => n === type.id)) {
        throw new Error(`tipo invalido: ${type.id}`);
    }

    const typeData = await getFromPokeApi(Categoria.TYPE_ENDPOINT, type.id);
    //console.log(typeData);
    
    const pokemonUrls = typeData.pokemon.map(p => p.pokemon.url);
    //console.log(pokemonUrls);
    
    const ids = pokemonUrls.map((url: string) => getIdFromUrl(url)).filter((id: number) => id < MAX_ID_POKEMON);
    //console.log(ids);
    return ids;
}

const getIdFromUrl = (url: string): number => {
    const id = url.match(pokemonUrlRegex);
    if (id) {
        return parseInt(id[1]);
    }
    return MAX_ID_POKEMON + 1;
}

