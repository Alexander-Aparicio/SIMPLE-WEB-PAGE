import Image from "next/image"
import styled from "styled-components"
import whatsApp from "../../public/logos/whatsApp.svg"

const Contact = styled.div`
    width:70px;
    height: 70px;
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
                <a href="https://api.whatsapp.com/send?phone=51957731940" rel="nofollow noreferrer" target="_blank" >
                    <Image src={whatsApp} layout="fill" alt="Botón de whatsapp" />
                </a> 
            </Contact>

        </div>
    )

}

export  default WhatsApp