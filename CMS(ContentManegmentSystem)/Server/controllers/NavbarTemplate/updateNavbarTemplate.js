const NavbarTemplate = require("../../models/NavbarTemplate");

const updateNavbarTemplate = async (req, res) => {
  try {

    const updated = await NavbarTemplate.findByIdAndUpdate(
      req.params.NavbarId,
      req.body,
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ message: "Navbar not found" });
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

module.exports = updateNavbarTemplate;