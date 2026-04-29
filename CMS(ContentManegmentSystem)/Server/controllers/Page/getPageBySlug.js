const Page = require("../../models/Page");

const getPageBySlug = async (req, res) => {
  try {
    const { title } = req.params;

    const page = await Page.findOne({ title })

    if (!page) {
      return res.status(404).json({
        success: false,
        message: "Page not found"
      });
    }


    res.status(200).json({
      success: true,
      data: page
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      error:error.message,
      message: "Error fetching post"
    });
  }
};

module.exports = getPageBySlug