const Post = require("../../../models/Post");
const Category = require("../../../models/Category");
const WEB = require("../../../models/WEB");

const getSingleCategoryPosts = async (req, res) => {
  try {
    const { website } = req.params;
    const { categoryname, limit } = req.query;
    const filterObj = {}
    if (categoryname)
      filterObj.title = categoryname
    const web = await WEB.findOne({ website });
    if (!web) {
      return res.status(404).json({
        success: false,
        message: "WEBSITE not found"
      });
    }
    filterObj.auther = web.admin

    const categoryItem = await Category
    .findOne(filterObj)
      .sort({ createdAt: -1 });

    if (!categoryItem) {
      return res.status(404).json({
        success: false,
        message: "Category not found"
      });
    }

    const posts = await Post.find({
      auther: web.admin,
      category: categoryItem._id
    })
            .select("-content -updatedAt -__v")
      .populate("category","title slug")
      .sort({ createdAt: -1 })
      .limit(Number(limit) || 6);

    res.status(200).json({
      success: true,
      data: {
        categoryName: categoryItem.title,
        posts
      }
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

module.exports = getSingleCategoryPosts;