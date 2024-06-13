import CardDescription from "./utils/CardDescription"
import CardImage from "./utils/CardImage"
import CardPrecio from "./utils/CardPrecio"
import { getSizeCard } from "./utils/sizeCard"
import { distributionType, sizeType } from "./utils/sizes"
import { Publicacion } from "app/services/getPokemon"

interface CardProps {
    publicacion: Publicacion,
    size: sizeType,
    distribution: distributionType
}

export const Card = (props: CardProps) => {

    const size = getSizeCard(props.size, props.distribution);

    const publicacion = props.publicacion;
    const isVertical = props.distribution === "vertical";

    const containerSize = isVertical ? "min-h-1/2 h-full" : "min-w-1/2 w-full"

    return (
        <div className={`${size.heightContainer} ${size.widthContainer} ${size.fontSize} p-2 shadow-md rounded-md flex ${isVertical ? "flex-col" : ""}`}>
            <div className={containerSize}>
                <CardImage
                    alt={publicacion.articulo.nombre}
                    src={publicacion.articulo.imagen}
                    zoom={size.zoom}
                />
            </div>
            <div className={`flex flex-col h-full justify-evenly ${containerSize}`}>
                <CardDescription
                    description={publicacion.articulo.descripcion}
                />
                <CardPrecio
                    fontSize={size.fontSizeImportant}
                    descuento={publicacion.descuento}
                    precioDescuento={publicacion.precioDescuento}
                    precioOriginal={publicacion.precioOriginal}
                />
            </div>
        </div>
    )
}