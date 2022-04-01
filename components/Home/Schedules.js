import Image from "next/image";
import styled from "styled-components";
import { CardText, ContentBox, ImgBox , P, TitleH2 } from "../Globales/StyleBase";
import Noelia from "../../public/prof-Noelia-Castro.png"

const ScheduleSection = styled(ContentBox)`
background-color: transparent;
padding: 6% 0%;
`

const Box = styled(CardText)`
margin-top: 30px;
margin-bottom: 30px;
    @media (min-width: 1060px){
        margin-top: revert;
        margin-bottom: revert;
    }
`

const Title = styled(TitleH2)`
text-align: left;
padding-bottom: 0;
padding-top: 0;
margin:0;
`
const Shedule = styled(P)`
margin: 0;
margin-left: 20px;
padding: 10px;
background-color: #DC3FC3;
width: auto;
color: #fff;
font-size: 2rem;
font-family: caveat;
padding: 1.5% 6%;
margin-bottom: 10px;
`
const Text = styled(P)``

const Card = styled(ImgBox)``

const Schedules = ()=>{

    return(
        <ScheduleSection>

            <Box>
                <Title>Horarios:</Title>
                <Shedule>Sábados: 11 AM - 1 PM</Shedule>
                <Text>
                    Próximo nuevo horario:<br/>
                    Sábados de 9 AM - 11 AM
                </Text>
            </Box>
            
            <Card>
                <Image src={Noelia} width={673} height={430} alt={'Profesora Noelia'} />
            </Card>
        </ScheduleSection>
    )
}

export {
    Schedules
}