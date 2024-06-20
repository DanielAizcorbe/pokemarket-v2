import getId from "app/data/uuid"
import Anuncio from "../shared/anuncios/Anuncio"
import SeccionContainer from "./utils/SeccionContainer"
import { Card } from "../card/Card"
import { Publicacion } from "app/classes/publicacion/Publicacion"

interface Props {
    publicaciones: Array<Publicacion>
}

const Tendencias = (props: Props) => {
    return (
        <SeccionContainer title={"Tendencias"}>
            <div className='w-full h-full flex flex-row justify-around items-center gap-2'>
                <Anuncio
                    title={"¡Mira los más vendidos de la semana!"}
                    srcImage={"pikachu.svg"}
                    showMorePage={"/"}
                />
                {props.publicaciones.map(p => <Card publicacion={p} distribution="vertical" size="md" key={getId()} />)}
            </div>
        </SeccionContainer>
    )
}

export default Tendencias