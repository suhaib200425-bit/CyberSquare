
const WEB = require("../../../models/WEB");
const Post = require("../../../models/Post");
const Category = require("../../../models/Category");

const getPopularCategoryPostsAndHotPosts = async (req, res) => {
    try {
        const { website } = req.params;
        const { limit } = req.query;
        const web = await WEB.findOne({ website })
        if (!web) return res.status(404).json({
            success: false,
            message: "website not found"
        });
        // Top 2 categories
        const categories = await Category.find({ auther: web.admin })
            .sort({ createdAt: -1 })
            .limit(2);
        const categoryIdsToExclude = categories.map(cat => cat._id);

        const hotposts = await Post.find({
            category: { $nin: categoryIdsToExclude },
             auther: web.admin,
        })
            .populate("category")
            .select("-content -updatedAt -__v")
            .sort({ createdAt: 1 })
            .limit(6);

        const caregoryWisePosts = await Promise.all(
            categories.map(async (category) => {
                const posts = await Post.find({
                    auther: web.admin,
                    category: category._id,
                })
                    .populate("category")
                    .select("-content -updatedAt -__v")
                    .sort({ createdAt: 1 })
                    .limit(4);

                return {
                    category: category.title,
                    posts: posts.map((post) => ({
                        banner: post.banner,
                        title: post.title,
                        excerpt: post.excerpt
                    })),
                };
            })
        );

        return res.status(200).json({
            success: true,
            hotposts,
            caregoryWisePosts,
        });


    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error fetching post",
            error: error.message
        });
    }
};

module.exports = getPopularCategoryPostsAndHotPosts