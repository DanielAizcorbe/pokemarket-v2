import React from 'react'
import Contacto from './utils/Contacto'
import OtrosDatos from './utils/OtrosDatos'
import Redes from './utils/Redes'

const Footer = () => {
    return (
        <footer className='flex justify-center p-4 bg-cyan-950 w-full'>
            <div className='flex flex-row max-w-7xl w-full'>
                <Contacto />
                <OtrosDatos />
                <Redes />
            </div>
        </footer>
    )
}

export { Footer }