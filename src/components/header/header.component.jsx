import React from "react";
import "./header.styles.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assests/logo.svg";
const Header = () => (
  <div className="header">
    <Link to="/" className="logo-container">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link to="/shop" className="option">
        SHOP
      </Link>
      <Link to="/shop" className="option">
        CONTACT
      </Link>
      {/* <Link to="/shop" className="option">SHOP</Link>
        <Link to="/shop" className="option">SHOP</Link> */}
    </div>
  </div>
);
export default Header;
