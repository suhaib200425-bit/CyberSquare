const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../../models/User"); // adjust path
const WEB = require("../../models/WEB");
const Visit = require("../../models/Visit");

exports.isAuthenticated = async (req, res) => {
    try {
        const { email } = req.user
        const { website } = req.params

        const web = await WEB.findOne({ website })
        if (!web) return res.status(400).json({ message: "WebPage is not found" });

        // 🔍 Check user exists
        const user = await User.findOne({ email, web: web._id }).populate("web");

        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }
        // ✅ VISIT 

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
            message: "User Logede successful",
            user
        });
    } catch (err) {
        res.status(500).json({ message: "Server error", error: err.message });
    }
};
