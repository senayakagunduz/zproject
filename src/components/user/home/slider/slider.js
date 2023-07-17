import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "./slider.scss";
import slides from "./slides.json";
import { Autoplay,Navigation,Pagination, EffectFade } from 'swiper/modules';

const Slider = () => {
  const pagination={
    clickable:true,
  }
  return (
    <Swiper pagination={pagination} navigation={true} effect={'fade'} modules={[Autoplay,Navigation,Pagination, EffectFade]}  autoplay={{
      delay: 2500,
      disableOnInteraction: false,
    }} className='slider'>
          {slides.map(slide=><SwiperSlide key={slide.id}>
            <div className='content'>
                <h2>{slide.title}</h2>
                <p>{slide.desc}</p>
            </div>
            <img src={require(`../../../../assests/img/slider/${slide.image}`)} alt={slide.title} />
        </SwiperSlide>)}
    </Swiper>
  );
};

export default Slider