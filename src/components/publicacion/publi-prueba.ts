import { ArtPokemonBuilder } from "app/classes/articulo/builders/ArtPokemonBuilder";
import { pokemonFromId } from "app/classes/pokemon/Pokemon";
import { PublicacionBuilder } from "app/classes/publicacion/PublicacionBuilder";

export async function publiPrueba() {
    const pokemon = await pokemonFromId(6);
    const artBuilder = new ArtPokemonBuilder(pokemon);
    const publiBuilder = new PublicacionBuilder(artBuilder.build());
    return publiBuilder.build();
}