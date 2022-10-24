import React, { useRef } from "react";
import { ReactComponent as CartIcon } from "../../../images/shopping-cart-icon.svg";
import { ReactComponent as ProfileLogo } from "../../../images/my-account-icon.svg";
import "./style.css";
import NavLink from "./NavLink";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, selectCart } from "../../../features/userCart/cartSlice.js";
import { Link } from "react-router-dom";
import { logout, selectAuth } from "../../../features/userAuth/authSlice";
import { auth } from "../../../firebase";

const NavBar = () => {
  const trackBar = useRef();
  const dispatch = useDispatch();
  const userCart = useSelector(selectCart);
  const { user } = useSelector(selectAuth);

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
        <h1 className="logo">Sneakers</h1>
        <ul className="nav__links nav__doggleLinks">
          <NavLink value={""} trackBar={trackBar} />
          <NavLink value={"collections"} trackBar={trackBar} />
          <NavLink value={"men"} trackBar={trackBar} />
          <NavLink value={"women"} trackBar={trackBar} />
          <NavLink value={"about"} trackBar={trackBar} />
        </ul>
        <ul className="nav__smallDevice">
          <li>Home</li>
          <li>Collections</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
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
                <Link to="/login" style={{ textDecoration: "none" }}>
                  Login
                </Link>{" "}
                /{" "}
                <Link to="register" style={{ textDecoration: "none" }}>
                  SignUp
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
