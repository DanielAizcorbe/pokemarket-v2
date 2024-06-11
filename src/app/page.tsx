import TituloPrincipal from "app/components/pagina-principal/TituloPrincipal";
import Ofertas from "app/components/pagina-principal/Ofertas";
import Nuevos from "app/components/pagina-principal/Nuevos";
import Tendencias from "app/components/pagina-principal/Tendencias";
import PokemonSponsor from "app/components/shared/anuncios/PokemonSponsor";

export default function page() {
  return (
    <>
      <TituloPrincipal />
      <div className="w-full h-full py-4 flex flex-col gap-4 justify-center items-center">
        <Ofertas />
        <Nuevos />
        <PokemonSponsor />
        <Tendencias />
      </div>
    </>
  );
}
