import Image from "next/image";
import Link from "next/link";

const Logo = () => {

    const tamanio = 60;
    return (
        <div className='w-1/6'>
            <Link href={"/"} className='flex h-full justify-start items-center gap-2 p-2 w-64 '>
                <Image
                    alt="logo-pokeball"
                    src={"/pokeball.svg"}
                    width={tamanio}
                    height={tamanio}
                    className='pokeball-static'
                />
                <h1 className='italic text-left text-blue-50 h-auto text-3xl'>
                    PokeMarket
                </h1>
            </Link>
        </div>
    )
}

export default Logo