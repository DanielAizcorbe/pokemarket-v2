import { DefaultData } from "../genericos"

export interface Type {
    slot: number,
    type: DefaultData
}

export interface Sprites {
    back_default: string,
    back_female: string,
    back_shiny: string,
    back_shiny_female: string,
    front_default: string,
    front_female: string,
    front_shiny: string,
    front_shiny_female: string,
}

export interface Move {
    move: DefaultData,
    version_group_details: MoveDetails[]
}

export interface MoveDetails {
    level_learned_at: number,
    move_learn_method: DefaultData,
    version_group: DefaultData
}