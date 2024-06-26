import { Publicacion } from "app/classes/publicacion/Publicacion"
import CardDescription from "./utils/CardDescription"
import CardPrecio from "./utils/CardPrecio"
import { getSizeCard } from "./utils/sizeCard"
import { distributionType, sizeType } from "./utils/sizes"
import Link from "next/link"
import { getUrlFrom } from "app/classes/publicacion/getUrlPublicacion"
import CardImageV2 from "./utils/CardImageV2"

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
    const url = getUrlFrom(publicacion);
    
    return (
        <Link href={`/pokemon/${url}`}>
            <div className={`${size.heightContainer} ${size.widthContainer} ${size.fontSize} p-2 shadow-md rounded-md flex ${isVertical ? "flex-col" : ""}`}>
                <div className={containerSize}>
                    <CardImageV2
                        alt={publicacion.getArticulo().descripcion()}
                        src={publicacion.getArticulo().defaultSprite()}
                        zoom={size.zoom}
                    />
                </div>
                <div className={`flex flex-col h-full justify-evenly ${containerSize}`}>
                    <CardDescription
                        description={publicacion.getArticulo().descripcion()}
                    />
                    <CardPrecio
                        fontSize={size.fontSizeImportant}
                        descuento={publicacion.getDescuento()}
                        precioDescuento={publicacion.precio()}
                        precioOriginal={publicacion.getPrecioOriginal()}
                    />
                </div>
            </div>
        </Link>
    )
}