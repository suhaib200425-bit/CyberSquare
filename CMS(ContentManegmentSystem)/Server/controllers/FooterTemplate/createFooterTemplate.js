const FooterTemplate = require("../../models/FooterTemplate");

const createFooterTemplate = async (req, res) => {
    try {
        const { name, footer, props,checked } = req.body;
        if (!name || !footer) {
            res.status(400).json({
                success: false,
                message: 'name And footer Feild Is requierd',
            });
        }
        const newFooter = new FooterTemplate({ name, footer, props,checked: checked || false });
        await newFooter.save();

        res.status(201).json({
            success: true,
            data: newFooter,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

module.exports = createFooterTemplate;