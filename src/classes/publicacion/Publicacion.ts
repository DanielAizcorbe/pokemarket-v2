import { getPrecioDescuento } from "app/data/generadores/utils";
import { iArticulo } from "../articulo/iArticulo";
import getId from "app/data/uuid";

export class Publicacion {
    id: string;
    articulo: iArticulo;
    cantidad: number;
    tieneDescuento: boolean;
    descuento: number;
    precioOriginal: number;
    precioDescuento: number;

    constructor(articulo: iArticulo, cantidad: number, precioOriginal: number, descuento: number) {
        this.id = getId();
        this.articulo = articulo;
        this.cantidad = cantidad;
        this.tieneDescuento = descuento > 0;
        this.precioOriginal = precioOriginal;
        this.descuento = descuento;
        this.precioDescuento = getPrecioDescuento(precioOriginal, descuento);
    }

}