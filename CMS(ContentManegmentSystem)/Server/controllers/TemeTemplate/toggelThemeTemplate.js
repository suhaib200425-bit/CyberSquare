const Category = require("../../models/Category");
const Menu = require("../../models/Menu");
const Page = require("../../models/Page");
const WEB = require("../../models/WEB");

const toggelThemeTemplate = async (req, res) => {
    try {
        const { TemeTemplateId } = req.params;
        const admin = req.user;

        const pages = await Page.find({ theme: TemeTemplateId, auther: null });
        const menus = await Menu.find({ theme: TemeTemplateId, auther: null });

        if (
            pages.length === 0 &&
            menus.length === 0
        ) {
            return res.status(404).json({
                message: "Page and Menu not found",
            });
        }

        // Pages
        for (const item of pages) {
            const existPage = await Page.findOne({
                title: item.title,
                auther: admin.id,
                theme: TemeTemplateId
            });
            const data = item.toObject();

            delete data._id;
            delete data.__v;
            delete data.createdAt;
            delete data.updatedAt;

            if (!existPage) {
                await Page.create({
                    ...data,
                    auther: admin.id,
                });
            } else {
                await Page.findByIdAndUpdate(
                    existPage._id, {
                    sections: data.sections
                }, {
                    new: true,          // updated document return cheyyum
                    runValidators: true
                }
                );
            }
        }

        // Menus
        for (const item of menus) {


            const existMenu = await Menu.findOne({
                title: item.title,
                theme: TemeTemplateId,
                auther: admin.id,
            });
            console.log("existMenu");
            console.log(existMenu);
            if (!existMenu) {
                const data = item.toObject();

                delete data._id;
                delete data.__v;
                delete data.createdAt;
                delete data.updatedAt;

                await Menu.create({
                    ...data,
                    auther: admin.id,
                });
            }
        }
        console.log("okey");

        const selected = await WEB.findOneAndUpdate(
            { admin: admin.id },
            { theme: TemeTemplateId },
            { new: true }
        );

        res.status(200).json({
            success: true,
            data: selected,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "server error",
            error: error.message,
        });
    }
};

module.exports = toggelThemeTemplate;