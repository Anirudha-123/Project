// import Order from "../models/Order.js";

// // Place a new order
// export const placeOrder = async (req, res) => {
//   const { products, totalAmount } = req.body;
//   try {
//     const order = new Order({
//       user: req.user._id,
//       products,
//       totalAmount,
//       status: "Pending"
//     });
//     await order.save();
//     res.json(order);
//   } catch (error) {
//     res.status(500).json({ message: "Server error" });
//   }
// };

// // Get orders for the logged-in user
// export const getMyOrders = async (req, res) => {
//   try {
//     const orders = await Order.find({ user: req.user._id }).populate("products.product");
//     res.json(orders);
//   } catch (error) {
//     res.status(500).json({ message: "Server error" });
//   }
// };

// // Update an order (admin only)
// export const updateOrder = async (req, res) => {
//   console.log("Updating order with id:", req.params.id);
//   try {
//     const order = await Order.findById(req.params.id);
//     if (!order) {
//       console.log("Order not found");
//       return res.status(404).json({ message: "Order not found" });
//     }
//     order.status = req.body.status || order.status;
//     await order.save();
//     console.log("Order updated successfully");
//     res.json(order);
//   } catch (error) {
//     console.error("Error updating order:", error);
//     res.status(500).json({ message: "Server error" });
//   }
// };

// // Delete an order
// export const deleteOrder = async (req, res) => {
//   console.log("Deleting order with id:", req.params.id);
//   try {
//     const order = await Order.findByIdAndDelete(req.params.id);
//     if (!order) {
//       console.log("Order not found");
//       return res.status(404).json({ message: "Order not found" });
//     }
//     console.log("Order deleted successfully");
//     res.json({ message: "Order deleted successfully" });
//   } catch (error) {
//     console.error("Error deleting order:", error);
//     res.status(500).json({ message: "Server error" });
//   }
// };

// // Admin: Get all orders
// export const getAllOrders = async (req, res) => {
//   try {
//     const orders = await Order.find().populate("user", "username email");
//     res.json(orders);
//   } catch (error) {
//     res.status(500).json({ message: "Server error" });
//   }
// };



// import Order from "../models/Order.js";

// // Place a new order
// export const placeOrder = async (req, res) => {
//   const { products, totalAmount, userProfile } = req.body;

//   if (!userProfile || !userProfile.name || !userProfile.address || !userProfile.phone) {
//     return res.status(400).json({ message: "User profile details are required" });
//   }

//   try {
//     const order = new Order({
//       user: req.user._id,
//       userProfile,
//       products,
//       totalAmount,
//       status: "Pending"
//     });

//     await order.save();
//     res.json(order);
//   } catch (error) {
//     console.error("Error placing order:", error);
//     res.status(500).json({ message: "Server error" });
//   }
// };

// // Get orders for the logged-in user
// export const getMyOrders = async (req, res) => {
//   try {
//     const orders = await Order.find({ user: req.user._id })
//       .populate("products.product", "name image price description");
//     res.json(orders);
//   } catch (error) {
//     console.error("Error fetching user orders:", error);
//     res.status(500).json({ message: "Server error" });
//   }
// };

// // Get all orders (Admin)
// export const getAllOrders = async (req, res) => {
//   try {
//     const orders = await Order.find()
//       .populate("user", "username email")
//       .populate("products.product", "name image price description");

//     res.json(orders);
//   } catch (error) {
//     console.error("Error fetching all orders:", error);
//     res.status(500).json({ message: "Server error" });
//   }
// };

// // Update an order (Admin)
// export const updateOrder = async (req, res) => {
//   console.log("Updating order with id:", req.params.id);
//   try {
//     const order = await Order.findById(req.params.id);
//     if (!order) {
//       console.log("Order not found");
//       return res.status(404).json({ message: "Order not found" });
//     }

//     order.status = req.body.status || order.status;
//     await order.save();
//     console.log("Order updated successfully");
//     res.json(order);
//   } catch (error) {
//     console.error("Error updating order:", error);
//     res.status(500).json({ message: "Server error" });
//   }
// };

// // Delete an order
// export const deleteOrder = async (req, res) => {
//   console.log("Deleting order with id:", req.params.id);
//   try {
//     const order = await Order.findByIdAndDelete(req.params.id);
//     if (!order) {
//       console.log("Order not found");
//       return res.status(404).json({ message: "Order not found" });
//     }
//     console.log("Order deleted successfully");
//     res.json({ message: "Order deleted successfully" });
//   } catch (error) {
//     console.error("Error deleting order:", error);
//     res.status(500).json({ message: "Server error" });
//   }
// };

import Order from "../models/Order.js";

// Place a new order
export const placeOrder = async (req, res) => {
  const { products, totalAmount, userProfile } = req.body;

  if (!userProfile || !userProfile.name || !userProfile.address || !userProfile.phone) {
    return res.status(400).json({ message: "User profile details are required" });
  }

  try {
    const order = new Order({
      user: req.user._id,
      userProfile,
      products,
      totalAmount,
      status: "Pending"
    });

    await order.save();
    res.json(order);
  } catch (error) {
    console.error("Error placing order:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Get orders for the logged-in user
export const getMyOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user._id })
      .populate("products.product", "name image price description");
    res.json(orders);
  } catch (error) {
    console.error("Error fetching user orders:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Get all orders (Admin)
export const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find()
      .populate("user", "username email")
      .populate("products.product", "name image price description");

    res.json(orders);
  } catch (error) {
    console.error("Error fetching all orders:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Update an order (Admin)
export const updateOrder = async (req, res) => {
  console.log("Updating order with id:", req.params.id);
  try {
    const order = await Order.findById(req.params.id);
    if (!order) {
      console.log("Order not found");
      return res.status(404).json({ message: "Order not found" });
    }

    order.status = req.body.status || order.status;
    await order.save();
    console.log("Order updated successfully");
    res.json(order);
  } catch (error) {
    console.error("Error updating order:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Delete an order (Admin)
export const deleteOrder = async (req, res) => {
  console.log("Deleting order with id:", req.params.id);
  try {
    const order = await Order.findByIdAndDelete(req.params.id);
    if (!order) {
      console.log("Order not found");
      return res.status(404).json({ message: "Order not found" });
    }
    console.log("Order deleted successfully");
    res.json({ message: "Order deleted successfully" });
  } catch (error) {
    console.error("Error deleting order:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// **Delete an order from user's history**
export const deleteUserOrder = async (req, res) => {
  console.log("User is deleting order from their history with id:", req.params.id);
  try {
    const order = await Order.findOne({ _id: req.params.id, user: req.user._id });
    
    if (!order) {
      console.log("Order not found or does not belong to user");
      return res.status(404).json({ message: "Order not found" });
    }

    await Order.findByIdAndDelete(req.params.id);
    console.log("Order deleted by user from history");
    res.json({ message: "Order deleted from your history successfully" });

  } catch (error) {
    console.error("Error deleting order from user history:", error);
    res.status(500).json({ message: "Server error" });
  }
};


