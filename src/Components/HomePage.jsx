import React from "react";
import HeroSection from "./HeroSection";
import FeaturedCatagory from "./FeaturedCatagory";

export default function HomePage(props) {
  return (
    <div>
      <HeroSection pageHandelar={props.pageHandelar} />
      <FeaturedCatagory pageHandelar={props.pageHandelar} />
    </div>
  );
}
