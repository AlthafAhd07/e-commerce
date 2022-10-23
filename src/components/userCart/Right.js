import React from "react";
import "./style.css";
const Right = () => {
  return (
    <div className="cart__right">
      <h1 className="cart__summaryTitle">Order Summary</h1>
      <div className="cart__other">
        <div className="ItemCountPrice">
          <span>3 ITEMS</span> <span>$457</span>
        </div>
        <div className="ItemShippingOption">
          <p>SHIPPING</p>
          <select>
            <option value="">Standart delivery - $5</option>
            <option value="">Fast delivery - $15</option>
          </select>
        </div>
        <div className="item__promoCode">
          <p>PROMO CODE</p>
          <input type="text" placeholder="Enter your code" />
          <button>APPLY</button>
        </div>
      </div>
      <hr className="horizontalLine" />
      <div className="cart__total">
        <div className="ItemCountPrice">
          <span>SUBTOTAL</span>
          <span>$300</span>
        </div>
        <div className="ItemCountPrice">
          <span>DELIVERY</span>
          <span>$3</span>
        </div>
        <div className="ItemCountPrice">
          <span>TOTAL</span>
          <span>$303</span>
        </div>
        <button>CHECKOUT</button>
      </div>
    </div>
  );
};

export default Right;
