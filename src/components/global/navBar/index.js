import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "./navbar.css";
import { ReactComponent as CartIcon } from "../../../images/shopping-cart-icon.svg";
import { ReactComponent as ProfileLogo } from "../../../images/my-account-icon.svg";

import { auth } from "../../../firebase";

import { logout, selectAuth } from "../../../features/userAuth/authSlice";
import { clearCart, selectCart } from "../../../features/userCart/cartSlice.js";

import NavLink from "./NavLink";

const NavBar = () => {
  const { user } = useSelector(selectAuth);
  const userCart = useSelector(selectCart);

  const trackBar = useRef();

  const dispatch = useDispatch();

  function HandleLogOut() {
    auth.signOut();
    dispatch(clearCart());
    dispatch(logout());
  }

  return (
    <header className="header">
      <nav className="nav">
        <input type="checkbox" className="nav__checkbox" />
        <div className="nav__toggler">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <h1 className="logo">
          <Link
            to="/"
            style={{ textDecoration: "none", color: "hsl(220, 13%, 13%)" }}
          >
            Sneakers
          </Link>
        </h1>
        <ul className="nav__links nav__doggleLinks">
          <NavLink value={""} trackBar={trackBar} />
          <NavLink value={"collections"} trackBar={trackBar} />
          <NavLink value={"men"} trackBar={trackBar} />
          <NavLink value={"women"} trackBar={trackBar} />
          <NavLink value={"about"} trackBar={trackBar} />
        </ul>
        <ul className="nav__smallDevice">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/collections">Collections</Link>
          </li>
          <li>
            <Link to="/men">Men</Link>
          </li>
          <li>
            <Link to="/women">Women</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
        <ul className="nav__links">
          <Link to="/cart/itsTheId">
            <li className="cartIcon">
              <CartIcon stroke="black" fill="white" className="nav__icon" />
              {userCart.productCount > 0 && <p>{userCart.productCount}</p>}
            </li>
          </Link>
          <li>
            {user ? (
              <ProfileLogo
                className="nav__icon profilePic"
                onClick={HandleLogOut}
              />
            ) : (
              <>
                <Link
                  className="auth__loginLink"
                  to="/login"
                  style={{ textDecoration: "none" }}
                >
                  Login
                </Link>{" "}
                <Link
                  className="auth__registerLink"
                  to="/register"
                  style={{ textDecoration: "none" }}
                >
                  / SignUp
                </Link>
              </>
            )}
          </li>
        </ul>
      </nav>
      <span className="underline" ref={trackBar}></span>
    </header>
  );
};

export default NavBar;
