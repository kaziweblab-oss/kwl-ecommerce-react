import React, { useState } from "react";

import "./card.css";

export default function Card(props) {
  const truncateString = (str, num) => {
    if (str.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return (
    <section className={`card ${props.class}`}>
      <img src={props.image} alt="product Image" className="card-image" />
      {props.title && (
        <h2 className="card-title">{truncateString(props.title, 30)}</h2>
      )}
      <p className="card-price">Prize : {props.price}</p>
      <p className="card-desc">
        Description :{" "}
        {props.desc && <span>{truncateString(props.desc, 50)}</span>}
      </p>
      {props.btn}
    </section>
  );
}
