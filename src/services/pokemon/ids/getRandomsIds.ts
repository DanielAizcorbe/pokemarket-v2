import { getOneOf } from "app/data/generadores/utils";

export function getRandomsIds(size: number, ids: number[]): number[] {

    const idsRandom = [];
    for (let index = 0; index < size; index++) {
        idsRandom.push(getOneOf(ids));
    }
    return idsRandom;
}