const AuthTemplate = require("../../models/AuthTemplate");
const WEB = require("../../models/WEB");


const getallAuthTemplate = async (req, res) => {
  try {
    const admin = req.user
    const authtemapltes = await AuthTemplate.find().sort({ updatedAt: -1 });
    const activeAuth = await WEB.findOne({admin:admin.id}).populate("auth")

    res.status(200).json({
      success: true,
      data: authtemapltes,
      active:activeAuth
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