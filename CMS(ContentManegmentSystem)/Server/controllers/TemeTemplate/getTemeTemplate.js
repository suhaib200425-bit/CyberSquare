const ThemeTemplate = require("../../models/ThemeTemplate");
const WEB = require("../../models/WEB");

// GET ALL USERS
const getTemeTemplate = async (req, res) => {

    try {
        const user = req.user

        const temeTemplate = await ThemeTemplate.find().sort({
            createdAt: -1
        });

        const activeTemplate = await WEB.findOne({ admin: user.id })

        res.status(200).json({
            success: true,
            count: temeTemplate.length,
            data: temeTemplate,
            active: activeTemplate
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: "server error",
            error: error.message
        });

    }

};

module.exports = getTemeTemplate