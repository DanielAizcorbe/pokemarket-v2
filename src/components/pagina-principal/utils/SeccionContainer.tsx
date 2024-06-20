import { ReactNode } from "react"

interface SeccionProps {
    title: string,
    children: ReactNode,
}

const SeccionContainer = (props: SeccionProps) => {
    return (
        <div className='flex flex-col gap-2 max-w-7xl w-full'>
            <h3 className='text-left font-medium text-2xl'>{props.title}</h3>
            <div className='gap-2 bg-white py-4 px-2 flex items-center flex-wrap justify-center'>
                {props.children}
            </div>
        </div>
    )
}

export default SeccionContainer