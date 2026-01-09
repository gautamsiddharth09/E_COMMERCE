import React, { useContext, useState } from "react";
import "./NavBar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

const NavBar = () => {
  const [menu, setMenu] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
 const {getTotalCartItem} = useContext(ShopContext)

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>SHOPPER</p>
      </div>

      <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>
        <Link style={{ textDecoration: "none" }} to="/">
          {" "}
          <li onClick={() => setMenu("Shop")}>
            {" "}
            Shop {menu === "Shop" ? <hr /> : ""}{" "}
          </li>{" "}
        </Link>
       
        <Link style={{ textDecoration: "none" }} to="mens">
          <li onClick={() => setMenu("Men")}>
            {" "}
            Men {menu === "Men" ? <hr /> : ""}
          </li>{" "}
        </Link>

        <Link style={{ textDecoration: "none" }} to="womens">
          <li onClick={() => setMenu("Women")}>
            {" "}
            Women {menu === "Women" ? <hr /> : ""}
          </li>{" "}
        </Link>

        <Link style={{ textDecoration: "none" }} to="kids">
          <li onClick={() => setMenu("Kids")}>
            Kids {menu === "Kids" ? <hr /> : ""}
          </li>{" "}
        </Link>
      </ul>

      <div className="nav-login-cart">
        <Link style={{ textDecoration: "none" }} to="login">
          {" "}
          <button>Login </button>{" "}
        </Link>
        <Link style={{ textDecoration: "none" }} to="cart">
          {" "}
          <img src={cart_icon} alt="" />{" "}
        </Link>
        <div className="nav-cart-count">{getTotalCartItem()}</div>

       <div className="nav-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>


      </div>

      
     
    </div>

    
  );
};

export default NavBar;
