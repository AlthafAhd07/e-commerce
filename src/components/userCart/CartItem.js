import React, { useEffect, useRef, useState } from "react";
import IncDecCounter from "../../components/global/IncDecCount/Index";
import TestImg from "../../images/image-product-1-thumbnail.jpg";

const CartItem = ({ setFullTotal }) => {
  const [itemCount, setItemCount] = useState(1);
  const oldItemCount = useRef(itemCount);
  const price = 23;
  useEffect(() => {
    setFullTotal((old) => {
      if (oldItemCount.current < itemCount) {
        return old + price;
      } else if (oldItemCount.current > itemCount) {
        return old - price;
      } else {
        return old;
      }
    });

    oldItemCount.current = itemCount;
    // eslint-disable-next-line
  }, [itemCount]);

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
          <div className="price">{price}</div>
          <div className="quantity">
            <IncDecCounter
              ItemCount={itemCount}
              setItemCount={setItemCount}
              price={price}
            />
          </div>
          <div className="total">
            <pre>Total : </pre> <span>{price * itemCount}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
