const NavbarTemplate = require("../../models/NavbarTemplate");

const getCheckedNavbarTemplate = async (req, res) => {
  try {
    const navbar = await NavbarTemplate.findOne({checked:true});

    res.status(200).json({
      success: true,
      data: navbar,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = getCheckedNavbarTemplate;