import React from "react";
import CartItem from "./CartItem";
import "./style.css";
const Left = ({ products, setFullTotal }) => {
  return (
    <div className="cart__left">
      {products.map((item) => {
        return (
          <CartItem
            item={item}
            setFullTotal={setFullTotal}
            key={item?.product?.id}
          />
        );
      })}
    </div>
  );
};

export default Left;
