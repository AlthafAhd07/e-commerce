import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import IncDecCounter from "../../components/global/IncDecCount/Index";
import { removeFromCart } from "../../features/userCart/cartSlice";
import { ReactComponent as CrossIcon } from "../../images/close-line-icon.svg";
const CartItem = ({ item: { count, product }, setFullTotal }) => {
  const [itemCount, setItemCount] = useState(count);
  const oldItemCount = useRef(itemCount);
  const dispatch = useDispatch();
  const price = product?.price;
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
  useEffect(() => {
    setFullTotal((old) => old + price * count);
  }, []);

  return (
    <div className="cart__item">
      <img src={product?.images[0]?.img} alt="" />
      <div className="wrapper__smDevice">
        <h1 className="item__title">{product?.name}</h1>
        <div className="item__description">{product?.description}</div>
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
      <CrossIcon
        className="dltIcon"
        fill="black"
        stroke="black"
        onClick={() => {
          dispatch(removeFromCart(product?.id));
          setFullTotal((old) => old - price * itemCount);
        }}
      />
    </div>
  );
};

export default CartItem;
