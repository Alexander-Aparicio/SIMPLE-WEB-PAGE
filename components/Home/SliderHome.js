// import Swiper core and required modules
import { EffectFade, Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "swiper/css/effect-fade";
import styled from "styled-components"
import { MySlide } from '../Globales/Slides';
import { Slide,SlideBox,H1Slide,H2Slide,PSlide,BoxCta,CtaButton } from '../Globales/StyleBase';
import slide1 from "../../public/slide1.jpg"
import slide1m from "../../public/sliders/slide1.png"
import slide2 from "../../public/slide2.jpg"
import slide2m from "../../public/sliders/slide2.png"
import slide3 from "../../public/slide3.jpg"
import slide3m from "../../public/sliders/slide3.png"
import slide4 from "../../public/slide4.jpg"
import slide4m from "../../public/sliders/slide4.png"

const SlideSection = styled(SlideBox)`
`
const Box =styled(BoxCta)``

const SlideH = styled(Slide)`
  @media (min-width: 451px){
    padding-right: 5%;
  }
  @media (min-width:671px){
    padding-top: 3.5%;
  }
  @media (min-width:760px){
    padding-top: 0%;
  }
  @media (min-width: 900px){
    padding-top: 3%;
  }
`

const TitlePage = styled(H1Slide)`
/* @media (min-width:930px) {} */
  @media (min-width: 451px){
    font-size: 2.5rem;
    margin-bottom: 0;
  }
  @media (min-width: 630px){
    font-size: 2.7rem;
  }
  @media (min-width:671px){
    font-size: 3rem;
  }
  @media (min-width: 1050px){
    font-size: 3.5rem;
  }
`
const Title = styled(H2Slide)`
/* @media (min-width:930px) {} */
@media (min-width: 451px){
    font-size: 2.5rem;
    margin-bottom: 0;
  }
  @media (min-width: 630px){
    font-size: 2.7rem;
  }
  @media (min-width: 1050px){
    font-size: 3.5rem;
  }
`

const Text = styled(PSlide)`
  font-size: 2.5rem;
  @media (min-width: 451px){
    font-size: 1.55rem;
    padding-top:0;
  }
  @media (min-width: 530px){
      font-size: 1.8rem;
    }
  @media (min-width: 630px){
    font-size: 2rem;
  }
  @media (min-width:760px){
    font-size: 1.8rem;
  }
  @media (min-width:810px){
    font-size: 2rem;
  }
  @media (min-width: 1050px){
    font-size: 2.7rem;
    padding-top: 5%;
  }
`

const Slider = () => {
  return (
    <SlideSection>
    <Swiper
      // install Swiper modules
      modules={[EffectFade, Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      effect={"fade"}
      autoplay={{delay: 2500, disableOnInteraction:false}}
    >
      <SwiperSlide>
        <MySlide 
         imgBig={slide1}
         imgSmall={slide1m}
         alt='Academia Revolution'>

          <SlideH>
            <TitlePage>K-POP: Clases presenciales de Baile.</TitlePage>
            <Text>
                Desarrolla tus habilidades artísticas.
            </Text>
          </SlideH>
          
        </MySlide>
      </SwiperSlide>
  
      <SwiperSlide>
        <MySlide 
            imgBig={slide2}
            imgSmall={slide2m}
            alt='Academia Revolution'>

            <SlideH>
            <TitlePage>K-POP: Clases presenciales de Baile.</TitlePage>
            <Text>
              Desarrolla tus habilidades artísticas.
            </Text>
            </SlideH>
          </MySlide>
      </SwiperSlide>

      <SwiperSlide>

        <MySlide 
          imgBig={slide3}
          imgSmall={slide3m}
          alt='Academia Revolution'>

          <SlideH>
          <TitlePage>Disfruta de las mejores coreografías</TitlePage>
          <Text>
            Horario: Sábados de 11am - 1pm
          </Text>
          </SlideH>
        </MySlide>

      </SwiperSlide>

      <SwiperSlide>

        <MySlide 
          imgBig={slide4}
          imgSmall={slide4m}
          alt='Academia Revolution'>

          <SlideH>
          <TitlePage>Disfruta de las mejores coreografías</TitlePage>
          <Text>
            Horario: Sábados de 11am - 1pm.
          </Text>
          </SlideH>
        </MySlide>

      </SwiperSlide>
    </Swiper>
    </SlideSection>
  );
};

export{
    Slider
}