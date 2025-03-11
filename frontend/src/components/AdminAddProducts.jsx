// import React, { useState } from "react";
// import axios from "axios";
// import { useAuth } from "../context/AuthContext";

// const AdminAddProducts = () => {
//   const { authData } = useAuth();
//   const [form, setForm] = useState({
//     name: "",
//     description: "",
//     price: "",
//     mrp: "",
//     image: "",
//   });
//   const [message, setMessage] = useState("");

//   const handleFormChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     axios
//       .post("http://localhost:8000/api/products", form, {
//         headers: { Authorization: `Bearer ${authData.token}` },
//       })
//       .then(() => {
//         setMessage("Product added successfully!");
//         setForm({ name: "", description: "", price: "", mrp: "", image: "" });
//       })
//       .catch((err) => console.error(err));
//   };

//   return (
//     <div className="container">
//       <h2 className="mb-4">Add New Product</h2>
//       {message && <p className="alert alert-success">{message}</p>}
//       <div className="card shadow-sm p-4">
//         <form onSubmit={handleFormSubmit}>
//           <div className="mb-3">
//             <label className="form-label">Name</label>
//             <input
//               type="text"
//               className="form-control"
//               name="name"
//               value={form.name}
//               onChange={handleFormChange}
//               required
//             />
//           </div>
//           <div className="mb-3">
//             <label className="form-label">Price (₹)</label>
//             <input
//               type="number"
//               className="form-control"
//               name="price"
//               value={form.price}
//               onChange={handleFormChange}
//               required
//             />
//           </div>
//           <div className="mb-3">
//             <label className="form-label">MRP (₹)</label>
//             <input
//               type="number"
//               className="form-control"
//               name="mrp"
//               value={form.mrp}
//               onChange={handleFormChange}
//             />
//           </div>
//           <div className="mb-3">
//             <label className="form-label">Image URL</label>
//             <input
//               type="text"
//               className="form-control"
//               name="image"
//               value={form.image}
//               onChange={handleFormChange}
//             />
//           </div>
//           <div className="mb-3">
//             <label className="form-label">Description</label>
//             <textarea
//               className="form-control"
//               name="description"
//               rows="3"
//               value={form.description}
//               onChange={handleFormChange}
//             ></textarea>
//           </div>
//           <button type="submit" className="btn btn-primary">
//             Add Product
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AdminAddProducts;

import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";

const AdminAddProducts = () => {
  const { authData } = useAuth();
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    mrp: "",
    image: "",
  });
  const [message, setMessage] = useState("");

  const handleFormChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://project-backend-8ik1.onrender.com", form, {
        headers: { Authorization: `Bearer ${authData.token}` },
      });
      setMessage("Product added successfully!");
      setForm({ name: "", description: "", price: "", mrp: "", image: "" });
    } catch (err) {
      console.error("Error adding product:", err);
      setMessage("Failed to add product.");
    }
  };

  return (
    <div className="container">
      <h2 className="mb-4">Add New Product</h2>
      {message && (
        <p
          className={`alert ${
            message.includes("success") ? "alert-success" : "alert-danger"
          }`}
        >
          {message}
        </p>
      )}
      <div className="card shadow-sm p-4">
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            className="form-control mb-3"
            name="name"
            placeholder="Product Name"
            value={form.name}
            onChange={handleFormChange}
            required
          />
          <input
            type="number"
            className="form-control mb-3"
            name="price"
            placeholder="Price (₹)"
            value={form.price}
            onChange={handleFormChange}
            required
          />
          {/* <input
            type="number"
            className="form-control mb-3"
            name="mrp"
            placeholder="MRP (₹)"
            value={form.mrp}
            onChange={handleFormChange}
          /> */}
          <input
            type="text"
            className="form-control mb-3"
            name="image"
            placeholder="Image URL"
            value={form.image}
            onChange={handleFormChange}
            required
          />
          <textarea
            className="form-control mb-3"
            name="description"
            rows="3"
            placeholder="Description"
            value={form.description}
            onChange={handleFormChange}
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminAddProducts;
