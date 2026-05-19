const Menu = require("../../models/Menu");
const ThemeTemplate = require("../../models/ThemeTemplate");

const getMenus = async (req, res) => {
  try {

    const template = await ThemeTemplate.findOne({ checked: true })

    if (!template) return res.status(400).json({ success: false, message: "please Select Template" });

    const menus = await Menu.find({
      theme:template._id
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