import React, { useState } from "react";
import Left from "../../components/userCart/Left";
import Right from "../../components/userCart/Right";
import "./style.css";
const Cart = () => {
  const [fullTotal, setFullTotal] = useState(0);
  return (
    <div className="cart">
      <h1 className="cart__heading">
        My basket <span>( 2 ITEMS )</span>
      </h1>
      <div className="wrapper">
        <Left setFullTotal={setFullTotal} />
        <Right fullTotal={fullTotal} />
      </div>
    </div>
  );
};

export default Cart;
