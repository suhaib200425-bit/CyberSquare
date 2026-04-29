const Page = require("../../models/Page"); // model import

const deletePage = async (req, res) => {
    try {
        const { PageId } = req.params;

        const deletedPage = await Page.findByIdAndDelete(PageId);

        if (!deletedPage) {
            return res.status(404).json({ success: false, message: "Page not found" });
        }

        res.status(200).json({
            success: true,
            message: "Page deleted successfully",
            data: deletedPage
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Server error", error: error.response?.data || error.message });
    }
};

module.exports = deletePage;