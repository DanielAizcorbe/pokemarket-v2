"use client"
import { useState } from "react";
import { FaUndo } from "react-icons/fa";

export function PublicacionImage(props) {
    const [showFront, setShowFront] = useState(true);
    const image = props.images[showFront ? 0 : 1];

    const toggleImage = () => {
        setShowFront(!showFront);
    }

    return (
        <div className="w-1/3">
            <div className="flex flex-col items-end bg-slate-200 rounded-xl">
                <div className="w-96 h-96 relative">  <div
                    className={`h-full w-auto bg-center bg-no-repeat`}
                    style={{
                        backgroundImage: `url(${image})`,
                        backgroundSize: "340px 340px"
                    }}
                >
                </div>
                    <div
                        className="absolute bottom-2 right-2 p-2 bg-gray-100 rounded-full cursor-pointer hover:text-cyan-700 hover:transition-colors"
                        onClick={toggleImage}
                    >
                        <FaUndo
                            className=" flex justify-center items-center"
                        />
                    </div>
                </div>
            </div>
        </div>

    );
}