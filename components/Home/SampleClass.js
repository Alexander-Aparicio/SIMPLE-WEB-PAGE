import styled from "styled-components"
import { TextBox,P, ContentBox, TitleH2, BoxCta, CtaButton } from "../Globales/StyleBase"
import { BoxVideo, Video } from "../Globales/Video"

const SampleClassSection = styled(ContentBox)`
margin:4% 0% 4% 0%;
padding-bottom: 6%;
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
const VideoBox = styled(BoxVideo)`
box-shadow: 1px 2px 3px #0005;
margin-top: 30px;
margin-bottom: 30px;
    @media (min-width: 1060px){
        margin-top: revert;
        margin-bottom: revert;
    }
`
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
                url="https://youtu.be/eIpjDC52htk"
                volumen={0.5}
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