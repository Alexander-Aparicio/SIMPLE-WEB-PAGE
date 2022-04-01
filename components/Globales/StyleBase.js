import styled,{keyframes} from "styled-components";

const openOpacity = keyframes`
from {
    opacity:0%;
  }
  to {
    opacity:100%;
  }
`
const TitleH1 = styled.h1`
    font-family: ${ props => (props.font ? props.font : "'Poppins',sans-serif")};
    font-size:${ props => (props.size ? props.size : '3rem')};
    color: ${props => (props.color ? props.color : 'rgba(215, 33, 186, 0.86)')};
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
    color: ${props => (props.color ? props.color : 'rgba(215, 33, 186, 0.86)')};
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
    color: ${props => (props.color ? props.color : 'rgba(215, 33, 186, 0.86)')};
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
font-size:${ props => (props.size ? props.size : '16px')};
text-align: ${props => props.align ? props.align : "left"};
line-height: ${props => props.lineh ? props.lineh : "normal"};
`
const Ol = styled.ol`
padding: ${ props => (props.padding ? props.padding : '1.5% 6%')};
color: ${ props => (props.color ? props.color : '#1e1e1e')};
width: 100%;
font-weight:300;
font-family:${ props => (props.font ? props.font : "'Poppins',sans-serif")};
font-size:${ props => (props.size ? props.size : '16px')};
text-align: ${props => props.align ? props.align : "left"};
line-height: ${props => props.lineh ? props.lineh : "normal"};
`
const Div = styled.div`
    width:100%;
    display: ${ props => (props.display ? props.display : 'flex')};
    flex-wrap: ${ props => (props.wrap ? props.wrap : 'wrap')};
    flex-direction: ${ props => (props.direction ? props.direction : 'row')};
    background-color: ${ props => (props.background ? props.background : 'transparent')};
    padding: ${ props => (props.padding ? props.padding : '0')};
    border-radius: ${ props => (props.brodes ? props.brodes : '0')};
    margin: ${ props => (props.margin ? props.margin : '0% 0%')};
    align-items: ${ props => (props.alignItems ? props.alignItems : 'center')};
    justify-content: ${ props => (props.justify ? props.justify : 'center')};
    grid-template-columns: ${ props => (props.gridColumns ? props.gridColumns : '')};
    grid-template-rows: ${ props => (props.gridRows ? props.gridRows : '')};
    grid-gap: ${ props => (props.gridGap ? props.gridGap : '')};
    align-content: ${ props => (props.alignContent ? props.alignContent : '')};
    justify-items: ${ props => (props.justifyItems ? props.justifyItems : '')};
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
const ContentBox = styled.article`
    width:100%;
    display: ${ props => (props.display ? props.display : 'flex')};
    flex-wrap: ${ props => (props.wrap ? props.wrap : 'wrap')};
    align-items: ${ props => (props.alignItems ? props.alignItems : 'center')};
    padding: ${ props => (props.padding ? props.padding : '4% 0%')};
    justify-content: ${ props => (props.justify ? props.justify : 'space-evenly')};
    background-color: ${ props => (props.background ? props.background : '#FAF5FA')};
` 
const TextBox = styled.div`
    width:100%;
    display: ${ props => (props.display ? props.display : 'flex')};
    flex-wrap: ${ props => (props.wrap ? props.wrap : 'wrap')};
    flex-direction: ${ props => (props.direction ? props.direction : 'row')};
    align-items: ${ props => (props.alignItems ? props.alignItems : 'flex-start')};
    justify-content: ${ props => (props.justify ? props.justify : 'flex-start')};
    max-width: 660px;
`
const CardText = styled.div`
    width:100%;
    display: ${ props => (props.display ? props.display : 'flex')};
    flex-wrap: ${ props => (props.wrap ? props.wrap : 'wrap')};
    flex-direction: ${ props => (props.direction ? props.direction : 'row')};
    background-color: ${ props => (props.background ? props.background : '#FAF5FA')};
    max-width: ${ props => (props.maxWidth ? props.maxWidth : '360px')} ;
    align-items: ${ props => (props.align ? props.align : 'flex-start')};
    justify-content: ${ props => (props.justify ? props.justify : 'flex-start')};
    border: ${ props => (props.border ? props.border : 'solid 1px #E2DDDD')};
    border-radius: ${ props => (props.radius ? props.radius : '20px')};
    padding: ${ props => (props.padding ? props.padding : '20px')};
    position: relative;
`
const ImgBox = styled.div`
    width:100%;
    display: ${ props => (props.display ? props.display : 'flex')};
    flex-wrap: ${ props => (props.wrap ? props.wrap : 'wrap')};
    flex-direction: ${ props => (props.direction ? props.direction : 'row')};
    align-items: ${ props => (props.alignItems ? props.alignItems : 'center')};
    justify-content: ${ props => (props.justify ? props.justify : 'center')};
    max-width: ${ props => (props.maxWidth ? props.maxWidth : '400px')};
    max-height: ${ props => (props.maxHeight ? props.maxHeight : '300px')} ;
    border-radius:${ props => (props.radius ? props.radius : '7px')};
    background-color: ${ props => (props.background ? props.background : '#FAF5FA')};
`
const SlideBox = styled.div`
    width:100%;
    max-width: 1450px;
    position:relative;
    margin:auto;
    margin-bottom: 20px;
    @media (min-width:415px){
        max-height:90vh;
    }
`
const Slide = styled.article`
    width:100%;
    display: ${ props => (props.display ? props.display : 'flex')};
    flex-wrap: ${ props => (props.wrap ? props.wrap : 'wrap')};
    justify-content: ${ props => (props.justify ? props.justify : 'center')};
    align-items: ${ props => (props.alignItems ? props.alignItems : 'center')};
    height:100%;
    padding:${ props => (props.padding ? props.padding : '10px')};
    padding-top:100px;
    padding-left:24px;
    padding-right:15%;
    background:${ props => (props.background ? props.background : 'rgba(0,0,0,0.3)')};
    align-content: start;
    position: relative;
    @media (min-width:415px){
        padding-top: 0px;
    }
    @media (min-width:760px){
        padding-top: 10px;
        width:40%;
        padding-top: 10px;
        padding-right:5%;
    }
    @media (min-width:1300px){
        padding-top: 10px;
        width:35%;
        padding-top: 10px;
        padding-right:5%;
    }
`
const H1Slide = styled.h1`
    font-family: ${ props => (props.font ? props.font : "'Poppins',sans-serif")};
    padding: ${ props => (props.padding ? props.padding : '1.5% 6%')};
    margin: ${ props => (props.margin ? props.margin : '25px 0px')};
    text-align:${ props => props.align ? props.align : "left"};
    color:#fff;
    font-size:${ props => (props.size ? props.size : '3.4rem')};
    color:${props => (props.color ? props.color : '#ffe014')};
    animation: ${openOpacity} 1s linear;
    @media (min-width:415px){
        margin-bottom: 10px;
    }
    @media (min-width: 795px){
        font-size:35px;
        margin-bottom: 20px;
    }
    @media (min-width:930px) {
        font-size:${ props => (props.sizeG ? props.sizeG : '3.5rem')};
    }
    @media (min-width: 1025px){
        font-size:42px;
    }
`
const H2Slide = styled.h2`
    font-family: ${ props => (props.font ? props.font : "'Poppins',sans-serif")};
    padding: ${ props => (props.padding ? props.padding : '1.5% 6%')};
    margin: ${ props => (props.margin ? props.margin : '25px 0px')};
    text-align:${ props => props.align ? props.align : "left"};
    color:#fff;
    font-size:${ props => (props.size ? props.size : '3.4rem')};
    color:${props => (props.color ? props.color : '#ffe014')};
    animation: ${openOpacity} 1s linear;
    @media (min-width:415px){
        margin-bottom: 10px;
    }
    @media (min-width: 795px){
        font-size:35px;
        margin-bottom: 20px;
    }
    @media (min-width:930px) {
        font-size:${ props => (props.sizeG ? props.sizeG : '3.5rem')};
    }
    @media (min-width: 1025px){
        font-size:42px;
    }
`
const PSlide = styled.p`
    padding: ${ props => (props.padding ? props.padding : '1.5% 6%')};
    width: 100%;
    font-weight:300;
    text-align: ${props => props.align ? props.align : "left"};
    line-height: ${props => props.lineh ? props.lineh : "normal"};
    padding-right:10%;
    margin-top: 0px;
    text-shadow: ${props => props.shadow ? props.shadow : '0px 0px 30px #000'};
    font-size: ${props => props.size ? props.size : '2rem'};
    color: ${props => props.color ? props.color : '#fff'};
    font-family: ${props => props.font ? props.font : "'Poppins',sans-serif"};
    animation: ${openOpacity} 1.5s linear;
    @media (min-width:415px){
        padding-right:15%;
        font-size:1.5rem;
    }
    @media (min-width:560px){
        font-size: ${props => props.size ? props.size : '2rem'};
    }
`
const BoxCta = styled.div`
    width:100%;
    position:absolute;
    bottom: 13.5%;
    z-index:9;
    display:flex;
    justify-content:center;
`
const btnAnim1 = keyframes`
0% {
    left: -100%;
  }
  50%,100% {
    left: 100%;
  }
`
const btnAnim2 = keyframes`
0% {
    top: -100%;
  }
  50%,100% {
    top: 100%;
  }
`
const btnAnim3 = keyframes`
0% {
    right: -100%;
  }
  50%,100% {
    right: 100%;
  }
`
const btnAnim4 = keyframes`
0% {
    bottom: -100%;
  }
  50%,100% {
    bottom: 100%;
  }
`
const CtaButton = styled.button`
    position: relative;
    display: inline-block;
    overflow: hidden;
    transition: .5s;
    padding: 13px 25px;
    background-color: #c83067;
    font-size: 1.7rem;
    color:#fff;
    font-family: 'Poppins', sans-serif;
    border-radius:3px;
    animation: ${openOpacity} 1s linear;
    /* @media (min-width:415px){
        display:none;
    } */
    &:hover{
        border: solid 1px transparent;
    }
    span{
        position: absolute;
        display: block;
    }
    span:nth-child(1){
        top: 0;
        left: -100%;
        width: 100%;
        height: 2px;
        background: linear-gradient(90deg, transparent, #f4f4f4);
        animation: ${btnAnim1} 1s linear infinite;
    }
    span:nth-child(2) {
        top: -100%;
        right: 0;
        width: 2px;
        height: 100%;
        background: linear-gradient(180deg, transparent, #f4f4f4);
        animation: ${btnAnim2} 1s linear infinite;
        animation-delay: .25s
      }
    span:nth-child(3) {
        bottom: 0;
        right: -100%;
        width: 100%;
        height: 2px;
        background: linear-gradient(270deg, transparent, #f4f4f4);
        animation: ${btnAnim3} 1s linear infinite;
        animation-delay: .5s
      }
    span:nth-child(4) {
        bottom: -100%;
        left: 0;
        width: 2px;
        height: 100%;
        background: linear-gradient(360deg, transparent, #f4f4f4);
        animation: ${btnAnim4} 1s linear infinite;
        animation-delay: .75s
      }
`

export{
    TitleH1,
    TitleH2,
    TitleH3,
    Page ,
    P,
    Div,
    Article, 
    TextBox,
    ImgBox,
    ContentBox,
    CardText,
    Slide,
    SlideBox,
    H1Slide,
    H2Slide,
    PSlide,
    BoxCta,
    CtaButton,
    Ol
}