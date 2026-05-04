const Post = require("../../models/Post");

const getPostDefault = async (req, res) => {
  try {

    const post = await Post.findOne({ status:"Default" })
      .populate("category", "title");

    if (!post) {
      return res.status(404).json({
        success: false,
        message: "Post not found"
      });
    }

    // 👇 increase views count
    post.views += 1;
    await post.save();

    res.status(200).json({
      success: true,
      data: post
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching post d",
      error:error.message
    });
  }
};

module.exports = getPostDefault