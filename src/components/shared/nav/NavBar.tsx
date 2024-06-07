import NavList from "./utils/NavList"

const NavBar = () => {
    return (
        <nav className='w-full h-12 text-white bg-cyan-600 flex justify-center'>
            <div className='w-full flex flex-row px-5 max-w-7xl'>
                <NavList />
            </div>
        </nav>
    )
}

export { NavBar }