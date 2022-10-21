import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Link to="/product/itsTheId">Product</Link>
      <Link to="/women">women</Link>
      <Link to="/men">men</Link>
    </div>
  );
};

export default Home;
