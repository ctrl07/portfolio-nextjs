import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa6";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://www.instagram.com/su_yogh/"
        className="home__social-icon"
        target="_blank"
      >
        <FaInstagram />
      </a>
      <a
        href="https://github.com/ctrl07"
        className="home__social-icon"
        target="_blank"
      >
        <FaGithub />
      </a>
      <a
        href="www.linkedin.com/in/suyog-kurlekar"
        className="home__social-icon"
        target="_blank"
      >
        <FaLinkedin />
      </a>
    </div>
  );
};

export default Social;
