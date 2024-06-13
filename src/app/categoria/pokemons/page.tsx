import { Card } from "app/components/card/Card";
import { Filtros } from "app/components/shared/filtros/Filtros";
import getId from "app/data/uuid";
import { getPokemonArray } from "app/services/getArrayData";
import { getFilteredPokemon } from "app/services/getByFiltros";


export default async function page() {

    const pokemons = await getFilteredPokemon({atributo1:{id: "fire"}});

    return (
        <>
            <Filtros />
            <div className="p-6 w-3/4 flex flex-row flex-wrap gap-2">
                {pokemons.map(p => <Card publicacion={p} distribution="horizontal" size="lg" key={getId()} />)}
            </div>
        </>
    )
}
