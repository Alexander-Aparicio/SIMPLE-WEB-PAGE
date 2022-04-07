import Image from "next/image"
import styled from "styled-components"
import {useState} from "react"
import btnClose from "../../public/logos/close.svg"
import btnOpen from "../../public/logos/open.svg"
import Link from "next/link";
import { P, TitleH2 } from "./StyleBase"


const Hamburger = styled.div`
    width:50px;
    position:fixed;
    top:1%;
    right:3%;
    z-index:9999991;
    @media (min-width:600px){
        display:none;
    }

    img{
        width:100%;
        filter: drop-shadow(0 0 0.75rem #000)
    };
`

const MenuTitle = styled(TitleH2)`
    margin-bottom: 0;
`

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
    & p{
        text-align:center;
        padding: 1.5rem;
    }

    & p a{
        color: #fff;
        font-size:2.5rem;
        font-family: 'Poppins', sans-serif;
        margin: 20px 15px;
        border-bottom: solid 1px transparent;
    }
`

const MenuMobile = ()=>{

    const [openMenu, setOpenMenu] = useState(false)

    const handleMenu = ()=>{

        setOpenMenu(!openMenu)
    }

    return(
        <>
            <div>

                <Hamburger onClick={ handleMenu }>
                    { openMenu === false 
                        ? <Image className="open" src={btnOpen} alt="Botón de menú" />
                        : <Image className="close" src={btnClose} alt="Botón de menú" />
                    }  
                </Hamburger>

                <UiMenu visible={openMenu}>
                    
                <MenuTitle color={"#fbc330"}>Menú</MenuTitle>

                <P onClick={ handleMenu } >
                    <Link 
                    href={"/"} 
                    >Inicio</Link>
                </P>

                <P onClick={ handleMenu } >
                    <Link 
                    href={"/inscripciones"}
                    >Inscribirme </Link>
                </P>

                </UiMenu>

            </div>
        </>
    )

}

export  default MenuMobile