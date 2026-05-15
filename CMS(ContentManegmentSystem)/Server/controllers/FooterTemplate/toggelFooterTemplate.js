const FooterTemplate = require("../../models/FooterTemplate");

const toggelFooterTemplate = async (req, res) => {
    try {
        const { FooterId } = req.params;

        const footer = await FooterTemplate.findById(FooterId);
        if (!footer) {
            return res.status(404).json({ message: "Footer not found" });
        }
        // 🔥 ellam false aakkuka
        await FooterTemplate.updateMany({}, { checked: false });

        // 🔥 selected one true aakkuka
        footer.checked = true;

        await footer.save();

        res.status(200).json({
            success: true,
            data: footer,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

module.exports = toggelFooterTemplate;