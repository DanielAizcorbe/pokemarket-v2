import { getSpecie, rawFetch } from "app/services/pokeapi";
import { Etapa, allSiguientesEtapas, allTercerasEtapas, primerEtapa } from "./utils";
import { EvolutionChainData } from "./type";

export async function filtrarPorNivel(ids: Array<number>, max: number): Promise<number[]> {
    const result = [];
    const items = ids
    for (let index = 0; index < items.length; index++) {
        const puedeExistir = await puedeExistirAlNivel(items[index], max);
        if (puedeExistir) {
            result.push(items[index]);
        }
    }
    return result;
}

async function puedeExistirAlNivel(pokemonId: number, maxLevel: number): Promise<boolean> {
    const minimoNivelPosible = await minimoNivelExistencia(pokemonId);
    return minimoNivelPosible <= maxLevel;
}

export async function minimoNivelExistencia(pokemonId: number): Promise<number> {
    const specie = await getSpecie(pokemonId.toString());
    const evoChain: EvolutionChainData = await rawFetch(specie.evolution_chain.url);
    const cadenaEvolutiva = evoChain.chain;
    const pokemonBuscado = specie.name;

    const formaBase = primerEtapa(cadenaEvolutiva);

    const segundasEtapas = allSiguientesEtapas(cadenaEvolutiva, formaBase.pokemon);

    const tercerasEtapas = allTercerasEtapas(cadenaEvolutiva);
    const etapas = [formaBase, ...segundasEtapas, ...tercerasEtapas].flat();

    const buscado: Etapa = etapas.filter(e => e.pokemon === pokemonBuscado)[0];
    let minLevelPosible = buscado.minLevel;
    if (buscado.minLevel === 0) {
        const anterior = etapas.filter(e => e.pokemon === buscado.anterior)[0];
        minLevelPosible = anterior.minLevel
    }

    return minLevelPosible;
}


