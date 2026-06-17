const PageCategory = require("../../models/PageCategory");
const ReactTemplate = require("../../models/ReactTemplate");

const updateReactTemplate = async (req, res) => {
  try {
    const { ReactTemplateId } = req.params;
    const { pageRefName } = req.query

    let existingRefPage = await PageCategory.findOne({ title: pageRefName })
    if (!existingRefPage)
      existingRefPage = await PageCategory.create({ title: pageRefName })

    const updatedTemplate = await ReactTemplate.findByIdAndUpdate(
        ReactTemplateId,
      {
        ...req.body,
        pageRef:existingRefPage._id
      },
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