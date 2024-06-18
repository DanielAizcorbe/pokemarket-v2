import Ofertas from "app/components/pagina-principal/Ofertas";
import { getRandomPokemons } from "app/services/pokemon/getRandomPokemon";

export default async function page() {

    const publicaciones = await getRandomPokemons(12);

    return (
        <Ofertas publicaciones={publicaciones} />
    )
}