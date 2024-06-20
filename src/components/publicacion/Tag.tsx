import { Tag } from "app/classes/pokemon/Tags";
import { Atributos } from "app/services/typos";

interface Props {
    data: Atributos
}

export default function Tag(props: Props) {

    const tag = getTag(props.data);

    return (
        <div
            className={`text-sm ${tag.bgColor} text-center py-1 w-1/4 rounded-lg ${tag.textColor} ${tag.borderColor} italic border-2`}
        >
            {tag.nombre}
        </div>
    );
}


export function getTag(tag: Atributos) {
    //console.log(tag);

    const tagGenerator = (bgColor: string, nombre: string) => {

        const newTag: Tag = {
            bgColor: bgColor,
            borderColor: "border-slate-100",
            textColor: "text-slate-100",
            nombre: nombre
        }
        //console.log(newTag);

        return newTag;
    }

    switch (tag) {
        case Atributos.VOLADOR: return tagGenerator("bg-cyan-500", "Volador");
        case Atributos.PLANTA: return tagGenerator("bg-green-500", "Planta");
        case Atributos.BICHO: return tagGenerator("bg-lime-400", "Bicho");
        case Atributos.FUEGO: return tagGenerator("bg-red-500", "Fuego");
        case Atributos.HIELO: return tagGenerator("bg-cyan-300", "Hielo");
        case Atributos.AGUA: return tagGenerator("bg-blue-500", "Agua");
        case Atributos.LUCHA: return tagGenerator("bg-red-700", "Lucha");
        case Atributos.SINIESTRO: return tagGenerator("bg-neutral-800", "Siniestro");
        case Atributos.VENENO: return tagGenerator("bg-fuchsia-900", "Veneno");
        case Atributos.DRAGON: return tagGenerator("bg-violet-500", "Dragón");
        case Atributos.ACERO: return tagGenerator("bg-neutral-400", "Acero");
        case Atributos.ELECTRICO: return tagGenerator("bg-yellow-400", "Eléctrico");
        case Atributos.NORMAL: return tagGenerator("bg-stone-400", "Normal");
        case Atributos.ROCA: return tagGenerator("bg-amber-700", "Roca");
        case Atributos.TIERRA: return tagGenerator("bg-yellow-600", "Tierra");
        case Atributos.PSIQUICO: return tagGenerator("bg-pink-400", "Psíquico");
        case Atributos.FANTASMA: return tagGenerator("bg-purple-900", "Fantasma");
        case Atributos.HADA: return tagGenerator("bg-pink-400", "Hada")
        default: { };
    }
}