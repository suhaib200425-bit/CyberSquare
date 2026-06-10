const Category = require("../../../models/Category");
const WEB = require("../../../models/WEB");

const topPostCategories = async (req, res) => {
    try {
        let { limit = 4 } = req.query;
        const { website } = req.params
        limit = parseInt(limit);

        const CurrentWeb = await WEB.findOne({ website })
        if (!CurrentWeb) {
            return res.status(404).json({
                success: false,
                message: "No active template found",
            });
        }

        const categories = await Category.aggregate([
            {
                $match: {
                    theme: CurrentWeb.theme,
                    auther: CurrentWeb.admin
                }
            },
            {
                $addFields: {
                    totalPosts: { $size: "$posts" }
                }
            },
            {
                $sort: {
                    totalPosts: -1
                }
            }
        ]).limit(limit);;

        res.status(200).json({
            success: true,
            categories
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            message: "server error",
            error: err.message
        });
    }
};

module.exports = topPostCategories