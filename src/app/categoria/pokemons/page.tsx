import { Card } from "app/components/card/Card";
import Filtros from "app/components/shared/filtros/Filtros";
import getId from "app/data/uuid";
import { Filtros as pkFiltros, getFilteredPokemon } from "app/services/pokemon/getByFiltros";

interface Props {
    searchParams: any
}

export default async function page(props: Props) {

    const primerAtributo = props.searchParams.atributo1;
    const segundoAtributo = props.searchParams.atributo2;

    const filtros: pkFiltros = {
        atributo1: primerAtributo,
        atributo2: segundoAtributo,
        descuento: false,
        minLevel: 5,
        maxLevel: 100,
        lenght: 10,
        allShiny: false,
        evolucionCompleta: false
    }

    const pokemons = await getFilteredPokemon(filtros);

    return (
        <>
            <Filtros seleccionados={[primerAtributo, segundoAtributo]}/>
            <div className="p-6 w-3/4 flex flex-row flex-wrap gap-2">
                {pokemons.map(p => <Card publicacion={p} distribution="horizontal" size="lg" key={getId()} />)}
            </div>
        </>
    )
}
