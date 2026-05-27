const Page = require("../models/Page");
const Post = require("../models/Post");
const ThemeTemplate = require("../models/ThemeTemplate");
const User = require("../models/User");
const Visit = require("../models/Visit");
const WEB = require("../models/WEB");


exports.dashboard = async (req, res) => {
    try {
        const user = req.user
        //ACTIVE TEMPLATE
        const WEBACTIVE = await WEB({admin:user.id})
        // TOTAL POSTS
        const posts = await Post.countDocuments({ auther: WEBACTIVE.admin });
        // TOTAL PAGES
        const pages = await Page.countDocuments({theme:WEBACTIVE.theme,auther:WEBACTIVE.admin});
        // TOTAL USERS
        const users = await User.countDocuments({web:WEBACTIVE.admin});
        // Today start
        const startOfDay = new Date();
        startOfDay.setHours(0, 0, 0, 0);

        // Today end
        const endOfDay = new Date();
        endOfDay.setHours(23, 59, 59, 999);

        // Total visits today
        const totalVisitors = await Visit.countDocuments({
            visitedAt: {
                $gte: startOfDay,
                $lte: endOfDay
            }
        });

        const currentTime = new Date();


        // 🔥 Next full hour
        const endTime = new Date(currentTime);

        endTime.setMinutes(0);
        endTime.setSeconds(0);
        endTime.setMilliseconds(0);

        endTime.setHours(endTime.getHours() + 1);


        // 🔥 Previous 24hr
        const startTime = new Date(
            endTime.getTime() - 24 * 60 * 60 * 1000
        );


        // Get visits between range
        const visits = await Visit.find({
            visitedAt: {
                $gte: startTime,
                $lte: endTime
            }
        });


        // Create 24hr slots
        const hourlyData = Array.from(
            { length: 24 },
            (_, index) => {

                const slotTime = new Date(
                    startTime.getTime() +
                    index * 60 * 60 * 1000
                );

                const hour = slotTime.getHours();

                const hour12 =
                    hour % 12 === 0 ? 12 : hour % 12;

                const ampm =
                    hour < 12 ? "AM" : "PM";

                return {
                    time: `${hour12} ${ampm}`,
                    users: 0,
                    start: slotTime.getTime(),
                    end:
                        slotTime.getTime() +
                        60 * 60 * 1000
                };
            }
        );


        // Count visits
        visits.forEach((visit) => {

            const visitTime = new Date(
                visit.visitedAt
            ).getTime();

            const slotIndex = hourlyData.findIndex(
                (slot) =>
                    visitTime >= slot.start &&
                    visitTime < slot.end
            );

            if (slotIndex !== -1) {
                hourlyData[slotIndex].users += 1;
            }
        });


        // Remove extra fields
        const finalData = hourlyData.map(
            ({ start, end, ...rest }) => rest
        );

        // console.log(finalData);


        // ✅ Success response
        res.status(200).json({
            message: "DASHBOARD DATA",
            users,
            posts,
            pages,
            totalVisitors,
            data: finalData
        });


    } catch (err) {
        res.status(500).json({ message: "Server error", error: err.message });
    }
};
