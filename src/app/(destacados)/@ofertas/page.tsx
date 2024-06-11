import Ofertas from "app/components/pagina-principal/Ofertas";
import { getPokemonArray } from "app/services/getArrayData";

export default async function page() {

    const publicaciones = await getPokemonArray(12);

    return (
        <Ofertas publicaciones={publicaciones} />
    )
}