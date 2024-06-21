import { ArticuloPokemon } from 'app/classes/articulo/ArticuloPokemon';
import { getPrecioDescuento } from "app/data/generadores/utils";
import getId from "app/data/uuid";

export class Publicacion {
    id: string;
    articulo: ArticuloPokemon;
    cantidad: number;
    descuento: number;
    precioOriginal: number;
    precioDescuento: number;

    constructor(articulo: ArticuloPokemon, cantidad: number, precioOriginal: number, descuento: number) {
        this.id = getId();
        this.articulo = articulo;
        this.cantidad = cantidad;
        this.precioOriginal = precioOriginal;
        this.descuento = descuento;
        this.precioDescuento = getPrecioDescuento(precioOriginal, descuento);
    }

    descripcion(): string {
        return this.articulo.descripcion();
    }

    tieneDescuento(): boolean {
        return this.descuento > 0;
    }

    precio(): number {
        return (this.tieneDescuento() ? this.precioDescuento : this.precioOriginal);
    }

    getPrecioOriginal(): number {
        return this.precioOriginal;
    }

    getArticulo(): ArticuloPokemon {
        return this.articulo;
    }
}