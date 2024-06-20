import { iArticulo } from "app/classes/articulo/iArticulo";
import getId from "app/data/uuid";
import Tag from "./Tag";

interface Props {
    articulo: iArticulo;
    descripcion: string;
}

export default function PublicacionDetalle(props: Props) {

    const precioOriginal = 200000;
    const descuento = 10;
    const precioDescuento = 180000;

    return (
        <div className="flex flex-col w-1/3 p-4 gap-2 justify-start items-start">
            <h1 className="text-3xl font-semibold">
                {props.descripcion}
            </h1>
            <div className="flex flex-row w-full p-1">
                {props.articulo.getTags().map(t => <Tag data={t} key={getId()} />)}
            </div>
            <p className="text-lg italic">
                {`" ${props.articulo.getGameDescription()} "`}
            </p>
            <div className="flex flex-col items-start w-full">
                <p className="line-through text-lg text-slate-600">
                    ${precioOriginal}
                </p>
                <div className="flex flex-row gap-2 items-center">
                    <p className="text-3xl py-2">
                        ${precioDescuento}
                    </p>
                    <p className="text-green-600 text-md font-semibold">
                        %{descuento} off
                    </p>
                </div>
            </div>
        </div>
    );
}