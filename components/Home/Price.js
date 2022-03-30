import styled from "styled-components";
import { ContentBox, TextBox, P, TitleH2 } from "../Globales/StyleBase";

const PricingSection = styled(ContentBox)``
const Box = styled(TextBox)``
const Title = styled(TitleH2)``
const Text = styled(P)``
const Button = styled.button``

const Price = ()=>{
    return(
        <PricingSection>

            <Box>
                <Title>Costo:</Title>
                <Text>Comprende 4 clases de 2 horas</Text>
            </Box>

            <Box><Button>¡Quiero Inscribirme!</Button></Box>

        </PricingSection>
    )
}

export{
    Price
}