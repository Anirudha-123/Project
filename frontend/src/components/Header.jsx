import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Cart from "./Cart";
import { useCart } from "../context/CartContext";

const Header = () => {
  const { authData, logout } = useAuth();
  const { cartItems } = useCart();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/", { replace: true });
  };

  return (
    <header className="p-3 head text-white headd">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center ">
          <ul className="nav me-auto">
            <div className="logo">
              <li className="nav-item ">
                <Link to="/home" className="nav-link text-white">
                  <img
                    src={"./myntra_logo.webp"}
                    alt="Logo"
                    className="logo-img"
                  />
                </Link>
              </li>
            </div>
            <div className="nav1">
              <nav className="nav_bar">
                <a href="#">Men</a>
                <a href="#">Women</a>
                <a href="#">Kids</a>
                <a href="#">Home & Living</a>
                <a href="#">Beauty</a>
                <a href="#">
                  Studio <sup>New</sup>
                </a>
              </nav>
            </div>
          </ul>

          <div className="text-end">
            <Link to="/checkout" className="btn btn-outline-success me-2">
              Profile
            </Link>

            <Link to="/order-history" className="btn btn-outline-success me-2">
              Orders
            </Link>
            {/* <Link to="/cart" className="btn btn-outline-success me-2">
              Cart<sup>{cartItems.length}</sup>
            </Link> */}
            <Link
              to="/cart"
              className="btn btn-outline-success me-2"
              style={{ position: "relative" }}
            >
              Cart
              <span
                style={{
                  position: "absolute",
                  top: "-10px",
                  right: "-5px",
                  backgroundColor: "#ff3f6c", // Red for visibility
                  color: "#fff",
                  borderRadius: "50%",
                  width: "20px",
                  height: "20px",
                  fontSize: "0.8rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontWeight: "bold",
                  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
                }}
              >
                {cartItems.length}
              </span>
            </Link>

            {authData?.token ? (
              <>
                <button onClick={handleLogout} className="btn btn-danger">
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="btn btn-outline-success me-2">
                  Login
                </Link>
                <Link to="/register" className="btn btn-warning">
                  Sign-up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
