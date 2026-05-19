const Category = require("../../models/Category");
const ThemeTemplate = require("../../models/ThemeTemplate");

const getCategory = async (req, res) => {
    try {
        const { CategoryId } = req.params

        const template = await ThemeTemplate.findOne({ checked: true })

        if (!template) return res.status(400).json({ success: false, message: "please Select Template" });

        const category = await Category.findOne({ _id: CategoryId }).populate('parent')
        res.status(200).json({
            success: true,
            data: category
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            message: "server error",
            error:err.message
        });
    }
}

module.exports = getCategory