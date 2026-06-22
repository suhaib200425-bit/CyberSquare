const PageCategory = require("../../models/PageCategory");

const getAllSections = async (req, res) => {
  try {
    const categories = await PageCategory.find()
      .sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      count: categories.length,
      section: categories
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Server Error"
    });
  }
};

module.exports =  getAllSections ;