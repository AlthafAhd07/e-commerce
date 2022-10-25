import React, { useEffect, useRef, useState } from "react";
import "./product.css";
import { ReactComponent as CartIcon } from "../../images/shopping-cart-icon.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  selectCart,
  updateProductCount,
} from "../../features/userCart/cartSlice.js";
import IncDecCounter from "../../components/global/IncDecCount/Index";
import { selectAuth } from "../../features/userAuth/authSlice";
import {
  arrayRemove,
  arrayUnion,
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../firebase";
import { useParams } from "react-router-dom";
import { selectProducts } from "../../features/products/productSlice";
const imageData = {
  // primaryColor: "green",
  images: [
    {
      id: 1,
      img: "https://res.cloudinary.com/davg6e0yh/image/upload/v1666428070/image-product-1_xqdxbx.jpg",
      thumbnail:
        "https://res.cloudinary.com/davg6e0yh/image/upload/v1666428075/image-product-1-thumbnail_vkcet8.jpg",
    },
    {
      id: 2,
      img: "https://res.cloudinary.com/davg6e0yh/image/upload/v1666428098/image-product-2_jlsvyk.jpg",
      thumbnail:
        "https://res.cloudinary.com/davg6e0yh/image/upload/v1666428113/image-product-2-thumbnail_lw5kfu.jpg",
    },
    {
      id: 3,
      img: "https://res.cloudinary.com/davg6e0yh/image/upload/v1666428134/image-product-3_hd30kn.jpg",
      thumbnail:
        "https://res.cloudinary.com/davg6e0yh/image/upload/v1666428133/image-product-3-thumbnail_zkodmk.jpg",
    },
    {
      id: 4,
      img: "https://res.cloudinary.com/davg6e0yh/image/upload/v1666428178/image-product-4_ptnnmn.jpg",
      thumbnail:
        "https://res.cloudinary.com/davg6e0yh/image/upload/v1666428178/image-product-4-thumbnail_bazeat.jpg",
    },
  ],
};
const Product = () => {
  const { id: productId } = useParams();
  const { user } = useSelector(selectAuth);
  const userCart = useSelector(selectCart);
  const { products } = useSelector(selectProducts);
  const [mainImgId, setMainImgId] = useState(0);
  const trackFirstRender = useRef(0);
  const [currentProduct, setCurrentProduct] = useState(() => {
    return products.filter((item) => item.id === productId)[0];
  });

  if (!!!currentProduct) {
    console.log("currentProduct not exists in the redux state");
    getDoc(doc(db, "products", productId))
      .then((res) => {
        setCurrentProduct(res.data());
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const productExistInCart = userCart?.products?.filter(
    (item) => item?.product?.id === productId
  );

  const [ItemCount, setItemCount] = useState(() => {
    return productExistInCart[0]?.count || 1;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    const getMainImagesForMobile = setTimeout(() => {
      imageData.images.map((image, index) => {
        if (index !== 0) {
          new Image().src = image.img;
        }
        return null;
      });
    }, [500]);
    return () => clearTimeout(getMainImagesForMobile);
  }, []);

  useEffect(() => {
    if (trackFirstRender.current < 1) {
      trackFirstRender.current = 1;
      return;
    }
    let timer = setTimeout(() => {
      if (!!user && productExistInCart.length > 0) {
        updateDoc(doc(db, "userCart", user.uid), {
          cartItems: arrayRemove({
            item: productId,
            count: productExistInCart[0]?.count,
          }),
        });
        updateDoc(doc(db, "userCart", user.uid), {
          cartItems: arrayUnion({
            item: productId,
            count: ItemCount,
          }),
        });
      }
      dispatch(updateProductCount({ id: productId, count: ItemCount }));
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [ItemCount]);
  function handleAddToCart() {
    if (productExistInCart.length > 0) {
      return;
    }
    dispatch(addToCart({ product: currentProduct, count: ItemCount }));
    if (!!user) {
      updateDoc(doc(db, "userCart", user.uid), {
        cartItems: arrayUnion({ item: productId, count: ItemCount }),
      });
    }
  }

  if (!currentProduct) return <h1>Product Does not exists</h1>;

  return (
    <div className="product">
      <div className="imageGallery">
        <div className="imagePreview">
          <img src={currentProduct.images[mainImgId].img} alt="mainImage" />
        </div>
        <div className="thumbnail">
          {currentProduct.images.map((image, index) => {
            return (
              <img
                key={image.id}
                onClick={() => setMainImgId(index)}
                src={image.thumbnail}
                alt="thumbnail"
                style={{
                  filter: `${
                    mainImgId === index ? "grayscale(80%)" : "grayscale(0%)"
                  }`,
                }}
              />
            );
          })}
        </div>
      </div>
      <div className="productData">
        <h6
          style={{
            color: imageData?.primaryColor,
          }}
        >
          SNEAKER COMPANY
        </h6>
        <h1 className="productTitle">{currentProduct?.name}</h1>
        <p className="productDescription">{currentProduct?.description}</p>
        <div className="price">
          <p className="price__discounted">
            <span>${currentProduct?.price}</span>
            <span className="discount">50%</span>
          </p>
          <p className="price__exact">${currentProduct?.price * 2 || null}</p>
        </div>
        <div className="AddToCart">
          <IncDecCounter ItemCount={ItemCount} setItemCount={setItemCount} />
          <button
            style={{
              backgroundColor:
                imageData?.primaryColor ||
                (productExistInCart.length > 0 && "rgb(0 255 58)"),
              boxShadow:
                productExistInCart.length > 0 &&
                `rgb(58 243 100 / 49%) 0px 2px 8px 0px`,
            }}
            onClick={handleAddToCart}
            className="CartBtn"
          >
            <CartIcon className="cart__icon" fill="white" />
            {productExistInCart.length > 0 ? "Added to Card" : "Add to cart"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
