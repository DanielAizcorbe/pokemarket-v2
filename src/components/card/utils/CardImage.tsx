import React from 'react'

interface Props {
    src: string,
    alt: string,
    zoom: string
}

const CardImage = (props: Props) => {

    return (
        <div
            className={`h-full w-auto bg-center bg-no-repeat`}
            style={{
                backgroundImage: `url(${props.src})`,
                backgroundSize: props.zoom
            }}
        >
        </div>
    )
}

export default CardImage