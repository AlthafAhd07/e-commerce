import React, { useState } from "react";
import { useSelector } from "react-redux";
import Left from "../../components/userCart/Left";
import Right from "../../components/userCart/Right";
import { selectCart } from "../../features/userCart/cartSlice";
import "./style.css";
const Cart = () => {
  const [fullTotal, setFullTotal] = useState(0);
  const { products, productCount } = useSelector(selectCart);
  return (
    <div className="cart">
      <h1 className="cart__heading">
        My basket{" "}
        <span>
          ( {productCount} {productCount > 1 ? "ITEMS" : "ITEM"} )
        </span>
      </h1>
      {productCount > 0 ? (
        <div className="wrapper">
          <Left products={products} setFullTotal={setFullTotal} />
          <Right productCount={productCount} fullTotal={fullTotal} />
        </div>
      ) : (
        <h2 style={{ fontSize: "2rem" }}>No Products in your basket</h2>
      )}
    </div>
  );
};

export default Cart;
