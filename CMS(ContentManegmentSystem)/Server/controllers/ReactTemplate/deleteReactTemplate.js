const ReactTemplate = require("../../models/ReactTemplate");

const deleteReactTemplate = async (req, res) => {
  try {
    const deleted = await ReactTemplate.findByIdAndDelete(req.params.ReactTemplateId);

    if (!deleted) {
      return res.status(404).json({ message: "Template not found" });
    }

    res.status(200).json({
      success: true,
      message: "Template deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = deleteReactTemplate;