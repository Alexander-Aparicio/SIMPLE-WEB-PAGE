import Image from "next/image"
import styled from "styled-components"
import whatsApp from "../../public/logos/whatsApp.svg"

const Contact = styled.div`
    position:fixed;
    bottom:24%;
    right:3%;
    z-index:991;
    @media (min-width:600px){
        /* display:none; */
    }
    @media (min-width:1800px){
        right:7%;
    }

    img{
        width:100%;
        filter: drop-shadow(0 0 0.55rem #000)
    }
`

const WhatsApp = ()=>{

    return(

        <div>

            <Contact>
                <a href="https://api.whatsapp.com/send?phone=51940767038&text=Hola%20Revolution%20Dance%201" rel="nofollow noreferrer" target="_blank" >
                    <Image src={whatsApp} width={70} height={70} alt="Botón de whatsapp" />
                </a> 
            </Contact>

        </div>
    )

}

export  default WhatsApp