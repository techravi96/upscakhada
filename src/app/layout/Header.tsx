'use client'

import Link from 'next/link';
import logo from '../images/logo.png';

import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import Image from "next/image";
import { useEffect, useState } from 'react';
import { BsInstagram, BsWhatsapp , BsYoutube, BsFillTelephoneFill, BsFillEnvelopeFill } from "react-icons/bs";
import { FaFacebookF, FaTelegramPlane } from "react-icons/fa";

function Header() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    // Function to add/remove the "sticky" class based on scroll position
    const handleScroll = () => {
      if (window.pageYOffset > 80) { // Change 100 to your desired scroll position
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  


  return (
    <div className={`header ${isSticky ? 'sticky' : ''}`}>
        <div className='top_header'>
            <Container>
                <div className='topbar'>
                    <div className='top_social_icons'>
                        <ul>
                            <li>
                                <a href='' target='_blank'><FaFacebookF/></a>
                            </li>
                            <li>
                                <a href='' target='_blank'><FaTelegramPlane/></a>
                            </li>
                            <li>
                                <a href='' target='_blank'><BsInstagram/></a>
                            </li>
                            <li>
                                <a href='' target='_blank'><BsYoutube/></a>
                            </li>
                            <li>
                                <a href='' target='_blank'><BsWhatsapp/></a>
                            </li>
                        </ul>
                    </div>

                    <div className='topbar_right'>
                        <ul>
                            <li>
                                <a href='tel:9310521990'><BsFillTelephoneFill/> 9310521990</a>
                            </li>

                            <li>
                                <a href='mailto:upscakhada@gmail.com'><BsFillEnvelopeFill/> upscakhada@gmail.com</a>
                            </li>
                        </ul>
                    </div>
                </div>

            </Container>
        </div>
		<Container>
             <Navbar className='nav_header' expand="lg">
              <Navbar.Brand href="#home" className='logo'>
               <Image src={logo} alt="logo" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav >
                    <Link className='nav-link home_link' href="/">Home</Link>
                    <Link className='nav-link home_link' href="/aboutus">About</Link>
                    <NavDropdown title="Newly added" id="basic-nav-dropdown" className='custom_dropdown'>
                      <NavDropdown.Item href="/coursedetails"> Target 550+ in UPSC CSE MAINS- GS and ESSAY</NavDropdown.Item>
                      <NavDropdown.Item href="/"> UPSC GS Paperwise Daily Answer</NavDropdown.Item>
                      <NavDropdown.Item href="/"> Optional Answer Writing & Mentorship</NavDropdown.Item>
                      <NavDropdown.Item href="/"> UPSC Civil Services Special</NavDropdown.Item>
                      <NavDropdown.Item href="/">KARAMYOGI - UPPSC Updated</NavDropdown.Item>
                      <NavDropdown.Item href="/"> Haryana Civil Services (HCS) 2023</NavDropdown.Item>
                    </NavDropdown>
                    <Link className='nav-link' href="">Blogs</Link>
                    <Link className='nav-link' href="/#footersec">Contact US</Link>
                    
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
		</Container> 
    </div>
  
  );
}

export default Header;
