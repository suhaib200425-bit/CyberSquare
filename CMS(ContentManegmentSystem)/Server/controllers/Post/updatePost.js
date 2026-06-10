
const Category = require("../../models/Category");
const Post = require("../../models/Post");

const updatePost = async (req, res) => {
  try {
    const { PostId } = req.params;

    const updatedPost = await Post.findByIdAndUpdate(
      PostId,
      req.body,
      {
        new: true,        // updated data return cheyyum
        runValidators: true // schema validation apply cheyyum
      }
    );
    await Category.findByIdAndUpdate(
      updatedPost.category,
      {
        $addToSet: {
          posts: updatedPost._id
        }
      },
      { new: true }
    );

    if (!updatedPost) {
      return res.status(404).json({ success: false, message: "Post not found" });
    }

    res.json({ data: updatedPost, success: true });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = updatePost