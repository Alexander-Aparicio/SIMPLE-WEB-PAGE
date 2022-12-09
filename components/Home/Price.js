import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";
import { ContentBox, TextBox, P, TitleH2, ImgBox } from "../Globales/StyleBase";
import cornerInf from "../../public/cornerLeft.png";
import * as fbq from "../../lib/fpixel";

const PricingSection = styled(ContentBox)`
  margin: 0% 0% 4% 0%;
  padding-bottom: 5%;
  box-shadow: 1px 1px 2px #0003;
  position: relative;
`;
const Card = styled(ImgBox)`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 15%;
  z-index: 1;
  background-color: transparent;
  justify-content: flex-start;
  padding: 0px;
  @media (min-width: 415px) {
    width: 10%;
  }
`;
const Box = styled(TextBox)`
  max-width: 320px;
`;
const Title = styled(TitleH2)`
  text-align: left;
  margin: 0;
  /* font-family: "caveat", cursive; */
  font-size: 3.2rem;
`;
const Text = styled(P)`
  color: #eb6a50;
  font-family: caveat, cursiva;
  font-size: 2.5rem;
`;
const Mensualidad = styled(P)`
  background-color: #6571e0;
  font-family: caveat, cursiva;
  font-size: 3rem;
  color: #fff;
  text-align: center;
  border-top-left-radius: 10px;
  border-bottom-right-radius: 10px;
  margin-bottom: 5px;
  margin-top: 10px;
`;
const Button = styled.button`
  background-color: #eb6a50;
  color: #ffffff;
  padding: 15px 15px;
  border-radius: 5px;
  font-size: 2rem;
  box-shadow: 1px 2px 3px #0005;
  margin: 20px;
`;

const Price = () => {
  const handleClick = () => {
    fbq.event("Purchase", { currency: "USD", value: 25 });
  };

  return (
    <PricingSection>
      <Card>
        <Image src={cornerInf} />
      </Card>
      <Box>
        <Title>Costo único:</Title>
        <Text>Comprende Enero y Febrero.</Text>
        <Mensualidad>B. Moderno: S./250</Mensualidad>
        <Mensualidad>K-Pop: S./250</Mensualidad>
        <Mensualidad>B.Moderno + Kpop: S./400</Mensualidad>
      </Box>

      <Box>
        <Link href={"/inscripciones"}>
          <Button onClick={handleClick}>¡Quiero Inscribirme!</Button>
        </Link>
      </Box>
    </PricingSection>
  );
};

export { Price };
