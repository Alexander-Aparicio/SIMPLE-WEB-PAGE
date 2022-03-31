import Image from "next/image"
import styled from "styled-components";
import { ContentBox, Div, ImgBox, P, TextBox, TitleH2 } from "../Globales/StyleBase";
import img1 from "../../public/local1.png"
import img2 from "../../public/local2.png"
import img3 from "../../public/local3.png"

const DanceRoomSection = styled(ContentBox)`
margin:0% 0% 50px 0%;
position: relative;
background-color: transparent;
`
const Card = styled(ImgBox)`
border: solid 1px transparent;
border-radius: 15px;
img{
    border-radius: 15px;
}
`
const Box = styled(TextBox)`
max-width: 100%;
`
const Gallery = styled(Div)`
margin-top:20px;
justify-content: space-around;
`
const Title = styled(TitleH2)`
text-align: left;
padding: 1.5% 6% 0% 0%;
margin: 0% 6%;
/* @media (min-width:930px) {} */
`
const Text = styled(P)`
line-height: 2;
`

const DanceRoom =()=>{
    return(
        <DanceRoomSection>
            <Box>
                <Title>Instalaciones</Title>
                <Text>
                    El local se encuentra en un trecer piso, es un ambiente 
                    ventilado y cuenta con 2 baños. En las imágenes se puede 
                    apreciar el ambiente donde se dictan las clases.
                </Text>
            </Box>

            <Gallery>
                <Card><Image src={img1} width={463} height={272} alt={'Instalaciones'} /></Card>
                <Card><Image src={img2} width={463} height={272} alt={'Instalaciones'} /></Card>
                <Card><Image src={img3} width={463} height={272} alt={'Instalaciones'} /></Card>
            </Gallery>

        </DanceRoomSection>
    )
}

export{
    DanceRoom
}