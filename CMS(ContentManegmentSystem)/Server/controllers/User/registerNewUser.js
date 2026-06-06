const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../../models/User"); // adjust path
const WEB = require("../../models/WEB");
const otpStore = new Map();
const { transporter } = require("../../config/NodeMail");


exports.sendRegistrationOTP = async (req, res) => {
    try {
        const { email, password, username } = req.body;
        const { website } = req.params

        if (!email) return res.status(400).json({ message: "Email is not found" });
        if (!password) return res.status(400).json({ message: "Password is not found" });
        if (!username) return res.status(400).json({ message: "Username is not found" });

        const web = await WEB.findOne({ website })
        if (!web) return res.status(400).json({ message: "WebPage is not found" });

        // 🔍 Check user exists
        const user = await User.findOne({ email, web: web._id });
        if (user) {
            return res.status(400).json({ message: "Email id already used !" });
        }

        // 🔢 Generate 4-digit OTP
        const generateOTP = () => Math.floor(1000 + Math.random() * 9000).toString();
        const otp = generateOTP();

        //password hashing 
        const hashedPassword = await bcrypt.hash(password, 10);

        otpStore.set(email, {
            otp: otp,
            email,
            username,
            web: web._id,
            password: hashedPassword,
            expires: Date.now() + 2 * 60 * 1000, // 5 minutes
            attempts: 0
        });

        await transporter.sendMail({
            from: process.env.EMAIL,
            to: email,
            subject: "Your OTP Code",
            html: `<h2>Your OTP is: ${otp}</h2><p>Valid for 5 minutes</p>`
        });

        res.json({ message: "OTP sent successfully" });


        // create new user for website
        const newUser = await User.create({ email, password: hashedPassword, usename, web: web._id });

        // ✅ Success response
        res.json({
            message: "Registretion Completed Successful",
            newUser
        });
    } catch (err) {
        res.status(500).json({ message: "Server error", error: err.message });
    }
};


exports.verifyRegistrationOTP = async (req, res) => {
    try {
        console.log(req.body);

        const { email, otp } = req.body;
        const { website } = req.params

        const record = otpStore.get(email);

        if (!record) {
            return res.status(400).json({ message: "No OTP found" });
        }

        // Expiry check
        if (Date.now() > record.expires) {
            otpStore.delete(email);
            return res.status(400).json({ message: "OTP expired" });
        }

        // Attempt limit (max 3 tries)
        if (record.attempts >= 3) {
            otpStore.delete(email);
            return res.status(400).json({ error: "Too many attempts" });
        }

        // const hashedInput = crypto
        //     .createHash("suhaib2004")
        //     .update(otp)
        //     .digest("hex");

        if (otp != record.otp) {
            return res.status(400).json({ message: "Invalid OTP", otp, record: record.otp.otp });
        }


        const newUser = new User({
            email: record.email,
            password: record.password,
            username: record.username,
            role: "user",
            web: record.web
        });

        const savedUser = await newUser.save();
        // Success
        otpStore.delete(email);

        res.json({ message: "OTP verified successfully", user: savedUser });
    } catch (error) {

        res.json({ message: "OTP verified Faild", error: error.message });
    }
}