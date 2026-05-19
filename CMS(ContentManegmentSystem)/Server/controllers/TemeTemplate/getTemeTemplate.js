const ThemeTemplate = require("../../models/ThemeTemplate");

// GET ALL USERS
const getTemeTemplate = async (req, res) => {

    try {

        const temeTemplate = await ThemeTemplate.find().sort({
            createdAt: -1
        });

        res.status(200).json({
            success: true,
            count: temeTemplate.length,
            data: temeTemplate
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

module.exports = getTemeTemplate