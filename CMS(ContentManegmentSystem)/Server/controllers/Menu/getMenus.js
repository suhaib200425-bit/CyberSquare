const Menu = require("../../models/Menu");
const ThemeTemplate = require("../../models/ThemeTemplate");
const WEB = require("../../models/WEB");

const getMenus = async (req, res) => {
  try {
    const activetemplate = await WEB.findOne({ admin: req.user.id })
    if (!activetemplate) {
      return res.status(404).json({
        success: false,
        message: "No active template found",
      });
    }
    const menus = await Menu.find({
      auther: activetemplate.admin,
      theme: activetemplate.theme
    })
      .populate("page", "title slug") // page details venel
      .populate("theme")
      .sort({ updatedAt: -1 });

    res.json({
      success: true,
      data: menus
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

module.exports = getMenus