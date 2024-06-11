import getId from "app/data/uuid"
import { Card } from "../card/Card"
import SeccionContainer from "./utils/SeccionContainer"

const pokemon = Array.from({ length: 6 });

const Ofertas = () => {
    return (
        <SeccionContainer title="Ofertas">
            {pokemon.map(e => <Card distribution="vertical" size="sm" key={getId()} />)}
        </SeccionContainer>
    )
}

export default Ofertas