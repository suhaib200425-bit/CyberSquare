const Menu = require("../../models/Menu");
const WEB = require("../../models/WEB");

const getMenuswithOutToken = async (req, res) => {
    try {
        const { website } = req.query
        if (!website) {
            return res.status(404).json({
                success: false,
                message: "WebSite Is Not Be Found",
            });
        }
        const activetemplate = await WEB.findOne({ website })
        if (!activetemplate) {
            return res.status(404).json({
                success: false,
                message: "No active template found",
            });
        }
        const menus = await Menu.find({
            auther: activetemplate.admin,
            theme: activetemplate.theme
        })
            .populate("page", "title slug") // page details venel
            .sort({ updatedAt: -1 });

        res.json({
            success: true,
            data: menus
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = getMenuswithOutToken