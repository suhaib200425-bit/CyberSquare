const Template = require("../../models/Template");

 const getTemplates = async (req, res) => {
  try {
    // query params
    let page = parseInt(req.query.page) || 1;
    let limit = parseInt(req.query.limit) || 5;

    // skip calculation
    const skip = (page - 1) * limit;

    // total count
    const total = await Template.countDocuments();

    // fetch data
    const templates = await Template.find()
      .skip(skip)
      .limit(limit)
      .sort({ createdAt: -1 });

    res.status(200).json({
      total,
      page,
      pages: Math.ceil(total / limit),
      count: templates.length,
      data: templates
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Server Error"
    });
  }
};
module.exports=getTemplates