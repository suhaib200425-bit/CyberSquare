const AuthTemplate = require("../../models/AuthTemplate");

const createAuthTemplate = async (req, res) => {
    try {
        const { name, template, checked,props,imageModel } = req.body;
        if (!name || !template) {
            res.status(400).json({
                success: false,
                message: 'name And navbar Feild Is requierd',
            });
        }
        const newAuth = new AuthTemplate({ name, template, props,imageModel ,checked: checked || false });
        await newAuth.save();

        res.status(201).json({
            success: true,
            data: newAuth,
        });
        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

module.exports = createAuthTemplate;