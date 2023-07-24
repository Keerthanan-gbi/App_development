import React from "react";
import "../Styles/navbar.css";

const Navbar = ({ setShow, size }) => {
  return (
    <div>
      <div className="nav_box">
        <span className="my_shop" onClick={() => setShow(true)}>
        </span>
        <div className="cart" onClick={() => setShow(false)}>
          <span>
            <i className="fas fa-cart-plus"></i>
          </span>
          <span>{size}</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;