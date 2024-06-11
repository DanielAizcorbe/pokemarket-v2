import getId from "app/data/uuid"
import { Card } from "../card/Card"
import SeccionContainer from "./utils/SeccionContainer"
import { Publicacion } from "app/services/getPokemon"

interface Props {
    publicaciones: Array<Publicacion>,
}

export default async function Ofertas(props: Props) {

    return (
        <SeccionContainer title="Ofertas">
            {props.publicaciones.map(e => <Card publicacion={e} distribution="vertical" size="sm" key={getId()} />)}
        </SeccionContainer>
    )
}

