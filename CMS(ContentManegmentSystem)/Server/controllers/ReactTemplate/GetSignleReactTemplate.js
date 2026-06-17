const ReactTemplate = require("../../models/ReactTemplate");

 getSingleTemplate = async (req, res) => {
  try {
    const { ReactTemplateId } = req.params;

    const template = await ReactTemplate.findById(ReactTemplateId).populate("pageRef","title");

    if (!template) {
      return res.status(404).json({
        success: false,
        message: "Template not found",
      });
    }

    res.status(200).json({
      success: true,
      data: template,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message:"server error",
      error: error.message,
    });
  }
};

module.exports =  getSingleTemplate;
