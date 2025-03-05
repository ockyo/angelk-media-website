import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../TopAgency/TopAgency.css'
import image0 from '../../assets/images/img_0.jpg'
import image1 from '../../assets/images/img_1.jpg'
import image2 from '../../assets/images/img_2.jpg'
import image3 from '../../assets/images/img_3.jpg'
import image4 from '../../assets/images/img_4.jpg'
import image5 from '../../assets/images/img_5.jpg'
import image6 from '../../assets/images/img_6.jpg'
const Section01Data = [
    { imgSrc: image0 },
    { imgSrc: image1 },
    { imgSrc: image2 },
    { imgSrc: image3 },
    { imgSrc: image4 },
    { imgSrc: image5 },
    { imgSrc: image6 }
]
const TopAgency = () => {
    return (

        <>
            <div className='flex justify-center'>
                <h1 className="text-6xl font-extrabold gradient-text">
                    TOP AGENCY NỔI BẬT
                </h1>
            </div>
            <div class="line-container">
                <div class="line-effect"></div>
                <div class="diamond"></div>
            </div>
            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                grabCursor={true}
                spaceBetween={10}
                slidesPerView={1}
                initialSlide={1}
                pagination={{ clickable: true }}
                navigation
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                }}
                // centeredSlides={true}
                // autoplay={{
                //     delay: 3000,
                //     disableOnInteraction: false,
                // }}
                loop={true}
                className='swiper-topAgency'
            >
                {Section01Data.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <img src={slide.imgSrc} alt="01" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>

    )
}

export default TopAgency