import React from 'react';
import { Outlet } from "react-router-dom";
import './Nav+Footer.css';

function Footer () {

  return (
    <>
    <Outlet />
    <nav className = 'navbar'>
      <h1 className="navbar-h1">
        <a href = '/' className='navbar-a'>Pickup Basketball Comps  </a>
     </h1>
    </nav>
    <section className="footer">
      <hr className="footer-seperator" />
      <section className="footer-social-media">
        <a href="/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
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
            <a href = '/our_story'>Our Story</a>
          </section>
        </section>
      </section>
      <hr className="footer-seperator" />
    </section>
    </>
  )

}

export default Footer;