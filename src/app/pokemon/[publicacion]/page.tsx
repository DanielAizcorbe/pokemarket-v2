import { Card } from "app/components/card/Card";
import Ofertas from "app/components/pagina-principal/Ofertas";
import SeccionContainer from "app/components/pagina-principal/utils/SeccionContainer";
import { PokemonPublicacion } from "app/components/publicacion/PokemonPublicacion";
import getId from "app/data/uuid";
import { Filtros, getFilteredPokemon } from "app/services/pokemon/getByFiltros";
import { Atributos } from "app/services/typos";

export default async function page(props) {

    const filtros: Filtros = {
        lenght: 5,
        atributo1: Atributos.FUEGO,
        maxLevel: 60,
        minLevel: 30,
    }
    const publicaciones = await getFilteredPokemon(filtros);

    return (
        <div className="flex flex-col justify-start grow gap-5">
            <PokemonPublicacion />
            <SeccionContainer title="Relacionados">
                {publicaciones.map(p => <Card publicacion={p} distribution="vertical" size="lg" key={getId()}/>)}
            </SeccionContainer>
        </div>
    );
}