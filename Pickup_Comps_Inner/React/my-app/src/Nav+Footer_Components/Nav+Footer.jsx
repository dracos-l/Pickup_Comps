import React from 'react';
import { Outlet } from "react-router-dom";
import './Nav+Footer.css';

function Footer () {

  return (
    /*
    This file has the nav and footer components stored 
    The nav compoents in a header that is a link 
    The footer has a seperator that is two black lines to clearly outline where the footer is
    The footer has a section in bigger font in the middle that is a link to our social media
    The footer then has three section rendering in the left, middle, and right for the name, about page and our story page
     */
    <>
    <Outlet />
    <nav className = 'navbar'> 
      <h1 className="navbar-h1">
        <a href = '/' className='navbar-a'>Pickup Basketball Comps</a>
     </h1>
    </nav>
    <section className="footer">
      <hr className="footer-seperator" />
      <section className="footer-social-media">
        <a href="./contact_us">Contact Us</a>
      </section>
      <section className="footer-info">
        <section className="footer-info-left">
          <section className="footer-info__name">
            Software Engineers: Ethan Waggoner and Logan Dracos 
          </section>    
        </section>
        <section className="footer-info-center">
          <section className="footer-info__about">
            <a href = './about'>About</a>
          </section>
        </section>
        <section className="footer-info-right">
          <section className="footer-info__story">
            <a href = './our_story'>Our Story</a>
          </section>
        </section>
      </section>
      <hr className="footer-seperator" />
    </section>
    </>
  )

}

export default Footer;