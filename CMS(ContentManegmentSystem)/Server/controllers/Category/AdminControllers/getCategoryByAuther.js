const Category = require("../../../models/Category");
const ThemeTemplate = require("../../../models/ThemeTemplate");
const WEB = require("../../../models/WEB");

const getCategoryByAuther = async (req, res) => {
    try {
        let { page = 1, limit = 6 } = req.query;

        const admin = req.user

        page = parseInt(page);
        limit = parseInt(limit);

        const skip = (page - 1) * limit;
        const activetemplate = await WEB.findOne({ admin: admin.id })
        if (!activetemplate) {
            return res.status(404).json({
                success: false,
                message: "No active template found",
            });
        }

        const total = await Category.countDocuments({ auther: admin._id });

        const categories = await Category.find({
            auther: admin.id
        })
            .sort({ createdAt: -1 }) // latest first
            .skip(skip)
            .limit(limit);

        res.status(200).json({
            success: true,
            total,
            currentPage: page,
            totalPages: Math.ceil(total / limit),
            data: categories
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            message: "server error",
            error: err.message
        });
    }
};

module.exports = getCategoryByAuther