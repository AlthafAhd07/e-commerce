import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import IncDecCounter from "../../components/global/IncDecCount/Index";
import { selectAuth } from "../../features/userAuth/authSlice";
import {
  removeFromCart,
  updateProductCount,
} from "../../features/userCart/cartSlice";
import { db } from "../../firebase";
import { ReactComponent as CrossIcon } from "../../images/close-line-icon.svg";
const CartItem = ({ item: { count, product }, setFullTotal }) => {
  const [itemCount, setItemCount] = useState(count);
  const oldItemCount = useRef(itemCount);
  const dispatch = useDispatch();
  const { user } = useSelector(selectAuth);
  const trackFirstRender = useRef(0);

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
    if (trackFirstRender.current < 1) {
      console.log("i am ruuning");
      trackFirstRender.current = 1;
      return;
    }
    let timer = setTimeout(() => {
      if (!!user) {
        updateDoc(doc(db, "userCart", user.uid), {
          cartItems: arrayRemove({
            item: product.id,
            count: count,
          }),
        });
        updateDoc(doc(db, "userCart", user.uid), {
          cartItems: arrayUnion({
            item: product.id,
            count: itemCount,
          }),
        });
      }
      dispatch(updateProductCount({ id: product.id, count: itemCount }));
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
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
          <div className="price">${price}</div>
          <div className="quantity">
            <IncDecCounter
              ItemCount={itemCount}
              setItemCount={setItemCount}
              price={price}
            />
          </div>
          <div className="total">
            <pre>Total : </pre> <span>${price * itemCount}</span>
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
          if (!!user) {
            updateDoc(doc(db, "userCart", user.uid), {
              cartItems: arrayRemove({ item: product.id, count: itemCount }),
            });
          }
        }}
      />
    </div>
  );
};

export default CartItem;
