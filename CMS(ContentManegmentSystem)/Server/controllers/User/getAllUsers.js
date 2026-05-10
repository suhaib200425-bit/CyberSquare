const User = require("../../models/User");

const getAllUsers = async (req, res) => {

    try {

        // PAGE NUMBER
        const page = parseInt(req.query.page) || 1;

        // LIMIT
        const limit = parseInt(req.query.limit) ||6;

        // SKIP
        const skip = (page - 1) * limit;

        // TOTAL USERS
        const totalUsers = await User.countDocuments();

        // GET USERS
        const users = await User.find()
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(limit)
            .select("-password");

        // TOTAL PAGES
        const totalPages = Math.ceil(totalUsers / limit);

        res.status(200).json({
            success: true,
            currentPage: page,
            totalPages,
            totalUsers,
            users
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

module.exports = getAllUsers;