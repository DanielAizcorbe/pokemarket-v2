import { getPokemonById } from "app/services/pokeapi";
import { minimoNivelExistencia } from "app/services/pokemon/evolucionados/ids-filtrados/idsFiltradosPorIds";
import { getMovimientos, getPokedexDescription } from "./utils";

export class Pokemon {
    id: string;
    nombre: string;
    spriteBackDefault: string;
    spriteFrontDefault: string;
    spriteBackShiny: string;
    spriteFrontShiny: string;
    minLevelExistencia: number;
    movimientosQueAprende: string[];
    pokedexDescripcion: string;

    constructor(id: string,
        nombre: string,
        spriteBackDefault: string,
        spriteFrontDefault: string,
        spriteBackShiny: string,
        spriteFrontShiny: string,
        minLevelExistencia: number,
        movimientosQueAprende: string[],
        pokedexDescripcion: string
    ) {
        this.id = id;
        this.nombre = nombre;
        this.spriteBackDefault = spriteBackDefault;
        this.spriteBackShiny = spriteBackShiny;
        this.spriteFrontDefault = spriteFrontDefault;
        this.spriteFrontShiny = spriteFrontShiny;
        this.minLevelExistencia = minLevelExistencia;
        this.movimientosQueAprende = movimientosQueAprende;
        this.pokedexDescripcion = pokedexDescripcion;
    }

    getImage(shiny: boolean): string {
        return shiny ? this.spriteFrontShiny : this.spriteFrontDefault;
    }

    imagenes(shiny: boolean): Array<string> {
        const imagenesShiny = [this.spriteFrontShiny, this.spriteBackShiny];
        const imagenesDefault = [this.spriteFrontDefault, this.spriteBackDefault];
        return shiny ? imagenesShiny : imagenesDefault;
    }

}

export async function pokemonFromId(id: number): Promise<Pokemon> {

    const pokemonData = await getPokemonById(id);
    const minimoNivelposible = await minimoNivelExistencia(id);
    const movimientosQueAprende = getMovimientos(pokemonData);
    const pokedexDescription = await getPokedexDescription(pokemonData);

    const pokemon = new Pokemon(
        pokemonData.id,
        pokemonData.name,
        pokemonData.sprites.back_default,
        pokemonData.sprites.front_default,
        pokemonData.sprites.back_shiny,
        pokemonData.sprites.front_shiny,
        minimoNivelposible,
        movimientosQueAprende,
        pokedexDescription
    )
    return pokemon;
}