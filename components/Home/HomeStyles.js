import styled from "styled-components"
import { Div } from "../Globales/estilosGenerales"

const TitleH1 = styled.h1`
    font-family: ${ props => (props.font ? props.font : "'Poppins',sans-serif")};
    font-size:${ props => (props.size ? props.size : '30px')};
    color: ${props => (props.color ? props.color : '#c83067')};
    text-align: ${ props => props.align ? props.align : "center"};
    padding: ${ props => (props.padding ? props.padding : '1.5% 6%')};
    margin: ${ props => (props.margin ? props.margin : '25px 0px')};
    @media (min-width:930px) {
        font-size:${ props => (props.sizeG ? props.sizeG : '3.5rem')};
    }
`
const TitleH2 = styled.h2`
    width:100%;
    font-family: ${ props => (props.font ? props.font : "'Poppins',sans-serif")};
    font-weight:600;
    font-size: ${ props => (props.size ? props.size : '3rem')};
    color: ${props => (props.color ? props.color : '#c83067')};
    text-align: ${ props => props.align || "center"};
    padding: ${ props => (props.padding ? props.padding : '1.5% 6%')};
    margin: ${ props => (props.margin ? props.margin : '25px 0px')};
    @media (min-width:930px) {
        font-size:${ props => (props.sizeG ? props.sizeG : '2.7rem')};    
    }
`
const TitleH3 = styled.h3`
    width:100%;
    font-family: ${ props => (props.font ? props.font : "'Poppins',sans-serif")};
    font-size: ${ props => (props.size ? props.size : '27px')};
    color: ${props => (props.color ? props.color : '#c83067')};
    text-align: ${ props => props.align || "center"};
    padding: ${ props => (props.padding ? props.padding : '1.5% 6%')};
    margin: ${ props => (props.margin ? props.margin : '25px 0px')};
    @media (min-width:930px) {
        font-size:${ props => (props.sizeG ? props.sizeG : '3.2rem')};    
    }
`
const Article = styled.article`
    width:100%;
    display: ${ props => (props.display ? props.display : 'flex')};
    flex-wrap: ${ props => (props.wrap ? props.wrap : 'wrap')};
    justify-content: ${ props => (props.justify ? props.justify : 'center')};
    align-items: ${ props => (props.alignItems ? props.alignItems : 'center')};
    padding: ${ props => (props.padding ? props.padding : '4% 0%')};
    margin: ${ props => (props.margin ? props.margin : '0% 0%')};
    background-color: ${ props => (props.background ? props.background : 'transparent')};
    border-radius: ${ props => (props.brodes ? props.brodes : '0')};
    grid-template-columns: ${ props => (props.gridColumns ? props.gridColumns : '')};
    grid-template-rows: ${ props => (props.gridRows ? props.gridRows : '')};
    grid-gap: ${ props => (props.gridGap ? props.gridGap : '')};
    align-content: ${ props => (props.alignContent ? props.alignContent : '')};
    justify-items: ${ props => (props.justifyItems ? props.justifyItems : '')};
    position: relative;
`
const TextBox = styled(Div)`
max-width: 660px;
align-items: flex-start;
justify-content: flex-start;
`
const ImgBox = styled(Div)`
width:100%;
max-width:400px;
max-height:300px;
padding-right: 0%;
border-radius:7px;
background-color: #FAF5FA;
border: ${ props => (props.border ? props.border : 'solid 1px #E2DDDD')};
`

export{
    Article, 
    TitleH1, 
    TitleH2,
    TitleH3,
    TextBox,
    ImgBox
}