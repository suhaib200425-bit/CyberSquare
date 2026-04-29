const Post = require("../../models/Post");

const getPostById = async (req, res) => {
  try {
      const { PostId } = req.params;
  
      const post = await Post.findById(PostId)
      .populate("category", "title");

    if (!post) {
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
      data: post
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching post"
    });
  }
};

module.exports = getPostById