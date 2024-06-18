import { getSpecie, rawFetch } from "app/services/pokeapi";

export async function puedeEvolucionar(pokemonId: string): Promise<boolean> {
    const specie = await getSpecie(pokemonId);
    const nombre = specie.name;
    const evoChain = await rawFetch(specie.evolution_chain.url);
    const nombreUltimaEvolucion = ultimaEvolucionDeLaCadena(evoChain.chain);
    return nombre !== nombreUltimaEvolucion;
}

function ultimaEvolucionDeLaCadena(chain: any): string {
    let eslabonEvolucion = chain
    while (eslabonEvolucion.evolves_to.length > 0) {
        eslabonEvolucion = eslabonEvolucion.evolves_to[0];
    }

    return eslabonEvolucion.species.name;
}