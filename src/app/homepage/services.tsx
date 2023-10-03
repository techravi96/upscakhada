'use client'

import React from 'react';
import Image from "next/image";
import icon1 from '../images/icon1.png';
import icon2 from '../images/icon2.png';
import icon3 from '../images/icon3.png';
import icon4 from '../images/icon4.png';
import icon5 from '../images/icon5.png';
import icon6 from '../images/icon6.png';

import { Container , Row, Col} from 'react-bootstrap';


function Services() {
    return (
      <section className="service_sec">
        <Container>
            <div className="section_title">
              <h1>Our Services</h1>
            </div>

            <Row>
              <Col lg="4">
                <div className='service_Card'>
                    <Image src={icon1} alt="img" />
                    <h2>Daily Answer Writing</h2>
                    <p>Renowned faculy provide video lectures on UPSC Akhada. For each subject expert faculty deliver video lectures.</p>
                </div>
              </Col>

              <Col lg="4">
                <div className='service_Card'>
                    <Image src={icon2} alt="img" />
                    <h2>Mentorship</h2>
                    <p>Enagage with mentors in your journey towards UPSC exams. Mentor help you in building strategy and work as compass in your journey.</p>
                </div>
              </Col>

              <Col lg="4">
                <div className='service_Card'>
                    <Image src={icon3} alt="img" />
                    <h2>Test Series</h2>
                    <p>Quality questions in every test series. Every test paper is drafted with passsion to give your brain a challenge for indepth preperation.</p>
                </div>
              </Col>

              <Col lg="4">
                <div className='service_Card'>
                    <Image src={icon4} alt="img" />
                    <h2>Evaluate yourself</h2>
                    <p>Join meticulously designed MCQs Tool for evaluating your prepration level section and topic wise.</p>
                </div>
              </Col>

              <Col lg="4">
                <div className='service_Card'>
                    <Image src={icon5} alt="img" />
                    <h2>Free Updates</h2>
                    <p>Don't worry we will keep posting free updates on regular basis.</p>
                </div>
              </Col>

              <Col lg="4">
                <div className='service_Card'>
                    <Image src={icon6} alt="img" />
                    <h2>24X7 Support</h2>
                    <p>If you have any query then email us. Our team of experts will revert back.</p>
                </div>
              </Col>


              
            </Row>
        </Container>
      </section>
    );
}

export default Services;
