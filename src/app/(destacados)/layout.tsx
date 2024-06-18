import TituloPrincipal from "app/components/pagina-principal/TituloPrincipal";
import PokemonSponsor from "app/components/shared/anuncios/PokemonSponsor";
import React from "react";

interface Props {
    children: React.ReactNode,
    ofertas: React.ReactNode,
    tendencias: React.ReactNode,
    nuevos: React.ReactNode
}

export default function RootLayout(props: Props) {
    return (
        <div className="w-full h-full py-4 flex flex-col gap-4 justify-center items-center">
            <TituloPrincipal />
            {props.ofertas}
            {props.tendencias}
            <PokemonSponsor />
            {props.nuevos}
        </div>
    );
}
