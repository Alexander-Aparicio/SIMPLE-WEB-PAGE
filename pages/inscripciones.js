import Header from "../components/Globales/Header"
import { TitleH1 } from "../components/Globales/StyleBase"

const { Inscription } = require("../components/Inscripciones/Inscripciones")


const Inscripciones = ()=>{

    return(
        <>
        <Header />
        <TitleH1>Inscripciones para la academia</TitleH1>
        <Inscription />
        </>
    )
}

export default Inscripciones