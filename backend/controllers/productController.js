

// import Product from "../models/productModel.js";

// // Fetch all products
// export const getProducts = async (req, res) => {
//   try {
//     const products = await Product.find();
//     res.json(products);
//   } catch (error) {
//     res.status(500).json({ message: "Error fetching products" });
//   }
// };

// // Fetch single product by ID
// export const getProductById = async (req, res) => {
//   try {
//     const product = await Product.findById(req.params.id);
//     if (!product) return res.status(404).json({ message: "Product not found" });
//     res.json(product);
//   } catch (error) {
//     res.status(500).json({ message: "Error fetching product" });
//   }
// };

// // Add a product (Admin only)
// export const addProduct = async (req, res) => {
//   try {
//     const { name, price, image, description } = req.body;
//     const newProduct = new Product({ name, price, image, description });
//     await newProduct.save();
//     res.status(201).json(newProduct);
//   } catch (error) {
//     res.status(500).json({ message: "Error adding product" });
//   }
// };

// // Update product (Admin only)
// export const updateProduct = async (req, res) => {
//   try {
//     const { name, price, image, description } = req.body;
//     const updatedProduct = await Product.findByIdAndUpdate(
//       req.params.id,
//       { name, price, image, description },
//       { new: true }
//     );

//     if (!updatedProduct) return res.status(404).json({ message: "Product not found" });

//     res.json(updatedProduct);
//   } catch (error) {
//     res.status(500).json({ message: "Error updating product" });
//   }
// };

// // Delete product (Admin only)
// export const deleteProduct = async (req, res) => {
//   try {
//     await Product.findByIdAndDelete(req.params.id);
//     res.json({ message: "Product deleted successfully" });
//   } catch (error) {
//     res.status(500).json({ message: "Error deleting product" });
//   }
// };


// import Product from "../models/productModel.js";

// // Fetch all products
// export const getProducts = async (req, res) => {
//   try {
//     const products = await Product.find();
//     res.json(products);
//   } catch (error) {
//     res.status(500).json({ message: "Error fetching products" });
//   }
// };

// // Fetch single product by ID
// export const getProductById = async (req, res) => {
//   try {
//     const product = await Product.findById(req.params.id);
//     if (!product) return res.status(404).json({ message: "Product not found" });
//     res.json(product);
//   } catch (error) {
//     res.status(500).json({ message: "Error fetching product" });
//   }
// };

// // Add a product (Admin only)
// export const addProduct = async (req, res) => {
//   try {
//     const { name, price, image, description } = req.body;

//     if (!image) {
//       return res.status(400).json({ message: "Image URL is required" });
//     }

//     const newProduct = new Product({ name, price, image, description });
//     await newProduct.save();
//     res.status(201).json(newProduct);
//   } catch (error) {
//     res.status(500).json({ message: "Error adding product" });
//   }
// };

// // Update product (Admin only)
// export const updateProduct = async (req, res) => {
//   try {
//     const { name, price, image, description } = req.body;

//     if (!image) {
//       return res.status(400).json({ message: "Image URL is required" });
//     }

//     const updatedProduct = await Product.findByIdAndUpdate(
//       req.params.id,
//       { name, price, image, description },
//       { new: true }
//     );

//     if (!updatedProduct) return res.status(404).json({ message: "Product not found" });

//     res.json(updatedProduct);
//   } catch (error) {
//     res.status(500).json({ message: "Error updating product" });
//   }
// };

// // Delete product (Admin only)
// export const deleteProduct = async (req, res) => {
//   try {
//     await Product.findByIdAndDelete(req.params.id);
//     res.json({ message: "Product deleted successfully" });
//   } catch (error) {
//     res.status(500).json({ message: "Error deleting product" });
//   }
// };

import Product from "../models/productModel.js";
import Order from "../models/Order.js"; // Import Order model

// Fetch all products
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ message: "Error fetching products" });
  }
};

// Fetch single product by ID
export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json(product);
  } catch (error) {
    console.error("Error fetching product:", error);
    res.status(500).json({ message: "Error fetching product" });
  }
};

// Add a product (Admin only)
export const addProduct = async (req, res) => {
  try {
    const { name, price, image, description } = req.body;

    if (!name || !price || !image) {
      return res.status(400).json({ message: "Name, price, and image are required" });
    }

    const newProduct = new Product({ name, price, image, description });
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    console.error("Error adding product:", error);
    res.status(500).json({ message: "Error adding product" });
  }
};

// Update product (Admin only)
export const updateProduct = async (req, res) => {
  try {
    const { name, price, image, description } = req.body;

    if (!name || !price || !image) {
      return res.status(400).json({ message: "Name, price, and image are required" });
    }

    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      { name, price, image, description },
      { new: true }
    );

    if (!updatedProduct) return res.status(404).json({ message: "Product not found" });

    res.json(updatedProduct);
  } catch (error) {
    console.error("Error updating product:", error);
    res.status(500).json({ message: "Error updating product" });
  }
};

// Delete product (Admin only) - Prevent order deletion issue
export const deleteProduct = async (req, res) => {
  try {
    const productId = req.params.id;

    // Check if the product exists
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    // Remove product reference from orders instead of deleting the order
    await Order.updateMany(
      { "products.productId": productId },
      { $set: { "products.$.name": product.name, "products.$.price": product.price, "products.$.image": product.image, "products.$.productId": null } }
    );

    // Delete the product
    await Product.findByIdAndDelete(productId);

    res.json({ message: "Product deleted successfully, orders remain intact" });
  } catch (error) {
    console.error("Error deleting product:", error);
    res.status(500).json({ message: "Error deleting product" });
  }
};


