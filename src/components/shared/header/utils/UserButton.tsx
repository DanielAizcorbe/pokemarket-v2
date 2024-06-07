import Link from "next/link"
import { FaRegUser } from "react-icons/fa6";

export const UserButton = () => {

    return (
        <div className='w-1/6 h-full flex justify-center items-center'>
            <Link
                href={"#"}
                className="border rounded-full p-3 hover:bg-cyan-600"
            >
                <FaRegUser color="white" role="button" size="25px"/>
            </Link>
        </div>
    )
}
