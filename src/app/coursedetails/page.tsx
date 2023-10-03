
'use client'

import React from 'react';
import Image from "next/image";
import inner from "../images/inner_banner.jpg";
import icon from "../images/icon1.png";
import { Container , Row, Col} from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

export default function About () {
  return (
   <div className='inner_page'>
      <div className="inner_banner">
         <Image src={inner} alt="contact_img" className='w-100' />
          <h3>Target 550+ in UPSC CSE MAINS</h3>
      </div>

    <section className='inner_pages_Section'>
      <Container>
        <div className='section_title'>
          <h1>Target 550+ in UPSC CSE MAINS- GS and ESSAY</h1>
        </div>
        <div className='inner_tab_row'>
        
          <Tabs
              defaultActiveKey="one"
              id="uncontrolled-tab-example"
              className="mb-3"
            >
              <Tab eventKey="one" title="Daily Answer Writing">
                 <h3> Daily Answer Writing </h3>
                  <h2>₹ 10,500</h2>
                 <p> Questions strictly based on UPSC pattern </p>
                 <p> Copy evaluation within 3 days </p>
                 <p> One to one interaction to improve quality of answers </p>
                 <p> Model answers </p>
              </Tab>
              <Tab eventKey="two" title="GS Mains Test Series">
              <h3> GS Mains Test Series </h3>
                  <h2>₹ 8,500</h2>
                 <p> Questions strictly based on UPSC pattern </p>
                 <p> Copy evaluation within 3 days </p>
                 <p> One to one interaction to improve quality of answers </p>
                 <p> Model answers </p>
              </Tab>
              <Tab eventKey="three" title="Essay Test Series">
              <h3> Essay Test Series </h3>
                  <h2>₹ 3,500</h2>
                 <p> Questions strictly based on UPSC pattern </p>
                 <p> Copy evaluation within 3 days </p>
                 <p> One to one interaction to improve quality of answers </p>
                 <p> Model answers </p>
              </Tab>
          </Tabs>

        </div>
      </Container>
    </section>

   </div>
  )
}
