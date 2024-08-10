import React from "react";
import "./Footer.css";
import footer_logo from "../../assets/logo.svg";
import user_icon from "../../assets/user_icon.svg";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={footer_logo} alt="" />
          <p>
            My Name is Priyanshu Dubey, I am a Frontend Developer.I Have Good
            Knowledge Of Frontend Technology & I am Fresher & Looking For Job in
            Reputed Company.
          </p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="" />
            <input type="email" placeholder="Enter Your Mail" />
          </div>
          <div className="footer-subscribe"> Subscribe </div>
        </div>
      </div>
      <hr />

      <div className="icons">
        <a
          href="https://www.linkedin.com/in/priyanshu-dubey-809ba228a/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/PriyanshuDubey17"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithubSquare />
        </a>
        <a href="mailto:dubeypriyanshu033@gmail.com">
          <SiGmail className="gmail-icon" />
        </a>
      </div>
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          ©2023 Priyanshu Dubey.All Right Reserved.
        </p>
        <div className="footer-bottom-right">
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
          <p>Contact With Me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
