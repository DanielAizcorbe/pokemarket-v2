import { ArticuloPokemon } from "app/classes/articulo/ArticuloPokemon";
import getId from "app/data/uuid";
import Tag from "./Tag";
import PublicacionPrecio from "./PublicacionPrecio";

interface Props {
    precioOriginal: number;
    descuento: number;
    precioDescuento: number;
    articulo: ArticuloPokemon;
    descripcion: string;
}

export default function PublicacionDetalle(props: Props) {

    const precioOriginal = props.precioOriginal;
    const descuento = props.descuento;
    const precioDescuento = props.precioDescuento;

    return (
        <div className="flex flex-col w-1/3 p-4 gap-2 justify-start items-start">
            <div className="flex flex-col gap-2 h-1/3 justify-between">
                <h1 className="text-3xl font-semibold h-1/2">
                    {props.descripcion}
                </h1>
                <div className="flex flex-row w-full p-1">
                    {props.articulo.getTags().map(t => <Tag data={t} key={getId()} />)}
                </div>
            </div>
            <p className="text-lg italic h-1/3">
                {`" ${props.articulo.getGameDescription()} "`}
            </p>
            <PublicacionPrecio 
                precioOriginal={precioOriginal}
                precioDescuento={precioDescuento}
                descuento={descuento}
            />
        </div>
    );
}