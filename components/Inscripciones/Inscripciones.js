import styled from "styled-components";
import {
  ContentBox,
  ImgBox,
  Ol,
  P,
  TextBox,
  TitleH2,
} from "../Globales/StyleBase";
import FormAcademia from "./Formulario/Formulario";

const InscriptionSection = styled(ContentBox)`
  margin: 0% 0% 50px 0%;
  position: relative;
  background-color: transparent;
`;
const Card = styled(ImgBox)`
  border: solid 1px transparent;
  max-height: revert;
  background-color: transparent;
`;
const Box = styled(TextBox)`
  border-radius: 15px;
  padding: 50px 5px;
  padding-left: 15px;
  border: solid 1px rgba(118, 0, 120, 0.1);
  box-shadow: 1px 1px 1px 1px #0005;
  margin: 2%;
`;

const Title = styled(TitleH2)`
  text-align: left;
  padding: 1.5% 6% 0% 0%;
  margin: 0% 6%;
  color: #000;
  /* @media (min-width:930px) {} */
`;
const Lista = styled(Ol)``;
const Text = styled(P)`
  line-height: 2;
`;

const Inscription = () => {
  return (
    <InscriptionSection>
      <Box>
        <Title>Proceso de Inscripción</Title>

        <Lista>
          <li>
            <Text>Llena el formulario para separar una clase de muestra.</Text>
          </li>
          <li>
            <Text>
              Escríbenos al WhatsApp pidiendo la confirmación de tu registro
              para tu clase.
            </Text>
          </li>
          <li>
            <Text>
              Participa de la clase y al terminar si te gustó te inscribes.
            </Text>
          </li>
          <li>
            <Text>
              Realiza el pago y envía la constancia (imagen) por WhatsApp para
              enviarte tu recibo.
            </Text>
          </li>
          <li>
            <Text>Eso fue todo, te esperamos para tu próxima clase 😃.</Text>
          </li>
        </Lista>
      </Box>

      <Card>
        <FormAcademia />
      </Card>
    </InscriptionSection>
  );
};

export { Inscription };
