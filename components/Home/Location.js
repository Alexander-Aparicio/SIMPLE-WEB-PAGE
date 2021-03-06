import Image from "next/image";
import styled from "styled-components";
import { Div, P, TitleH2 } from "../Globales/StyleBase";
import facebook from "../../public/logos/facebook.svg"
import instagram from "../../public/logos/instagram.svg"
import celular from "../../public/logos/celular.svg"
import ubicacion from "../../public/logos/ubicacion.svg"

const BoxUbicacion = styled(Div)`
flex-direction:column;
padding-left:5%;
padding-right:5%;
background-size: cover;
padding-bottom:30px;
padding-top:30px;
border:solid 1px #51515130;
`
const TitleUb = styled(TitleH2)`
    margin-bottom:10px;
`
const RedesSociales = styled(Div)`
& .instagram{
    max-width:81px;
}
`
const LinkRedSocial = styled.a`
max-width:70px;
margin: 10px 30px;
`
const ContactoDirect = styled(Div)`
padding-top:20px;
flex-wrap:wrap;
justify-content: space-evelyn;
`
const Celular = styled(Div)`
width:auto;
`
const Direccion = styled(Div)`
width:auto;
`
const TextUb = styled(P)`
text-align:center;
margin-bottom: 10px;
`
const Mapa = styled(Div)`
margin-top:30px;
border:solid 2px #51515120;
`

const Ubicacion = ()=>{

    return(

        <BoxUbicacion>

            <TitleUb>Contáctanos y visítanos</TitleUb>

            <RedesSociales>
                <LinkRedSocial href="https://www.facebook.com/RevolutionDanceStudio.Lima" rel="nofollow noreferrer" target="_blank"><Image src={facebook} alt="icon-facebook"  width={100} height={100} /></LinkRedSocial>
                <LinkRedSocial className="instagram" href="https://www.instagram.com/revolution_dstudio/" rel="nofollow noreferrer" target="_blank"><Image src={instagram} alt="icon-instagram" width={100} height={100} /></LinkRedSocial>
            </RedesSociales>

            <ContactoDirect>

                <Celular>
                    <Image src={celular} alt="icon-mobile" width={80} height={80} />
                    <TextUb>+51 940767038</TextUb>
                    
                </Celular>

                <Direccion>
                    <Image src={ubicacion} alt="icon-ubicacion" width={80} height={80} />
                    <TextUb>Calle 1 s/N, Urb. Antares - San Martin de Porres.</TextUb>
                </Direccion>
                <TextUb><strong>Referencia:</strong> A la espalda del colegio Monserrat de Gamarra a 1 cdra de la Av Universitaria cruce con Av. Angélica Gamarra. <br />
                <a href="https://maps.app.goo.gl/C2BFN" rel="nofollow noreferrer" target="_blank"> Ver en Google Maps</a>
                </TextUb>

            </ContactoDirect>

        </BoxUbicacion>

    )

}

export default Ubicacion