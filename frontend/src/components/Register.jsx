// Register.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
//import "../styles.css"; // Adjust path if necessary

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.username || !formData.email || !formData.password) {
      alert("All fields are required");
      return;
    }
    if (formData.password.length < 6) {
      alert("Password must be at least 6 characters long.");
      return;
    }
    try {
      const response = await fetch("https://project-backend-8ik1.onrender.com", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        alert("Registration Successful");
        navigate("/login");
      } else {
        alert(data.message || "Registration failed");
      }
    } catch (error) {
      alert("Error registering");
    }
  };

  return (
    <div className="register-container login-container">
      <div className="register-box">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <input
            name="username"
            className="margin"
            onChange={handleChange}
            value={formData.username}
            placeholder="Username"
            required
          />
          <input
            type="email"
            className="margin"
            name="email"
            onChange={handleChange}
            value={formData.email}
            placeholder="Email"
            required
          />
          <input
            type="password"
            className="margin"
            name="password"
            onChange={handleChange}
            value={formData.password}
            placeholder="Password"
            required
          />
          <br />
          <button className="btn btn-success  butt" type="submit">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
