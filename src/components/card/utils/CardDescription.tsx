
interface DescriptionProps {
    description: string
}

const CardDescription = (props: DescriptionProps) => {

    return (
        <p className={`flex text-wrap truncate p-1 h-2/5`}>
            {props.description}
        </p>
    )
}

export default CardDescription