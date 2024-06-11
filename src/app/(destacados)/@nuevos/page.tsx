import Nuevos from "app/components/pagina-principal/Nuevos";
import { getPokemonArray } from "app/services/getArrayData";

export default async function page() {

    const pokemons = await getPokemonArray(3);

    return (
        <Nuevos publicaciones={pokemons} />
    )
}