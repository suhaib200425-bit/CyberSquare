const WEB = require("../../models/WEB");
const Post = require("../../models/Post");
const User = require("../../models/User");
const Visit = require("../../models/Visit");

const getTotalUsersPostsAndVisiters = async (req, res) => {
    try {
        const { website } = req.params;
        const web = await WEB.findOne({ website })
        if (!web) return res.status(404).json({
            success: false,
            message: "website not found"
        });
        // Today start
        const startOfDay = new Date();
        startOfDay.setHours(0, 0, 0, 0);

        // Today end
        const endOfDay = new Date();
        endOfDay.setHours(23, 59, 59, 999);

        // Total visits today
        const visitersCount = await Visit.countDocuments({
            web: web._id,
            visitedAt: {
                $gte: startOfDay,
                $lte: endOfDay
            }
        });

        const postsCount = await Post.countDocuments({
            auther: web.admin
        })
        const usersCount = await User.countDocuments({
            web: web._id
        })




        res.status(200).json({
            success: true,
            data: [
                { value: usersCount, label: "Active Users" },
                { value: postsCount, label: "Published Posts" },
                { value: visitersCount, label: "Today Users" }
            ]
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error fetching post",
            error: error.message
        });
    }
};

module.exports = getTotalUsersPostsAndVisiters