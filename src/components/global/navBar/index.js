import React, { useRef } from "react";
import { ReactComponent as CartIcon } from "../../../images/shopping-cart-icon.svg";
import { ReactComponent as ProfileLogo } from "../../../images/my-account-icon.svg";
import "./style.css";
import NavLink from "./NavLink";

const NavBar = () => {
  const trackBar = useRef();

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
          <li>
            <CartIcon stroke="black" fill="white" className="nav__icon" />
          </li>
          <li>
            <ProfileLogo className="nav__icon profilePic" />
          </li>
        </ul>
      </nav>
      <span className="underline" ref={trackBar}></span>
    </header>
  );
};

export default NavBar;
