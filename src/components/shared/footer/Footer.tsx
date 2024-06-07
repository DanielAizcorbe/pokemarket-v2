import React from 'react'
import Contacto from './utils/Contacto'
import OtrosDatos from './utils/OtrosDatos'
import Redes from './utils/Redes'

type Props = {}

const Footer = (props: Props) => {
    return (
        <footer className='flex-row p-4 bg-cyan-950'>
            <Contacto />
            <OtrosDatos />
            <Redes />
        </footer>
    )
}

export { Footer }