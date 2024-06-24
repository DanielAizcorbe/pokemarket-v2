import { getDescuento, getRandomBoolean, getRandomNumber } from "app/data/generadores/utils";
import { ArtPokemonBuilder } from "../articulo/builders/ArtPokemonBuilder";
import { Pokemon } from "../pokemon/Pokemon";
import { VariantePokemon } from "../pokemon/VariantePokemon";
import { PublicacionBuilder } from "./PublicacionBuilder";
import { ArticuloPokemon } from "../articulo/ArticuloPokemon";
import { Publicacion } from "./Publicacion";

interface Config {
    allShiny?: boolean,
    variante?: VariantePokemon,
    maxLevel: number,
    minLevel: number
}

export function generarArticulos(pokemons: Array<Pokemon>, config: Config): ArticuloPokemon[] {
    const articulos = pokemons.map(p => generarArticulo(p, config))
    return articulos;
}

function generarArticulo(pokemon: Pokemon, config: Config): ArticuloPokemon {

    const artBuilder = new ArtPokemonBuilder(pokemon);
    const minLevel = Math.max(pokemon.getMinLevel(), config.minLevel);
    const nivel = getRandomNumber(minLevel, config.maxLevel);
    artBuilder.setNivel(nivel);
    if (config.variante) {
        artBuilder.setVariante(config.variante);
    }
    if (config.allShiny) {
        artBuilder.setShiny();
    }
    return artBuilder.build();
}

export function generarPublicaciones(articulos: Array<ArticuloPokemon>, allDescuento?: boolean): Publicacion[] {
    const publicaciones = articulos.map(a => generarPublicacion(a, allDescuento));
    return publicaciones;
}

function generarPublicacion(articulo: ArticuloPokemon, descuento?: boolean): Publicacion {
    const publiBuilder = new PublicacionBuilder(articulo);
    publiBuilder.setDescuento(getDescuento(descuento || getRandomBoolean(20)))
    return publiBuilder.build();
}