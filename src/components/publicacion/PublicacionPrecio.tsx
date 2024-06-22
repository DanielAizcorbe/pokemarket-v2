interface Props {
    descuento: number,
    precioOriginal: number,
    precioDescuento: number,
}

export default function PublicacionPrecio(props: Props) {

    const tieneDescuento = props.descuento > 0;

    return (
        <div className="flex flex-col items-start justify-end w-full h-1/3">
            {tieneDescuento ? <p className="line-through text-2xl text-slate-600">
                ${props.precioOriginal}
            </p> : ""}
            <div className="flex flex-row gap-2 items-center">
                <p className="text-5xl py-2">
                    ${props.precioDescuento}
                </p>
                {tieneDescuento ? <p className="text-green-600 text-xl font-semibold">
                    %{props.descuento} off
                </p> : ""}

            </div>
        </div>
    );
}