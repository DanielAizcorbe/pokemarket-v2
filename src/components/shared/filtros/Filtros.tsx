"use client"
import { usePathname } from "next/navigation";
import { FiltrosAtributo } from "./FiltrosAtributo";

interface Props {
    seleccionados: any
}

export default function Filtros(props: Props) {

    const seleccionados = props.seleccionados;
    const pathName = usePathname();
    
    return (
        <aside className="w-1/4 p-4 rounded-md shadow-md h-full gap-2 flex flex-col">
            <h2 className="text-lg font-semibold">Atributos</h2>
            <FiltrosAtributo 
                pathName={pathName}
                seleccionados={seleccionados}
            />
        </aside>
    );
};
