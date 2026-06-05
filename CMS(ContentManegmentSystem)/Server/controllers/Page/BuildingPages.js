const Page = require("../../models/Page");

const BuildingPages = async (req, res) => {
    try {

        const activetemplate = await WEB.findOne({ admin: req.user.id })
            if (!activetemplate) {
              return res.status(404).json({
                success: false,
                message: "No active template found",
              });
            }

        const pages = await Page.find({theme:activetemplate.theme,auther:activetemplate.admin})
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