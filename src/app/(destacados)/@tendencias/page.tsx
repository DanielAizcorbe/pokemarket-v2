import Tendencias from "app/components/pagina-principal/Tendencias";
import { getPokemonArray } from "app/services/getArrayData";

export default async function page() {

    const publicaciones = await getPokemonArray(3);

    return (
        <Tendencias publicaciones={publicaciones} />
    )
}