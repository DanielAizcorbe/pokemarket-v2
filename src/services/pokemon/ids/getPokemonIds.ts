import { Atributo, MAX_ID_POKEMON } from "app/services/typos";
import { getPosiblesIdsDe } from "./getPosiblesIds";
import { getInterseccion } from "./utils";

function allPokemonIds(): Array<number> {
    return Array.from({ length: MAX_ID_POKEMON }, (_, i) => (i + 1));
}

/**Retorna todos los ids de pokemons que tengan lso atributos especificados
 * 
 * @param atributo1 Atributo principal del pokemon
 * @param atributo2 Atributo secundario del pokemon
 * @returns Promise<Array(string)>
 */
export async function getPokemonIdsPorAtributos(atributo1?: Atributo, atributo2?: Atributo) {

    if (!atributo1) {
        return allPokemonIds();
    }

    const idsAtributoPrincipal = await getPosiblesIdsDe(atributo1);

    if (!atributo2) {
        return idsAtributoPrincipal;
    }

    const idsAtributoSecundario = await getPosiblesIdsDe(atributo2);
    
    const interseccion = getInterseccion(idsAtributoPrincipal, idsAtributoSecundario);

    return interseccion;
}