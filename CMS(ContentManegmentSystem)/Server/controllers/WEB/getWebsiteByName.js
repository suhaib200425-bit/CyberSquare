const Page = require("../../models/Page");
const WEB = require("../../models/WEB");

const getWebsiteByName = async (req, res) => {
  try {
    const { WebName } = req.params
    const websites = await WEB.findOne({ website: WebName })

      // ADMIN POPULATE
      .populate({
        path: "admin",
      })

      // NAVBAR POPULATE
      .populate({
        path: "navbar",
      })

      // THEME POPULATE
      .populate({
        path: "theme",
      })

      // FOOTER POPULATE
      .populate({
        path: "footer",
      });
    const pages = await Page.find({
      theme: websites.theme._id,
      auther: websites.admin._id
    }).select("slug pageName _id");
    
    res.status(200).json({
      success: true,
      count: websites.length,
      data: websites,
      pages
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }
};

module.exports = {
  getWebsiteByName
};