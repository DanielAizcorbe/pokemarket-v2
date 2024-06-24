import { PokemonData } from "app/services/types/pokemon/pokemonData";
import { Type } from "app/services/types/pokemon/utils";
import { Atributo } from "app/services/typos";

function getAtributo(tipo: Type): Atributo {
    const nombre = tipo.type.name
    const valoresAtributos = Object.values(Atributo);
    const atributoEncontrado = valoresAtributos.find(valor => valor === nombre);
    return atributoEncontrado || Atributo.DESCONOCIDO;
}

export function getTypos(pokemonData: PokemonData): Atributo[] {
    const typos = pokemonData.types.map(t => getAtributo(t));
    return typos;
}