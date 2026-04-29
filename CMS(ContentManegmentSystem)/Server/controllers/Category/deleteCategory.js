const Category = require("../../models/Category"); // model import

const deleteCategory = async (req, res) => {
    try {
        const { CategoryId } = req.params;

        const deletedCategory = await Category.findByIdAndDelete(CategoryId);

        if (!deletedCategory) {
            return res.status(404).json({ success: false, message: "Category not found" });
        }

        res.status(200).json({
            success: true,
            message: "Category deleted successfully",
            data: deletedCategory
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Server error", error: error.response?.data || error.message });
    }
};

module.exports = deleteCategory;