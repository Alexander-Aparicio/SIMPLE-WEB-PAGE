import Image from "next/image";
import styled from "styled-components"

const BoxSlide = styled.figure`
    width:100%;
    margin:auto;
    margin-top:0;
    display: flex;
    justify-content:center;
    align-items:center;
    @media (min-width:415px){
        width:90%;
    }
    
    position:relative;
    @media (min-width: 800px){
        margin:auto;
        max-height:400px;
    }
    & img{
        width:100%;
        object-fit:cover;
        object-position: center bottom;
    }
    & figcaption{
        position: absolute;
        top:0;
        right:0;
        left:0;
        bottom:0;
        width:100%;
        display:flex;
        align-items:center;
        flex-wrap:wrap;
        align-content: flex-start;
    }
`
const MySlide = ({children, ...props})=>{

    return(

        <BoxSlide>
            <Image src={props.imgBig} alt={props.alt} width={1570} height={600} priority/>
            <figcaption>{children}</figcaption>
        </BoxSlide> 

    )
}

export { MySlide }

