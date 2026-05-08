const AuthTemplate = require("../../models/AuthTemplate");

const updateAuthTemplate = async (req, res) => {
  try {
    // const { name, navbar } = req.body;

    const updated = await AuthTemplate.findByIdAndUpdate(
      req.params.AuthTemplateId,
      req.body ,
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ message: "Navbar not found" });
    }

    res.status(200).json({
      success: true,
      data: updated,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = updateAuthTemplate;