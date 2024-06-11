import { getRandomPokemonId } from "app/data/generadores/utils"
import { getPokemon } from "./getPokemon"

export const getPokemonArray = async (size: number) => {
    const ids = Array.from({ length: size }).map(i => getRandomPokemonId())
    const promises = ids.map(id => getPokemon(id));
    const pokemons = await Promise.all(promises);
    return pokemons;
}