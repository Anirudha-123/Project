import React, { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import "./styles/Cart.css"; // Import your stylesheet

const Home = () => {
  const [products, setProducts] = useState([]);
  const { cartItems, addToCart } = useCart();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://project-backend-8ik1.onrender.com");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  // ✅ Check if the product is in the cart
  const isAddedToCart = (productId) =>
    cartItems.some((item) => item._id === productId);

  return (
    <>
      <>
        <div className="lll car shop">
          <div
            id="heroCarousel"
            className="carousel slide mb-5 "
            data-bs-ride="carousel"
            data-bs-interval="3000"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#heroCarousel"
                data-bs-slide-to="0"
                className="active"
              ></button>
              <button
                type="button"
                data-bs-target="#heroCarousel"
                data-bs-slide-to="1"
              ></button>
              <button
                type="button"
                data-bs-target="#heroCarousel"
                data-bs-slide-to="2"
              ></button>
              <button
                type="button"
                data-bs-target="#heroCarousel"
                data-bs-slide-to="3"
              ></button>{" "}
              {/* ✅ New indicator for 4th slide */}
            </div>

            <div className="carousel-inner hero-section lll">
              <div className="carousel-item ">
                <img
                  src="https://images.pexels.com/photos/17036354/pexels-photo-17036354/free-photo-of-iphone-screen-mockup.jpeg?auto=compress&cs=tinysrgb&w=600"
                  className="d-block w-100 carousel-img"
                  alt="Mobile, Laptop & Watch Sale"
                />
                <div className="carousel-caption d-none d-md-block">
                  <h2 className="fw-bold">
                    📱💻⌚ Mobile, Laptop & Watch Sale!
                  </h2>
                  <p>
                    Get the best deals on smartphones, laptops, and
                    smartwatches. Limited time offer!
                  </p>
                </div>
              </div>

              <div className="carousel-item">
                <img
                  src="https://images.pexels.com/photos/17803924/pexels-photo-17803924/free-photo-of-close-of-man-hands-with-smartwatch.jpeg?auto=compress&cs=tinysrgb&w=600"
                  className="d-block w-100 carousel-img"
                  alt="Electronics Sale"
                />
                <div className="carousel-caption d-none d-md-block">
                  <h2 className="fw-bold">🚀 Latest Gadgets at Best Prices!</h2>
                  <p>Get the best deals on the latest electronics.</p>
                </div>
              </div>

              <div className="carousel-item active">
                <img
                  src="https://images.pexels.com/photos/3756959/pexels-photo-3756959.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                  className="d-block w-100 carousel-img"
                  alt="Wireless Headphones"
                />
                <div className="carousel-caption d-none d-md-block">
                  <h2 className="fw-bold">
                    🎧 Experience True Wireless Freedom
                  </h2>
                  <p>
                    Immerse yourself in high-quality sound with the latest
                    wireless headphones. Crystal-clear audio, deep bass, and
                    noise cancellation—perfect for music lovers!
                  </p>
                </div>
              </div>

              {/* ✅ New 4th Slide for Smart TV */}
              <div className="carousel-item">
                <img
                  src="https://images.pexels.com/photos/1444416/pexels-photo-1444416.jpeg?auto=compress&cs=tinysrgb&w=600"
                  className="d-block w-100 carousel-img"
                  alt="Smart TV Sale"
                />
                <div className="carousel-caption d-none d-md-block">
                  <h2 className="fw-bold">📺 Smart TV Mega Sale!</h2>
                  <p>
                    Upgrade your entertainment experience with the latest Smart
                    TVs. Crystal-clear 4K resolution, smart features, and
                    unbeatable discounts!
                  </p>
                </div>
              </div>
            </div>

            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#heroCarousel"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon"></span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#heroCarousel"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon"></span>
            </button>
          </div>
        </div>
      </>

      <div className="container">
        {/* <h2 className="mt-3">Available Products</h2> */}
        <div className="row lll">
          {products.map((product) => (
            <div key={product._id} className="col-md-4">
              <div className="space">
                <div className="product-card p-3 border rounded shadow-sm text-center">
                  <img
                    src={product.image || "https://via.placeholder.com/300"}
                    alt={product.name}
                    className="img-fluid rounded mb-2"
                    style={{
                      maxWidth: "100%",
                      height: "200px",
                      objectFit: "cover",
                    }}
                  />
                  <br />
                  <h3 className="product-title">{product.name}</h3>
                  <p>{product.description}</p>
                  <h3 className="product-price text-success">
                    {product.price} ₹
                  </h3>

                  {isAddedToCart(product._id) ? (
                    <Link to="/cart" className="btn btn-success">
                      Go to Cart <span className="ms-2">🛒 </span>
                    </Link>
                  ) : (
                    <button
                      className="place-order-btn mt-3"
                      onClick={() => addToCart(product)}
                    >
                      Add to Cart
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
