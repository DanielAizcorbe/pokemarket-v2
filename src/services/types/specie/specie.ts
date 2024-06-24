import { DefaultData, Url } from "../genericos";
import { FlavorTextData, NameData } from "./utils";

export interface PokemonSpecie {
    name: string,
    names: NameData[],
    flavor_text_entries: FlavorTextData[],
    evolution_chain: Url,
    evolves_from_species: DefaultData
}
