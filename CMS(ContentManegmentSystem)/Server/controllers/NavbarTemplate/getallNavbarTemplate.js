const NavbarTemplate = require("../../models/NavbarTemplate");

const getallNavbarTemplate = async (req, res) => {
  try {
    const navbars = await NavbarTemplate.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      data: navbars,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = getallNavbarTemplate;