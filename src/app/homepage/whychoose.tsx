'use client'

import React from 'react';
import Image from "next/image";
import choose from "../images/choose_us.jpg";
import icon1 from "../images/update.png";
import icon2 from "../images/ability.png";
import icon3 from "../images/learning.png";
import icon4 from "../images/guidance.png";
import icon5 from "../images/analysis.png";
import icon6 from "../images/social-justice.png";
import icon7 from "../images/mission.png";
import { Container , Row, Col} from 'react-bootstrap';


function WhyChooseUs() {
    return (
      <section className="choose_sec bg_light_grey">
        <Container>
          <Row>
            <Col lg={12}>
               <div className='section_title'>
                    <h1 className='text-white'>Why Choose UPSC AKHADA?</h1>
                </div>

                 <div className="choose_content">
                    <ul>
                      <li> 
                        <span><Image src={icon1} alt="img" /></span>
                        <h5>Relevant and Updated Content</h5>
                          <p>Our team of experienced educators and experts work tirelessly to curate and deliver the most up-to-date and relevant study material, ensuring that you are well-prepared for the evolving examination patterns.</p>
                      </li>

                      <li> 
                      <span><Image src={icon2} alt="img" /></span>
                        <h5>Quality Education</h5>
                        <p>We believe in quality over quantity. Our rigorous selection process for faculty ensures that you learn from the best minds in the field. Our educators are not just teachers; they are mentors who guide you throughout your preparation journey.</p>
                      </li>

                      <li>  <span><Image src={icon3} alt="img" /></span> <h5>Simplified Learning</h5>
                      <p>We understand that the UPSC and State PCS syllabi can be daunting. That's why we focus on simplifying complex concepts, breaking them down into easy-to-understand modules, and providing you with comprehensive study materials that make learning a breeze.</p>
                      </li>

                      <li>  <span><Image src={icon4} alt="img" /></span> <h5>	Personalized Guidance</h5>
                          <p>We recognize that each aspirant is unique and may have specific strengths and weaknesses. Our personalized mentoring and counseling sessions help identify your individual needs and tailor your preparation accordingly.</p>
                      </li>
                      <li>  <span><Image src={icon5} alt="img" /></span> <h5>	Innovative Teaching Methods</h5>
                           <p>UPSC AKHADA embraces modern teaching techniques, including interactive online classes, webinars, and mock tests, to ensure that you are well-prepared for the digital age of competitive examinations.</p>
                      </li>

                      <li>  <span><Image src={icon6} alt="img" /></span><h5>Strong Community</h5>
                      <p>Joining UPSC AKHADA means becoming a part of a supportive community of like-minded individuals. Share your doubts, experiences, and success stories with your peers, creating a positive and motivating environment.</p>
                      </li>

                      <li>  <span><Image src={icon7} alt="img" /></span><h5>Results-Oriented Approach</h5>
                        <p>We measure our success by your success. Our results speak for themselves, with numerous successful candidates in both UPSC and State PCS examinations owing their achievements to our guidance.</p>
                       </li>
                    </ul>

                    <h3 className='mt-3 text-white'>Join Us Today</h3>
                    <p className='mb-3 text-white'>Embark on your journey towards a rewarding career in civil services with UPSC AKHADA. Let us be your trusted guide, providing you with the tools, knowledge, and support you need to achieve your goals. Your dreams of serving the nation are within reach, and we are here to help you realize them.</p>
                    <p className='text-white'>Contact us today to learn more about our courses, faculty, and how we can assist you in your UPSC and State PCS exam preparation. Together, we'll turn your aspirations into achievements!</p>
                  </div>
            </Col>
          </Row>


{/*           
            <Row>
              <Col lg="7">
                  <div className='section_title'>
                    <h1>Why Choose UPSC AKHADA?</h1>
                </div>
                  <div className="choose_content">
                    <ul>
                      <li><Image src={icon} alt="img" /> <h5>Relevant and Updated Content</h5>
                          <p>Our team of experienced educators and experts work tirelessly to curate and deliver the most up-to-date and relevant study material, ensuring that you are well-prepared for the evolving examination patterns.</p>
                      </li>

                      <li> <Image src={icon} alt="img" /><h5>Relevant and Updated Content</h5>
                          <p>Our team of experienced educators and experts work tirelessly to curate and deliver the most up-to-date and relevant study material, ensuring that you are well-prepared for the evolving examination patterns.</p>
                      </li>

                      <li> <Image src={icon} alt="img" /><h5>Relevant and Updated Content</h5>
                          <p>Our team of experienced educators and experts work tirelessly to curate and deliver the most up-to-date and relevant study material, ensuring that you are well-prepared for the evolving examination patterns.</p>
                      </li>

                      <li> <Image src={icon} alt="img" /><h5>Relevant and Updated Content</h5>
                          <p>Our team of experienced educators and experts work tirelessly to curate and deliver the most up-to-date and relevant study material, ensuring that you are well-prepared for the evolving examination patterns.</p>
                      </li>
                      <li> <Image src={icon} alt="img" /><h5>Relevant and Updated Content</h5>
                          <p>Our team of experienced educators and experts work tirelessly to curate and deliver the most up-to-date and relevant study material, ensuring that you are well-prepared for the evolving examination patterns.</p>
                      </li>

                      <li> <Image src={icon} alt="img" /><h5>Relevant and Updated Content</h5>
                          <p>Our team of experienced educators and experts work tirelessly to curate and deliver the most up-to-date and relevant study material, ensuring that you are well-prepared for the evolving examination patterns.</p>
                      </li>

                      <li> <Image src={icon} alt="img" /><h5>Relevant and Updated Content</h5>
                          <p>Our team of experienced educators and experts work tirelessly to curate and deliver the most up-to-date and relevant study material, ensuring that you are well-prepared for the evolving examination patterns.</p>
                      </li>
                    </ul>
                  </div>
              </Col>

              <Col lg="5">
                  <Image src={choose} className='w-100' alt="img" />
             </Col>
            </Row> */}
        </Container>
      </section>
    );
}

export default WhyChooseUs;
