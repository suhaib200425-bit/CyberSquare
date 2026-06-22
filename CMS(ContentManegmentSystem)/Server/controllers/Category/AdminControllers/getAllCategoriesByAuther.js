const Category = require("../../../models/Category");
const WEB = require("../../../models/WEB");

const getAllCategoriesByAuther = async (req, res) => {
    try {
        const admin= req.user;
const web = await WEB.findOne({ admin: admin.id });
        if (!web) {
            return res.status(400).json({
                success: false,
                message: "Website Name not found",
            });
        }

        const query = {
            auther: web.admin,
        };

        const totalCategories = await Category.countDocuments(query);

        const categories = await Category.find(query)
        .select("title slug")
            .sort({ createdAt: -1 });

        return res.status(200).json({
            success: true,
            categories: categories,
            totalCategories,
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error fetching categories",
            error: error.message,
        });
    }
};

module.exports = getAllCategoriesByAuther