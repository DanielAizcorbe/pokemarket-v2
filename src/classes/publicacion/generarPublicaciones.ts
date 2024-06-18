import { Pokemon } from "../pokemon/Pokemon";
import { VariantePokemon } from "../pokemon/VariantePokemon";
import { generarArticulos, generarPublicaciones } from "./utils";

interface Config {
    allShinys?: boolean,
    variante?: VariantePokemon,
    maxLevel: number,
    minLevel: number
}

export function generarPublicacionesPokemon(pokemons: Array<Pokemon>, config: Config, allDescuento?: boolean) {
    const articulosPokemon = generarArticulos(pokemons, config);
    const publicaciones = generarPublicaciones(articulosPokemon, allDescuento);
    return publicaciones;
}
