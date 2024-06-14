import { getSpecie } from './getPokemon';
const POKEAPI_URL = "https://pokeapi.co/api/v2/";

export enum Categoria {
    POKEMON_ENDPOINT = "pokemon/",
    MOVIMIENTO_ENDPOINT = "move/",
    ITEM_ENDPOINT = "item/",
    MT_MO_ENDPOINT = "machine/",
    TYPE_ENDPOINT = "type/",
    SPECIES_ENDPOINT = "pokemon-species/",
}

const VERSION_DATA = "emerald"

export const LENGUAJE_DATA = "es"

export const MAX_ID_POKEMON = 151

export const getFromPokeApi = async (category: Categoria, id: string, noCache?: boolean) => {
    //console.log("category: ",category," id:",id);
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

export async function puedeEvolucionar(pokemonId: string): Promise<boolean> {
    const specie = await getSpecie(pokemonId);
    const nombre = specie.name;
    const evoChain = await rawFetch(specie.evolution_chain.url);
    let eslabonEvolucion = evoChain.chain
    while (eslabonEvolucion.evolves_to.length > 0) {
        eslabonEvolucion = eslabonEvolucion.evolves_to[0];
    }
    return nombre !== eslabonEvolucion.species.name;
}

const getEvoObject = (data) => {
    return {
        name: data.species.name,
        evoluciones: data.evolves_to,
        evolucionaAlNivel: data.evolution_details[0].min_level || 5
    }
}

export async function puedeExistirAlNivel(pokemonId: string, nivel: number) {
    
    const specie = await getSpecie(pokemonId);
    const evoChain = await rawFetch(specie.evolution_chain.url);
    const pokemonName = specie.name
    //console.log(`\n${pokemonName} proceso`)
    // pokemons que no tienen evoluciones (legendarios, miticos, etc)
    //console.log(evoChain.chain.evolves_to);
    
    if (evoChain.chain.evolves_to.length === 0) {
        //console.log(`${pokemonName} no tiene evoluciones`);
        return true;
    }

    // pokemon sin evolucionar (primera forma)
    if (evoChain.chain.species.name === pokemonName) {
        //console.log(`${pokemonName} es primera forma`);
        return true;
    }

    // pokemons que tienen multiples evoluciones posibles
    const eslabonEvolucion = evoChain.chain.evolves_to;
    const evoluciones = eslabonEvolucion.map(e => getEvoObject(e));
    let result = evoluciones.filter(e => e.name === pokemonName)
    //console.log("encontrado:",result);
    
    if(result.length === 0) {
        //console.log(`${pokemonName} no esta en esta cadena`);
        const siguientesEvoluciones = evoluciones.flatMap(e => e.evoluciones)
        result = siguientesEvoluciones.map(e1 => getEvoObject(e1)).filter(e2 => e2.name === pokemonName)[0];
        //console.log(lastEvo[0]);
        //console.log(result);
    } else {
        result = result[0]
    }
    //console.log(`${pokemonName} esta disponible a partir del nivel ${result.evolucionaAlNivel}`);
    
    //console.groupEnd();
    return result.evolucionaAlNivel <= nivel  
}
