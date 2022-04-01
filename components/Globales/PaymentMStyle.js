import Image from "next/image"
import styled from "styled-components";
import { P, TitleH3 } from "./StyleBase";

const SectionMediosPago = styled.article`
    margin:4% 0% 4% 0%;
    width: 100%;
    padding: 0px 5% 20px 5%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    border: solid 1px #51515130;
    position:relative;
    h3{
        margin-bottom:10px;
    }
`
const TitleM = styled(TitleH3)`
`
const TextMP = styled(P)``

const Banco = styled.figure`
    width: 280px;
    margin: 20px 15px;
    display: flex;
    flex-wrap:wrap;
    justify-content: center;
    flex-direction:column;
    img{
        height:50px !important;
        width:auto !important;
    }
    figcaption{
        width:100%;
        padding:10px;
        display:flex;
        justify-content:center;
        flex-wrap:wrap;
        p{
            font-size:1.4rem;
        }
    }
`
const ShapeSup = styled.div`
position:absolute;
top:0;
left:0;
width:15%;
`

const ShapeInf = styled.div`
position:absolute;
bottom:-1.5px;
right:0;
width:10%;
`

const Medios = ({cb,ci,logo,alt})=>{

    return(
        <Banco>
            <Image src={logo} alt={alt} />
            <figcaption>
                <TextMP align={'center'}>{cb}</TextMP>
                <TextMP align={'center'}>{ci}</TextMP>
            </figcaption>
        </Banco>
    )
} 

const Bcp = ({cb,ci,logo,alt})=> <Medios cb={cb} ci={ci} logo={logo} alt={alt} />

const Interbank = ({cb,ci,logo,alt})=> <Medios cb={cb} ci={ci} logo={logo} alt={alt} />
 
const Yape = ({cb,ci,logo,alt})=> <Medios cb={cb} ci={ci} logo={logo} alt={alt}/>


export { SectionMediosPago, TitleM, Bcp, Interbank, Yape , ShapeSup, ShapeInf }