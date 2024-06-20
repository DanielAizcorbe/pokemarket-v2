import LlegaMañana from "./utils/LlegaMañana";
import { FaRedo } from "react-icons/fa";
import { FaShieldAlt } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";

export default function DetallesCompra(props) {

    return (
        <div className="p-4 flex flex-col justify-start items-start gap-3">
            <div className="flex gap-2 items-start">
                <div className="p-2 text-slate-600">
                    <FaRedo />
                </div>
                <p>
                    <span className="font-semibold">
                        Devolución gratis.
                    </span>
                    Tenés 30 días desde que lo recibís.
                </p>
            </div>
            <div className="flex gap-2 items-start">
                <div className="p-2 text-slate-600">
                    <FaShieldAlt />
                </div>
                <p>
                    <span className="font-semibold">
                        Compra Protegida.
                    </span>
                    Se abrirá en una nueva ventana, recibí el producto que esperabas o te devolvemos tu dinero.
                </p>
            </div>
            <div className="flex gap-2 items-start">
                <div className="p-2 text-slate-600">
                    <FaCheckCircle />
                </div>
                <p>
                    <span className="font-semibold">
                        Continua aprendiendo.
                    </span>
                    Recuerda que los pokemons de niveles altos solo hacen caso a los mejores entrenadores.
                </p>
            </div>
        </div>
    );
}