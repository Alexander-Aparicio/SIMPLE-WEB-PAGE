import Image from "next/image";
import styled from "styled-components"
import useWindowDimensions from "../../helpers/WindowDimension";

const BoxSlide = styled.section`
    width:100%;
    margin:auto;
    margin-top:0;
    display: flex;
    justify-content:center;
    align-items:center;
    position:relative;
    @media (min-width:415px){
        width:90%;
    }
    @media (min-width: 800px){
        margin:auto;
        max-height:400px;
    }
    img{
        width:100%;
        object-fit:cover;
        object-position: center;
    }
    & div{
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

    const {width} = useWindowDimensions()

    return(
        <BoxSlide>

        {width > 450 
            ?(<Image src={props.imgBig} alt={props.alt} width={1570} height={600} />) 
            :(<Image src={props.imgSmall} alt={props.alt} width={450} height={750} />)
        } 

        <div>{children}</div>

        </BoxSlide> 
    )
}

export { MySlide }

