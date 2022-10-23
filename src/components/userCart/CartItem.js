import React, { useState } from "react";
import IncDecCounter from "../../components/global/IncDecCount/Index";
import TestImg from "../../images/image-product-1-thumbnail.jpg";

const CartItem = () => {
  const [ItemCount, setItemCount] = useState(1);

  return (
    <div className="cart__item">
      <img src={TestImg} alt="" />
      <div className="item__description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
        voluptates. Iure, optio consectetur? Adipisci veniam e nihil nostrum.
      </div>
      <div className="item__otherData">
        <div className="price">$25</div>
        <div className="quantity">
          <IncDecCounter ItemCount={ItemCount} setItemCount={setItemCount} />
        </div>
        <div className="total">$125</div>
      </div>
    </div>
  );
};

export default CartItem;
