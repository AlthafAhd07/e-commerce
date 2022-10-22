import React from "react";
import "./product.css";
// import { useParams } from "react-router-dom";
import MainImg from "../images/image-product-1.jpg";
import ImgThumbanil from "../images/image-product-1-thumbnail.jpg";

const Product = () => {
  // const { id } = useParams();
  return (
    <div className="product">
      <div className="imageGallery">
        <div className="imagePreview">
          <img src={MainImg} alt="mainImage" />
        </div>
        <div className="thumbnail">
          <img src={ImgThumbanil} alt="thumbnail" />
          <img src={ImgThumbanil} alt="thumbnail" />
          <img src={ImgThumbanil} alt="thumbnail" />
          <img src={ImgThumbanil} alt="thumbnail" />
        </div>
      </div>
      <div className="productData">
        <h6>SNEAKER COMPANY</h6>
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
            <button className="CartDecBtn">-</button>0
            <button className="CartIncBtn">+</button>
          </div>
          <button className="CartBtn">Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
