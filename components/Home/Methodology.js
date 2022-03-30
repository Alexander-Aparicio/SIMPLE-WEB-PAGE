import Image from "next/image"
import { P } from "../Globales/estilosGenerales"
import { Article, ContentBox, ImgBox, TextBox, TitleH1, TitleH2 } from "./HomeStyles"
import imgMetodologia from "../../public/academiadebaile.png"
import corner from "../../public/cornerOrange.png"

const Metodologia=()=>{

    return(
        <ContentBox margin={'0% 0% 50px 0%'}>
            <ImgBox className="cornerRight" border={'trasnparent'}>
                <Image src={corner}  alt={'esquina'} />
            </ImgBox>
            
            <TextBox>
                <TitleH2 align={'left'} padding={'1.5% 6% 0% 0%'} margin={'0% 6%'}>Metología</TitleH2>
                <P lineh={2}>
                    Calentamiento.<br/>
                    Explicación de los pasos a través de técnicas de baile con ayuda de los espejos.<br/>
                    Ejecución por parte de los alumnos.<br/>
                    Ejecución de los pasos de menor a mayor velocidad.<br/>
                    Charla final de retroalimentación (Feedback)<br/>
                </P>
            </TextBox>
            <ImgBox>
                <Image src={imgMetodologia} width={450} height={300} alt={'Academia de baile revolution'} />
            </ImgBox>

        </ContentBox>
    )
}

export default Metodologia