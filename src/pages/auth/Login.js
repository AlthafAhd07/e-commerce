import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";
import { auth, db } from "../../firebase.js";
import { login } from "../../features/userAuth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectCart } from "../../features/userCart/cartSlice";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { products } = useSelector(selectCart);
  console.log(
    products.map((i) => {
      return {
        count: i.count,
        item: doc(db, `/products/${i.product.id}`),
      };
    })
  );
  function handleSubmit(e) {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        updateDoc(doc(db, "userCart", user.uid), {
          cartItems: arrayUnion(
            ...products.map((i) => {
              return {
                count: i.count,
                item: i.product.id,
              };
            })
          ),
        });

        dispatch(login(user.uid, user.displayName, user.email));
        navigate("/");
      })
      .catch((err) => {
        alert(err);
      });
  }
  return (
    <div className="auth">
      <div className="auth__wrapper">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Admin@gmial.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="Password">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
        <div className="bottom__stuff">
          New to here : {` `} <Link to="/register">Register Now</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
