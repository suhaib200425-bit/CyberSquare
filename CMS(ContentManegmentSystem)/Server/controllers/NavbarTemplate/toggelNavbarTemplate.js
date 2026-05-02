const NavbarTemplate = require("../../models/NavbarTemplate");

const toggelNavbarTemplate = async (req, res) => {
    try {
        const { NavbarId } = req.params;

        const navbar = await NavbarTemplate.findById(NavbarId);
        if (!navbar) {
            return res.status(404).json({ message: "Navbar not found" });
        }
        // 🔥 ellam false aakkuka
        await NavbarTemplate.updateMany({}, { checked: false });

        // 🔥 selected one true aakkuka
        navbar.checked = true;

        await navbar.save();

        res.status(200).json({
            success: true,
            data: navbar,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

module.exports = toggelNavbarTemplate;