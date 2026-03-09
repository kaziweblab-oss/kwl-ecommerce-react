import React from "react";

import HeroSection from "./HeroSection";
import FeaturedCategory from "./FeaturedCategory";

export default function HomePage(props) {
  return (
    <div>
      <HeroSection pageHandelar={props.pageHandelar} />
      <FeaturedCategory pageHandelar={props.pageHandelar} />
    </div>
  );
}
