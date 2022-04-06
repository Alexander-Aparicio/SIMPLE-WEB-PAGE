import Image from "next/image"
import styled from "styled-components";
import { ContentBox, P, TextBox } from "../Globales/StyleBase";
import poster from "../../public/integrantes-de-academia.png"

const PosterSection = styled(ContentBox)`
margin:0px 0% 0px 0%;
position: relative;
background-color: transparent;
padding: 0;
`
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
const Text = styled(P)`
color: #fff;
line-height: 2;
font-size: 3rem;
text-align: center;
@media (min-width:550px){
    font-size: 5rem;
}
@media (min-width:415px){
    font-size: 4rem;
}
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