

const Page = require("../../../models/Page"); // model import
const WEB = require("../../../models/WEB");

const getAllPageTitles = async (req, res) => {
    try {

        const admin = req.user
        console.log(admin);

        const WEBSITE = await WEB.findOne({ admin: admin.id })


        const allPages = await Page.find({
            theme: WEBSITE.theme,
            auther: WEBSITE.admin,
        })
            .sort({ updatedAt: -1 })
            .select("title");



        res.status(200).json({
            success: true,
            message: "successfully loaded",
            data: allPages,
        });

    } catch (error) {
        res.status(500).json({ success: false, message: "Server error", error: error.response?.data || error.message });
    }
};

module.exports = getAllPageTitles;