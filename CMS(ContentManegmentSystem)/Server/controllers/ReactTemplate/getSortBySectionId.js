const { default: mongoose } = require("mongoose");
const PageCategory = require("../../models/PageCategory");
const ReactTemplate = require("../../models/ReactTemplate");

const getSortBySectionId = async (req, res) => {
    try {
        // query params
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 20;
        const sectionRef = req.query.section || ''

        const skip = (page - 1) * limit;
        let filter = {}
        if (sectionRef && mongoose.Types.ObjectId.isValid(sectionRef)) {
            const pageRefrence = await PageCategory.findById(sectionRef);

            if (pageRefrence) {
                filter.pageRef = pageRefrence._id;
            }
        }
        // data fetch
        const data = await ReactTemplate.find(filter)
            .sort({ updatedAt: -1 }) // latest first
            .skip(skip)
            .limit(limit);

        // total count
        const total = await ReactTemplate.countDocuments(filter);

        res.json({
            success: true,
            page,
            totalPages: Math.ceil(total / limit),
            totalItems: total,
            data,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

module.exports = getSortBySectionId;