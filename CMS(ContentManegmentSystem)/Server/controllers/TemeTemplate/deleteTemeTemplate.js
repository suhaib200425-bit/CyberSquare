const Category = require("../../models/Category");
const Menu = require("../../models/Menu");
const Page = require("../../models/Page");
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
        await Page.deleteMany({
            theme: req.params.TemeTemplateId,
        });

        await Category.deleteMany({
            theme: req.params.TemeTemplateId,
        });
        await Menu.deleteMany({
            theme: req.params.TemeTemplateId,
        });


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