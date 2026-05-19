const ThemeTemplate = require("../../models/ThemeTemplate");


// UPDATE USER
const updateThemeTemplate = async (req, res) => {

    try {
        const updatedUser = await ThemeTemplate.findByIdAndUpdate(
            req.params.TemeTemplateId,
            req.body,
            {
                new: true
            }
        );

        if (!updatedUser) {

            return res.status(404).json({
                success: false,
                message: "User not found"
            });

        }

        res.status(200).json({
            success: true,
            message: "User updated successfully",
            data: updatedUser
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: "server error",
            error: error.message
        });

    }

};


module.exports =updateThemeTemplate