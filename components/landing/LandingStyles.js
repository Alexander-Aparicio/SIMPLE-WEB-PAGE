import styled from "styled-components";
import {
  TitleH1,
  ContentBox,
  ImgBox,
  Ol,
  P,
  TextBox,
} from "../Globales/StyleBase";

const HeaderLanding = styled.header`
  width: 100%;
  height: 70px;
  background-color: #ffc0cb;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  padding-right: 5%;
  padding-left: 5%;
  z-index: 10;
`;
const Card = styled(ImgBox)`
  border: solid 1px transparent;
  max-height: revert;
  background-color: transparent;
`;
const MainLanding = styled.main`
  grid-area: main;
  min-height: calc(100vh - 135px);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled(TitleH1)`
  text-align: left;
  margin: 0;
  font-size: 3rem;

  @media (min-width: 450px) {
    font-size: 3.6rem;
  }
`;

const Gallery = styled.div`
  width: 90%;
  margin-top: 25px;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(90px, 400px));
  grid-gap: 35px;
  margin-bottom: 50px;
`;

const Figure = styled.figure`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  img {
    max-width: 100%;
    border-radius: 10px;
  }
  figcaption {
    font-size: 18px;
    margin-top: 5px;
    font-weight: bold;
    margin-left: 15px;
    padding: 20px 5px;
  }
  figcaption p {
    line-height: 0;
    color: #ffa701;
    font-family: "Poppins", sans-serif;
    text-align: center;
  }
  @media (min-width: 415px) {
    figcaption {
      color: #000;
      font-size: 25px;
    }
  }
`;

const FooterLanding = styled.footer`
  width: 100%;
  height: 65px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  background-color: #ffc0cb;
`;

const InscriptionSection = styled(ContentBox)`
  margin: 0% 0% 0px 0%;
  position: relative;
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

const Lista = styled(Ol)``;
const Text = styled(P)`
  line-height: 2;
  & span {
    font-weight: bold;
  }
`;

const Desarrollador = styled.a`
  color: #fff;
  font-weight: bold;
  padding: 0px;
`;
const TextFooter = styled(P)`
  color: #f4f4f4;
  text-align: center;
  padding: 0px;
`;

export {
  HeaderLanding,
  MainLanding,
  FooterLanding,
  Figure,
  Title,
  Gallery,
  InscriptionSection,
  Box,
  Lista,
  Text,
  Card,
  Desarrollador,
  TextFooter,
};
