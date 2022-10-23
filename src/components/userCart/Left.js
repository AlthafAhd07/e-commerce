import React from "react";
import CartItem from "./CartItem";
import "./style.css";
const Left = ({ setFullTotal }) => {
  return (
    <div className="cart__left">
      <CartItem setFullTotal={setFullTotal} />
      <CartItem setFullTotal={setFullTotal} />
      <CartItem setFullTotal={setFullTotal} />
      <CartItem setFullTotal={setFullTotal} />
    </div>
  );
};

export default Left;
