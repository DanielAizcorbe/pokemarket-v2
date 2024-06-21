import { getOneOf } from "app/data/generadores/utils";

export class VariantePokemon {

    private descripcion: string;
    private modificadorPrecio: number;

    constructor(descripcion: string, modificadorPrecio: number) {
        this.descripcion = descripcion;
        this.modificadorPrecio = modificadorPrecio;
    }

    getDescription(): string {
        return this.descripcion
    }

    revalorizar(precio: number): number {
        return precio * this.modificadorPrecio;
    }
}

export const variantes = {
    competitivo: new VariantePokemon("para competitivo", 1.4),
    companiero: new VariantePokemon("como compañero", 1),
    crianza: new VariantePokemon("para crianza", 1.5),
    concurso: new VariantePokemon("para concursos", 1.3),
    ivsPerfectos: new VariantePokemon("con IVs perfectos", 1.6),
}

export const randomVariante = () => {
    return getOneOf(Object.values(variantes));
}

export function getClave(variante: VariantePokemon) {
    const entradas = Object.entries(variantes);
    const entradaCoincidente = entradas.find(([_, valor]) => valor === variante);
    return entradaCoincidente? entradaCoincidente[0] : "";
}