// // components/Checkout.js
// import React, { useState } from "react";
// import Profile from "./Profile";
// import axios from "axios";
// import { useAuth } from "../context/AuthContext";

// const Checkout = ({ cart, user, onPlaceOrder }) => {
//   const { authData } = useAuth();
//   const [userProfile, setUserProfile] = useState(user || {});

//   const totalMRP = cart.reduce(
//     (acc, item) => acc + item.price * item.quantity,
//     0
//   );
//   const discount = totalMRP * 0.1;
//   const shippingFee = 50;
//   const totalAmount = totalMRP - discount + shippingFee;

//   const handleOrder = () => {
//     if (!userProfile.name || !userProfile.phone || !userProfile.address) {
//       alert("Please complete your profile before placing an order.");
//       return;
//     }

//     const orderData = {
//       user: authData.userId,
//       userProfile,
//       products: cart.map((item) => ({
//         product: item._id,
//         quantity: item.quantity,
//       })),
//       totalAmount,
//       status: "Pending",
//     };

//     axios
//       .post("https://project-backend-8ik1.onrender.com/api/orders", orderData, {
//         headers: { Authorization: `Bearer ${authData.token}` },
//       })
//       .then((res) => {
//         console.log("Order placed:", res.data);
//         onPlaceOrder();
//       })
//       .catch((err) => {
//         console.error("Error placing order:", err);
//       });
//   };

//   return (
//     <div>
//       <Profile user={userProfile} onSave={(form) => setUserProfile(form)} />
//       <div>
//         <p>Total MRP: ₹{totalMRP.toFixed(2)}</p>
//         <p>Discount: ₹{discount.toFixed(2)}</p>
//         <p>Shipping Fee: ₹{shippingFee}</p>
//         <p>
//           <strong>Total Amount: ₹{totalAmount.toFixed(2)}</strong>
//         </p>
//         <button onClick={handleOrder}>Place Order</button>
//       </div>
//     </div>
//   );
// };

// export default Checkout;



// // components/Checkout.js
// import React, { useState } from "react";
// import Profile from "./Profile";
// import axios from "axios";
// import { useAuth } from "../context/AuthContext";

// const Checkout = ({ cart, user, onPlaceOrder }) => {
//   const { authData } = useAuth();
//   const [userProfile, setUserProfile] = useState(user || {});
//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState("");

//   // Calculate total amounts
//   const totalMRP = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
//   const discount = totalMRP * 0.1;
//   const shippingFee = 50;
//   const totalAmount = totalMRP - discount + shippingFee;

//   const handleOrder = async () => {
//     if (cart.length === 0) {
//       alert("Your cart is empty. Please add items before placing an order.");
//       return;
//     }

//     if (!userProfile.name || !userProfile.phone || !userProfile.address) {
//       alert("Please complete your profile before placing an order.");
//       return;
//     }

//     const orderData = {
//       user: authData.userId,
//       userProfile,
//       products: cart.map((item) => ({
//         product: item._id,
//         quantity: item.quantity,
//       })),
//       totalAmount,
//       status: "Pending",
//     };

//     try {
//       setLoading(true);
//       const response = await axios.post(
//         "https://project-backend-8ik1.onrender.com/api/orders",
//         orderData,
//         { headers: { Authorization: `Bearer ${authData.token}` } }
//       );

//       setMessage("Order placed successfully!");
//       setTimeout(() => setMessage(""), 5000);
//       onPlaceOrder(); // Clear cart
//     } catch (error) {
//       alert("Error placing order. Please try again.");
//       console.error("Order error:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <h2>Checkout</h2>
//       {message && <div className="alert alert-success">{message}</div>}
//       <Profile user={userProfile} onSave={(form) => setUserProfile(form)} />

//       <div>
//         <p>Total MRP: ₹{totalMRP.toFixed(2)}</p>
//         <p>Discount: ₹{discount.toFixed(2)}</p>
//         <p>Shipping Fee: ₹{shippingFee}</p>
//         <p><strong>Total Amount: ₹{totalAmount.toFixed(2)}</strong></p>

//         <button onClick={handleOrder} disabled={loading}>
//           {loading ? "Processing..." : "Place Order"}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Checkout;


// components/Checkout.js
import React, { useState } from "react";
import Profile from "./Profile";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Checkout = ({ cart, user, onPlaceOrder }) => {
  const { authData } = useAuth();
  const navigate = useNavigate();
  const [userProfile, setUserProfile] = useState(user || {});
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Calculate total amounts
  const totalMRP = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discount = totalMRP * 0.1;
  const shippingFee = totalMRP > 0 ? 50 : 0;
  const totalAmount = totalMRP > 0 ? totalMRP - discount + shippingFee : 0;

  const handleOrder = async () => {
    if (totalMRP === 0) {
      alert("Your cart is empty. Please add items before placing an order.");
      return;
    }

    if (!userProfile.name || !userProfile.phone || !userProfile.address) {
      alert("Please complete your profile before placing an order.");
      return;
    }

    const orderData = {
      user: authData.userId,
      userProfile,
      products: cart.map((item) => ({
        product: item._id,
        quantity: item.quantity,
      })),
      totalAmount,
      status: "Pending",
    };

    try {
      setLoading(true);
      await axios.post(
        "https://project-backend-8ik1.onrender.com/api/orders",
        orderData,
        { headers: { Authorization: `Bearer ${authData.token}` } }
      );

      setMessage("Order placed successfully!");
      setTimeout(() => setMessage(""), 5000);
      onPlaceOrder(); // Clear cart

      // Navigate to OrderHistory only if totalMRP > 0
      if (totalMRP > 0) {
        navigate("/order-history");
      }
    } catch (error) {
      alert("Error placing order. Please try again.");
      console.error("Order error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Checkout</h2>
      {message && <div className="alert alert-success">{message}</div>}
      <Profile user={userProfile} onSave={(form) => setUserProfile(form)} />

      <div>
        <p>Total MRP: ₹{totalMRP.toFixed(2)}</p>
        <p>Discount: ₹{discount.toFixed(2)}</p>
        <p>Shipping Fee: ₹{shippingFee}</p>
        <p><strong>Total Amount: ₹{totalAmount.toFixed(2)}</strong></p>

        <button onClick={handleOrder} disabled={loading}>
          {loading ? "Processing..." : "Place Order"}
        </button>
      </div>
    </div>
  );
};

export default Checkout;

