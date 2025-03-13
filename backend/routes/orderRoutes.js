// import express from "express";
// import { authMiddleware } from "../middleware/authMiddleware.js";
// import {
//   placeOrder,
//   getMyOrders,
//   updateOrder,
//   deleteOrder,
//   getAllOrders
// } from "../controllers/orderController.js";

// const router = express.Router();

// router.post("/", authMiddleware, placeOrder);
// router.get("/myorders", authMiddleware, getMyOrders);
// router.put("/:id", authMiddleware, updateOrder);
// router.delete("/:id", authMiddleware, deleteOrder);
// router.get("/admin-orders", authMiddleware, getAllOrders);

// export default router;

import express from "express";
import { 
  placeOrder, 
  getMyOrders, 
  getAllOrders, 
  updateOrder, 
  deleteOrder, 
  deleteUserOrder 
} from "../controllers/orderController.js";
import { authMiddleware, adminMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

//router.post("/place", authMiddleware, placeOrder);
router.post("/", authMiddleware, placeOrder);

router.get("/my-orders", authMiddleware, getMyOrders);
router.get("/all-orders", authMiddleware, adminMiddleware, getAllOrders);
router.put("/update/:id", authMiddleware, adminMiddleware, updateOrder);
router.delete("/delete/:id", authMiddleware, adminMiddleware, deleteOrder);

// New route for users to delete orders from their history
router.delete("/delete-user-order/:id", authMiddleware, deleteUserOrder);

export default router;

