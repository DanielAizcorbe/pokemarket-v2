import Anuncio from "../shared/anuncios/Anuncio"
import SeccionContainer from "./utils/SeccionContainer"

const Nuevos = () => {
    return (
        <SeccionContainer
            title="Nuevos"
        >
            <div className='flex flex-row gap-4 w-auto justify-center'>
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