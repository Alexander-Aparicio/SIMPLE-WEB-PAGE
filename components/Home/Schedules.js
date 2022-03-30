import Image from "next/image";
import styled from "styled-components";
import { P, TitleH2 } from "../Globales/estilosGenerales";
import { CardText, ContentBox, ImgBox } from "./HomeStyles";
import Noelia from "../../public/prof-Noelia-Castro.png"

const Horario = styled(P)`
margin: 0;
margin-left: 20px;
padding: 10px;
background-color: #DC3FC3;
width: auto;
color: #fff;
font-size: 2rem;
font-family: caveat;
padding: 1.5% 6%;
`
const Titulo = styled(TitleH2)`
text-align: left;
padding-bottom: 0;
padding-top: 0;
`

const Schedules = ()=>{

    return(
        <ContentBox>

            <CardText >
                <Titulo>Horarios:</Titulo>
                <Horario>Sábados: 11 AM - 1 PM</Horario>
                <P>Próximo nuevo horario:<br/>
                Sábados de 9 AM - 11 AM
                </P>
            </CardText>
            
            <ImgBox>
                <Image src={Noelia} width={673} height={430} alt={'Profesora Noelia'} />
            </ImgBox>
        </ContentBox>
    )
}

export {
    Schedules
}