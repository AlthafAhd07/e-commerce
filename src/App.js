import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/global/navBar";
import Cart from "./pages/cart/Cart";
import Home from "./pages/Home";
import Men from "./pages/Men";
import Women from "./pages/Men";
import Product from "./pages/product/Product";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/men" element={<Men />} exact />
          <Route path="/women" element={<Women />} exact />
          <Route path="/product/:id" element={<Product />} exact />
          <Route path="/cart/:id" element={<Cart />} exact />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
