import React, { useEffect, useMemo } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CartProvider } from "./context/CartContext";
import { AuthProvider, useAuth } from "./context/AuthContext";
import Header from "./components/Header";
import AdminHeader from "./components/AdminHeader";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Login from "./components/Login";
import Register from "./components/Register";
import OrderHistory from "./components/OrderHistory";
import HomeItem from "./components/HomeItem";
import Profile from "./components/Profile";
import AdminDashboard from "./components/AdminDashboard";
import AdminAddProducts from "./components/AdminAddProducts";
import ScrollToTop from "./components/ScrollToTop"; // Import ScrollToTop
import ProductDetails from "./components/ProductDetails";

import "./App.css";

import Login2 from "./components/Login2";

import "./styles.css";

function App() {
  return (
    <AuthProvider>
      <CartProvider>
         <ToastContainer position="top-right" autoClose={3000} />
        <Router>
          <ScrollToTop /> {/* Add this inside Router */}
          <AppRoutes />
         
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

function PrivateRoute({ children }) {
  const { authData } = useAuth();
  return authData?.token ? children : <Navigate to="/login" replace />;
}

function AdminRoute({ children }) {
  const { authData } = useAuth();
  return authData?.token && authData?.isAdmin ? (
    children
  ) : (
    <Navigate to="/" replace />
  );
}

function AppRoutes() {
  const { authData } = useAuth();

  // Prevent unnecessary re-renders by memoizing values
  const isAuthenticated = useMemo(() => !!authData?.token, [authData?.token]);
  const isAdmin = useMemo(() => !!authData?.isAdmin, [authData?.isAdmin]);

  return (
    <>
      {isAdmin ? <AdminHeader /> : <Header />} {/* Show AdminHeader if admin */}
      <main className="container my-4">
        <Routes>
          {/* Redirect Admins to Admin Dashboard Instead of Home */}
          <Route
            path="/"
            element={
              isAdmin ? <Navigate to="/admin-panel" replace /> : <Home />
            }
          />

          {/* Authentication Routes */}
          <Route
            path="/login"
            element={
              !isAuthenticated ? (
                <Login />
              ) : isAdmin ? (
                <Navigate to="/admin-panel" replace />
              ) : (
                <Navigate to="/" replace />
              )
            }
          />

          <Route
            path="/login2"
            element={
              !isAuthenticated ? (
                <Login2 />
              ) : isAdmin ? (
                <Navigate to="/admin-panel" replace />
              ) : (
                <Navigate to="/cart" replace />
              )
            }
          ></Route>
          <Route
            path="/register"
            element={
              !isAuthenticated ? <Register /> : <Navigate to="/" replace />
            }
          />

          {/* Admin Routes */}
          <Route
            path="/admin-panel/*"
            element={
              <AdminRoute>
                <AdminDashboard />
              </AdminRoute>
            }
          />
          <Route
            path="/admin-panel/add-product"
            element={
              <AdminRoute>
                <AdminAddProducts />
              </AdminRoute>
            }
          />

          {/* User Routes */}
          <Route path="/home/:productId" element={<HomeItem />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<ProductDetails />} />

          
          <Route path="/order-history" element={ <PrivateRoute><OrderHistory /> </PrivateRoute>} />
          
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
          <Route
            path="/checkout"
            element={
              isAuthenticated ? <Profile /> : <Navigate to="/" replace />
            }
          />

          {/* Redirect unknown routes */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
