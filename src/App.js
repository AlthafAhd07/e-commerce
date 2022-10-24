import { doc, getDoc } from "firebase/firestore";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/global/navBar";
import { login } from "./features/userAuth/authSlice";
import { addToCart } from "./features/userCart/cartSlice";
import { auth, db } from "./firebase";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Cart from "./pages/cart/Cart";
import Home from "./pages/Home";
import Men from "./pages/Men";
import Women from "./pages/Men";
import Product from "./pages/product/Product";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(login(userAuth.uid, userAuth.displayName, userAuth.email));
        getDoc(doc(db, "userCart", userAuth.uid)).then((res) => {
          if (!!res.data().cartItems) {
            res.data().cartItems.forEach((i) => {
              getDoc(i.item).then((res) => {
                dispatch(
                  addToCart({
                    product: { id: res.id, ...res.data() },
                    count: i.count,
                  })
                );
              });
            });
          }
        });
      }
    });
  }, []);
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
          <Route path="/login" element={<Login />} exact />
          <Route path="/register" element={<Register />} exact />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
