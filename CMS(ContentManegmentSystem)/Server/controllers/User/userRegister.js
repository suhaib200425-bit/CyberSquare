const User = require("../../models/User");
const bcrypt = require("bcryptjs");

const userRegister = async (req, res) => {
    try {

        const { username, email, password,isVerified,role } = req.body;

        // CHECK EMPTY
        if (!username || !email || !password) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });
        }

        // CHECK USER EXIST
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "User already exists"
            });
        }

        // HASH PASSWORD
        const hashedPassword = await bcrypt.hash(password, 10);

        // CREATE USER
        const user = await User.create({
            username,
            email,
            password: hashedPassword,
            isVerified,
            role
        });

        res.status(201).json({
            success: true,
            message: "User registered successfully",
            user
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};

module.exports = userRegister;