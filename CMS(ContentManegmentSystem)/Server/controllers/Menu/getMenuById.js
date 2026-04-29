const Menu = require("../../models/Menu");

const getMenuById = async (req, res) => {
  try {
    const { MenuId } = req.params;

    const menu = await Menu.findById(MenuId)
      .populate("page", "title slug"); // optional

    if (!menu) {
      return res.status(404).json({
        success: false,
        message: "Menu not found"
      });
    }

    res.json({
      success: true,
      data: menu
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

module.exports = getMenuById;