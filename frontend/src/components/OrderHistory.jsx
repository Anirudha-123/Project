// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useAuth } from "../context/AuthContext";

// const OrderHistory = () => {
//   const { authData } = useAuth();
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // useEffect(() => {
//   //   axios
//   //     .get("http://localhost:8000/api/orders/myorders", {
//   //       headers: { Authorization: `Bearer ${authData.token}` },
//   //     })
//   //     .then((res) => {
//   //       setOrders(res.data);
//   //       setLoading(false);
//   //     })
//   //     .catch((err) => {
//   //       console.error("Error fetching orders:", err);
//   //       setLoading(false);
//   //     });
//   // }, [authData]);

//   useEffect(() => {
//     if (!authData || !authData.token) {
//       console.error("User is not authenticated.");
//       return;
//     }

//     axios
//       .get("https://project-backend-8ik1.onrender.com/api/orders/myorders", {
//         headers: { Authorization: `Bearer ${authData.token}` },
//       })
//       .then((res) => {
//         setOrders(res.data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error("Error fetching orders:", err);
//         setLoading(false);
//       });
//   }, [authData]);

//   return (
//     <div className="order-history-container cartt">
//       <h2 className="order-history-header">Your Order History</h2>

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
//                   order.status === "Delivered" ? "bg-success" : "bg-warning"
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
//                         src={
//                           item.product?.image ||
//                           "https://via.placeholder.com/80"
//                         }
//                         alt={item.product?.name || "Product Image"}
//                         className="img-fluid rounded order-product-img"
//                       />
//                       <p className="mt-2 mb-0">
//                         <strong>
//                           {item.product?.name || "Unknown Product"}
//                         </strong>
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
//             </div>
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default OrderHistory;

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useAuth } from "../context/AuthContext";

// const OrderHistory = () => {
//   const { authData } = useAuth();
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [message, setMessage] = useState(""); // Store success message
//   const [prevOrders, setPrevOrders] = useState([]); // Store previous orders

//   // Function to fetch orders
//   const fetchOrders = async () => {
//     if (!authData || !authData.token) {
//       console.error("User is not authenticated.");
//       return;
//     }

//     try {
//       const response = await axios.get(
//         "https://project-backend-8ik1.onrender.com/api/orders/myorders",
//         {
//           headers: { Authorization: `Bearer ${authData.token}` },
//         }
//       );

//       const newOrders = response.data;

//       // Check if any order was deleted
//       if (prevOrders.length > 0 && prevOrders.length > newOrders.length) {
//         setMessage("Your order was successfully placed!");
//         setTimeout(() => setMessage(""), 5000); // Clear message after 5 seconds
//       }

//       setPrevOrders(newOrders); // Update previous orders
//       setOrders(newOrders);
//       setLoading(false);
//     } catch (error) {
//       console.error("Error fetching orders:", error);
//       setLoading(false);
//     }
//   };

//   // Polling: Fetch orders every 5 seconds
//   useEffect(() => {
//     fetchOrders(); // Initial fetch
//     const interval = setInterval(fetchOrders, 5000);
//     return () => clearInterval(interval); // Cleanup on unmount
//   }, [authData]);

//   return (
//     <div className="order-history-container cartt">
//       <h2 className="order-history-header">Your Order History</h2>

//       {/* Success Message */}
//       {message && <div className="alert alert-success">{message}</div>}

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
//                   order.status === "Delivered" ? "bg-success" : "bg-warning"
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
//                         src={
//                           item.product?.image ||
//                           "https://via.placeholder.com/80"
//                         }
//                         alt={item.product?.name || "Product Image"}
//                         className="img-fluid rounded order-product-img"
//                       />
//                       <p className="mt-2 mb-0">
//                         <strong>
//                           {item.product?.name || "Unknown Product"}
//                         </strong>
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

const OrderHistory = () => {
  const { authData } = useAuth();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  // Function to fetch orders
  const fetchOrders = async () => {
    if (!authData || !authData.token) {
      console.error("User is not authenticated.");
      return;
    }

    try {
      const response = await axios.get(
        "https://project-backend-8ik1.onrender.com/api/orders/my-orders",
        {
          headers: { Authorization: `Bearer ${authData.token}` },
        }
      );

      const newOrders = response.data;

      // Check if any order has been marked as "Removed by Admin"
      const removedOrders = newOrders.filter(
        (order) => order.status === "Order Removed by Admin"
      );

      if (removedOrders.length > 0) {
        setMessage("Your order was successfully placed!");
        setTimeout(() => setMessage(""), 5000); // Clear message after 5 seconds
      }

      setOrders(newOrders);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching orders:", error);
      setLoading(false);
    }
  };

  // Function to manually delete an order from user's order history
  const handleDeleteOrder = async (orderId) => {
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
      console.error("Error deleting order:", error);
    }
  };

  // Polling: Fetch orders every 5 seconds
  useEffect(() => {
    fetchOrders();
    const interval = setInterval(fetchOrders, 5000);
    return () => clearInterval(interval);
  }, [authData]);

  return (
    <div className="order-history-container cartt">
      <h2 className="order-history-header">Your Order History</h2>

      {/* Success Message */}
      {message && <div className="alert alert-success">{message}</div>}

      {loading ? (
        <p>Loading your orders...</p>
      ) : orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        orders.map((order) => (
          <div key={order._id} className="order-card card mb-4 shadow-sm">
            {/* Order Header */}
            <div className="card-header d-flex justify-content-between align-items-center">
              <div>
                <strong>Order ID: {order._id}</strong>
              </div>
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

            {/* Ordered Products */}
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
                        src={
                          item.product?.image ||
                          "https://via.placeholder.com/80"
                        }
                        alt={item.product?.name || "Product Image"}
                        className="img-fluid rounded order-product-img"
                      />
                      <p className="mt-2 mb-0">
                        <strong>
                          {item.product?.name || "Unknown Product"}
                        </strong>
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

              {/* Allow user to delete the order manually if removed by admin */}
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


