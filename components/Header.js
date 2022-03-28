import { Encabezado, Figure } from "./HeaderStyles"
import Image from "next/image"
import Logotipo from "../public/logo-kpop-dance-revolution.png"

const Logo = ({nameOne, nameTwo, logo})=>{
    return(
        <Figure>
            <Image src={logo} alt={`${nameOne} ${nameTwo}`} width={40} height={50} />
            <figcaption>
                <p>{nameOne}</p>
                <p>{nameTwo}</p>
            </figcaption>
        </Figure>
    )
}


const Header = ()=>{

    return(

        <Encabezado>
            <Logo logo={Logotipo} nameOne={'REVOLUTION'}  nameTwo={'DANCE'} />
            {/* {window.matchMedia("(min-width: 600px)").matches ? <Navegation home="Home" blog="Blog" tienda="Tienda" /> : null} */}
            
        </Encabezado>
        
    )

}

export default Header