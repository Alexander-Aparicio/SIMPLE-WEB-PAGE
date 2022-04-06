import Image from "next/image"
import styled from "styled-components"
import { ContentBox, ImgBox, TextBox, P, TitleH2 } from "../Globales/StyleBase"
import imgMetodologia from "../../public/academiadebaile.png"
import corner from "../../public/cornerOrange.png"

const MethodologySection = styled(ContentBox)`
margin:4% 0% 0% 0%;
padding-top: 30px;
position: relative;
@media (min-width: 1060px){
        padding-top: 4%;
    }
`
const Card = styled(ImgBox)`
border: solid 1px transparent;
padding-top: 30px;
padding-bottom: 30px;
padding-right: 5%;
padding-left: 5%;
    @media (min-width: 415px){
        padding-right: revert;
        padding-left: revert;
    }
    @media (min-width: 1060px){
        padding: revert;
    }
`
const Box = styled(TextBox)``

const Title = styled(TitleH2)`
text-align: left;
padding: 1.5% 6% 0% 0%;
margin: 0% 6%;
z-index:2;
/* @media (min-width:930px) {} */
`
const Text = styled(P)`
line-height: 2;
`

const Metodologia=()=>{

    return(
        <MethodologySection>
            <Card className="cornerRight">
                <Image src={corner}  alt={'esquina'} />
            </Card>
            
            <Box>
                <Title>Metología</Title>
                <Text>
                    Calentamiento.<br/>
                    Explicación de los pasos a través de técnicas de baile con ayuda de los espejos.<br/>
                    Ejecución por parte de los alumnos.<br/>
                    Ejecución de los pasos de menor a mayor velocidad.<br/>
                    Charla final de retroalimentación (Feedback)<br/>
                </Text>
            </Box>
            <Card>
                <Image 
                src={imgMetodologia} 
                width={450} height={300} 
                alt={'Academia de baile revolution'} 
                />
            </Card>

        </MethodologySection>
    )
}

export default Metodologia