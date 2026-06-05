const Post = require("../../models/Post");
const WEB = require("../../models/WEB");

const getPostPublished = async (req, res) => {
    try {
        const { website, category } = req.query;


        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 12;

        const skip = (page - 1) * limit;

        const web = await WEB.findOne({ website });

        if (!web) {
            return res.status(400).json({
                success: false,
                message: "Website Name not found",
            });
        }

        let query = {
            status: "Published",
            auther: web.admin,

        };
        if (category!=null) {
            console.log("category");
            console.log(category);
            query.category = category;
        }

        console.log("query");
        console.log(query);


        const totalPosts = await Post.countDocuments(query);

        let posts = await Post.find(query)
            .populate("category", "title")
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(limit);

        if (posts.length === 0) {
            let defaultQuery = { status: "Default" };
            if (category && category != null) {
              console.log("category");
            console.log(category);
                defaultQuery.category = category;
            }

            const defaultTotal = await Post.countDocuments(defaultQuery);

            const defaultPosts = await Post.find(defaultQuery)
                .populate("category", "title")
                .sort({ createdAt: -1 })
                .skip(skip)
                .limit(limit);

            return res.status(200).json({
                success: true,
                message: "Published posts not found, returning default posts",
                data: defaultPosts,
                pagination: {
                    currentPage: page,
                    totalPages: Math.ceil(defaultTotal / limit),
                    totalPosts: defaultTotal,
                    limit,
                },
            });
        }

        return res.status(200).json({
            success: true,
            data: posts,
            pagination: {
                currentPage: page,
                totalPages: Math.ceil(totalPosts / limit),
                totalPosts,
                limit,
            },
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error fetching post",
            error: error.message,
        });
    }
};


module.exports = getPostPublished