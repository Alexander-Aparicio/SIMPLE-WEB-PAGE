import styled from "styled-components"
import { TextBox,P, ContentBox, TitleH2, BoxCta, CtaButton } from "../Globales/StyleBase"
import { BoxVideo, Video } from "../Globales/Video"

const SampleClassSection = styled(ContentBox)`
`
const Title = styled(TitleH2)`
text-align: left;
`
const Box = styled(TextBox)``

const Button = styled.button`
background-color: #CD55BA;
color: #ffffff;
padding: 15px 15px;
border-radius: 5px;
font-size: 2rem;
margin: auto;
margin-top: 20px;
`
const VideoBox = styled(BoxVideo)``
const Text = styled(P)`
line-height: 2;
`

const SampleClass = ()=>{
    return(
        <SampleClassSection>

            <Box>
                <Title>¿Estas en duda o no sabes si es para ti?</Title>
                <Text>
                Te invitamos a una clase sin compromiso de inscripción, si 
                al finalizar sientes que es lo que búscabas te inscribes y 
                si no es así no hay problema.
                <br/>
                En Revolution Dance nos interesa que estes motivado(a) y 
                feliz por formar parte de la academia.<br/>
                <strong>¡No pierdas esta oportunidad!</strong>
                </Text>
                
                <Button>Separar Clase de Muestra</Button>
                
            </Box>

            <VideoBox>
                <Video 
                url="http://localhost:3000/prueba.mp4"
                volumen={1}
                width={'100%'}
                height={'100%'} 
                className="reproductor"
                />
            </VideoBox>

        </SampleClassSection>
    )
}

export{
    SampleClass
}