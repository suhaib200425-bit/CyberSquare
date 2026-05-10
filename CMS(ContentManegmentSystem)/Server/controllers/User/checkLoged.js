const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../../models/User"); // adjust path
const Visit = require("../../models/Visit");

exports.checkLoged = async (req, res) => {
    try {
        const { id, email } = req.user;
        
        // 🔍 Check user exists
        const user = await User.findById(id);
        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }
        delete user.passowrd

        // ✅ Success response
        res.json({
            message: "Loged successful",
            user: user
        });


    } catch (err) {
        res.status(500).json({ message: "Server error", error: err.message });
    }
};
