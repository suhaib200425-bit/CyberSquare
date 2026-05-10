
const User = require("../../models/User"); // adjust path

exports.getUserById = async (req, res) => {
    try {
        const { UserId } = req.params;

        // 🔍 Check user exists
        const user = await User.findById(UserId)
        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }

        // 🔐 Check if verified (important if using OTP)
        // if (!user.isVerified) {
        //     return res.status(400).json({ error: "Please verify your email first" });
        // }

        // ✅ Success response
        res.json({
            message: "User Get successful",
            user
        });


    } catch (err) {
        res.status(500).json({ message: "Server error",error:err.message });
    }
};