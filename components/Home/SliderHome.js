// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import styled from "styled-components"
import { MySlide } from '../Globales/Slides';
import { Slide,SlideBox,H1Slide,H2Slide,PSlide,BoxCta,CtaButton } from '../Globales/StyleBase';

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
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <MySlide 
         imgBig='/slide1.jpg'
         alt='Academia Revolution'>

          <SlideH>

          <TitlePage>Academia de Baile</TitlePage>

          <Text>
              Desarrolla tus habilidades artísticas.
          </Text>

          </SlideH>

        </MySlide>
      </SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      ...
    </Swiper>
    </SlideSection>
  );
};

export{
    Slider
}