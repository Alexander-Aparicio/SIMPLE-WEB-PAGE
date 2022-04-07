import styled from "styled-components"
import { Article, TextBox,P } from "../Globales/StyleBase"
import { BoxVideo, Video } from "../Globales/Video"

const IntroductionSection = styled(Article)`
justify-content: space-evenly;
`
const Box = styled(TextBox)`
padding-top: 30px;
padding-bottom: 30px;
    @media (min-width: 1060px){
        padding-top: revert;
        padding-bottom: revert;
    }
`
const VideoBox = styled(BoxVideo)`
box-shadow: 1px 2px 3px #0005;
`
const Text = styled(P)`
line-height: 2;
`

const Introduction = ()=>{
    return(
        <IntroductionSection>

            <VideoBox>
                <Video 
                url="https://youtu.be/DWebn9Fy7xg"
                volumen={0.5}
                width={'100%'}
                height={'100%'} 
                className="reproductor"
                />
            </VideoBox>

            <Box>
                <Text>
                📌 Clases dirigido para niñas y jóvenes a partir de 09 años en adelante. <br/>

                📌 Puedes venir con un acompañante (familiar, pareja o amigo).<br/>

                📌 Los sábados se graban las clases y se comparte los videos.<br/>

                📌 Tienes la posibilidad de formar parte del elenco de la academia.<br/>

                📌 Accedes a descuentos para clases de tenis de mesa en la academia revolution.
                </Text>
            </Box>

        </IntroductionSection>
    )
}

export{
    Introduction
}