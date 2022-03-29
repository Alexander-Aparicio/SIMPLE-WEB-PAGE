import { P } from "../Globales/estilosGenerales"
import { BoxVideo, Video } from "../Globales/Video"
import { Article, TextBox, TitleH2 } from "./HomeStyles"


const Introduction = ()=>{
    return(
        <Article justify={'space-evenly'}>
            <BoxVideo>
                <Video 
                url="http://localhost:3000/prueba.mp4"
                volumen={1}
                width={'100%'}
                height={'100%'} 
                className="reproductor"
                />
            </BoxVideo>
            <TextBox>
                <P lineh={2}>
                📌 Clases dirigido para niñas y jóvenes a partir de 09 años en adelante. <br/>

                📌 Puedes venir con un acompañante (familiar, pareja o amigo).<br/>

                📌 Los sábados se graban las clases y se comparte los videos.<br/>

                📌 Tienes la posibilidad de formar parte del elenco de la academia.<br/>

                📌 Accedes a descuentos para clases de tenis de mesa en la academia revolution.
                </P>
            </TextBox>
        </Article>
    )
}

export{
    Introduction
}