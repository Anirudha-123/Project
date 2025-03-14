// import React from "react";
// import { useCart } from "../context/CartContext";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";

// const Cart = () => {
//   const { cartItems, updateCartItemQuantity, removeCartItem } = useCart();
//   const { authData } = useAuth();
//   const navigate = useNavigate();

//   // Calculate totals
//   const totalMRP = cartItems.reduce(
//     (acc, item) => acc + item.price * item.quantity,
//     0
//   );
//   const discount = totalMRP > 500 ? totalMRP * 0.1 : 0; // 10% discount if MRP > 500
//   const shippingFee = totalMRP > 1000 ? 0 : 50;
//   const finalTotal = totalMRP - discount + shippingFee;

//   // Navigate to Checkout
//   const handleProceedToCheckout = () => {
//     if (authData?.token) {
//       navigate("/checkout");
//     } else {
//       localStorage.setItem("redirectAfterLogin", "/checkout");
//       navigate("/login2");
//     }
//   };

//   return (
//     <div className="cart-wrapper cartt">
//       {/* Left Section - Cart Items */}
//       <div className="cart-left">
//         <h2 className="cart-title">🛒 Your Shopping Cart</h2>

//         {cartItems.length === 0 ? (
//           <p className="empty-cart-msg">
//             Your cart is empty. Start shopping now!
//           </p>
//         ) : (
//           <div className="cart-items">
//             {cartItems.map((item) => (
//               <div
//                 key={item._id}
//                 className="cart-item row align-items-center mb-3"
//               >
//                 <div className="col-3">
//                   <img
//                     src={item.image || "https://via.placeholder.com/80"}
//                     alt={item.name}
//                     className="img-fluid cart-item-img rounded"
//                   />
//                 </div>
//                 <div className="col-5">
//                   <h5 className="mb-1">{item.name}</h5>
//                   <p className="mb-1 text-muted" style={{ fontSize: "0.9rem" }}>
//                     {item.description}
//                   </p>
//                   <p className="mb-0">
//                     <small>{(item.price * item.quantity).toFixed(2)} ₹</small>
//                   </p>
//                 </div>

//                 {/* Quantity Dropdown */}
//                 <div className="col-2 text-center">
//                   <span className="quantity-text me-2">Qty</span>
//                   <select
//                     className="form-select"
//                     value={item.quantity}
//                     onChange={(e) =>
//                       updateCartItemQuantity(item._id, Number(e.target.value))
//                     }
//                   >
//                     {[...Array(8).keys()].map((x) => (
//                       <option key={x + 1} value={x + 1}>
//                         {x + 1}
//                       </option>
//                     ))}
//                   </select>
//                 </div>

//                 {/* Remove Button */}
//                 <div className="col-2 text-center">
//                   <button
//                     className="btn btn-danger btn-sm"
//                     onClick={() => removeCartItem(item._id)}
//                   >
//                     Remove
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>

//       {/* Right Section - Order Summary */}
//       <div className="cart-right">
//         <div className="order-summary card shadow-sm">
//           <div className="card-body">
//             <p className="mb-2">
//               <strong>Total MRP:</strong> {totalMRP.toFixed(2)} ₹
//             </p>
//             <p className="mb-2 text-success">
//               <strong>Discount:</strong> - {discount.toFixed(2)} ₹
//             </p>
//             <p className="mb-2">
//               <strong>Shipping Fee:</strong> {shippingFee.toFixed(2)} ₹
//             </p>
//             <hr />
//             <h4 className="mb-3">
//               <strong>Total:</strong> {finalTotal.toFixed(2)} ₹
//             </h4>

//             <button
//               className="btn btn-success btn-place-order"
//               onClick={handleProceedToCheckout}
//               disabled={cartItems.length === 0}
//             >
//               {cartItems.length === 0
//                 ? "Add Items to Continue"
//                 : "Proceed to Checkout"}
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cart;

import React from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./cart.css";

const Cart = () => {
  const { cartItems, updateCartItemQuantity, removeCartItem } = useCart();
  const { authData } = useAuth();
  const navigate = useNavigate();

  // Calculate totals
  const totalMRP = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const discount = totalMRP > 500 ? totalMRP * 0.1 : 0; // 10% discount if MRP > 500
  const shippingFee = totalMRP > 1000 ? 0 : 50;
  const finalTotal = totalMRP - discount + shippingFee;

  // Navigate to product details page
  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  //   // Navigate to Checkout
  const handleProceedToCheckout = () => {
    if (authData?.token) {
      navigate("/checkout");
    } else {
      localStorage.setItem("redirectAfterLogin", "/checkout");
      navigate("/login2");
    }
  };

  return (
    <div className="cart-wrapper cartt">
      <div className="cart-left">
        <h2 className="cart-title">🛒 Your Shopping Cart</h2>

        {cartItems.length === 0 ? (
          <p className="empty-cart-msg">
            Your cart is empty. Start shopping now!
          </p>
        ) : (
          <div className="cart-items">
            {cartItems.map((item) => (
              <div
                key={item._id}
                className="cart-item row align-items-center mb-3"
              >
                {/* Clickable Image */}
                <div className="col-3">
                  <img
                    src={item.image || "https://via.placeholder.com/80"}
                    alt={item.name}
                    className="img-fluid cart-item-img rounded"
                    style={{ cursor: "pointer" }}
                    onClick={() => handleProductClick(item._id)}
                  />
                </div>

                <div className="col-5">
                  <h5 className="mb-1">{item.name}</h5>
                  <p className="mb-1 text-muted" style={{ fontSize: "0.9rem" }}>
                    {item.description}
                  </p>
                  <p className="mb-0">
                    <small>{(item.price * item.quantity).toFixed(2)} ₹</small>
                  </p>
                </div>

                {/* Quantity Dropdown */}
                <div className="col-2 text-center">
                  <span className="quantity-text me-2">Qty</span>
                  <select
                    className="form-select"
                    value={item.quantity}
                    onChange={(e) =>
                      updateCartItemQuantity(item._id, Number(e.target.value))
                    }
                  >
                    {[...Array(8).keys()].map((x) => (
                      <option key={x + 1} value={x + 1}>
                        {x + 1}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Remove Button */}
                <div className="col-2 text-center">
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => removeCartItem(item._id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      {/* Right Section - Order Summary */}
      <div className="cart-right">
        <div className="order-summary card shadow-sm">
          <div className="card-body">
            <p className="mb-2">
              <strong>Total MRP:</strong> {totalMRP.toFixed(2)} ₹
            </p>
            <p className="mb-2 text-success">
              <strong>Discount:</strong> - {discount.toFixed(2)} ₹
            </p>
            <p className="mb-2">
              <strong>Shipping Fee:</strong> {shippingFee.toFixed(2)} ₹
            </p>
            <hr />
            <h4 className="mb-3">
              <strong>Total:</strong> {finalTotal.toFixed(2)} ₹
            </h4>

            <button
              className="btn btn-success btn-place-order"
              onClick={handleProceedToCheckout}
              disabled={cartItems.length === 0}
            >
              {cartItems.length === 0
                ? "Add Items to Continue"
                : "Proceed to Checkout"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
