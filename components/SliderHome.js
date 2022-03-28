// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { ContenidoD, Diapositiva, MainBox, MainTitleD, MySlide } from './Slides';

const Slider = () => {
  return (
    <MainBox>
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

          <Diapositiva>

          <MainTitleD>Academia de Baile</MainTitleD>

          <ContenidoD>
              Desarrolla tus habilidades artísticas.
          </ContenidoD>

          </Diapositiva>

        </MySlide>
      </SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      ...
    </Swiper>
    </MainBox>
  );
};

export{
    Slider
}