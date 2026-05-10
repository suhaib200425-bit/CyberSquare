const Post = require('../../models/Post')
const getPosts = async (req, res) => {
  try {
    let { page = 1, limit = 6 } = req.query;

    page = parseInt(page);
    limit = parseInt(limit);

    const skip = (page - 1) * limit;

    const posts = await Post.find({
      // status:"Published"
    })
      .populate("category", "title")
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    const total = await Post.countDocuments();

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
      error:error.message,
      message: "Pagination error"
    });
  }
};

module.exports =getPosts