const Post = require("../../../models/Post");
const WEB = require("../../../models/WEB");

const getSearchPostsByQuery = async (req, res) => {
    try {
        let { page = 1, limit = 20, state = "Published", search = "" } = req.query;

        page = parseInt(page);
        limit = parseInt(limit);

        const activeTemplate = await WEB.findOne({
            admin: req.user.id
        });

        if (!activeTemplate) {
            return res.status(404).json({
                success: false,
                message: "No active template found"
            });
        }

        const skip = (page - 1) * limit;

        const matchQuery = {
            // auther: req.user.id,
            status: state,
            title: {
                $regex: search,
                $options: "i"
            }
        };

        const total = await Post.countDocuments(matchQuery);

        const posts = await Post.aggregate([
            {
                $match: matchQuery
            },
            {
                $addFields: {
                    startsWithSearch: {
                        $regexMatch: {
                            input: "$title",
                            regex: `^${search}`,
                            options: "i"
                        }
                    }
                }
            },
            {
                $lookup: {
                    from: "categories",
                    localField: "category",
                    foreignField: "_id",
                    as: "category"
                }
            },
            {
                $unwind: {
                    path: "$category",
                    preserveNullAndEmptyArrays: true
                }
            },
            {
                $lookup: {
                    from: "users",
                    localField: "auther",
                    foreignField: "_id",
                    as: "auther"
                }
            },
            {
                $unwind: {
                    path: "$auther",
                    preserveNullAndEmptyArrays: true
                }
            },
            {
                $sort: {
                    startsWithSearch: -1,
                    createdAt: -1
                }
            },
            {
                $skip: skip
            },
            {
                $limit: limit
            }
        ]);

        res.status(200).json({
            success: true,
            total,
            currentPage: page,
            totalPages: Math.ceil(total / limit),
            data: posts,
            router: "/posts-by-status"
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Server Error",
            error: err.message
        });
    }
};

module.exports = getSearchPostsByQuery;