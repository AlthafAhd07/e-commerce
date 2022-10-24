import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./style.css";
import { addToCart, selectCart } from "../../../features/userCart/cartSlice";
import { selectAuth } from "../../../features/userAuth/authSlice";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { db } from "../../../firebase";
import { useNavigate } from "react-router-dom";
const SingleItem = ({ product }) => {
  const dispatch = useDispatch();
  const { products } = useSelector(selectCart);
  const { user } = useSelector(selectAuth);

  const navigate = useNavigate();

  const ItemExistsInCart = products?.some(
    (item) => item?.product?.id === product?.id
  );
  function handleClick() {
    if (ItemExistsInCart) return;
    dispatch(
      addToCart({
        product: product,
        count: 1,
      })
    );
    if (!!user) {
      updateDoc(doc(db, "userCart", user.uid), {
        cartItems: arrayUnion({ item: product.id, count: 1 }),
      });
    }
  }
  return (
    <div className="singleItem">
      <img
        src={product?.images[0]?.img}
        alt="Product"
        onClick={() => {
          navigate(`/product/${product?.id}`);
        }}
      />
      <h3>{product.name}</h3>
      <p>Price : ${product.price}</p>
      <button
        style={{ backgroundColor: `${ItemExistsInCart ? "green" : ""}` }}
        onClick={handleClick}
      >
        {ItemExistsInCart ? "Added To Cart" : "Add To Cart"}
      </button>
    </div>
  );
};

export default SingleItem;
