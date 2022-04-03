
import Image from "next/image"
import Link from 'next/link'
import useWindowDimensions from "../../helpers/WindowDimension"
import Logotipo from "../../public/logo-kpop-dance-revolution.png"
import { Encabezado, Figure , Navbar, OptionMenu} from "./HeaderStyles"


const Logo = ({nameOne, nameTwo, logo})=>{
    return(
        <Figure>
            <Image src={logo} alt={`${nameOne} ${nameTwo}`} width={40} height={50} />
            <figcaption>
                <p>{nameOne}</p><br/>
                <p>{nameTwo}</p>
            </figcaption>
        </Figure>
    )
}

const Navegation =( {home, blog, tienda, clase} )=>{

    return(

        
        <Navbar>

            {home ? (
                <OptionMenu>
                    <Link 
                    href={"/"}
                    // className={({isActive})=> isActive ? "seleccionado" :"noSeleccionado"}
                    >{home}</Link>
                </OptionMenu>
            ): null}

            {blog ?  (
                <OptionMenu>
                    <Link 
                    href={"/inscripciones"}
                    // className={({isActive})=> isActive ? "seleccionado" :"noSeleccionado"}
                    >{blog}</Link>
                </OptionMenu>
            ) : null}
            
            {tienda ? (
                <OptionMenu>
                    <Link 
                    href={"/tienda"}
                    // className={({isActive})=> isActive ? "seleccionado" :"noSeleccionado"}
                    >{tienda}</Link>
                </OptionMenu>
            ): null}

            {clase ? (
                <OptionMenu>
                    <Link 
                    href={"/clase-gratis"}
                    // className={({isActive})=> isActive ? "seleccionado" :"noSeleccionado"}
                    >{clase}</Link>
                </OptionMenu>
            ): null}
            
        </Navbar>

    )

}


const Header = ()=>{

    const {width} = useWindowDimensions()

    return(

        <Encabezado>
            <Logo logo={Logotipo} nameOne={'REVOLUTION'}  nameTwo={'DANCE'} />
            {width > 600 ? <Navegation home="Home" blog="Inscribirme" /> : null}
            
        </Encabezado>
        
    )

}

export default Header