"use client"
import getId from "app/data/uuid";
import { filtros } from "./type-filtro";
import OpcionFiltroType from "./OpcionFiltroType";
import { usePathname } from "next/navigation";
import { FiltrosAtributo } from "./FiltrosAtributo";

export default function Filtros(props) {

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
