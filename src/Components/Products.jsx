import React, { useEffect, useState } from "react";
// import axios from "axios";

import "./Products.css";
import Card from "./Card";

export default function Products(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [prodects, setProdects] = useState([]);
  const [error, setError] = useState(null);

  const APICall = async (url) => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setProdects(data);
      setIsLoading(false);
      setError(null);
    } catch (err) {
      setIsLoading(false);
      setError(err);
    }
  };

  useEffect(() => {
    APICall("https://fakestoreapi.com/products");
  }, []);

  const cards = prodects.map((product) => {
    const handelClick = (e) => {
      e.stopPropagation();
      props.onHandelCart(product);
    };

    const btn = (
      <button className="btn" onClick={handelClick}>
        Add to Cart
      </button>
    );

    return (
      <Card
        key={product.id}
        title={product.title}
        price={product.price}
        image={product.image}
        desc={product.description}
        btn={btn}
      />
    );
  });

  return (
    <div className="cards">
      {isLoading && <h2 className="data-loading">Data Is Loading</h2>}
      {error && <h2 className="data-loading">{error.message}</h2>}
      {cards}
    </div>
  );
}
