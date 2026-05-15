const FooterTemplate = require("../../models/FooterTemplate");


const deleteFooterTemplate = async (req, res) => {
  try {
    const deleted = await FooterTemplate.findByIdAndDelete(req.params.FooterId);

    if (!deleted) {
      return res.status(404).json({ message: "Footer not found" });
    }

    res.status(200).json({
      success: true,
      message: "Footer deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "server error",
      error:error.message
    });
  }
};

module.exports = deleteFooterTemplate;