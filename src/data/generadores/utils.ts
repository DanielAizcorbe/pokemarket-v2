import { LENGUAJE_DATA, MAX_ID_POKEMON } from "app/services/typos";

export function getRandomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getRandomBoolean(porcentajeVerdadero: number) {
    return Math.random() < 0.01 * porcentajeVerdadero;
}

export const getRandomLevel = (min: number, max: number) => {

    return getRandomNumber(Math.max(min, 5), Math.min(max, 100));
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

export const getOneOf = <T>(lista: Array<T>): T => {
    return lista[getRandomNumber(0, lista.length - 1)];
}

export const getDescuento = (withDiscount?: boolean) => {
    return (withDiscount || getRandomBoolean(20) ? getRandomNumber(10, 20) : 0);
}

export const getPrecioDescuento = (precioOriginal: number, descuento: number) => {
    return Math.floor(precioOriginal - (precioOriginal * descuento / 100))
}


