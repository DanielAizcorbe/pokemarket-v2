import { Card } from "app/components/card/Card";

export default function page() {

    return (
        <div>
            <div className="flex flex-row p-4 gap-2">
                <Card
                    size={"sm"}
                    distribution="vertical"
                />
                <Card
                    size={"md"}
                    distribution="vertical"
                />
                <Card
                    size={"lg"}
                    distribution="vertical"
                />
            </div>
            <div className="flex flex-row p-4 gap-2">
                <Card
                    size={"sm"}
                    distribution="horizontal"
                />
                <Card
                    size={"md"}
                    distribution="horizontal"
                />
                <Card
                    size={"lg"}
                    distribution="horizontal"
                />
            </div>
        </div>

    )
}
