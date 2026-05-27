const Category = require("../../models/Category");
const ThemeTemplate = require("../../models/ThemeTemplate");
const WEB = require("../../models/WEB");

const updateCategory = async (req, res) => {
  try {
    const { CategoryId } = req.params;
     
    const activetemplate = await WEB.findOne({ admin: req.user.id })
        if (!activetemplate) {
          return res.status(404).json({
            success: false,
            message: "No active template found",
          });
        }
    const updatedPage = await Category.findByIdAndUpdate(
      CategoryId,
      {
        ...req.body
      },
      {
        new: true,        // updated data return cheyyum
        runValidators: true // schema validation apply cheyyum
      }
    );

    if (!updatedPage) {
      return res.status(404).json({ success: false, message: "Page not found" });
    }

    res.json({ data: updatedPage, success: true });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = updateCategory