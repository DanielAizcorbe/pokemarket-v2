import getId from "app/data/uuid"
import { Card } from "../card/Card"
import Anuncio from "../shared/anuncios/Anuncio"
import SeccionContainer from "./utils/SeccionContainer"

const Nuevos = () => {
    return (
        <SeccionContainer
            title="Nuevos"
        >
            <div className='flex flex-row gap-4 w-auto justify-center items-center'>
                {Array.from({length: 3}).map(e => <Card distribution="vertical" size="md" key={getId()}/>)}
                <Anuncio
                    animation={"pokeball"}
                    srcImage={"pokeball.svg"}
                    title={"¡Descubre los nuevos productos que tenemos para vos!"}
                    showMorePage={"/"}
                    classes={"rounded-full shadow-lg"}
                />
            </div>
        </SeccionContainer>
    )
}

export default Nuevos