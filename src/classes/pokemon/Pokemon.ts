import { getPokemonById } from "app/services/pokeapi";
import { minimoNivelExistencia } from "app/services/pokemon/evolucionados/ids-filtrados/idsFiltradosPorIds";

export class Pokemon {
    id: string;
    nombre: string;
    spriteBackDefault: string;
    spriteFrontDefault: string;
    spriteBackShiny: string;
    spriteFrontShiny: string;
    minLevelExistencia: number;

    constructor(id: string, nombre: string, spriteBackDefault: string, spriteFrontDefault: string, spriteBackShiny: string, spriteFrontShiny: string, minLevelExistencia: number) {
        this.id = id;
        this.nombre = nombre;
        this.spriteBackDefault = spriteBackDefault;
        this.spriteBackShiny = spriteBackShiny;
        this.spriteFrontDefault = spriteFrontDefault;
        this.spriteFrontShiny = spriteFrontShiny;
        this.minLevelExistencia = minLevelExistencia;
    }

    getImage(shiny: boolean): string {
        return shiny ? this.spriteFrontShiny : this.spriteFrontDefault;
    }

}

export async function pokemonFromId(id: number): Promise<Pokemon> {

    const pokemonData = await getPokemonById(id);
    const minimoNivelposible = await minimoNivelExistencia(id);

    const pokemon = new Pokemon(
        pokemonData.id,
        pokemonData.name,
        pokemonData.sprites.back_default,
        pokemonData.sprites.front_default,
        pokemonData.sprites.back_shiny,
        pokemonData.sprites.front_shiny,
        minimoNivelposible
    )
    return pokemon;
}