const Category = require("../../models/Category");
const WEB = require("../../models/WEB");

const getCategoryByWebsite = async (req, res) => {
    try {
        const { website } = req.query;

        if (!website) {
            return res.status(400).json({
                success: false,
                message: "Website is required",
            });
        }

        const web = await WEB.findOne({ website });

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
            .sort({ createdAt: -1 });

        return res.status(200).json({
            success: true,
            data: categories,
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

module.exports = getCategoryByWebsite