//FILTROS PARA POKEMON
/*
INTERVALO NIVELES (ENTRE X E Y)
SHINY (?)
ATRIBUTO
VARIACION
CON DESCUENTO

*/

import { getPokemonArray } from "./getArrayData";
import { getPokemon } from "./getPokemon";
import { getPosiblesIdsDe } from "./pokeapiWrapper";
import { intersectSets } from "./utils";


interface Filtros {
    atributo1: any,
    atributo2?: any,
    isShiny?: boolean,
    variacion?: number,
    descuento?: boolean,
    entreLosNiveles?: Array<any>
}

export async function getFilteredPokemon(filtros: Filtros) {
    const ids = await getPokemonIdsByAtributos(filtros.atributo1, filtros.atributo2);
    const pokemonPromises = ids.map((id: string) => getPokemon(id));
    const pokemons = await Promise.all(pokemonPromises);
    return pokemons;
}

async function getPokemonIdsByAtributos(atributo1: any, atributo2?: any): Promise<Array<string>> {

    const atPrincipalPokemons = await getPosiblesIdsDe(atributo1);
    if (atributo2) {
        const atSecundarioPokemons = await getPosiblesIdsDe(atributo2);

        const set1 = new Set(atPrincipalPokemons.map((n: number) => n.toString()));
        const set2 = new Set(atSecundarioPokemons.map((n: number) => n.toString()));

        const interseccion = intersectSets(set1, set2)
        return Array.from(interseccion);
    }

    return atPrincipalPokemons.map((id: number) => id.toString());

}