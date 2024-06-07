"use client"

import Link from "next/link";
import { useState } from "react";

const BarraBusqueda = () => {

    const [itemBuscado, setItemBuscado] = useState("");

    const handleChange = (event) => {
        setItemBuscado(event.target.value);
    }

    return (
        <label
            htmlFor='busqueda'
            className='w-full flex flex-row justify-center items-center'
        >
            <input
                type='text'
                value={itemBuscado}
                onChange={handleChange}
                className='w-4/6 h-9 rounded-l-lg outline-none p-3 placeholder:italic'
                id='busqueda'
                placeholder='Pokemons, items, MTs, ...'
            />

            <Link
                className='rounded-r-lg w-10 h-9 flex justify-center items-center bg-white 
                hover:bg-cyan-700 hover:text-white hover:transition-colors'
                href={`#`}
            >
                Q
            </Link>
        </label>
    )
}

export default BarraBusqueda
