import { LayoutProps } from "../../../.next/types/app/layout";

export default function layout(props: LayoutProps) {

    return (
        <main className="w-full flex justify-center">
            <div className="flex flex-row max-w-7xl w-full justify-center">
                {props.children}
            </div>
        </main>

    );
}