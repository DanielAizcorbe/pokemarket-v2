import { PublicacionBuilder } from 'app/classes/publicacion/PublicacionBuilder';
import { VariantePokemon, getClave, variantes } from '../pokemon/VariantePokemon';
import { Publicacion } from './Publicacion';
import { ArtPokemonBuilder } from '../articulo/builders/ArtPokemonBuilder';
import { pokemonFromId } from '../pokemon/Pokemon';

export function getUrlFrom(publicacion: Publicacion) {

    const pokemonId = publicacion.getArticulo().getId();
    const isShiny = publicacion.getArticulo().shiny() ? "s" : "d"
    const precioOriginal = publicacion.getPrecioOriginal();
    const descuento = publicacion.descuento
    const nivel = publicacion.getArticulo().getNivel();
    const variante = getClave(publicacion.getArticulo().getVariante());

    const url = `id-${pokemonId}_t-${isShiny}_lv-${nivel}_v-${variante}_p-${precioOriginal}_d-${descuento}`;

    return url;
}

function parseProductString(productString: string) {
    const productInfo: any = {};
    const parts = productString.split("_");

    for (const part of parts) {
        const [key, value] = part.split("-");
        productInfo[key] = value;
    }

    return productInfo;
}

export async function recuperarFromUrl(url: string) {

    const valores = parseProductString(url);
    
    const pokemonId = valores.id;
    const pokemon = await pokemonFromId(parseInt(pokemonId));
    const artBuilder = new ArtPokemonBuilder(pokemon);
    artBuilder.setNivel(valores.lv);
    if(valores.t === "s") {
        artBuilder.setShiny();
    }
    const prop: string = valores.v;
    const variante = variantes[prop]; 
    artBuilder.setVariante(variante);
    const articulo = artBuilder.build();
    
    const pBuilder = new PublicacionBuilder(articulo);
    pBuilder.setDescuento(valores.d)
    const publicacion = pBuilder.build(valores.p);
    return publicacion;
}