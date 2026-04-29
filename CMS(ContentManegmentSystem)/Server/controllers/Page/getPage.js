const Page = require("../../models/Page");

const getPage = async (req, res) => {
    try {
        const { PageId } = req.params
        const { PageTitle } = req.params
        let page
             console.log( req.params);
        if (PageId) page = await Page.findOne({ _id: PageId })
        if (PageTitle){
             page = await Page.findOne({ title: PageTitle })
             
        }
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

module.exports = getPage