const WEB = require("../../../models/WEB");
const Post = require("../../../models/Post");

const getPopularPosts = async (req, res) => {
    try {
        const { website } = req.params;
        const { limit } = req.query ;
        const web = await WEB.findOne({ website })
        if (!web) return res.status(404).json({
            success: false,
            message: "website not found"
        });
        const posts = await Post.find({ auther: web.admin })
            .populate("category", "title")
            .sort({ createdAt: -1 })
            .limit(limit || 1);

        if (!posts) {
            return res.status(404).json({
                success: false,
                message: "Post not found"
            });
        }

        // 👇 increase views count
        // post.views += 1
        // await post.save();

        res.status(200).json({
            success: true,
            posts
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error fetching post",
            error: error.message
        });
    }
};

module.exports = getPopularPosts