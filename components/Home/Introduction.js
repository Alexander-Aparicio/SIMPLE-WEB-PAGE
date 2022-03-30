import styled from "styled-components"
import { Article, TextBox,P } from "../Globales/StyleBase"
import { BoxVideo, Video } from "../Globales/Video"

const IntroductionSection = styled(Article)`
justify-content: space-evenly;
`
const Box = styled(TextBox)``
const VideoBox = styled(BoxVideo)``
const Text = styled(P)`
line-height: 2;
`

const Introduction = ()=>{
    return(
        <IntroductionSection>

            <VideoBox>
                <Video 
                url="http://localhost:3000/prueba.mp4"
                volumen={1}
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