const NavbarTemplate = require("../../models/NavbarTemplate");

const updateNavbarTemplate = async (req, res) => {
  try {
    const { name, navbar } = req.body;

    const updated = await NavbarTemplate.findByIdAndUpdate(
      req.params.NavbarId,
      { name, navbar },
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
      message: error.message,
    });
  }
};

module.exports = updateNavbarTemplate;