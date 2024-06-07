import Link from "next/link"

interface Props {
    content: string,
    link: string
}

const NavItem = (props: Props) => {

    return (
        <li className='p-2 border-b-2 border-transparent hover:border-b-2 hover:border-cyan-900 hover:text-cyan-900 hover:transition-colors'>
            <Link href={props.link}>
                {props.content}
            </Link>
        </li>
    )
}

export default NavItem