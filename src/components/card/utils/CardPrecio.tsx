
interface Props {
    fontSize: string,
    precioOriginal: number,
    precioDescuento: number,
    descuento: number
}

const CardPrecio = (props: Props) => {
    
    return (
        <div className={`flex flex-col justify-end items-start h-3/5`}>
            {
                props.descuento > 0 ?
                    <div className='flex items-center justify-between w-full'>
                        <p className={'line-through italic '}>
                            ${props.precioOriginal}
                        </p>
                        <p className=' text-green-600 font-medium italic h-full'>
                            %{props.descuento} off
                        </p>
                    </div>
                    : ""
            }
            <p className={`text-green-500 h-1/2 ${props.fontSize}`}>
                ${props.precioDescuento}
            </p>
        </div>
    )
}

export default CardPrecio