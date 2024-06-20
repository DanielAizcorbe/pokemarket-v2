"use client"
import getId from "app/data/uuid";
import { filtros } from "./type-filtro";
import OpcionFiltroType from "./OpcionFiltroType";
import { usePathname } from "next/navigation";

export default function Filtros(props) {

    const seleccionados = props.seleccionados;
    const pathName = usePathname();
    
    return (
        <aside className="w-1/4 p-4 rounded-md shadow-md h-full">
            <div className="flex flex-col gap-2">
                {filtros.map(a => <OpcionFiltroType pathName={pathName} seleccionados={seleccionados} atributo={a} key={getId()} />)}
            </div>
        </aside>
    );
};
