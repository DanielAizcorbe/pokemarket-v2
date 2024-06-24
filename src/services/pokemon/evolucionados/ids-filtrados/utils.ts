import { ChainData, EvoDetail } from "./type";

export interface Etapa {
    pokemon: string,
    anterior: string,
    minLevel: number,
}

export function primerEtapa(chainData: ChainData) {
    const pokemon: Etapa = {
        anterior: "",
        pokemon: chainData.species.name,
        minLevel: 5
    }
    return pokemon;
}

export function allSiguientesEtapas(chainData: ChainData, anterior: string) {
    const posiblesEvoluciones = chainData.evolves_to;

    const siguientesEtapas = posiblesEvoluciones.map(s => etapa(s, anterior));
    return siguientesEtapas;
}

export function allTercerasEtapas(chainData: ChainData) {
    const tercerasEtapas = chainData.evolves_to
        .flatMap(e => allSiguientesEtapas(e, e.species.name))
    return tercerasEtapas;
}

function etapa(data: ChainData, anterior: string) {

    const detallesEvolucion = data.evolution_details;

    const etapa: Etapa = {
        anterior: anterior,
        pokemon: data.species.name,
        minLevel: minLevel(detallesEvolucion)
    }
    return etapa;
}

function minLevel(detallesEvolucion: EvoDetail[]): number {
    const detallesDeNiveles = detallesEvolucion.filter(e => e.min_level !== null);

    const posiblesNiveles: number[] = detallesDeNiveles.map((e: any) => e.min_level);

    const menorNivelPosible = Math.min(...posiblesNiveles) || 0;

    return menorNivelPosible;
}