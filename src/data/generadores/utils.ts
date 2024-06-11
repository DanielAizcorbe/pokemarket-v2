import { TipoArticulo } from "app/services/getPokemon";
import { LENGUAJE_DATA, MAX_ID_POKEMON } from "app/services/pokeapi";

function getRandomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomBoolean(porcentajeVerdadero: number) {
    return Math.random() < 0.01 * porcentajeVerdadero;
}

export const getRandomPokemonId = () => {
    return getRandomNumber(1, MAX_ID_POKEMON);
}


export const estaEnLenguage = (descripcion: any) => {
    return descripcion.language.name === LENGUAJE_DATA;
}

export const capitalize = (palabra: string) => {
    return palabra.charAt(0).toUpperCase() + palabra.slice(1);
}

export const getCantidadPara = (tipoArticulo: TipoArticulo) => {

    switch (tipoArticulo) {
        case TipoArticulo.POKEMON: return getRandomNumber(1, 2);
        case TipoArticulo.POKEBALL: return getRandomNumber(5, 20);
        case TipoArticulo.POCION: return getRandomNumber(5, 20);
        default: return 1;
    }
}

export const getOneOf = (lista: Array<any>) => {
    return lista[getRandomNumber(0, lista.length - 1)];
}

export const getDescuento = () => {
    return getRandomNumber(10, 20);
}

export const getPrecio = (tipo: TipoArticulo) => {
    switch (tipo) {
        case TipoArticulo.POKEMON: return getRandomNumber(20, 90) * 1000;
        default: return 10000;
    }
}

export const getPrecioDescuento = (precioOriginal: number, descuento: number) => {
    return Math.floor(precioOriginal - (precioOriginal * descuento / 100))
}

export const getImagen = (data: any, tipo: TipoArticulo) => {
    switch (tipo) {
        case TipoArticulo.POKEMON: return data.sprites.front_default;
        default: return data.sprites.default;
    }
}

