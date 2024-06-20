import { Publicacion } from "app/classes/publicacion/Publicacion";
import { publiPrueba } from "./publi-prueba";
import { PublicacionImage } from "./PublicacionImage";
import PublicacionDetalle from "./PublicacionDetalles";
import PublicacionCompra from "./compra/PublicacionCompra";

interface Props {
    publicacion?: Publicacion
}

export async function PokemonPublicacion(props: Props) {

    const publi = await publiPrueba();

    const publicacion = props.publicacion || publi
    const articulo = publicacion.getArticulo();

    return (
        <div>
            <div className="flex">
                <PublicacionImage
                    images={articulo.getImagenes()}
                />
                <PublicacionDetalle 
                    articulo={articulo}
                    descripcion={publicacion.descripcion()}
                />
                <PublicacionCompra />
            </div>
        </div>
    );
}

