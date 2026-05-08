const AuthTemplate = require("../../models/AuthTemplate");

const toggelAuthTemplate = async (req, res) => {
    try {
        const { AuthTemplateId } = req.params;

        const auth = await AuthTemplate.findById(AuthTemplateId);
        if (!auth) {
            return res.status(404).json({ message: "authTemplate not found" });
        }
        // 🔥 ellam false aakkuka
        await AuthTemplate.updateMany({}, { checked: false });

        // 🔥 selected one true aakkuka
        auth.checked = true;

        await auth.save();

        res.status(200).json({
            success: true,
            data: auth,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "server error",
            error: error.message
        });
    }
};

module.exports = toggelAuthTemplate;