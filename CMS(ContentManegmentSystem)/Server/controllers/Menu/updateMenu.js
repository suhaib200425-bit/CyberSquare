const Menu = require("../../models/Menu");

const updateMenu = async (req, res) => {
  try {
    const { MenuId } = req.params;

    const updatedMenu = await Menu.findByIdAndUpdate(
      MenuId,
      req.body,
      {
        returnDocument: "after",   // ✅ updated data return
        runValidators: true
      }
    );

    if (!updatedMenu) {
      return res.status(404).json({
        success: false,
        message: "Menu not found"
      });
    }

    res.json({
      success: true,
      data: updatedMenu
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

module.exports =updateMenu