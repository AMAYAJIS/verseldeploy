import React from "react";
import "./FooterStyle.css";
import {
  FaHome,
  FaPhone,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>701 Krishnas Collectorate Street</p>
              <p>Kottayam, Kerala</p>
            </div>
          </div>
          <div className="phone">
            <div>
              <h4>
                <FaPhone
                  size={20}
                  style={{ color: "#fff", marginRight: "2rem" }}
                />
                +91 6282 168047
              </h4>
            </div>
          </div>
          <div className="email">
            <div>
              <h4>
                <TfiEmail
                  size={20}
                  style={{ color: "#fff", marginRight: "2rem" }}
                />
                amayashaji2021@gmail.com
              </h4>
            </div>
          </div>
        </div>
        <div className="right">
          <h4>Let's Discuss What's Next</h4>
          <br />
          <p>Have a project or a question?</p>
          <p>We'd love to here from you</p>

          <div className="social">
            <FaFacebook
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
            <FaTwitter
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
            <FaLinkedin
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
