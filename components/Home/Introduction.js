import styled from "styled-components";
import { Article, TextBox, P, TitleH2 } from "../Globales/StyleBase";
import { BoxVideo, Video } from "../Globales/Video";

const IntroductionSection = styled(Article)`
  justify-content: space-evenly;
`;
const Box = styled(TextBox)`
  padding-top: 30px;
  padding-bottom: 30px;
  @media (min-width: 1060px) {
    padding-top: revert;
    padding-bottom: revert;
  }
`;
const VideoBox = styled(BoxVideo)`
  box-shadow: 1px 2px 3px #0005;
`;
const Text = styled(P)`
  line-height: 2;
`;

const Introduction = () => {
  return (
    <IntroductionSection>
      <VideoBox>
        <Video
          url="https://youtu.be/PpgW_KC_c1E"
          volumen={0.5}
          width={"100%"}
          height={"100%"}
          className="reproductor"
        />
      </VideoBox>

      <Box>
        <TitleH2 margin={"20px 0px 7px 0px"}>¡Talleres de Verano 2023!</TitleH2>
        <Text>
          📌 Clases de baile Moderno dirigido para niños y adolescentes.
          <br />
          📌 Clases de baile de K-Pop dirigido para adolescentes y jóvenes.
          <br />
          📌 Puedes venir con un acompañante (familiar, pareja o amigo).
          <br />
          📌 Los sábados se graban las clases y se comparte los videos.
          <br />
          📌 Obtienes una hora gratis de mesa libre en Tenis de mesa.
        </Text>
      </Box>
    </IntroductionSection>
  );
};

export { Introduction };
