import getId from "app/data/uuid"
import Anuncio from "../shared/anuncios/Anuncio"
import SeccionContainer from "./utils/SeccionContainer"
import { Card } from "../card/Card"

const Tendencias = () => {
    return (
        <SeccionContainer title={"Tendencias"}>
            <div className='w-full h-full flex flex-row justify-around items-center gap-2'>
                <Anuncio
                    title={"¡Mira los más vendidos de la semana!"}
                    srcImage={"pikachu.svg"}
                    showMorePage={"/"}
                />
                {Array.from({ length: 3 }).map(e => <Card distribution="vertical" size="md" key={getId()} />)}
            </div>
        </SeccionContainer>
    )
}

export default Tendencias