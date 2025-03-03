import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/effect-coverflow';

import '../TopCreator/TopCreator.css'
import image0 from '../../assets/images/img_0.jpg'
import image1 from '../../assets/images/img_1.jpg'
import image2 from '../../assets/images/img_2.jpg'
import image3 from '../../assets/images/img_3.jpg'
import image4 from '../../assets/images/img_4.jpg'
import image5 from '../../assets/images/img_5.jpg'
import image6 from '../../assets/images/img_6.jpg'
const TopCreator = () => {
    return (
        <div className='py-4'>
            <Swiper
                modules={[EffectCoverflow, Pagination, Autoplay]}
                spaceBetween={10}
                grabCursor={true}
                slidesPerView={4}
                initialSlide={1}
                centeredSlides={true}
                pagination={{ clickable: true }}
                effect='coverflow'
                coverflowEffect={{
                    rotate: 0,
                    stretch: 70,
                    depth: 350,
                    modifier: 1,
                    slideShadows: true,
                }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                speed={1000}
                loop={true}
                className='swiper-swipercard'
            >
                <SwiperSlide >
                    <img src={image0} alt="image0" />
                </SwiperSlide>
                <SwiperSlide >
                    <img src={image1} alt="image1" />
                </SwiperSlide>
                <SwiperSlide >
                    <img src={image2} alt="image2" />
                </SwiperSlide>
                <SwiperSlide >
                    <img src={image3} alt="image3" />
                </SwiperSlide>
                <SwiperSlide >
                    <img src={image4} alt="image4" />
                </SwiperSlide>
                <SwiperSlide >
                    <img src={image5} alt="image5" />
                </SwiperSlide>
                <SwiperSlide >
                    <img src={image6} alt="image6" />
                </SwiperSlide>
                
            </Swiper>
        </div>
    )
}

export default TopCreator