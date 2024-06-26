import Link from "next/link";
import { QueryBuilder } from "./QueryBuilder";
interface Props {
    seleccionados: Array<string>,
    atributo: any,
    pathName: string
}

export default function OpcionFiltroType(props: Props) {

    const seleccionados = props.seleccionados;
    const atributo = props.atributo.type;

    const queryBuilder = new QueryBuilder(seleccionados[0], seleccionados[1]);
    const estaSeleccionado = queryBuilder.exist(atributo);

    if (estaSeleccionado) {
        queryBuilder.remove(atributo);
    } else {
        queryBuilder.add(atributo);
    }

    const query = queryBuilder.build();

    return (
        <Link
            href={{
                pathname: props.pathName,
                query: query
            }}
            className={`text-sm ${estaSeleccionado? "text-cyan-500" : ""}`}
        >
            {props.atributo.nombre}
        </Link>)
}


