const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../../models/User"); // adjust path
const WEB = require("../../models/WEB");
const Visit = require("../../models/Visit");

exports.logedUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const { website } = req.params

        // identify the site
        const web = await WEB.findOne({ website })
        // 🔍 Check user exists
        const user = await User.findOne({ email, web: web._id });
        console.log(user);
        if (!user) return res.status(400).json({ message: "User not found" });


        // 🔐 Check if verified (important if using OTP)
        // if (!user.isVerified) {
        //     return res.status(400).json({ error: "Please verify your email first" });
        // }

        // 🔑 Compare password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid password" });
        }

        // 🎟 Create JWT Token
        const token = jwt.sign(
            { id: user._id, email: user.email, username: user.username || '' },
            process.env.JWT_SECRET, // ⚠️ move to .env
            { expiresIn: "1d" }
        );

        const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000);
        
        const existingVisit = await Visit.findOne({
            visiter: user._id,
            web: web._id,
            visitedAt: { $gte: oneHourAgo }
        });

        if (!existingVisit) {
            await Visit.create({
                visiter: user._id,
                web: web._id,
            });
        }

        // ✅ Success response
        res.json({
            message: "Login successful",
            token,
            user
        });


    } catch (err) {
        res.status(500).json({ message: "Server error", error: err.message });
    }
};
