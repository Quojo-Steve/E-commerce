import React from 'react'
import {Swiper, SwiperSlide} from "swiper/react";

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper';

import slide_image_1 from "./assets/images/img_1.jfif";
import slide_image_2 from "./assets/images/img_2.jfif";
import slide_image_3 from "./assets/images/img_3.jfif";
import slide_image_4 from "./assets/images/img_4.jfif";
import slide_image_5 from "./assets/images/img_5.jfif";
import slide_image_6 from "./assets/images/img_6.png";
import slide_image_7 from "./assets/images/img_7.png";
import slide_image_8 from "./assets/images/img_8.jfif";


function App() {

  return (
    <div className="container">
      <h1 className='heading'>Beauty parlour</h1>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier:2.5,
        }
        }
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className='swiper_container'
      >
        <SwiperSlide>
          <img src={slide_image_1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_5} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_6} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_7} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_8} alt="" />
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  )
}

export default App
