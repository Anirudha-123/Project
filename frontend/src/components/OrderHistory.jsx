import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";

const OrderHistory = () => {
  const { authData } = useAuth();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:8000/api/orders/myorders", {
  //       headers: { Authorization: `Bearer ${authData.token}` },
  //     })
  //     .then((res) => {
  //       setOrders(res.data);
  //       setLoading(false);
  //     })
  //     .catch((err) => {
  //       console.error("Error fetching orders:", err);
  //       setLoading(false);
  //     });
  // }, [authData]);

  useEffect(() => {
    if (!authData || !authData.token) {
      console.error("User is not authenticated.");
      return;
    }

    axios
      .get("https://project-backend-8ik1.onrender.com", {
        headers: { Authorization: `Bearer ${authData.token}` },
      })
      .then((res) => {
        setOrders(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching orders:", err);
        setLoading(false);
      });
  }, [authData]);

  return (
    <div className="order-history-container cartt">
      <h2 className="order-history-header">Your Order History</h2>

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
                  order.status === "Delivered" ? "bg-success" : "bg-warning"
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
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default OrderHistory;
