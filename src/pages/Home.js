import React, { useEffect } from "react";
import SingleItem from "../components/global/singleItem/SingleItem";
import "./index.css";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase.js";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllProducts,
  selectProducts,
} from "../features/products/productSlice";
import { changeLoadingState } from "../features/customLoaders/loaderSlice";
const Home = () => {
  // const [products, setProducts] = useState();
  const { products } = useSelector(selectProducts);
  const dispatch = useDispatch();
  if (!products.length) {
    dispatch(changeLoadingState(true));
  }

  useEffect(() => {
    getDocs(collection(db, "products"))
      .then((res) => {
        const allProducts = [];
        res.forEach((doc) => {
          allProducts.unshift({ id: doc.id, ...doc.data() });
        });
        dispatch(getAllProducts(allProducts));
        dispatch(changeLoadingState(false));
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
