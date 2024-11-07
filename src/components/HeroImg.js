import "./HeroImgStyle.css";
import React from "react";
import IntroPic from "../assets/pic10.jpg";
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="codeauthor" src={IntroPic} alt="IntroImg" />
      </div>
      <div className="content">
        <p>Hii I am a developer and UX/UI designer</p>
        <h1>React Developer</h1>
        <div>
          <Link to="/project" className="btn">
            Projects
          </Link>
          <Link to="/contact" className="btn-light">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
