const Post = require("../../models/Post");

const relatedArticlesById = async (req, res) => {
    try {
        let { page = 1, limit = 6 } = req.query;
        const { PostId } = req.params;

        page = parseInt(page);
        limit = parseInt(limit);

        const skip = (page - 1) * limit;

        // Current post
        const currentPost = await Post.findById(PostId);

        if (!currentPost) {
            return res.status(404).json({
                success: false,
                message: "Post not found"
            });
        }

        // Related posts by same category
        const posts = await Post.find({
            status: "Published",
            category: currentPost.category,
            _id: { $ne: PostId } // current post remove
        })
            .populate("category", "title")
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(limit);

        const total = await Post.countDocuments({
            status: "Published",
            category: currentPost.category,
            _id: { $ne: PostId }
        });

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

module.exports = relatedArticlesById;