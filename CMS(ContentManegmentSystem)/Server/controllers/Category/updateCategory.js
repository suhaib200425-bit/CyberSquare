const Category = require("../../models/Category");

const updateCategory = async (req, res) => {
  try {
    const { CategoryId } = req.params;

    const updatedPage = await Category.findByIdAndUpdate(
      CategoryId,
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

module.exports =updateCategory