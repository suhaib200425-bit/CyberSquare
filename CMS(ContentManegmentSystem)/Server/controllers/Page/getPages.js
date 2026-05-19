const Page = require("../../models/Page");
const ThemeTemplate = require("../../models/ThemeTemplate");
const Visit = require("../../models/Visit");

const getPages = async (req, res) => {
  try {
    let { page = 1, limit = 20 } = req.query;

    page = parseInt(page);
    limit = parseInt(limit);

    const template = await ThemeTemplate.findOne({ checked: true })
if (!template) return res.status(400).json({ success: false, message: "please Select Template" });
        

    const skip = (page - 1) * limit;

    const total = await Page.countDocuments({theme:template._id});

    const pages = await Page.find({theme:template._id})
      .select("-sections")
      .sort({ updatedAt: -1 }) // latest first
      .skip(skip)
      .limit(limit);

    //visits
    const oneHourAgo = new Date(
      Date.now() - 60 * 60 * 1000
    );

    const existingVisit = await Visit.findOne({
      ip: req.ip,
      visitedAt: { $gte: oneHourAgo }
    });

    if (!existingVisit) {

      await Visit.create({
        ip: req.ip,
        page: "/"
      });

    }

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