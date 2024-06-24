import { DefaultData } from "app/services/types/genericos"

export interface EvolutionChainData {
    id: number,
    chain: ChainData
}

export interface ChainData {
    evolution_details: EvoDetail[]
    evolves_to: ChainData[],
    is_baby: boolean,
    species: DefaultData
}

export interface EvoDetail {
    min_level: number | null,
    trigger: DefaultData
}