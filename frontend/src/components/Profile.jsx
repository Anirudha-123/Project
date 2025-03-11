import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";
import { toast } from "react-toastify";

const Profile = () => {
  const { authData } = useAuth();
  const { cartItems, clearCart } = useCart();
  const navigate = useNavigate();

  const [profile, setProfile] = useState({ name: "", address: "", phone: "" });
  const [hasSavedProfile, setHasSavedProfile] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("COD");

  useEffect(() => {
    if (!authData || !authData.token) return;

    axios
      .get("https://project-backend-8ik1.onrender.com", {
        headers: { Authorization: `Bearer ${authData.token}` },
      })
      .then((res) => {
        if (res.data.name && res.data.address && res.data.phone) {
          setProfile(res.data);
          setHasSavedProfile(true);
        }
      })
      .catch((err) => console.error("Error fetching profile:", err));
  }, [authData]);

  const handleSaveProfile = () => {
    if (!profile.name || !profile.address || !profile.phone) {
      alert("Please fill in all fields.");
      return;
    }

    axios
      .post("https://project-backend-8ik1.onrender.com", profile, {
        headers: { Authorization: `Bearer ${authData.token}` },
      })
      .then(() => {
        alert("Profile saved successfully!");
        setHasSavedProfile(true);
      })
      .catch((err) => console.error("Error saving profile:", err));
  };

  const handlePlaceOrder = async () => {
    if (!authData || !authData.token) {
      toast.error("You must be logged in to place an order.");
      return;
    }

    try {
      const orderData = {
        user: authData.userId,
        userProfile: profile,
        products: cartItems.map((item) => ({
          product: item._id,
          quantity: item.quantity,
        })),
        totalAmount: cartItems.reduce(
          (acc, item) => acc + item.price * item.quantity,
          0
        ),
        paymentMethod,
      };

      await axios.post("https://project-backend-8ik1.onrender.com", orderData, {
        headers: { Authorization: `Bearer ${authData.token}` },
      });

      clearCart();
      toast.success("🎉 Order Placed Successfully!", {
        position: "top-center",
        autoClose: 3000,
        theme: "colored",
      });

      setTimeout(() => {
        navigate("/order-history");
      }, 3500); // Delay navigation for animation effect
    } catch (error) {
      console.error("Order placement failed:", error);
      toast.error("Failed to place order.");
    }
  };

  return (
    <div className="profile-container d-flex justify-content-center align-items-center p-4 cartt">
      {/* Profile Details Section (Increased Height & Centered) */}
      <div
        className="profile-details w-50 border p-4 rounded bg-light shadow-sm d-flex flex-column justify-content-center align-items-center"
        style={{ minHeight: "600px", flexGrow: 1 }}
      >
        <h2 className="mb-3">Profile Details</h2>
        {hasSavedProfile ? (
          <div className="text-center">
            <p>
              <strong>Name:</strong> {profile.name}
            </p>
            <p>
              <strong>Address:</strong> {profile.address}
            </p>
            <p>
              <strong>Phone:</strong> {profile.phone}
            </p>
            <button
              className="btn btn-primary mt-3"
              onClick={() => setHasSavedProfile(false)}
            >
              Update Details
            </button>
          </div>
        ) : (
          <div className="w-75">
            <input
              type="text"
              value={profile.name}
              onChange={(e) => setProfile({ ...profile, name: e.target.value })}
              placeholder="Name"
              className="form-control mb-2 text-center"
            />
            <input
              type="text"
              value={profile.address}
              onChange={(e) =>
                setProfile({ ...profile, address: e.target.value })
              }
              placeholder="Address"
              className="form-control mb-2 text-center"
            />
            <input
              type="text"
              value={profile.phone}
              onChange={(e) =>
                setProfile({ ...profile, phone: e.target.value })
              }
              placeholder="Phone"
              className="form-control mb-2 text-center"
            />
            <button
              className="btn btn-success w-100 mt-2"
              onClick={handleSaveProfile}
            >
              Save Profile
            </button>
          </div>
        )}
      </div>

      {/* Right Side: Order Summary, Payment, Place Order */}
      <div
        className="order-section w-50 border p-4 rounded bg-light shadow-sm ms-4 d-flex flex-column gap-4"
        style={{ minHeight: "600px" }}
      >
        <div className="order-summary border p-3 rounded bg-white shadow-sm">
          <h3>Order Summary</h3>
          <p>
            <strong>Total MRP:</strong> ₹
            {cartItems
              .reduce((acc, item) => acc + item.price * item.quantity, 0)
              .toFixed(2)}
          </p>
          <p>
            <strong>Discount:</strong> -₹100.00
          </p>
          <p>
            <strong>Shipping Fee:</strong> ₹0.00
          </p>
          <p className="fw-bold">
            <strong>Total:</strong> ₹
            {(
              cartItems.reduce(
                (acc, item) => acc + item.price * item.quantity,
                0
              ) - 100
            ).toFixed(2)}
          </p>
        </div>

        <div className="payment-method border p-3 rounded bg-white shadow-sm">
          <h4>Payment Method</h4>
          <div>
            <input
              type="radio"
              id="cod"
              name="paymentMethod"
              value="COD"
              checked={paymentMethod === "COD"}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            <label htmlFor="cod" className="ms-2">
              Cash on Delivery (COD)
            </label>
          </div>
          <div>
            <input
              type="radio"
              id="card"
              name="paymentMethod"
              value="Card"
              checked={paymentMethod === "Card"}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            <label htmlFor="card" className="ms-2">
              Credit/Debit Card
            </label>
          </div>
        </div>

        <div className="place-order-container border p-3 rounded bg-white shadow-sm">
          <button className="btn btn-success w-100" onClick={handlePlaceOrder}>
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;

/* new data */

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";
// import { useCart } from "../context/CartContext";
// import { toast } from "react-toastify";

// const Profile = () => {
//   const { authData, logout } = useAuth();
//   const { cartItems, clearCart } = useCart();
//   const navigate = useNavigate();

//   const [profile, setProfile] = useState({ name: "", address: "", phone: "" });
//   const [hasSavedProfile, setHasSavedProfile] = useState(false);
//   const [paymentMethod, setPaymentMethod] = useState("COD");

//   useEffect(() => {
//     if (!authData || !authData.token) return;

//     axios
//       .get("http://localhost:8000/api/profile", {
//         headers: { Authorization: `Bearer ${authData.token}` },
//       })
//       .then((res) => {
//         if (res.data.name && res.data.address && res.data.phone) {
//           setProfile(res.data);
//           setHasSavedProfile(true);
//         }
//       })
//       .catch((err) => console.error("Error fetching profile:", err));
//   }, [authData]);

//   const handleSaveProfile = () => {
//     if (!profile.name || !profile.address || !profile.phone) {
//       toast.error("Please fill in all fields.");
//       return;
//     }

//     axios
//       .post("http://localhost:8000/api/profile", profile, {
//         headers: { Authorization: `Bearer ${authData.token}` },
//       })
//       .then(() => {
//         toast.success("Profile saved successfully!");
//         setHasSavedProfile(true);
//       })
//       .catch((err) => console.error("Error saving profile:", err));
//   };

//   const handlePlaceOrder = async () => {
//     if (!authData || !authData.token) {
//       toast.error("You must be logged in to place an order.");
//       return;
//     }

//     try {
//       const orderData = {
//         user: authData.userId,
//         userProfile: profile,
//         products: cartItems.map((item) => ({
//           product: item._id,
//           quantity: item.quantity,
//         })),
//         totalAmount: cartItems.reduce(
//           (acc, item) => acc + item.price * item.quantity,
//           0
//         ),
//         paymentMethod,
//       };

//       await axios.post("http://localhost:8000/api/orders", orderData, {
//         headers: { Authorization: `Bearer ${authData.token}` },
//       });

//       clearCart();
//       toast.success("🎉 Order Placed Successfully!", {
//         position: "top-center",
//         autoClose: 3000,
//         theme: "colored",
//       });

//       setTimeout(() => {
//         navigate("/order-history");
//       }, 3500);
//     } catch (error) {
//       console.error("Order placement failed:", error);
//       toast.error("Failed to place order.");
//     }
//   };

//   const handleLogout = () => {
//     logout();
//     navigate("/"); // Redirect to HomeItem instead of Login
//   };

//   return (
//     <div className="profile-container d-flex justify-content-center align-items-center p-4 cartt">
//       <div
//         className="profile-details w-50 border p-4 rounded bg-light shadow-sm d-flex flex-column justify-content-center align-items-center"
//         style={{ minHeight: "600px", flexGrow: 1 }}
//       >
//         <h2 className="mb-3">Profile Details</h2>
//         {hasSavedProfile ? (
//           <div className="text-center">
//             <p>
//               <strong>Name:</strong> {profile.name}
//             </p>
//             <p>
//               <strong>Address:</strong> {profile.address}
//             </p>
//             <p>
//               <strong>Phone:</strong> {profile.phone}
//             </p>
//             <button
//               className="btn btn-primary mt-3"
//               onClick={() => setHasSavedProfile(false)}
//             >
//               Update Details
//             </button>
//             <button className="btn btn-danger mt-3" onClick={handleLogout}>
//               Logout
//             </button>
//           </div>
//         ) : (
//           <div className="w-75">
//             <input
//               type="text"
//               value={profile.name}
//               onChange={(e) => setProfile({ ...profile, name: e.target.value })}
//               placeholder="Name"
//               className="form-control mb-2 text-center"
//             />
//             <input
//               type="text"
//               value={profile.address}
//               onChange={(e) =>
//                 setProfile({ ...profile, address: e.target.value })
//               }
//               placeholder="Address"
//               className="form-control mb-2 text-center"
//             />
//             <input
//               type="text"
//               value={profile.phone}
//               onChange={(e) =>
//                 setProfile({ ...profile, phone: e.target.value })
//               }
//               placeholder="Phone"
//               className="form-control mb-2 text-center"
//             />
//             <button
//               className="btn btn-success w-100 mt-2"
//               onClick={handleSaveProfile}
//             >
//               Save Profile
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Profile;

/*   */

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";
// import { useCart } from "../context/CartContext";

// const Profile = () => {
//   const { authData } = useAuth();
//   const { cartItems, clearCart } = useCart();
//   const navigate = useNavigate();

//   const [profile, setProfile] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     address: "",
//     city: "",
//     state: "",
//     pincode: "",
//     country: "",
//     phone: "",
//   });
//   const [paymentMethod, setPaymentMethod] = useState("COD");

//   useEffect(() => {
//     if (!authData || !authData.token) return;

//     axios
//       .get("http://localhost:8000/api/profile", {
//         headers: { Authorization: `Bearer ${authData.token}` },
//       })
//       .then((res) => {
//         if (res.data.firstName) {
//           setProfile(res.data);
//         }
//       })
//       .catch((err) => console.error("Error fetching profile:", err));
//   }, [authData]);

//   const handleInputChange = (e) => {
//     setProfile({ ...profile, [e.target.name]: e.target.value });
//   };

//   const handlePlaceOrder = async () => {
//     if (!authData || !authData.token) {
//       alert("You must be logged in to place an order.");
//       return;
//     }

//     try {
//       const orderData = {
//         user: authData.userId,
//         userProfile: profile,
//         products: cartItems.map((item) => ({
//           product: item._id,
//           quantity: item.quantity,
//         })),
//         totalAmount: cartItems.reduce(
//           (acc, item) => acc + item.price * item.quantity,
//           0
//         ),
//         paymentMethod,
//       };

//       await axios.post("http://localhost:8000/api/orders", orderData, {
//         headers: { Authorization: `Bearer ${authData.token}` },
//       });

//       clearCart();
//       alert("Order placed successfully!");
//       navigate("/order-history");
//     } catch (error) {
//       console.error("Order placement failed:", error);
//       alert("Failed to place order.");
//     }
//   };

//   return (
//     <div className="container mt-5">
//       <div className="row">
//         {/* Delivery Information */}
//         <div className="col-md-7 p-4 bg-light rounded shadow-sm">
//           <h3 className="mb-4">Delivery Information</h3>
//           <div className="row g-3">
//             <div className="col-md-6">
//               <input
//                 type="text"
//                 name="firstName"
//                 value={profile.firstName}
//                 onChange={handleInputChange}
//                 placeholder="First Name"
//                 className="form-control"
//               />
//             </div>
//             <div className="col-md-6">
//               <input
//                 type="text"
//                 name="lastName"
//                 value={profile.lastName}
//                 onChange={handleInputChange}
//                 placeholder="Last Name"
//                 className="form-control"
//               />
//             </div>
//             <div className="col-md-12">
//               <input
//                 type="email"
//                 name="email"
//                 value={profile.email}
//                 onChange={handleInputChange}
//                 placeholder="Email"
//                 className="form-control"
//               />
//             </div>
//             <div className="col-md-12">
//               <input
//                 type="text"
//                 name="address"
//                 value={profile.address}
//                 onChange={handleInputChange}
//                 placeholder="Address"
//                 className="form-control"
//               />
//             </div>
//             <div className="col-md-6">
//               <input
//                 type="text"
//                 name="city"
//                 value={profile.city}
//                 onChange={handleInputChange}
//                 placeholder="City"
//                 className="form-control"
//               />
//             </div>
//             <div className="col-md-6">
//               <input
//                 type="text"
//                 name="state"
//                 value={profile.state}
//                 onChange={handleInputChange}
//                 placeholder="State"
//                 className="form-control"
//               />
//             </div>
//             <div className="col-md-6">
//               <input
//                 type="text"
//                 name="pincode"
//                 value={profile.pincode}
//                 onChange={handleInputChange}
//                 placeholder="Pincode"
//                 className="form-control"
//               />
//             </div>
//             <div className="col-md-6">
//               <input
//                 type="text"
//                 name="country"
//                 value={profile.country}
//                 onChange={handleInputChange}
//                 placeholder="Country"
//                 className="form-control"
//               />
//             </div>
//             <div className="col-md-12">
//               <input
//                 type="text"
//                 name="phone"
//                 value={profile.phone}
//                 onChange={handleInputChange}
//                 placeholder="Phone Number"
//                 className="form-control"
//               />
//             </div>
//           </div>
//         </div>

//         {/* Cart Totals & Payment */}
//         <div className="col-md-5 p-4 bg-light rounded shadow-sm ms-md-4">
//           <h3 className="mb-4">Cart Totals</h3>
//           <p>
//             <strong>Subtotal:</strong> ₹
//             {cartItems.reduce(
//               (acc, item) => acc + item.price * item.quantity,
//               0
//             )}
//           </p>
//           <p>
//             <strong>Delivery Fee:</strong> ₹5
//           </p>
//           <p className="fw-bold">
//             <strong>Total:</strong> ₹
//             {cartItems.reduce(
//               (acc, item) => acc + item.price * item.quantity,
//               0
//             ) + 5}
//           </p>

//           <h4 className="mt-4">Payment Method</h4>
//           <div className="d-flex flex-column">
//             <button
//               className={`btn ${
//                 paymentMethod === "COD"
//                   ? "btn-outline-primary"
//                   : "btn-outline-secondary"
//               }`}
//               onClick={() => setPaymentMethod("COD")}
//             >
//               COD (Cash on delivery)
//             </button>
//             <button
//               className={`btn mt-2 ${
//                 paymentMethod === "Card"
//                   ? "btn-outline-primary"
//                   : "btn-outline-secondary"
//               }`}
//               onClick={() => setPaymentMethod("Card")}
//             >
//               Stripe (Credit/Debit)
//             </button>
//           </div>

//           <button
//             className="btn btn-warning w-100 mt-4"
//             onClick={handlePlaceOrder}
//           >
//             Place Order
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";
// import { useCart } from "../context/CartContext";

// const Profile = () => {
//   const { authData } = useAuth();
//   const { cartItems, clearCart } = useCart();
//   const navigate = useNavigate();

//   const [profile, setProfile] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     address: "",
//     city: "",
//     state: "",
//     pincode: "",
//     country: "",
//     phone: "",
//   });
//   const [paymentMethod, setPaymentMethod] = useState("COD");

//   useEffect(() => {
//     if (!authData || !authData.token) return;

//     axios
//       .get("http://localhost:8000/api/profile", {
//         headers: { Authorization: `Bearer ${authData.token}` },
//       })
//       .then((res) => {
//         if (res.data.firstName) {
//           setProfile(res.data);
//         }
//       })
//       .catch((err) => console.error("Error fetching profile:", err));
//   }, [authData]);

//   const handleInputChange = (e) => {
//     setProfile({ ...profile, [e.target.name]: e.target.value });
//   };

//   const handlePlaceOrder = async () => {
//     if (!authData || !authData.token) {
//       alert("You must be logged in to place an order.");
//       return;
//     }

//     // Validate form fields
//     for (const key in profile) {
//       if (!profile[key]) {
//         alert(`Please fill in ${key.replace(/([A-Z])/g, " $1")}.`);
//         return;
//       }
//     }

//     try {
//       const orderData = {
//         user: authData.userId,
//         userProfile: profile,
//         products: cartItems.map((item) => ({
//           product: item._id,
//           quantity: item.quantity,
//         })),
//         totalAmount:
//           cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0) +
//           5, // Including delivery fee
//         paymentMethod,
//       };

//       await axios.post("http://localhost:8000/api/orders", orderData, {
//         headers: { Authorization: `Bearer ${authData.token}` },
//       });

//       clearCart();
//       alert("Order placed successfully!");
//       navigate("/order-history");
//     } catch (error) {
//       console.error("Order placement failed:", error);
//       alert("Failed to place order.");
//     }
//   };

//   const totalPrice = cartItems.reduce(
//     (acc, item) => acc + item.price * item.quantity,
//     0
//   );

//   return (
//     <div className="container mt-5 cartt">
//       <div className="row justify-content-center">
//         {/* Delivery Information */}
//         <div className="col-md-7">
//           <div className="p-4 bg-light rounded shadow-sm">
//             <h3 className="mb-4">Delivery Information</h3>
//             <div className="row g-3">
//               {[
//                 "firstName",
//                 "lastName",
//                 "email",
//                 "address",
//                 "city",
//                 "state",
//                 "pincode",
//                 "country",
//                 "phone",
//               ].map((field, index) => (
//                 <div
//                   key={field}
//                   className={`col-md-${
//                     index < 2 || index === 6 || index === 7 ? "6" : "12"
//                   }`}
//                 >
//                   <input
//                     type={field === "email" ? "email" : "text"}
//                     name={field}
//                     value={profile[field]}
//                     onChange={handleInputChange}
//                     placeholder={field.replace(/([A-Z])/g, " $1").trim()}
//                     className="form-control"
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Cart Totals & Payment */}
//         <div className="col-md-5 mt-4 mt-md-0">
//           <div className="p-4 bg-light rounded shadow-sm">
//             <h3 className="mb-4">Cart Totals</h3>
//             <p>
//               <strong>Subtotal:</strong> ₹{totalPrice}
//             </p>
//             <p>
//               <strong>Delivery Fee:</strong> ₹5
//             </p>
//             <p className="fw-bold">
//               <strong>Total:</strong> ₹{totalPrice + 5}
//             </p>

//             <h4 className="mt-4">Payment Method</h4>
//             <div className="d-flex flex-column">
//               {["COD", "Card"].map((method) => (
//                 <button
//                   key={method}
//                   className={`btn mt-2 ${
//                     paymentMethod === method
//                       ? "btn-primary"
//                       : "btn-outline-secondary"
//                   }`}
//                   onClick={() => setPaymentMethod(method)}
//                 >
//                   {method === "COD"
//                     ? "COD (Cash on delivery)"
//                     : "Stripe (Credit/Debit)"}
//                 </button>
//               ))}
//             </div>

//             <button
//               className="btn btn-warning w-100 mt-4"
//               onClick={handlePlaceOrder}
//             >
//               Place Order
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;
