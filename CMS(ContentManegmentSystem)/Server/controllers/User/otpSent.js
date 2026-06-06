const otpStore = new Map();
const nodemailer = require("nodemailer");
const bcrypt = require("bcrypt")
const crypto = require("crypto");
const { transporter } = require("../../config/NodeMail");
const User = require('../../models/User');
const WEB = require("../../models/WEB");
exports.SentOtp = async (req, res) => {
    try {
        const { email, password, confirmPassword } = req.body;

        if (!email || !confirmPassword || !password) {
            return res.status(400).json({ message: "all field is required" });
        }
        if (confirmPassword !== password) res.status(400).json({ message: "Passowrd Is Not Match" });

        const user = await User.findOne({ email })
        if (user) {
            return res.status(400).json({ message: "User Already found" });
        }
        // 🔢 Generate 4-digit OTP
        const generateOTP = () => Math.floor(1000 + Math.random() * 9000).toString();
        const otp = generateOTP();

        // Store hashed OTP (security)
        // const hashedOtp = crypto.createHash('suhaib2004').update(otp).digest("hex");

        otpStore.set(email, {
            otp: otp,
            email,
            password,
            expires: Date.now() + 5 * 60 * 1000, // 5 minutes
            attempts: 0
        });


        await transporter.sendMail({
            from: process.env.EMAIL,
            to: email,
            subject: "Your OTP Code",
            html: `<h2>Your OTP is: ${otp}</h2><p>Valid for 5 minutes</p>`
        });

        res.json({ message: "OTP sent successfully" });

    } catch (err) {
        res.status(500).json({ message: "Failed to send OTP", error: err.message });
    }
}


exports.verifyOtp = async (req, res) => {
    try {
        console.log(req.body);

        const { email, password, otp, username, admin, websiteName } = req.body;

        const record = otpStore.get(email);

        if (!record) {
            return res.status(400).json({ message: "No OTP found" });
        }

        if (!websiteName) {
            return res.status(400).json({ message: "Website Name Is Requierd" });
        }
        // Expiry check
        if (Date.now() > record.expires) {
            otpStore.delete(email);
            return res.status(400).json({ message: "OTP expired" });
        }

        // Attempt limit (max 5 tries)
        if (record.attempts >= 5) {
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
        const salt = await bcrypt.genSalt(10);
        hashingpassword = await bcrypt.hash(password, salt);


        const newUser = new User({
            email,
            password: hashingpassword,
            username,
            role: admin ? "admin" : "user"
        });

        if (admin) await WEB.create({ admin: newUser._id, website: websiteName })

        const savedUser = await newUser.save();
        // Success
        otpStore.delete(email);

        res.json({ message: "OTP verified successfully", user: savedUser });
    } catch (error) {

        res.json({ message: "OTP verified Faild", error: error.message });
    }
}