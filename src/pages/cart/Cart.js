import React from "react";
import Left from "../../components/userCart/Left";
import Right from "../../components/userCart/Right";
import "./style.css";
const Cart = () => {
  return (
    <div className="cart">
      <h1 className="cart__heading">
        My basket <span>( 2 ITEMS )</span>
      </h1>
      <div className="wrapper">
        <Left />
        <Right />
      </div>
    </div>
  );
};

export default Cart;
