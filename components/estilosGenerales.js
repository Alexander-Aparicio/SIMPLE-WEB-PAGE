import styled from "styled-components";

const TitleH1 = styled.h1`
    font-family: ${ props => (props.font ? props.font : "'Poppins',sans-serif")};
    font-size:${ props => (props.size ? props.size : '3rem')};
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
    font-size: ${ props => (props.size ? props.size : '2.7rem')};
    color: ${props => (props.color ? props.color : '#c83067')};
    text-align: ${ props => props.align || "center"};
    padding: ${ props => (props.padding ? props.padding : '1.5% 6%')};
    margin: ${ props => (props.margin ? props.margin : '25px 0px')};
    @media (min-width:930px) {
        font-size:${ props => (props.sizeG ? props.sizeG : '3.3rem')};    
    }
`
const TitleH3 = styled.h3`
    width:100%;
    font-family: ${ props => (props.font ? props.font : "'Poppins',sans-serif")};
    font-size: ${ props => (props.size ? props.size : '2.7rem')};
    color: ${props => (props.color ? props.color : '#c83067')};
    text-align: ${ props => props.align || "center"};
    padding: ${ props => (props.padding ? props.padding : '1.5% 6%')};
    margin: ${ props => (props.margin ? props.margin : '25px 0px')};
    @media (min-width:930px) {
        font-size:${ props => (props.sizeG ? props.sizeG : '3.2rem')};    
    }
`
const Page = styled.article`
    width: 100%;
    max-width:1600px;
    margin:auto;
    background-color:#fff;
    display: ${props => props.flex ? props.flex : 'block'};
    align-items: ${props => props.align ? props.align : ''};
    flex-direction: ${props => props.direction ? props.direction : ''};
    position: ${props=> props.position ? props.position : ''};
    padding-bottom:${props=> props.padding ? props.padding : '50px'};
    @media (min-width:415px){
        margin-top: 8.5vh;
        min-height:81.5vh;
    }
    @media (min-width:1500px){
        border-left:solid 1px #51515140;
        border-right:solid 1px #51515140;
    }
`
const P = styled.p`
padding: ${ props => (props.padding ? props.padding : '1.5% 6%')};
color: ${ props => (props.color ? props.color : '#1e1e1e')};
width: 100%;
font-weight:300;
font-family:${ props => (props.font ? props.font : "'Poppins',sans-serif")};
font-size:${ props => (props.size ? props.size : '1.6rem')};
text-align: ${props => props.align ? props.align : "left"};
`

export{
    TitleH1,
    TitleH2,
    TitleH3,
    Page ,
    P
}