const Post = require("../../models/Post");

const relatedCategoryById = async (req, res) => {
    try {
        let { page = 1, limit = 6 } = req.query;
        const { CategoryId } = req.params;

        page = parseInt(page);
        limit = parseInt(limit);

        const skip = (page - 1) * limit;


        let filter = { status: "Published" }
        if (CategoryId) filter["category"] = CategoryId
        const total = await Post.countDocuments(filter);
        const posts = await Post.find(filter).populate("category")
        res.status(200).json({
            success: true,
            currentPage: page,
            totalPages: Math.ceil(total / limit),
            totalPosts: total,
            data: posts
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message,
            message: "Pagination error"
        });
    }
};

module.exports = relatedCategoryById;