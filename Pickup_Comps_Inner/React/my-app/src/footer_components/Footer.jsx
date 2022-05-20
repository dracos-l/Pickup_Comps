import React from 'react';

import './Footer.css';

function Footer () {

  return (
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
          <section className="footer-info__email">
            <a href = './About.html'>About</a>
          </section>
        </section>
        <section className="footer-info-right">
          <section className="footer-info__story">
            <a href = '/'>Our Story</a>
          </section>
        </section>
      </section>
      <hr className="footer-seperator" />
    </section>
  )

}

export default Footer;