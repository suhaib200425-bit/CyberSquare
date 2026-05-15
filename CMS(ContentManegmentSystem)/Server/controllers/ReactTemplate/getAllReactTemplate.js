const ReactTemplate = require("../../models/ReactTemplate");

const getAllReactTemplate = async (req, res) => {
  try {
    // query params
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    const skip = (page - 1) * limit;

    // data fetch
    const data = await ReactTemplate.find()
      .sort({ updatedAt: -1 }) // latest first
      .skip(skip)
      .limit(limit);

    // total count
    const total = await ReactTemplate.countDocuments();

    res.json({
      success: true,
      page,
      totalPages: Math.ceil(total / limit),
      totalItems: total,
      data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports =  getAllReactTemplate;