import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';
import '../Section01/Section01.css'
import 'swiper/css/autoplay';
import image01 from "../../assets/section01/section01.png"
const Section01Data = [
    {
        imgSrc: image01
    },
    {
        imgSrc: image01
    }

]
const Section01 = () => {
    return (
        <Swiper
            modules={[ Autoplay]}
            grabCursor={true}
            slidesPerView={1}
            initialSlide={1}
            centeredSlides={true}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            className='swiper-section01'
        >
            {Section01Data.map((slide, index) => (
                <SwiperSlide key={index}>
                    <img src={slide.imgSrc} alt="01" />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default Section01