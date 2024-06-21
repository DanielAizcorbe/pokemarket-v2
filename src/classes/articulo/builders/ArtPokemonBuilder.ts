import { Pokemon } from "app/classes/pokemon/Pokemon";
import { VariantePokemon, randomVariante } from "app/classes/pokemon/VariantePokemon";
import { getRandomLevel } from "app/data/generadores/utils";
import { ArticuloPokemon } from "../ArticuloPokemon";

export class ArtPokemonBuilder {

    private pokemon: Pokemon;
    private isShiny: boolean;
    private variante: VariantePokemon;
    private nivel: number;

    constructor(pokemon: Pokemon) {
        this.pokemon = pokemon;
        this.isShiny = false;
        this.nivel = getRandomLevel(5, 100);
        this.variante = randomVariante()
    }

    setShiny() {
        this.isShiny = true;
    }

    setNivel(nivel: number) {
        this.nivel = nivel;
    }

    setVariante(variante: VariantePokemon) {
        this.variante = variante;
    }

    build(): ArticuloPokemon {

        const articulo = new ArticuloPokemon(
            this.pokemon,
            this.variante,
            this.nivel,
            this.isShiny
        );

        return articulo;
    }
}