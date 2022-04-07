import Link from "next/link"
import styled from "styled-components";
import Image from "next/image"
import { ContentBox, TextBox, P, TitleH2, ImgBox } from "../Globales/StyleBase";
import cornerInf from "../../public/cornerLeft.png"

const PricingSection = styled(ContentBox)`
margin:0% 0% 4% 0%;
padding-bottom: 5%;
box-shadow: 1px 1px 2px #0003;
position: relative;
`
const Card = styled(ImgBox)`
  position: absolute;
    bottom:0;
    right: 0;
    width: 15%;
    z-index: 1;
    background-color: transparent;
    justify-content: flex-start;
    padding: 0px;
    @media (min-width:415px){
      width: 10%;
    }
`
const Box = styled(TextBox)`
max-width:300px;
`
const Title = styled(TitleH2)`
text-align: left;
margin:0;
font-family: 'caveat', cursive;
font-size: 4rem;
`
const Text = styled(P)`
color:#EB6A50;
font-family: caveat , cursiva;
font-size: 2.5rem;
`
const Mensualidad = styled(P)`
background-color:#6571E0;
font-family: caveat , cursiva;
font-size: 3rem;
color: #fff;
text-align: center;
border-top-left-radius: 10px;
border-bottom-right-radius: 10px;
`
const Button = styled.button`
background-color: #EB6A50;
color: #ffffff;
padding: 15px 15px;
border-radius: 5px;
font-size: 2rem;
box-shadow: 1px 2px 3px #0005;
margin: 20px;
`

const Price = ()=>{
    return(
        <PricingSection>
            <Card><Image src={cornerInf} /></Card>
            <Box>
                <Title>Costo:</Title>
                <Mensualidad>Mensualidad:  S./100</Mensualidad>
                <Text>Comprende 4 clases de 2 horas</Text>
            </Box>

            <Box><Link href={"/inscripciones"}><Button>¡Quiero Inscribirme!</Button></Link></Box>

        </PricingSection>
    )
}

export{
    Price
}