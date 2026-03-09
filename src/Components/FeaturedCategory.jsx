import React from "react";

import "./FeaturedCategory.css";
import Card from "./Card";

export default function FeaturedCategory(props) {
  return (
    <section className="featured-section">
      <h1 className="section-title">Featured Catagory</h1>
      <hr className="featured-catagory-hr" />
      <div className="cards">
        <Card
          image={"./Home-Hero-Section-Pic.png"}
          pageHandelar={props.pageHandelar}
          class={"cardHover"}
        />
        <Card
          image={"./Home-Hero-Section-Pic.png"}
          pageHandelar={props.pageHandelar}
          class={"cardHover"}
        />
        <Card
          image={"./Home-Hero-Section-Pic.png"}
          pageHandelar={props.pageHandelar}
          class={"cardHover"}
        />
        <Card
          image={"./Home-Hero-Section-Pic.png"}
          pageHandelar={props.pageHandelar}
          class={"cardHover"}
        />
        <Card
          image={"./Home-Hero-Section-Pic.png"}
          pageHandelar={props.pageHandelar}
          class={"cardHover"}
        />
      </div>
    </section>
  );
}
