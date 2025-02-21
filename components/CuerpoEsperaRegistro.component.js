import { Image } from "react-bootstrap"

const CuerpoEsperaRegistro = () => {
    return <div>
        <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
                <h2 className="mt-4 peru">Su cuenta está siendo validada, por favor espere unos minutos</h2>
                <Image 
                    src="http://1.bp.blogspot.com/_vrSyhLoesHU/TPkHq0hmdOI/AAAAAAAABR8/zbsB-WWhf4g/s1600/cargao.gif" 
                    alt="Aquí va una imagen referente a la espera"
                    thumbnail={true} 
                    className="my-2 mx-auto d-block">
                </Image>
            </div>
            <div className="col-md-3"></div>
        </div>
    </div>

}

export default CuerpoEsperaRegistro