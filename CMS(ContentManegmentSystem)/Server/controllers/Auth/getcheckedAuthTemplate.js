const AuthTemplate = require("../../models/AuthTemplate");

const getcheckedAuthTemplate = async (req, res) => {
  try {
    
    const navbar = await AuthTemplate.findOne({checked:true});

    res.status(200).json({
      success: true,
      data: navbar,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
      message:"server error"
    });
  }
};

module.exports = getcheckedAuthTemplate;