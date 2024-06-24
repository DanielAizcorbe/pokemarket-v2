import Image from 'next/image'
import React from 'react'

interface Props {
    src: string,
    alt: string,
    zoom: string
}

const CardImageV2 = (props: Props) => {

    return (
        <div
            className={`h-full w-auto relative block`}
        >
            <Image 
                fill
                src={props.src}
                alt={props.alt}
                quality={100}
            />
        </div>
    )
}

export default CardImageV2