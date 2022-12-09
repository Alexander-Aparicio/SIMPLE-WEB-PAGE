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
            <Text>Llena el formulario para registrar tus datos.</Text>
          </li>
          <li>
            <Text>
              Escríbenos al WhatsApp, confirma tu registro, elige tu horario,
              realiza el pago y envíanos una foto del comprobante.
            </Text>
          </li>
        </Lista>
        <Text>
          <strong>Nota:</strong> Puedes realizar tu inscripción en la academia
          los días sábados de 3:30pm a 5pm y los domingos de 11:30 am a 12:30
          pm. <br/> El pago se debe realizar por algún medio digital.
        </Text>
      </Box>

      <Card>
        <FormAcademia />
      </Card>
    </InscriptionSection>
  );
};

export { Inscription };
