// import React from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";
// import Cart from "./Cart";
// import { useCart } from "../context/CartContext";

// const Header = () => {
//   const { authData, logout } = useAuth();
//   const { cartItems } = useCart();
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     logout();
//     navigate("/", { replace: true });
//   };

//   return (
//     <header className="p-3 head text-white headd">
//       <div className="container">
//         <div className="d-flex flex-wrap align-items-center ">
//           <ul className="nav me-auto">
//             <div className="logo">
//               <li className="nav-item ">
//                 <Link to="/home" className="nav-link text-white">
//                   <img
//                     src={"./myntra_logo.webp"}
//                     alt="Logo"
//                     className="logo-img"
//                   />
//                 </Link>
//               </li>
//             </div>
//             <div className="nav1">
//               <nav className="nav_bar">
//                 <a href="#">Men</a>
//                 <a href="#">Women</a>
//                 <a href="#">Kids</a>
//                 <a href="#">Home & Living</a>
//                 <a href="#">Beauty</a>
//                 <a href="#">
//                   Studio <sup>New</sup>
//                 </a>
//               </nav>
//             </div>
//           </ul>

//           <div className="text-end">
//             <Link to="/checkout" className="btn btn-outline-success me-2">
//               Profile
//             </Link>

//             <Link to="/order-history" className="btn btn-outline-success me-2">
//               Orders
//             </Link>
//             {/* <Link to="/cart" className="btn btn-outline-success me-2">
//               Cart<sup>{cartItems.length}</sup>
//             </Link> */}
//             <Link
//               to="/cart"
//               className="btn btn-outline-success me-2"
//               style={{ position: "relative" }}
//             >
//               Cart
//               <span
//                 style={{
//                   position: "absolute",
//                   top: "-10px",
//                   right: "-5px",
//                   backgroundColor: "#ff3f6c", // Red for visibility
//                   color: "#fff",
//                   borderRadius: "50%",
//                   width: "20px",
//                   height: "20px",
//                   fontSize: "0.8rem",
//                   display: "flex",
//                   justifyContent: "center",
//                   alignItems: "center",
//                   fontWeight: "bold",
//                   boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
//                 }}
//               >
//                 {cartItems.length}
//               </span>
//             </Link>

//             {authData?.token ? (
//               <>
//                 <button onClick={handleLogout} className="btn btn-danger">
//                   Logout
//                 </button>
//               </>
//             ) : (
//               <>
//                 <Link to="/login" className="btn btn-outline-success me-2">
//                   Login
//                 </Link>
//                 <Link to="/register" className="btn btn-warning">
//                   Sign-up
//                 </Link>
//               </>
//             )}
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;




import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";
import {
  FaUser,
  FaShoppingCart,
  FaSignInAlt,
  FaClipboardList,
} from "react-icons/fa";
import "./Header.css"; // Ensure CSS is properly linked

const Header = () => {
  const { authData, logout } = useAuth();
  const { cartItems } = useCart();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/", { replace: true });
  };

  return (
    <header className="header-container">
      <div className="header-content">
        {/* Logo moved to the start (left) in laptop view */}
        <div className="logo-container">
          <Link to="/home">
            <img
              src={"./myntra_logo.webp"}
              alt="Myntra Logo"
              className="logo-img"
            />
          </Link>
        </div>

        {/* Center Navigation for Laptop */}
        <nav className="nav_bar laptop-view">
          <Link to="#">Men</Link>
          <Link to="#">Women</Link>
          <Link to="#">Kids</Link>
          <Link to="#">Home & Living</Link>
          <Link to="#">Beauty</Link>
          <Link to="#">
            Studio <sup>New</sup>
          </Link>
        </nav>

        {/* Right Section - Buttons for Laptop */}
        <div className="header-buttons-container laptop-view">
{/*           <Link to="/profile" className="btn btn-outline-success">
            Profile
          </Link> */}
          <Link to="/order-history" className="btn btn-outline-success">
            Orders
          </Link>
          <Link to="/cart" className="btn btn-outline-success">
            Cart{" "}
            {cartItems.length > 0 && (
              <span className="cart-badge">{cartItems.length}</span>
            )}
          </Link>

          {authData?.token ? (
            <button onClick={handleLogout} className="btn btn-danger">
              Logout
            </button>
          ) : (
            <>
              <Link to="/login"  state={{from: location.pathname}} className="btn btn-outline-success">
                Login
              </Link>
              <Link to="/register" className="btn btn-warning">
                Sign-up
              </Link>
            </>
          )}
        </div>

        {/* Mobile View - Icons */}
        <div className="mobile-icons">
          <Link to="/profile">
            <FaUser className="header-icons" />
          </Link>
{/*           <Link to="/orders">
            <FaClipboardList className="header-icons" />
          </Link> */}
           <Link to="/order-history" >
              <FaClipboardList className="header-icons" />
               
            </Link>

          <div className="cart-icon-container">
            <Link to="/cart">
              <FaShoppingCart className="header-icons" />
            </Link>
            {cartItems.length > 0 && (
              <span className="cart-badge">{cartItems.length}</span>
            )}
          </div>
          {authData?.token ? (
            <button onClick={handleLogout} className="logout-button">
              Logout
            </button>
          ) : (
            <>
              {/* <Link to="/login">
                <FaSignInAlt className="header-icons" />
              </Link> */}

              <Link to="/register" className="btn btn-warning">
                Sign-up
              </Link>
            </>
          )}
        </div>
      </div>

      {/* Mobile Navigation for Smaller Screens */}
      <nav className="nav_bar mobile-view">
        <Link to="#">Men</Link>
        <Link to="#">Men</Link>
        <Link to="#">Kids</Link>
        <Link to="#">Home</Link>
        <Link to="#">Beauty</Link>
      </nav>
    </header>
  );
};

export default Header;

