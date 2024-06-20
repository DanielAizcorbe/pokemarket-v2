import { Atributos } from "app/services/typos";

export interface Tag {
    nombre: string,
    textColor: string,
    borderColor: string,
    bgColor: string,

}

export function getTypos(pokemonData: any): Atributos[] {
    const typos = pokemonData.types.map(t => t.type.name);
    return typos;
}