import React from "react";
import "./Hero.css";
import hand_icon from "../Assets/hand_icon.png"
import arrow_icon from "../Assets/arrow.png"
import hero_image from "../Assets/hero_image_two.jpg"

const Hero = () => {
  return (

    <div className="hero">
  <img src={hero_image} alt="Hero" className="hero-img" />
  

  {/* Overlay Content */}
  <div className="hero-overlay">
    <div className="hero-left">
      <h2>NEW ARRIVAL ONLY</h2>

      <div className="hero-title">
        <div className="hero-hand-icon">
          <p>New</p>
          <img src={hand_icon} alt="Hand Icon" />
        </div>

        <p className="hero-text">Collection</p>
        <p className="hero-text">For Everyone</p>
      </div>

      <div className="hero-latest-btn">
        <span>Latest Collection</span>
        <img src={arrow_icon} alt="Arrow" />
      </div>
    </div>
  </div>
</div>

  );
};

export default Hero;

