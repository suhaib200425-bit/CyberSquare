const Page = require("../../models/Page");
const ThemeTemplate = require("../../models/ThemeTemplate");

const updatePage = async (req, res) => {
  try {
    const { PageId } = req.params;
    const template = await ThemeTemplate.findOne({ checked: true })

    if (!template) return res.status(400).json({ success: false, message: "please Select Template" });

    const updatedPage = await Page.findByIdAndUpdate(
      PageId,
      {
        ...req.body,
        theme:template._id
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
    res.status(500).json({ 
      success:false,
      message:error.message,
      error: error.message
     });
  }
};

module.exports = updatePage