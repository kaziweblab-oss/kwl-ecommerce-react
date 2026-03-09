import React, { useState } from "react";

import "./card.css";

export default function Card(props) {

  return (
    <section className={`card ${props.class}`} /*onClick={handelClick}*/>
      <img src={props.image} alt="product Image" className="card-image" />
      <h2 className="card-title">{props.title}</h2>
      <p className="card-price">Prize : {props.price}</p>
      <p className="card-desc">Description : {props.desc}</p>
      {props.btn}
    </section>
  );
}
