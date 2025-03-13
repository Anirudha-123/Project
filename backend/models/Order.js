

// import mongoose from "mongoose";

// const orderSchema = new mongoose.Schema({
//   user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
//   products: [
//     {
//       product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
//       quantity: { type: Number, default: 1 }
//     }
//   ],
//   totalAmount: { type: Number, required: true },
//   status: { type: String, default: "Pending" },
//   createdAt: { type: Date, default: Date.now }
// });

// export default mongoose.model("Order", orderSchema);


// import mongoose from "mongoose";

// const orderSchema = new mongoose.Schema({
//   user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
//   userProfile: {
//     name: { type: String, required: true },
//     address: { type: String, required: true },
//     phone: { type: String, required: true }
//   },
//   products: [
//     {
//       product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
//       quantity: { type: Number, default: 1 }
//     }
//   ],
//   totalAmount: { type: Number, required: true },
//   status: { type: String, default: "Pending" },
//   createdAt: { type: Date, default: Date.now }
// });

// export default mongoose.model("Order", orderSchema);



// import mongoose from "mongoose";

// const orderSchema = new mongoose.Schema({
//   user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
//   userProfile: {
//     name: { type: String, required: true },
//     address: { type: String, required: true },
//     phone: { type: String, required: true },
//   },
//   products: [
//     {
//       product: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
//       quantity: { type: Number, default: 1, required: true },
//     },
//   ],
//   totalAmount: { type: Number, required: true },
//   status: { type: String, default: "Pending", enum: ["Pending", "Shipped", "Delivered", "Cancelled"] },
//   createdAt: { type: Date, default: Date.now },
// });

// export default mongoose.model("Order", orderSchema);


// import mongoose from "mongoose";

// const orderSchema = new mongoose.Schema({
//   user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
//   userProfile: {
//     name: { type: String, required: true },
//     address: { type: String, required: true },
//     phone: { type: String, required: true },
//   },
//   products: [
//     {
//       product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
//       quantity: { type: Number, default: 1 },
//     },
//   ],
//   totalAmount: { type: Number, required: true },
//   status: { type: String, default: "Pending" },
//   createdAt: { type: Date, default: Date.now },
// });

// export default mongoose.model("Order", orderSchema);




import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },

    userProfile: {
      name: { type: String, required: true },
      address: { type: String, required: true },
      phone: { type: String, required: true },
    },

    products: [
      {
        productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
        name: { type: String, required: true }, // Store product name separately
        price: { type: Number, required: true }, // Store price separately
        image: { type: String, required: true }, // Store image separately
        quantity: { type: Number, default: 1 },
      },
    ],

    totalAmount: { type: Number, required: true },

    status: {
      type: String,
      enum: ["Pending", "Processing", "Shipped", "Delivered", "Canceled", "Deleted by User"],
      default: "Pending",
    },

    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export default mongoose.model("Order", orderSchema);

