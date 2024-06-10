import { Card } from "app/components/card/Card";

export default function page() {

    return (
        <div>
            <div className="flex flex-row p-4 gap-2">
                <Card
                    size={"sm"}
                />
                <Card
                    size={"md"}
                />
                <Card
                    size={"lg"}
                />
            </div>
            <div className="flex flex-row p-4 gap-2">
                <Card
                    size={"sm"}
                />
                <Card
                    size={"md"}
                />
                <Card
                    size={"lg"}
                />
            </div>
        </div>

    )
}
