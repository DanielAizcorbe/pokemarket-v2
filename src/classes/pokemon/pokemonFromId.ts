import { getPokemonById } from "app/services/pokeapi";
import { minimoNivelExistencia } from "app/services/pokemon/evolucionados/ids-filtrados/idsFiltradosPorIds";
import { getPokedexDescription } from "./utils";
import { getTypos } from "./Tags";
import { Pokemon } from "./Pokemon";

export async function pokemonFromId(id: number): Promise<Pokemon> {

    const pokemonData = await getPokemonById(id);
    const minimoNivelposible = await minimoNivelExistencia(id);
    const gameDescription = await getPokedexDescription(pokemonData);
    const types = getTypos(pokemonData);

    const pokemon = new Pokemon(
        pokemonData.id.toString(),
        pokemonData.name,
        pokemonData.sprites.back_default,
        pokemonData.sprites.front_default,
        pokemonData.sprites.back_shiny,
        pokemonData.sprites.front_shiny,
        minimoNivelposible,
        gameDescription,
        types
    )
    return pokemon;
}