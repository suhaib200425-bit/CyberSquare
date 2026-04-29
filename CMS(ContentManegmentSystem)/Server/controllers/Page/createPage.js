const Page = require("../../models/Page");

// Create Page Controller
const createPage = async (req, res) => {
    try {
        const { title, slug, status } = req.body;

        // Basic validation
        if (!title || !slug || !status) {
            return res.status(400).json({ success:false,message: "Title is required" });
        }

        const newPage = new Page({
            title,
            slug,
            status,
            sections:[]
        });

        const savedPage = await newPage.save();

        res.status(201).json({
            success:true,
            message: "Page created successfully",
            data: savedPage
        });

    } catch (error) {
        res.status(500).json({
            success:false,
            message: "Error creating page",
            error: error.message
        });
    }
};

module.exports = createPage