const FooterTemplate = require("../../models/FooterTemplate");

const getallFooterTemplate = async (req, res) => {
  try {
    const footers = await FooterTemplate.find().sort({ updatedAt: -1 });

    res.status(200).json({
      success: true,
      data: footers,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "server error",
      error: error.message,
    });
  }
};

module.exports = getallFooterTemplate;