import React, { useState } from "react";

import "./NavSection.css";
import HomePage from "./HomePage";
import ShopPage from "./ShopPage";
import CartPage from "./CartPage";
import AboutUsPage from "./AboutUsPage";

// Icons Import Here
import { IoCartOutline } from "react-icons/io5";
import { AiOutlineMenuFold } from "react-icons/ai";

export default function NavSection(props) {
  const { isMenuOpen, menuHandelar, pageHandelar } = props;

  return (
    <>
      <nav className="nav">
        <AiOutlineMenuFold className="menu-icon" onClick={menuHandelar} />
        <h1 className="logo">KWL</h1>
        <ul className={isMenuOpen ? "active" : "nav ul"}>
          <li>
            <a onClick={() => pageHandelar(HomePage)}>Home</a>
          </li>
          <li>
            <a onClick={() => pageHandelar(ShopPage)}>Shop</a>
          </li>
          <li>
            <a onClick={() => pageHandelar(AboutUsPage)}>About</a>
          </li>
        </ul>
        <div className="cart">
          <IoCartOutline
            className="cart-icon"
            onClick={() => {
              pageHandelar(CartPage);
            }}
          />
          <span className="conting-card" onClick={()=>{pageHandelar(CartPage)}} >{props.cartsCount.length}</span>
        </div>
      </nav>
    </>
  );
}
