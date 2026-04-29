const Menu = require("../../models/Menu");

const getMenus = async (req, res) => {
  try {
    const menus = await Menu.find()
      .populate("page", "title slug"); // page details venel

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