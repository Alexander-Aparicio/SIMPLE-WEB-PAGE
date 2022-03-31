import Image from "next/image"
import styled from "styled-components";
import { ContentBox, P, TextBox } from "../Globales/StyleBase";
import poster from "../../public/integrantes-de-academia.png"

const PosterSection = styled(ContentBox)`
margin:50px 0% 50px 0%;
position: relative;
background-color: transparent;
padding: 0;
`
// const Card = styled(ImgBox)`
// border: solid 1px transparent;
// `
const Box = styled(TextBox)`
background-color: #0005;
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
max-width: revert;
align-items: center;
justify-content: center;
`

// const Title = styled(TitleH2)`
// text-align: left;
// padding: 1.5% 6% 0% 0%;
// margin: 0% 6%;
// /* @media (min-width:930px) {} */
// `
const Text = styled(P)`
color: #fff;
line-height: 2;
font-size: 5rem;
text-align: center;
`

const Poster = ()=>{
    return(
        <PosterSection>
            <Image src={poster} alt={'Integrantes de la academia'} layout={'intrinsic'} />
            <Box>
                <Text>¡Te esperamos!</Text>
            </Box>
        </PosterSection>
    )
}

export default Poster