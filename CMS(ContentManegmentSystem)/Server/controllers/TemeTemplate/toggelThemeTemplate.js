
const ThemeTemplate = require("../../models/ThemeTemplate");

const toggelThemeTemplate = async (req, res) => {
    try {
        const { TemeTemplateId } = req.params;

        const theme = await ThemeTemplate.findById(TemeTemplateId);
        if (!theme) {
            return res.status(404).json({ message: "theme not found" });
        }
        // 🔥 ellam false aakkuka
        await ThemeTemplate.updateMany({}, { checked: false });

        // 🔥 selected one true aakkuka
        theme.checked = true;

        await theme.save();

        res.status(200).json({
            success: true,
            data: theme,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

module.exports = toggelThemeTemplate;