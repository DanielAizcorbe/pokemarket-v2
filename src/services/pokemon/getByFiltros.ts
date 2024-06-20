import { Publicacion } from "app/classes/publicacion/Publicacion";
import { VariantePokemon } from "app/classes/pokemon/VariantePokemon";
import { getPokemonIdsPorAtributos } from "./ids/getPokemonIds";
import { idsPokemonEvolucionados } from "./evolucionados/idsPokemonEvolucionados";
import { filtrarPorNivel } from "./evolucionados/ids-filtrados/idsFiltradosPorIds";
import { generarPublicacionesPokemon } from "app/classes/publicacion/generarPublicaciones";
import { pokemonFromId } from "app/classes/pokemon/Pokemon";
import { getRandomsIds } from "./ids/getRandomsIds";
import { Atributos } from "../typos";

export interface Filtros {
    atributo1?: Atributos,
    atributo2?: Atributos,
    variante?: VariantePokemon,
    descuento?: boolean,
    maxLevel: number,
    minLevel: number,
    lenght: number
    evolucionCompleta?: boolean,
    allShiny?: boolean
}

export async function getFilteredPokemon(filtros: Filtros): Promise<Array<Publicacion>> {

    const ids = await getPokemonIdsPorAtributos(filtros.atributo1, filtros.atributo2);
    
    if (ids.length === 0) {
        return [];
    }
    
    const idsFiltradosPorEvolucion = await (filtros.evolucionCompleta ? idsPokemonEvolucionados(ids) : ids);

    const idsFiltradosPorNivel = await filtrarPorNivel(idsFiltradosPorEvolucion, filtros.maxLevel);

    const randomsIds = getRandomsIds(filtros.lenght, idsFiltradosPorNivel);


    const pokemonPromises = randomsIds.map(id => pokemonFromId(id));
    const pokemons = await Promise.all(pokemonPromises);
    const config = {
        maxLevel: filtros.maxLevel,
        minLevel: filtros.minLevel,
        allShiny: filtros.allShiny,
        variante: filtros.variante,
    }
    const publicaciones = generarPublicacionesPokemon(pokemons, config, filtros.descuento);

    return publicaciones;
}