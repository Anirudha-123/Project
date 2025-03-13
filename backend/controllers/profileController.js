import User from "../models/User.js"; // Ensure you have a User model

// Fetch user profile
export const getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password"); // Exclude password field
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// Update user profile
export const updateProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Update profile fields
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    user.address = req.body.address || user.address;
    user.phone = req.body.phone || user.phone;

    const updatedUser = await user.save();
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};


// import User from "../models/User.js"; // Ensure you have a User model

// // ✅ Fetch user profile
// export const getProfile = async (req, res) => {
//   try {
//     const user = await User.findById(req.user.id).select("-password"); // Exclude password field
//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }
//     res.json(user);
//   } catch (error) {
//     res.status(500).json({ message: "Server error", error });
//   }
// };

// // ✅ Update user profile
// export const updateProfile = async (req, res) => {
//   try {
//     const user = await User.findById(req.user.id);
//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     // Only update necessary fields
//     user.name = req.body.name || user.name;
//     user.address = req.body.address || user.address;
//     user.phone = req.body.phone || user.phone;

//     const updatedUser = await user.save();
//     res.json({ message: "Profile updated successfully", user: updatedUser });
//   } catch (error) {
//     res.status(500).json({ message: "Server error", error });
//   }
// };

