const FooterTemplate = require("../../models/FooterTemplate");
const NavbarTemplate = require("../../models/NavbarTemplate");

const updateFooterTemplate = async (req, res) => {
  try {

    const updated = await FooterTemplate.findByIdAndUpdate(
      req.params.FooterId,
      req.body,
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ message: "Footer not found" });
    }

    res.status(200).json({
      success: true,
      data: updated,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message:"server error",
      error: error.message,
    });
  }
};

module.exports = updateFooterTemplate;