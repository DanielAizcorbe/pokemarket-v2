import { getSpecie } from "app/services/pokeapi";
import { VERSION_DATA } from "app/services/typos";

export function getMovimientos(pokemonData: any): string[] {

    const movimientos = pokemonData.moves;
    const movimientosDeLaVersionActual = movimientos.filter(m => esDeLaVersionActual(m));
    return movimientosDeLaVersionActual.map(m => m.move.name);

}

function esDeLaVersionActual(movimiento: any): boolean {
    const version = VERSION_DATA;
    return movimiento.version_group_details.some(m => m.version_group.name === version);
}

export async function getPokedexDescription(pokemonData: any):string {
    const specie = await getSpecie(pokemonData.name);
    const descripciones = specie.flavor_text_entries;
    const descripcionesEnEsp = descripciones.filter(d => d.language.name === "es");
    const descripcion = descripcionesEnEsp[0];

    return descripcion.flavor_Text;
}