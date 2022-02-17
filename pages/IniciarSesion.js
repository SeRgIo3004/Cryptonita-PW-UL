import Footer from "../components/footer.component";
import MenuNavegacion from "../components/menuNavegacion.component";
import FormularioIniciarSesion from "../components/FormularioIniciarSesion.component";

export default function IniciarSesionPage(){
    return <div>
        <MenuNavegacion></MenuNavegacion>
        <FormularioIniciarSesion></FormularioIniciarSesion>
        <Footer></Footer>
    </div>
}