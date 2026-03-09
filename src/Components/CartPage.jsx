import React, { useEffect, useState } from "react";

import Card from "./Card";
import './CartPage.css'

export default function CartPage(props) {
  if (props.carts.length === 0) {
    return <h1 className="empety-message" >Carts are empety</h1>;
  }
  const cards = props.carts.map((card) => {
    const deleteCardBtn = (
      <button
        className="btn"
        onClick={() => {
          props.onDelete(card.id);
        }}
      >
        Remove From Cart
      </button>
    );
    return (
      <Card
        key={card.id}
        title={card.title}
        price={card.price}
        image={card.image}
        desc={card.description}
        btn={deleteCardBtn}
      />
    );
  });

  return <div>{cards}</div>;
}
