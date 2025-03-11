// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";

// const ProductDetails = () => {
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);

//   useEffect(() => {
//     axios
//       .get(`http://localhost:8000/api/products/${id}`)
//       .then((response) => setProduct(response.data))
//       .catch((error) =>
//         console.error("Error fetching product details:", error)
//       );
//   }, [id]);

//   if (!product) return <p>Loading...</p>;

//   return (
//     <div>
//       <h1>{product.name}</h1>
//       <img src={product.image} alt={product.name} />
//       <p>{product.description}</p>
//       <p>Price: {product.price} ₹</p>
//     </div>
//   );
// };

// export default ProductDetails;

import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`https://project-backend-8ik1.onrender.com/${id}`)
      .then((response) => setProduct(response.data))
      .catch((error) =>
        console.error("Error fetching product details:", error)
      );
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="product-details-container cartt">
      <h1>{product.name}</h1>
      <img
        src={product.image}
        alt={product.name}
        className="img-fluid product-detail-img"
      />
      <p>{product.description}</p>
      <p>Price: {product.price} ₹</p>

      {/* Buttons Section */}
      <div className="product-actions">
        <button
          className="btn btn-primary me-3"
          onClick={() => navigate("/cart")}
        >
          🛒 Go to Cart
        </button>

        <button className="btn btn-secondary" onClick={() => navigate("/home")}>
          🏠 Explore More Products
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
