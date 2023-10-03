'use client'

import React from 'react';
import Image from "next/image";
import banner from '../images/banner1.jpg';
import 'swiper/swiper-bundle.css';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper , SwiperSlide } from 'swiper/react';

function Banner() {
    return (
      <div className="banner_sec">
          <Swiper
                effect='slide'
                autoplay={{
                    delay: 4000
                }}
                speed={1500}
                initialSlide={1}
                loop={true}
                slidesPerView={1}
                navigation={true}
                pagination={false}
                modules={[Navigation, Autoplay, Pagination]}

                // Responsive breakpoints
                breakpoints={{
                    // when window width is >= 320px
                    320: {
                        slidesPerView: 1,
                    },
                    // when window width is >= 480px
                    480: {
                        slidesPerView: 1,
                    },
                    // when window width is >= 767px
                    767: {
                        slidesPerView: 1,
                    },

                    // when window width is >= 959px
                    959: {
                        slidesPerView: 1,
                    }
                }}
            >
                <SwiperSlide>
                    <Image className='banner_img' src={banner} alt="slider" />
                </SwiperSlide>

                <SwiperSlide>
                  <Image className='banner_img' src={banner} alt="slider" />
                </SwiperSlide>
        
              
            </Swiper>
      </div>
    );
}

export default Banner;
