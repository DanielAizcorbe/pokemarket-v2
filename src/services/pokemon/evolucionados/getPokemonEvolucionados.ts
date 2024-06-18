import { puedeEvolucionar } from "./utils";

export async function estaEnFormalFinal(id: number) {
    const evoluciona = await puedeEvolucionar(id.toString());
    return !evoluciona;
}