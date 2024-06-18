import Nuevos from "app/components/pagina-principal/Nuevos";
import { getRandomPokemons } from "app/services/pokemon/getRandomPokemon";

export default async function page() {

    const pokemons = await getRandomPokemons(3);
    
    return (
        <Nuevos publicaciones={pokemons} />
    )
}