import { capitalize } from './../../data/generadores/utils';
import { Pokemon } from "../pokemon/Pokemon";
import { VariantePokemon } from "../pokemon/VariantePokemon";
import { CalculadoraPrecioPokemon } from "../pokemon/CalculadoraPrecioPokemon";
import { Atributo } from 'app/services/typos';

export class ArticuloPokemon {

    private pokemon: Pokemon;
    private isShiny: boolean;
    private variante: VariantePokemon;
    private nivel: number

    constructor(pokemon: Pokemon, variante: VariantePokemon, nivel: number, isShiny: boolean) {
        this.pokemon = pokemon;
        this.isShiny = isShiny;
        this.variante = variante;
        this.nivel = nivel;
    }

    descripcion(): string {
        return `${capitalize(this.pokemon.getNombre())} lvl ${this.nivel} ${this.isShiny ? "shiny" : ""} ${this.variante.getDescription()}`;
    }

    defaultSprite(): string {
        return this.pokemon.getImage(this.isShiny);
    }

    precioEstimado(): number {
        const calculador = new CalculadoraPrecioPokemon();
        return calculador.precio(this.nivel, this.variante, this.isShiny);
    }

    getImagenes() {
        return this.pokemon.imagenes(this.isShiny);
    }

    getGameDescription() {
        return this.pokemon.getGameDescription();
    }

    getTags(): Atributo[] {
        return this.pokemon.getAtributos();
    }

    shiny() {
        return this.isShiny
    }

    getNivel() {
        return this.nivel;
    }

    getVariante() {
        return this.variante;
    }

    getPokemonId(): string {
        return this.pokemon.getId();
    }
}