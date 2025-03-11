import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const HomeItem = () => {
  const { productId } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `https://project-backend-8ik1.onrender.com/api/products/${productId}`
        );
        if (!response.ok) throw new Error("Product not found");
        const data = await response.json();
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  if (loading) return <p>Loading product...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div className="container text-center">
      <h2 className="mt-3">{product.name}</h2>
      <img
        src={product.image || "https://via.placeholder.com/300"}
        alt={product.name}
        className="img-fluid rounded"
        style={{ maxWidth: "300px", height: "auto" }}
      />
      <p className="mt-3">{product.description}</p>
      <h3 className="text-success">{product.price} ₹</h3>

      <button
        className="btn btn-success me-2"
        onClick={() => addToCart(product)}
      >
        Add to Cart 🛒
      </button>

      <Link to="/home" className="btn btn-primary mt-3">
        Back to Products
      </Link>
    </div>
  );
};

export default HomeItem;
