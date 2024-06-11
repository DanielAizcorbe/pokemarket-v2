import { capitalize } from './../data/generadores/utils';
import { estaEnLenguage, getOneOf, getRandomLevel } from "app/data/generadores/utils";
import { TipoArticulo } from "./getPokemon";

const getPokemonDescription = (data: any) => {
    const variaciones = ["con IVs perfectos", "para crianza", "para competitivo", "¡como compañero!", "para concursos"]
    const variacion = getOneOf(variaciones);
    const level = getRandomLevel();
    const nombre = getName(data, TipoArticulo.POKEMON);
    const descripcion = `${nombre} lvl ${level} ${variacion}`
    return descripcion;
}
export function getSprite(data: any) {
    return data.sprites.front_default || data.sprites.default;
}

export function getName(data: any, tipo: TipoArticulo) {
    switch (tipo) {
        case TipoArticulo.POKEMON: return capitalize(data.name);
        default: return capitalize(data.names.filter(n => estaEnLenguage(n))[0].name)
    }
}

export function getDescripcion(data: any, tipo: TipoArticulo) {
    switch (tipo) {
        case TipoArticulo.POKEMON: return getPokemonDescription(data);
        default: return "Articulo";
    }

}