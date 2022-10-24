import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./style.css";
import { addToCart, selectCart } from "../../../features/userCart/cartSlice";
const SingleItem = ({ product }) => {
  const dispatch = useDispatch();
  const { products } = useSelector(selectCart);

  const ItemExistsInCart = products.some(
    (item) => item.product.id === product.id
  );
  function handleClick() {
    if (ItemExistsInCart) return;
    dispatch(
      addToCart({
        product: product,
        count: 1,
      })
    );
  }
  return (
    <div className="singleItem">
      <img src={product?.images[0]?.img} alt="Product" />
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
