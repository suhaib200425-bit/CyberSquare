const Page = require("../../models/Page");
const ThemeTemplate = require("../../models/ThemeTemplate");
const WEB = require("../../models/WEB");

const updatePage = async (req, res) => {
  try {
    const { PageId } = req.params;
    const activetemplate = await WEB.findOne({ admin: req.user.id })
            if (!activetemplate) {
                return res.status(404).json({
                    success: false,
                    message: "No active template found",
                });
            }
    
    const updatedPage = await Page.findByIdAndUpdate(
      PageId,
      {
        ...req.body,
        theme:activetemplate.theme
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