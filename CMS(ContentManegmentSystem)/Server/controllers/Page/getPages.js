const Page = require("../../models/Page");
const Visit = require("../../models/Visit");

const getPages = async (req, res) => {
  try {
    let { page = 1, limit = 20 } = req.query;

    page = parseInt(page);
    limit = parseInt(limit);

    const skip = (page - 1) * limit;

    const total = await Page.countDocuments();

    const pages = await Page.find()
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
      error:err.message
    });
  }
};

module.exports = getPages