const Page = require("../../models/Page"); // model import
const WEB = require("../../models/WEB");

const getMainPageAndOtherPages = async (req, res) => {
    try {

        const admin = req.user

        const WEBSITE = await WEB.findOne({ admin: admin.id })
        const latestUpdatedPage = await Page.findOne({
            status: "Published", theme: WEBSITE.theme, auther: WEBSITE.admin
        }).sort({ updatedAt: -1 });
        if (!latestUpdatedPage) {
            return res.status(400).json({ success: false, message: "Post Is Not Found" })
        }

        // const allPages = await Page.find({ theme: WEBSITE.theme, auther: WEBSITE.admin }).sort({ updatedAt: -1, status: "Published" }).select("title");

        const allPages = await Page.find({
            theme: WEBSITE.theme,
            auther: WEBSITE.admin,
        })
            .sort({ updatedAt: -1 })
            .select("title status");

        const sortedPages = [
            ...allPages.filter(page => page.status === "Published"),
            ...allPages.filter(page => page.status !== "Published"),
        ];

        res.status(200).json({
            success: true,
            message: "successfully loaded",
            data: latestUpdatedPage,
            pages: sortedPages
        });

    } catch (error) {
        res.status(500).json({ success: false, message: "Server error", error: error.response?.data || error.message });
    }
};

module.exports = getMainPageAndOtherPages;