import { capitalize } from "app/data/generadores/utils"

interface DescriptionProps {
    description: string
}

const CardDescription = (props: DescriptionProps) => {

    return (
        <h3 className={`flex text-wrap truncate p-1 h-2/5 font-semibold`}>
            {capitalize(props.description)}
        </h3>
    )
}

export default CardDescription