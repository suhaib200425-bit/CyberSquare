const NavbarTemplate = require("../../models/NavbarTemplate");

const createNavbarTemplate = async (req, res) => {
    try {
        const admin = req.user
        if (admin.role != "admin")
            return res.status(404).json({ message: "Create only for admin" });

        const { name, navbar, props } = req.body;
        if (!name || !navbar) {
            res.status(400).json({
                success: false,
                message: 'name And navbar Feild Is requierd',
            });
        }
        const newNavbar = await  NavbarTemplate.create({ name, navbar, props,auther:admin.id });

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