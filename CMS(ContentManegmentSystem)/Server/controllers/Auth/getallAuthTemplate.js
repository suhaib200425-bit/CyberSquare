const AuthTemplate = require("../../models/AuthTemplate");


const getallAuthTemplate = async (req, res) => {
  try {
    const authtemapltes = await AuthTemplate.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      data: authtemapltes,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "server error",
      error: error.message,
    });
  }
};

module.exports = getallAuthTemplate;