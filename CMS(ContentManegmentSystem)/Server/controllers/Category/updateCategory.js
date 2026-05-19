const Category = require("../../models/Category");
const ThemeTemplate = require("../../models/ThemeTemplate");

const updateCategory = async (req, res) => {
  try {
    const { CategoryId } = req.params;


    const template = await ThemeTemplate.findOne({ checked: true })

    if (!template) return res.status(400).json({ success: false, message: "please Select Template" });

    const updatedPage = await Category.findByIdAndUpdate(
      CategoryId,
      {
        ...req.body,
        theme: template._id
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