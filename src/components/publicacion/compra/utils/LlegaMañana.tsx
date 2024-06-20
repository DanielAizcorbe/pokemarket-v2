import { FaTruckMoving } from "react-icons/fa";

export default function LlegaMañana(props) {

    return (
        <div className="flex gap-2 items-start bg-cyan-600 text-white">
            <div className="p-2">
                <FaTruckMoving />
            </div>
            <p>
                <span className="font-semibold">
                    Llega mañana
                </span>
            </p>
        </div>
    );
}