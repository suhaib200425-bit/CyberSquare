const NavbarTemplate = require("../../models/NavbarTemplate");

const createNavbarTemplate = async (req, res) => {
    try {
        const { name, navbar, checked } = req.body;
        if (!name || !navbar) {
            res.status(400).json({
                success: false,
                message: 'name And navbar Feild Is requierd',
            });
        }
        const newNavbar = new NavbarTemplate({ name, navbar, checked: checked || false });
        await newNavbar.save();

        res.status(201).json({
            success: true,
            data: newNavbar,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

module.exports = createNavbarTemplate;