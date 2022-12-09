import Image from "next/image";
import styled from "styled-components";
import { CardText, ContentBox, ImgBox , P, TitleH2 } from "../Globales/StyleBase";
import Noelia from "../../public/noelia-castro.jpeg"
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

    return (
      <ScheduleSection>
        <Box>
          <div>
            <Image src={clip} width={40} height={60} />
          </div>
          <Title>Horarios:</Title>
          <Shedule>Baile Moderno :</Shedule>
          <Text>
            <strong>De 9 a 12 años:</strong>
            <br />
            Martes, jueves y sábados de 9 AM - 10 AM
            <br />
            <strong>De 13 años a más:</strong>
            <br />
            Martes, jueves y sábados de 11:30 AM - 12:30 PM
          </Text>
          <br />
          <Shedule>K-Pop :</Shedule>
          <Text>
            <strong>De 13 años a más:</strong>
            <br />
            Martes, jueves y sábados de 10:15 AM - 11:15 AM
          </Text>
          <br />
        </Box>

        <Card maxHeight={'400px'} maxWidth={'400px'}>
          <Image
            src={Noelia}
            width={400}
            height={400}
            alt={"Profesora Noelia"}
          />
        </Card>
      </ScheduleSection>
    );
}

export {
    Schedules
}