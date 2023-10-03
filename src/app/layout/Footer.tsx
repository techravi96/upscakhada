'use client'

import Link from 'next/link';
import logo from '../images/logo.png';

import { Container, Row, Col } from 'react-bootstrap';
import Image from "next/image";
import { BsInstagram, BsWhatsapp , BsYoutube, BsFillTelephoneFill, BsFillEnvelopeFill } from "react-icons/bs";
import { FaArrowCircleRight, FaFacebookF, FaTelegramPlane } from "react-icons/fa";

function Footer() {
 

  return (
    <section className='footer_sec'>
      <Container>
        <Row>
          <Col lg={3}>
            <div className='footer_data'>
              <h5>About us</h5>
              <Image src={logo} alt="logo" />
              <p>UPSC Akhada is platform to gather valuable and relevant information on UPSC exam and prepration. Keep yourself motivated and prepared.</p>
            </div>
          </Col>

          <Col lg={2}>
            <div className='footer_links'>
              <h5>Quick Link</h5>
              <ul>
                <li><a href='/'><FaArrowCircleRight/> About us</a></li>
                <li><a href='/'><FaArrowCircleRight/> Services</a></li>
                <li><a href='/'><FaArrowCircleRight/> Blogs</a></li>
                <li><a href='/'><FaArrowCircleRight/> Contact</a></li>
              </ul>
            </div>
          </Col>

          <Col lg={4}>
            <div className='footer_links'>
              <h5>Newly Added</h5>
              <ul>
                <li><a href='/'><FaArrowCircleRight/> Target 550+ in UPSC CSE MAINS- GS and ESSAY</a></li>
                <li><a href='/'><FaArrowCircleRight/> UPSC GS Paperwise Daily Answer</a></li>
                <li><a href='/'><FaArrowCircleRight/> Optional Answer Writing & Mentorship</a></li>
                <li><a href='/'><FaArrowCircleRight/> UPSC Civil Services Special</a></li>
                <li><a href='/'><FaArrowCircleRight/> KARAMYOGI - UPPSC Updated</a></li>
                <li><a href='/'><FaArrowCircleRight/> Haryana Civil Services (HCS) 2023</a></li>
              </ul>
            </div>
          </Col>

          <Col lg={3}>
            <div className='footer_links'>
              <h5>Get In Touch</h5>
                <div className='contact_details'>
                   <BsFillTelephoneFill/>
                    <h6>CALL US</h6>
                    <a href='tel:9310521990'> 9310521990</a>
                </div>

                <div className='contact_details'>
                   <BsFillEnvelopeFill/>
                    <h6>MAIL US</h6>
                    <a href='mailto:upscakhada@gmail.com'> upscakhada@gmail.com</a>
                </div>
            </div>
          </Col>

        </Row>
        <div className='copyright'>
            <p>© 2023 Copyright | All Rights Reserved by UPSC AKHADA</p>
            <ul>
              <li><a href='/'>Terms & Conditions</a></li>
              <li><a href='/'>Privacy Policy</a></li>
            </ul>
        </div>
      </Container>

        
         {/* Start Sticky Icon */}
         <div className="sticky-icon">
            <a href='' target='_blank' className='Facebook'><span> <FaFacebookF/></span> Facebook </a>
            <a href='' target='_blank' className='Instagram'><span><BsInstagram/></span> Instagram </a>
            <a href='' target='_blank' className='Telegram'><span><FaTelegramPlane/></span> Telegram </a>
            <a href='' target='_blank' className='Whatsapp'><span><BsWhatsapp/></span> Whatsapp </a>
            <a href='' target='_blank' className='Youtube'><span><BsYoutube/></span> Youtube </a>
        </div>
        {/* End Sticky Icon */}

    </section>
  
  );
}

export default Footer;
