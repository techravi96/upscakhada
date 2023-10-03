'use client'

import React from 'react';
import Image from "next/image";
import medal from "../images/medal.png";
import { Container , Row, Col} from 'react-bootstrap';
import 'swiper/swiper-bundle.css';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper , SwiperSlide } from 'swiper/react';

function AboutUs() {
    return (
      <section className="about_sec bg_light_grey" id='about'>
        <Container>
           <div className='section_title'>
                <h1>About us</h1>
            </div>
            <Row>
              <Col lg="6">
                  <div className="about_content">
                    <h3>About UPSC AKHADA</h3>
                    <p>Welcome to UPSC AKHADA, your trusted partner in the journey towards success in UPSC and State PCS examinations. We are a leading institute dedicated to providing you with the most relevant, high-quality, and simplified preparation resources and guidance to help you achieve your dreams of a successful career in civil services.</p>
                    <a href='/'>Read more</a>
                  </div>
              </Col>

              <Col lg="6">
              <div className='about_us_slider'>

                <Swiper
                effect='slide'
                autoplay={{
                    delay: 3000
                }}
                speed={1500}
                initialSlide={1}
                loop={true}
                slidesPerView={1}
                navigation={false}
                pagination={true}
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
                    <div className='selection_row'>
                      <div className='selection_course'>
                        <Image src={medal} alt="img" />
                        <h4>CSE 2020</h4>
                        <p>Our Selections(from All Courses)</p>
                      </div>
                      <div className='selection_count'>
                        <p><strong> 5 </strong> in Top 10 </p>
                        <p><strong> 9 </strong> in Top 20 </p>
                        <p><strong> 47 </strong> in Top 100 </p>
                        <p><strong>  295 </strong> Total Selections </p>
                        <p><strong> 40% </strong> of Total Selections </p>
                      
                        
                      </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='selection_row'>
                      <div className='selection_course'>
                        <Image src={medal} alt="img" />
                        <h4>CSE 2020</h4>
                        <p>Our Selections(from All Courses)</p>
                      </div>
                      <div className='selection_count'>
                        <p><strong> 5 </strong> in Top 10 </p>
                        <p><strong> 9 </strong> in Top 20 </p>
                        <p><strong> 47 </strong> in Top 100 </p>
                        <p><strong>  295 </strong> Total Selections </p>
                        <p><strong> 40% </strong> of Total Selections </p>
                     
                      </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='selection_row'>
                      <div className='selection_course'>
                        <Image src={medal} alt="img" />
                        <h4>CSE 2020</h4>
                        <p>Our Selections(from All Courses)</p>
                      </div>
                      <div className='selection_count'>
                        <p><strong> 5 </strong> in Top 10 </p>
                        <p><strong> 9 </strong> in Top 20 </p>
                        <p><strong> 47 </strong> in Top 100 </p>
                        <p><strong>  295 </strong> Total Selections </p>
                        <p><strong> 40% </strong> of Total Selections </p>
                      
                        
                      </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='selection_row'>
                      <div className='selection_course'>
                        <Image src={medal} alt="img" />
                        <h4>CSE 2020</h4>
                        <p>Our Selections(from All Courses)</p>
                      </div>
                      <div className='selection_count'>
                        <p><strong> 5 </strong> in Top 10 </p>
                        <p><strong> 9 </strong> in Top 20 </p>
                        <p><strong> 47 </strong> in Top 100 </p>
                        <p><strong>  295 </strong> Total Selections </p>
                        <p><strong> 40% </strong> of Total Selections </p>
                     
                      </div>
                    </div>
                </SwiperSlide>
        
              
                </Swiper>
             
              <a href='/'> View Complete Results</a>

              </div>
             </Col>
            </Row>

            <div className='section_title mt-5'>
                <h1>Our Mission</h1>
            </div>

            <p className='text-center'>At UPSC AKHADA, our mission is to empower aspiring civil servants with the knowledge, skills, and confidence needed to excel in the highly competitive UPSC and State PCS examinations. We believe that every aspirant has the potential to make a difference in society, and we are committed to nurturing that potential through effective and efficient preparation.</p>

        </Container>
      </section>
    );
}

export default AboutUs;
