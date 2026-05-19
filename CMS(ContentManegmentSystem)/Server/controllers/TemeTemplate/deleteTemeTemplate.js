const ThemeTemplate = require("../../models/ThemeTemplate");

// DELETE USER
const deleteThemeTemplate = async (req, res) => {

    try {

        const deletedthemetemplate = await ThemeTemplate.findByIdAndDelete(
            req.params.TemeTemplateId
        );

        if (!deletedthemetemplate) {

            return res.status(404).json({
                success: false,
                message: "Theme not found"
            });

        }

        res.status(200).json({
            success: true,
            message: "User deleted successfully"
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

module.exports = deleteThemeTemplate