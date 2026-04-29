const Template = require("../../models/Template");

const deleteTemplate = async (req, res) => {
    try {
        const { templateId } = req.params;

        const deleted = await Template.findByIdAndDelete(templateId);

        if (!deleted) {
            return res.status(404).json({
                success: false,
                message: "Template not found"
            });
        }

        res.status(200).json({
            success: true,
            data:deleted,
            message: "Template deleted successfully"
        });


    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server error",
            error: error.message
        });
    }
};

module.exports = deleteTemplate;
