import React from "react";
import "./HeroImgStyle2.css";

const HeroImg2 = (props) => {
  return (
    <div className="hero-img">
      <div className="hero-content">
        <h1>{props?.heading}</h1>
        <p>{props?.text}</p>
      </div>
    </div>
  );
};

export default HeroImg2;
