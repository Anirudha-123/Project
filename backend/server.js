
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

// import path from "path";

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

//const _dirname = path.resolve();

const app = express();

// Middlewares
// app.use(cors(

//   {
//     origin:["https://project-frontend-oclo.onrender.com"],
   
//     credentials:true        
    
//   }
  
// ));

app.use(cors({
  origin: ["https://project-frontend-oclo.onrender.com"],
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"]
}));

app.use(express.json());

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "frontend/dist")));

app.get("*", (_, res) => {
  res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
});




// app.use(express.static(path.join(_dirname, "../frontend/dist")));

// app.get("*", (_, res) => {
//   res.sendFile(path.resolve(_dirname, "../frontend", "dist", "index.html"));
// });




// API Routes
import authRoutes from "./routes/authRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import adminRoutes from "./routes/admin.js";
import userRoutes from "./routes/userRoutes.js";
import profileRoutes from "./routes/profileRoutes.js"; // Newly added

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/users", userRoutes);
app.use("/api/profile", profileRoutes); // Register profile routes

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



