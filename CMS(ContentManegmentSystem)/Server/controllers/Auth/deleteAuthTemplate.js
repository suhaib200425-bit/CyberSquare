const AuthTemplate = require("../../models/AuthTemplate");

const deleteAuthTemplate = async (req, res) => {
  try {
    const deleted = await AuthTemplate.findByIdAndDelete(req.params.AuthTemplateId);

    if (!deleted) {
      return res.status(404).json({ message: "Navbar not found" });
    }

    res.status(200).json({
      success: true,
      message: "AuthTemplate deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = deleteAuthTemplate;