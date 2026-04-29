const Category= require('../../models/Category')
const getCategoriesAndId = async (req, res) => {
    try {
        const categories = await Category.find()
            .sort({ createdAt: -1 }) // latest first
            .select("title");

        res.status(200).json({
            success: true,
            data: categories
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
}

module.exports =getCategoriesAndId