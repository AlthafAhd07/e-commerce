import React, { useState } from "react";
import IncDecCounter from "../../components/global/IncDecCount/Index";
import TestImg from "../../images/image-product-1-thumbnail.jpg";

const CartItem = () => {
  const [ItemCount, setItemCount] = useState(1);

  return (
    <div className="cart__item">
      <img src={TestImg} alt="" />
      <div className="wrapper__smDevice">
        <h1 className="item__title">product Name dafdafa</h1>
        <div className="item__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
          voluptates. Iure, optio consectetur? Adipisci veniam e nihil nostrum.
        </div>
        <div className="item__otherData">
          <div className="price">$25</div>
          <div className="quantity">
            <IncDecCounter ItemCount={ItemCount} setItemCount={setItemCount} />
          </div>
          <div className="total">
            <pre>Total : </pre> <span>$125</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
