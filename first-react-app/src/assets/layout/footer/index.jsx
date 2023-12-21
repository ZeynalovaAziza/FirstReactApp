import React from "react";
import "./index.scss";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { FaEnvelope } from "react-icons/fa";
function Footer() {
  return (
    <div>
      <footer>
        <div className="container">
          <div className="footer">
            <div className="top">
              <div className="address">
                <FaLocationDot />
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
              <div className="address">
                <IoCall />
                <p>Call:+012334567890</p>
              </div>
              <div className="address">
                <FaEnvelope />
                <p>demo@gmail.com</p>
              </div>
            </div>
            <div className="bottom">
              <div className="subscribe">
                <input type="text" placeholder="Enter your email" />
                <button>SUBSCRIBE</button>
              </div>
              <div className="icons">
               <a href=""> <FaFacebook /></a>
               <a href=""> <FaTwitter /></a>
               <a href=""> <FaLinkedinIn /></a>
                <a href=""><FaInstagram /></a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
