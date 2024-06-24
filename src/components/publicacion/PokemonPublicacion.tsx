import { Publicacion } from "app/classes/publicacion/Publicacion";
import { PublicacionImage } from "./PublicacionImage";
import PublicacionDetalle from "./PublicacionDetalles";
import PublicacionCompra from "./compra/PublicacionCompra";

interface Props {
    publicacion: Publicacion
}

export async function PokemonPublicacion(props: Props) {

    const publicacion = props.publicacion
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
                    descuento={publicacion.getDescuento()}
                    precioDescuento={publicacion.precio()}
                    precioOriginal={publicacion.getPrecioOriginal()}
                />
                <PublicacionCompra />
            </div>
        </div>
    );
}

