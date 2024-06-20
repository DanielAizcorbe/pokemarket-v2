import { capitalize } from './../../data/generadores/utils';
import { Pokemon } from "../pokemon/Pokemon";
import { VariantePokemon } from "../pokemon/VariantePokemon";
import { iArticulo } from "./iArticulo";
import getId from "app/data/uuid";
import { CalculadoraPrecioPokemon } from "../pokemon/CalculadoraPrecioPokemon";

export class PokemonArticulo implements iArticulo {

    private id: string;
    private pokemon: Pokemon;
    private isShiny: boolean;
    private variante: VariantePokemon;
    private nivel: number

    constructor(pokemon: Pokemon, variante: VariantePokemon, nivel: number, isShiny: boolean) {
        this.id = getId();
        this.pokemon = pokemon;
        this.isShiny = isShiny;
        this.variante = variante;
        this.nivel = nivel;
    }

    descripcion(): string {
        return `${capitalize(this.pokemon.nombre)} lvl ${this.nivel} ${this.isShiny ? "shiny" : ""} ${this.variante.getDescription()}`;
    }

    defaultSprite(): string {
        return this.pokemon.getImage(this.isShiny);
    }

    precioEstimado(): number {
        const calculador = new CalculadoraPrecioPokemon();
        return calculador.precio(this.nivel, this.variante, this.isShiny);
    }

    getId(): string {
        return this.id;
    }

    getImagenes() {
        return this.pokemon.imagenes(this.isShiny);
    }

    getGameDescription() {
        return this.pokemon.getGameDescription();
    }

    getTags(): string[] {
        return this.pokemon.tags;
    }
}