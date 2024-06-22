import OpcionFiltroType from "./OpcionFiltroType";
import { filtros } from "./type-filtro";

export function FiltrosAtributo(props) {

    return (
        <div className="flex flex-col gap-2">
            {filtros.map(a => <OpcionFiltroType pathName={props.pathName} seleccionados={props.seleccionados} atributo={a} key={a.nombre} />)}
        </div>
    );
}