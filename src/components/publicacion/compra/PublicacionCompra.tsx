import BotonAddCarrito from "./BotonAddCarrito";
import BotonComprar from "./BotonComprar";
import DetallesCompra from "./DetallesCompra";

export default function PublicacionCompra() {

    return (
        <div className="flex flex-col w-1/3">
            <DetallesCompra />
            <div className="flex flex-col p-4 gap-2">
                <BotonComprar />
                <BotonAddCarrito />
            </div>
        </div>
    );
}