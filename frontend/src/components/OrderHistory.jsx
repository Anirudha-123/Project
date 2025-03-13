
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useAuth } from "../context/AuthContext";
// import { Link, useNavigate } from "react-router-dom";


// const OrderHistory = () => {
//   const { authData } = useAuth();
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [message, setMessage] = useState("");
//   const [error, setError] = useState("");

//   const navigate = useNavigate();

//   // Function to fetch orders
//   const fetchOrders = async () => {
//     if (!authData || !authData.token) {
//       setError("User is not authenticated.");
//       return;
//     }

//     try {
//       const response = await axios.get(
//         "https://project-backend-8ik1.onrender.com/api/orders/my-orders",
//         {
//           headers: { Authorization: `Bearer ${authData.token}` },
//         }
//       );

//       const newOrders = response.data;

//       // Show success message if any order was removed by admin
//       if (newOrders.some((order) => order.status === "Order Removed by Admin")) {
//         setMessage("Your order was successfully placed!");
//         setTimeout(() => setMessage(""), 5000); // Clear message after 5 seconds
//       }

//       setOrders(newOrders);
//     } catch (error) {
//       setError("Error fetching orders. Please try again later.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Function to delete an order from user's order history
//   const handleDeleteOrder = async (orderId) => {
//     if (!window.confirm("Are you sure you want to delete this order history?")) return;

//     try {
//       await axios.delete(
//         `https://project-backend-8ik1.onrender.com/api/orders/${orderId}`,
//         {
//           headers: { Authorization: `Bearer ${authData.token}` },
//         }
//       );

//       // Remove order from UI
//       setOrders((prevOrders) => prevOrders.filter((order) => order._id !== orderId));
//     } catch (error) {
//       setError("Error deleting order. Please try again.");
//     }
//   };

//   // Fetch orders on component mount
//   useEffect(() => {
//     fetchOrders();
//   }, [authData]); // Runs only when authData changes

//   return (
//     <div className="order-history-container cartt">
//       <div className="logo">
//               <li className="nav-item1 ">
//                 <Link to="/home" className="nav-link text-white">
//                    <button className="btn btn-info">Go to home</button>
//                 </Link>
//               </li>
//             </div>
//       <h2 className="order-history-header">Your Order History</h2>

//       {/* Success & Error Messages */}
//       {message && <div className="alert alert-success">{message}</div>}
//       {error && <div className="alert alert-danger">{error}</div>}

//       {loading ? (
//         <p>Loading your orders...</p>
//       ) : orders.length === 0 ? (
//         <p>No orders found.</p>
//       ) : (
//         orders.map((order) => (
//           <div key={order._id} className="order-card card mb-4 shadow-sm">
//             {/* Order Header */}
//             <div className="card-header d-flex justify-content-between align-items-center">
//               <div>
//                 <strong>Order ID: {order._id}</strong>
//               </div>
//               <span
//                 className={`badge ${
//                   order.status === "Delivered"
//                     ? "bg-success"
//                     : order.status === "Order Removed by Admin"
//                     ? "bg-danger"
//                     : "bg-warning"
//                 }`}
//               >
//                 {order.status || "Pending"}
//               </span>
//             </div>

//             {/* Ordered Products */}
//             <div className="card-body">
//               <h5>Ordered Products:</h5>
//               <div className="d-flex flex-wrap">
//                 {order.products && order.products.length > 0 ? (
//                   order.products.map((item) => (
//                     <div
//                       key={item.product?._id}
//                       className="order-product text-center me-3"
//                     >
//                       <img
//                         src={item.product?.image || "https://via.placeholder.com/80"}
//                         alt={item.product?.name || "Product Image"}
//                         className="img-fluid rounded order-product-img"
//                       />
//                       <p className="mt-2 mb-0">
//                         <strong>{item.product?.name || "Unknown Product"}</strong>
//                       </p>
//                       <small>Qty: {item.quantity}</small>
//                     </div>
//                   ))
//                 ) : (
//                   <p>No products found for this order.</p>
//                 )}
//               </div>

//               {/* Order Summary */}
//               <div className="order-summary mt-3">
//                 <p>
//                   <strong>Total Amount:</strong> {order.totalAmount} ₹
//                 </p>
//                 <p>
//                   <strong>Ordered On:</strong>{" "}
//                   {new Date(order.createdAt).toLocaleDateString()}
//                 </p>
//               </div>

//               {/* Allow user to delete order history if removed by admin */}
//               {order.status === "Order Removed by Admin" && (
//                 <button
//                   className="btn btn-danger mt-3"
//                   onClick={() => handleDeleteOrder(order._id)}
//                 >
//                   Delete Order History
//                 </button>
//               )}
//             </div>
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default OrderHistory;
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

const OrderHistory = () => {
  const { authData } = useAuth();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  // Fetch orders from backend
  const fetchOrders = async () => {
    if (!authData || !authData.token) {
      setError("User is not authenticated.");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.get(
        "https://project-backend-8ik1.onrender.com/api/orders/my-orders",
        {
          headers: { Authorization: `Bearer ${authData.token}` },
        }
      );

      const fetchedOrders = response.data;
      setOrders(fetchedOrders);

      if (fetchedOrders.some((order) => order.status === "Order Removed by Admin")) {
        setMessage("Your order was successfully placed!");
        setTimeout(() => setMessage(""), 5000);
      }
    } catch (error) {
      setError("Error fetching orders. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  // Delete order from user's order history
  const handleDeleteOrder = async (orderId) => {
    if (!window.confirm("Are you sure you want to delete this order history?")) return;

    try {
      await axios.delete(
        `https://project-backend-8ik1.onrender.com/api/orders/${orderId}`,
        {
          headers: { Authorization: `Bearer ${authData.token}` },
        }
      );

      // Remove order from UI
      setOrders((prevOrders) => prevOrders.filter((order) => order._id !== orderId));
    } catch (error) {
      setError("Error deleting order. Please try again.");
    }
  };

  // Fetch orders on component mount
  useEffect(() => {
    fetchOrders();
  }, [authData]);

  return (
    <div className="order-history-container cartt">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="order-history-header">Your Order History</h2>
        <Link to="/home">
          <button className="btn btn-info">Go to Home</button>
        </Link>
      </div>

      {/* Success & Error Messages */}
      {message && <div className="alert alert-success">{message}</div>}
      {error && <div className="alert alert-danger">{error}</div>}

      {/* Loading & Empty State */}
      {loading ? (
        <p>Loading your orders...</p>
      ) : orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        orders.map((order) => (
          <div key={order._id} className="order-card card mb-4 shadow-sm">
            {/* Order Header */}
            <div className="card-header d-flex justify-content-between align-items-center">
              <strong>Order ID: {order._id}</strong>
              <span
                className={`badge ${
                  order.status === "Delivered"
                    ? "bg-success"
                    : order.status === "Order Removed by Admin"
                    ? "bg-danger"
                    : "bg-warning"
                }`}
              >
                {order.status || "Pending"}
              </span>
            </div>

            {/* Order Body */}
            <div className="card-body">
              <h5>Ordered Products:</h5>
              <div className="d-flex flex-wrap">
                {order.products && order.products.length > 0 ? (
                  order.products.map((item) => (
                    <div
                      key={item.product?._id}
                      className="order-product text-center me-3"
                    >
                      <img
                        src={item.product?.image || "https://via.placeholder.com/80"}
                        alt={item.product?.name || "Product Image"}
                        className="img-fluid rounded order-product-img"
                      />
                      <p className="mt-2 mb-0">
                        <strong>{item.product?.name || "Unknown Product"}</strong>
                      </p>
                      <small>Qty: {item.quantity}</small>
                    </div>
                  ))
                ) : (
                  <p>No products found for this order.</p>
                )}
              </div>

              {/* Order Summary */}
              <div className="order-summary mt-3">
                <p>
                  <strong>Total Amount:</strong> {order.totalAmount} ₹
                </p>
                <p>
                  <strong>Ordered On:</strong>{" "}
                  {new Date(order.createdAt).toLocaleDateString()}
                </p>
              </div>

              {/* Allow user to delete order history if removed by admin */}
              {order.status === "Order Removed by Admin" && (
                <button
                  className="btn btn-danger mt-3"
                  onClick={() => handleDeleteOrder(order._id)}
                >
                  Delete Order History
                </button>
              )}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default OrderHistory;
