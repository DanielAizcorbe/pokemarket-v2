import { Atributo } from "app/services/typos";

interface Props {
    data: Atributo
}

interface AtributoTag {
    bgColor: string,
    textColor: string,
    borderColor: string,
    nombre: string
}

export default function TagAtributo(props: Props) {

    const tag = getTag(props.data);

    return (
        <div
            className={`text-sm ${tag.bgColor} text-center py-1 w-1/4 rounded-lg ${tag.textColor} ${tag.borderColor} italic border-2`}
        >
            {tag.nombre}
        </div>
    );
}


export function getTag(tag: Atributo) {

    const tagGenerator = (bgColor: string, nombre: string) => {

        const newTag: AtributoTag = {
            bgColor: bgColor,
            borderColor: "border-slate-100",
            textColor: "text-slate-100",
            nombre: nombre
        }

        return newTag;
    }

    switch (tag) {
        case Atributo.VOLADOR: return tagGenerator("bg-cyan-500", "Volador");
        case Atributo.PLANTA: return tagGenerator("bg-green-500", "Planta");
        case Atributo.BICHO: return tagGenerator("bg-lime-400", "Bicho");
        case Atributo.FUEGO: return tagGenerator("bg-red-500", "Fuego");
        case Atributo.HIELO: return tagGenerator("bg-cyan-300", "Hielo");
        case Atributo.AGUA: return tagGenerator("bg-blue-500", "Agua");
        case Atributo.LUCHA: return tagGenerator("bg-red-700", "Lucha");
        case Atributo.SINIESTRO: return tagGenerator("bg-neutral-800", "Siniestro");
        case Atributo.VENENO: return tagGenerator("bg-fuchsia-900", "Veneno");
        case Atributo.DRAGON: return tagGenerator("bg-violet-500", "Dragón");
        case Atributo.ACERO: return tagGenerator("bg-neutral-400", "Acero");
        case Atributo.ELECTRICO: return tagGenerator("bg-yellow-400", "Eléctrico");
        case Atributo.NORMAL: return tagGenerator("bg-stone-400", "Normal");
        case Atributo.ROCA: return tagGenerator("bg-amber-700", "Roca");
        case Atributo.TIERRA: return tagGenerator("bg-yellow-600", "Tierra");
        case Atributo.PSIQUICO: return tagGenerator("bg-pink-400", "Psíquico");
        case Atributo.FANTASMA: return tagGenerator("bg-purple-900", "Fantasma");
        default: return tagGenerator("bg-gray", "?");
    }
}