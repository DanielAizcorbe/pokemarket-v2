import { DefaultData } from "../genericos"
import { Move, Sprites, Type } from "./utils"

export interface PokemonData {
    id: number,
    types: Type[]
    sprites: Sprites,
    species: DefaultData,
    name: string,
    moves: Move[],
}