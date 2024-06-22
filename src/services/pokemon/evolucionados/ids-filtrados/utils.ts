export interface Etapa {
    pokemon: string,
    anterior: string,
    minLevel: number,
}

export function primerEtapa(chainData: any) {
    const pokemon: Etapa = {
        anterior: "",
        pokemon: chainData.species.name,
        minLevel: 5
    }
    return pokemon;
}

export function allSiguientesEtapas(chainData: any, anterior: string) {
    const posiblesEvoluciones = chainData.evolves_to;

    const siguientesEtapas = posiblesEvoluciones.map((s: any) => etapa(s, anterior));
    return siguientesEtapas;
}

export function allTercerasEtapas(chainData: any) {
    const tercerasEtapas = chainData.evolves_to.flatMap((e: any) => allSiguientesEtapas(e, e.species.name))
    return tercerasEtapas;
}

function etapa(data: any, anterior: string) {

    const detallesEvolucion = data.evolution_details;

    const etapa: Etapa = {
        anterior: anterior,
        pokemon: data.species.name,
        minLevel: minLevel(detallesEvolucion)
    }
    return etapa;
}

function minLevel(detallesEvolucion: any): number {
    const detallesDeNiveles = detallesEvolucion.filter((e: any) => e.min_level !== null);

    const posiblesNiveles: number[] = detallesDeNiveles.map((e: any) => e.min_level);

    const menorNivelPosible = Math.min(...posiblesNiveles) || 0;

    return menorNivelPosible;
}