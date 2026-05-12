const NavbarTemplate = require("../../models/NavbarTemplate");


const deleteNavbarTemplate = async (req, res) => {
  try {
    const deleted = await NavbarTemplate.findByIdAndDelete(req.params.NavbarId);

    if (!deleted) {
      return res.status(404).json({ message: "Navbar not found" });
    }

    res.status(200).json({
      success: true,
      message: "Navbar deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = deleteNavbarTemplate;