import Cabecera from "components/Cabecera/Cabecera";
import Container from "components/Container";
import Pie from "components/Pie";
import FavoritosProvider from "context/Favoritos";
import { Outlet } from "react-router-dom";

function PaginaBase(){

    return(
        <main>
            <Cabecera></Cabecera>
            <FavoritosProvider>
                <Container>
                    <Outlet></Outlet>
                </Container>
            </FavoritosProvider>
            <Pie></Pie>
        </main>
    )
}

export default PaginaBase;