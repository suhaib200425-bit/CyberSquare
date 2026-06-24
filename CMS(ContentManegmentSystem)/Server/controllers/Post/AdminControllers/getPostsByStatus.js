const Page = require("../../../models/Page");
const Post = require("../../../models/Post");
const ThemeTemplate = require("../../../models/ThemeTemplate");
const Visit = require("../../../models/Visit");
const WEB = require("../../../models/WEB");

const getPostsByStatus = async (req, res) => {
  try {
    let { page = 1, limit = 20, state = "Published", search } = req.query;

    page = parseInt(page);
    limit = parseInt(limit);

    const activeTemaplte = await WEB.findOne({ admin: req.user.id })
    if (!activeTemaplte) {
      return res.status(404).json({
        success: false,
        message: "No active template found",
      });
    }

    const skip = (page - 1) * limit;

    const total = await Post.countDocuments({
      auther: activeTemaplte.admin,
      status: state
    });

    const posts = await Post.find({
      auther: activeTemaplte.admin,
      status: state
    })
      .populate("category", "title")
      .populate("auther", "username")
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    res.status(200).json({
      success: true,
      total,
      currentPage: page,
      totalPages: Math.ceil(total / limit),
      data: posts,
      router: "/posts-by-status"
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: "server Error",
      error: err.message
    });
  }
};

module.exports = getPostsByStatus