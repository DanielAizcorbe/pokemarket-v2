import { estaEnFormalFinal } from "./getPokemonEvolucionados";

export async function idsPokemonEvolucionados(ids: number[]) {
    const idsEvolucionados = [];
    for (let index = 0; index < ids.length; index++) {
        const formaFinal = await estaEnFormalFinal(ids[index]);
        if (formaFinal) {
            idsEvolucionados.push(ids[index]);
        }
    }
    return idsEvolucionados;
}