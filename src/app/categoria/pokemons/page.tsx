import { Card } from "app/components/card/Card";
import { Filtros } from "app/components/shared/filtros/Filtros";
import getId from "app/data/uuid";
import { Filtros as pkFiltros, getFilteredPokemon } from "app/services/pokemon/getByFiltros";
import { Atributos } from "app/services/typos";


export default async function page() {

    const filtros: pkFiltros = {
        atributo1: Atributos.AGUA,
        descuento: true,
        minLevel: 5,
        maxLevel: 20,
        lenght: 10,
        allShiny: false,
        evolucionCompleta: false
    }

    const pokemons = await getFilteredPokemon(filtros);
    
    return (
        <>
            <Filtros />
            <div className="p-6 w-3/4 flex flex-row flex-wrap gap-2">
                {pokemons.map(p => <Card publicacion={p} distribution="horizontal" size="lg" key={getId()} />)}
            </div>
        </>
    )
}
