import Image from "next/image"
import Link from "next/link"

const PokemonSponsor = () => {
    return (
        <div className='bg-cyan-700 py-8 flex justify-center items-center rounded-lg'>
            <Image
                alt='sponsor'
                src={"pokemon-tcg.svg"}
                width={300}
                height={200}
                className='w-auto h-auto'
            />
            <div className='w-1/2 h-3/4 flex flex-col justify-between items-center gap-10'>
                <h2
                    className='font-semibold text-3xl text-center text-white'
                >¡Ya disponible los nuevos sobres de Invierno!
                </h2>
                <Link
                    href={"#"}
                    className='text-white text-xl bg-red-600 border py-2 px-8 rounded-full hover:scale-110 hover:transition-transform'
                >
                    ¡Muestrame!
                </Link>
            </div>
        </div>
    )
}

export default PokemonSponsor
