/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import "./Footer.css";
function Footer() {
  return (
    <footer>
      <a href="#" className="footer__logo">
        EGATOR
      </a>
      <ul className="permlinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experiance">Experiance</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="www.facebook.com">
          <BsFacebook />
        </a>
        <a href="www.instagram.com">
          <BsInstagram />
        </a>
        <a href="www.twitter.com">
          <BsTwitter />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; EGATOR Tutorials. All Rights Recived</small>
      </div>
    </footer>
  );
}

export default Footer;
