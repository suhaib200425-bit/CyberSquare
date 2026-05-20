const FooterTemplate = require("../../models/FooterTemplate");

const getcheckedFooterTemplate = async (req, res) => {
  try {
    
    const footer = await FooterTemplate.findOne({checked:false});

    res.status(200).json({
      success: true,
      data: footer,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = getcheckedFooterTemplate;