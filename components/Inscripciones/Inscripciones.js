import styled from "styled-components"
import { ContentBox, ImgBox, Ol, P, TextBox, TitleH2 } from "../Globales/StyleBase"


const InscriptionSection = styled(ContentBox)`
margin:0% 0% 50px 0%;
position: relative;
`
const Card = styled(ImgBox)`
border: solid 1px transparent;
`
const Box = styled(TextBox)``

const Title = styled(TitleH2)`
text-align: left;
padding: 1.5% 6% 0% 0%;
margin: 0% 6%;
/* @media (min-width:930px) {} */
`
const Lista =  styled(Ol)``
const Text = styled(P)`
line-height: 2;
`

const Inscription =()=>{
    return(
        <InscriptionSection>
            <Box>
                <Title>Proceso de Inscripción</Title>
                <Ol>
                    <li>Llena el formulario.</li>
                    <li>Escríbenos al WhatsApp pidiendo la confirmación de tu registro de inscripción.</li>
                    <li>Realiza el pago y envia la constancia (imagen) por WhatsApp para enviarte tu recibo.</li>
                    <li>Listo eso fue todo, ya formas parte de la academia de baile</li>
                </Ol>
            </Box>
        </InscriptionSection>
    )
}

export {
    Inscription
}