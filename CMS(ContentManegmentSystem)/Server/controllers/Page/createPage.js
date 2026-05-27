const Page = require("../../models/Page");
const ThemeTemplate = require("../../models/ThemeTemplate");
const WEB = require("../../models/WEB");

// Create Page Controller
const createPage = async (req, res) => {
    try {
        const { title, slug, status } = req.body;

        // Basic validation
        if (!title || !slug || !status) {
            return res.status(400).json({ success: false, message: "Title is required" });
        }

        const activetemplate = await WEB.findOne({ admin: req.user.id })
        if (!activetemplate) {
            return res.status(404).json({
                success: false,
                message: "No active template found",
            });
        }

        const existPageTitle = await Page.findOne({
            theme: activetemplate.theme,
            auther: activetemplate.admin,
            title
        });

        if (existPageTitle) return res.status(400).json({ success: false, message: "Page Title already used" });
        const existPageSlug = await Page.findOne({
            theme: activetemplate.theme,
            auther: activetemplate.admin,
            slug
        });
        if (existPageSlug) return res.status(400).json({ success: false, message: "Page Router already used" });

        const newPage = new Page({
            title,
            slug,
            status,
            sections: [],
            theme: activetemplate.theme,
            auther: activetemplate.admin
        });

        const savedPage = await newPage.save();

        res.status(201).json({
            success: true,
            message: "Page created successfully",
            data: savedPage
        });

    } catch (error) {
        res.status(500).json({

            success: false,
            message: "Server error",
            error: error.message
        });
    }
};

module.exports = createPage