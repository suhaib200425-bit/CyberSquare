const Category = require("../../models/Category");
const ThemeTemplate = require("../../models/ThemeTemplate");

const getCategories = async (req, res) => {
  try {
    let { page = 1, limit = 6 } = req.query;

    page = parseInt(page);
    limit = parseInt(limit);

    const skip = (page - 1) * limit;


    const template = await ThemeTemplate.findOne({ checked: true })

    if (!template) return res.status(400).json({ success: false, message: "please Select Template" });

    const total = await Category.countDocuments({theme:template._id});

    const categories = await Category.find({theme
      :template._id})
      .sort({ createdAt: -1 }) // latest first
      .skip(skip)
      .limit(limit);

    res.status(200).json({
      success: true,
      total,
      currentPage: page,
      totalPages: Math.ceil(total / limit),
      data: categories
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: "server error",
      error:err.message
    });
  }
};

module.exports=getCategories