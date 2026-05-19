const Menu = require("../../models/Menu");
const ThemeTemplate = require("../../models/ThemeTemplate");

const updateMenu = async (req, res) => {
  try {
    const { MenuId } = req.params;

    const template = await ThemeTemplate.findOne({ checked: true })
    
    if (!template) return res.status(400).json({ success: false, message: "please Select Template" });
    
    const updatedMenu = await Menu.findByIdAndUpdate(
      MenuId,
      {
        ...req.body,
        theme:template._id
      },
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