const Menu = require("../../models/Menu");

const deleteMenu = async (req, res) => {
  try {
    const { MenuId } = req.params;

    const deletedMenu = await Menu.findByIdAndDelete(MenuId);

    if (!deletedMenu) {
      return res.status(404).json({
        success: false,
        message: "Menu not found"
      });
    }

    res.json({
      success: true,
      message: "Menu deleted successfully"
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

module.exports = deleteMenu;