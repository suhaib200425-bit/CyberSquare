const Page = require("../../models/Page");

const updatePage = async (req, res) => {
  try {
    const { PageId } = req.params;

    const updatedPage = await Page.findByIdAndUpdate(
      PageId,
      req.body,
      {
        new: true,        // updated data return cheyyum
        runValidators: true // schema validation apply cheyyum
      }
    );

    if (!updatedPage) {
      return res.status(404).json({ success:false,message: "Page not found" });
    }

    res.json({data:updatedPage,success:true});

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports =updatePage