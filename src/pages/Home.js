import React, { useEffect, useState } from "react";
import SingleItem from "../components/global/singleItem/SingleItem";
import "./index.css";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase.js";
const Home = () => {
  const [products, setProducts] = useState();
  useEffect(() => {
    getDocs(collection(db, "products"))
      .then((res) => {
        const allProducts = [];
        res.forEach((doc) => {
          allProducts.unshift({ id: doc.id, ...doc.data() });
        });
        setProducts(allProducts);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="home">
      {!!products &&
        products.map((product) => {
          return <SingleItem product={product} key={product.id} />;
        })}
    </div>
  );
};

export default Home;
