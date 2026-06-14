const WEB = require("../../../models/WEB");
const Post = require("../../../models/Post");

const getSinglePopularPost = async (req, res) => {
    try {
        const { website } = req.params;
        const web = await WEB.findOne({ website })
        if (!web) return res.status(404).json({
            success: false,
            message: "website not found"
        });
        const post = await Post.findOne({ auther: web.admin })
            .populate("category", "title")
            .sort({ createdAt: -1 });

        if (!post) {
            return res.status(404).json({
                success: false,
                message: "Post not found"
            });
        }

        res.status(200).json({
            success: true,
            post
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error fetching post",
            error: error.message
        });
    }
};

module.exports = getSinglePopularPost