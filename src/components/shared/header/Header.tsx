import BarraBusqueda from "./utils/BarraBusqueda"
import Logo from "./utils/Logo"
import { UserButton } from "./utils/UserButton"

type Props = {}

const Header = (props: Props) => {
    return (
        <header className='bg-cyan-950 h-24 w-full flex justify-center'>
            <div className='p-1 flex flex-row items-center max-w-7xl w-full'>
                <Logo />
                <BarraBusqueda />
                <UserButton />
            </div>
        </header>
    )
}

export { Header }