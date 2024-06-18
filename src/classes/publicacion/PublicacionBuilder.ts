import { iArticulo } from "app/classes/articulo/iArticulo";
import { Publicacion } from "app/classes/publicacion/Publicacion";

export class PublicacionBuilder {

    private articulo: iArticulo;
    private descuento: number;
    private cantidad: number;

    constructor(articulo: iArticulo){
        this.articulo = articulo;
        this.descuento = 0;
        this.cantidad = 1;
    }

    setDescuento(descuento: number) {

        if(descuento < 0) {
            throw new Error("El descuento debe ser mayor a 0");
        }

        this.descuento = descuento;
    }

    setCantidad(cantidad: number) {
        if(cantidad < 1) {
            throw new Error("la cantidad debe ser mayor a 1");
        }
    }
    
    build(): Publicacion {
        const precio = this.articulo.precioEstimado();
        const publicacion = new Publicacion(this.articulo, this.cantidad, precio, this.descuento);
        return publicacion;
    }
}