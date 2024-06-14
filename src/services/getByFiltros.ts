//FILTROS PARA POKEMON
/*
INTERVALO NIVELES (ENTRE X E Y)
SHINY (?)
ATRIBUTO
VARIACION
CON DESCUENTO

*/

import { getPokemon } from "./getPokemon";
import { puedeEvolucionar, puedeExistirAlNivel } from "./pokeapi";
import { getPosiblesIdsDe } from "./pokeapiWrapper";
import { intersectSets } from "./utils";


export interface Filtros {
    atributo1: any,
    atributo2?: any,
    variacion?: number,
    descuento?: boolean,
    maxLevel?: number,
    minLevel?: number,
    evolucionCompleta?: boolean
}

const estaEnFormaFinal = async (id: string) => {
    const response = await puedeEvolucionar(id);
    return !response;
}

export async function getFilteredPokemon(filtros: Filtros) {
    let ids = await getPokemonIdsByAtributos(filtros.atributo1, filtros.atributo2);

    if (filtros.evolucionCompleta) {
        const promises = ids.map(estaEnFormaFinal);
        const resolvedIds = await Promise.all(promises);
        
        const idsFiltrados = [];
        for (let i = 0; i < resolvedIds.length; i++) {
            if (resolvedIds[i]) {
                idsFiltrados.push(ids[i]);
            }
        }
        console.log(idsFiltrados);
        
        ids = idsFiltrados;
    }


    if (filtros.minLevel) {
        let idsAux = await Promise.all(ids.filter((id: string) => puedeExistirAlNivel(id, filtros.minLevel || 5)));
        ids = idsAux;
    }

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

