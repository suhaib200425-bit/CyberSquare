const AuthTemplate = require("../../models/AuthTemplate");
const WEB = require("../../models/WEB");

const toggelAuthTemplate = async (req, res) => {
    try {
        const { AuthTemplateId } = req.params;
        const admin = req.user
        let website = await WEB.findOne({ admin: admin.id, auth: AuthTemplateId }).populate("auth")
        if (!website) {
            website = await WEB.findOneAndUpdate({ admin: admin.id }, { auth: AuthTemplateId }, { new: true }).populate("auth")
        }


        res.status(200).json({
            success: true,
            data: website,
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