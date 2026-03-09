import React from "react";

import "./HeroSection.css";
import ShopPage from "./ShopPage";

export default function HeroSection(props) {
  const handelClick = () => {
    props.pageHandelar(ShopPage);
  };
  return (
    <section className="hero-section">
      <div className="hero-desc">
        <h1>UPGRADE YOUR STYLE</h1>
        <button onClick={handelClick}>SHOP NOW</button>
      </div>
      <div>
        <img
          src="/Home Hero Section Pic.png"
          alt="Hero Section Image"
          className="hero-image"
        />
      </div>
    </section>
  );
}
