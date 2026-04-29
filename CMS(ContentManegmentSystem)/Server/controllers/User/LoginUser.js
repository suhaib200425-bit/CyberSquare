const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../../models/User"); // adjust path

exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // 🔍 Check user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }

        // 🔐 Check if verified (important if using OTP)
        // if (!user.isVerified) {
        //     return res.status(400).json({ error: "Please verify your email first" });
        // }

        // 🔑 Compare password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ error: "Invalid password" });
        }

        // 🎟 Create JWT Token
        const token = jwt.sign(
            { id: user._id, email: user.email,username:user.username || '' },
            process.env.JWT_TOKEN, // ⚠️ move to .env
            { expiresIn: "1d" }
        );

        // ✅ Success response
        res.json({
            message: "Login successful",
            token,
            user
        });


    } catch (err) {
        res.status(500).json({ message: "Server error",error:err.message });
    }
};
