import Image from "next/image"
import Link from "next/link"

interface AnuncioProps {
    title: string,
    srcImage: string,
    animation: string,
    classes: string,
    showMorePage: string
}

const Anuncio = (props: AnuncioProps) => {
    return (
        <div className='py-4 px-2 w-1/3 flex flex-col justify-evenly items-center gap-6 bg-cyan-700 rounded-md text-white'>
            <h3
                className='font-semibold text-2xl text-center'
            >
                {props.title}
            </h3>
            <Image
                alt='img-anuncio'
                src={props.srcImage}
                width={100}
                height={100}
                className={`${props.animation} ${props.classes} `}
            />
            <Link href={props.showMorePage} className='text-xl border-b hover:text-slate-300 hover:border-b-slate-300 hover:transition-colors'>
                Ver más
            </Link>
        </div>
    )
}

export default Anuncio