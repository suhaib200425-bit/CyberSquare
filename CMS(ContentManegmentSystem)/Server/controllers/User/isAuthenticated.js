const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../../models/User"); // adjust path
const WEB = require("../../models/WEB");

exports.isAuthenticated = async (req, res) => {
    try {
        const {email} = req.user
        const { website } = req.params

        const web = await WEB.findOne({ website })
        if (!web) return res.status(400).json({ message: "WebPage is not found" });

        // 🔍 Check user exists
        const user = await User.findOne({ email, web: web._id });
        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }

        // ✅ Success response
        res.json({
            message: "User Logede successful",
        });
    } catch (err) {
        res.status(500).json({ message: "Server error", error: err.message });
    }
};
