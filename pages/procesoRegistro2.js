import Footer from "../components/footer.component"
import FormularioProcesoRegistro2 from "../components/FormularioProcesoRegistro2.component"
import MenuNavegacion from "../components/menuNavegacion.component"

const ProcesoRegistro2Page = () => {
    return <div className="row">
        <MenuNavegacion/>
        <div className="col-md-3"></div>
        <div className="col-md-6 mt-4">
            <div className="card">
                <div className="card-body">
                    <FormularioProcesoRegistro2/>
                </div>
            </div>
        </div>
        <div className="col-md-3"></div>
        <Footer/>
    </div>
}
export default ProcesoRegistro2Page