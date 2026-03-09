import React from "react";

import "./ShopPage.css";
import Products from "./Products";
import Filter from "./Filter";

export default function ShopPage(props) {
  return (
    <div className="container">
      <h1 className="title">Shop</h1>
      <hr className="shop-hr" />
      <div className="body">
        <Filter />
        <Products
          onHandelCart={props.onHandelCart}
        />
      </div>
    </div>
  );
}
