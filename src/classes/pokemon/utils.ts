import { getSpecie } from "app/services/pokeapi";
import { PokemonData } from "app/services/types/pokemon/pokemonData";
import { FlavorTextData } from "app/services/types/specie/utils";
import { VERSION_DATA } from "app/services/typos";

function esDeLaVersionActual(descripcion: FlavorTextData): boolean {
    return descripcion.version.name === VERSION_DATA;
}

export async function getPokedexDescription(pokemonData: PokemonData): Promise<string> {
    const specie = await getSpecie(pokemonData.name);
    const descripciones = specie.flavor_text_entries;
    const descripcionesEnEsp = descripciones.filter(d=> esDeLaVersionActual(d));
    const descripcion = descripcionesEnEsp[0];
    return descripcion.flavor_text;
}
