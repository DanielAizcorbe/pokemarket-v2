import Tendencias from "app/components/pagina-principal/Tendencias";
import { getRandomPokemons } from "app/services/pokemon/getRandomPokemon";

export default async function page() {

    const publicaciones = await getRandomPokemons(3);

    return (
        <Tendencias publicaciones={publicaciones} />
    )
}