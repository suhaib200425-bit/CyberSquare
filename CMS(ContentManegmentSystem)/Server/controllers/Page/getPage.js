const Page = require("../../models/Page");
const WEB = require("../../models/WEB");

const getPage = async (req, res) => {
    try {
        const { PageId } = req.params
        const admin = req.user
        let page
        console.log(req.params);
        if (PageId) page = await Page.findOne({ _id: PageId })
        const WEBSITE = await WEB.findOne({ admin: admin.id })

        const allPages = await Page.find({
            theme: WEBSITE.theme,
            auther: WEBSITE.admin,
        })
            .sort({ updatedAt: -1 })
            .select("title status");
        res.status(200).json({
            success: true,
            data: page,
            pages: allPages
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
}

module.exports = getPage