const Page = require("../../models/Page");
const ThemeTemplate = require("../../models/ThemeTemplate");

// Create Page Controller
const createPage = async (req, res) => {
    try {
        const { title, slug, status } = req.body;

        // Basic validation
        if (!title || !slug || !status) {
            return res.status(400).json({ success: false, message: "Title is required" });
        }

        const template = await ThemeTemplate.findOne({ checked: true })

        if (!template) return res.status(400).json({ success: false, message: "please Select Template" });
        const existPageTitle = await Page.findOne({
            theme: template._id,
            title
        });

        if(existPageTitle) return res.status(400).json({ success: false, message: "Page Title already used" });
        const existPageSlug = await Page.findOne({
            theme: template._id,
            slug
        });
        if(existPageSlug) return res.status(400).json({ success: false, message: "Page Router already used" });

        const newPage = new Page({
            title,
            slug,
            status,
            sections: [],
            theme: template._id
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