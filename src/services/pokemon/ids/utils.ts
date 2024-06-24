import { MAX_ID_POKEMON } from "app/services/typos";

export function getInterseccion<T>(list1: T[], list2: T[]): T[] {
    const interseccion = list1.filter(e => list2.includes(e));
    return interseccion;
}

const pokemonUrlRegex = /\/pokemon\/(\d+)/;

export const getIdFromUrl = (url: string): number => {
    const id = url.match(pokemonUrlRegex);
    if (id) {
        return parseInt(id[1]);
    }
    return MAX_ID_POKEMON + 1;
}
