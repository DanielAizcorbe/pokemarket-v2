import CardDescription from "./utils/CardDescription"
import CardImage from "./utils/CardImage"
import CardPrecio from "./utils/CardPrecio"
import { getSizeCard } from "./utils/sizeCard"
import { sizeType } from "./utils/sizes"

interface CardProps {
    articulo?: any,
    size: sizeType,
}

// IMAGEN
// DESCRIPCION
// TAGS
// PRECIO

const articuloPrueba = {
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
    description: "Ditto lvl 5 para crianza asdasd qwas d",
    name: "Ditto",
    precioOriginal: 20000,
    descuento: 10,
    precioDescuento: 18000
}

export const Card = (props: CardProps) => {

    const size = getSizeCard(props.size);
    const articulo = props.articulo || articuloPrueba;
    
    return (
        <div className={`${size.heightContainer} ${size.widthContainer} ${size.fontSize} p-2 shadow-md rounded-md flex flex-col`}>
            <div className="min-h-1/2 h-full">
                <CardImage
                    alt={articulo.name}
                    src={articulo.image}
                    zoom={size.zoom}
                />
            </div>
            <div className="flex flex-col h-full justify-evenly">
                <CardDescription
                    description={articulo.description}
                />
                <CardPrecio
                    fontSize={size.fontSizeImportant}
                    descuento={articulo.descuento}
                    precioDescuento={articulo.precioDescuento}
                    precioOriginal={articulo.precioOriginal}
                />
            </div>
        </div>
    )
}