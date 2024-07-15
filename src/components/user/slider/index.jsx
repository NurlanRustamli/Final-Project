import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

import { Autoplay, } from 'swiper/modules';
import { Link } from 'react-router-dom';

function Slider() {
  return (
    <section id='slidersec' style={{paddingBlock:"10px 60px"}}>
      <Swiper
     pagination={true} modules={[Autoplay]} className="mySwiper"
     autoplay={{
       delay:3000,
       disableOnInteraction:false,
     }}
    >
      <SwiperSlide>
        <img src="https://maraviyainfotech.com/projects/grabit-tailwind/grabit-tailwind/assets/img/hero-bg/1.jpg" alt="" />
        <div className="slider-info">
          <h5>Starting at <span className="price">20.99$</span>
            </h5>
          <h2>Organic & Healthy Vegetables</h2>
          <Link className="shopNow" to="/products">Shop Now </Link>
        </div>

      </SwiperSlide>
      <SwiperSlide><img src="https://maraviyainfotech.com/projects/grabit-tailwind/grabit-tailwind/assets/img/hero-bg/2.jpg" alt="" />
      <div className="slider-info">
          <h5>Starting at <span className="price">29.99$</span>
            </h5>
          <h2>Explore Fresh & Juicy Fruits</h2>
          <Link className="shopNow" to="/products">Shop Now </Link>
        </div>
        </SwiperSlide>
  
    </Swiper>
    </section>
  )
}

export default Slider