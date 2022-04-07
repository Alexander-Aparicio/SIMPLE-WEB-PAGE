import Image from "next/image";
import styled from "styled-components";
import { CardText, ContentBox, ImgBox , P, TitleH2 } from "../Globales/StyleBase";
import Noelia from "../../public/prof-Noelia-Castro.jpg"
import clip from "../../public/clip.svg"

const ScheduleSection = styled(ContentBox)`
background-color: transparent;
padding: 10% 0%;
background-image: url('./fondo.jpg');
background-position: center;
`

const Box = styled(CardText)`
margin: 30px 5%;
position: relative;
& div{
    position: absolute;
    top:0;
    left: -3px;
}
& div img{
    border-radius: 15px;
}
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
font-family: 'caveat', cursive;
font-size: 4rem;
`
const Shedule = styled(P)`
margin: 0;
margin-left: 20px;
padding: 10px;
background-color: #DC3FC3;
width: auto;
color: #fff;
font-size: 2.5rem;
font-family: caveat;
padding: 1.5% 6%;
margin-bottom: 10px;
border-top-left-radius: 10px;
border-bottom-right-radius: 10px;
`
const Text = styled(P)``

const Card = styled(ImgBox)`
margin-left: 5%;
margin-right:5%;
border-radius: 15px;
`

const Schedules = ()=>{

    return(
        <ScheduleSection>

            <Box>
                <div>
                <Image src={clip} width={40} height={60} />
                </div>
                
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