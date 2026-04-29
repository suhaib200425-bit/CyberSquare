
const Post = require("../../models/Post");

const deletePost = async (req, res) => {
    try {
        const { PostId } = req.params;

        const deletedPost = await Post.findByIdAndDelete(PostId);

        if (!deletedPost) {
            return res.status(404).json({ success: false, message: "Post not found" });
        }

        res.status(200).json({
            success: true,
            message: "Post deleted successfully",
            data: deletedPost
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Server error", error: error.response?.data || error.message });
    }
};

module.exports = deletePost;