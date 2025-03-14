// import express from "express";
// import { authMiddleware, adminMiddleware } from "../middleware/authMiddleware.js";
// import User from "../models/User.js";
// //import Product from "../models/product.js";
// import Order from "../models/Order.js";

// const router = express.Router();

// // Get all registered users (admin only)
// router.get("/users", authMiddleware, adminMiddleware, async (req, res) => {
//   try {
//     const users = await User.find({});
//     res.json(users);
//   } catch (error) {
//     res.status(500).json({ message: "Server error" });
//   }
// });



// // Get all orders (Admin Only)
// router.get("/orders", authMiddleware, adminMiddleware, async (req, res) => {
//   try {
//     const orders = await Order.find({})
//       .populate("user", "name email")  // Populate user details
//       .populate("products.product");   // Populate product details

//     res.json(orders);
//   } catch (error) {
//     res.status(500).json({ message: "Error fetching orders", error });
//   }
// });

// // Additional admin routes for product management could be added here


// // Delete a user (admin only)
// router.delete("/users/:id", authMiddleware, adminMiddleware, async (req, res) => {
//   try {
//     const user = await User.findByIdAndDelete(req.params.id);
//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }
//     res.json({ message: "User deleted successfully" });
//   } catch (error) {
//     res.status(500).json({ message: "Server error" });
//   }
// });


// // Delete an order (Admin Only)
// router.delete("/orders/:id", authMiddleware, adminMiddleware, async (req, res) => {
//   try {
//     const order = await Order.findByIdAndDelete(req.params.id);

//     if (!order) {
//       return res.status(404).json({ message: "Order not found" });
//     }

//     res.json({ message: "Order deleted successfully" });
//   } catch (error) {
//     res.status(500).json({ message: "Error deleting order", error });
//   }
// });

// // DELETE all orders
// router.delete('/delete-all', async (req, res) => {
//   try {
//     await Order.deleteMany({});
//     res.status(200).json({ message: "All orders deleted successfully!" });
//   } catch (error) {
//     res.status(500).json({ error: "Failed to delete orders." });
//   }
// });



import express from "express";
import { authMiddleware, adminMiddleware } from "../middleware/authMiddleware.js";
import User from "../models/User.js";
//import Product from "../models/product.js";
import Order from "../models/Order.js";

const router = express.Router();

// Get all registered users (admin only)
router.get("/users", authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});



// Get all orders (Admin Only)
router.get("/orders", authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const orders = await Order.find({})
      .populate("user", "name email")  // Populate user details
      .populate("products.product");   // Populate product details

    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: "Error fetching orders", error });
  }
});

// Additional admin routes for product management could be added here


// Delete a user (admin only)
router.delete("/users/:id", authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});


// Delete an order (Admin Only)
router.delete("/orders/:id", authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const order = await Order.findByIdAndDelete(req.params.id);

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.json({ message: "Order deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting order", error });
  }
});

// DELETE all orders
router.delete('/delete-all', async (req, res) => {
  try {
    await Order.deleteMany({});
    res.status(200).json({ message: "All orders deleted successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete orders." });
  }
});

// Get a single order by ID (Admin)
router.get("/orders/:id", authMiddleware, adminMiddleware, async (req, res) => {
  try {
      const order = await Order.findById(req.params.id)
          .populate("user", "name email")
          .populate("products.product");

      if (!order) {
          return res.status(404).json({ message: "Order not found" });
      }

      res.json(order);
  } catch (error) {
      console.error("Error fetching order:", error);
      res.status(500).json({ message: "Server error" });
  }
});




export default router;




// export default router;
