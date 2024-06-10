import getId from "app/data/uuid"
import { Card } from "../card/Card"
import SeccionContainer from "./utils/SeccionContainer"

const Ofertas = () => {
    return (
        <SeccionContainer title="Ofertas">
            {Array.from({length: 12}).map(e => <Card distribution="vertical" size="sm" key={getId()}/>)}
        </SeccionContainer>
    )
}

export default Ofertas