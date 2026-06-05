const NavbarTemplate = require("../../models/NavbarTemplate");
const WEB = require("../../models/WEB");

const getallNavbarTemplate = async (req, res) => {
  try {
    const admin = req.user
    
    if (admin.role !== "admin")
      return res.status(404).json({ message: "Read only for admin" });
    const navbars = await NavbarTemplate.find().sort({ createdAt: -1 });
    const activeBar = await WEB.findOne({admin:admin.id}).populate("navbar")
      res.status(200).json({
        success: true,
        data: navbars,
        active:activeBar
      });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = getallNavbarTemplate;