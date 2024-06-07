import Anuncio from "../shared/anuncios/Anuncio"
import SeccionContainer from "./utils/SeccionContainer"

const Tendencias = () => {
    return (
        <SeccionContainer title={"Tendencias"}>
            <div className='w-full h-full flex flex-row justify-around items-center gap-2'>
                <Anuncio
                    title={"¡Mira los más vendidos de la semana!"}
                    srcImage={"pikachu.svg"}
                    showMorePage={"/"}
                />
            </div>
        </SeccionContainer>
    )
}

export default Tendencias