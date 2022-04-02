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
import slide1m from "../../public/slide1m.jpg"
import slide2 from "../../public/slide2.jpg"
import slide2m from "../../public/slide2m.jpg"
import slide3 from "../../public/slide3.jpg"
import slide3m from "../../public/slide3m.jpg"
import slide4 from "../../public/slide4.jpg"
import slide4m from "../../public/slide4m.jpg"

const SlideSection = styled(SlideBox)`
`
const Box =styled(BoxCta)``

const SlideH = styled(Slide)``

const TitlePage = styled(H1Slide)`
/* @media (min-width:930px) {} */
`
const Title = styled(H2Slide)``

const Text = styled(PSlide)`
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
            <TitlePage>Academia de Baile</TitlePage>
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
            <TitlePage>Academia de Baile</TitlePage>
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
          <TitlePage>Academia de Baile</TitlePage>
          <Text>
              Desarrolla tus habilidades artísticas.
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
          <TitlePage>Academia de Baile</TitlePage>
          <Text>
              Desarrolla tus habilidades artísticas.
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