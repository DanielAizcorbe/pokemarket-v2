import NavItem from "./NavItem"
import { secciones } from "./secciones"

const NavList = () => {

    return (
        <ul className='flex flex-row w-2/3 h-full p-1 gap-4'>
            {secciones.map(s => <NavItem
                key={s.key}
                content={s.name}
                link={`${s.path}`}
            />)}
        </ul>
    )
}

export default NavList
