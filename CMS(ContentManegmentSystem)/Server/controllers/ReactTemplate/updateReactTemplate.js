const ReactTemplate = require("../../models/ReactTemplate");

const updateReactTemplate = async (req, res) => {
  try {
    const { ReactTemplateId } = req.params;

    const updatedTemplate = await ReactTemplate.findByIdAndUpdate(
      ReactTemplateId,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedTemplate) {
      return res.status(404).json({
        success: false,
        message: "Template not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Template updated successfully",
      data: updatedTemplate,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


module.exports = updateReactTemplate;