import { estaEnLenguage, getOneOf } from "app/data/generadores/utils";
import { TipoArticulo } from "./getPokemon";

const getPokemonDescription = () => {
    const variaciones = ["con IVs perfectos", "para crianza", "para competitivo", "¡como compañero!", "para concursos"]
    const descripcion = getOneOf(variaciones);
    return descripcion;
}
export function getSprite(data: any) {
    return data.sprites.front_default || data.sprites.default;
}

export function getName(data: any, tipo: TipoArticulo) {
    switch (tipo) {
        case TipoArticulo.POKEMON: return data.name;
        default: return data.names.filter(n => estaEnLenguage(n))[0].name
    }
}

export function getDescripcion(data: any, tipo: TipoArticulo) {
    switch (tipo) {
        case TipoArticulo.POKEMON: return getPokemonDescription();
        default: return "Articulo";
    }

}