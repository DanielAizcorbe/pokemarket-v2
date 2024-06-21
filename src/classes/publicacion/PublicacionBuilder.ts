import { ArticuloPokemon } from "app/classes/articulo/ArticuloPokemon";
import { Publicacion } from "app/classes/publicacion/Publicacion";

export class PublicacionBuilder {

    private articulo: ArticuloPokemon;
    private descuento: number;
    private cantidad: number;

    constructor(articulo: ArticuloPokemon){
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
    
    build(precioOriginal?: number): Publicacion {
        const precio = precioOriginal || this.articulo.precioEstimado();
        const publicacion = new Publicacion(this.articulo, this.cantidad, precio, this.descuento);
        return publicacion;
    }

}