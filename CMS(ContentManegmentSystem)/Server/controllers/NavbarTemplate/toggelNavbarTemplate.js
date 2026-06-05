const NavbarTemplate = require("../../models/NavbarTemplate");
const { findOne } = require("../../models/Post");
const WEB = require("../../models/WEB");

const toggelNavbarTemplate = async (req, res) => {
    try {
        const { NavbarId } = req.params;
        const admin = req.user
        if (admin.role !== "admin") {
            return res.status(404).json({ message: "Update with only for admin" });

        }
        const navbar = await NavbarTemplate.findById(NavbarId);

        if (!navbar) {
            return res.status(404).json({ message: "Navbar not found" });
        }

        const updateWeb = await WEB.findOneAndUpdate(
            { admin: admin.id },
            { navbar: NavbarId },
            { new: true }
        ).populate("navbar");

        res.status(200).json({
            success: true,
            data: updateWeb,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

module.exports = toggelNavbarTemplate;