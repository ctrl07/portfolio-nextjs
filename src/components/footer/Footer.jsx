import React from "react";
import "./footer.css";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Suyog</h1>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>
          <li>
            <a href="#testimonials" className="footer__link">
              Testimonials
            </a>
          </li>
        </ul>
        <div className="footer__social">
          <a
            href="https://www.instagram.com/su_yogh"
            className="home__social-icon"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://github.com/ctrl07"
            className="home__social-icon"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="www.linkedin.com/in/suyog-kurlekar"
            className="home__social-icon"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>
        <span className="footer__copy"></span>
      </div>
    </footer>
  );
};

export default Footer;
