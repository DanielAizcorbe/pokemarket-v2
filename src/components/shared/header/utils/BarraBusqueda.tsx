"use client"

import Link from "next/link";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const BarraBusqueda = () => {

    const [itemBuscado, setItemBuscado] = useState("");

    const handleChange = (event: any) => {
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
                className='rounded-r-lg w-10 h-9 flex bg-cyan-700 justify-center items-center
                hover:bg-cyan-600 hover:transition-colors'
                href={`#`}
            >
                <FaSearch color="white"/>
            </Link>
        </label>
    )
}

export default BarraBusqueda
