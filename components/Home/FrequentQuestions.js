import styled from "styled-components";
import { ContentBox, P, TextBox, TitleH2, TitleH3 } from "../Globales/StyleBase";

const QuestionsSection = styled(ContentBox)`
margin:0%;
padding-top: 30px;
position: relative;
@media (min-width: 1060px){
        padding-top: 4%;
    }
`
const Title = styled(TitleH2)`
text-align: left;
padding: 1.5% 6% 0% 0%;
margin: 3% 5%;
z-index:2;
font-size: 2.7rem;
@media (min-width:415px) {
    font-size: 3.2rem;
}
`
const Title2 = styled(TitleH3)`
text-align: left;
padding: 1.5% 6% 0% 0%;
margin: 0% 6%;
z-index:2;
font-size: 2.4rem;
@media (min-width:415px) {
    font-size: 3.2rem;
}
`
const Text = styled(P)`
line-height: 2;
`

const FrequentQuestions = ()=>{
    return(
        <QuestionsSection>
            <Title>Preguntas Frecuentes</Title>

            <Title2>¿En cuánto tiempo se puede aprender una coreografía completa de k-pop?</Title2>
            <Text>
                Si no tienes mucha experiencia lo podrías lograr en un mes con ensayos de 1h dos veces 
                por semana o en ensayos de 2h una vez a la semana, ten en cuenta que esto puede variar 
                dependiendo de tu facilidad para aprender y la complejidad de la coreografía.
            </Text>

            <Title2>¿El género de baile “K-pop” es un estilo único?</Title2>
            <Text>
                El género del K-pop es una mezcla de ritmos que va desde lo contemporáneo 
                hasta el dancehall o estilo urbano, donde los movimientos estilizados, 
                pero a la vez con exactitud, pueden ser variados y creativos al momento 
                de ejecutar una coreografía.
            </Text>

            <Title2>¿Por qué se considera “cover” a los grupos que bailan K-pop?</Title2>
            <Text>
                Por la razón que realizamos un tributo a nuestros grupos favoritos, ya sea de 
                girlbands o boybands, asimilando las coreografías grupales para que posteriormente 
                sea presentada en diferentes espacios o escenarios.
            </Text>

            <Title2>¿Cuáles son las ventajas de aprender el K-pop?</Title2>
            <Text>
                Practicar el estilo de baile del K-pop, te da agilidad en tus movimientos, capacidad 
                para adaptarte a cualquier estilo de baile, precisión y estética en tus pasos, 
                actitud y desenvolvimiento escénico.
            </Text>

        </QuestionsSection>
    )
}

export default FrequentQuestions