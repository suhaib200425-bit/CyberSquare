const Category = require("../../models/Category");

const getCategory = async (req, res) => {
    try {
        const { CategoryId } = req.params
        const category = await Category.findOne({ _id: CategoryId }).populate('parent')
        res.status(200).json({
            success: true,
            data: category
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
}

module.exports = getCategory