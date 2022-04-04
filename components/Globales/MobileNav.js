import Link from "next/link";
import styled  from "styled-components";
import { TitleH2 } from "../Globales/StyleBase";

const MenuTitle = styled(TitleH2)``

const UiMenu = styled.section`
    display: ${ props => props.visible ? 'flex' : 'none'};
    position:fixed;
    top:0;
    bottom:0;
    left:0;
    right:0;
    background-color:rgba(215,33,186,0.86); 
    z-index:9999;
    flex-direction:column;
    justify-content: center;
    align-items:center;
    height:100%;
    width:100%; 

    & a{
        color: #fff;
        font-size:2rem;
        font-family: 'Poppins', sans-serif;
        margin: 20px 15px;
        border-bottom: solid 1px transparent;
    }
    & .seleccionado{
        border-bottom: solid 1px #ffff;
    }
`

const MobileNav = (props)=>{

    return(
        <UiMenu visible={props.visible}>
      
            <MenuTitle color={"#fbc330"}>Menú</MenuTitle>

            <Link 
            onClick={ ()=> props.handleMenu()} 
            href={"/"} 
            >Home</Link>

            <Link 
            onClick={ ()=> props.handleMenu()} 
            href={"/inscripciones"}
            >Inscribirme</Link>

        </UiMenu>
    )

} 

export default MobileNav