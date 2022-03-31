import styled from "styled-components";
import { ContentBox, TextBox, P, TitleH2 } from "../Globales/StyleBase";

const PricingSection = styled(ContentBox)``
const Box = styled(TextBox)`
max-width:300px
`
const Title = styled(TitleH2)`
text-align: left;
margin:0;
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
`
const Button = styled.button`
background-color: #EB6A50;
color: #ffffff;
padding: 15px 15px;
border-radius: 5px;
font-size: 2rem;
`

const Price = ()=>{
    return(
        <PricingSection>

            <Box>
                <Title>Costo:</Title>
                <Mensualidad>Mensualidad:  S./100</Mensualidad>
                <Text>Comprende 4 clases de 2 horas</Text>
            </Box>

            <Box><Button>¡Quiero Inscribirme!</Button></Box>

        </PricingSection>
    )
}

export{
    Price
}