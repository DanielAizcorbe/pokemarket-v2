import { getRandomNumber } from "app/data/generadores/utils";
import { VariantePokemon } from "./VariantePokemon";

export class CalculadoraPrecioPokemon {

    private precioPorNivel = (nivel: number): number => {
        if (nivel < 15) {
            return getRandomNumber(20, 27);
        } else if (nivel < 30) {
            return getRandomNumber(35, 42);
        } else if (nivel < 50) {
            return getRandomNumber(90, 100)
        } else if (nivel < 70) {
            return getRandomNumber(120, 140);
        } else {
            return getRandomNumber(160, 200);
        }
    }

    precio(nivel: number, variante: VariantePokemon, isShiny?: boolean): number {

        const precioBase = this.precioPorNivel(nivel)*1000;
        const precioPorVariante = variante.revalorizar(precioBase);
        const precioCompleto = isShiny ? precioPorVariante * 2 : precioPorVariante;

        return Math.round(precioCompleto);
    }
}