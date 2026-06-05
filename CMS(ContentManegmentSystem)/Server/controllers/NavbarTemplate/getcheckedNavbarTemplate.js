const NavbarTemplate = require("../../models/NavbarTemplate");
const WEB = require("../../models/WEB");

const getCheckedNavbarTemplate = async (req, res) => {
  try {
    const admin = req.user
    if (admin.role !== "admin")
      return res.status(404).json({ message: "Read with only for admin" });

    const WebNavbar = await WEB.findOne({admin:admin._id}).populate("navbar");

    res.status(200).json({
      success: true,
      data: WebNavbar,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = getCheckedNavbarTemplate;