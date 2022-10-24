import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";
import { auth, db } from "../../firebase.js";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../features/userAuth/authSlice";
import { doc, setDoc } from "firebase/firestore";
import { selectCart } from "../../features/userCart/cartSlice";

const Register = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});
  const { products } = useSelector(selectCart);
  const dispatch = useDispatch();

  function handleInputChange(e) {
    setUserData((old) => {
      return {
        ...old,
        [e.target.name]: e.target.value,
      };
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (
      userData.password !== userData.confirmPassword ||
      userData.username.length < 4
    )
      return;

    createUserWithEmailAndPassword(auth, userData.email, userData.password)
      .then((userAuth) => {
        setDoc(doc(db, "userCart", userAuth.user.uid), {
          name: userData.username,
          cartItems: products || [],
        }).then(() => {
          updateProfile(userAuth.user, {
            displayName: userData.username,
          }).then(() => {
            dispatch(
              login(userAuth.user.uid, userData.username, userAuth.user.email)
            );
            navigate("/");
          });
        });
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <div className="auth">
      <div className="auth__wrapper register">
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="userName">Name</label>
          <input
            type="text"
            placeholder="John"
            id="userName"
            name="username"
            value={userData.username || ""}
            onChange={handleInputChange}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Admin@gmial.com"
            id="email"
            name="email"
            value={userData.email || ""}
            onChange={handleInputChange}
          />
          <label htmlFor="Password">Password</label>
          <input
            type="password"
            id="Password"
            name="password"
            value={userData.password || ""}
            onChange={handleInputChange}
          />
          <label htmlFor="ConfirmPassword">Confirm Password</label>
          <input
            type="password"
            id="ConfirmPassword"
            name="confirmPassword"
            value={userData.confirmPassword || ""}
            onChange={handleInputChange}
          />
          <button type="submit">Register</button>
        </form>
        <div className="bottom__stuff">
          Already Have an Acccount : {` `} <Link to="/login">Login Now</Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
