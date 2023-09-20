import React from "react";
import "../../App.css";
import logo from "../../log1000.png";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="facebook-container">
          <FaFacebook className="facebook-icon" />
          <a
            href="https://www.facebook.com/profile.php?id=61551148806533"
            className="facebook-link"
            target="_blank"
          >
            Facebook
          </a>
        </div>
        <img src={logo} alt="Logo" className="logo" />
        <p className="copyright">© 2023</p>
      </div>
    </div>
  );
};

export default Footer;
