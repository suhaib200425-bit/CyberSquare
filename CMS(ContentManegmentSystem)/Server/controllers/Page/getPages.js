const Page = require("../../models/Page");
const ThemeTemplate = require("../../models/ThemeTemplate");
const Visit = require("../../models/Visit");
const WEB = require("../../models/WEB");

const getPages = async (req, res) => {
  try {
    let { page = 1, limit = 20 } = req.query;

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

    const total = await Page.countDocuments({ theme: activeTemaplte.theme, auther: req.user.id,status:"Published" });

    const pages = await Page.find({ theme: activeTemaplte.theme, auther: req.user.id,status:"Published" })
      .select("-sections")
      .sort({ updatedAt: -1 }) // latest first
      .skip(skip)
      .limit(limit);


    res.status(200).json({
      success: true,
      total,
      currentPage: page,
      totalPages: Math.ceil(total / limit),
      data: pages
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: "server Error",
      error: err.message
    });
  }
};

module.exports = getPages