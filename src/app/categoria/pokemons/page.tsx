import { Card } from "app/components/card/Card";
import getId from "app/data/uuid";

const pokemons = Array.from({length: 9});

export default function page() {

    return (
        <div className="p-6 ">
            {pokemons.map(_ => <Card distribution="horizontal" size="lg" key={getId()}/>)}
        </div>
    )
}
