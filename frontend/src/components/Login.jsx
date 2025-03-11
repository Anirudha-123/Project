// import { useState } from "react";
// import { useAuth } from "../context/AuthContext";
// import { useNavigate, Link } from "react-router-dom";

// const Login = () => {
//   const { login } = useAuth(); // Use login function from context
//   const navigate = useNavigate();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");

//     try {
//       const response = await fetch("http://localhost:8000/api/auth/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         throw new Error(data.message || "Login failed");
//       }

//       // Call login with the complete data object
//       login(data);
//       navigate("/home"); // Redirect after login
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   return (
//     <div className="register-container">
//       <div className="register-box">
//         <h2>Login</h2>
//         {error && <p style={{ color: "red" }}>{error}</p>}
//         <form onSubmit={handleSubmit}>
//           <input
//             className="inp"
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="Email"
//             required
//           />
//           <input
//             className="inp"
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             placeholder="Password"
//             required
//           />
//           <div>
//             <button className="inp but btn btn-primary" type="submit">
//               Login
//             </button>
//           </div>
//         </form>
//         <p className="mt-2 text-center">
//           Don't have an account?{" "}
//           <Link to="/register" className="text-primary fw-bold">
//             Register here
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;

// import { useState } from "react";
// import { useAuth } from "../context/AuthContext";
// import { useNavigate, Link } from "react-router-dom";

// const Login = () => {
//   const { login } = useAuth();
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");

//     try {
//       const response = await fetch("http://localhost:8000/api/auth/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await response.json();
//       if (!response.ok) throw new Error(data.message || "Login failed");

//       login(data);

//       // Redirect user to intended page after login
//       const redirectPath = localStorage.getItem("redirectAfterLogin") || "/";
//       localStorage.removeItem("redirectAfterLogin"); // Remove saved redirect
//       navigate(redirectPath);
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   return (
//     <div className="register-container">
//       <div className="register-box">
//         <h2>Login</h2>
//         {error && <p style={{ color: "red" }}>{error}</p>}
//         <form onSubmit={handleSubmit}>
//           <input
//             className="inp"
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="Email"
//             required
//           />
//           <input
//             className="inp"
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             placeholder="Password"
//             required
//           />
//           <div>
//             <button className="inp but btn btn-primary" type="submit">
//               Login
//             </button>
//           </div>
//         </form>
//         <p className="mt-2 text-center">
//           Don't have an account?{" "}
//           <Link to="/register" className="text-primary fw-bold">
//             Register here
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;

// import { useState } from "react";
// import { useAuth } from "../context/AuthContext";
// import { useNavigate, Link } from "react-router-dom";

// const Login = () => {
//   const { login } = useAuth();
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");

//     try {
//       const response = await fetch("http://localhost:8000/api/auth/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await response.json();
//       if (!response.ok) throw new Error(data.message || "Login failed");

//       login(data);

//       // Redirect based on user role
//       if (data.user.isAdmin) {
//         navigate("/admin-panel");
//       } else {
//         navigate("/");
//       }
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   return (
//     <div className="register-container">
//       <div className="register-box">
//         <h2>Login</h2>
//         {error && <p style={{ color: "red" }}>{error}</p>}
//         <form onSubmit={handleSubmit}>
//           <input
//             className="inp"
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="Email"
//             required
//           />
//           <input
//             className="inp"
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             placeholder="Password"
//             required
//           />
//           <div>
//             <button className="inp but btn btn-primary" type="submit">
//               Login
//             </button>
//           </div>
//         </form>
//         <p className="mt-2 text-center">
//           Don't have an account?{" "}
//           <Link to="/register" className="text-primary fw-bold">
//             Register here
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;

import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("https://project-backend-8ik1.onrender.com", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Login failed");

      login(data);

      // Redirect user to the correct page based on role
      if (data.isAdmin) {
        navigate("/admin-panel"); // Redirect admin
      } else {
        navigate("/cart"); // Redirect regular user
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <h2>Login</h2>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <form onSubmit={handleSubmit}>
          <input
            className="inp"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
          <input
            className="inp"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
          <div>
            <button className="inp but btn btn-primary" type="submit">
              Login
            </button>
          </div>
        </form>
        <p className="mt-2 text-center">
          Don't have an account?{" "}
          <Link to="/register" className="text-primary fw-bold">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
