import "./AdminProducts.css";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";

const AdminProducts = () => {
  const { authData } = useAuth();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingProduct, setEditingProduct] = useState(null);
  const [editFormData, setEditFormData] = useState({});
  const [imageURL, setImageURL] = useState("");

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    axios
      .get("https://project-backend-8ik1.onrender.com/api/products")
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setLoading(false);
      });
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://project-backend-8ik1.onrender.com/api/products/${id}`, {
        headers: { Authorization: `Bearer ${authData.token}` },
      });
      fetchProducts();
    } catch (err) {
      console.error("Error deleting product:", err);
    }
  };

  const handleEditClick = (product) => {
    setEditingProduct(product._id);
    setEditFormData({ ...product });
    setImageURL(product.image || "");
  };

  const handleInputChange = (e) => {
    setEditFormData({ ...editFormData, [e.target.name]: e.target.value });
  };

  const handleImageURLChange = (e) => {
    setImageURL(e.target.value);
    setEditFormData({ ...editFormData, image: e.target.value });
  };

  const handleUpdate = async (id) => {
    try {
      await axios.put(
        `https://project-backend-8ik1.onrender.com/api/products/${id}`,
        { ...editFormData, image: imageURL },
        {
          headers: { Authorization: `Bearer ${authData.token}` },
        }
      );
      fetchProducts();
      setEditingProduct(null);
    } catch (err) {
      console.error("Error updating product:", err);
    }
  };

  return (
    <div className="container">
      <h2 className="mb-4">Products</h2>
      {loading ? (
        <p>Loading products...</p>
      ) : products.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <div className="row">
          {products.map((p) => (
            <div key={p._id} className="col-md-4 mb-4">
              <div className="card p-3 border rounded shadow-sm text-center">
                <img
                  src={p.image || "https://via.placeholder.com/300"}
                  alt={p.name}
                  className="img-fluid rounded mb-2"
                  style={{
                    maxWidth: "100%",
                    height: "200px",
                    objectFit: "cover",
                  }}
                />
                {editingProduct === p._id ? (
                  <>
                    <input
                      type="text"
                      name="name"
                      value={editFormData.name}
                      onChange={handleInputChange}
                      className="form-control mb-2"
                      placeholder="Product Name"
                    />
                    <textarea
                      name="description"
                      value={editFormData.description}
                      onChange={handleInputChange}
                      className="form-control mb-2"
                      placeholder="Product Description"
                    />
                    <input
                      type="text"
                      name="price"
                      value={editFormData.price}
                      onChange={handleInputChange}
                      className="form-control mb-2"
                      placeholder="Price"
                    />
                    <input
                      type="text"
                      placeholder="Paste Image URL"
                      value={imageURL}
                      onChange={handleImageURLChange}
                      className="form-control mb-2"
                    />
                    {imageURL && (
                      <img
                        src={imageURL}
                        alt="Preview"
                        className="rounded mb-2"
                        style={{
                          width: "50px",
                          height: "50px",
                          objectFit: "cover",
                        }}
                      />
                    )}
                    <button
                      className="btn btn-success me-2 btt"
                      onClick={() => handleUpdate(p._id)}
                    >
                      Save
                    </button>
                    <button
                      className="btn btn-secondary btt"
                      onClick={() => setEditingProduct(null)}
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <>
                    <h3 className="product-title">{p.name}</h3>
                    <p>{p.description}</p>
                    <h3 className="product-price text-success">{p.price} ₹</h3>
                    <button
                      className=" btt1"
                      onClick={() => handleEditClick(p)}
                    >
                      Edit
                    </button>
                    <button
                      className="btt2"
                      onClick={() => handleDelete(p._id)}
                    >
                      Delete
                    </button>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminProducts;

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useAuth } from "../context/AuthContext";
// import "./AdminProducts.css";

// const AdminProducts = () => {
//   const { authData } = useAuth();
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [editingProduct, setEditingProduct] = useState(null);
//   const [editFormData, setEditFormData] = useState({});
//   const [imageURL, setImageURL] = useState("");

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const fetchProducts = () => {
//     axios
//       .get("http://localhost:8000/api/products")
//       .then((res) => {
//         setProducts(res.data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error("Error fetching products:", err);
//         setLoading(false);
//       });
//   };

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`http://localhost:8000/api/products/${id}`, {
//         headers: { Authorization: `Bearer ${authData.token}` },
//       });
//       fetchProducts();
//     } catch (err) {
//       console.error("Error deleting product:", err);
//     }
//   };

//   const handleEditClick = (product) => {
//     setEditingProduct(product._id);
//     setEditFormData({ ...product });
//     setImageURL(product.image || "");
//   };

//   const handleInputChange = (e) => {
//     setEditFormData({ ...editFormData, [e.target.name]: e.target.value });
//   };

//   const handleImageURLChange = (e) => {
//     setImageURL(e.target.value);
//     setEditFormData({ ...editFormData, image: e.target.value });
//   };

//   const handleUpdate = async (id) => {
//     try {
//       await axios.put(
//         `http://localhost:8000/api/products/${id}`,
//         { ...editFormData, image: imageURL },
//         {
//           headers: { Authorization: `Bearer ${authData.token}` },
//         }
//       );
//       fetchProducts();
//       setEditingProduct(null);
//     } catch (err) {
//       console.error("Error updating product:", err);
//     }
//   };

//   return (
//     <div className="container">
//       <h2 className="mb-4">Products</h2>
//       {loading ? (
//         <p>Loading products...</p>
//       ) : products.length === 0 ? (
//         <p>No products found.</p>
//       ) : (
//         // <div className="row row-cols-1 row-cols-md-3 g-4">
//         <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
//           {products.map((p) => (
//             <div key={p._id} className="col">
//               <div className="card p-3 border rounded shadow-sm text-center">
//                 <img
//                   src={p.image || "https://via.placeholder.com/300"}
//                   alt={p.name}
//                   className="img-fluid rounded mb-2"
//                   style={{
//                     maxWidth: "100%",
//                     height: "200px",
//                     objectFit: "cover",
//                   }}
//                 />
//                 {editingProduct === p._id ? (
//                   <>
//                     <input
//                       type="text"
//                       name="name"
//                       value={editFormData.name}
//                       onChange={handleInputChange}
//                       className="form-control mb-2"
//                       placeholder="Product Name"
//                     />
//                     <textarea
//                       name="description"
//                       value={editFormData.description}
//                       onChange={handleInputChange}
//                       className="form-control mb-2"
//                       placeholder="Product Description"
//                     />
//                     <input
//                       type="text"
//                       name="price"
//                       value={editFormData.price}
//                       onChange={handleInputChange}
//                       className="form-control mb-2"
//                       placeholder="Price"
//                     />
//                     <input
//                       type="text"
//                       placeholder="Paste Image URL"
//                       value={imageURL}
//                       onChange={handleImageURLChange}
//                       className="form-control mb-2"
//                     />
//                     {imageURL && (
//                       <img
//                         src={imageURL}
//                         alt="Preview"
//                         className="rounded mb-2"
//                         style={{
//                           width: "50px",
//                           height: "50px",
//                           objectFit: "cover",
//                         }}
//                       />
//                     )}
//                     <button
//                       className="btn btn-success me-2"
//                       onClick={() => handleUpdate(p._id)}
//                     >
//                       Save
//                     </button>
//                     <button
//                       className="btn btn-secondary"
//                       onClick={() => setEditingProduct(null)}
//                     >
//                       Cancel
//                     </button>
//                   </>
//                 ) : (
//                   <>
//                     <h3 className="product-title">{p.name}</h3>
//                     <p>{p.description}</p>
//                     <h3 className="product-price text-success">{p.price} ₹</h3>
//                     <button
//                       className="btn btn-warning me-2"
//                       onClick={() => handleEditClick(p)}
//                     >
//                       Edit
//                     </button>
//                     <button
//                       className="btn btn-danger"
//                       onClick={() => handleDelete(p._id)}
//                     >
//                       Delete
//                     </button>
//                   </>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default AdminProducts;
