import { recuperarFromUrl } from "app/classes/publicacion/getUrlPublicacion";
import { Card } from "app/components/card/Card";
import SeccionContainer from "app/components/pagina-principal/utils/SeccionContainer";
import { PokemonPublicacion } from "app/components/publicacion/PokemonPublicacion";
import PokemonSponsor from "app/components/shared/anuncios/PokemonSponsor";
import getId from "app/data/uuid";
import { Filtros, getFilteredPokemon } from "app/services/pokemon/getByFiltros";
import { Atributos } from "app/services/typos";

export default async function page(props) {

    const params = props.params;

    const publicacionBuscada = await recuperarFromUrl(params.publicacion);
    const atributos = publicacionBuscada.getArticulo().getTags();

    const filtros: Filtros = {
        lenght: 5,
        atributo1: atributos[0],
        atributo2: atributos[1],
        maxLevel: 60,
        minLevel: 30,
        allShiny: false
    }
    
    const publicaciones = await getFilteredPokemon(filtros);
    
    return (
        <div className="flex flex-col justify-start items-center grow gap-5">
            <PokemonPublicacion publicacion={publicacionBuscada} />
            <SeccionContainer title="Relacionados">
                {publicaciones.map(p => <Card publicacion={p} distribution="vertical" size="lg" key={getId()}/>)}
            </SeccionContainer>
            <PokemonSponsor />
        </div>
    );
}