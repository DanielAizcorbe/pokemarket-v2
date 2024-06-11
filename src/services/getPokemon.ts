import { getImagen } from './../data/generadores/utils';
import { getCantidadPara, getDescuento, getPrecio, getPrecioDescuento } from "app/data/generadores/utils";
import { Categoria, getFromPokeApi } from "./pokeapi"
import getId from "app/data/uuid";
import { getDescripcion, getName } from "./utils";

export enum TipoArticulo {
    POKEMON = "pokemon",
    POCION = "pocion",
    MT = "mt",
    MO = "mo",
    POKEBALL = "pokeball"
}

interface Articulo {
    tipo: TipoArticulo,
    imagen: string,
    cantidad: number,
    id: string,
    nombre: string,
    descripcion: string
}

export interface Publicacion {
    articulo: Articulo,
    precioOriginal: number,
    descuento: number,
    precioDescuento: number,
}


const generarArticulo = (data: any, tipo: TipoArticulo) => {
    const articulo = {
        cantidad: getCantidadPara(tipo),
        imagen: getImagen(data, tipo),
        id: getId(),
        nombre: getName(data, tipo),
        descripcion: getDescripcion(data, tipo),
        tipo: tipo
    };

    return articulo;
}

const generarPublicacion = (data:any, tipo: TipoArticulo) => {
    const descuento = getDescuento();
    const precioOriginal = getPrecio(tipo);
    const publicacion: Publicacion = {
        articulo: generarArticulo(data, tipo),
        descuento: descuento,
        precioOriginal: precioOriginal,
        precioDescuento: getPrecioDescuento(precioOriginal, descuento)
    };

    return publicacion;
}

export const getPokemon = async (pokemon: number) => {
    const pokemonData = await getFromPokeApi(Categoria.POKEMON_ENDPOINT, pokemon, true);
    return generarPublicacion(pokemonData, TipoArticulo.POKEMON);
}

