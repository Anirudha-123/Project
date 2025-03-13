// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useAuth } from "../context/AuthContext";
// import UpdateOrderModal from "./UpdateOrderModal";

// const AdminOrders = () => {
//   const { authData } = useAuth();
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [showModal, setShowModal] = useState(false);
//   const [currentOrderId, setCurrentOrderId] = useState(null);
//   const [currentStatus, setCurrentStatus] = useState("");

//   useEffect(() => {
//     fetchOrders();
//   }, []);

//   const fetchOrders = async () => {
//     setLoading(true);
//     try {
//       const res = await axios.get("http://localhost:8000/api/admin/orders", {
//         headers: { Authorization: `Bearer ${authData.token}` },
//       });

//       setOrders(res.data);
//     } catch (err) {
//       console.error("Error fetching orders:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleDelete = async (orderId) => {
//     if (!window.confirm("Are you sure you want to delete this order?")) return;

//     try {
//       await axios.delete(`http://localhost:8000/api/admin/orders/${orderId}`, {
//         headers: { Authorization: `Bearer ${authData.token}` },
//       });

//       setOrders(orders.filter((order) => order._id !== orderId));
//       alert("Order deleted successfully!");
//     } catch (error) {
//       console.error("Error deleting order:", error);
//       alert("Failed to delete order.");
//     }
//   };

//   return (
//     <div className="admin-orders-container">
//       <h2>Orders</h2>
//       {loading ? (
//         <p>Loading orders...</p>
//       ) : orders.length === 0 ? (
//         <p>No orders found.</p>
//       ) : (
//         orders.map((order) => (
//           <div key={order._id} className="order-card">
//             <h4>Order ID: {order._id}</h4>
//             <p>Status: {order.status}</p>

//             <h5>User Profile</h5>
//             <p>
//               <strong>Name:</strong> {order.userProfile?.name || "N/A"}
//             </p>
//             <p>
//               <strong>Phone:</strong> {order.userProfile?.phone || "N/A"}
//             </p>
//             <p>
//               <strong>Address:</strong> {order.userProfile?.address || "N/A"}
//             </p>

//             <h5>Products Ordered:</h5>
//             {order.products.length > 0 ? (
//               order.products.map((item) => (
//                 <div key={item.product._id}>
//                   <p>
//                     {item.product.name} - Qty: {item.quantity}
//                   </p>
//                 </div>
//               ))
//             ) : (
//               <p>No products found.</p>
//             )}

//             <h5>Total Amount: ₹{order.totalAmount}</h5>
//             <button
//               className="btn btn-danger"
//               onClick={() => handleDelete(order._id)}
//             >
//               Delete
//             </button>
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default AdminOrders;

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useAuth } from "../context/AuthContext";
// import { Table, Button, Spinner, Card } from "react-bootstrap";

// const AdminOrders = () => {
//   const { authData } = useAuth();
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetchOrders();
//   }, []);

//   const fetchOrders = async () => {
//     setLoading(true);
//     try {
//       const res = await axios.get("https://project-backend-8ik1.onrender.com/api/admin/orders", {
//         headers: { Authorization: `Bearer ${authData.token}` },
//       });

//       setOrders(res.data);
//     } catch (err) {
//       console.error("Error fetching orders:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleDelete = async (orderId) => {
//     if (!window.confirm("Are you sure you want to delete this order?")) return;

//     try {
//       await axios.delete(`https://project-backend-8ik1.onrender.com/api/admin/orders/${orderId}`, {
//         headers: { Authorization: `Bearer ${authData.token}` },
//       });

//       setOrders(orders.filter((order) => order._id !== orderId));
//       alert("Order deleted successfully!");
//     } catch (error) {
//       console.error("Error deleting order:", error);
//       alert("Failed to delete order.");
//     }
//   };

//   return (
//     <div className="container mt-4">
//       <h2 className="text-center mb-4">Admin Orders</h2>

//       {loading ? (
//         <div className="text-center">
//           <Spinner animation="border" variant="primary" />
//         </div>
//       ) : orders.length === 0 ? (
//         <p className="text-center">No orders found.</p>
//       ) : (
//         <Table striped bordered hover responsive className="shadow">
//           <thead className="table-dark">
//             <tr>
//               <th>Order ID</th>
//               <th>User</th>
//               <th>Phone</th>
//               <th>Address</th>
//               <th>Products</th>
//               <th>Total Amount</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {orders.map((order) => (
//               <tr key={order._id}>
//                 <td>{order._id}</td>
//                 <td>{order.userProfile?.name || "N/A"}</td>
//                 <td>{order.userProfile?.phone || "N/A"}</td>
//                 <td>{order.userProfile?.address || "N/A"}</td>
//                 <td>
//                   {order.products.map((item) => (
//                     <Card key={item.product._id} className="mb-2 p-2 shadow-sm">
//                       <Card.Img
//                         variant="top"
//                         src={
//                           item.product.image ||
//                           "https://via.placeholder.com/100"
//                         }
//                         alt={item.product.name}
//                         style={{
//                           width: "80px",
//                           height: "80px",
//                           objectFit: "cover",
//                         }}
//                       />
//                       <Card.Body>
//                         <p className="m-0">{item.product.name}</p>
//                         <p className="text-muted">Qty: {item.quantity}</p>
//                       </Card.Body>
//                     </Card>
//                   ))}
//                 </td>
//                 <td>₹{order.totalAmount.toFixed(2)}</td>
//                 <td>
//                   <Button
//                     variant="danger"
//                     onClick={() => handleDelete(order._id)}
//                   >
//                     Delete
//                   </Button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </Table>
//       )}
//     </div>
//   );
// };

// export default AdminOrders;



// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useAuth } from "../context/AuthContext";
// import { Table, Button, Spinner, Card } from "react-bootstrap";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// // Initialize Toastify
// toast.configure();

// const AdminOrders = () => {
//   const { authData } = useAuth();
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetchOrders();
//   }, []);

//   const fetchOrders = async () => {
//     setLoading(true);
//     try {
//       const res = await axios.get("https://project-backend-8ik1.onrender.com/api/admin/orders", {
//         headers: { Authorization: `Bearer ${authData.token}` },
//       });

//       setOrders(res.data);
//     } catch (err) {
//       console.error("Error fetching orders:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleDelete = async (orderId) => {
//     if (!window.confirm("Are you sure you want to delete this order?")) return;

//     try {
//       await axios.delete(`https://project-backend-8ik1.onrender.com/api/admin/orders/${orderId}`, {
//         headers: { Authorization: `Bearer ${authData.token}` },
//       });

//       setOrders(orders.filter((order) => order._id !== orderId));

//       // Show toast notification
//       toast.success("Order deleted successfully!", {
//         position: "top-right",
//         autoClose: 3000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//       });
//     } catch (error) {
//       console.error("Error deleting order:", error);
//       toast.error("Failed to delete order. Try again!", {
//         position: "top-right",
//         autoClose: 3000,
//       });
//     }
//   };

//   return (
//     <div className="container mt-4">
//       <h2 className="text-center mb-4">Admin Orders</h2>

//       {loading ? (
//         <div className="text-center">
//           <Spinner animation="border" variant="primary" />
//         </div>
//       ) : orders.length === 0 ? (
//         <p className="text-center">No orders found.</p>
//       ) : (
//         <Table striped bordered hover responsive className="shadow">
//           <thead className="table-dark">
//             <tr>
//               <th>Order ID</th>
//               <th>User</th>
//               <th>Phone</th>
//               <th>Address</th>
//               <th>Products</th>
//               <th>Total Amount</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {orders.map((order) => (
//               <tr key={order._id}>
//                 <td>{order._id}</td>
//                 <td>{order.userProfile?.name || "N/A"}</td>
//                 <td>{order.userProfile?.phone || "N/A"}</td>
//                 <td>{order.userProfile?.address || "N/A"}</td>
//                 <td>
//                   {order.products.map((item) => (
//                     <Card key={item.product._id} className="mb-2 p-2 shadow-sm">
//                       <Card.Img
//                         variant="top"
//                         src={item.product.image || "https://via.placeholder.com/100"}
//                         alt={item.product.name}
//                         style={{
//                           width: "80px",
//                           height: "80px",
//                           objectFit: "cover",
//                         }}
//                       />
//                       <Card.Body>
//                         <p className="m-0">{item.product.name}</p>
//                         <p className="text-muted">Qty: {item.quantity}</p>
//                       </Card.Body>
//                     </Card>
//                   ))}
//                 </td>
//                 <td>₹{order.totalAmount.toFixed(2)}</td>
//                 <td>
//                   <Button variant="danger" onClick={() => handleDelete(order._id)}>
//                     Delete
//                   </Button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </Table>
//       )}
//     </div>
//   );
// };

// export default AdminOrders;



import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import { Table, Button, Spinner, Card } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminOrders = () => {
  const { authData } = useAuth();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    setLoading(true);
    try {
      const res = await axios.get("https://project-backend-8ik1.onrender.com/api/admin/orders", {
        headers: { Authorization: `Bearer ${authData.token}` },
      });

      setOrders(res.data);
    } catch (err) {
      console.error("Error fetching orders:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (orderId) => {
    if (!window.confirm("Are you sure you want to delete this order?")) return;

    try {
      await axios.delete(`https://project-backend-8ik1.onrender.com/api/admin/orders/${orderId}`, {
        headers: { Authorization: `Bearer ${authData.token}` },
      });

      setOrders(orders.filter((order) => order._id !== orderId));

      // Show toast notification
      toast.success("Order deleted successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (error) {
      console.error("Error deleting order:", error);
      toast.error("Failed to delete order. Try again!", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Admin Orders</h2>

      {/* Add ToastContainer */}
      <ToastContainer />

      {loading ? (
        <div className="text-center">
          <Spinner animation="border" variant="primary" />
        </div>
      ) : orders.length === 0 ? (
        <p className="text-center">No orders found.</p>
      ) : (
        <Table striped bordered hover responsive className="shadow">
          <thead className="table-dark">
            <tr>
              <th>Order ID</th>
              <th>User</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Products</th>
              <th>Total Amount</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>
                <td>{order._id}</td>
                <td>{order.userProfile?.name || "N/A"}</td>
                <td>{order.userProfile?.phone || "N/A"}</td>
                <td>{order.userProfile?.address || "N/A"}</td>
                <td>
                  {order.products.map((item) => (
                    <Card key={item.product._id} className="mb-2 p-2 shadow-sm">
                      <Card.Img
                        variant="top"
                        src={item.product.image || "https://via.placeholder.com/100"}
                        alt={item.product.name}
                        style={{
                          width: "80px",
                          height: "80px",
                          objectFit: "cover",
                        }}
                      />
                      <Card.Body>
                        <p className="m-0">{item.product.name}</p>
                        <p className="text-muted">Qty: {item.quantity}</p>
                      </Card.Body>
                    </Card>
                  ))}
                </td>
                <td>₹{order.totalAmount.toFixed(2)}</td>
                <td>
                  <Button variant="danger" onClick={() => handleDelete(order._id)}>
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
};

export default AdminOrders;


