const Page = require("../../models/Page");
const WEB = require("../../models/WEB");

const getPageById = async (req, res) => {
    try {
        const { PageId } = req.params
        console.log(req.params);
        const page = await Page.findById(PageId)

        res.status(200).json({
            success: true,
            data: page
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
}

module.exports =getPageById