import { Logo } from "../Globales/Header";
import {
  Box,
  Card,
  Desarrollador,
  Figure,
  FooterLanding,
  Gallery,
  HeaderLanding,
  InscriptionSection,
  Lista,
  MainLanding,
  Text,
  Title,
  TextFooter,
} from "./LandingStyles";
import Logotipo from "../../public/logo-kpop-dance-revolution.png";
import FormAcademia from "../Inscripciones/Formulario/Formulario";
import { TitleH2 } from "../Globales/StyleBase";
import Ubicacion from "../Home/Location";
import { DanceRoom } from "../Home/DanceRoom";
import WhatsApp from "../Globales/WhatsApp";

const LandingPage = () => {
  return (
    <>
      <HeaderLanding>
        <Logo logo={Logotipo} nameOne={"REVOLUTION"} nameTwo={"DANCE"} />
      </HeaderLanding>
      <MainLanding>
        <Title>Talleres gratuitos</Title>
        <Gallery>
          <Figure>
            <img src={"./landing/salsa.png"} alt={"taller de salsa gratuito"} />
            <figcaption>
              <p>Jueves 09 de Junio</p>
            </figcaption>
          </Figure>
          <Figure>
            <img
              src={"./landing/sexy-dance.png"}
              alt={"taller de salsa gratuito"}
            />
            <figcaption>
              <p>Jueves 09 de Junio</p>
            </figcaption>
          </Figure>
        </Gallery>

        <InscriptionSection>
          <Box>
            <Title>¡Separa tu cupo!</Title>

            <Lista>
              <li>
                <Text>
                  Llena el formulario para registrar tu asistencia al taller.
                </Text>
              </li>
              <li>
                <Text>
                  Escríbenos al WhatsApp para indicarnos a que taller(es)
                  participarás y confirmar tu registro.
                </Text>
              </li>
            </Lista>
            <Text>
              <span>Nota: </span>
              Habrá descuento para la academia de baile para aquellos que
              participen de los talleres gratuitos 😃.
            </Text>
          </Box>
          <Card>
            <FormAcademia />
          </Card>
        </InscriptionSection>
        <DanceRoom />
        <Ubicacion />
      </MainLanding>
      <WhatsApp />
      <FooterLanding>
        <TextFooter>
          2022 Revolution Sport | Desarrollado por
          <Desarrollador
            href="https://rokeweb-peru.com"
            rel="nofollow noreferrer"
            target="_blank"
          >
            <span> </span>Roke Web Perú
          </Desarrollador>
        </TextFooter>
      </FooterLanding>
    </>
  );
};

export default LandingPage;
