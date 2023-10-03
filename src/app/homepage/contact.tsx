'use client'

import React from 'react';
import Image from "next/image";
import contact from '../images/contact.jpg';
import { Container , Row, Col, Form, Button} from 'react-bootstrap';


function ContactUs() {
    return (
      <section className="contact_sec">
        <Container>
            <Row>
            <Col lg="6">
                <Image src={contact} alt="contact_img" className='contact_img' />
             </Col>

              <Col lg="6">
                <div className="section_title text-center">
                    <h1>Get In Touch</h1>
              </div>
                 <div className='contact_form'>
                    <Form>
                        <Form.Group className="mb-3">
                          <Form.Control type="text" placeholder="Your Name" required />
                        </Form.Group>

                        <Form.Group className="mb-3" >
                          <Form.Control type="email" placeholder="Your Email"  required/>
                        </Form.Group>

                        <Form.Group className="mb-3">
                          <Form.Control as="textarea" rows={5}  placeholder='Message' required />
                        </Form.Group>

                        <Button type="submit" className='solid_btn'>
                            Send Message
                        </Button>
                    </Form>
                 </div>
              </Col>

            
            </Row>
        </Container>

      </section>
    );
}

export default ContactUs