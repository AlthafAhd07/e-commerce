import React from "react";
import CartItem from "./CartItem";
import "./style.css";
const Left = () => {
  return (
    <div className="cart__left">
      <CartItem />
      <CartItem />
      <CartItem />
      <CartItem />
    </div>
  );
};

export default Left;
