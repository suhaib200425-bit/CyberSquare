const Page = require("../../models/Page");

const BuildingPages = async (req, res) => {
    try {

        const template = await ThemeTemplate.findOne({ checked: true })
        
        if (!template) return res.status(400).json({ success: false, message: "please Select Template" });
                

        const pages = await Page.find({theme:template._id})
            .select("title")
            .sort({ createdAt: -1 }) // latest first

        res.status(200).json({
            success: true,
            data: pages
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
};

module.exports = BuildingPages