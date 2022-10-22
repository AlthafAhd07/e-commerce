import React, { useEffect, useState } from "react";
import "./product.css";
// import { useParams } from "react-router-dom";
import { ReactComponent as CartIcon } from "../images/shopping-cart-icon.svg";
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
  // const { id } = useParams();
  const [mainImgId, setMainImgId] = useState(0);

  useEffect(() => {
    const getMainImagesForMobile = setTimeout(() => {
      imageData.images.map((image, index) => {
        if (index !== 0) {
          console.log("hi i am running");
          new Image().src = image.img;
        }
        return null;
      });
    }, [500]);
    return () => clearTimeout(getMainImagesForMobile);
  }, []);

  return (
    <div className="product">
      <div className="imageGallery">
        <div className="imagePreview">
          <img src={imageData.images[mainImgId].img} alt="mainImage" />
        </div>
        <div className="thumbnail">
          {imageData.images.map((image, index) => {
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
        <h1 className="productTitle">Fall Limited Edition Sneakers</h1>
        <p className="productDescription">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga cumque
          quam dolores exercitationem ratione expedita veritatis id, nobis
          ducimus tempore, laudantium, soluta cum. Impedit repudiandae nisi
          eligendi sunt, nihil natus.
        </p>
        <div className="price">
          <p className="price__discounted">
            <span>$125.00</span>
            <span className="discount">50%</span>
          </p>
          <p className="price__exact">$250.00</p>
        </div>
        <div className="AddToCart">
          <div>
            <button
              className="CartDecBtn"
              style={{
                color: imageData?.primaryColor,
              }}
            >
              -
            </button>
            0
            <button
              className="CartIncBtn"
              style={{
                color: imageData?.primaryColor,
              }}
            >
              +
            </button>
          </div>
          <button
            style={{
              backgroundColor: imageData?.primaryColor,
              boxShadow: `${imageData?.primaryColor} 0px 5px 18px`,
            }}
            className="CartBtn"
          >
            <CartIcon className="cart__icon" fill="white" /> Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
